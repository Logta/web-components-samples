import hS, { useState as nE } from "react";
import N2 from "react-dom";
var xg = { exports: {} }, cp = {};
var z2;
function uE() {
  if (z2) return cp;
  z2 = 1;
  var L = /* @__PURE__ */ Symbol.for("react.transitional.element"), Pt = /* @__PURE__ */ Symbol.for("react.fragment");
  function Ft(x, te, ge) {
    var Al = null;
    if (ge !== void 0 && (Al = "" + ge), te.key !== void 0 && (Al = "" + te.key), "key" in te) {
      ge = {};
      for (var K in te)
        K !== "key" && (ge[K] = te[K]);
    } else ge = te;
    return te = ge.ref, {
      $$typeof: L,
      type: x,
      key: Al,
      ref: te !== void 0 ? te : null,
      props: ge
    };
  }
  return cp.Fragment = Pt, cp.jsx = Ft, cp.jsxs = Ft, cp;
}
var ip = {};
var D2;
function cE() {
  return D2 || (D2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function L(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === Ge ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case me:
          return "Fragment";
        case La:
          return "Profiler";
        case It:
          return "StrictMode";
        case Nl:
          return "Suspense";
        case Ke:
          return "SuspenseList";
        case et:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case Bl:
            return "Portal";
          case zl:
            return j.displayName || "Context";
          case je:
            return (j._context.displayName || "Context") + ".Consumer";
          case ga:
            var k = j.render;
            return j = j.displayName, j || (j = k.displayName || k.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case Bt:
            return k = j.displayName || null, k !== null ? k : L(j.type) || "Memo";
          case cl:
            k = j._payload, j = j._init;
            try {
              return L(j(k));
            } catch {
            }
        }
      return null;
    }
    function Pt(j) {
      return "" + j;
    }
    function Ft(j) {
      try {
        Pt(j);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var tt = k.error, lt = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return tt.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          lt
        ), Pt(j);
      }
    }
    function x(j) {
      if (j === me) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === cl)
        return "<...>";
      try {
        var k = L(j);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function te() {
      var j = _t.A;
      return j === null ? null : j.getOwner();
    }
    function ge() {
      return Error("react-stack-top-frame");
    }
    function Al(j) {
      if (Ot.call(j, "key")) {
        var k = Object.getOwnPropertyDescriptor(j, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function K(j, k) {
      function tt() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      tt.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: tt,
        configurable: !0
      });
    }
    function Ie() {
      var j = L(this.type);
      return Q[j] || (Q[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function Hl(j, k, tt, lt, He, wa) {
      var ye = tt.ref;
      return j = {
        $$typeof: Me,
        type: j,
        key: k,
        props: tt,
        _owner: lt
      }, (ye !== void 0 ? ye : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: Ie
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: He
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: wa
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function Vn(j, k, tt, lt, He, wa) {
      var ye = k.children;
      if (ye !== void 0)
        if (lt)
          if (xl(ye)) {
            for (lt = 0; lt < ye.length; lt++)
              ot(ye[lt]);
            Object.freeze && Object.freeze(ye);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else ot(ye);
      if (Ot.call(k, "key")) {
        ye = L(j);
        var Ja = Object.keys(k).filter(function(Jf) {
          return Jf !== "key";
        });
        lt = 0 < Ja.length ? "{key: someKey, " + Ja.join(": ..., ") + ": ...}" : "{key: someKey}", rt[ye + lt] || (Ja = 0 < Ja.length ? "{" + Ja.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          lt,
          ye,
          Ja,
          ye
        ), rt[ye + lt] = !0);
      }
      if (ye = null, tt !== void 0 && (Ft(tt), ye = "" + tt), Al(k) && (Ft(k.key), ye = "" + k.key), "key" in k) {
        tt = {};
        for (var Sa in k)
          Sa !== "key" && (tt[Sa] = k[Sa]);
      } else tt = k;
      return ye && K(
        tt,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), Hl(
        j,
        ye,
        tt,
        te(),
        He,
        wa
      );
    }
    function ot(j) {
      xt(j) ? j._store && (j._store.validated = 1) : typeof j == "object" && j !== null && j.$$typeof === cl && (j._payload.status === "fulfilled" ? xt(j._payload.value) && j._payload.value._store && (j._payload.value._store.validated = 1) : j._store && (j._store.validated = 1));
    }
    function xt(j) {
      return typeof j == "object" && j !== null && j.$$typeof === Me;
    }
    var Oe = hS, Me = /* @__PURE__ */ Symbol.for("react.transitional.element"), Bl = /* @__PURE__ */ Symbol.for("react.portal"), me = /* @__PURE__ */ Symbol.for("react.fragment"), It = /* @__PURE__ */ Symbol.for("react.strict_mode"), La = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.consumer"), zl = /* @__PURE__ */ Symbol.for("react.context"), ga = /* @__PURE__ */ Symbol.for("react.forward_ref"), Nl = /* @__PURE__ */ Symbol.for("react.suspense"), Ke = /* @__PURE__ */ Symbol.for("react.suspense_list"), Bt = /* @__PURE__ */ Symbol.for("react.memo"), cl = /* @__PURE__ */ Symbol.for("react.lazy"), et = /* @__PURE__ */ Symbol.for("react.activity"), Ge = /* @__PURE__ */ Symbol.for("react.client.reference"), _t = Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = Object.prototype.hasOwnProperty, xl = Array.isArray, il = console.createTask ? console.createTask : function() {
      return null;
    };
    Oe = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var O, Q = {}, Z = Oe.react_stack_bottom_frame.bind(
      Oe,
      ge
    )(), ct = il(x(ge)), rt = {};
    ip.Fragment = me, ip.jsx = function(j, k, tt) {
      var lt = 1e4 > _t.recentlyCreatedOwnerStacks++;
      return Vn(
        j,
        k,
        tt,
        !1,
        lt ? Error("react-stack-top-frame") : Z,
        lt ? il(x(j)) : ct
      );
    }, ip.jsxs = function(j, k, tt) {
      var lt = 1e4 > _t.recentlyCreatedOwnerStacks++;
      return Vn(
        j,
        k,
        tt,
        !0,
        lt ? Error("react-stack-top-frame") : Z,
        lt ? il(x(j)) : ct
      );
    };
  })()), ip;
}
var O2;
function iE() {
  return O2 || (O2 = 1, process.env.NODE_ENV === "production" ? xg.exports = uE() : xg.exports = cE()), xg.exports;
}
var wf = iE(), qg = { exports: {} }, op = {}, Yg = { exports: {} }, rS = {};
var M2;
function oE() {
  return M2 || (M2 = 1, (function(L) {
    function Pt(O, Q) {
      var Z = O.length;
      O.push(Q);
      t: for (; 0 < Z; ) {
        var ct = Z - 1 >>> 1, rt = O[ct];
        if (0 < te(rt, Q))
          O[ct] = Q, O[Z] = rt, Z = ct;
        else break t;
      }
    }
    function Ft(O) {
      return O.length === 0 ? null : O[0];
    }
    function x(O) {
      if (O.length === 0) return null;
      var Q = O[0], Z = O.pop();
      if (Z !== Q) {
        O[0] = Z;
        t: for (var ct = 0, rt = O.length, j = rt >>> 1; ct < j; ) {
          var k = 2 * (ct + 1) - 1, tt = O[k], lt = k + 1, He = O[lt];
          if (0 > te(tt, Z))
            lt < rt && 0 > te(He, tt) ? (O[ct] = He, O[lt] = Z, ct = lt) : (O[ct] = tt, O[k] = Z, ct = k);
          else if (lt < rt && 0 > te(He, Z))
            O[ct] = He, O[lt] = Z, ct = lt;
          else break t;
        }
      }
      return Q;
    }
    function te(O, Q) {
      var Z = O.sortIndex - Q.sortIndex;
      return Z !== 0 ? Z : O.id - Q.id;
    }
    if (L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ge = performance;
      L.unstable_now = function() {
        return ge.now();
      };
    } else {
      var Al = Date, K = Al.now();
      L.unstable_now = function() {
        return Al.now() - K;
      };
    }
    var Ie = [], Hl = [], Vn = 1, ot = null, xt = 3, Oe = !1, Me = !1, Bl = !1, me = !1, It = typeof setTimeout == "function" ? setTimeout : null, La = typeof clearTimeout == "function" ? clearTimeout : null, je = typeof setImmediate < "u" ? setImmediate : null;
    function zl(O) {
      for (var Q = Ft(Hl); Q !== null; ) {
        if (Q.callback === null) x(Hl);
        else if (Q.startTime <= O)
          x(Hl), Q.sortIndex = Q.expirationTime, Pt(Ie, Q);
        else break;
        Q = Ft(Hl);
      }
    }
    function ga(O) {
      if (Bl = !1, zl(O), !Me)
        if (Ft(Ie) !== null)
          Me = !0, Nl || (Nl = !0, _t());
        else {
          var Q = Ft(Hl);
          Q !== null && il(ga, Q.startTime - O);
        }
    }
    var Nl = !1, Ke = -1, Bt = 5, cl = -1;
    function et() {
      return me ? !0 : !(L.unstable_now() - cl < Bt);
    }
    function Ge() {
      if (me = !1, Nl) {
        var O = L.unstable_now();
        cl = O;
        var Q = !0;
        try {
          t: {
            Me = !1, Bl && (Bl = !1, La(Ke), Ke = -1), Oe = !0;
            var Z = xt;
            try {
              e: {
                for (zl(O), ot = Ft(Ie); ot !== null && !(ot.expirationTime > O && et()); ) {
                  var ct = ot.callback;
                  if (typeof ct == "function") {
                    ot.callback = null, xt = ot.priorityLevel;
                    var rt = ct(
                      ot.expirationTime <= O
                    );
                    if (O = L.unstable_now(), typeof rt == "function") {
                      ot.callback = rt, zl(O), Q = !0;
                      break e;
                    }
                    ot === Ft(Ie) && x(Ie), zl(O);
                  } else x(Ie);
                  ot = Ft(Ie);
                }
                if (ot !== null) Q = !0;
                else {
                  var j = Ft(Hl);
                  j !== null && il(
                    ga,
                    j.startTime - O
                  ), Q = !1;
                }
              }
              break t;
            } finally {
              ot = null, xt = Z, Oe = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? _t() : Nl = !1;
        }
      }
    }
    var _t;
    if (typeof je == "function")
      _t = function() {
        je(Ge);
      };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), xl = Ot.port2;
      Ot.port1.onmessage = Ge, _t = function() {
        xl.postMessage(null);
      };
    } else
      _t = function() {
        It(Ge, 0);
      };
    function il(O, Q) {
      Ke = It(function() {
        O(L.unstable_now());
      }, Q);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, L.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Bt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return xt;
    }, L.unstable_next = function(O) {
      switch (xt) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = xt;
      }
      var Z = xt;
      xt = Q;
      try {
        return O();
      } finally {
        xt = Z;
      }
    }, L.unstable_requestPaint = function() {
      me = !0;
    }, L.unstable_runWithPriority = function(O, Q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Z = xt;
      xt = O;
      try {
        return Q();
      } finally {
        xt = Z;
      }
    }, L.unstable_scheduleCallback = function(O, Q, Z) {
      var ct = L.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ct + Z : ct) : Z = ct, O) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = Z + rt, O = {
        id: Vn++,
        callback: Q,
        priorityLevel: O,
        startTime: Z,
        expirationTime: rt,
        sortIndex: -1
      }, Z > ct ? (O.sortIndex = Z, Pt(Hl, O), Ft(Ie) === null && O === Ft(Hl) && (Bl ? (La(Ke), Ke = -1) : Bl = !0, il(ga, Z - ct))) : (O.sortIndex = rt, Pt(Ie, O), Me || Oe || (Me = !0, Nl || (Nl = !0, _t()))), O;
    }, L.unstable_shouldYield = et, L.unstable_wrapCallback = function(O) {
      var Q = xt;
      return function() {
        var Z = xt;
        xt = Q;
        try {
          return O.apply(this, arguments);
        } finally {
          xt = Z;
        }
      };
    };
  })(rS)), rS;
}
var dS = {};
var R2;
function fE() {
  return R2 || (R2 = 1, (function(L) {
    process.env.NODE_ENV !== "production" && (function() {
      function Pt() {
        if (ga = !1, cl) {
          var O = L.unstable_now();
          _t = O;
          var Q = !0;
          try {
            t: {
              je = !1, zl && (zl = !1, Ke(et), et = -1), La = !0;
              var Z = It;
              try {
                e: {
                  for (Al(O), me = x(Oe); me !== null && !(me.expirationTime > O && Ie()); ) {
                    var ct = me.callback;
                    if (typeof ct == "function") {
                      me.callback = null, It = me.priorityLevel;
                      var rt = ct(
                        me.expirationTime <= O
                      );
                      if (O = L.unstable_now(), typeof rt == "function") {
                        me.callback = rt, Al(O), Q = !0;
                        break e;
                      }
                      me === x(Oe) && te(Oe), Al(O);
                    } else te(Oe);
                    me = x(Oe);
                  }
                  if (me !== null) Q = !0;
                  else {
                    var j = x(Me);
                    j !== null && Hl(
                      K,
                      j.startTime - O
                    ), Q = !1;
                  }
                }
                break t;
              } finally {
                me = null, It = Z, La = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Ot() : cl = !1;
          }
        }
      }
      function Ft(O, Q) {
        var Z = O.length;
        O.push(Q);
        t: for (; 0 < Z; ) {
          var ct = Z - 1 >>> 1, rt = O[ct];
          if (0 < ge(rt, Q))
            O[ct] = Q, O[Z] = rt, Z = ct;
          else break t;
        }
      }
      function x(O) {
        return O.length === 0 ? null : O[0];
      }
      function te(O) {
        if (O.length === 0) return null;
        var Q = O[0], Z = O.pop();
        if (Z !== Q) {
          O[0] = Z;
          t: for (var ct = 0, rt = O.length, j = rt >>> 1; ct < j; ) {
            var k = 2 * (ct + 1) - 1, tt = O[k], lt = k + 1, He = O[lt];
            if (0 > ge(tt, Z))
              lt < rt && 0 > ge(He, tt) ? (O[ct] = He, O[lt] = Z, ct = lt) : (O[ct] = tt, O[k] = Z, ct = k);
            else if (lt < rt && 0 > ge(He, Z))
              O[ct] = He, O[lt] = Z, ct = lt;
            else break t;
          }
        }
        return Q;
      }
      function ge(O, Q) {
        var Z = O.sortIndex - Q.sortIndex;
        return Z !== 0 ? Z : O.id - Q.id;
      }
      function Al(O) {
        for (var Q = x(Me); Q !== null; ) {
          if (Q.callback === null) te(Me);
          else if (Q.startTime <= O)
            te(Me), Q.sortIndex = Q.expirationTime, Ft(Oe, Q);
          else break;
          Q = x(Me);
        }
      }
      function K(O) {
        if (zl = !1, Al(O), !je)
          if (x(Oe) !== null)
            je = !0, cl || (cl = !0, Ot());
          else {
            var Q = x(Me);
            Q !== null && Hl(
              K,
              Q.startTime - O
            );
          }
      }
      function Ie() {
        return ga ? !0 : !(L.unstable_now() - _t < Ge);
      }
      function Hl(O, Q) {
        et = Nl(function() {
          O(L.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Vn = performance;
        L.unstable_now = function() {
          return Vn.now();
        };
      } else {
        var ot = Date, xt = ot.now();
        L.unstable_now = function() {
          return ot.now() - xt;
        };
      }
      var Oe = [], Me = [], Bl = 1, me = null, It = 3, La = !1, je = !1, zl = !1, ga = !1, Nl = typeof setTimeout == "function" ? setTimeout : null, Ke = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null, cl = !1, et = -1, Ge = 5, _t = -1;
      if (typeof Bt == "function")
        var Ot = function() {
          Bt(Pt);
        };
      else if (typeof MessageChannel < "u") {
        var xl = new MessageChannel(), il = xl.port2;
        xl.port1.onmessage = Pt, Ot = function() {
          il.postMessage(null);
        };
      } else
        Ot = function() {
          Nl(Pt, 0);
        };
      L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, L.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ge = 0 < O ? Math.floor(1e3 / O) : 5;
      }, L.unstable_getCurrentPriorityLevel = function() {
        return It;
      }, L.unstable_next = function(O) {
        switch (It) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = It;
        }
        var Z = It;
        It = Q;
        try {
          return O();
        } finally {
          It = Z;
        }
      }, L.unstable_requestPaint = function() {
        ga = !0;
      }, L.unstable_runWithPriority = function(O, Q) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var Z = It;
        It = O;
        try {
          return Q();
        } finally {
          It = Z;
        }
      }, L.unstable_scheduleCallback = function(O, Q, Z) {
        var ct = L.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ct + Z : ct) : Z = ct, O) {
          case 1:
            var rt = -1;
            break;
          case 2:
            rt = 250;
            break;
          case 5:
            rt = 1073741823;
            break;
          case 4:
            rt = 1e4;
            break;
          default:
            rt = 5e3;
        }
        return rt = Z + rt, O = {
          id: Bl++,
          callback: Q,
          priorityLevel: O,
          startTime: Z,
          expirationTime: rt,
          sortIndex: -1
        }, Z > ct ? (O.sortIndex = Z, Ft(Me, O), x(Oe) === null && O === x(Me) && (zl ? (Ke(et), et = -1) : zl = !0, Hl(K, Z - ct))) : (O.sortIndex = rt, Ft(Oe, O), je || La || (je = !0, cl || (cl = !0, Ot()))), O;
      }, L.unstable_shouldYield = Ie, L.unstable_wrapCallback = function(O) {
        var Q = It;
        return function() {
          var Z = It;
          It = Q;
          try {
            return O.apply(this, arguments);
          } finally {
            It = Z;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(dS)), dS;
}
var U2;
function x2() {
  return U2 || (U2 = 1, process.env.NODE_ENV === "production" ? Yg.exports = oE() : Yg.exports = fE()), Yg.exports;
}
var _2;
function sE() {
  if (_2) return op;
  _2 = 1;
  var L = x2(), Pt = hS, Ft = N2;
  function x(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function te(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ge(l) {
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
  function Al(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function K(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ie(l) {
    if (ge(l) !== l)
      throw Error(x(188));
  }
  function Hl(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ge(l), n === null) throw Error(x(188));
      return n !== l ? null : l;
    }
    for (var u = l, i = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (i = s.return, i !== null) {
          u = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return Ie(s), l;
          if (r === i) return Ie(s), n;
          r = r.sibling;
        }
        throw Error(x(188));
      }
      if (u.return !== i.return) u = s, i = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, i = r;
            break;
          }
          if (v === i) {
            m = !0, i = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, i = s;
              break;
            }
            if (v === i) {
              m = !0, i = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(x(189));
        }
      }
      if (u.alternate !== i) throw Error(x(190));
    }
    if (u.tag !== 3) throw Error(x(188));
    return u.stateNode.current === u ? l : n;
  }
  function Vn(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Vn(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ot = Object.assign, xt = /* @__PURE__ */ Symbol.for("react.element"), Oe = /* @__PURE__ */ Symbol.for("react.transitional.element"), Me = /* @__PURE__ */ Symbol.for("react.portal"), Bl = /* @__PURE__ */ Symbol.for("react.fragment"), me = /* @__PURE__ */ Symbol.for("react.strict_mode"), It = /* @__PURE__ */ Symbol.for("react.profiler"), La = /* @__PURE__ */ Symbol.for("react.consumer"), je = /* @__PURE__ */ Symbol.for("react.context"), zl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ga = /* @__PURE__ */ Symbol.for("react.suspense"), Nl = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ke = /* @__PURE__ */ Symbol.for("react.memo"), Bt = /* @__PURE__ */ Symbol.for("react.lazy"), cl = /* @__PURE__ */ Symbol.for("react.activity"), et = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ge = Symbol.iterator;
  function _t(l) {
    return l === null || typeof l != "object" ? null : (l = Ge && l[Ge] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ot = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ot ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case It:
        return "Profiler";
      case me:
        return "StrictMode";
      case ga:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case cl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Me:
          return "Portal";
        case je:
          return l.displayName || "Context";
        case La:
          return (l._context.displayName || "Context") + ".Consumer";
        case zl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ke:
          return n = l.displayName || null, n !== null ? n : xl(l.type) || "Memo";
        case Bt:
          n = l._payload, l = l._init;
          try {
            return xl(l(n));
          } catch {
          }
      }
    return null;
  }
  var il = Array.isArray, O = Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ct = [], rt = -1;
  function j(l) {
    return { current: l };
  }
  function k(l) {
    0 > rt || (l.current = ct[rt], ct[rt] = null, rt--);
  }
  function tt(l, n) {
    rt++, ct[rt] = l.current, l.current = n;
  }
  var lt = j(null), He = j(null), wa = j(null), ye = j(null);
  function Ja(l, n) {
    switch (tt(wa, n), tt(He, l), tt(lt, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ov(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ov(n), l = e0(n, l);
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
    k(lt), tt(lt, l);
  }
  function Sa() {
    k(lt), k(He), k(wa);
  }
  function Jf(l) {
    l.memoizedState !== null && tt(ye, l);
    var n = lt.current, u = e0(n, l.type);
    n !== u && (tt(He, l), tt(lt, u));
  }
  function W(l) {
    He.current === l && (k(lt), k(He)), ye.current === l && (k(ye), or._currentValue = Z);
  }
  var Kf, $f;
  function Zn(l) {
    if (Kf === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Kf = n && n[1] || "", $f = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kf + l + $f;
  }
  var Pc = !1;
  function ee(l, n) {
    if (!l || Pc) return "";
    Pc = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (N) {
                  var _ = N;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (N) {
                  _ = N;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                _ = N;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (N) {
            if (N && _ && typeof N.stack == "string")
              return [N.stack, _.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = i.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var T = m.split(`
`), U = v.split(`
`);
        for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < U.length && !U[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === T.length || s === U.length)
          for (i = T.length - 1, s = U.length - 1; 1 <= i && 0 <= s && T[i] !== U[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== U[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || T[i] !== U[s]) {
                  var q = `
` + T[i].replace(" at new ", " at ");
                  return l.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", l.displayName)), q;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      Pc = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Zn(u) : "";
  }
  function cm(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Zn(l.type);
      case 16:
        return Zn("Lazy");
      case 13:
        return l.child !== n && n !== null ? Zn("Suspense Fallback") : Zn("Suspense");
      case 19:
        return Zn("SuspenseList");
      case 0:
      case 15:
        return ee(l.type, !1);
      case 11:
        return ee(l.type.render, !1);
      case 1:
        return ee(l.type, !0);
      case 31:
        return Zn("Activity");
      default:
        return "";
    }
  }
  function xr(l) {
    try {
      var n = "", u = null;
      do
        n += cm(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var im = Object.prototype.hasOwnProperty, oe = L.unstable_scheduleCallback, om = L.unstable_cancelCallback, ti = L.unstable_shouldYield, qr = L.unstable_requestPaint, Dl = L.unstable_now, jg = L.unstable_getCurrentPriorityLevel, Yr = L.unstable_ImmediatePriority, jr = L.unstable_UserBlockingPriority, rc = L.unstable_NormalPriority, Gg = L.unstable_LowPriority, fm = L.unstable_IdlePriority, sp = L.log, rp = L.unstable_setDisableYieldValue, ei = null, oa = null;
  function Nu(l) {
    if (typeof sp == "function" && rp(l), oa && typeof oa.setStrictMode == "function")
      try {
        oa.setStrictMode(ei, l);
      } catch {
      }
  }
  var Ll = Math.clz32 ? Math.clz32 : sm, dp = Math.log, hp = Math.LN2;
  function sm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (dp(l) / hp | 0) | 0;
  }
  var xu = 256, rn = 262144, dc = 4194304;
  function Ka(l) {
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
  function Xe(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~r, i !== 0 ? s = Ka(i) : (m &= v, m !== 0 ? s = Ka(m) : u || (u = v & ~l, u !== 0 && (s = Ka(u))))) : (v = i & ~r, v !== 0 ? s = Ka(v) : m !== 0 ? s = Ka(m) : u || (u = i & ~l, u !== 0 && (s = Ka(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function dn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ro(l, n) {
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
  function li() {
    var l = dc;
    return dc <<= 1, (dc & 62914560) === 0 && (dc = 4194304), l;
  }
  function Wf(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function ho(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Gr(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, U = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var q = 31 - Ll(u), X = 1 << q;
      v[q] = 0, T[q] = -1;
      var _ = U[q];
      if (_ !== null)
        for (U[q] = null, q = 0; q < _.length; q++) {
          var N = _[q];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~X;
    }
    i !== 0 && kf(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function kf(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - Ll(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 261930;
  }
  function Ln(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - Ll(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function ba(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Xr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Xr(l) {
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
  function rm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qr() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fr(l.type));
  }
  function dm(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var hn = Math.random().toString(36).slice(2), le = "__reactFiber$" + hn, wl = "__reactProps$" + hn, hc = "__reactContainer$" + hn, Vr = "__reactEvents$" + hn, hm = "__reactListeners$" + hn, mp = "__reactHandles$" + hn, mm = "__reactResources$" + hn, wn = "__reactMarker$" + hn;
  function Zr(l) {
    delete l[le], delete l[wl], delete l[Vr], delete l[hm], delete l[mp];
  }
  function ai(l) {
    var n = l[le];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[hc] || u[le]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Nn(l); l !== null; ) {
            if (u = l[le]) return u;
            l = Nn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ni(l) {
    if (l = l[le] || l[hc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function mo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(x(33));
  }
  function ui(l) {
    var n = l[mm];
    return n || (n = l[mm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Jt(l) {
    l[wn] = !0;
  }
  var ci = /* @__PURE__ */ new Set(), mc = {};
  function yc(l, n) {
    Jn(l, n), Jn(l + "Capture", n);
  }
  function Jn(l, n) {
    for (mc[l] = n, l = 0; l < n.length; l++)
      ci.add(n[l]);
  }
  var Lr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wr = {}, yo = {};
  function po(l) {
    return im.call(yo, l) ? !0 : im.call(wr, l) ? !1 : Lr.test(l) ? yo[l] = !0 : (wr[l] = !0, !1);
  }
  function vo(l, n, u) {
    if (po(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Jr(l, n, u) {
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
  function qu(l, n, u, i) {
    if (i === null) l.removeAttribute(u);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + i);
    }
  }
  function Ta(l) {
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
  function Kr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function ym(l, n, u) {
    var i = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, r = i.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: i.enumerable
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
  function $r(l) {
    if (!l._valueTracker) {
      var n = Kr(l) ? "checked" : "value";
      l._valueTracker = ym(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function pm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = Kr(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Ff(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Xg = /[\n"\\]/g;
  function Ea(l) {
    return l.replace(
      Xg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function If(l, n, u, i, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ta(n)) : l.value !== "" + Ta(n) && (l.value = "" + Ta(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? ii(l, m, Ta(n)) : u != null ? ii(l, m, Ta(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Ta(v) : l.removeAttribute("name");
  }
  function Pf(l, n, u, i, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        $r(l);
        return;
      }
      u = u != null ? "" + Ta(u) : "", n = n != null ? "" + Ta(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = v ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), $r(l);
  }
  function ii(l, n, u) {
    n === "number" && Ff(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function go(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ta(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function vm(l, n, u) {
    if (n != null && (n = "" + Ta(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ta(u) : "";
  }
  function gm(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(x(92));
        if (il(i)) {
          if (1 < i.length) throw Error(x(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = Ta(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), $r(l);
  }
  function Kn(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var yp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pp(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || yp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function vp(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(x(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && pp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && pp(l, r, n[r]);
  }
  function Sm(l) {
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
  var Qg = /* @__PURE__ */ new Map([
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
  ]), ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $a(l) {
    return ts.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function mn() {
  }
  var Wr = null;
  function kr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $n = null, oi = null;
  function es(l) {
    var n = ni(l);
    if (n && (l = n.stateNode)) {
      var u = l[wl] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (If(
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
              'input[name="' + Ea(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[wl] || null;
                if (!s) throw Error(x(90));
                If(
                  i,
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
              i = u[n], i.form === l.form && pm(i);
          }
          break t;
        case "textarea":
          vm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && go(l, !!u.multiple, n, !1);
      }
    }
  }
  var So = !1;
  function bm(l, n, u) {
    if (So) return l(n, u);
    So = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (So = !1, ($n !== null || oi !== null) && (ef(), $n && (n = $n, l = oi, oi = $n = null, es(n), l)))
        for (n = 0; n < l.length; n++) es(l[n]);
    }
  }
  function ol(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[wl] || null;
    if (i === null) return null;
    u = i[n];
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
        (i = !i.disabled) || (l = l.type, i = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !i;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        x(231, n, typeof u)
      );
    return u;
  }
  var Yu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ls = !1;
  if (Yu)
    try {
      var bo = {};
      Object.defineProperty(bo, "passive", {
        get: function() {
          ls = !0;
        }
      }), window.addEventListener("test", bo, bo), window.removeEventListener("test", bo, bo);
    } catch {
      ls = !1;
    }
  var ju = null, Tm = null, Fr = null;
  function Em() {
    if (Fr) return Fr;
    var l, n = Tm, u = n.length, i, s = "value" in ju ? ju.value : ju.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return Fr = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function Ir(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function as() {
    return !0;
  }
  function gp() {
    return !1;
  }
  function Ol(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? as : gp, this.isPropagationStopped = gp, this;
    }
    return ot(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = as);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = as);
      },
      persist: function() {
      },
      isPersistent: as
    }), n;
  }
  var pc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ns = Ol(pc), To = ot({}, pc, { view: 0, detail: 0 }), Vg = Ol(To), Am, zm, us, Pr = ot({}, To, {
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
    getModifierState: Wa,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== us && (us && l.type === "mousemove" ? (Am = l.screenX - us.screenX, zm = l.screenY - us.screenY) : zm = Am = 0, us = l), Am);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : zm;
    }
  }), Eo = Ol(Pr), Sp = ot({}, Pr, { dataTransfer: 0 }), bp = Ol(Sp), Tp = ot({}, To, { relatedTarget: 0 }), td = Ol(Tp), Dm = ot({}, pc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ep = Ol(Dm), fi = ot({}, pc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), si = Ol(fi), yn = ot({}, pc, { data: 0 }), Ap = Ol(yn), Om = {
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
  }, Wn = {
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
  }, zp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function pn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = zp[l]) ? !!n[l] : !1;
  }
  function Wa() {
    return pn;
  }
  var ed = ot({}, To, {
    key: function(l) {
      if (l.key) {
        var n = Om[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Ir(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Wn[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wa,
    charCode: function(l) {
      return l.type === "keypress" ? Ir(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ir(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ld = Ol(ed), Mm = ot({}, Pr, {
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
  }), vn = Ol(Mm), Zg = ot({}, To, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wa
  }), Dp = Ol(Zg), Op = ot({}, pc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lg = Ol(Op), Rm = ot({}, Pr, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wg = Ol(Rm), Mp = ot({}, pc, {
    newState: 0,
    oldState: 0
  }), Um = Ol(Mp), ad = [9, 13, 27, 32], Ao = Yu && "CompositionEvent" in window, ri = null;
  Yu && "documentMode" in document && (ri = document.documentMode);
  var ql = Yu && "TextEvent" in window && !ri, _m = Yu && (!Ao || ri && 8 < ri && 11 >= ri), cs = " ", vc = !1;
  function nd(l, n) {
    switch (l) {
      case "keyup":
        return ad.indexOf(n.keyCode) !== -1;
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
  function Cm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var di = !1;
  function Rp(l, n) {
    switch (l) {
      case "compositionend":
        return Cm(n);
      case "keypress":
        return n.which !== 32 ? null : (vc = !0, cs);
      case "textInput":
        return l = n.data, l === cs && vc ? null : l;
      default:
        return null;
    }
  }
  function Jg(l, n) {
    if (di)
      return l === "compositionend" || !Ao && nd(l, n) ? (l = Em(), Fr = Tm = ju = null, di = !1, l) : null;
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
        return _m && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Hm = {
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
  function kn(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Hm[l.type] : n === "textarea";
  }
  function Bm(l, n, u, i) {
    $n ? oi ? oi.push(i) : oi = [i] : $n = i, n = lr(n, "onChange"), 0 < n.length && (u = new ns(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var hi = null, gc = null;
  function mi(l) {
    Av(l, 0);
  }
  function zo(l) {
    var n = mo(l);
    if (pm(n)) return l;
  }
  function Nm(l, n) {
    if (l === "change") return n;
  }
  var ud = !1;
  if (Yu) {
    var Jl;
    if (Yu) {
      var gn = "oninput" in document;
      if (!gn) {
        var xm = document.createElement("div");
        xm.setAttribute("oninput", "return;"), gn = typeof xm.oninput == "function";
      }
      Jl = gn;
    } else Jl = !1;
    ud = Jl && (!document.documentMode || 9 < document.documentMode);
  }
  function cd() {
    hi && (hi.detachEvent("onpropertychange", id), gc = hi = null);
  }
  function id(l) {
    if (l.propertyName === "value" && zo(gc)) {
      var n = [];
      Bm(
        n,
        gc,
        l,
        kr(l)
      ), bm(mi, n);
    }
  }
  function Up(l, n, u) {
    l === "focusin" ? (cd(), hi = n, gc = u, hi.attachEvent("onpropertychange", id)) : l === "focusout" && cd();
  }
  function _p(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return zo(gc);
  }
  function Sc(l, n) {
    if (l === "click") return zo(n);
  }
  function yi(l, n) {
    if (l === "input" || l === "change")
      return zo(n);
  }
  function Cp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Yl = typeof Object.is == "function" ? Object.is : Cp;
  function ka(l, n) {
    if (Yl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!im.call(n, s) || !Yl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function qm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ym(l, n) {
    var u = qm(l);
    l = 0;
    for (var i; u; ) {
      if (u.nodeType === 3) {
        if (i = l + u.textContent.length, l <= n && i >= n)
          return { node: u, offset: n - l };
        l = i;
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
      u = qm(u);
    }
  }
  function pi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function bc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Ff(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Ff(l.document);
    }
    return n;
  }
  function is(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var os = Yu && "documentMode" in document && 11 >= document.documentMode, Tc = null, Do = null, Fa = null, Sn = !1;
  function od(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Sn || Tc == null || Tc !== Ff(i) || (i = Tc, "selectionStart" in i && is(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Fa && ka(Fa, i) || (Fa = i, i = lr(Do, "onSelect"), 0 < i.length && (n = new ns(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = Tc)));
  }
  function Gu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var bn = {
    animationend: Gu("Animation", "AnimationEnd"),
    animationiteration: Gu("Animation", "AnimationIteration"),
    animationstart: Gu("Animation", "AnimationStart"),
    transitionrun: Gu("Transition", "TransitionRun"),
    transitionstart: Gu("Transition", "TransitionStart"),
    transitioncancel: Gu("Transition", "TransitionCancel"),
    transitionend: Gu("Transition", "TransitionEnd")
  }, Oo = {}, Ec = {};
  Yu && (Ec = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Zt(l) {
    if (Oo[l]) return Oo[l];
    if (!bn[l]) return l;
    var n = bn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ec)
        return Oo[l] = n[u];
    return l;
  }
  var fs = Zt("animationend"), jm = Zt("animationiteration"), fd = Zt("animationstart"), vi = Zt("transitionrun"), ss = Zt("transitionstart"), Fn = Zt("transitioncancel"), Hp = Zt("transitionend"), In = /* @__PURE__ */ new Map(), Mo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mo.push("scrollEnd");
  function Kl(l, n) {
    In.set(l, n), yc(n, [l]);
  }
  var gi = typeof reportError == "function" ? reportError : function(l) {
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
  }, Se = [], fl = 0, Ia = 0;
  function Aa() {
    for (var l = fl, n = Ia = fl = 0; n < l; ) {
      var u = Se[n];
      Se[n++] = null;
      var i = Se[n];
      Se[n++] = null;
      var s = Se[n];
      Se[n++] = null;
      var r = Se[n];
      if (Se[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && sd(u, s, r);
    }
  }
  function za(l, n, u, i) {
    Se[fl++] = l, Se[fl++] = n, Se[fl++] = u, Se[fl++] = i, Ia |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function Pa(l, n, u, i) {
    return za(l, n, u, i), rs(l);
  }
  function Xu(l, n) {
    return za(l, null, null, n), rs(l);
  }
  function sd(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ll(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function rs(l) {
    if (50 < tf)
      throw tf = 0, Ks = null, Error(x(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $l = {};
  function Bp(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(l, n, u, i) {
    return new Bp(l, n, u, i);
  }
  function Si(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Qu(l, n) {
    var u = l.alternate;
    return u === null ? (u = Be(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Gm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function rd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") Si(l) && (m = 1);
    else if (typeof l == "string")
      m = o0(
        l,
        u,
        lt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case cl:
          return l = Be(31, u, n, s), l.elementType = cl, l.lanes = r, l;
        case Bl:
          return Vu(u.children, s, r, n);
        case me:
          m = 8, s |= 24;
          break;
        case It:
          return l = Be(12, u, n, s | 2), l.elementType = It, l.lanes = r, l;
        case ga:
          return l = Be(13, u, n, s), l.elementType = ga, l.lanes = r, l;
        case Nl:
          return l = Be(19, u, n, s), l.elementType = Nl, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case je:
                m = 10;
                break t;
              case La:
                m = 9;
                break t;
              case zl:
                m = 11;
                break t;
              case Ke:
                m = 14;
                break t;
              case Bt:
                m = 16, i = null;
                break t;
            }
          m = 29, u = Error(
            x(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = Be(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Vu(l, n, u, i) {
    return l = Be(7, l, i, n), l.lanes = u, l;
  }
  function Ro(l, n, u) {
    return l = Be(6, l, null, n), l.lanes = u, l;
  }
  function Xm(l) {
    var n = Be(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function dd(l, n, u) {
    return n = Be(
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
  var Qm = /* @__PURE__ */ new WeakMap();
  function Da(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Qm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: xr(n)
      }, Qm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: xr(n)
    };
  }
  var Oa = [], bi = 0, ds = null, Qe = 0, fa = [], Wl = 0, Tn = null, sa = 1, En = "";
  function tn(l, n) {
    Oa[bi++] = Qe, Oa[bi++] = ds, ds = l, Qe = n;
  }
  function Vm(l, n, u) {
    fa[Wl++] = sa, fa[Wl++] = En, fa[Wl++] = Tn, Tn = l;
    var i = sa;
    l = En;
    var s = 32 - Ll(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - Ll(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, sa = 1 << 32 - Ll(n) + s | u << s | i, En = r + l;
    } else
      sa = 1 << r | u << s | i, En = l;
  }
  function Uo(l) {
    l.return !== null && (tn(l, 1), Vm(l, 1, 0));
  }
  function hd(l) {
    for (; l === ds; )
      ds = Oa[--bi], Oa[bi] = null, Qe = Oa[--bi], Oa[bi] = null;
    for (; l === Tn; )
      Tn = fa[--Wl], fa[Wl] = null, En = fa[--Wl], fa[Wl] = null, sa = fa[--Wl], fa[Wl] = null;
  }
  function hs(l, n) {
    fa[Wl++] = sa, fa[Wl++] = En, fa[Wl++] = Tn, sa = n.id, En = n.overflow, Tn = l;
  }
  var sl = null, fe = null, Ct = !1, Pn = null, Pe = !1, tu = Error(x(519));
  function en(l) {
    var n = Error(
      x(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Co(Da(n, l)), tu;
  }
  function ms(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[le] = l, n[wl] = i, u) {
      case "dialog":
        Ut("cancel", n), Ut("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ut("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < cf.length; u++)
          Ut(cf[u], n);
        break;
      case "source":
        Ut("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ut("error", n), Ut("load", n);
        break;
      case "details":
        Ut("toggle", n);
        break;
      case "input":
        Ut("invalid", n), Pf(
          n,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        Ut("invalid", n);
        break;
      case "textarea":
        Ut("invalid", n), gm(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || Fy(n.textContent, u) ? (i.popover != null && (Ut("beforetoggle", n), Ut("toggle", n)), i.onScroll != null && Ut("scroll", n), i.onScrollEnd != null && Ut("scrollend", n), i.onClick != null && (n.onclick = mn), n = !0) : n = !1, n || en(l, !0);
  }
  function _o(l) {
    for (sl = l.return; sl; )
      switch (sl.tag) {
        case 5:
        case 31:
        case 13:
          Pe = !1;
          return;
        case 27:
        case 3:
          Pe = !0;
          return;
        default:
          sl = sl.return;
      }
  }
  function eu(l) {
    if (l !== sl) return !1;
    if (!Ct) return _o(l), Ct = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || ff(l.type, l.memoizedProps)), u = !u), u && fe && en(l), _o(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(x(317));
      fe = ph(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(x(317));
      fe = ph(l);
    } else
      n === 27 ? (n = fe, Bn(l.type) ? (l = ur, ur = null, fe = l) : fe = n) : fe = sl ? ua(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ac() {
    fe = sl = null, Ct = !1;
  }
  function Zm() {
    var l = Pn;
    return l !== null && (_e === null ? _e = l : _e.push.apply(
      _e,
      l
    ), Pn = null), l;
  }
  function Co(l) {
    Pn === null ? Pn = [l] : Pn.push(l);
  }
  var md = j(null), Zu = null, An = null;
  function kl(l, n, u) {
    tt(md, n._currentValue), n._currentValue = u;
  }
  function zn(l) {
    l._currentValue = md.current, k(md);
  }
  function yd(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function lu(l, n, u, i) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var T = 0; T < n.length; T++)
            if (v.context === n[T]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), yd(
                r.return,
                u,
                l
              ), i || (m = null);
              break t;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(x(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), yd(m, u, l), m = null;
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
  function rl(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(x(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Yl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === ye.current) {
        if (m = s.alternate, m === null) throw Error(x(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(or) : l = [or]);
      }
      s = s.return;
    }
    l !== null && lu(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Ti(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Yl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function mt(l) {
    Zu = l, An = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function V(l) {
    return ys(Zu, l);
  }
  function Lu(l, n) {
    return Zu === null && mt(l), ys(l, n);
  }
  function ys(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, An === null) {
      if (l === null) throw Error(x(308));
      An = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else An = An.next = n;
    return u;
  }
  var Ne = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, i) {
        l.push(i);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Lm = L.unstable_scheduleCallback, wm = L.unstable_NormalPriority, Ve = {
    $$typeof: je,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ps() {
    return {
      controller: new Ne(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vs(l) {
    l.refCount--, l.refCount === 0 && Lm(wm, function() {
      l.controller.abort();
    });
  }
  var Ei = null, gs = 0, zc = 0, $e = null;
  function Kt(l, n) {
    if (Ei === null) {
      var u = Ei = [];
      gs = 0, zc = oh(), $e = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return gs++, n.then(Ss, Ss), n;
  }
  function Ss() {
    if (--gs === 0 && Ei !== null) {
      $e !== null && ($e.status = "fulfilled");
      var l = Ei;
      Ei = null, zc = 0, $e = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function bs(l, n) {
    var u = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        i.status = "fulfilled", i.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), i;
  }
  var wu = O.S;
  O.S = function(l, n) {
    jy = Dl(), typeof n == "object" && n !== null && typeof n.then == "function" && Kt(l, n), wu !== null && wu(l, n);
  };
  var Ma = j(null);
  function Ra() {
    var l = Ma.current;
    return l !== null ? l : ne.pooledCache;
  }
  function Ho(l, n) {
    n === null ? tt(Ma, Ma.current) : tt(Ma, n.pool);
  }
  function Ai() {
    var l = Ra();
    return l === null ? null : { parent: Ve._currentValue, pool: l };
  }
  var Dc = Error(x(460)), zi = Error(x(474)), Bo = Error(x(542)), Di = { then: function() {
  } };
  function Jm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Km(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(mn, mn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, pd(l), l;
      default:
        if (typeof n.status == "string") n.then(mn, mn);
        else {
          if (l = ne, l !== null && 100 < l.shellSuspendCounter)
            throw Error(x(482));
          l = n, l.status = "pending", l.then(
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, pd(l), l;
        }
        throw Mc = n, Dc;
    }
  }
  function Oc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Mc = u, Dc) : u;
    }
  }
  var Mc = null;
  function $m() {
    if (Mc === null) throw Error(x(459));
    var l = Mc;
    return Mc = null, l;
  }
  function pd(l) {
    if (l === Dc || l === Bo)
      throw Error(x(483));
  }
  var Rc = null, Oi = 0;
  function Ts(l) {
    var n = Oi;
    return Oi += 1, Rc === null && (Rc = []), Km(Rc, l, n);
  }
  function No(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Es(l, n) {
    throw n.$$typeof === xt ? Error(x(525)) : (l = Object.prototype.toString.call(n), Error(
      x(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Np(l) {
    function n(M, z) {
      if (l) {
        var R = M.deletions;
        R === null ? (M.deletions = [z], M.flags |= 16) : R.push(z);
      }
    }
    function u(M, z) {
      if (!l) return null;
      for (; z !== null; )
        n(M, z), z = z.sibling;
      return null;
    }
    function i(M) {
      for (var z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function s(M, z) {
      return M = Qu(M, z), M.index = 0, M.sibling = null, M;
    }
    function r(M, z, R) {
      return M.index = R, l ? (R = M.alternate, R !== null ? (R = R.index, R < z ? (M.flags |= 67108866, z) : R) : (M.flags |= 67108866, z)) : (M.flags |= 1048576, z);
    }
    function m(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, z, R, G) {
      return z === null || z.tag !== 6 ? (z = Ro(R, M.mode, G), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function T(M, z, R, G) {
      var at = R.type;
      return at === Bl ? q(
        M,
        z,
        R.props.children,
        G,
        R.key
      ) : z !== null && (z.elementType === at || typeof at == "object" && at !== null && at.$$typeof === Bt && Oc(at) === z.type) ? (z = s(z, R.props), No(z, R), z.return = M, z) : (z = rd(
        R.type,
        R.key,
        R.props,
        null,
        M.mode,
        G
      ), No(z, R), z.return = M, z);
    }
    function U(M, z, R, G) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== R.containerInfo || z.stateNode.implementation !== R.implementation ? (z = dd(R, M.mode, G), z.return = M, z) : (z = s(z, R.children || []), z.return = M, z);
    }
    function q(M, z, R, G, at) {
      return z === null || z.tag !== 7 ? (z = Vu(
        R,
        M.mode,
        G,
        at
      ), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function X(M, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ro(
          "" + z,
          M.mode,
          R
        ), z.return = M, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Oe:
            return R = rd(
              z.type,
              z.key,
              z.props,
              null,
              M.mode,
              R
            ), No(R, z), R.return = M, R;
          case Me:
            return z = dd(
              z,
              M.mode,
              R
            ), z.return = M, z;
          case Bt:
            return z = Oc(z), X(M, z, R);
        }
        if (il(z) || _t(z))
          return z = Vu(
            z,
            M.mode,
            R,
            null
          ), z.return = M, z;
        if (typeof z.then == "function")
          return X(M, Ts(z), R);
        if (z.$$typeof === je)
          return X(
            M,
            Lu(M, z),
            R
          );
        Es(M, z);
      }
      return null;
    }
    function _(M, z, R, G) {
      var at = z !== null ? z.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return at !== null ? null : v(M, z, "" + R, G);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Oe:
            return R.key === at ? T(M, z, R, G) : null;
          case Me:
            return R.key === at ? U(M, z, R, G) : null;
          case Bt:
            return R = Oc(R), _(M, z, R, G);
        }
        if (il(R) || _t(R))
          return at !== null ? null : q(M, z, R, G, null);
        if (typeof R.then == "function")
          return _(
            M,
            z,
            Ts(R),
            G
          );
        if (R.$$typeof === je)
          return _(
            M,
            z,
            Lu(M, R),
            G
          );
        Es(M, R);
      }
      return null;
    }
    function N(M, z, R, G, at) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return M = M.get(R) || null, v(z, M, "" + G, at);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Oe:
            return M = M.get(
              G.key === null ? R : G.key
            ) || null, T(z, M, G, at);
          case Me:
            return M = M.get(
              G.key === null ? R : G.key
            ) || null, U(z, M, G, at);
          case Bt:
            return G = Oc(G), N(
              M,
              z,
              R,
              G,
              at
            );
        }
        if (il(G) || _t(G))
          return M = M.get(R) || null, q(z, M, G, at, null);
        if (typeof G.then == "function")
          return N(
            M,
            z,
            R,
            Ts(G),
            at
          );
        if (G.$$typeof === je)
          return N(
            M,
            z,
            R,
            Lu(z, G),
            at
          );
        Es(z, G);
      }
      return null;
    }
    function F(M, z, R, G) {
      for (var at = null, Gt = null, I = z, vt = z = 0, bt = null; I !== null && vt < R.length; vt++) {
        I.index > vt ? (bt = I, I = null) : bt = I.sibling;
        var Vt = _(
          M,
          I,
          R[vt],
          G
        );
        if (Vt === null) {
          I === null && (I = bt);
          break;
        }
        l && I && Vt.alternate === null && n(M, I), z = r(Vt, z, vt), Gt === null ? at = Vt : Gt.sibling = Vt, Gt = Vt, I = bt;
      }
      if (vt === R.length)
        return u(M, I), Ct && tn(M, vt), at;
      if (I === null) {
        for (; vt < R.length; vt++)
          I = X(M, R[vt], G), I !== null && (z = r(
            I,
            z,
            vt
          ), Gt === null ? at = I : Gt.sibling = I, Gt = I);
        return Ct && tn(M, vt), at;
      }
      for (I = i(I); vt < R.length; vt++)
        bt = N(
          I,
          M,
          vt,
          R[vt],
          G
        ), bt !== null && (l && bt.alternate !== null && I.delete(
          bt.key === null ? vt : bt.key
        ), z = r(
          bt,
          z,
          vt
        ), Gt === null ? at = bt : Gt.sibling = bt, Gt = bt);
      return l && I.forEach(function(qn) {
        return n(M, qn);
      }), Ct && tn(M, vt), at;
    }
    function it(M, z, R, G) {
      if (R == null) throw Error(x(151));
      for (var at = null, Gt = null, I = z, vt = z = 0, bt = null, Vt = R.next(); I !== null && !Vt.done; vt++, Vt = R.next()) {
        I.index > vt ? (bt = I, I = null) : bt = I.sibling;
        var qn = _(M, I, Vt.value, G);
        if (qn === null) {
          I === null && (I = bt);
          break;
        }
        l && I && qn.alternate === null && n(M, I), z = r(qn, z, vt), Gt === null ? at = qn : Gt.sibling = qn, Gt = qn, I = bt;
      }
      if (Vt.done)
        return u(M, I), Ct && tn(M, vt), at;
      if (I === null) {
        for (; !Vt.done; vt++, Vt = R.next())
          Vt = X(M, Vt.value, G), Vt !== null && (z = r(Vt, z, vt), Gt === null ? at = Vt : Gt.sibling = Vt, Gt = Vt);
        return Ct && tn(M, vt), at;
      }
      for (I = i(I); !Vt.done; vt++, Vt = R.next())
        Vt = N(I, M, vt, Vt.value, G), Vt !== null && (l && Vt.alternate !== null && I.delete(Vt.key === null ? vt : Vt.key), z = r(Vt, z, vt), Gt === null ? at = Vt : Gt.sibling = Vt, Gt = Vt);
      return l && I.forEach(function(jv) {
        return n(M, jv);
      }), Ct && tn(M, vt), at;
    }
    function ce(M, z, R, G) {
      if (typeof R == "object" && R !== null && R.type === Bl && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Oe:
            t: {
              for (var at = R.key; z !== null; ) {
                if (z.key === at) {
                  if (at = R.type, at === Bl) {
                    if (z.tag === 7) {
                      u(
                        M,
                        z.sibling
                      ), G = s(
                        z,
                        R.props.children
                      ), G.return = M, M = G;
                      break t;
                    }
                  } else if (z.elementType === at || typeof at == "object" && at !== null && at.$$typeof === Bt && Oc(at) === z.type) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, R.props), No(G, R), G.return = M, M = G;
                    break t;
                  }
                  u(M, z);
                  break;
                } else n(M, z);
                z = z.sibling;
              }
              R.type === Bl ? (G = Vu(
                R.props.children,
                M.mode,
                G,
                R.key
              ), G.return = M, M = G) : (G = rd(
                R.type,
                R.key,
                R.props,
                null,
                M.mode,
                G
              ), No(G, R), G.return = M, M = G);
            }
            return m(M);
          case Me:
            t: {
              for (at = R.key; z !== null; ) {
                if (z.key === at)
                  if (z.tag === 4 && z.stateNode.containerInfo === R.containerInfo && z.stateNode.implementation === R.implementation) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, R.children || []), G.return = M, M = G;
                    break t;
                  } else {
                    u(M, z);
                    break;
                  }
                else n(M, z);
                z = z.sibling;
              }
              G = dd(R, M.mode, G), G.return = M, M = G;
            }
            return m(M);
          case Bt:
            return R = Oc(R), ce(
              M,
              z,
              R,
              G
            );
        }
        if (il(R))
          return F(
            M,
            z,
            R,
            G
          );
        if (_t(R)) {
          if (at = _t(R), typeof at != "function") throw Error(x(150));
          return R = at.call(R), it(
            M,
            z,
            R,
            G
          );
        }
        if (typeof R.then == "function")
          return ce(
            M,
            z,
            Ts(R),
            G
          );
        if (R.$$typeof === je)
          return ce(
            M,
            z,
            Lu(M, R),
            G
          );
        Es(M, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, z !== null && z.tag === 6 ? (u(M, z.sibling), G = s(z, R), G.return = M, M = G) : (u(M, z), G = Ro(R, M.mode, G), G.return = M, M = G), m(M)) : u(M, z);
    }
    return function(M, z, R, G) {
      try {
        Oi = 0;
        var at = ce(
          M,
          z,
          R,
          G
        );
        return Rc = null, at;
      } catch (I) {
        if (I === Dc || I === Bo) throw I;
        var Gt = Be(29, I, null, M.mode);
        return Gt.lanes = G, Gt.return = M, Gt;
      }
    };
  }
  var Uc = Np(!0), Wm = Np(!1), Ju = !1;
  function As(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ku(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Qt & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = rs(l), sd(l, null, u), n;
    }
    return za(l, i, n, u), rs(l);
  }
  function _c(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, Ln(l, u);
    }
  }
  function gd(l, n) {
    var u = l.updateQueue, i = l.alternate;
    if (i !== null && (i = i.updateQueue, u === i)) {
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
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var km = !1;
  function Cc() {
    if (km) {
      var l = $e;
      if (l !== null) throw l;
    }
  }
  function au(l, n, u, i) {
    km = !1;
    var s = l.updateQueue;
    Ju = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v, U = T.next;
      T.next = null, m === null ? r = U : m.next = U, m = T;
      var q = l.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== m && (v === null ? q.firstBaseUpdate = U : v.next = U, q.lastBaseUpdate = T));
    }
    if (r !== null) {
      var X = s.baseState;
      m = 0, q = U = T = null, v = r;
      do {
        var _ = v.lane & -536870913, N = _ !== v.lane;
        if (N ? (Mt & _) === _ : (i & _) === _) {
          _ !== 0 && _ === zc && (km = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var F = l, it = v;
            _ = n;
            var ce = u;
            switch (it.tag) {
              case 1:
                if (F = it.payload, typeof F == "function") {
                  X = F.call(ce, X, _);
                  break t;
                }
                X = F;
                break t;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = it.payload, _ = typeof F == "function" ? F.call(ce, X, _) : F, _ == null) break t;
                X = ot({}, X, _);
                break t;
              case 2:
                Ju = !0;
            }
          }
          _ = v.callback, _ !== null && (l.flags |= 64, N && (l.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [_] : N.push(_));
        } else
          N = {
            lane: _,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, q === null ? (U = q = N, T = X) : q = q.next = N, m |= _;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          N = v, v = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      q === null && (T = X), s.baseState = T, s.firstBaseUpdate = U, s.lastBaseUpdate = q, r === null && (s.shared.lanes = 0), Cn |= m, l.lanes = m, l.memoizedState = X;
    }
  }
  function Sd(l, n) {
    if (typeof l != "function")
      throw Error(x(191, l));
    l.call(n);
  }
  function Hc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Sd(u[l], n);
  }
  var tl = j(null), Mi = j(0);
  function xp(l, n) {
    l = _n, tt(Mi, l), tt(tl, n), _n = l | n.baseLanes;
  }
  function zs() {
    tt(Mi, _n), tt(tl, tl.current);
  }
  function xo() {
    _n = Mi.current, k(tl), k(Mi);
  }
  var Fl = j(null), _a = null;
  function nu(l) {
    var n = l.alternate;
    tt(be, be.current & 1), tt(Fl, l), _a === null && (n === null || tl.current !== null || n.memoizedState !== null) && (_a = l);
  }
  function qo(l) {
    tt(be, be.current), tt(Fl, l), _a === null && (_a = l);
  }
  function bd(l) {
    l.tag === 22 ? (tt(be, be.current), tt(Fl, l), _a === null && (_a = l)) : Dn();
  }
  function Dn() {
    tt(be, be.current), tt(Fl, Fl.current);
  }
  function Il(l) {
    k(Fl), _a === l && (_a = null), k(be);
  }
  var be = j(0);
  function Yo(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || un(u) || Lc(u)))
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
  var uu = 0, gt = null, $t = null, Ze = null, Ri = !1, Ui = !1, $u = !1, Ds = 0, jo = 0, Bc = null, qp = 0;
  function Re() {
    throw Error(x(321));
  }
  function Wu(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Yl(l[u], n[u])) return !1;
    return !0;
  }
  function Os(l, n, u, i, s, r) {
    return uu = r, gt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Lp : Yd, $u = !1, r = u(i, s), $u = !1, Ui && (r = Yp(
      n,
      u,
      i,
      s
    )), Td(l), r;
  }
  function Td(l) {
    O.H = xs;
    var n = $t !== null && $t.next !== null;
    if (uu = 0, Ze = $t = gt = null, Ri = !1, jo = 0, Bc = null, n) throw Error(x(300));
    l === null || Le || (l = l.dependencies, l !== null && Ti(l) && (Le = !0));
  }
  function Yp(l, n, u, i) {
    gt = l;
    var s = 0;
    do {
      if (Ui && (Bc = null), jo = 0, Ui = !1, 25 <= s) throw Error(x(301));
      if (s += 1, Ze = $t = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = wp, r = n(u, i);
    } while (Ui);
    return r;
  }
  function Kg() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ci(n) : n, l = l.useState()[0], ($t !== null ? $t.memoizedState : null) !== l && (gt.flags |= 1024), n;
  }
  function Ed() {
    var l = Ds !== 0;
    return Ds = 0, l;
  }
  function _i(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ms(l) {
    if (Ri) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ri = !1;
    }
    uu = 0, Ze = $t = gt = null, Ui = !1, jo = Ds = 0, Bc = null;
  }
  function dl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ze === null ? gt.memoizedState = Ze = l : Ze = Ze.next = l, Ze;
  }
  function xe() {
    if ($t === null) {
      var l = gt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = $t.next;
    var n = Ze === null ? gt.memoizedState : Ze.next;
    if (n !== null)
      Ze = n, $t = l;
    else {
      if (l === null)
        throw gt.alternate === null ? Error(x(467)) : Error(x(310));
      $t = l, l = {
        memoizedState: $t.memoizedState,
        baseState: $t.baseState,
        baseQueue: $t.baseQueue,
        queue: $t.queue,
        next: null
      }, Ze === null ? gt.memoizedState = Ze = l : Ze = Ze.next = l;
    }
    return Ze;
  }
  function Rs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ci(l) {
    var n = jo;
    return jo += 1, Bc === null && (Bc = []), l = Km(Bc, l, n), n = gt, (Ze === null ? n.memoizedState : Ze.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Lp : Yd), l;
  }
  function Go(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ci(l);
      if (l.$$typeof === je) return V(l);
    }
    throw Error(x(438, String(l)));
  }
  function Ad(l) {
    var n = null, u = gt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = gt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Rs(), gt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = et;
    return n.index++, u;
  }
  function cu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function iu(l) {
    var n = xe();
    return zd(n, $t, l);
  }
  function zd(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(x(311));
    i.lastRenderedReducer = u;
    var s = l.baseQueue, r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, i.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, T = null, U = n, q = !1;
      do {
        var X = U.lane & -536870913;
        if (X !== U.lane ? (Mt & X) === X : (uu & X) === X) {
          var _ = U.revertLane;
          if (_ === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), X === zc && (q = !0);
          else if ((uu & _) === _) {
            U = U.next, _ === zc && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, T === null ? (v = T = X, m = r) : T = T.next = X, gt.lanes |= _, Cn |= _;
          X = U.action, $u && u(r, X), r = U.hasEagerState ? U.eagerState : u(r, X);
        } else
          _ = {
            lane: X,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, T === null ? (v = T = _, m = r) : T = T.next = _, gt.lanes |= X, Cn |= X;
        U = U.next;
      } while (U !== null && U !== n);
      if (T === null ? m = r : T.next = v, !Yl(r, l.memoizedState) && (Le = !0, q && (u = $e, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Dd(l) {
    var n = xe(), u = n.queue;
    if (u === null) throw Error(x(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Yl(r, n.memoizedState) || (Le = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function Fm(l, n, u) {
    var i = gt, s = xe(), r = Ct;
    if (r) {
      if (u === void 0) throw Error(x(407));
      u = u();
    } else u = n();
    var m = !Yl(
      ($t || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Le = !0), s = s.queue, _d(Od.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || Ze !== null && Ze.memoizedState.tag & 1) {
      if (i.flags |= 2048, Bi(
        9,
        { destroy: void 0 },
        Im.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), ne === null) throw Error(x(349));
      r || (uu & 127) !== 0 || Us(i, n, u);
    }
    return u;
  }
  function Us(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = gt.updateQueue, n === null ? (n = Rs(), gt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Im(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Md(n) && Rd(l);
  }
  function Od(l, n, u) {
    return u(function() {
      Md(n) && Rd(l);
    });
  }
  function Md(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Yl(l, u);
    } catch {
      return !0;
    }
  }
  function Rd(l) {
    var n = Xu(l, 2);
    n !== null && na(n, l, 2);
  }
  function Pm(l) {
    var n = dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), $u) {
        Nu(!0);
        try {
          u();
        } finally {
          Nu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cu,
      lastRenderedState: l
    }, n;
  }
  function hl(l, n, u, i) {
    return l.baseState = u, zd(
      l,
      $t,
      typeof i == "function" ? i : cu
    );
  }
  function jp(l, n, u, i, s) {
    if (Ns(l)) throw Error(x(485));
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
      O.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, ty(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function ty(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, m = {};
      O.T = m;
      try {
        var v = u(s, i), T = O.S;
        T !== null && T(m, v), ey(l, n, v);
      } catch (U) {
        Hi(l, n, U);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), O.T = r;
      }
    } else
      try {
        r = u(s, i), ey(l, n, r);
      } catch (U) {
        Hi(l, n, U);
      }
  }
  function ey(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        ly(l, n, i);
      },
      function(i) {
        return Hi(l, n, i);
      }
    ) : ly(l, n, u);
  }
  function ly(l, n, u) {
    n.status = "fulfilled", n.value = u, ay(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, ty(l, u)));
  }
  function Hi(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, ay(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function ay(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function _s(l, n) {
    return n;
  }
  function ny(l, n) {
    if (Ct) {
      var u = ne.formState;
      if (u !== null) {
        t: {
          var i = gt;
          if (Ct) {
            if (fe) {
              e: {
                for (var s = fe, r = Pe; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = ua(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                fe = ua(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            en(i);
          }
          i = !1;
        }
        i && (n = u[0]);
      }
    }
    return u = dl(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _s,
      lastRenderedState: n
    }, u.queue = i, u = xd.bind(
      null,
      gt,
      i
    ), i.dispatch = u, i = Pm(!1), r = Nc.bind(
      null,
      gt,
      !1,
      i.queue
    ), i = dl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = jp.bind(
      null,
      gt,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function Gp(l) {
    var n = xe();
    return Cs(n, $t, l);
  }
  function Cs(l, n, u) {
    if (n = zd(
      l,
      n,
      _s
    )[0], l = iu(cu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Ci(n);
      } catch (m) {
        throw m === Dc ? Bo : m;
      }
    else i = n;
    n = xe();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (gt.flags |= 2048, Bi(
      9,
      { destroy: void 0 },
      uy.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function uy(l, n) {
    l.action = n;
  }
  function cy(l) {
    var n = xe(), u = $t;
    if (u !== null)
      return Cs(n, u, l);
    xe(), n = n.memoizedState, u = xe();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function Bi(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = gt.updateQueue, n === null && (n = Rs(), gt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function iy() {
    return xe().memoizedState;
  }
  function Xo(l, n, u, i) {
    var s = dl();
    gt.flags |= l, s.memoizedState = Bi(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function Qo(l, n, u, i) {
    var s = xe();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    $t !== null && i !== null && Wu(i, $t.memoizedState.deps) ? s.memoizedState = Bi(n, r, u, i) : (gt.flags |= l, s.memoizedState = Bi(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Ud(l, n) {
    Xo(8390656, 8, l, n);
  }
  function _d(l, n) {
    Qo(2048, 8, l, n);
  }
  function oy(l) {
    gt.flags |= 4;
    var n = gt.updateQueue;
    if (n === null)
      n = Rs(), gt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Hs(l) {
    var n = xe().memoizedState;
    return oy({ ref: n, nextImpl: l }), function() {
      if ((Qt & 2) !== 0) throw Error(x(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Cd(l, n) {
    return Qo(4, 2, l, n);
  }
  function fy(l, n) {
    return Qo(4, 4, l, n);
  }
  function Hd(l, n) {
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
  function sy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Qo(4, 4, Hd.bind(null, n, l), u);
  }
  function On() {
  }
  function Bd(l, n) {
    var u = xe();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && Wu(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Xp(l, n) {
    var u = xe();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && Wu(n, i[1]))
      return i[0];
    if (i = l(), $u) {
      Nu(!0);
      try {
        l();
      } finally {
        Nu(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function Bs(l, n, u) {
    return u === void 0 || (uu & 1073741824) !== 0 && (Mt & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = ev(), gt.lanes |= l, Cn |= l, u);
  }
  function ou(l, n, u, i) {
    return Yl(u, n) ? u : tl.current !== null ? (l = Bs(l, u, i), Yl(l, n) || (Le = !0), l) : (uu & 42) === 0 || (uu & 1073741824) !== 0 && (Mt & 261930) === 0 ? (Le = !0, l.memoizedState = u) : (l = ev(), gt.lanes |= l, Cn |= l, n);
  }
  function Nd(l, n, u, i, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = O.T, v = {};
    O.T = v, Nc(l, !1, n, u);
    try {
      var T = s(), U = O.S;
      if (U !== null && U(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var q = bs(
          T,
          i
        );
        ku(
          l,
          n,
          q,
          ma(l)
        );
      } else
        ku(
          l,
          n,
          i,
          ma(l)
        );
    } catch (X) {
      ku(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        ma()
      );
    } finally {
      Q.p = r, m !== null && v.types !== null && (m.types = v.types), O.T = m;
    }
  }
  function Qp() {
  }
  function Vo(l, n, u, i) {
    if (l.tag !== 5) throw Error(x(476));
    var s = Zo(l).queue;
    Nd(
      l,
      s,
      n,
      Z,
      u === null ? Qp : function() {
        return ae(l), u(i);
      }
    );
  }
  function Zo(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cu,
        lastRenderedState: Z
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
        lastRenderedReducer: cu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ae(l) {
    var n = Zo(l);
    n.next === null && (n = l.alternate.memoizedState), ku(
      l,
      n.next.queue,
      {},
      ma()
    );
  }
  function ry() {
    return V(or);
  }
  function Vp() {
    return xe().memoizedState;
  }
  function dy() {
    return xe().memoizedState;
  }
  function fu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ma();
          l = Ku(u);
          var i = Ua(n, l, u);
          i !== null && (na(i, n, u), _c(i, n, u)), n = { cache: ps() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Zp(l, n, u) {
    var i = ma();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l) ? qd(n, u) : (u = Pa(l, n, u, i), u !== null && (na(u, l, i), hy(u, n, i)));
  }
  function xd(l, n, u) {
    var i = ma();
    ku(l, n, u, i);
  }
  function ku(l, n, u, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ns(l)) qd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Yl(v, m))
            return za(l, n, s, 0), ne === null && Aa(), !1;
        } catch {
        }
      if (u = Pa(l, n, s, i), u !== null)
        return na(u, l, i), hy(u, n, i), !0;
    }
    return !1;
  }
  function Nc(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: oh(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l)) {
      if (n) throw Error(x(479));
    } else
      n = Pa(
        l,
        u,
        i,
        2
      ), n !== null && na(n, l, 2);
  }
  function Ns(l) {
    var n = l.alternate;
    return l === gt || n !== null && n === gt;
  }
  function qd(l, n) {
    Ui = Ri = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function hy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, Ln(l, u);
    }
  }
  var xs = {
    readContext: V,
    use: Go,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useLayoutEffect: Re,
    useInsertionEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useSyncExternalStore: Re,
    useId: Re,
    useHostTransitionStatus: Re,
    useFormState: Re,
    useActionState: Re,
    useOptimistic: Re,
    useMemoCache: Re,
    useCacheRefresh: Re
  };
  xs.useEffectEvent = Re;
  var Lp = {
    readContext: V,
    use: Go,
    useCallback: function(l, n) {
      return dl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: V,
    useEffect: Ud,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Xo(
        4194308,
        4,
        Hd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Xo(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Xo(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = dl();
      n = n === void 0 ? null : n;
      var i = l();
      if ($u) {
        Nu(!0);
        try {
          l();
        } finally {
          Nu(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = dl();
      if (u !== void 0) {
        var s = u(n);
        if ($u) {
          Nu(!0);
          try {
            u(n);
          } finally {
            Nu(!1);
          }
        }
      } else s = n;
      return i.memoizedState = i.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, i.queue = l, l = l.dispatch = Zp.bind(
        null,
        gt,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = dl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Pm(l);
      var n = l.queue, u = xd.bind(null, gt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: On,
    useDeferredValue: function(l, n) {
      var u = dl();
      return Bs(u, l, n);
    },
    useTransition: function() {
      var l = Pm(!1);
      return l = Nd.bind(
        null,
        gt,
        l.queue,
        !0,
        !1
      ), dl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = gt, s = dl();
      if (Ct) {
        if (u === void 0)
          throw Error(x(407));
        u = u();
      } else {
        if (u = n(), ne === null)
          throw Error(x(349));
        (Mt & 127) !== 0 || Us(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ud(Od.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, Bi(
        9,
        { destroy: void 0 },
        Im.bind(
          null,
          i,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = dl(), n = ne.identifierPrefix;
      if (Ct) {
        var u = En, i = sa;
        u = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Ds++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = qp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: ry,
    useFormState: ny,
    useActionState: ny,
    useOptimistic: function(l) {
      var n = dl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Nc.bind(
        null,
        gt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ad,
    useCacheRefresh: function() {
      return dl().memoizedState = fu.bind(
        null,
        gt
      );
    },
    useEffectEvent: function(l) {
      var n = dl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((Qt & 2) !== 0)
          throw Error(x(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Yd = {
    readContext: V,
    use: Go,
    useCallback: Bd,
    useContext: V,
    useEffect: _d,
    useImperativeHandle: sy,
    useInsertionEffect: Cd,
    useLayoutEffect: fy,
    useMemo: Xp,
    useReducer: iu,
    useRef: iy,
    useState: function() {
      return iu(cu);
    },
    useDebugValue: On,
    useDeferredValue: function(l, n) {
      var u = xe();
      return ou(
        u,
        $t.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = iu(cu)[0], n = xe().memoizedState;
      return [
        typeof l == "boolean" ? l : Ci(l),
        n
      ];
    },
    useSyncExternalStore: Fm,
    useId: Vp,
    useHostTransitionStatus: ry,
    useFormState: Gp,
    useActionState: Gp,
    useOptimistic: function(l, n) {
      var u = xe();
      return hl(u, $t, l, n);
    },
    useMemoCache: Ad,
    useCacheRefresh: dy
  };
  Yd.useEffectEvent = Hs;
  var wp = {
    readContext: V,
    use: Go,
    useCallback: Bd,
    useContext: V,
    useEffect: _d,
    useImperativeHandle: sy,
    useInsertionEffect: Cd,
    useLayoutEffect: fy,
    useMemo: Xp,
    useReducer: Dd,
    useRef: iy,
    useState: function() {
      return Dd(cu);
    },
    useDebugValue: On,
    useDeferredValue: function(l, n) {
      var u = xe();
      return $t === null ? Bs(u, l, n) : ou(
        u,
        $t.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dd(cu)[0], n = xe().memoizedState;
      return [
        typeof l == "boolean" ? l : Ci(l),
        n
      ];
    },
    useSyncExternalStore: Fm,
    useId: Vp,
    useHostTransitionStatus: ry,
    useFormState: cy,
    useActionState: cy,
    useOptimistic: function(l, n) {
      var u = xe();
      return $t !== null ? hl(u, $t, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ad,
    useCacheRefresh: dy
  };
  wp.useEffectEvent = Hs;
  function Ni(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : ot({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ln = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = ma(), s = Ku(i);
      s.payload = n, u != null && (s.callback = u), n = Ua(l, s, i), n !== null && (na(n, l, i), _c(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = ma(), s = Ku(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Ua(l, s, i), n !== null && (na(n, l, i), _c(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ma(), i = Ku(u);
      i.tag = 2, n != null && (i.callback = n), n = Ua(l, i, u), n !== null && (na(n, l, u), _c(n, l, u));
    }
  };
  function my(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !ka(u, i) || !ka(s, r) : !0;
  }
  function Jp(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && ln.enqueueReplaceState(n, n.state, null);
  }
  function xc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ot({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function jd(l) {
    gi(l);
  }
  function yy(l) {
    console.error(l);
  }
  function Gd(l) {
    gi(l);
  }
  function Lo(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function qs(l, n, u) {
    try {
      var i = l.onCaughtError;
      i(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function py(l, n, u) {
    return u = Ku(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Lo(l, n);
    }, u;
  }
  function vy(l) {
    return l = Ku(l), l.tag = 3, l;
  }
  function gy(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        qs(n, u, i);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      qs(n, u, i), typeof s != "function" && (Te === null ? Te = /* @__PURE__ */ new Set([this]) : Te.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function $g(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && rl(
        n,
        u,
        s,
        !0
      ), u = Fl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return _a === null ? nh() : u.alternate === null && re === 0 && (re = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Di ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), ks(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Di ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), ks(l, i, s)), !1;
        }
        throw Error(x(435, u.tag));
      }
      return ks(l, i, s), nh(), !1;
    }
    if (Ct)
      return n = Fl.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== tu && (l = Error(x(422), { cause: i }), Co(Da(l, u)))) : (i !== tu && (n = Error(x(423), {
        cause: i
      }), Co(
        Da(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Da(i, u), s = py(
        l.stateNode,
        i,
        s
      ), gd(l, s), re !== 4 && (re = 2)), !1;
    var r = Error(x(520), { cause: i });
    if (r = Da(r, u), Js === null ? Js = [r] : Js.push(r), re !== 4 && (re = 2), n === null) return !0;
    i = Da(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = py(u.stateNode, i, l), gd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Te === null || !Te.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = vy(s), gy(
              s,
              l,
              u,
              i
            ), gd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Xd = Error(x(461)), Le = !1;
  function pe(l, n, u, i) {
    n.child = l === null ? Wm(n, null, u, i) : Uc(
      n,
      l.child,
      u,
      i
    );
  }
  function Sy(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i)
        v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return mt(n), i = Os(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = Ed(), l !== null && !Le ? (_i(l, n, s), Ba(l, n, s)) : (Ct && v && Uo(n), n.flags |= 1, pe(l, n, i, s), n.child);
  }
  function by(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Si(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Ty(
        l,
        n,
        r,
        i,
        s
      )) : (l = rd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Zd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ka, u(m, i) && l.ref === n.ref)
        return Ba(l, n, s);
    }
    return n.flags |= 1, l = Qu(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Ty(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ka(r, i) && l.ref === n.ref)
        if (Le = !1, n.pendingProps = i = r, Zd(l, s))
          (l.flags & 131072) !== 0 && (Le = !0);
        else
          return n.lanes = l.lanes, Ba(l, n, s);
    }
    return Qd(
      l,
      n,
      u,
      i,
      s
    );
  }
  function Kp(l, n, u, i) {
    var s = i.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (i = n.child = l.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~r;
        } else i = 0, n.child = null;
        return Pl(
          l,
          n,
          r,
          u,
          i
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ho(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? xp(n, r) : zs(), bd(n);
      else
        return i = n.lanes = 536870912, Pl(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Ho(n, r.cachePool), xp(n, r), Dn(), n.memoizedState = null) : (l !== null && Ho(n, null), zs(), Dn());
    return pe(l, n, s, u), n.child;
  }
  function qc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Pl(l, n, u, i, s) {
    var r = Ra();
    return r = r === null ? null : { parent: Ve._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Ho(n, null), zs(), bd(n), l !== null && rl(l, n, i, !0), n.childLanes = s, null;
  }
  function Ys(l, n) {
    return n = Xs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function ta(l, n, u) {
    return Uc(n, l.child, null, u), l = Ys(n, n.pendingProps), l.flags |= 2, Il(n), n.memoizedState = null, l;
  }
  function $p(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (Ct) {
        if (i.mode === "hidden")
          return l = Ys(n, i), n.lanes = 536870912, qc(null, l);
        if (qo(n), (l = fe) ? (l = Uv(
          l,
          Pe
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Tn !== null ? { id: sa, overflow: En } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Xm(l), u.return = n, n.child = u, sl = n, fe = null)) : l = null, l === null) throw en(n);
        return n.lanes = 536870912, null;
      }
      return Ys(n, i);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (qo(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = ta(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(x(558));
      else if (Le || rl(l, n, u, !1), s = (u & l.childLanes) !== 0, Le || s) {
        if (i = ne, i !== null && (m = ba(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, Xu(l, m), na(i, l, m), Xd;
        nh(), n = ta(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, fe = ua(m.nextSibling), sl = n, Ct = !0, Pn = null, Pe = !1, l !== null && hs(n, l), n = Ys(n, i), n.flags |= 4096;
      return n;
    }
    return l = Qu(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ca(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(x(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qd(l, n, u, i, s) {
    return mt(n), u = Os(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = Ed(), l !== null && !Le ? (_i(l, n, s), Ba(l, n, s)) : (Ct && i && Uo(n), n.flags |= 1, pe(l, n, u, s), n.child);
  }
  function Yc(l, n, u, i, s, r) {
    return mt(n), n.updateQueue = null, u = Yp(
      n,
      i,
      u,
      s
    ), Td(l), i = Ed(), l !== null && !Le ? (_i(l, n, r), Ba(l, n, r)) : (Ct && i && Uo(n), n.flags |= 1, pe(l, n, u, r), n.child);
  }
  function Ey(l, n, u, i, s) {
    if (mt(n), n.stateNode === null) {
      var r = $l, m = u.contextType;
      typeof m == "object" && m !== null && (r = V(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ln, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, As(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? V(m) : $l, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Ni(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && ln.enqueueReplaceState(r, r.state, null), au(n, i, r, s), Cc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, T = xc(u, v);
      r.props = T;
      var U = r.context, q = u.contextType;
      m = $l, typeof q == "object" && q !== null && (m = V(q));
      var X = u.getDerivedStateFromProps;
      q = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || U !== m) && Jp(
        n,
        r,
        i,
        m
      ), Ju = !1;
      var _ = n.memoizedState;
      r.state = _, au(n, i, r, s), Cc(), U = n.memoizedState, v || _ !== U || Ju ? (typeof X == "function" && (Ni(
        n,
        u,
        X,
        i
      ), U = n.memoizedState), (T = Ju || my(
        n,
        u,
        T,
        i,
        _,
        U,
        m
      )) ? (q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = U), r.props = i, r.state = U, r.context = m, i = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, vd(l, n), m = n.memoizedProps, q = xc(u, m), r.props = q, X = n.pendingProps, _ = r.context, U = u.contextType, T = $l, typeof U == "object" && U !== null && (T = V(U)), v = u.getDerivedStateFromProps, (U = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== X || _ !== T) && Jp(
        n,
        r,
        i,
        T
      ), Ju = !1, _ = n.memoizedState, r.state = _, au(n, i, r, s), Cc();
      var N = n.memoizedState;
      m !== X || _ !== N || Ju || l !== null && l.dependencies !== null && Ti(l.dependencies) ? (typeof v == "function" && (Ni(
        n,
        u,
        v,
        i
      ), N = n.memoizedState), (q = Ju || my(
        n,
        u,
        q,
        i,
        _,
        N,
        T
      ) || l !== null && l.dependencies !== null && Ti(l.dependencies)) ? (U || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, N, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        N,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && _ === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && _ === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = N), r.props = i, r.state = N, r.context = T, i = q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && _ === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && _ === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Ca(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = Uc(
      n,
      l.child,
      null,
      s
    ), n.child = Uc(
      n,
      null,
      u,
      s
    )) : pe(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Ba(
      l,
      n,
      s
    ), l;
  }
  function Mn(l, n, u, i) {
    return Ac(), n.flags |= 256, pe(l, n, u, i), n.child;
  }
  var js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Gs(l) {
    return { baseLanes: l, cachePool: Ai() };
  }
  function Ha(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= aa), l;
  }
  function Ay(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (be.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Ct) {
        if (s ? nu(n) : Dn(), (l = fe) ? (l = Uv(
          l,
          Pe
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Tn !== null ? { id: sa, overflow: En } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Xm(l), u.return = n, n.child = u, sl = n, fe = null)) : l = null, l === null) throw en(n);
        return Lc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, s ? (Dn(), s = n.mode, v = Xs(
        { mode: "hidden", children: v },
        s
      ), i = Vu(
        i,
        s,
        u,
        null
      ), v.return = n, i.return = n, v.sibling = i, n.child = v, i = n.child, i.memoizedState = Gs(u), i.childLanes = Ha(
        l,
        m,
        u
      ), n.memoizedState = js, qc(null, i)) : (nu(n), jc(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (nu(n), n.flags &= -257, n = xi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Dn(), n.child = l.child, n.flags |= 128, n = null) : (Dn(), v = i.fallback, s = n.mode, i = Xs(
          { mode: "visible", children: i.children },
          s
        ), v = Vu(
          v,
          s,
          u,
          null
        ), v.flags |= 2, i.return = n, v.return = n, i.sibling = v, n.child = i, Uc(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = Gs(u), i.childLanes = Ha(
          l,
          m,
          u
        ), n.memoizedState = js, n = qc(null, i));
      else if (nu(n), Lc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var U = m.dgst;
        m = U, i = Error(x(419)), i.stack = "", i.digest = m, Co({ value: i, source: null, stack: null }), n = xi(
          l,
          n,
          u
        );
      } else if (Le || rl(l, n, u, !1), m = (u & l.childLanes) !== 0, Le || m) {
        if (m = ne, m !== null && (i = ba(m, u), i !== 0 && i !== T.retryLane))
          throw T.retryLane = i, Xu(l, i), na(m, l, i), Xd;
        un(v) || nh(), n = xi(
          l,
          n,
          u
        );
      } else
        un(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, fe = ua(
          v.nextSibling
        ), sl = n, Ct = !0, Pn = null, Pe = !1, l !== null && hs(n, l), n = jc(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Dn(), v = i.fallback, s = n.mode, T = l.child, U = T.sibling, i = Qu(T, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = T.subtreeFlags & 65011712, U !== null ? v = Qu(
      U,
      v
    ) : (v = Vu(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, i.return = n, i.sibling = v, n.child = i, qc(null, i), i = n.child, v = l.child.memoizedState, v === null ? v = Gs(u) : (s = v.cachePool, s !== null ? (T = Ve._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = Ai(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), i.memoizedState = v, i.childLanes = Ha(
      l,
      m,
      u
    ), n.memoizedState = js, qc(l.child, i)) : (nu(n), u = l.child, l = u.sibling, u = Qu(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function jc(l, n) {
    return n = Xs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Xs(l, n) {
    return l = Be(22, l, null, n), l.lanes = 0, l;
  }
  function xi(l, n, u) {
    return Uc(n, l.child, null, u), l = jc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function qi(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), yd(l.return, n, u);
  }
  function Vd(l, n, u, i, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function zy(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = be.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, tt(be, m), pe(l, n, i, u), i = Ct ? Qe : 0, !v && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && qi(l, u, n);
        else if (l.tag === 19)
          qi(l, u, n);
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
          l = u.alternate, l !== null && Yo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Vd(
          n,
          !1,
          s,
          u,
          r,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Yo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Vd(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        Vd(
          n,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Ba(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Cn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (rl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(x(153));
    if (n.child !== null) {
      for (l = n.child, u = Qu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Qu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Zd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ti(l)));
  }
  function Ld(l, n, u) {
    switch (n.tag) {
      case 3:
        Ja(n, n.stateNode.containerInfo), kl(n, Ve, l.memoizedState.cache), Ac();
        break;
      case 27:
      case 5:
        Jf(n);
        break;
      case 4:
        Ja(n, n.stateNode.containerInfo);
        break;
      case 10:
        kl(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, qo(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (nu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ay(l, n, u) : (nu(n), l = Ba(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        nu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (rl(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return zy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), tt(be, be.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, Kp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        kl(n, Ve, l.memoizedState.cache);
    }
    return Ba(l, n, u);
  }
  function Dy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Le = !0;
      else {
        if (!Zd(l, u) && (n.flags & 128) === 0)
          return Le = !1, Ld(
            l,
            n,
            u
          );
        Le = (l.flags & 131072) !== 0;
      }
    else
      Le = !1, Ct && (n.flags & 1048576) !== 0 && Vm(n, Qe, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (l = Oc(n.elementType), n.type = l, typeof l == "function")
            Si(l) ? (i = xc(l, i), n.tag = 1, n = Ey(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = Qd(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === zl) {
                n.tag = 11, n = Sy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              } else if (s === Ke) {
                n.tag = 14, n = by(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              }
            }
            throw n = xl(l) || l, Error(x(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = xc(
          i,
          n.pendingProps
        ), Ey(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        t: {
          if (Ja(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(x(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, vd(l, n), au(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, kl(n, Ve, i), i !== r.cache && lu(
            n,
            [Ve],
            u,
            !0
          ), Cc(), i = m.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Mn(
                l,
                n,
                i,
                u
              );
              break t;
            } else if (i !== s) {
              s = Da(
                Error(x(424)),
                n
              ), Co(s), n = Mn(
                l,
                n,
                i,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, fe = ua(l.firstChild), sl = n, Ct = !0, Pn = null, Pe = !0, u = Wm(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ac(), i === s) {
              n = Ba(
                l,
                n,
                u
              );
              break t;
            }
            pe(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ca(l, n), l === null ? (u = hf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Ct || (u = n.type, l = n.pendingProps, i = Zc(
          wa.current
        ).createElement(u), i[le] = n, i[wl] = l, Ml(i, u, l), Jt(i), n.stateNode = i) : n.memoizedState = hf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Jf(n), l === null && Ct && (i = n.stateNode = rf(
          n.type,
          n.pendingProps,
          wa.current
        ), sl = n, Pe = !0, s = fe, Bn(n.type) ? (ur = s, fe = ua(i.firstChild)) : fe = s), pe(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ca(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Ct && ((s = i = fe) && (i = Fg(
          i,
          n.type,
          n.pendingProps,
          Pe
        ), i !== null ? (n.stateNode = i, sl = n, fe = ua(i.firstChild), Pe = !1, s = !0) : s = !1), s || en(n)), Jf(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, ff(s, r) ? i = null : m !== null && ff(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Os(
          l,
          n,
          Kg,
          null,
          null,
          u
        ), or._currentValue = s), Ca(l, n), pe(l, n, i, u), n.child;
      case 6:
        return l === null && Ct && ((l = u = fe) && (u = Et(
          u,
          n.pendingProps,
          Pe
        ), u !== null ? (n.stateNode = u, sl = n, fe = null, l = !0) : l = !1), l || en(n)), null;
      case 13:
        return Ay(l, n, u);
      case 4:
        return Ja(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = Uc(
          n,
          null,
          i,
          u
        ) : pe(l, n, i, u), n.child;
      case 11:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return pe(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return pe(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return pe(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, kl(n, n.type, i.value), pe(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, mt(n), s = V(s), i = i(s), n.flags |= 1, pe(l, n, i, u), n.child;
      case 14:
        return by(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Ty(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return zy(l, n, u);
      case 31:
        return $p(l, n, u);
      case 22:
        return Kp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return mt(n), i = V(Ve), l === null ? (s = Ra(), s === null && (s = ne, r = ps(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, As(n), kl(n, Ve, s)) : ((l.lanes & u) !== 0 && (vd(l, n), au(n, null, null, u), Cc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), kl(n, Ve, i)) : (i = r.cache, kl(n, Ve, i), i !== s.cache && lu(
          n,
          [Ve],
          u,
          !0
        ))), pe(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(x(156, n.tag));
  }
  function su(l) {
    l.flags |= 4;
  }
  function Oy(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (nv()) l.flags |= 8192;
        else
          throw Mc = Di, zi;
    } else l.flags &= -16777217;
  }
  function My(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !pa(n))
      if (nv()) l.flags |= 8192;
      else
        throw Mc = Di, zi;
  }
  function jl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? li() : 536870912, l.lanes |= n, Ue |= n);
  }
  function wo(l, n) {
    if (!Ct)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var i = null; u !== null; )
            u.alternate !== null && (i = u), u = u.sibling;
          i === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : i.sibling = null;
      }
  }
  function ht(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function Wp(l, n, u) {
    var i = n.pendingProps;
    switch (hd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ht(n), null;
      case 1:
        return ht(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), zn(Ve), Sa(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (eu(n) ? su(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Zm())), ht(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (su(n), r !== null ? (ht(n), My(n, r)) : (ht(n), Oy(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (su(n), ht(n), My(n, r)) : (ht(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && su(n), ht(n), Oy(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if (W(n), u = wa.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && su(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(x(166));
            return ht(n), null;
          }
          l = lt.current, eu(n) ? ms(n) : (l = rf(s, i, u), n.stateNode = l, su(n));
        }
        return ht(n), null;
      case 5:
        if (W(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && su(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(x(166));
            return ht(n), null;
          }
          if (r = lt.current, eu(n))
            ms(n);
          else {
            var m = Zc(
              wa.current
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
                    r = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? r.multiple = !0 : i.size && (r.size = i.size);
                    break;
                  default:
                    r = typeof i.is == "string" ? m.createElement(s, { is: i.is }) : m.createElement(s);
                }
            }
            r[le] = n, r[wl] = i;
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
            t: switch (Ml(r, s, i), s) {
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
            i && su(n);
          }
        }
        return ht(n), Oy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && su(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(x(166));
          if (l = wa.current, eu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = sl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[le] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || Fy(l.nodeValue, u)), l || en(n, !0);
          } else
            l = Zc(l).createTextNode(
              i
            ), l[le] = n, n.stateNode = l;
        }
        return ht(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = eu(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(x(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(x(557));
              l[le] = n;
            } else
              Ac(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ht(n), l = !1;
          } else
            u = Zm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (Il(n), n) : (Il(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(x(558));
        }
        return ht(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = eu(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(x(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(x(317));
              s[le] = n;
            } else
              Ac(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ht(n), s = !1;
          } else
            s = Zm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Il(n), n) : (Il(n), null);
        }
        return Il(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), jl(n, n.updateQueue), ht(n), null);
      case 4:
        return Sa(), l === null && of(n.stateNode.containerInfo), ht(n), null;
      case 10:
        return zn(n.type), ht(n), null;
      case 19:
        if (k(be), i = n.memoizedState, i === null) return ht(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) wo(i, !1);
          else {
            if (re !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Yo(l), r !== null) {
                  for (n.flags |= 128, wo(i, !1), l = r.updateQueue, n.updateQueue = l, jl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Gm(u, l), u = u.sibling;
                  return tt(
                    be,
                    be.current & 1 | 2
                  ), Ct && tn(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && Dl() > Lt && (n.flags |= 128, s = !0, wo(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = Yo(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, jl(n, l), wo(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !Ct)
                return ht(n), null;
            } else
              2 * Dl() - i.renderingStartTime > Lt && u !== 536870912 && (n.flags |= 128, s = !0, wo(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = Dl(), l.sibling = null, u = be.current, tt(
          be,
          s ? u & 1 | 2 : u & 1
        ), Ct && tn(n, i.treeForkCount), l) : (ht(n), null);
      case 22:
      case 23:
        return Il(n), xo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (ht(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ht(n), u = n.updateQueue, u !== null && jl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && k(Ma), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), zn(Ve), ht(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(x(156, n.tag));
  }
  function kp(l, n) {
    switch (hd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return zn(Ve), Sa(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return W(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Il(n), n.alternate === null)
            throw Error(x(340));
          Ac();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (Il(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(x(340));
          Ac();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return k(be), null;
      case 4:
        return Sa(), null;
      case 10:
        return zn(n.type), null;
      case 22:
      case 23:
        return Il(n), xo(), l !== null && k(Ma), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return zn(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fp(l, n) {
    switch (hd(n), n.tag) {
      case 3:
        zn(Ve), Sa();
        break;
      case 26:
      case 27:
      case 5:
        W(n);
        break;
      case 4:
        Sa();
        break;
      case 31:
        n.memoizedState !== null && Il(n);
        break;
      case 13:
        Il(n);
        break;
      case 19:
        k(be);
        break;
      case 10:
        zn(n.type);
        break;
      case 22:
      case 23:
        Il(n), xo(), l !== null && k(Ma);
        break;
      case 24:
        zn(Ve);
    }
  }
  function an(l, n) {
    try {
      var u = n.updateQueue, i = u !== null ? u.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            i = void 0;
            var r = u.create, m = u.inst;
            i = r(), m.destroy = i;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      kt(n, n.return, v);
    }
  }
  function Na(l, n, u) {
    try {
      var i = n.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & l) === l) {
            var m = i.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var T = u, U = v;
              try {
                U();
              } catch (q) {
                kt(
                  s,
                  T,
                  q
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (q) {
      kt(n, n.return, q);
    }
  }
  function wd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Hc(n, u);
      } catch (i) {
        kt(l, l.return, i);
      }
    }
  }
  function Gc(l, n, u) {
    u.props = xc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      kt(l, n, i);
    }
  }
  function ru(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var i = l.stateNode;
            break;
          case 30:
            i = l.stateNode;
            break;
          default:
            i = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(i) : u.current = i;
      }
    } catch (s) {
      kt(l, n, s);
    }
  }
  function Rn(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          kt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          kt(l, n, s);
        }
      else u.current = null;
  }
  function Ry(l) {
    var n = l.type, u = l.memoizedProps, i = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && i.focus();
          break t;
        case "img":
          u.src ? i.src = u.src : u.srcSet && (i.srcset = u.srcSet);
      }
    } catch (s) {
      kt(l, l.return, s);
    }
  }
  function Jd(l, n, u) {
    try {
      var i = l.stateNode;
      Py(i, l.type, u, n), i[wl] = n;
    } catch (s) {
      kt(l, l.return, s);
    }
  }
  function Uy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Bn(l.type) || l.tag === 4;
  }
  function Jo(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Uy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Bn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ko(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = mn));
    else if (i !== 4 && (i === 27 && Bn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Ko(l, n, u), l = l.sibling; l !== null; )
        Ko(l, n, u), l = l.sibling;
  }
  function $o(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && Bn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for ($o(l, n, u), l = l.sibling; l !== null; )
        $o(l, n, u), l = l.sibling;
  }
  function _y(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Ml(n, i, u), n[le] = l, n[wl] = u;
    } catch (r) {
      kt(l, l.return, r);
    }
  }
  var Fu = !1, We = !1, Kd = !1, Cy = typeof WeakSet == "function" ? WeakSet : Set, ml = null;
  function Wo(l, n) {
    if (l = l.containerInfo, hh = ll, l = bc(l), is(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var i = u.getSelection && u.getSelection();
          if (i && i.rangeCount !== 0) {
            u = i.anchorNode;
            var s = i.anchorOffset, r = i.focusNode;
            i = i.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, v = -1, T = -1, U = 0, q = 0, X = l, _ = null;
            e: for (; ; ) {
              for (var N; X !== u || s !== 0 && X.nodeType !== 3 || (v = m + s), X !== r || i !== 0 && X.nodeType !== 3 || (T = m + i), X.nodeType === 3 && (m += X.nodeValue.length), (N = X.firstChild) !== null; )
                _ = X, X = N;
              for (; ; ) {
                if (X === l) break e;
                if (_ === u && ++U === s && (v = m), _ === r && ++q === i && (T = m), (N = X.nextSibling) !== null) break;
                X = _, _ = X.parentNode;
              }
              X = N;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (mh = { focusedElem: l, selectionRange: u }, ll = !1, ml = n; ml !== null; )
      if (n = ml, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, ml = l;
      else
        for (; ml !== null; ) {
          switch (n = ml, r = n.alternate, l = n.flags, n.tag) {
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
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, i = u.stateNode;
                try {
                  var F = xc(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    F,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (it) {
                  kt(
                    u,
                    u.return,
                    it
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  nr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nr(l);
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
              if ((l & 1024) !== 0) throw Error(x(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, ml = l;
            break;
          }
          ml = n.return;
        }
  }
  function Qs(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Iu(l, u), i & 4 && an(5, u);
        break;
      case 1:
        if (Iu(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              kt(u, u.return, m);
            }
          else {
            var s = xc(
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
              kt(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && wd(u), i & 512 && ru(u, u.return);
        break;
      case 3:
        if (Iu(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
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
            Hc(l, n);
          } catch (m) {
            kt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && _y(u);
      case 26:
      case 5:
        Iu(l, u), n === null && i & 4 && Ry(u), i & 512 && ru(u, u.return);
        break;
      case 12:
        Iu(l, u);
        break;
      case 31:
        Iu(l, u), i & 4 && Ip(l, u);
        break;
      case 13:
        Iu(l, u), i & 4 && Ny(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = xa.bind(
          null,
          u
        ), sf(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || Fu, !i) {
          n = n !== null && n.memoizedState !== null || We, s = Fu;
          var r = We;
          Fu = i, (We = n) && !r ? Un(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Iu(l, u), Fu = s, We = r;
        }
        break;
      case 30:
        break;
      default:
        Iu(l, u);
    }
  }
  function Hy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Hy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Zr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var se = null, ea = !1;
  function du(l, n, u) {
    for (u = u.child; u !== null; )
      By(l, n, u), u = u.sibling;
  }
  function By(l, n, u) {
    if (oa && typeof oa.onCommitFiberUnmount == "function")
      try {
        oa.onCommitFiberUnmount(ei, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        We || Rn(u, n), du(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        We || Rn(u, n);
        var i = se, s = ea;
        Bn(u.type) && (se = u.stateNode, ea = !1), du(
          l,
          n,
          u
        ), Li(u.stateNode), se = i, ea = s;
        break;
      case 5:
        We || Rn(u, n);
      case 6:
        if (i = se, s = ea, se = null, du(
          l,
          n,
          u
        ), se = i, ea = s, se !== null)
          if (ea)
            try {
              (se.nodeType === 9 ? se.body : se.nodeName === "HTML" ? se.ownerDocument.body : se).removeChild(u.stateNode);
            } catch (r) {
              kt(
                u,
                n,
                r
              );
            }
          else
            try {
              se.removeChild(u.stateNode);
            } catch (r) {
              kt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        se !== null && (ea ? (l = se, a0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Tf(l)) : a0(se, u.stateNode));
        break;
      case 4:
        i = se, s = ea, se = u.stateNode.containerInfo, ea = !0, du(
          l,
          n,
          u
        ), se = i, ea = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Na(2, u, n), We || Na(4, u, n), du(
          l,
          n,
          u
        );
        break;
      case 1:
        We || (Rn(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && Gc(
          u,
          n,
          i
        )), du(
          l,
          n,
          u
        );
        break;
      case 21:
        du(
          l,
          n,
          u
        );
        break;
      case 22:
        We = (i = We) || u.memoizedState !== null, du(
          l,
          n,
          u
        ), We = i;
        break;
      default:
        du(
          l,
          n,
          u
        );
    }
  }
  function Ip(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Tf(l);
      } catch (u) {
        kt(n, n.return, u);
      }
    }
  }
  function Ny(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Tf(l);
      } catch (u) {
        kt(n, n.return, u);
      }
  }
  function Vs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Cy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Cy()), n;
      default:
        throw Error(x(435, l.tag));
    }
  }
  function Zs(l, n) {
    var u = Vs(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = Sv.bind(null, l, i);
        i.then(s, s);
      }
    });
  }
  function la(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, m = n, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Bn(v.type)) {
                se = v.stateNode, ea = !1;
                break t;
              }
              break;
            case 5:
              se = v.stateNode, ea = !1;
              break t;
            case 3:
            case 4:
              se = v.stateNode.containerInfo, ea = !0;
              break t;
          }
          v = v.return;
        }
        if (se === null) throw Error(x(160));
        By(r, m, s), se = null, ea = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        $d(n, l), n = n.sibling;
  }
  var St = null;
  function $d(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        la(n, l), ra(l), i & 4 && (Na(3, l, l.return), an(3, l), Na(5, l, l.return));
        break;
      case 1:
        la(n, l), ra(l), i & 512 && (We || u === null || Rn(u, u.return)), i & 64 && Fu && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = St;
        if (la(n, l), ra(l), i & 512 && (We || u === null || Rn(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                t: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[wn] || r[le] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Ml(r, i, u), r[le] = l, Jt(r), i = r;
                      break t;
                    case "link":
                      var m = i0(
                        "link",
                        "href",
                        s
                      ).get(i + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), Ml(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = i0(
                        "meta",
                        "content",
                        s
                      ).get(i + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), Ml(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(x(468, i));
                  }
                  r[le] = l, Jt(r), i = r;
                }
                l.stateNode = i;
              } else
                Sh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = c0(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? Sh(
              s,
              l.type,
              l.stateNode
            ) : c0(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && Jd(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        la(n, l), ra(l), i & 512 && (We || u === null || Rn(u, u.return)), u !== null && i & 4 && Jd(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (la(n, l), ra(l), i & 512 && (We || u === null || Rn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Kn(s, "");
          } catch (F) {
            kt(l, l.return, F);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, Jd(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (Kd = !0);
        break;
      case 6:
        if (la(n, l), ra(l), i & 4) {
          if (l.stateNode === null)
            throw Error(x(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (F) {
            kt(l, l.return, F);
          }
        }
        break;
      case 3:
        if (pf = null, s = St, St = Gl(n.containerInfo), la(n, l), St = s, ra(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Tf(n.containerInfo);
          } catch (F) {
            kt(l, l.return, F);
          }
        Kd && (Kd = !1, xy(l));
        break;
      case 4:
        i = St, St = Gl(
          l.stateNode.containerInfo
        ), la(n, l), ra(l), St = i;
        break;
      case 12:
        la(n, l), ra(l);
        break;
      case 31:
        la(n, l), ra(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 13:
        la(n, l), ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Hn = Dl()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, U = Fu, q = We;
        if (Fu = U || s, We = q || T, la(n, l), We = q, Fu = U, ra(l), i & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Fu || We || Yi(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var X = T.memoizedProps.style, _ = X != null && X.hasOwnProperty("display") ? X.display : null;
                    v.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (F) {
                  kt(T, T.return, F);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (F) {
                  kt(T, T.return, F);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var N = T.stateNode;
                  s ? we(N, !0) : we(T.stateNode, !1);
                } catch (F) {
                  kt(T, T.return, F);
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
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, Zs(l, u))));
        break;
      case 19:
        la(n, l), ra(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        la(n, l), ra(l);
    }
  }
  function ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (Uy(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(x(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Jo(l);
            $o(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Kn(m, ""), u.flags &= -33);
            var v = Jo(l);
            $o(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, U = Jo(l);
            Ko(
              l,
              U,
              T
            );
            break;
          default:
            throw Error(x(161));
        }
      } catch (q) {
        kt(l, l.return, q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function xy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        xy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Iu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Qs(l, n.alternate, n), n = n.sibling;
  }
  function Yi(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Na(4, n, n.return), Yi(n);
          break;
        case 1:
          Rn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Gc(
            n,
            n.return,
            u
          ), Yi(n);
          break;
        case 27:
          Li(n.stateNode);
        case 26:
        case 5:
          Rn(n, n.return), Yi(n);
          break;
        case 22:
          n.memoizedState === null && Yi(n);
          break;
        case 30:
          Yi(n);
          break;
        default:
          Yi(n);
      }
      l = l.sibling;
    }
  }
  function Un(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            s,
            r,
            u
          ), an(4, r);
          break;
        case 1:
          if (Un(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (U) {
              kt(i, i.return, U);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var v = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Sd(T[s], v);
            } catch (U) {
              kt(i, i.return, U);
            }
          }
          u && m & 64 && wd(r), ru(r, r.return);
          break;
        case 27:
          _y(r);
        case 26:
        case 5:
          Un(
            s,
            r,
            u
          ), u && i === null && m & 4 && Ry(r), ru(r, r.return);
          break;
        case 12:
          Un(
            s,
            r,
            u
          );
          break;
        case 31:
          Un(
            s,
            r,
            u
          ), u && m & 4 && Ip(s, r);
          break;
        case 13:
          Un(
            s,
            r,
            u
          ), u && m & 4 && Ny(s, r);
          break;
        case 22:
          r.memoizedState === null && Un(
            s,
            r,
            u
          ), ru(r, r.return);
          break;
        case 30:
          break;
        default:
          Un(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Wd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && vs(u));
  }
  function kd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && vs(l));
  }
  function nn(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        ko(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function ko(l, n, u, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        nn(
          l,
          n,
          u,
          i
        ), s & 2048 && an(9, n);
        break;
      case 1:
        nn(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        nn(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && vs(l)));
        break;
      case 12:
        if (s & 2048) {
          nn(
            l,
            n,
            u,
            i
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            kt(n, n.return, T);
          }
        } else
          nn(
            l,
            n,
            u,
            i
          );
        break;
      case 31:
        nn(
          l,
          n,
          u,
          i
        );
        break;
      case 13:
        nn(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? nn(
          l,
          n,
          u,
          i
        ) : Ls(l, n) : r._visibility & 2 ? nn(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, Fo(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Wd(m, n);
        break;
      case 24:
        nn(
          l,
          n,
          u,
          i
        ), s & 2048 && kd(n.alternate, n);
        break;
      default:
        nn(
          l,
          n,
          u,
          i
        );
    }
  }
  function Fo(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, T = i, U = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Fo(
            r,
            m,
            v,
            T,
            s
          ), an(8, m);
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          m.memoizedState !== null ? q._visibility & 2 ? Fo(
            r,
            m,
            v,
            T,
            s
          ) : Ls(
            r,
            m
          ) : (q._visibility |= 2, Fo(
            r,
            m,
            v,
            T,
            s
          )), s && U & 2048 && Wd(
            m.alternate,
            m
          );
          break;
        case 24:
          Fo(
            r,
            m,
            v,
            T,
            s
          ), s && U & 2048 && kd(m.alternate, m);
          break;
        default:
          Fo(
            r,
            m,
            v,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Ls(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            Ls(u, i), s & 2048 && Wd(
              i.alternate,
              i
            );
            break;
          case 24:
            Ls(u, i), s & 2048 && kd(i.alternate, i);
            break;
          default:
            Ls(u, i);
        }
        n = n.sibling;
      }
  }
  var da = 8192;
  function hu(l, n, u) {
    if (l.subtreeFlags & da)
      for (l = l.child; l !== null; )
        Pp(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function Pp(l, n, u) {
    switch (l.tag) {
      case 26:
        hu(
          l,
          n,
          u
        ), l.flags & da && l.memoizedState !== null && gu(
          u,
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        hu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var i = St;
        St = Gl(l.stateNode.containerInfo), hu(
          l,
          n,
          u
        ), St = i;
        break;
      case 22:
        l.memoizedState === null && (i = l.alternate, i !== null && i.memoizedState !== null ? (i = da, da = 16777216, hu(
          l,
          n,
          u
        ), da = i) : hu(
          l,
          n,
          u
        ));
        break;
      default:
        hu(
          l,
          n,
          u
        );
    }
  }
  function Fd(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Io(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          ml = i, Id(
            i,
            l
          );
        }
      Fd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        qy(l), l = l.sibling;
  }
  function qy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Io(l), l.flags & 2048 && Na(9, l, l.return);
        break;
      case 3:
        Io(l);
        break;
      case 12:
        Io(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ws(l)) : Io(l);
        break;
      default:
        Io(l);
    }
  }
  function ws(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          ml = i, Id(
            i,
            l
          );
        }
      Fd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, n, n.return), ws(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ws(n));
          break;
        default:
          ws(n);
      }
      l = l.sibling;
    }
  }
  function Id(l, n) {
    for (; ml !== null; ) {
      var u = ml;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          vs(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, ml = i;
      else
        t: for (u = l; ml !== null; ) {
          i = ml;
          var s = i.sibling, r = i.return;
          if (Hy(i), i === u) {
            ml = null;
            break t;
          }
          if (s !== null) {
            s.return = r, ml = s;
            break t;
          }
          ml = r;
        }
    }
  }
  var tv = {
    getCacheForType: function(l) {
      var n = V(Ve), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return V(Ve).controller.signal;
    }
  }, Yy = typeof WeakMap == "function" ? WeakMap : Map, Qt = 0, ne = null, Ht = null, Mt = 0, Wt = 0, st = null, mu = !1, Xc = !1, Pd = !1, _n = 0, re = 0, Cn = 0, ji = 0, th = 0, aa = 0, Ue = 0, Js = null, _e = null, eh = !1, Hn = 0, jy = 0, Lt = 1 / 0, Po = null, Te = null, el = 0, Pu = null, Qc = null, yu = 0, ha = 0, lh = null, ah = null, tf = 0, Ks = null;
  function ma() {
    return (Qt & 2) !== 0 && Mt !== 0 ? Mt & -Mt : O.T !== null ? oh() : Qr();
  }
  function ev() {
    if (aa === 0)
      if ((Mt & 536870912) === 0 || Ct) {
        var l = rn;
        rn <<= 1, (rn & 3932160) === 0 && (rn = 262144), aa = l;
      } else aa = 536870912;
    return l = Fl.current, l !== null && (l.flags |= 32), aa;
  }
  function na(l, n, u) {
    (l === ne && (Wt === 2 || Wt === 9) || l.cancelPendingCommit !== null) && (pu(l, 0), tc(
      l,
      Mt,
      aa,
      !1
    )), ho(l, u), ((Qt & 2) === 0 || l !== ne) && (l === ne && ((Qt & 2) === 0 && (ji |= u), re === 4 && tc(
      l,
      Mt,
      aa,
      !1
    )), vu(l));
  }
  function lv(l, n, u) {
    if ((Qt & 6) !== 0) throw Error(x(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || dn(l, n), s = i ? iv(l, n) : uh(l, n, !0), r = i;
    do {
      if (s === 0) {
        Xc && !i && tc(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !av(u)) {
          s = uh(l, n, !1), r = !1;
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
              var v = l;
              s = Js;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (pu(v, m).flags |= 256), m = uh(
                v,
                m,
                !1
              ), m !== 2) {
                if (Pd && !T) {
                  v.errorRecoveryDisabledLanes |= r, ji |= r, s = 4;
                  break t;
                }
                r = _e, _e = s, r !== null && (_e === null ? _e = r : _e.push.apply(
                  _e,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          pu(l, 0), tc(l, n, 0, !0);
          break;
        }
        t: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(x(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              tc(
                i,
                n,
                aa,
                !mu
              );
              break t;
            case 2:
              _e = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if ((n & 62914560) === n && (s = Hn + 300 - Dl(), 10 < s)) {
            if (tc(
              i,
              n,
              aa,
              !mu
            ), Xe(i, 0, !0) !== 0) break t;
            yu = n, i.timeoutHandle = ar(
              $s.bind(
                null,
                i,
                u,
                _e,
                Po,
                eh,
                n,
                aa,
                ji,
                Ue,
                mu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          $s(
            i,
            u,
            _e,
            Po,
            eh,
            n,
            aa,
            ji,
            Ue,
            mu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    vu(l);
  }
  function $s(l, n, u, i, s, r, m, v, T, U, q, X, _, N) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, Pp(
        n,
        r,
        X
      );
      var F = (r & 62914560) === r ? Hn - Dl() : (r & 4194048) === r ? jy - Dl() : 0;
      if (F = f0(
        X,
        F
      ), F !== null) {
        yu = r, l.cancelPendingCommit = F(
          rv.bind(
            null,
            l,
            n,
            r,
            u,
            i,
            s,
            m,
            v,
            T,
            q,
            X,
            null,
            _,
            N
          )
        ), tc(l, r, m, !U);
        return;
      }
    }
    rv(
      l,
      n,
      r,
      u,
      i,
      s,
      m,
      v,
      T
    );
  }
  function av(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Yl(r(), s)) return !1;
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
  function tc(l, n, u, i) {
    n &= ~th, n &= ~ji, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ll(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && kf(l, u, n);
  }
  function ef() {
    return (Qt & 6) === 0 ? (lc(0), !1) : !0;
  }
  function Gy() {
    if (Ht !== null) {
      if (Wt === 0)
        var l = Ht.return;
      else
        l = Ht, An = Zu = null, Ms(l), Rc = null, Oi = 0, l = Ht;
      for (; l !== null; )
        Fp(l.alternate, l), l = l.return;
      Ht = null;
    }
  }
  function pu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Mv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), yu = 0, Gy(), ne = l, Ht = u = Qu(l.current, null), Mt = n, Wt = 0, st = null, mu = !1, Xc = dn(l, n), Pd = !1, Ue = aa = th = ji = Cn = re = 0, _e = Js = null, eh = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Ll(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return _n = n, Aa(), u;
  }
  function lf(l, n) {
    gt = null, O.H = xs, n === Dc || n === Bo ? (n = $m(), Wt = 3) : n === zi ? (n = $m(), Wt = 4) : Wt = n === Xd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, st = n, Ht === null && (re = 1, Lo(
      l,
      Da(n, l.current)
    ));
  }
  function nv() {
    var l = Fl.current;
    return l === null ? !0 : (Mt & 4194048) === Mt ? _a === null : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0 ? l === _a : !1;
  }
  function uv() {
    var l = O.H;
    return O.H = xs, l === null ? xs : l;
  }
  function cv() {
    var l = O.A;
    return O.A = tv, l;
  }
  function nh() {
    re = 4, mu || (Mt & 4194048) !== Mt && Fl.current !== null || (Xc = !0), (Cn & 134217727) === 0 && (ji & 134217727) === 0 || ne === null || tc(
      ne,
      Mt,
      aa,
      !1
    );
  }
  function uh(l, n, u) {
    var i = Qt;
    Qt |= 2;
    var s = uv(), r = cv();
    (ne !== l || Mt !== n) && (Po = null, pu(l, n)), n = !1;
    var m = re;
    t: do
      try {
        if (Wt !== 0 && Ht !== null) {
          var v = Ht, T = st;
          switch (Wt) {
            case 8:
              Gy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Fl.current === null && (n = !0);
              var U = Wt;
              if (Wt = 0, st = null, Gi(l, v, T, U), u && Xc) {
                m = 0;
                break t;
              }
              break;
            default:
              U = Wt, Wt = 0, st = null, Gi(l, v, T, U);
          }
        }
        Wg(), m = re;
        break;
      } catch (q) {
        lf(l, q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, An = Zu = null, Qt = i, O.H = s, O.A = r, Ht === null && (ne = null, Mt = 0, Aa()), m;
  }
  function Wg() {
    for (; Ht !== null; ) ov(Ht);
  }
  function iv(l, n) {
    var u = Qt;
    Qt |= 2;
    var i = uv(), s = cv();
    ne !== l || Mt !== n ? (Po = null, Lt = Dl() + 500, pu(l, n)) : Xc = dn(
      l,
      n
    );
    t: do
      try {
        if (Wt !== 0 && Ht !== null) {
          n = Ht;
          var r = st;
          e: switch (Wt) {
            case 1:
              Wt = 0, st = null, Gi(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Jm(r)) {
                Wt = 0, st = null, fv(n);
                break;
              }
              n = function() {
                Wt !== 2 && Wt !== 9 || ne !== l || (Wt = 7), vu(l);
              }, r.then(n, n);
              break t;
            case 3:
              Wt = 7;
              break t;
            case 4:
              Wt = 5;
              break t;
            case 7:
              Jm(r) ? (Wt = 0, st = null, fv(n)) : (Wt = 0, st = null, Gi(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Ht.tag) {
                case 26:
                  m = Ht.memoizedState;
                case 5:
                case 27:
                  var v = Ht;
                  if (m ? pa(m) : v.stateNode.complete) {
                    Wt = 0, st = null;
                    var T = v.sibling;
                    if (T !== null) Ht = T;
                    else {
                      var U = v.return;
                      U !== null ? (Ht = U, Ws(U)) : Ht = null;
                    }
                    break e;
                  }
              }
              Wt = 0, st = null, Gi(l, n, r, 5);
              break;
            case 6:
              Wt = 0, st = null, Gi(l, n, r, 6);
              break;
            case 8:
              Gy(), re = 6;
              break t;
            default:
              throw Error(x(462));
          }
        }
        Vc();
        break;
      } catch (q) {
        lf(l, q);
      }
    while (!0);
    return An = Zu = null, O.H = i, O.A = s, Qt = u, Ht !== null ? 0 : (ne = null, Mt = 0, Aa(), re);
  }
  function Vc() {
    for (; Ht !== null && !ti(); )
      ov(Ht);
  }
  function ov(l) {
    var n = Dy(l.alternate, l, _n);
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Ht = n;
  }
  function fv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Yc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Mt
        );
        break;
      case 11:
        n = Yc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Mt
        );
        break;
      case 5:
        Ms(n);
      default:
        Fp(u, n), n = Ht = Gm(n, _n), n = Dy(u, n, _n);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Ht = n;
  }
  function Gi(l, n, u, i) {
    An = Zu = null, Ms(n), Rc = null, Oi = 0;
    var s = n.return;
    try {
      if ($g(
        l,
        s,
        n,
        u,
        Mt
      )) {
        re = 1, Lo(
          l,
          Da(u, l.current)
        ), Ht = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Ht = s, r;
      re = 1, Lo(
        l,
        Da(u, l.current)
      ), Ht = null;
      return;
    }
    n.flags & 32768 ? (Ct || i === 1 ? l = !0 : Xc || (Mt & 536870912) !== 0 ? l = !1 : (mu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Fl.current, i !== null && i.tag === 13 && (i.flags |= 16384))), sv(n, l)) : Ws(n);
  }
  function Ws(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        sv(
          n,
          mu
        );
        return;
      }
      l = n.return;
      var u = Wp(
        n.alternate,
        n,
        _n
      );
      if (u !== null) {
        Ht = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ht = n;
        return;
      }
      Ht = n = l;
    } while (n !== null);
    re === 0 && (re = 5);
  }
  function sv(l, n) {
    do {
      var u = kp(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Ht = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Ht = l;
        return;
      }
      Ht = l = u;
    } while (l !== null);
    re = 6, Ht = null;
  }
  function rv(l, n, u, i, s, r, m, v, T) {
    l.cancelPendingCommit = null;
    do
      af();
    while (el !== 0);
    if ((Qt & 6) !== 0) throw Error(x(327));
    if (n !== null) {
      if (n === l.current) throw Error(x(177));
      if (r = n.lanes | n.childLanes, r |= Ia, Gr(
        l,
        u,
        r,
        m,
        v,
        T
      ), l === ne && (Ht = ne = null, Mt = 0), Qc = n, Pu = l, yu = u, ha = r, lh = s, ah = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, bv(rc, function() {
        return pv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null, s = Q.p, Q.p = 2, m = Qt, Qt |= 4;
        try {
          Wo(l, n, u);
        } finally {
          Qt = m, Q.p = s, O.T = i;
        }
      }
      el = 1, dv(), hv(), mv();
    }
  }
  function dv() {
    if (el === 1) {
      el = 0;
      var l = Pu, n = Qc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = Qt;
        Qt |= 4;
        try {
          $d(n, l);
          var r = mh, m = bc(l.containerInfo), v = r.focusedElem, T = r.selectionRange;
          if (m !== v && v && v.ownerDocument && pi(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && is(v)) {
              var U = T.start, q = T.end;
              if (q === void 0 && (q = U), "selectionStart" in v)
                v.selectionStart = U, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var X = v.ownerDocument || document, _ = X && X.defaultView || window;
                if (_.getSelection) {
                  var N = _.getSelection(), F = v.textContent.length, it = Math.min(T.start, F), ce = T.end === void 0 ? it : Math.min(T.end, F);
                  !N.extend && it > ce && (m = ce, ce = it, it = m);
                  var M = Ym(
                    v,
                    it
                  ), z = Ym(
                    v,
                    ce
                  );
                  if (M && z && (N.rangeCount !== 1 || N.anchorNode !== M.node || N.anchorOffset !== M.offset || N.focusNode !== z.node || N.focusOffset !== z.offset)) {
                    var R = X.createRange();
                    R.setStart(M.node, M.offset), N.removeAllRanges(), it > ce ? (N.addRange(R), N.extend(z.node, z.offset)) : (R.setEnd(z.node, z.offset), N.addRange(R));
                  }
                }
              }
            }
            for (X = [], N = v; N = N.parentNode; )
              N.nodeType === 1 && X.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < X.length; v++) {
              var G = X[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          ll = !!hh, mh = hh = null;
        } finally {
          Qt = s, Q.p = i, O.T = u;
        }
      }
      l.current = n, el = 2;
    }
  }
  function hv() {
    if (el === 2) {
      el = 0;
      var l = Pu, n = Qc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = Qt;
        Qt |= 4;
        try {
          Qs(l, n.alternate, n);
        } finally {
          Qt = s, Q.p = i, O.T = u;
        }
      }
      el = 3;
    }
  }
  function mv() {
    if (el === 4 || el === 3) {
      el = 0, qr();
      var l = Pu, n = Qc, u = yu, i = ah;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? el = 5 : (el = 0, Qc = Pu = null, yv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Te = null), rm(u), n = n.stateNode, oa && typeof oa.onCommitFiberRoot == "function")
        try {
          oa.onCommitFiberRoot(
            ei,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = O.T, s = Q.p, Q.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = n, Q.p = s;
        }
      }
      (yu & 3) !== 0 && af(), vu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Ks ? tf++ : (tf = 0, Ks = l) : tf = 0, lc(0);
    }
  }
  function yv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, vs(n)));
  }
  function af() {
    return dv(), hv(), mv(), pv();
  }
  function pv() {
    if (el !== 5) return !1;
    var l = Pu, n = ha;
    ha = 0;
    var u = rm(yu), i = O.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, O.T = null, u = lh, lh = null;
      var r = Pu, m = yu;
      if (el = 0, Qc = Pu = null, yu = 0, (Qt & 6) !== 0) throw Error(x(331));
      var v = Qt;
      if (Qt |= 4, qy(r.current), ko(
        r,
        r.current,
        m,
        u
      ), Qt = v, lc(0, !1), oa && typeof oa.onPostCommitFiberRoot == "function")
        try {
          oa.onPostCommitFiberRoot(ei, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, O.T = i, yv(l, n);
    }
  }
  function vv(l, n, u) {
    n = Da(u, n), n = py(l.stateNode, n, 2), l = Ua(l, n, 2), l !== null && (ho(l, 2), vu(l));
  }
  function kt(l, n, u) {
    if (l.tag === 3)
      vv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          vv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Te === null || !Te.has(i))) {
            l = Da(u, l), u = vy(2), i = Ua(n, u, 2), i !== null && (gy(
              u,
              i,
              n,
              l
            ), ho(i, 2), vu(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function ks(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new Yy();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (Pd = !0, s.add(u), l = Xy.bind(null, l, n, u), n.then(l, l));
  }
  function Xy(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ne === l && (Mt & u) === u && (re === 4 || re === 3 && (Mt & 62914560) === Mt && 300 > Dl() - Hn ? (Qt & 2) === 0 && pu(l, 0) : th |= u, Ue === Mt && (Ue = 0)), vu(l);
  }
  function gv(l, n) {
    n === 0 && (n = li()), l = Xu(l, n), l !== null && (ho(l, n), vu(l));
  }
  function xa(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), gv(l, u);
  }
  function Sv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var i = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        i = l.stateNode;
        break;
      case 22:
        i = l.stateNode._retryCache;
        break;
      default:
        throw Error(x(314));
    }
    i !== null && i.delete(n), gv(l, u);
  }
  function bv(l, n) {
    return oe(l, n);
  }
  var nf = null, Xi = null, Qy = !1, ch = !1, Vy = !1, ec = 0;
  function vu(l) {
    l !== Xi && l.next === null && (Xi === null ? nf = Xi = l : Xi = Xi.next = l), ch = !0, Qy || (Qy = !0, Is());
  }
  function lc(l, n) {
    if (!Vy && ch) {
      Vy = !0;
      do
        for (var u = !1, i = nf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, v = i.pingedLanes;
              r = (1 << 31 - Ll(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Qi(i, r));
          } else
            r = Mt, r = Xe(
              i,
              i === ne ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || dn(i, r) || (u = !0, Qi(i, r));
          i = i.next;
        }
      while (u);
      Vy = !1;
    }
  }
  function ih() {
    Zy();
  }
  function Zy() {
    ch = Qy = !1;
    var l = 0;
    ec !== 0 && kg() && (l = ec);
    for (var n = Dl(), u = null, i = nf; i !== null; ) {
      var s = i.next, r = Ly(i, n);
      r === 0 ? (i.next = null, u === null ? nf = s : u.next = s, s === null && (Xi = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (ch = !0)), i = s;
    }
    el !== 0 && el !== 5 || lc(l), ec !== 0 && (ec = 0);
  }
  function Ly(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ll(r), v = 1 << m, T = s[m];
      T === -1 ? ((v & u) === 0 || (v & i) !== 0) && (s[m] = ro(v, n)) : T <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = ne, u = Mt, u = Xe(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (Wt === 2 || Wt === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && om(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || dn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && om(i), rm(u)) {
        case 2:
        case 8:
          u = jr;
          break;
        case 32:
          u = rc;
          break;
        case 268435456:
          u = fm;
          break;
        default:
          u = rc;
      }
      return i = Fs.bind(null, l), u = oe(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && om(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Fs(l, n) {
    if (el !== 0 && el !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (af() && l.callbackNode !== u)
      return null;
    var i = Mt;
    return i = Xe(
      l,
      l === ne ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (lv(l, i, n), Ly(l, Dl()), l.callbackNode != null && l.callbackNode === u ? Fs.bind(null, l) : null);
  }
  function Qi(l, n) {
    if (af()) return null;
    lv(l, n, !0);
  }
  function Is() {
    Rv(function() {
      (Qt & 6) !== 0 ? oe(
        Yr,
        ih
      ) : Zy();
    });
  }
  function oh() {
    if (ec === 0) {
      var l = zc;
      l === 0 && (l = xu, xu <<= 1, (xu & 261888) === 0 && (xu = 256)), ec = l;
    }
    return ec;
  }
  function Tv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : $a("" + l);
  }
  function Vi(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Ps(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Tv(
        (s[wl] || null).action
      ), m = i.submitter;
      m && (n = (n = m[wl] || null) ? Tv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new ns(
        "action",
        "action",
        null,
        i,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (ec !== 0) {
                  var T = m ? Vi(s, m) : new FormData(s);
                  Vo(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), T = m ? Vi(s, m) : new FormData(s), Vo(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var fh = 0; fh < Mo.length; fh++) {
    var uf = Mo[fh], wy = uf.toLowerCase(), Jy = uf[0].toUpperCase() + uf.slice(1);
    Kl(
      wy,
      "on" + Jy
    );
  }
  Kl(fs, "onAnimationEnd"), Kl(jm, "onAnimationIteration"), Kl(fd, "onAnimationStart"), Kl("dblclick", "onDoubleClick"), Kl("focusin", "onFocus"), Kl("focusout", "onBlur"), Kl(vi, "onTransitionRun"), Kl(ss, "onTransitionStart"), Kl(Fn, "onTransitionCancel"), Kl(Hp, "onTransitionEnd"), Jn("onMouseEnter", ["mouseout", "mouseover"]), Jn("onMouseLeave", ["mouseout", "mouseover"]), Jn("onPointerEnter", ["pointerout", "pointerover"]), Jn("onPointerLeave", ["pointerout", "pointerover"]), yc(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), yc(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), yc("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), yc(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), yc(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), yc(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var cf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ev = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cf)
  );
  function Av(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = i.length - 1; 0 <= m; m--) {
            var v = i[m], T = v.instance, U = v.currentTarget;
            if (v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = U;
            try {
              r(s);
            } catch (q) {
              gi(q);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (v = i[m], T = v.instance, U = v.currentTarget, v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = U;
            try {
              r(s);
            } catch (q) {
              gi(q);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function Ut(l, n) {
    var u = n[Vr];
    u === void 0 && (u = n[Vr] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (tr(n, l, 2, !1), u.add(i));
  }
  function Ky(l, n, u) {
    var i = 0;
    n && (i |= 4), tr(
      u,
      l,
      i,
      n
    );
  }
  var sh = "_reactListening" + Math.random().toString(36).slice(2);
  function of(l) {
    if (!l[sh]) {
      l[sh] = !0, ci.forEach(function(u) {
        u !== "selectionchange" && (Ev.has(u) || Ky(u, !1, l), Ky(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[sh] || (n[sh] = !0, Ky("selectionchange", !1, n));
    }
  }
  function tr(l, n, u, i) {
    switch (fr(n)) {
      case 2:
        var s = Su;
        break;
      case 8:
        s = bu;
        break;
      default:
        s = Rl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ls || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function $y(l, n, u, i, s) {
    var r = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var v = i.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = ai(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = r = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    bm(function() {
      var U = r, q = kr(u), X = [];
      t: {
        var _ = In.get(l);
        if (_ !== void 0) {
          var N = ns, F = l;
          switch (l) {
            case "keypress":
              if (Ir(u) === 0) break t;
            case "keydown":
            case "keyup":
              N = ld;
              break;
            case "focusin":
              F = "focus", N = td;
              break;
            case "focusout":
              F = "blur", N = td;
              break;
            case "beforeblur":
            case "afterblur":
              N = td;
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
              N = Eo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = bp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Dp;
              break;
            case fs:
            case jm:
            case fd:
              N = Ep;
              break;
            case Hp:
              N = Lg;
              break;
            case "scroll":
            case "scrollend":
              N = Vg;
              break;
            case "wheel":
              N = wg;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = si;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = vn;
              break;
            case "toggle":
            case "beforetoggle":
              N = Um;
          }
          var it = (n & 4) !== 0, ce = !it && (l === "scroll" || l === "scrollend"), M = it ? _ !== null ? _ + "Capture" : null : _;
          it = [];
          for (var z = U, R; z !== null; ) {
            var G = z;
            if (R = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || R === null || M === null || (G = ol(z, M), G != null && it.push(
              er(z, G, R)
            )), ce) break;
            z = z.return;
          }
          0 < it.length && (_ = new N(
            _,
            F,
            null,
            u,
            q
          ), X.push({ event: _, listeners: it }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (_ = l === "mouseover" || l === "pointerover", N = l === "mouseout" || l === "pointerout", _ && u !== Wr && (F = u.relatedTarget || u.fromElement) && (ai(F) || F[hc]))
            break t;
          if ((N || _) && (_ = q.window === q ? q : (_ = q.ownerDocument) ? _.defaultView || _.parentWindow : window, N ? (F = u.relatedTarget || u.toElement, N = U, F = F ? ai(F) : null, F !== null && (ce = ge(F), it = F.tag, F !== ce || it !== 5 && it !== 27 && it !== 6) && (F = null)) : (N = null, F = U), N !== F)) {
            if (it = Eo, G = "onMouseLeave", M = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (it = vn, G = "onPointerLeave", M = "onPointerEnter", z = "pointer"), ce = N == null ? _ : mo(N), R = F == null ? _ : mo(F), _ = new it(
              G,
              z + "leave",
              N,
              u,
              q
            ), _.target = ce, _.relatedTarget = R, G = null, ai(q) === U && (it = new it(
              M,
              z + "enter",
              F,
              u,
              q
            ), it.target = R, it.relatedTarget = ce, G = it), ce = G, N && F)
              e: {
                for (it = zv, M = N, z = F, R = 0, G = M; G; G = it(G))
                  R++;
                G = 0;
                for (var at = z; at; at = it(at))
                  G++;
                for (; 0 < R - G; )
                  M = it(M), R--;
                for (; 0 < G - R; )
                  z = it(z), G--;
                for (; R--; ) {
                  if (M === z || z !== null && M === z.alternate) {
                    it = M;
                    break e;
                  }
                  M = it(M), z = it(z);
                }
                it = null;
              }
            else it = null;
            N !== null && rh(
              X,
              _,
              N,
              it,
              !1
            ), F !== null && ce !== null && rh(
              X,
              ce,
              F,
              it,
              !0
            );
          }
        }
        t: {
          if (_ = U ? mo(U) : window, N = _.nodeName && _.nodeName.toLowerCase(), N === "select" || N === "input" && _.type === "file")
            var Gt = Nm;
          else if (kn(_))
            if (ud)
              Gt = yi;
            else {
              Gt = _p;
              var I = Up;
            }
          else
            N = _.nodeName, !N || N.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? U && Sm(U.elementType) && (Gt = Nm) : Gt = Sc;
          if (Gt && (Gt = Gt(l, U))) {
            Bm(
              X,
              Gt,
              u,
              q
            );
            break t;
          }
          I && I(l, _, U), l === "focusout" && U && _.type === "number" && U.memoizedProps.value != null && ii(_, "number", _.value);
        }
        switch (I = U ? mo(U) : window, l) {
          case "focusin":
            (kn(I) || I.contentEditable === "true") && (Tc = I, Do = U, Fa = null);
            break;
          case "focusout":
            Fa = Do = Tc = null;
            break;
          case "mousedown":
            Sn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sn = !1, od(X, u, q);
            break;
          case "selectionchange":
            if (os) break;
          case "keydown":
          case "keyup":
            od(X, u, q);
        }
        var vt;
        if (Ao)
          t: {
            switch (l) {
              case "compositionstart":
                var bt = "onCompositionStart";
                break t;
              case "compositionend":
                bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                bt = "onCompositionUpdate";
                break t;
            }
            bt = void 0;
          }
        else
          di ? nd(l, u) && (bt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (bt = "onCompositionStart");
        bt && (_m && u.locale !== "ko" && (di || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && di && (vt = Em()) : (ju = q, Tm = "value" in ju ? ju.value : ju.textContent, di = !0)), I = lr(U, bt), 0 < I.length && (bt = new Ap(
          bt,
          l,
          null,
          u,
          q
        ), X.push({ event: bt, listeners: I }), vt ? bt.data = vt : (vt = Cm(u), vt !== null && (bt.data = vt)))), (vt = ql ? Rp(l, u) : Jg(l, u)) && (bt = lr(U, "onBeforeInput"), 0 < bt.length && (I = new Ap(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          q
        ), X.push({
          event: I,
          listeners: bt
        }), I.data = vt)), Ps(
          X,
          l,
          U,
          u,
          q
        );
      }
      Av(X, n);
    });
  }
  function er(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function lr(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = ol(l, u), s != null && i.unshift(
        er(l, s, r)
      ), s = ol(l, n), s != null && i.push(
        er(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function zv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function rh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var v = u, T = v.alternate, U = v.stateNode;
      if (v = v.tag, T !== null && T === i) break;
      v !== 5 && v !== 26 && v !== 27 || U === null || (T = U, s ? (U = ol(u, r), U != null && m.unshift(
        er(u, U, T)
      )) : s || (U = ol(u, r), U != null && m.push(
        er(u, U, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Dv = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function ky(l) {
    return (typeof l == "string" ? l : "" + l).replace(Dv, `
`).replace(Wy, "");
  }
  function Fy(l, n) {
    return n = ky(n), ky(l) === n;
  }
  function ue(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || Kn(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && Kn(l, "" + i);
        break;
      case "className":
        Jr(l, "class", i);
        break;
      case "tabIndex":
        Jr(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jr(l, u, i);
        break;
      case "style":
        vp(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          Jr(l, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = $a("" + i), l.setAttribute(u, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && ue(l, n, "name", s.name, s, null), ue(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), ue(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), ue(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (ue(l, n, "encType", s.encType, s, null), ue(l, n, "method", s.method, s, null), ue(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = $a("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = mn);
        break;
      case "onScroll":
        i != null && Ut("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Ut("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(x(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(x(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        l.muted = i && typeof i != "function" && typeof i != "symbol";
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
          l.removeAttribute("xlink:href");
          break;
        }
        u = $a("" + i), l.setAttributeNS(
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
        i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "" + i) : l.removeAttribute(u);
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
        i && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        i === !0 ? l.setAttribute(u, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? l.removeAttribute(u) : l.setAttribute(u, i);
        break;
      case "popover":
        Ut("beforetoggle", l), Ut("toggle", l), vo(l, "popover", i);
        break;
      case "xlinkActuate":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        vo(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Qg.get(u) || u, vo(l, u, i));
    }
  }
  function Iy(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        vp(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(x(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(x(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Kn(l, i) : (typeof i == "number" || typeof i == "bigint") && Kn(l, "" + i);
        break;
      case "onScroll":
        i != null && Ut("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Ut("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = mn);
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
        if (!mc.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[wl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break t;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : vo(l, u, i);
          }
    }
  }
  function Ml(l, n, u) {
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
        Ut("error", l), Ut("load", l);
        var i = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(x(137, n));
                default:
                  ue(l, n, r, m, u, null);
              }
          }
        s && ue(l, n, "srcSet", u.srcSet, u, null), i && ue(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ut("invalid", l);
        var v = r = m = s = null, T = null, U = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var q = u[i];
            if (q != null)
              switch (i) {
                case "name":
                  s = q;
                  break;
                case "type":
                  m = q;
                  break;
                case "checked":
                  T = q;
                  break;
                case "defaultChecked":
                  U = q;
                  break;
                case "value":
                  r = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(x(137, n));
                  break;
                default:
                  ue(l, n, i, q, u, null);
              }
          }
        Pf(
          l,
          r,
          v,
          T,
          U,
          m,
          s,
          !1
        );
        return;
      case "select":
        Ut("invalid", l), i = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                i = v;
              default:
                ue(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? go(l, !!i, n, !1) : u != null && go(l, !!i, u, !0);
        return;
      case "textarea":
        Ut("invalid", l), r = s = i = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(x(91));
                break;
              default:
                ue(l, n, m, v, u, null);
            }
        gm(l, i, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (i = u[T], i != null) && (T === "selected" ? l.selected = i && typeof i != "function" && typeof i != "symbol" : ue(l, n, T, i, u, null));
        return;
      case "dialog":
        Ut("beforetoggle", l), Ut("toggle", l), Ut("cancel", l), Ut("close", l);
        break;
      case "iframe":
      case "object":
        Ut("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < cf.length; i++)
          Ut(cf[i], l);
        break;
      case "image":
        Ut("error", l), Ut("load", l);
        break;
      case "details":
        Ut("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ut("error", l), Ut("load", l);
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
        for (U in u)
          if (u.hasOwnProperty(U) && (i = u[U], i != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(x(137, n));
              default:
                ue(l, n, U, i, u, null);
            }
        return;
      default:
        if (Sm(n)) {
          for (q in u)
            u.hasOwnProperty(q) && (i = u[q], i !== void 0 && Iy(
              l,
              n,
              q,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (i = u[v], i != null && ue(l, n, v, i, u, null));
  }
  function Py(l, n, u, i) {
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
        var s = null, r = null, m = null, v = null, T = null, U = null, q = null;
        for (N in u) {
          var X = u[N];
          if (u.hasOwnProperty(N) && X != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = X;
              default:
                i.hasOwnProperty(N) || ue(l, n, N, null, i, X);
            }
        }
        for (var _ in i) {
          var N = i[_];
          if (X = u[_], i.hasOwnProperty(_) && (N != null || X != null))
            switch (_) {
              case "type":
                r = N;
                break;
              case "name":
                s = N;
                break;
              case "checked":
                U = N;
                break;
              case "defaultChecked":
                q = N;
                break;
              case "value":
                m = N;
                break;
              case "defaultValue":
                v = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(x(137, n));
                break;
              default:
                N !== X && ue(
                  l,
                  n,
                  _,
                  N,
                  i,
                  X
                );
            }
        }
        If(
          l,
          m,
          v,
          T,
          U,
          q,
          r,
          s
        );
        return;
      case "select":
        N = m = v = _ = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                N = T;
              default:
                i.hasOwnProperty(r) || ue(
                  l,
                  n,
                  r,
                  null,
                  i,
                  T
                );
            }
        for (s in i)
          if (r = i[s], T = u[s], i.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                _ = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && ue(
                  l,
                  n,
                  s,
                  r,
                  i,
                  T
                );
            }
        n = v, u = m, i = N, _ != null ? go(l, !!u, _, !1) : !!i != !!u && (n != null ? go(l, !!u, n, !0) : go(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = _ = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                ue(l, n, v, null, i, s);
            }
        for (m in i)
          if (s = i[m], r = u[m], i.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                _ = s;
                break;
              case "defaultValue":
                N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(x(91));
                break;
              default:
                s !== r && ue(l, n, m, s, i, r);
            }
        vm(l, _, N);
        return;
      case "option":
        for (var F in u)
          _ = u[F], u.hasOwnProperty(F) && _ != null && !i.hasOwnProperty(F) && (F === "selected" ? l.selected = !1 : ue(
            l,
            n,
            F,
            null,
            i,
            _
          ));
        for (T in i)
          _ = i[T], N = u[T], i.hasOwnProperty(T) && _ !== N && (_ != null || N != null) && (T === "selected" ? l.selected = _ && typeof _ != "function" && typeof _ != "symbol" : ue(
            l,
            n,
            T,
            _,
            i,
            N
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
        for (var it in u)
          _ = u[it], u.hasOwnProperty(it) && _ != null && !i.hasOwnProperty(it) && ue(l, n, it, null, i, _);
        for (U in i)
          if (_ = i[U], N = u[U], i.hasOwnProperty(U) && _ !== N && (_ != null || N != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(x(137, n));
                break;
              default:
                ue(
                  l,
                  n,
                  U,
                  _,
                  i,
                  N
                );
            }
        return;
      default:
        if (Sm(n)) {
          for (var ce in u)
            _ = u[ce], u.hasOwnProperty(ce) && _ !== void 0 && !i.hasOwnProperty(ce) && Iy(
              l,
              n,
              ce,
              void 0,
              i,
              _
            );
          for (q in i)
            _ = i[q], N = u[q], !i.hasOwnProperty(q) || _ === N || _ === void 0 && N === void 0 || Iy(
              l,
              n,
              q,
              _,
              i,
              N
            );
          return;
        }
    }
    for (var M in u)
      _ = u[M], u.hasOwnProperty(M) && _ != null && !i.hasOwnProperty(M) && ue(l, n, M, null, i, _);
    for (X in i)
      _ = i[X], N = u[X], !i.hasOwnProperty(X) || _ === N || _ == null && N == null || ue(l, n, X, _, i, N);
  }
  function dh(l) {
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
  function t0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && dh(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < u.length; i++) {
            var T = u[i], U = T.startTime;
            if (U > v) break;
            var q = T.transferSize, X = T.initiatorType;
            q && dh(X) && (T = T.responseEnd, m += q * (T < v ? 1 : (v - U) / (T - U)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var hh = null, mh = null;
  function Zc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ov(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function e0(l, n) {
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
  function ff(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yh = null;
  function kg() {
    var l = window.event;
    return l && l.type === "popstate" ? l === yh ? !1 : (yh = l, !0) : (yh = null, !1);
  }
  var ar = typeof setTimeout == "function" ? setTimeout : void 0, Mv = typeof clearTimeout == "function" ? clearTimeout : void 0, Zi = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zi < "u" ? function(l) {
    return Zi.resolve(null).then(l).catch(l0);
  } : ar;
  function l0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Bn(l) {
    return l === "head";
  }
  function a0(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Tf(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          Li(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Li(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[wn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Li(l.ownerDocument.body);
      u = s;
    } while (u);
    Tf(n);
  }
  function we(l, n) {
    var u = l;
    l = 0;
    do {
      var i = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), i && i.nodeType === 8)
        if (u = i.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = i;
    } while (u);
  }
  function nr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nr(u), Zr(u);
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
  function Fg(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[wn])
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
      if (l = ua(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Et(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ua(l.nextSibling), l === null)) return null;
    return l;
  }
  function Uv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = ua(l.nextSibling), l === null)) return null;
    return l;
  }
  function un(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Lc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function sf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var i = function() {
        n(), u.removeEventListener("DOMContentLoaded", i);
      };
      u.addEventListener("DOMContentLoaded", i), l._reactRetry = i;
    }
  }
  function ua(l) {
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
  var ur = null;
  function ph(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return ua(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Nn(l) {
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
  function rf(l, n, u) {
    switch (n = Zc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(x(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(x(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(x(454));
        return l;
      default:
        throw Error(x(451));
    }
  }
  function Li(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Zr(l);
  }
  var ya = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Set();
  function Gl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var xn = Q.d;
  Q.d = {
    f: Ig,
    r: _v,
    D: B,
    C: wt,
    L: Pg,
    m: n0,
    X: ac,
    S: u0,
    M: wc
  };
  function Ig() {
    var l = xn.f(), n = ef();
    return l || n;
  }
  function _v(l) {
    var n = ni(l);
    n !== null && n.tag === 5 && n.type === "form" ? ae(n) : xn.r(l);
  }
  var df = typeof document > "u" ? null : document;
  function ke(l, n, u) {
    var i = df;
    if (i && typeof n == "string" && n) {
      var s = Ea(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), cr.has(s) || (cr.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), Ml(n, "link", l), Jt(n), i.head.appendChild(n)));
    }
  }
  function B(l) {
    xn.D(l), ke("dns-prefetch", l, null);
  }
  function wt(l, n) {
    xn.C(l, n), ke("preconnect", l, n);
  }
  function Pg(l, n, u) {
    xn.L(l, n, u);
    var i = df;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + Ea(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ea(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ea(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ea(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = qa(l);
          break;
        case "script":
          r = wi(l);
      }
      ya.has(r) || (l = ot(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ya.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Jc(r)) || n === "script" && i.querySelector(yf(r)) || (n = i.createElement("link"), Ml(n, "link", l), Jt(n), i.head.appendChild(n)));
    }
  }
  function n0(l, n) {
    xn.m(l, n);
    var u = df;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Ea(i) + '"][href="' + Ea(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = wi(l);
      }
      if (!ya.has(r) && (l = ot({ rel: "modulepreload", href: l }, n), ya.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(yf(r)))
              return;
        }
        i = u.createElement("link"), Ml(i, "link", l), Jt(i), u.head.appendChild(i);
      }
    }
  }
  function u0(l, n, u) {
    xn.S(l, n, u);
    var i = df;
    if (i && l) {
      var s = ui(i).hoistableStyles, r = qa(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = i.querySelector(
          Jc(r)
        ))
          v.loading = 5;
        else {
          l = ot(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ya.get(r)) && vh(l, u);
          var T = m = i.createElement("link");
          Jt(T), Ml(T, "link", l), T._p = new Promise(function(U, q) {
            T.onload = U, T.onerror = q;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, ir(m, n, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function ac(l, n) {
    xn.X(l, n);
    var u = df;
    if (u && l) {
      var i = ui(u).hoistableScripts, s = wi(l), r = i.get(s);
      r || (r = u.querySelector(yf(s)), r || (l = ot({ src: l, async: !0 }, n), (n = ya.get(s)) && gh(l, n), r = u.createElement("script"), Jt(r), Ml(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function wc(l, n) {
    xn.M(l, n);
    var u = df;
    if (u && l) {
      var i = ui(u).hoistableScripts, s = wi(l), r = i.get(s);
      r || (r = u.querySelector(yf(s)), r || (l = ot({ src: l, async: !0, type: "module" }, n), (n = ya.get(s)) && gh(l, n), r = u.createElement("script"), Jt(r), Ml(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function hf(l, n, u, i) {
    var s = (s = wa.current) ? Gl(s) : null;
    if (!s) throw Error(x(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = qa(u.href), u = ui(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = qa(u.href);
          var r = ui(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Jc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ya.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ya.set(l, u), r || Cv(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(x(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(x(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wi(u), u = ui(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(x(444, l));
    }
  }
  function qa(l) {
    return 'href="' + Ea(l) + '"';
  }
  function Jc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function mf(l) {
    return ot({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Cv(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), Ml(n, "link", u), Jt(n), l.head.appendChild(n));
  }
  function wi(l) {
    return '[src="' + Ea(l) + '"]';
  }
  function yf(l) {
    return "script[async]" + l;
  }
  function c0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + Ea(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Jt(i), i;
          var s = ot({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Jt(i), Ml(i, "style", s), ir(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = qa(u.href);
          var r = l.querySelector(
            Jc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Jt(r), r;
          i = mf(u), (s = ya.get(s)) && vh(i, s), r = (l.ownerDocument || l).createElement("link"), Jt(r);
          var m = r;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), Ml(r, "link", i), n.state.loading |= 4, ir(r, u.precedence, l), n.instance = r;
        case "script":
          return r = wi(u.src), (s = l.querySelector(
            yf(r)
          )) ? (n.instance = s, Jt(s), s) : (i = u, (s = ya.get(r)) && (i = ot({}, u), gh(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Jt(s), Ml(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(x(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, ir(i, u.precedence, l));
    return n.instance;
  }
  function ir(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var v = i[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function vh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function gh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var pf = null;
  function i0(l, n, u) {
    if (pf === null) {
      var i = /* @__PURE__ */ new Map(), s = pf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = pf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[wn] || r[le] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = i.get(m);
        v ? v.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function Sh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function o0(l, n, u) {
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
  function pa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function gu(l, n, u, i) {
    if (u.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = qa(i.href), r = n.querySelector(
          Jc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = bh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Jt(r);
          return;
        }
        r = n.ownerDocument || n, i = mf(i), (s = ya.get(s)) && vh(i, s), r = r.createElement("link"), Jt(r);
        var m = r;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), Ml(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = bh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Ya = 0;
  function f0(l, n) {
    return l.stylesheets && l.count === 0 && Eh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Ya === 0 && (Ya = 62500 * t0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Ya ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function bh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Eh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Th = null;
  function Eh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Th = /* @__PURE__ */ new Map(), n.forEach(yl, l), Th = null, bh.call(l));
  }
  function yl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Th.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Th.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = bh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var or = {
    $$typeof: je,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function s0(l, n, u, i, s, r, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wf(0), this.hiddenUpdates = Wf(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ah(l, n, u, i, s, r, m, v, T, U, q, X) {
    return l = new s0(
      l,
      n,
      u,
      m,
      T,
      U,
      q,
      X,
      v
    ), n = 1, r === !0 && (n |= 24), r = Be(3, null, null, n), l.current = r, r.stateNode = l, n = ps(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, As(r), l;
  }
  function Ji(l) {
    return l ? (l = $l, l) : $l;
  }
  function Hv(l, n, u, i, s, r) {
    s = Ji(s), i.context === null ? i.context = s : i.pendingContext = s, i = Ku(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = Ua(l, i, n), u !== null && (na(u, l, n), _c(u, l, n));
  }
  function zh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function r0(l, n) {
    zh(l, n), (l = l.alternate) && zh(l, n);
  }
  function Bv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Xu(l, 67108864);
      n !== null && na(n, l, 67108864), r0(l, 67108864);
    }
  }
  function Ki(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ma();
      n = Xr(n);
      var u = Xu(l, n);
      u !== null && na(u, l, n), r0(l, n);
    }
  }
  var ll = !0;
  function Su(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 2, Rl(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function bu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 8, Rl(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function Rl(l, n, u, i) {
    if (ll) {
      var s = d0(i);
      if (s === null)
        $y(
          l,
          n,
          i,
          Dh,
          u
        ), nc(l, i);
      else if (t1(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (nc(l, i), n & 4 && -1 < ca.indexOf(l)) {
        for (; s !== null; ) {
          var r = ni(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Ka(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Ll(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    vu(r), (Qt & 6) === 0 && (Lt = Dl() + 500, lc(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = Xu(r, 2), v !== null && na(v, r, 2), ef(), r0(r, 2);
            }
          if (r = d0(i), r === null && $y(
            l,
            n,
            i,
            Dh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        $y(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function d0(l) {
    return l = kr(l), vf(l);
  }
  var Dh = null;
  function vf(l) {
    if (Dh = null, l = ai(l), l !== null) {
      var n = ge(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Al(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = K(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Dh = l, null;
  }
  function fr(l) {
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
        switch (jg()) {
          case Yr:
            return 2;
          case jr:
            return 8;
          case rc:
          case Gg:
            return 32;
          case fm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1, al = null, Ul = null, Xl = null, Kc = /* @__PURE__ */ new Map(), cn = /* @__PURE__ */ new Map(), Ee = [], ca = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        al = null;
        break;
      case "dragenter":
      case "dragleave":
        Ul = null;
        break;
      case "mouseover":
      case "mouseout":
        Xl = null;
        break;
      case "pointerover":
      case "pointerout":
        Kc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cn.delete(n.pointerId);
    }
  }
  function $i(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = ni(n), n !== null && Bv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function t1(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return al = $i(
          al,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Ul = $i(
          Ul,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Xl = $i(
          Xl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Kc.set(
          r,
          $i(
            Kc.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, cn.set(
          r,
          $i(
            cn.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Nv(l) {
    var n = ai(l.target);
    if (n !== null) {
      var u = ge(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Al(u), n !== null) {
            l.blockedOn = n, dm(l.priority, function() {
              Ki(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = K(u), n !== null) {
            l.blockedOn = n, dm(l.priority, function() {
              Ki(u);
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
  function sr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = d0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        Wr = i, u.target.dispatchEvent(i), Wr = null;
      } else
        return n = ni(u), n !== null && Bv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Sf(l, n, u) {
    sr(l) && u.delete(n);
  }
  function xv() {
    gf = !1, al !== null && sr(al) && (al = null), Ul !== null && sr(Ul) && (Ul = null), Xl !== null && sr(Xl) && (Xl = null), Kc.forEach(Sf), cn.forEach(Sf);
  }
  function Tu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, gf || (gf = !0, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      xv
    )));
  }
  var bf = null;
  function qv(l) {
    bf !== l && (bf = l, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      function() {
        bf === l && (bf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (vf(i || u) === null)
              continue;
            break;
          }
          var r = ni(u);
          r !== null && (l.splice(n, 3), n -= 3, Vo(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Tf(l) {
    function n(T) {
      return Tu(T, l);
    }
    al !== null && Tu(al, l), Ul !== null && Tu(Ul, l), Xl !== null && Tu(Xl, l), Kc.forEach(n), cn.forEach(n);
    for (var u = 0; u < Ee.length; u++) {
      var i = Ee[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < Ee.length && (u = Ee[0], u.blockedOn === null); )
      Nv(u), u.blockedOn === null && Ee.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[wl] || null;
        if (typeof r == "function")
          m || qv(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[wl] || null)
              v = m.formAction;
            else if (vf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[i + 1] = v : (u.splice(i, 3), i -= 3), qv(u);
        }
      }
  }
  function h0() {
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
      s !== null && (s(), s = null), i || setTimeout(u, 20);
    }
    function u() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        i = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Oh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.render = Oh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(x(409));
    var u = n.current, i = ma();
    Hv(u, i, l, n, null, null);
  }, Mh.prototype.unmount = Oh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Hv(l.current, 2, null, l, null, null), ef(), n[hc] = null;
    }
  };
  function Mh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Qr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ee.length && n !== 0 && n < Ee[u].priority; u++) ;
      Ee.splice(u, 0, l), u === 0 && Nv(l);
    }
  };
  var m0 = Pt.version;
  if (m0 !== "19.2.3")
    throw Error(
      x(
        527,
        m0,
        "19.2.3"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(x(188)) : (l = Object.keys(l).join(","), Error(x(268, l)));
    return l = Hl(n), l = l !== null ? Vn(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Yv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        ei = rr.inject(
          Yv
        ), oa = rr;
      } catch {
      }
  }
  return op.createRoot = function(l, n) {
    if (!te(l)) throw Error(x(299));
    var u = !1, i = "", s = jd, r = yy, m = Gd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Ah(
      l,
      1,
      !1,
      null,
      null,
      u,
      i,
      null,
      s,
      r,
      m,
      h0
    ), l[hc] = n.current, of(l), new Oh(n);
  }, op.hydrateRoot = function(l, n, u) {
    if (!te(l)) throw Error(x(299));
    var i = !1, s = "", r = jd, m = yy, v = Gd, T = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Ah(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      T,
      r,
      m,
      v,
      h0
    ), n.context = Ji(null), u = n.current, i = ma(), i = Xr(i), s = Ku(i), s.callback = null, Ua(u, s, i), u = i, n.current.lanes = u, ho(n, u), vu(n), l[hc] = n.current, of(l), new Mh(n);
  }, op.version = "19.2.3", op;
}
var fp = {};
var C2;
function rE() {
  return C2 || (C2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function L(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function Pt(t, e, a, c) {
      if (a >= e.length) return c;
      var o = e[a], f = ke(t) ? t.slice() : Et({}, t);
      return f[o] = Pt(t[o], e, a + 1, c), f;
    }
    function Ft(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var c = 0; c < a.length - 1; c++)
          if (e[c] !== a[c]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return x(t, e, a, 0);
      }
    }
    function x(t, e, a, c) {
      var o = e[c], f = ke(t) ? t.slice() : Et({}, t);
      return c + 1 === e.length ? (f[a[c]] = f[o], ke(f) ? f.splice(o, 1) : delete f[o]) : f[o] = x(
        t[o],
        e,
        a,
        c + 1
      ), f;
    }
    function te(t, e, a) {
      var c = e[a], o = ke(t) ? t.slice() : Et({}, t);
      return a + 1 === e.length ? (ke(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = te(t[c], e, a + 1), o);
    }
    function ge() {
      return !1;
    }
    function Al() {
      return null;
    }
    function K() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Ie() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Hl() {
    }
    function Vn() {
    }
    function ot(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function xt(t, e, a, c) {
      return new Jg(t, e, a, c);
    }
    function Oe(t, e) {
      t.context === Df && (rh(t.current, 2, e, t, null, null), Na());
    }
    function Me(t, e) {
      if (zu !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Vs(), Rp(
          t.current,
          e,
          a
        ), Na();
      }
    }
    function Bl(t) {
      zu = t;
    }
    function me(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function It(t) {
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
    function La(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function je(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function zl(t) {
      if (It(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ga(t) {
      var e = t.alternate;
      if (!e) {
        if (e = It(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, c = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (c = o.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return zl(o), t;
            if (f === c) return zl(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== c.return) a = o, c = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, c = f;
              break;
            }
            if (h === c) {
              d = !0, c = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, c = o;
                break;
              }
              if (h === c) {
                d = !0, c = f, a = o;
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
        if (a.alternate !== c)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function Nl(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = Nl(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function Ke(t) {
      return t === null || typeof t != "object" ? null : (t = _v && t[_v] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function Bt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === df ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case sf:
          return "Fragment";
        case ur:
          return "Profiler";
        case ua:
          return "StrictMode";
        case Li:
          return "Suspense";
        case ya:
          return "SuspenseList";
        case xn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Lc:
            return "Portal";
          case Nn:
            return t.displayName || "Context";
          case ph:
            return (t._context.displayName || "Context") + ".Consumer";
          case rf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case cr:
            return e = t.displayName || null, e !== null ? e : Bt(t.type) || "Memo";
          case Gl:
            e = t._payload, t = t._init;
            try {
              return Bt(t(e));
            } catch {
            }
        }
      return null;
    }
    function cl(t) {
      return typeof t.tag == "number" ? et(t) : typeof t.name == "string" ? t.name : null;
    }
    function et(t) {
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
          return Bt(e);
        case 8:
          return e === ua ? "StrictMode" : "Mode";
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
            return et(t.return);
      }
      return null;
    }
    function Ge(t) {
      return { current: t };
    }
    function _t(t, e) {
      0 > ac ? console.error("Unexpected pop.") : (e !== u0[ac] && console.error("Unexpected Fiber popped."), t.current = n0[ac], n0[ac] = null, u0[ac] = null, ac--);
    }
    function Ot(t, e, a) {
      ac++, n0[ac] = t.current, u0[ac] = a, t.current = e;
    }
    function xl(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function il(t, e) {
      Ot(qa, e, t), Ot(hf, t, t), Ot(wc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? av(e) : oo;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = av(e), e = tc(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = am;
                break;
              case "math":
                e = Rg;
                break;
              default:
                e = oo;
            }
      }
      a = a.toLowerCase(), a = pm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, _t(wc, t), Ot(wc, a, t);
    }
    function O(t) {
      _t(wc, t), _t(hf, t), _t(qa, t);
    }
    function Q() {
      return xl(wc.current);
    }
    function Z(t) {
      t.memoizedState !== null && Ot(Jc, t, t);
      var e = xl(wc.current), a = t.type, c = tc(e.context, a);
      a = pm(e.ancestorInfo, a), c = { context: c, ancestorInfo: a }, e !== c && (Ot(hf, t, t), Ot(wc, c, t));
    }
    function ct(t) {
      hf.current === t && (_t(wc, t), _t(hf, t)), Jc.current === t && (_t(Jc, t), ap._currentValue = Nr);
    }
    function rt() {
    }
    function j() {
      if (mf === 0) {
        Cv = console.log, wi = console.info, yf = console.warn, c0 = console.error, ir = console.group, vh = console.groupCollapsed, gh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: rt,
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
      mf++;
    }
    function k() {
      if (mf--, mf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Et({}, t, { value: Cv }),
          info: Et({}, t, { value: wi }),
          warn: Et({}, t, { value: yf }),
          error: Et({}, t, { value: c0 }),
          group: Et({}, t, { value: ir }),
          groupCollapsed: Et({}, t, { value: vh }),
          groupEnd: Et({}, t, { value: gh })
        });
      }
      0 > mf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function tt(t) {
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
    function lt(t) {
      if (pf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          pf = e && e[1] || "", i0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pf + t + i0;
    }
    function He(t, e) {
      if (!t || Sh) return "";
      var a = o0.get(t);
      if (a !== void 0) return a;
      Sh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = B.H, B.H = null, j();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var S = function() {
                  throw Error();
                };
                if (Object.defineProperty(S.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(S, []);
                  } catch (w) {
                    var C = w;
                  }
                  Reflect.construct(t, [], S);
                } else {
                  try {
                    S.call();
                  } catch (w) {
                    C = w;
                  }
                  t.call(S.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (w) {
                  C = w;
                }
                (S = t()) && typeof S.catch == "function" && S.catch(function() {
                });
              }
            } catch (w) {
              if (w && C && typeof w.stack == "string")
                return [w.stack, C.stack];
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
`), A = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < A.length && !A[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === A.length)
            for (f = p.length - 1, d = A.length - 1; 1 <= f && 0 <= d && p[f] !== A[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== A[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== A[d]) {
                    var D = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), typeof t == "function" && o0.set(t, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Sh = !1, B.H = c, k(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? lt(p) : "", typeof t == "function" && o0.set(t, p), p;
    }
    function wa(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return lt(t.type);
        case 16:
          return lt("Lazy");
        case 13:
          return t.child !== e && e !== null ? lt("Suspense Fallback") : lt("Suspense");
        case 19:
          return lt("SuspenseList");
        case 0:
        case 15:
          return He(t.type, !1);
        case 11:
          return He(t.type.render, !1);
        case 1:
          return He(t.type, !0);
        case 31:
          return lt("Activity");
        default:
          return "";
      }
    }
    function ye(t) {
      try {
        var e = "", a = null;
        do {
          e += wa(t, a);
          var c = t._debugInfo;
          if (c)
            for (var o = c.length - 1; 0 <= o; o--) {
              var f = c[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var A = tt(p), D = A.lastIndexOf(`
`), S = D === -1 ? A : A.slice(D + 1);
                    if (S.indexOf(h) !== -1) {
                      var C = `
` + S;
                      break t;
                    }
                  }
                  C = lt(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + C;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (w) {
        return `
Error generating stack: ` + w.message + `
` + w.stack;
      }
    }
    function Ja(t) {
      return (t = t ? t.displayName || t.name : "") ? lt(t) : "";
    }
    function Sa() {
      if (pa === null) return null;
      var t = pa._debugOwner;
      return t != null ? cl(t) : null;
    }
    function Jf() {
      if (pa === null) return "";
      var t = pa;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += lt(t.type);
            break;
          case 13:
            e += lt("Suspense");
            break;
          case 19:
            e += lt("SuspenseList");
            break;
          case 31:
            e += lt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += Ja(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += Ja(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var c = a._debugStack;
            if (t && c) {
              var o = tt(c);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + tt(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function W(t, e, a, c, o, f, d) {
      var h = pa;
      Kf(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, c, o, f, d)
        ) : e(a, c, o, f, d);
      } finally {
        Kf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Kf(t) {
      B.getCurrentStack = t === null ? null : Jf, gu = !1, pa = t;
    }
    function $f(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Zn(t) {
      try {
        return Pc(t), !1;
      } catch {
        return !0;
      }
    }
    function Pc(t) {
      return "" + t;
    }
    function ee(t, e) {
      if (Zn(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), Pc(t);
    }
    function cm(t, e) {
      if (Zn(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), Pc(t);
    }
    function xr(t) {
      if (Zn(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          $f(t)
        ), Pc(t);
    }
    function im(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ki = e.inject(t), ll = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function oe(t) {
      if (typeof r0 == "function" && Bv(t), ll && typeof ll.setStrictMode == "function")
        try {
          ll.setStrictMode(Ki, t);
        } catch (e) {
          Su || (Su = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function om(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (d0(t) / Dh | 0) | 0;
    }
    function ti(t) {
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
    function qr(t, e, a) {
      var c = t.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = ti(c) : (d &= h, d !== 0 ? o = ti(d) : a || (a = h & ~t, a !== 0 && (o = ti(a))))) : (h = c & ~f, h !== 0 ? o = ti(h) : d !== 0 ? o = ti(d) : a || (a = c & ~t, a !== 0 && (o = ti(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function Dl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function jg(t, e) {
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
    function Yr() {
      var t = gf;
      return gf <<= 1, (gf & 62914560) === 0 && (gf = 4194304), t;
    }
    function jr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function rc(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Gg(t, e, a, c, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var A = 31 - Rl(a), D = 1 << A;
        h[A] = 0, y[A] = -1;
        var S = p[A];
        if (S !== null)
          for (p[A] = null, A = 0; A < S.length; A++) {
            var C = S[A];
            C !== null && (C.lane &= -536870913);
          }
        a &= ~D;
      }
      c !== 0 && fm(t, c, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function fm(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var c = 31 - Rl(e);
      t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | a & 261930;
    }
    function sp(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var c = 31 - Rl(a), o = 1 << c;
        o & e | t[c] & e && (t[c] |= e), a &= ~o;
      }
    }
    function rp(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : ei(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function ei(t) {
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
    function oa(t, e, a) {
      if (bu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - Rl(a), o = 1 << c;
          t[c].add(e), a &= ~o;
        }
    }
    function Nu(t, e) {
      if (bu)
        for (var a = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - Rl(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Ll(t) {
      return t &= -t, al < t ? Ul < t ? (t & 134217727) !== 0 ? Xl : Kc : Ul : al;
    }
    function dp() {
      var t = wt.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? Xl : hh(t.type));
    }
    function hp(t, e) {
      var a = wt.p;
      try {
        return wt.p = t, e();
      } finally {
        wt.p = a;
      }
    }
    function sm(t) {
      delete t[Ee], delete t[ca], delete t[$i], delete t[t1], delete t[Nv];
    }
    function xu(t) {
      var e = t[Ee];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[nc] || a[Ee]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Xi(t); t !== null; ) {
              if (a = t[Ee])
                return a;
              t = Xi(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function rn(t) {
      if (t = t[Ee] || t[nc]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function dc(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ka(t) {
      var e = t[sr];
      return e || (e = t[sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Xe(t) {
      t[Sf] = !0;
    }
    function dn(t, e) {
      ro(t, e), ro(t + "Capture", e);
    }
    function ro(t, e) {
      Tu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), Tu[t] = e;
      var a = t.toLowerCase();
      for (bf[a] = t, t === "onDoubleClick" && (bf.ondblclick = t), t = 0; t < e.length; t++)
        xv.add(e[t]);
    }
    function li(t, e) {
      qv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Wf(t) {
      return Ya.call(Oh, t) ? !0 : Ya.call(h0, t) ? !1 : Tf.test(t) ? Oh[t] = !0 : (h0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function ho(t, e, a) {
      if (Wf(e)) {
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
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ee(a, e), t === "" + a ? a : t);
      }
    }
    function Gr(t, e, a) {
      if (Wf(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var c = e.toLowerCase().slice(0, 5);
              if (c !== "data-" && c !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          ee(a, e), t.setAttribute(e, "" + a);
        }
    }
    function kf(t, e, a) {
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
        ee(a, e), t.setAttribute(e, "" + a);
      }
    }
    function Ln(t, e, a, c) {
      if (c === null) t.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        ee(c, a), t.setAttributeNS(e, a, "" + c);
      }
    }
    function ba(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return xr(t), t;
        default:
          return "";
      }
    }
    function Xr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function rm(t, e, a) {
      var c = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
        var o = c.get, f = c.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            xr(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            xr(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Qr(t) {
      if (!t._valueTracker) {
        var e = Xr(t) ? "checked" : "value";
        t._valueTracker = rm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function dm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), c = "";
      return t && (c = Xr(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== a ? (e.setValue(t), !0) : !1;
    }
    function hn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function le(t) {
      return t.replace(
        Mh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function wl(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || Yv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Sa() || "A component",
        e.type
      ), Yv = !0), e.value === void 0 || e.defaultValue === void 0 || m0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Sa() || "A component",
        e.type
      ), m0 = !0);
    }
    function hc(t, e, a, c, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ee(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ba(e)) : t.value !== "" + ba(e) && (t.value = "" + ba(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? hm(t, d, ba(e)) : a != null ? hm(t, d, ba(a)) : c != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ee(h, "name"), t.name = "" + ba(h)) : t.removeAttribute("name");
    }
    function Vr(t, e, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ee(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          Qr(t);
          return;
        }
        a = a != null ? "" + ba(a) : "", e = e != null ? "" + ba(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, t.checked = h ? t.checked : !!c, t.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ee(d, "name"), t.name = d), Qr(t);
    }
    function hm(t, e, a) {
      e === "number" && hn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function mp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? nr.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), rr = !0);
    }
    function mm() {
      var t = Sa();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function wn(t, e, a, c) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && c && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + ba(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, c && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Zr(t, e) {
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        if (e[a] != null) {
          var c = ke(e[a]);
          e.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            mm()
          ) : !e.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            mm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ai(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Sa() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ni(t, e, a) {
      if (e != null && (e = "" + ba(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + ba(a) : "";
    }
    function mo(t, e, a, c) {
      if (e == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (ke(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), e = a;
      }
      a = ba(e), t.defaultValue = a, c = t.textContent, c === a && c !== "" && c !== null && (t.value = c), Qr(t);
    }
    function ui(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? ui(t.children[0], e) : t;
    }
    function Jt(t) {
      return "  " + "  ".repeat(t);
    }
    function ci(t) {
      return "+ " + "  ".repeat(t);
    }
    function mc(t) {
      return "- " + "  ".repeat(t);
    }
    function yc(t) {
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
    function Jn(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function Lr(t, e, a) {
      var c = 120 - 2 * a;
      if (e === null)
        return ci(a) + Jn(t, c) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), ci(a) + Jn(t, c) + `
` + mc(a) + Jn(e, c) + `
`;
      }
      return Jt(a) + Jn(t, c) + `
`;
    }
    function wr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function yo(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (ke(t)) return "[...]";
          if (t.$$typeof === un)
            return (e = Bt(t.type)) ? "<" + e + ">" : "<...>";
          var a = wr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), e -= c.length - 2, o = yo(
                  t[c],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + c + ":" + o;
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
    function po(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + yo(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function vo(t, e, a) {
      var c = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = po(
            e[f],
            120 - a.length - f.length - 1
          );
          c -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < c ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function Jr(t, e, a) {
      var c = "", o = Et({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = yo(t[f], d);
          e.hasOwnProperty(f) ? (d = yo(e[f], d), c += ci(a) + f + ": " + h + `
`, c += mc(a) + f + ": " + d + `
`) : c += ci(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += mc(a) + y + ": " + t + `
`);
      return c;
    }
    function qu(t, e, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += vo(
          t,
          e,
          Jt(c)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var A = po(
                p,
                h
              );
              h = po(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && wr(p) === "Object" && wr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < A.indexOf("...") || -1 < h.indexOf("...")) ? o += Jt(c + 1) + d + `={{
` + Jr(
                p,
                y,
                c + 2
              ) + Jt(c + 1) + `}}
` : (o += ci(c + 1) + d + "=" + A + `
`, o += mc(c + 1) + d + "=" + h + `
`);
            } else
              o += Jt(c + 1) + d + "=" + po(e[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var S = 120 - 2 * (c + 1) - D.length - 1;
            o += mc(c + 1) + D + "=" + po(a[D], S) + `
`;
          }
        }), o = o === "" ? Jt(c) + "<" + t + `>
` : Jt(c) + "<" + t + `
` + o + Jt(c) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Lr(f, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Lr("" + e, null, c + 1) : o + Lr("" + e, void 0, c + 1)), o;
    }
    function Ta(t, e) {
      var a = yc(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Ta(t, e), t = t.sibling;
        return a;
      }
      return Jt(e) + "<" + a + `>
`;
    }
    function Kr(t, e) {
      var a = ui(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Jt(e) + `...
` + Kr(a, e + 1);
      a = "";
      var c = t.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Jt(e) + "<" + f + `>
`, e++);
        }
      if (c = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        c = Lr(o, t.serverProps, e), e++;
      else if (f = yc(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          c = e;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = po(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = Jt(c) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (c = vo(
            f,
            o,
            ci(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = qu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += Kr(d, e), f++) : p += Ta(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Jt(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (mc(e) + Jn(f, 120 - 2 * e) + `
`) : p + vo(
          f.type,
          f.props,
          mc(e)
        );
      return a + c + p;
    }
    function ym(t) {
      try {
        return `

` + Kr(t, 0);
      } catch {
        return "";
      }
    }
    function $r(t, e, a) {
      for (var c = e, o = null, f = 0; c; )
        c === t && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === e ? a : c === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? ym(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function pm(t, e) {
      var a = Et({}, t || q), c = { tag: e };
      return v.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), T.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, e === "form" && (a.formTag = c), e === "a" && (a.aTagInScope = c), e === "button" && (a.buttonTagInScope = c), e === "nobr" && (a.nobrTagInScope = c), e === "p" && (a.pTagInButtonScope = c), e === "li" && (a.listItemTagAutoclosing = c), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = c), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Ff(t, e, a) {
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
          return U.indexOf(e) === -1;
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
    function Xg(t, e) {
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
    function Ea(t, e) {
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
    function If(t, e) {
      e = e || q;
      var a = e.current;
      if (e = (a = Ff(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Xg(t, e), e = a || e, !e) return !0;
      var c = e.tag;
      if (e = String(!!a) + "|" + t + "|" + c, X[e]) return !1;
      X[e] = !0;
      var o = (e = pa) ? Ea(e.return, c) : null, f = e !== null && o !== null ? $r(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", c === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        c,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        c,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || W(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function Pf(t, e, a) {
      if (a || Ff("#text", e, !1))
        return !0;
      if (a = "#text|" + e, X[a]) return !1;
      X[a] = !0;
      var c = (a = pa) ? Ea(a, e) : null;
      return a = a !== null && c !== null ? $r(
        c,
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
    function ii(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function go(t) {
      return t.replace(M, function(e, a) {
        return a.toUpperCase();
      });
    }
    function vm(t, e, a) {
      var c = e.indexOf("--") === 0;
      c || (-1 < e.indexOf("-") ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        go(e.replace(ce, "ms-"))
      )) : it.test(e) ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || G.hasOwnProperty(a) && G[a] || (G[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? at || (at = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Gt || (Gt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? c ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : c ? t.setProperty(e, a) : typeof a != "number" || a === 0 || I.has(e) ? e === "float" ? t.cssFloat = a : (cm(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function gm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var c = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = _[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = _[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = _[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in c)
            if (o = c[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var A = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                A == null || typeof A == "boolean" || A === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var D in a)
          !a.hasOwnProperty(D) || e != null && e.hasOwnProperty(D) || (D.indexOf("--") === 0 ? t.setProperty(D, "") : D === "float" ? t.cssFloat = "" : t[D] = "");
        for (var S in e)
          p = e[S], e.hasOwnProperty(S) && a[S] !== p && vm(t, S, p);
      } else
        for (c in e)
          e.hasOwnProperty(c) && vm(t, c, e[c]);
    }
    function Kn(t) {
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
    function yp(t) {
      return Vt.get(t) || t;
    }
    function pp(t, e) {
      if (Ya.call(Rh, e) && Rh[e])
        return !0;
      if (Y2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = jv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Rh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Rh[e] = !0;
      }
      if (q2.test(e)) {
        if (t = e.toLowerCase(), t = jv.hasOwnProperty(t) ? t : null, t == null) return Rh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Rh[e] = !0);
      }
      return !0;
    }
    function vp(t, e) {
      var a = [], c;
      for (c in e)
        pp(t, c) || a.push(c);
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
    function Sm(t, e, a, c) {
      if (Ya.call(ja, e) && ja[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), ja[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (c != null) {
        if (t = c.possibleRegistrationNames, c.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (c = t.hasOwnProperty(o) ? t[o] : null, c != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            c
          ), ja[e] = !0;
        if (yS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), ja[e] = !0;
      } else if (yS.test(e))
        return j2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), ja[e] = !0;
      if (G2.test(e) || X2.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), ja[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), ja[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), ja[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), ja[e] = !0;
      if (qn.hasOwnProperty(o)) {
        if (o = qn[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), ja[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), ja[e] = !0;
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
              ), ja[e] = !0);
          }
        case "function":
        case "symbol":
          return ja[e] = !0, !1;
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
            ), ja[e] = !0;
          }
      }
      return !0;
    }
    function Qg(t, e, a) {
      var c = [], o;
      for (o in e)
        Sm(t, o, e[o], a) || c.push(o);
      e = c.map(function(f) {
        return "`" + f + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < c.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function ts(t) {
      return Q2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function $a() {
    }
    function mn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function Wr(t) {
      var e = rn(t);
      if (e && (t = e.stateNode)) {
        var a = t[ca] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (hc(
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
              for (ee(e, "name"), a = a.querySelectorAll(
                'input[name="' + le(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var c = a[e];
                if (c !== t && c.form === t.form) {
                  var o = c[ca] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  hc(
                    c,
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
                c = a[e], c.form === t.form && dm(c);
            }
            break t;
          case "textarea":
            ni(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && wn(t, !!a.multiple, e, !1);
        }
      }
    }
    function kr(t, e, a) {
      if (e1) return t(e, a);
      e1 = !0;
      try {
        var c = t(e);
        return c;
      } finally {
        if (e1 = !1, (Uh !== null || _h !== null) && (Na(), Uh && (e = Uh, t = _h, _h = Uh = null, Wr(e), t)))
          for (e = 0; e < t.length; e++) Wr(t[e]);
      }
    }
    function $n(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var c = a[ca] || null;
      if (c === null) return null;
      a = c[e];
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
          (c = !c.disabled) || (t = t.type, c = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !c;
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
    function oi() {
      if (Gv) return Gv;
      var t, e = a1, a = e.length, c, o = "value" in Ef ? Ef.value : Ef.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (c = 1; c <= d && e[a - c] === o[f - c]; c++) ;
      return Gv = o.slice(t, 1 < c ? 1 - c : void 0);
    }
    function es(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function So() {
      return !0;
    }
    function bm() {
      return !1;
    }
    function ol(t) {
      function e(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? So : bm, this.isPropagationStopped = bm, this;
      }
      return Et(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = So);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = So);
        },
        persist: function() {
        },
        isPersistent: So
      }), e;
    }
    function Yu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = tT[t]) ? !!e[t] : !1;
    }
    function ls() {
      return Yu;
    }
    function bo(t, e) {
      switch (t) {
        case "keyup":
          return dT.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== SS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ju(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Tm(t, e) {
      switch (t) {
        case "compositionend":
          return ju(e);
        case "keypress":
          return e.which !== TS ? null : (AS = !0, ES);
        case "textInput":
          return t = e.data, t === ES && AS ? null : t;
        default:
          return null;
      }
    }
    function Fr(t, e) {
      if (Ch)
        return t === "compositionend" || !i1 && bo(t, e) ? (t = oi(), Gv = a1 = Ef = null, Ch = !1, t) : null;
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
          return bS && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function Em(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!mT[t.type] : e === "textarea";
    }
    function Ir(t) {
      if (!$c) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function as(t, e, a, c) {
      Uh ? _h ? _h.push(c) : _h = [c] : Uh = c, e = Cn(e, "onChange"), 0 < e.length && (a = new Xv(
        "onChange",
        "change",
        null,
        a,
        c
      ), t.push({ event: a, listeners: e }));
    }
    function gp(t) {
      Wt(t, 0);
    }
    function Ol(t) {
      var e = dc(t);
      if (dm(e)) return t;
    }
    function pc(t, e) {
      if (t === "change") return e;
    }
    function ns() {
      b0 && (b0.detachEvent("onpropertychange", To), T0 = b0 = null);
    }
    function To(t) {
      if (t.propertyName === "value" && Ol(T0)) {
        var e = [];
        as(
          e,
          T0,
          t,
          mn(t)
        ), kr(gp, e);
      }
    }
    function Vg(t, e, a) {
      t === "focusin" ? (ns(), b0 = e, T0 = a, b0.attachEvent("onpropertychange", To)) : t === "focusout" && ns();
    }
    function Am(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Ol(T0);
    }
    function zm(t, e) {
      if (t === "click") return Ol(e);
    }
    function us(t, e) {
      if (t === "input" || t === "change")
        return Ol(e);
    }
    function Pr(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Eo(t, e) {
      if (Ga(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), c = Object.keys(e);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!Ya.call(e, o) || !Ga(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function Sp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function bp(t, e) {
      var a = Sp(t);
      t = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = t + a.textContent.length, t <= e && c >= e)
            return { node: a, offset: e - t };
          t = c;
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
        a = Sp(a);
      }
    }
    function Tp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Tp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function td(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = hn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = hn(t.document);
      }
      return e;
    }
    function Dm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function Ep(t, e, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      f1 || Hh == null || Hh !== hn(c) || (c = Hh, "selectionStart" in c && Dm(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), E0 && Eo(E0, c) || (E0 = c, c = Cn(o1, "onSelect"), 0 < c.length && (e = new Xv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: c }), e.target = Hh)));
    }
    function fi(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function si(t) {
      if (s1[t]) return s1[t];
      if (!Bh[t]) return t;
      var e = Bh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in DS)
          return s1[t] = e[a];
      return t;
    }
    function yn(t, e) {
      _S.set(t, e), dn(e, [t]);
    }
    function Ap(t) {
      for (var e = Vv, a = 0; a < t.length; a++) {
        var c = t[a];
        if (typeof c == "object" && c !== null)
          if (ke(c) && c.length === 2 && typeof c[0] == "string") {
            if (e !== Vv && e !== y1)
              return h1;
            e = y1;
          } else return h1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || e !== Vv && e !== m1)
            return h1;
          e = m1;
        }
      }
      return e;
    }
    function Om(t, e, a, c) {
      for (var o in t)
        Ya.call(t, o) && o[0] !== "_" && Wn(o, t[o], e, a, c);
    }
    function Wn(t, e, a, c, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === un) {
              var f = Bt(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > c || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(c) + t,
                "<" + f
              ]), d !== null && Wn(
                "key",
                d,
                a,
                c + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!ke(e.children) || 0 < e.children.length) && (t = !0) : Ya.call(e, p) && p[0] !== "_" && Wn(
                  p,
                  e[p],
                  a,
                  c + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Ap(e), p === m1 || p === Vv) {
                e = JSON.stringify(e);
                break;
              } else if (p === y1) {
                for (a.push([
                  o + "  ".repeat(c) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], Wn(
                    f[0],
                    f[1],
                    a,
                    c + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, Wn(
                  t,
                  e.value,
                  a,
                  c,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, Wn(
                t,
                e.reason,
                a,
                c,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(c) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(c) + t,
              f === "Object" ? 3 > c ? "" : "…" : f
            ]), 3 > c && Om(e, a, c + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === TT ? "…" : JSON.stringify(e);
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
        o + "  ".repeat(c) + t,
        e
      ]);
    }
    function zp(t, e, a, c) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          Zv + "  ".repeat(c) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (c === 0 && f === "children")
              o = "  ".repeat(c) + f, a.push(
                [Zv + o, "…"],
                [Lv + o, "…"]
              );
            else {
              if (!(3 <= c)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === un) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Bt(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [Zv + o, d],
                        [Lv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        BS + "  ".repeat(c) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, zp(
                        d,
                        h,
                        a,
                        c + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    BS + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              Wn(f, d, a, c, Zv), Wn(f, h, a, c, Lv);
            }
            o = !1;
          }
        } else
          a.push([
            Lv + "  ".repeat(c) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function pn(t) {
      jt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Wa(t, e, a, c) {
      Ae && (zf.start = e, zf.end = a, Wi.color = "warning", Wi.tooltipText = c, Wi.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          c,
          zf
        )
      ) : performance.measure(c, zf));
    }
    function ed(t, e, a) {
      Wa(t, e, a, "Reconnect");
    }
    function ld(t, e, a, c, o) {
      var f = et(t);
      if (f !== null && Ae) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [ET], p = zp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Af && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Af = !0, y[0] = AT, Wi.color = "warning", Wi.tooltipText = NS) : (Wi.color = c, Wi.tooltipText = f), Wi.properties = y, zf.start = e, zf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            zf
          )
        ) : performance.measure(
          "​" + f,
          zf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Eu,
            void 0,
            c
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Eu,
          void 0,
          c
        );
      }
    }
    function Mm(t, e, a, c) {
      if (Ae) {
        var o = et(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && Wn("key", t.key, d, 0, ""), t.memoizedProps !== null && Om(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Eu,
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
    function vn(t, e, a, c, o) {
      if (o !== null) {
        if (Ae) {
          var f = et(t);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && Wn("key", t.key, c, 0, ""), t.memoizedProps !== null && Om(t.memoizedProps, c, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Eu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: c
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
        f = et(t), f !== null && Ae && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Eu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Eu,
          void 0,
          o
        ));
    }
    function Zg(t, e, a, c) {
      if (Ae && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", c ? c.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            jt,
            qt,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          jt,
          qt,
          o
        );
      }
    }
    function Dp(t, e, a, c) {
      !Ae || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          jt,
          qt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        jt,
        qt,
        a
      ));
    }
    function Op(t, e, a, c) {
      !Ae || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          jt,
          qt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        jt,
        qt,
        a
      ));
    }
    function Lg(t, e, a, c, o, f) {
      if (Ae && !(e <= t)) {
        a = [];
        for (var d = 0; d < c.length; d++) {
          var h = c[d].value;
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
              track: jt,
              trackGroup: qt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function Rm(t, e, a, c) {
      !Ae || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          jt,
          qt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        jt,
        qt,
        "error"
      ));
    }
    function wg(t, e, a, c) {
      !Ae || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          jt,
          qt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        jt,
        qt,
        "secondary-light"
      ));
    }
    function Mp(t, e, a, c, o) {
      if (Ae && !(e <= t)) {
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
              track: jt,
              trackGroup: qt,
              tooltipText: c ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Um(t, e, a) {
      !Ae || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        jt,
        qt,
        "secondary-dark"
      );
    }
    function ad() {
      for (var t = Nh, e = p1 = Nh = 0; e < t; ) {
        var a = Au[e];
        Au[e++] = null;
        var c = Au[e];
        Au[e++] = null;
        var o = Au[e];
        Au[e++] = null;
        var f = Au[e];
        if (Au[e++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && _m(a, o, f);
      }
    }
    function Ao(t, e, a, c) {
      Au[Nh++] = t, Au[Nh++] = e, Au[Nh++] = a, Au[Nh++] = c, p1 |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
    }
    function ri(t, e, a, c) {
      return Ao(t, e, a, c), cs(t);
    }
    function ql(t, e) {
      return Ao(t, null, null, e), cs(t);
    }
    function _m(t, e, a) {
      t.lanes |= a;
      var c = t.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & A0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - Rl(a), t = f.hiddenUpdates, c = t[o], c === null ? t[o] = [e] : c.push(e), e.lane = a | 536870912), f) : null;
    }
    function cs(t) {
      if (k0 > GT)
        throw Rr = k0 = 0, F0 = W1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Rr > XT && (Rr = 0, F0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && nn(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && nn(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function vc(t) {
      if (zu === null) return t;
      var e = zu(t);
      return e === void 0 ? t : e.current;
    }
    function nd(t) {
      if (zu === null) return t;
      var e = zu(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = vc(t.render), t.render !== e) ? (e = { $$typeof: rf, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Cm(t, e) {
      if (zu === null) return !1;
      var a = t.elementType;
      e = e.type;
      var c = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (c = !0);
          break;
        case 0:
          (typeof e == "function" || o === Gl) && (c = !0);
          break;
        case 11:
          (o === rf || o === Gl) && (c = !0);
          break;
        case 14:
        case 15:
          (o === cr || o === Gl) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (t = zu(a), t !== void 0 && t === zu(e)));
    }
    function di(t) {
      zu !== null && typeof WeakSet == "function" && (xh === null && (xh = /* @__PURE__ */ new WeakSet()), xh.add(t));
    }
    function Rp(t, e, a) {
      do {
        var c = t, o = c.alternate, f = c.child, d = c.sibling, h = c.tag;
        c = c.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = c;
            break;
          case 11:
            y = c.render;
        }
        if (zu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (c = !1, y !== null && (y = zu(y), y !== void 0 && (a.has(y) ? c = !0 : e.has(y) && (h === 1 ? c = !0 : p = !0))), xh !== null && (xh.has(t) || o !== null && xh.has(o)) && (c = !0), c && (t._debugNeedsRemount = !0), (c || p) && (o = ql(t, 2), o !== null && ht(o, t, 2)), f === null || c || Rp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function Jg(t, e, a, c) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, xS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Hm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function kn(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = xt(
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
          a.type = vc(t.type);
          break;
        case 1:
          a.type = vc(t.type);
          break;
        case 11:
          a.type = nd(t.type);
      }
      return a;
    }
    function Bm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function hi(t, e, a, c, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Hm(t) && (d = 1), h = vc(h);
      else if (typeof t == "string")
        d = Q(), d = Av(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case xn:
            return e = xt(31, a, e, o), e.elementType = xn, e.lanes = f, e;
          case sf:
            return mi(
              a.children,
              o,
              f,
              e
            );
          case ua:
            d = 8, o |= va, o |= uc;
            break;
          case ur:
            return t = a, c = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = xt(12, t, e, c | At), e.elementType = ur, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case Li:
            return e = xt(13, a, e, o), e.elementType = Li, e.lanes = f, e;
          case ya:
            return e = xt(19, a, e, o), e.elementType = ya, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Nn:
                  d = 10;
                  break t;
                case ph:
                  d = 9;
                  break t;
                case rf:
                  d = 11, h = nd(h);
                  break t;
                case cr:
                  d = 14;
                  break t;
                case Gl:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : ke(t) ? a = "array" : t !== void 0 && t.$$typeof === un ? (a = "<" + (Bt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = c ? cl(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = xt(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = c, e;
    }
    function gc(t, e, a) {
      return e = hi(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function mi(t, e, a, c) {
      return t = xt(7, t, c, e), t.lanes = a, t;
    }
    function zo(t, e, a) {
      return t = xt(6, t, null, e), t.lanes = a, t;
    }
    function Nm(t) {
      var e = xt(18, null, null, dt);
      return e.stateNode = t, e;
    }
    function ud(t, e, a) {
      return e = xt(
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
    function Jl(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = v1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: ye(e)
        }, v1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: ye(e)
      };
    }
    function gn(t, e) {
      Sc(), qh[Yh++] = z0, qh[Yh++] = wv, wv = t, z0 = e;
    }
    function xm(t, e, a) {
      Sc(), Du[Ou++] = Fi, Du[Ou++] = Ii, Du[Ou++] = hr, hr = t;
      var c = Fi;
      t = Ii;
      var o = 32 - Rl(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - Rl(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, Fi = 1 << 32 - Rl(e) + o | a << o | c, Ii = f + t;
      } else
        Fi = 1 << f | a << o | c, Ii = t;
    }
    function cd(t) {
      Sc(), t.return !== null && (gn(t, 1), xm(t, 1, 0));
    }
    function id(t) {
      for (; t === wv; )
        wv = qh[--Yh], qh[Yh] = null, z0 = qh[--Yh], qh[Yh] = null;
      for (; t === hr; )
        hr = Du[--Ou], Du[Ou] = null, Ii = Du[--Ou], Du[Ou] = null, Fi = Du[--Ou], Du[Ou] = null;
    }
    function Up() {
      return Sc(), hr !== null ? { id: Fi, overflow: Ii } : null;
    }
    function _p(t, e) {
      Sc(), Du[Ou++] = Fi, Du[Ou++] = Ii, Du[Ou++] = hr, Fi = e.id, Ii = e.overflow, hr = t;
    }
    function Sc() {
      Nt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function yi(t, e) {
      if (t.return === null) {
        if (Yn === null)
          Yn = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (Yn.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Yn.distanceFromLeaf > e && (Yn.distanceFromLeaf = e);
        }
        return Yn;
      }
      var a = yi(
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
    function Cp() {
      Nt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Yl(t, e) {
      Wc || (t = yi(t, 0), t.serverProps = null, e !== null && (e = Sv(e), t.serverTail.push(e)));
    }
    function ka(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = Yn;
      throw c !== null && (Yn = null, a = ym(c)), os(
        Jl(
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
      ), g1;
    }
    function qm(t) {
      var e = t.stateNode, a = t.type, c = t.memoizedProps;
      switch (e[Ee] = t, e[ca] = c, aa(a, c), a) {
        case "dialog":
          st("cancel", e), st("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          st("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < I0.length; a++)
            st(I0[a], e);
          break;
        case "source":
          st("error", e);
          break;
        case "img":
        case "image":
        case "link":
          st("error", e), st("load", e);
          break;
        case "details":
          st("toggle", e);
          break;
        case "input":
          li("input", c), st("invalid", e), wl(e, c), Vr(
            e,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0
          );
          break;
        case "option":
          mp(e, c);
          break;
        case "select":
          li("select", c), st("invalid", e), Zr(e, c);
          break;
        case "textarea":
          li("textarea", c), st("invalid", e), ai(e, c), mo(
            e,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || c.suppressHydrationWarning === !0 || jy(e.textContent, a) ? (c.popover != null && (st("beforetoggle", e), st("toggle", e)), c.onScroll != null && st("scroll", e), c.onScrollEnd != null && st("scrollend", e), c.onClick != null && (e.onclick = $a), e = !0) : e = !1, e || ka(t, !0);
    }
    function Ym(t) {
      for (ia = t.return; ia; )
        switch (ia.tag) {
          case 5:
          case 31:
          case 13:
            Mu = !1;
            return;
          case 27:
          case 3:
            Mu = !0;
            return;
          default:
            ia = ia.return;
        }
    }
    function pi(t) {
      if (t !== ia) return !1;
      if (!Nt)
        return Ym(t), Nt = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || ef(t.type, t.memoizedProps)), a = !a), a && ze) {
        for (a = ze; a; ) {
          var c = yi(t, 0), o = Sv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? nf(a) : xa(a.nextSibling);
        }
        ka(t);
      }
      if (Ym(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ze = nf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ze = nf(t);
      } else
        e === 27 ? (e = ze, Vc(t.type) ? (t = iS, iS = null, ze = t) : ze = e) : ze = ia ? xa(t.stateNode.nextSibling) : null;
      return !0;
    }
    function bc() {
      ze = ia = null, Wc = Nt = !1;
    }
    function is() {
      var t = Of;
      return t !== null && (Za === null ? Za = t : Za.push.apply(
        Za,
        t
      ), Of = null), t;
    }
    function os(t) {
      Of === null ? Of = [t] : Of.push(t);
    }
    function Tc() {
      var t = Yn;
      if (t !== null) {
        Yn = null;
        for (var e = ym(t); 0 < t.children.length; )
          t = t.children[0];
        W(t.fiber, function() {
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
    function Do() {
      jh = Jv = null, Gh = !1;
    }
    function Fa(t, e, a) {
      Ot(S1, e._currentValue, t), e._currentValue = a, Ot(b1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== YS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = YS;
    }
    function Sn(t, e) {
      t._currentValue = S1.current;
      var a = b1.current;
      _t(b1, e), t._currentRenderer = a, _t(S1, e);
    }
    function od(t, e, a) {
      for (; t !== null; ) {
        var c = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, c !== null && (c.childLanes |= e)) : c !== null && (c.childLanes & e) !== e && (c.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Gu(t, e, a, c) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), od(
                  f.return,
                  a,
                  t
                ), c || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), od(
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
    function bn(t, e, a, c) {
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
            Ga(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === Jc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ap) : t = [ap]);
        }
        o = o.return;
      }
      t !== null && Gu(
        e,
        t,
        a,
        c
      ), e.flags |= 262144;
    }
    function Oo(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Ga(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Ec(t) {
      Jv = t, jh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Zt(t) {
      return Gh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), jm(Jv, t);
    }
    function fs(t, e) {
      return Jv === null && Ec(t), jm(t, e);
    }
    function jm(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, jh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        jh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else jh = jh.next = e;
      return a;
    }
    function fd() {
      return {
        controller: new OT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function vi(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function ss(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && MT(RT, function() {
        t.controller.abort();
      });
    }
    function Fn(t, e, a) {
      (t & 127) !== 0 ? 0 > kc && (kc = vl(), O0 = Kv(e), T1 = e, a != null && (E1 = et(a)), (Xt & (Cl | Xn)) !== Zl && (Je = !0, Rf = D0), t = lf(), e = pu(), t !== Xh || e !== M0 ? Xh = -1.1 : e !== null && (Rf = D0), pr = t, M0 = e) : (t & 4194048) !== 0 && 0 > Ru && (Ru = vl(), R0 = Kv(e), jS = e, a != null && (GS = et(a)), 0 > lo) && (t = lf(), e = pu(), (t !== _f || e !== vr) && (_f = -1.1), Uf = t, vr = e);
    }
    function Hp(t) {
      if (0 > kc) {
        kc = vl(), O0 = t._debugTask != null ? t._debugTask : null, (Xt & (Cl | Xn)) !== Zl && (Rf = D0);
        var e = lf(), a = pu();
        e !== Xh || a !== M0 ? Xh = -1.1 : a !== null && (Rf = D0), pr = e, M0 = a;
      }
      0 > Ru && (Ru = vl(), R0 = t._debugTask != null ? t._debugTask : null, 0 > lo) && (t = lf(), e = pu(), (t !== _f || e !== vr) && (_f = -1.1), Uf = t, vr = e);
    }
    function In() {
      var t = mr;
      return mr = 0, t;
    }
    function Mo(t) {
      var e = mr;
      return mr = t, e;
    }
    function Kl(t) {
      var e = mr;
      return mr += t, e;
    }
    function gi() {
      ft = ut = -1.1;
    }
    function Se() {
      var t = ut;
      return ut = -1.1, t;
    }
    function fl(t) {
      0 <= t && (ut = t);
    }
    function Ia() {
      var t = qe;
      return qe = -0, t;
    }
    function Aa(t) {
      0 <= t && (qe = t);
    }
    function za() {
      var t = Ce;
      return Ce = null, t;
    }
    function Pa() {
      var t = Je;
      return Je = !1, t;
    }
    function Xu(t) {
      Xa = vl(), 0 > t.actualStartTime && (t.actualStartTime = Xa);
    }
    function sd(t) {
      if (0 <= Xa) {
        var e = vl() - Xa;
        t.actualDuration += e, t.selfBaseDuration = e, Xa = -1;
      }
    }
    function rs(t) {
      if (0 <= Xa) {
        var e = vl() - Xa;
        t.actualDuration += e, Xa = -1;
      }
    }
    function $l() {
      if (0 <= Xa) {
        var t = vl(), e = t - Xa;
        Xa = -1, mr += e, qe += e, ft = t;
      }
    }
    function Bp(t) {
      Ce === null && (Ce = []), Ce.push(t), to === null && (to = []), to.push(t);
    }
    function Be() {
      Xa = vl(), 0 > ut && (ut = Xa);
    }
    function Si(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function Qu(t, e) {
      if (_0 === null) {
        var a = _0 = [];
        z1 = 0, gr = Yy(), Qh = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return z1++, e.then(Gm, Gm), e;
    }
    function Gm() {
      if (--z1 === 0 && (-1 < Ru || (lo = -1.1), _0 !== null)) {
        Qh !== null && (Qh.status = "fulfilled");
        var t = _0;
        _0 = null, gr = 0, Qh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function rd(t, e) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          c.status = "fulfilled", c.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (c.status = "rejected", c.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), c;
    }
    function Vu() {
      var t = Sr.current;
      return t !== null ? t : he.pooledCache;
    }
    function Ro(t, e) {
      e === null ? Ot(Sr, Sr.current, t) : Ot(Sr, e.pool, t);
    }
    function Xm() {
      var t = Vu();
      return t === null ? null : { parent: pl._currentValue, pool: t };
    }
    function dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Qm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Da(t, e, a) {
      B.actQueue !== null && (B.didUsePromise = !0);
      var c = t.thenables;
      if (a = c[a], a === void 0 ? c.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then($a, $a), e = a), e._debugInfo === void 0) {
        t = performance.now(), c = e.displayName;
        var o = {
          name: typeof c == "string" ? c : "Promise",
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
          throw t = e.reason, ds(t), t;
        default:
          if (typeof e.status == "string")
            e.then($a, $a);
          else {
            if (t = he, t !== null && 100 < t.shellSuspendCounter)
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
              throw t = e.reason, ds(t), t;
          }
          throw Tr = e, Y0 = !0, Vh;
      }
    }
    function Oa(t) {
      try {
        return BT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Tr = e, Y0 = !0, Vh) : e;
      }
    }
    function bi() {
      if (Tr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Tr;
      return Tr = null, Y0 = !1, t;
    }
    function ds(t) {
      if (t === Vh || t === eg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Qe(t) {
      var e = zt;
      return t != null && (zt = e === null ? t : e.concat(t)), e;
    }
    function fa() {
      var t = zt;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Wl(t, e, a) {
      for (var c = Object.keys(t.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = gc(t, a.mode, 0), e._debugInfo = zt, e.return = a), W(
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
    function Tn(t) {
      var e = j0;
      return j0 += 1, Zh === null && (Zh = dd()), Da(Zh, t, e);
    }
    function sa(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function En(t, e) {
      throw e.$$typeof === Uv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function tn(t, e) {
      var a = fa();
      a !== null ? a.run(
        En.bind(null, t, e)
      ) : En(t, e);
    }
    function Vm(t, e) {
      var a = et(t) || "Component";
      ub[a] || (ub[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
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
    function Uo(t, e) {
      var a = fa();
      a !== null ? a.run(
        Vm.bind(null, t, e)
      ) : Vm(t, e);
    }
    function hd(t, e) {
      var a = et(t) || "Component";
      cb[a] || (cb[a] = !0, e = String(e), t.tag === 3 ? console.error(
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
    function hs(t, e) {
      var a = fa();
      a !== null ? a.run(
        hd.bind(null, t, e)
      ) : hd(t, e);
    }
    function sl(t) {
      function e(g, b) {
        if (t) {
          var E = g.deletions;
          E === null ? (g.deletions = [b], g.flags |= 16) : E.push(b);
        }
      }
      function a(g, b) {
        if (!t) return null;
        for (; b !== null; )
          e(g, b), b = b.sibling;
        return null;
      }
      function c(g) {
        for (var b = /* @__PURE__ */ new Map(); g !== null; )
          g.key !== null ? b.set(g.key, g) : b.set(g.index, g), g = g.sibling;
        return b;
      }
      function o(g, b) {
        return g = kn(g, b), g.index = 0, g.sibling = null, g;
      }
      function f(g, b, E) {
        return g.index = E, t ? (E = g.alternate, E !== null ? (E = E.index, E < b ? (g.flags |= 67108866, b) : E) : (g.flags |= 67108866, b)) : (g.flags |= 1048576, b);
      }
      function d(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function h(g, b, E, Y) {
        return b === null || b.tag !== 6 ? (b = zo(
          E,
          g.mode,
          Y
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = zt, b) : (b = o(b, E), b.return = g, b._debugInfo = zt, b);
      }
      function y(g, b, E, Y) {
        var J = E.type;
        return J === sf ? (b = A(
          g,
          b,
          E.props.children,
          Y,
          E.key
        ), Wl(E, b, g), b) : b !== null && (b.elementType === J || Cm(b, E) || typeof J == "object" && J !== null && J.$$typeof === Gl && Oa(J) === b.type) ? (b = o(b, E.props), sa(b, E), b.return = g, b._debugOwner = E._owner, b._debugInfo = zt, b) : (b = gc(E, g.mode, Y), sa(b, E), b.return = g, b._debugInfo = zt, b);
      }
      function p(g, b, E, Y) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = ud(E, g.mode, Y), b.return = g, b._debugInfo = zt, b) : (b = o(b, E.children || []), b.return = g, b._debugInfo = zt, b);
      }
      function A(g, b, E, Y, J) {
        return b === null || b.tag !== 7 ? (b = mi(
          E,
          g.mode,
          Y,
          J
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = zt, b) : (b = o(b, E), b.return = g, b._debugInfo = zt, b);
      }
      function D(g, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = zo(
            "" + b,
            g.mode,
            E
          ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = zt, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case un:
              return E = gc(
                b,
                g.mode,
                E
              ), sa(E, b), E.return = g, g = Qe(b._debugInfo), E._debugInfo = zt, zt = g, E;
            case Lc:
              return b = ud(
                b,
                g.mode,
                E
              ), b.return = g, b._debugInfo = zt, b;
            case Gl:
              var Y = Qe(b._debugInfo);
              return b = Oa(b), g = D(g, b, E), zt = Y, g;
          }
          if (ke(b) || Ke(b))
            return E = mi(
              b,
              g.mode,
              E,
              null
            ), E.return = g, E._debugOwner = g, E._debugTask = g._debugTask, g = Qe(b._debugInfo), E._debugInfo = zt, zt = g, E;
          if (typeof b.then == "function")
            return Y = Qe(b._debugInfo), g = D(
              g,
              Tn(b),
              E
            ), zt = Y, g;
          if (b.$$typeof === Nn)
            return D(
              g,
              fs(g, b),
              E
            );
          tn(g, b);
        }
        return typeof b == "function" && Uo(g, b), typeof b == "symbol" && hs(g, b), null;
      }
      function S(g, b, E, Y) {
        var J = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return J !== null ? null : h(g, b, "" + E, Y);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case un:
              return E.key === J ? (J = Qe(E._debugInfo), g = y(
                g,
                b,
                E,
                Y
              ), zt = J, g) : null;
            case Lc:
              return E.key === J ? p(g, b, E, Y) : null;
            case Gl:
              return J = Qe(E._debugInfo), E = Oa(E), g = S(
                g,
                b,
                E,
                Y
              ), zt = J, g;
          }
          if (ke(E) || Ke(E))
            return J !== null ? null : (J = Qe(E._debugInfo), g = A(
              g,
              b,
              E,
              Y,
              null
            ), zt = J, g);
          if (typeof E.then == "function")
            return J = Qe(E._debugInfo), g = S(
              g,
              b,
              Tn(E),
              Y
            ), zt = J, g;
          if (E.$$typeof === Nn)
            return S(
              g,
              b,
              fs(g, E),
              Y
            );
          tn(g, E);
        }
        return typeof E == "function" && Uo(g, E), typeof E == "symbol" && hs(g, E), null;
      }
      function C(g, b, E, Y, J) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return g = g.get(E) || null, h(b, g, "" + Y, J);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case un:
              return E = g.get(
                Y.key === null ? E : Y.key
              ) || null, g = Qe(Y._debugInfo), b = y(
                b,
                E,
                Y,
                J
              ), zt = g, b;
            case Lc:
              return g = g.get(
                Y.key === null ? E : Y.key
              ) || null, p(b, g, Y, J);
            case Gl:
              var pt = Qe(Y._debugInfo);
              return Y = Oa(Y), b = C(
                g,
                b,
                E,
                Y,
                J
              ), zt = pt, b;
          }
          if (ke(Y) || Ke(Y))
            return E = g.get(E) || null, g = Qe(Y._debugInfo), b = A(
              b,
              E,
              Y,
              J,
              null
            ), zt = g, b;
          if (typeof Y.then == "function")
            return pt = Qe(Y._debugInfo), b = C(
              g,
              b,
              E,
              Tn(Y),
              J
            ), zt = pt, b;
          if (Y.$$typeof === Nn)
            return C(
              g,
              b,
              E,
              fs(b, Y),
              J
            );
          tn(b, Y);
        }
        return typeof Y == "function" && Uo(b, Y), typeof Y == "symbol" && hs(b, Y), null;
      }
      function w(g, b, E, Y) {
        if (typeof E != "object" || E === null) return Y;
        switch (E.$$typeof) {
          case un:
          case Lc:
            Vn(g, b, E);
            var J = E.key;
            if (typeof J != "string") break;
            if (Y === null) {
              Y = /* @__PURE__ */ new Set(), Y.add(J);
              break;
            }
            if (!Y.has(J)) {
              Y.add(J);
              break;
            }
            W(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                J
              );
            });
            break;
          case Gl:
            E = Oa(E), w(g, b, E, Y);
        }
        return Y;
      }
      function $(g, b, E, Y) {
        for (var J = null, pt = null, nt = null, P = b, Tt = b = 0, De = null; P !== null && Tt < E.length; Tt++) {
          P.index > Tt ? (De = P, P = null) : De = P.sibling;
          var ul = S(
            g,
            P,
            E[Tt],
            Y
          );
          if (ul === null) {
            P === null && (P = De);
            break;
          }
          J = w(
            g,
            ul,
            E[Tt],
            J
          ), t && P && ul.alternate === null && e(g, P), b = f(ul, b, Tt), nt === null ? pt = ul : nt.sibling = ul, nt = ul, P = De;
        }
        if (Tt === E.length)
          return a(g, P), Nt && gn(g, Tt), pt;
        if (P === null) {
          for (; Tt < E.length; Tt++)
            P = D(g, E[Tt], Y), P !== null && (J = w(
              g,
              P,
              E[Tt],
              J
            ), b = f(
              P,
              b,
              Tt
            ), nt === null ? pt = P : nt.sibling = P, nt = P);
          return Nt && gn(g, Tt), pt;
        }
        for (P = c(P); Tt < E.length; Tt++)
          De = C(
            P,
            g,
            Tt,
            E[Tt],
            Y
          ), De !== null && (J = w(
            g,
            De,
            E[Tt],
            J
          ), t && De.alternate !== null && P.delete(
            De.key === null ? Tt : De.key
          ), b = f(
            De,
            b,
            Tt
          ), nt === null ? pt = De : nt.sibling = De, nt = De);
        return t && P.forEach(function(so) {
          return e(g, so);
        }), Nt && gn(g, Tt), pt;
      }
      function ve(g, b, E, Y) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var J = null, pt = null, nt = b, P = b = 0, Tt = null, De = null, ul = E.next(); nt !== null && !ul.done; P++, ul = E.next()) {
          nt.index > P ? (Tt = nt, nt = null) : Tt = nt.sibling;
          var so = S(g, nt, ul.value, Y);
          if (so === null) {
            nt === null && (nt = Tt);
            break;
          }
          De = w(
            g,
            so,
            ul.value,
            De
          ), t && nt && so.alternate === null && e(g, nt), b = f(so, b, P), pt === null ? J = so : pt.sibling = so, pt = so, nt = Tt;
        }
        if (ul.done)
          return a(g, nt), Nt && gn(g, P), J;
        if (nt === null) {
          for (; !ul.done; P++, ul = E.next())
            nt = D(g, ul.value, Y), nt !== null && (De = w(
              g,
              nt,
              ul.value,
              De
            ), b = f(
              nt,
              b,
              P
            ), pt === null ? J = nt : pt.sibling = nt, pt = nt);
          return Nt && gn(g, P), J;
        }
        for (nt = c(nt); !ul.done; P++, ul = E.next())
          Tt = C(
            nt,
            g,
            P,
            ul.value,
            Y
          ), Tt !== null && (De = w(
            g,
            Tt,
            ul.value,
            De
          ), t && Tt.alternate !== null && nt.delete(
            Tt.key === null ? P : Tt.key
          ), b = f(
            Tt,
            b,
            P
          ), pt === null ? J = Tt : pt.sibling = Tt, pt = Tt);
        return t && nt.forEach(function(aE) {
          return e(g, aE);
        }), Nt && gn(g, P), J;
      }
      function Yt(g, b, E, Y) {
        if (typeof E == "object" && E !== null && E.type === sf && E.key === null && (Wl(E, null, g), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case un:
              var J = Qe(E._debugInfo);
              t: {
                for (var pt = E.key; b !== null; ) {
                  if (b.key === pt) {
                    if (pt = E.type, pt === sf) {
                      if (b.tag === 7) {
                        a(
                          g,
                          b.sibling
                        ), Y = o(
                          b,
                          E.props.children
                        ), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = zt, Wl(E, Y, g), g = Y;
                        break t;
                      }
                    } else if (b.elementType === pt || Cm(
                      b,
                      E
                    ) || typeof pt == "object" && pt !== null && pt.$$typeof === Gl && Oa(pt) === b.type) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(b, E.props), sa(Y, E), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = zt, g = Y;
                      break t;
                    }
                    a(g, b);
                    break;
                  } else e(g, b);
                  b = b.sibling;
                }
                E.type === sf ? (Y = mi(
                  E.props.children,
                  g.mode,
                  Y,
                  E.key
                ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = zt, Wl(E, Y, g), g = Y) : (Y = gc(
                  E,
                  g.mode,
                  Y
                ), sa(Y, E), Y.return = g, Y._debugInfo = zt, g = Y);
              }
              return g = d(g), zt = J, g;
            case Lc:
              t: {
                for (J = E, E = J.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === J.containerInfo && b.stateNode.implementation === J.implementation) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(
                        b,
                        J.children || []
                      ), Y.return = g, g = Y;
                      break t;
                    } else {
                      a(g, b);
                      break;
                    }
                  else e(g, b);
                  b = b.sibling;
                }
                Y = ud(
                  J,
                  g.mode,
                  Y
                ), Y.return = g, g = Y;
              }
              return d(g);
            case Gl:
              return J = Qe(E._debugInfo), E = Oa(E), g = Yt(
                g,
                b,
                E,
                Y
              ), zt = J, g;
          }
          if (ke(E))
            return J = Qe(E._debugInfo), g = $(
              g,
              b,
              E,
              Y
            ), zt = J, g;
          if (Ke(E)) {
            if (J = Qe(E._debugInfo), pt = Ke(E), typeof pt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var nt = pt.call(E);
            return nt === E ? (g.tag !== 0 || Object.prototype.toString.call(g.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(nt) !== "[object Generator]") && (ab || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), ab = !0) : E.entries !== pt || R1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), R1 = !0), g = ve(
              g,
              b,
              nt,
              Y
            ), zt = J, g;
          }
          if (typeof E.then == "function")
            return J = Qe(E._debugInfo), g = Yt(
              g,
              b,
              Tn(E),
              Y
            ), zt = J, g;
          if (E.$$typeof === Nn)
            return Yt(
              g,
              b,
              fs(g, E),
              Y
            );
          tn(g, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (J = "" + E, b !== null && b.tag === 6 ? (a(
          g,
          b.sibling
        ), Y = o(b, J), Y.return = g, g = Y) : (a(g, b), Y = zo(
          J,
          g.mode,
          Y
        ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = zt, g = Y), d(g)) : (typeof E == "function" && Uo(g, E), typeof E == "symbol" && hs(g, E), a(g, b));
      }
      return function(g, b, E, Y) {
        var J = zt;
        zt = null;
        try {
          j0 = 0;
          var pt = Yt(
            g,
            b,
            E,
            Y
          );
          return Zh = null, pt;
        } catch (De) {
          if (De === Vh || De === eg) throw De;
          var nt = xt(29, De, null, g.mode);
          nt.lanes = Y, nt.return = g;
          var P = nt._debugInfo = zt;
          if (nt._debugOwner = g._debugOwner, nt._debugTask = g._debugTask, P != null) {
            for (var Tt = P.length - 1; 0 <= Tt; Tt--)
              if (typeof P[Tt].stack == "string") {
                nt._debugOwner = P[Tt], nt._debugTask = P[Tt].debugTask;
                break;
              }
          }
          return nt;
        } finally {
          zt = J;
        }
      };
    }
    function fe(t, e) {
      var a = ke(t);
      return t = !a && typeof Ke(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function Ct(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Pn(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Pe(t) {
      return {
        lane: t,
        tag: ob,
        payload: null,
        callback: null,
        next: null
      };
    }
    function tu(t, e, a) {
      var c = t.updateQueue;
      if (c === null) return null;
      if (c = c.shared, _1 === c && !rb) {
        var o = et(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), rb = !0;
      }
      return (Xt & Cl) !== Zl ? (o = c.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), c.pending = e, e = cs(t), _m(t, null, a), e) : (Ao(t, c, e, a), cs(t));
    }
    function en(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, sp(t, a);
      }
    }
    function ms(t, e) {
      var a = t.updateQueue, c = t.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
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
          baseState: c.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: c.shared,
          callbacks: c.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function _o() {
      if (C1) {
        var t = Qh;
        if (t !== null) throw t;
      }
    }
    function eu(t, e, a, c) {
      C1 = !1;
      var o = t.updateQueue;
      Cf = !1, _1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var A = t.alternate;
        A !== null && (A = A.updateQueue, h = A.lastBaseUpdate, h !== d && (h === null ? A.firstBaseUpdate = p : h.next = p, A.lastBaseUpdate = y));
      }
      if (f !== null) {
        var D = o.baseState;
        d = 0, A = p = y = null, h = f;
        do {
          var S = h.lane & -536870913, C = S !== h.lane;
          if (C ? (Dt & S) === S : (c & S) === S) {
            S !== 0 && S === gr && (C1 = !0), A !== null && (A = A.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              S = t;
              var w = h, $ = e, ve = a;
              switch (w.tag) {
                case fb:
                  if (w = w.payload, typeof w == "function") {
                    Gh = !0;
                    var Yt = w.call(
                      ve,
                      D,
                      $
                    );
                    if (S.mode & va) {
                      oe(!0);
                      try {
                        w.call(ve, D, $);
                      } finally {
                        oe(!1);
                      }
                    }
                    Gh = !1, D = Yt;
                    break t;
                  }
                  D = w;
                  break t;
                case U1:
                  S.flags = S.flags & -65537 | 128;
                case ob:
                  if (Yt = w.payload, typeof Yt == "function") {
                    if (Gh = !0, w = Yt.call(
                      ve,
                      D,
                      $
                    ), S.mode & va) {
                      oe(!0);
                      try {
                        Yt.call(ve, D, $);
                      } finally {
                        oe(!1);
                      }
                    }
                    Gh = !1;
                  } else w = Yt;
                  if (w == null) break t;
                  D = Et({}, D, w);
                  break t;
                case sb:
                  Cf = !0;
              }
            }
            S = h.callback, S !== null && (t.flags |= 64, C && (t.flags |= 8192), C = o.callbacks, C === null ? o.callbacks = [S] : C.push(S));
          } else
            C = {
              lane: S,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, A === null ? (p = A = C, y = D) : A = A.next = C, d |= S;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            C = h, h = C.next, C.next = null, o.lastBaseUpdate = C, o.shared.pending = null;
          }
        } while (!0);
        A === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = A, f === null && (o.shared.lanes = 0), Nf |= d, t.lanes = d, t.memoizedState = D;
      }
      _1 = null;
    }
    function Ac(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Zm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          Ac(a[t], e);
    }
    function Co(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          Ac(a[t], e);
    }
    function md(t, e) {
      var a = Ic;
      Ot(ag, a, t), Ot(Lh, e, t), Ic = a | e.baseLanes;
    }
    function Zu(t) {
      Ot(ag, Ic, t), Ot(
        Lh,
        Lh.current,
        t
      );
    }
    function An(t) {
      Ic = ag.current, _t(Lh, t), _t(ag, t);
    }
    function kl(t) {
      var e = t.alternate;
      Ot(
        nl,
        nl.current & wh,
        t
      ), Ot(jn, t, t), Uu === null && (e === null || Lh.current !== null || e.memoizedState !== null) && (Uu = t);
    }
    function zn(t) {
      Ot(nl, nl.current, t), Ot(jn, t, t), Uu === null && (Uu = t);
    }
    function yd(t) {
      t.tag === 22 ? (Ot(nl, nl.current, t), Ot(jn, t, t), Uu === null && (Uu = t)) : lu(t);
    }
    function lu(t) {
      Ot(nl, nl.current, t), Ot(
        jn,
        jn.current,
        t
      );
    }
    function rl(t) {
      _t(jn, t), Uu === t && (Uu = null), _t(nl, t);
    }
    function Ti(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || ks(a) || Xy(a)))
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
    function mt() {
      var t = H;
      Cu === null ? Cu = [t] : Cu.push(t);
    }
    function V() {
      var t = H;
      if (Cu !== null && (uo++, Cu[uo] !== t)) {
        var e = et(yt);
        if (!db.has(e) && (db.add(e), Cu !== null)) {
          for (var a = "", c = 0; c <= uo; c++) {
            var o = Cu[c], f = c === uo ? t : o;
            for (o = c + 1 + ". " + o; 30 > o.length; )
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
    function Lu(t) {
      t == null || ke(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        H,
        typeof t
      );
    }
    function ys() {
      var t = et(yt);
      mb.has(t) || (mb.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function Ne() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Lm(t, e) {
      if (Q0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          H
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        H,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!Ga(t[a], e[a])) return !1;
      return !0;
    }
    function wm(t, e, a, c, o, f) {
      ao = f, yt = e, Cu = t !== null ? t._debugHookTypes : null, uo = -1, Q0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = et(yt), H1.has(f) || (H1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t !== null && t.memoizedState !== null ? N1 : Cu !== null ? yb : B1, Ar = f = (e.mode & va) !== dt;
      var d = D1(a, c, o);
      if (Ar = !1, Kh && (d = ps(
        e,
        a,
        c,
        o
      )), f) {
        oe(!0);
        try {
          d = ps(
            e,
            a,
            c,
            o
          );
        } finally {
          oe(!1);
        }
      }
      return Ve(t, e), d;
    }
    function Ve(t, e) {
      e._debugHookTypes = Cu, e.dependencies === null ? no !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: no
      }) : e.dependencies._debugThenableState = no, B.H = V0;
      var a = de !== null && de.next !== null;
      if (ao = 0, Cu = H = gl = de = yt = null, uo = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), ug = !1, X0 = 0, no = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Sl || (t = t.dependencies, t !== null && Oo(t) && (Sl = !0)), Y0 ? (Y0 = !1, t = !0) : t = !1, t && (e = et(e) || "Unknown", hb.has(e) || H1.has(e) || (hb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function ps(t, e, a, c) {
      yt = t;
      var o = 0;
      do {
        if (Kh && (no = null), X0 = 0, Kh = !1, o >= xT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Q0 = !1, gl = de = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        uo = -1, B.H = pb, f = D1(e, a, c);
      } while (Kh);
      return f;
    }
    function vs() {
      var t = B.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? bs(e) : e, t = t.useState()[0], (de !== null ? de.memoizedState : null) !== t && (yt.flags |= 1024), e;
    }
    function Ei() {
      var t = cg !== 0;
      return cg = 0, t;
    }
    function gs(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & uc) !== dt ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function zc(t) {
      if (ug) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        ug = !1;
      }
      ao = 0, Cu = gl = de = yt = null, uo = -1, H = null, Kh = !1, X0 = cg = 0, no = null;
    }
    function $e() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gl === null ? yt.memoizedState = gl = t : gl = gl.next = t, gl;
    }
    function Kt() {
      if (de === null) {
        var t = yt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = de.next;
      var e = gl === null ? yt.memoizedState : gl.next;
      if (e !== null)
        gl = e, de = t;
      else {
        if (t === null)
          throw yt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        de = t, t = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null
        }, gl === null ? yt.memoizedState = gl = t : gl = gl.next = t;
      }
      return gl;
    }
    function Ss() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function bs(t) {
      var e = X0;
      return X0 += 1, no === null && (no = dd()), t = Da(no, t, e), e = yt, (gl === null ? e.memoizedState : gl.next) === null && (e = e.alternate, B.H = e !== null && e.memoizedState !== null ? N1 : B1), t;
    }
    function wu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return bs(t);
        if (t.$$typeof === Nn) return Zt(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ma(t) {
      var e = null, a = yt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var c = yt.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = Ss(), yt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || Q0)
        for (a = e.data[e.index] = Array(t), c = 0; c < t; c++)
          a[c] = Ig;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function Ra(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Ho(t, e, a) {
      var c = $e();
      if (a !== void 0) {
        var o = a(e);
        if (Ar) {
          oe(!0);
          try {
            a(e);
          } finally {
            oe(!1);
          }
        }
      } else o = e;
      return c.memoizedState = c.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, c.queue = t, t = t.dispatch = Kg.bind(
        null,
        yt,
        t
      ), [c.memoizedState, t];
    }
    function Ai(t) {
      var e = Kt();
      return Dc(e, de, t);
    }
    function Dc(t, e, a) {
      var c = t.queue;
      if (c === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      c.lastRenderedReducer = a;
      var o = t.baseQueue, f = c.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, c.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, A = !1;
        do {
          var D = p.lane & -536870913;
          if (D !== p.lane ? (Dt & D) === D : (ao & D) === D) {
            var S = p.revertLane;
            if (S === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), D === gr && (A = !0);
            else if ((ao & S) === S) {
              p = p.next, S === gr && (A = !0);
              continue;
            } else
              D = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = D, d = f) : y = y.next = D, yt.lanes |= S, Nf |= S;
            D = p.action, Ar && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            S = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = S, d = f) : y = y.next = S, yt.lanes |= D, Nf |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !Ga(f, t.memoizedState) && (Sl = !0, A && (a = Qh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
    }
    function zi(t) {
      var e = Kt(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var c = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        Ga(f, e.memoizedState) || (Sl = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function Bo(t, e, a) {
      var c = yt, o = $e();
      if (Nt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Jh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      } else {
        if (f = e(), Jh || (a = e(), Ga(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0)), he === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Dt & 127) !== 0 || Jm(c, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Mi(
        Oc.bind(null, c, a, t),
        [t]
      ), c.flags |= 2048, au(
        _u | Va,
        { destroy: void 0 },
        Km.bind(
          null,
          c,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Di(t, e, a) {
      var c = yt, o = Kt(), f = Nt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !Jh) {
        var d = e();
        Ga(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      }
      (d = !Ga(
        (de || o).memoizedState,
        a
      )) && (o.memoizedState = a, Sl = !0), o = o.queue;
      var h = Oc.bind(null, c, o, t);
      if (tl(2048, Va, h, [t]), o.getSnapshot !== e || d || gl !== null && gl.memoizedState.tag & _u) {
        if (c.flags |= 2048, au(
          _u | Va,
          { destroy: void 0 },
          Km.bind(
            null,
            c,
            o,
            a,
            e
          ),
          null
        ), he === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (ao & 127) !== 0 || Jm(c, e, a);
      }
      return a;
    }
    function Jm(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = yt.updateQueue, e === null ? (e = Ss(), yt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function Km(t, e, a, c) {
      e.value = a, e.getSnapshot = c, Mc(e) && $m(t);
    }
    function Oc(t, e, a) {
      return a(function() {
        Mc(e) && (Fn(2, "updateSyncExternalStore()", t), $m(t));
      });
    }
    function Mc(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !Ga(t, a);
      } catch {
        return !0;
      }
    }
    function $m(t) {
      var e = ql(t, 2);
      e !== null && ht(e, t, 2);
    }
    function pd(t) {
      var e = $e();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Ar) {
          oe(!0);
          try {
            a();
          } finally {
            oe(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: t
      }, e;
    }
    function Rc(t) {
      t = pd(t);
      var e = t.queue, a = Ed.bind(null, yt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Oi(t) {
      var e = $e();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Ms.bind(
        null,
        yt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Ts(t, e) {
      var a = Kt();
      return No(a, de, t, e);
    }
    function No(t, e, a, c) {
      return t.baseState = a, Dc(
        t,
        de,
        typeof c == "function" ? c : Ra
      );
    }
    function Es(t, e) {
      var a = Kt();
      return de !== null ? No(a, de, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function Np(t, e, a, c, o) {
      if (dl(t))
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
        B.T !== null ? a(!0) : f.isTransition = !1, c(f), a = e.pending, a === null ? (f.next = e.pending = f, Uc(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function Uc(t, e) {
      var a = e.action, c = e.payload, o = t.state;
      if (e.isTransition) {
        var f = B.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), B.T = d;
        try {
          var h = a(o, c), y = B.S;
          y !== null && y(d, h), Wm(t, e, h);
        } catch (p) {
          As(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), B.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), Wm(t, e, d);
        } catch (p) {
          As(t, e, p);
        }
    }
    function Wm(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (B.asyncTransitions++, a.then(Ri, Ri), a.then(
        function(c) {
          Ju(t, e, c);
        },
        function(c) {
          return As(t, e, c);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ju(t, e, a);
    }
    function Ju(t, e, a) {
      e.status = "fulfilled", e.value = a, vd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Uc(t, a)));
    }
    function As(t, e, a) {
      var c = t.pending;
      if (t.pending = null, c !== null) {
        c = c.next;
        do
          e.status = "rejected", e.reason = a, vd(e), e = e.next;
        while (e !== c);
      }
      t.action = null;
    }
    function vd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Ku(t, e) {
      return e;
    }
    function Ua(t, e) {
      if (Nt) {
        var a = he.formState;
        if (a !== null) {
          t: {
            var c = yt;
            if (Nt) {
              if (ze) {
                e: {
                  for (var o = ze, f = Mu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = xa(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === aS || f === e2 ? o : null;
                }
                if (o) {
                  ze = xa(
                    o.nextSibling
                  ), c = o.data === aS;
                  break t;
                }
              }
              ka(c);
            }
            c = !1;
          }
          c && (e = a[0]);
        }
      }
      return a = $e(), a.memoizedState = a.baseState = e, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ku,
        lastRenderedState: e
      }, a.queue = c, a = Ed.bind(
        null,
        yt,
        c
      ), c.dispatch = a, c = pd(!1), f = Ms.bind(
        null,
        yt,
        !1,
        c.queue
      ), c = $e(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, c.queue = o, a = Np.bind(
        null,
        yt,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = t, [e, a, !1];
    }
    function _c(t) {
      var e = Kt();
      return gd(e, de, t);
    }
    function gd(t, e, a) {
      if (e = Dc(
        t,
        e,
        Ku
      )[0], t = Ai(Ra)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var c = bs(e);
        } catch (d) {
          throw d === Vh ? eg : d;
        }
      else c = e;
      e = Kt();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (yt.flags |= 2048, au(
        _u | Va,
        { destroy: void 0 },
        km.bind(null, o, a),
        null
      )), [c, f, t];
    }
    function km(t, e) {
      t.action = e;
    }
    function Cc(t) {
      var e = Kt(), a = de;
      if (a !== null)
        return gd(e, a, t);
      Kt(), e = e.memoizedState, a = Kt();
      var c = a.queue.dispatch;
      return a.memoizedState = t, [e, c, !1];
    }
    function au(t, e, a, c) {
      return t = { tag: t, create: a, deps: c, inst: e, next: null }, e = yt.updateQueue, e === null && (e = Ss(), yt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (c = a.next, a.next = t, t.next = c, e.lastEffect = t), t;
    }
    function Sd(t) {
      var e = $e();
      return t = { current: t }, e.memoizedState = t;
    }
    function Hc(t, e, a, c) {
      var o = $e();
      yt.flags |= t, o.memoizedState = au(
        _u | e,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function tl(t, e, a, c) {
      var o = Kt();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      de !== null && c !== null && Lm(c, de.memoizedState.deps) ? o.memoizedState = au(e, f, a, c) : (yt.flags |= t, o.memoizedState = au(
        _u | e,
        f,
        a,
        c
      ));
    }
    function Mi(t, e) {
      (yt.mode & uc) !== dt ? Hc(276826112, Va, t, e) : Hc(8390656, Va, t, e);
    }
    function xp(t) {
      yt.flags |= 4;
      var e = yt.updateQueue;
      if (e === null)
        e = Ss(), yt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function zs(t) {
      var e = $e(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Xt & Cl) !== Zl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function xo(t) {
      var e = Kt().memoizedState;
      return xp({ ref: e, nextImpl: t }), function() {
        if ((Xt & Cl) !== Zl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function Fl(t, e) {
      var a = 4194308;
      return (yt.mode & uc) !== dt && (a |= 134217728), Hc(a, Gn, t, e);
    }
    function _a(t, e) {
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
    function nu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var c = 4194308;
      (yt.mode & uc) !== dt && (c |= 134217728), Hc(
        c,
        Gn,
        _a.bind(null, e, t),
        a
      );
    }
    function qo(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, tl(
        4,
        Gn,
        _a.bind(null, e, t),
        a
      );
    }
    function bd(t, e) {
      return $e().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function Dn(t, e) {
      var a = Kt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      return e !== null && Lm(e, c[1]) ? c[0] : (a.memoizedState = [t, e], t);
    }
    function Il(t, e) {
      var a = $e();
      e = e === void 0 ? null : e;
      var c = t();
      if (Ar) {
        oe(!0);
        try {
          t();
        } finally {
          oe(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function be(t, e) {
      var a = Kt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      if (e !== null && Lm(e, c[1]))
        return c[0];
      if (c = t(), Ar) {
        oe(!0);
        try {
          t();
        } finally {
          oe(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function Yo(t, e) {
      var a = $e();
      return $t(a, t, e);
    }
    function uu(t, e) {
      var a = Kt();
      return Ze(
        a,
        de.memoizedState,
        t,
        e
      );
    }
    function gt(t, e) {
      var a = Kt();
      return de === null ? $t(a, t, e) : Ze(
        a,
        de.memoizedState,
        t,
        e
      );
    }
    function $t(t, e, a) {
      return a === void 0 || (ao & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = wo(), yt.lanes |= t, Nf |= t, a);
    }
    function Ze(t, e, a, c) {
      return Ga(a, e) ? a : Lh.current !== null ? (t = $t(t, a, c), Ga(t, e) || (Sl = !0), t) : (ao & 42) === 0 || (ao & 1073741824) !== 0 && (Dt & 261930) === 0 ? (Sl = !0, t.memoizedState = a) : (t = wo(), yt.lanes |= t, Nf |= t, e);
    }
    function Ri() {
      B.asyncTransitions--;
    }
    function Ui(t, e, a, c, o) {
      var f = wt.p;
      wt.p = f !== 0 && f < Ul ? f : Ul;
      var d = B.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), B.T = h, Ms(t, !1, e, a);
      try {
        var y = o(), p = B.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          B.asyncTransitions++, y.then(Ri, Ri);
          var A = rd(
            y,
            c
          );
          _i(
            t,
            e,
            A,
            jl(t)
          );
        } else
          _i(
            t,
            e,
            c,
            jl(t)
          );
      } catch (D) {
        _i(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: D },
          jl(t)
        );
      } finally {
        wt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), B.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function $u(t, e, a, c) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ds(t).queue;
      Hp(t), Ui(
        t,
        o,
        e,
        Nr,
        a === null ? Hl : function() {
          return jo(t), a(c);
        }
      );
    }
    function Ds(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Nr,
        baseState: Nr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ra,
          lastRenderedState: Nr
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
          lastRenderedReducer: Ra,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function jo(t) {
      B.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Ds(t);
      e.next === null && (e = t.alternate.memoizedState), _i(
        t,
        e.next.queue,
        {},
        jl(t)
      );
    }
    function Bc() {
      var t = pd(!1);
      return t = Ui.bind(
        null,
        yt,
        t.queue,
        !0,
        !1
      ), $e().memoizedState = t, [!1, t];
    }
    function qp() {
      var t = Ai(Ra)[0], e = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function Re() {
      var t = zi(Ra)[0], e = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function Wu() {
      return Zt(ap);
    }
    function Os() {
      var t = $e(), e = he.identifierPrefix;
      if (Nt) {
        var a = Ii, c = Fi;
        a = (c & ~(1 << 32 - Rl(c) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = cg++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = NT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Td() {
      return $e().memoizedState = Yp.bind(
        null,
        yt
      );
    }
    function Yp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = jl(a), o = Pe(c), f = tu(a, o, c);
            f !== null && (Fn(c, "refresh()", t), ht(f, a, c), en(f, a, c)), t = fd(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function Kg(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = jl(t);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      dl(t) ? xe(e, o) : (o = ri(t, e, o, c), o !== null && (Fn(c, "dispatch()", t), ht(o, t, c), Rs(o, e, c)));
    }
    function Ed(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = jl(t), _i(t, e, a, c) && Fn(c, "setState()", t);
    }
    function _i(t, e, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (dl(t)) xe(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = B.H;
          B.H = ic;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Ga(y, h))
              return Ao(t, e, o, 0), he === null && ad(), !1;
          } catch {
          } finally {
            B.H = d;
          }
        }
        if (a = ri(t, e, o, c), a !== null)
          return ht(a, t, c), Rs(a, e, c), !0;
      }
      return !1;
    }
    function Ms(t, e, a, c) {
      if (B.T === null && gr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: Yy(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, dl(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = ri(
          t,
          a,
          c,
          2
        ), e !== null && (Fn(2, "setOptimistic()", t), ht(e, t, 2));
    }
    function dl(t) {
      var e = t.alternate;
      return t === yt || e !== null && e === yt;
    }
    function xe(t, e) {
      Kh = ug = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Rs(t, e, a) {
      if ((a & 4194048) !== 0) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, sp(t, a);
      }
    }
    function Ci(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        Mb.has(e) || (Mb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Go(t, e, a, c) {
      var o = t.memoizedState, f = a(c, o);
      if (t.mode & va) {
        oe(!0);
        try {
          f = a(c, o);
        } finally {
          oe(!1);
        }
      }
      f === void 0 && (e = Bt(e) || "Component", Ab.has(e) || (Ab.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Et({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Ad(t, e, a, c, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), t.mode & va) {
          oe(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            oe(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Bt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Eo(a, c) || !Eo(o, f) : !0;
    }
    function cu(t, e, a, c) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, c), e.state !== o && (t = et(t) || "Component", gb.has(t) || (gb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), x1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function iu(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var c in e)
          c !== "ref" && (a[c] = e[c]);
      }
      if (t = t.defaultProps) {
        a === e && (a = Et({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function zd(t) {
      d1(t), console.warn(
        `%s

%s
`,
        $h ? "An error occurred in the <" + $h + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Dd(t) {
      var e = $h ? "The above error occurred in the <" + $h + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((q1 || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var c = t.environmentName;
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
          f2 + " " + t[0],
          s2,
          Cg + c + Cg,
          r2
        ) : t.splice(
          0,
          0,
          f2,
          s2,
          Cg + c + Cg,
          r2
        ), t.unshift(console), c = eE.apply(console.error, t), c();
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
    function Fm(t) {
      d1(t);
    }
    function Us(t, e) {
      try {
        $h = e.source ? et(e.source) : null, q1 = null;
        var a = e.value;
        if (B.actQueue !== null)
          B.thrownErrors.push(a);
        else {
          var c = t.onUncaughtError;
          c(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Im(t, e, a) {
      try {
        $h = a.source ? et(a.source) : null, q1 = et(e);
        var c = t.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Od(t, e, a) {
      return a = Pe(a), a.tag = U1, a.payload = { element: null }, a.callback = function() {
        W(e.source, Us, t, e);
      }, a;
    }
    function Md(t) {
      return t = Pe(t), t.tag = U1, t;
    }
    function Rd(t, e, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          di(a), W(
            c.source,
            Im,
            e,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        di(a), W(
          c.source,
          Im,
          e,
          a,
          c
        ), typeof o != "function" && (qf === null ? qf = /* @__PURE__ */ new Set([this]) : qf.add(this)), _T(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          et(a) || "Unknown"
        );
      });
    }
    function Pm(t, e, a, c, o) {
      if (a.flags |= 32768, bu && ko(t, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (e = a.alternate, e !== null && bn(
          e,
          a,
          o,
          !0
        ), Nt && (Wc = !0), a = jn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Uu === null ? Ko() : a.alternate === null && Ye === io && (Ye = fg), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === lg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), $d(t, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === lg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), $d(t, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return $d(t, c, o), Ko(), !1;
      }
      if (Nt)
        return Wc = !0, e = jn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, c !== g1 && os(
          Jl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== g1 && os(
          Jl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, c = Jl(c, a), o = Od(
          t.stateNode,
          c,
          o
        ), ms(t, o), Ye !== Hf && (Ye = zr)), !1;
      var f = Jl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if ($0 === null ? $0 = [f] : $0.push(f), Ye !== Hf && (Ye = zr), e === null) return !0;
      c = Jl(c, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Od(
              a.stateNode,
              c,
              t
            ), ms(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (qf === null || !qf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Md(o), Rd(
                o,
                t,
                a,
                c
              ), ms(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function hl(t, e, a, c) {
      e.child = t === null ? ib(e, null, a, c) : Er(
        e,
        t.child,
        a,
        c
      );
    }
    function jp(t, e, a, c, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Ec(e), c = wm(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Ei(), t !== null && !Sl ? (gs(t, e, o), On(t, e, o)) : (Nt && h && cd(e), e.flags |= 1, hl(t, e, c, o), e.child);
    }
    function ty(t, e, a, c, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Hm(f) && f.defaultProps === void 0 && a.compare === null ? (a = vc(f), e.tag = 15, e.type = a, Xo(e, f), ey(
          t,
          e,
          a,
          c,
          o
        )) : (t = hi(
          a.type,
          null,
          c,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Bd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Eo, a(d, c) && t.ref === e.ref)
          return On(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = kn(f, c), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ey(t, e, a, c, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Eo(f, c) && t.ref === e.ref && e.type === t.type)
          if (Sl = !1, e.pendingProps = c = f, Bd(t, o))
            (t.flags & 131072) !== 0 && (Sl = !0);
          else
            return e.lanes = t.lanes, On(t, e, o);
      }
      return uy(
        t,
        e,
        a,
        c,
        o
      );
    }
    function ly(t, e, a, c) {
      var o = c.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: A0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), c.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (c = e.child = t.child, o = 0; c !== null; )
              o = o | c.lanes | c.childLanes, c = c.sibling;
            c = o & ~f;
          } else c = 0, e.child = null;
          return ay(
            t,
            e,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ro(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? md(e, f) : Zu(e), yd(e);
        else
          return c = e.lanes = 536870912, ay(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? (Ro(e, f.cachePool), md(e, f), lu(e), e.memoizedState = null) : (t !== null && Ro(e, null), Zu(e), lu(e));
      return hl(t, e, o, a), e.child;
    }
    function Hi(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: A0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function ay(t, e, a, c, o) {
      var f = Vu();
      return f = f === null ? null : {
        parent: pl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Ro(e, null), Zu(e), yd(e), t !== null && bn(t, e, c, !0), e.childLanes = o, null;
    }
    function _s(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Hs(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ny(t, e, a) {
      return Er(e, t.child, null, a), t = _s(
        e,
        e.pendingProps
      ), t.flags |= 2, rl(e), e.memoizedState = null, t;
    }
    function Gp(t, e, a) {
      var c = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Nt) {
          if (c.mode === "hidden")
            return t = _s(e, c), e.lanes = 536870912, Hi(null, t);
          if (zn(e), (t = ze) ? (a = kt(
            t,
            Mu
          ), a = a !== null && a.data === _r ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Up(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Nm(a), c.return = e, e.child = c, ia = e, ze = null)) : a = null, a === null)
            throw Yl(e, t), ka(e);
          return e.lanes = 536870912, null;
        }
        return _s(e, c);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (zn(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = ny(
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
        else if (Cp(), (a & 536870912) !== 0 && Jo(e), Sl || bn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Sl || o) {
          if (c = he, c !== null && (d = rp(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ql(t, d), ht(c, t, d), Y1;
          Ko(), e = ny(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, ze = xa(
            d.nextSibling
          ), ia = e, Nt = !0, Of = null, Wc = !1, Yn = null, Mu = !1, t !== null && _p(e, t), e = _s(e, c), e.flags |= 4096;
        return e;
      }
      return f = t.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && Jo(e), t = kn(f, c), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Cs(t, e) {
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
    function uy(t, e, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Bt(a) || "Unknown";
        Rb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Rb[f] = !0);
      }
      return e.mode & va && cc.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Xo(e, e.type), a.contextTypes && (f = Bt(a) || "Unknown", _b[f] || (_b[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ec(e), a = wm(
        t,
        e,
        a,
        c,
        void 0,
        o
      ), c = Ei(), t !== null && !Sl ? (gs(t, e, o), On(t, e, o)) : (Nt && c && cd(e), e.flags |= 1, hl(t, e, a, o), e.child);
    }
    function cy(t, e, a, c, o, f) {
      return Ec(e), uo = -1, Q0 = t !== null && t.type !== e.type, e.updateQueue = null, a = ps(
        e,
        c,
        a,
        o
      ), Ve(t, e), c = Ei(), t !== null && !Sl ? (gs(t, e, f), On(t, e, f)) : (Nt && c && cd(e), e.flags |= 1, hl(t, e, a, f), e.child);
    }
    function Bi(t, e, a, c, o) {
      switch (Al(e)) {
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
          if (e.lanes |= h, d = he, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Md(h), Rd(
            h,
            d,
            e,
            Jl(f, e)
          ), ms(e, h);
      }
      if (Ec(e), e.stateNode === null) {
        if (d = Df, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Nn) && !Ob.has(a) && (Ob.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === ph ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Bt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Zt(f)), f = new a(c, d), e.mode & va) {
          oe(!0);
          try {
            f = new a(c, d);
          } finally {
            oe(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = x1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = vb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Bt(a) || "Component", Sb.has(d) || (Sb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Bt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Tb.has(f) || (Tb.add(f), console.error(
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
        f = e.stateNode, d = Bt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !Db.has(a) && (Db.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !zb.has(a) && (zb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Bt(a) || "A pure component"
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
        ), h = f.props !== c, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || bb.has(a) || (bb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Bt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || ke(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = c, f.state = e.memoizedState, f.refs = {}, Ct(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? Zt(d) : Df, f.state === c && (d = Bt(a) || "Component", Eb.has(d) || (Eb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & va && cc.recordLegacyContextWarning(
          e,
          f
        ), cc.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Go(
          e,
          a,
          d,
          c
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          et(e) || "Component"
        ), x1.enqueueReplaceState(
          f,
          f.state,
          null
        )), eu(e, c, f, o), _o(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== dt && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var A = e.memoizedProps;
        h = iu(a, A), f.props = h;
        var D = f.context;
        y = a.contextType, d = Df, typeof y == "object" && y !== null && (d = Zt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = e.pendingProps !== A, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || D !== d) && cu(
          e,
          f,
          c,
          d
        ), Cf = !1;
        var S = e.memoizedState;
        f.state = S, eu(e, c, f, o), _o(), D = e.memoizedState, A || S !== D || Cf ? (typeof p == "function" && (Go(
          e,
          a,
          p,
          c
        ), D = e.memoizedState), (h = Cf || Ad(
          e,
          a,
          h,
          c,
          S,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== dt && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== dt && (e.flags |= 134217728), e.memoizedProps = c, e.memoizedState = D), f.props = c, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== dt && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, Pn(t, e), d = e.memoizedProps, y = iu(a, d), f.props = y, p = e.pendingProps, S = f.context, D = a.contextType, h = Df, typeof D == "object" && D !== null && (h = Zt(D)), A = a.getDerivedStateFromProps, (D = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || S !== h) && cu(
          e,
          f,
          c,
          h
        ), Cf = !1, S = e.memoizedState, f.state = S, eu(e, c, f, o), _o();
        var C = e.memoizedState;
        d !== p || S !== C || Cf || t !== null && t.dependencies !== null && Oo(t.dependencies) ? (typeof A == "function" && (Go(
          e,
          a,
          A,
          c
        ), C = e.memoizedState), (y = Cf || Ad(
          e,
          a,
          y,
          c,
          S,
          C,
          h
        ) || t !== null && t.dependencies !== null && Oo(t.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, C, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          C,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = C), f.props = c, f.state = C, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, Cs(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Kf(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Xa = -1;
        else if (a = KS(h), e.mode & va) {
          oe(!0);
          try {
            KS(h);
          } finally {
            oe(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Er(
          e,
          t.child,
          null,
          o
        ), e.child = Er(
          e,
          null,
          a,
          o
        )) : hl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = On(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== c && (Wh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        et(e) || "a component"
      ), Wh = !0), t;
    }
    function iy(t, e, a, c) {
      return bc(), e.flags |= 256, hl(t, e, a, c), e.child;
    }
    function Xo(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = Bt(e) || "Unknown", Cb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Cb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = Bt(e) || "Unknown", Ub[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Ub[e] = !0));
    }
    function Qo(t) {
      return { baseLanes: t, cachePool: Xm() };
    }
    function Ud(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= sn), t;
    }
    function _d(t, e, a) {
      var c, o = e.pendingProps;
      ge(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((c = d) || (c = t !== null && t.memoizedState === null ? !1 : (nl.current & G0) !== 0), c && (f = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Nt) {
          if (f ? kl(e) : lu(e), (t = ze) ? (a = kt(
            t,
            Mu
          ), a = a !== null && a.data !== _r ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Up(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Nm(a), c.return = e, e.child = c, ia = e, ze = null)) : a = null, a === null)
            throw Yl(e, t), ka(e);
          return Xy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          lu(e);
          var y = e.mode;
          return h = Hs(
            { mode: "hidden", children: h },
            y
          ), o = mi(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = Qo(a), o.childLanes = Ud(
            t,
            c,
            a
          ), e.memoizedState = j1, Hi(
            null,
            o
          );
        }
        return kl(e), oy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var A = p.dehydrated;
        if (A !== null) {
          if (d)
            e.flags & 256 ? (kl(e), e.flags &= -257, e = Cd(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (lu(e), e.child = t.child, e.flags |= 128, e = null) : (lu(e), h = o.fallback, y = e.mode, o = Hs(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = mi(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Er(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = Qo(a), o.childLanes = Ud(
              t,
              c,
              a
            ), e.memoizedState = j1, e = Hi(
              null,
              o
            ));
          else if (kl(e), Cp(), (a & 536870912) !== 0 && Jo(e), Xy(
            A
          )) {
            if (c = A.nextSibling && A.nextSibling.dataset, c) {
              h = c.dgst;
              var D = c.msg;
              y = c.stck;
              var S = c.cstck;
            }
            f = D, c = h, o = y, A = S, h = f, y = A, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = c, c = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: c
            }, typeof c == "string" && v1.set(
              h,
              o
            ), os(o), e = Cd(
              t,
              e,
              a
            );
          } else if (Sl || bn(
            t,
            e,
            a,
            !1
          ), c = (a & t.childLanes) !== 0, Sl || c) {
            if (c = he, c !== null && (o = rp(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ql(
                t,
                o
              ), ht(
                c,
                t,
                o
              ), Y1;
            ks(
              A
            ) || Ko(), e = Cd(
              t,
              e,
              a
            );
          } else
            ks(
              A
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, ze = xa(
              A.nextSibling
            ), ia = e, Nt = !0, Of = null, Wc = !1, Yn = null, Mu = !1, t !== null && _p(e, t), e = oy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (lu(e), h = o.fallback, y = e.mode, S = t.child, A = S.sibling, o = kn(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, A !== null ? h = kn(
        A,
        h
      ) : (h = mi(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Hi(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = Qo(a) : (y = h.cachePool, y !== null ? (S = pl._currentValue, y = y.parent !== S ? { parent: S, pool: S } : y) : y = Xm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ud(
        t,
        c,
        a
      ), e.memoizedState = j1, Hi(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && Jo(e), kl(e), a = t.child, t = a.sibling, a = kn(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function oy(t, e) {
      return e = Hs(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Hs(t, e) {
      return t = xt(22, t, null, e), t.lanes = 0, t;
    }
    function Cd(t, e, a) {
      return Er(e, t.child, null, a), t = oy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function fy(t, e, a) {
      t.lanes |= e;
      var c = t.alternate;
      c !== null && (c.lanes |= e), od(
        t.return,
        e,
        a
      );
    }
    function Hd(t, e, a, c, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function sy(t, e, a) {
      var c = e.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = nl.current;
      if ((c = (h & G0) !== 0) ? (h = h & wh | G0, e.flags |= 128) : h &= wh, Ot(nl, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Hb[h])
        if (Hb[h] = !0, o == null)
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
      h = f ?? "null", og[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (og[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (og[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (og[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (ke(d)) {
          for (h = 0; h < d.length; h++)
            if (!fe(
              d[h],
              h
            ))
              break t;
        } else if (h = Ke(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!fe(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (hl(t, e, d, a), Nt ? (Sc(), d = z0) : d = 0, !c && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && fy(t, a, e);
          else if (t.tag === 19)
            fy(t, a, e);
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
            t = a.alternate, t !== null && Ti(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Hd(
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
            if (t = o.alternate, t !== null && Ti(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Hd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Hd(
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
    function On(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Xa = -1, Nf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (bn(
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
        for (t = e.child, a = kn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = kn(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function Bd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Oo(t)));
    }
    function Xp(t, e, a) {
      switch (e.tag) {
        case 3:
          il(
            e,
            e.stateNode.containerInfo
          ), Fa(
            e,
            pl,
            t.memoizedState.cache
          ), bc();
          break;
        case 27:
        case 5:
          Z(e);
          break;
        case 4:
          il(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          Fa(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var c = e.stateNode;
          c.effectDuration = -0, c.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, zn(e), null;
          break;
        case 13:
          if (c = e.memoizedState, c !== null)
            return c.dehydrated !== null ? (kl(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? _d(
              t,
              e,
              a
            ) : (kl(e), t = On(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          kl(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (c = (a & e.childLanes) !== 0, c || (bn(
            t,
            e,
            a,
            !1
          ), c = (a & e.childLanes) !== 0), o) {
            if (c)
              return sy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ot(
            nl,
            nl.current,
            e
          ), c) break;
          return null;
        case 22:
          return e.lanes = 0, ly(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          Fa(
            e,
            pl,
            t.memoizedState.cache
          );
      }
      return On(t, e, a);
    }
    function Bs(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = hi(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var c = e.return;
        if (c === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === c.child)
          c.child = a;
        else {
          var o = c.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = c.deletions, e === null ? (c.deletions = [t], c.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          Sl = !0;
        else {
          if (!Bd(t, a) && (e.flags & 128) === 0)
            return Sl = !1, Xp(
              t,
              e,
              a
            );
          Sl = (t.flags & 131072) !== 0;
        }
      else
        Sl = !1, (c = Nt) && (Sc(), c = (e.flags & 1048576) !== 0), c && (c = e.index, Sc(), xm(e, z0, c));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (c = e.pendingProps, t = Oa(e.elementType), e.type = t, typeof t == "function")
            Hm(t) ? (c = iu(
              t,
              c
            ), e.tag = 1, e.type = t = vc(t), e = Bi(
              null,
              e,
              t,
              c,
              a
            )) : (e.tag = 0, Xo(e, t), e.type = t = vc(t), e = uy(
              null,
              e,
              t,
              c,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === rf) {
                e.tag = 11, e.type = t = nd(t), e = jp(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              } else if (o === cr) {
                e.tag = 14, e = ty(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Gl && (e = " Did you wrap a component in React.lazy() more than once?"), a = Bt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return uy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return c = e.type, o = iu(
            c,
            e.pendingProps
          ), Bi(
            t,
            e,
            c,
            o,
            a
          );
        case 3:
          t: {
            if (il(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            c = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, Pn(t, e), eu(e, c, null, a);
            var d = e.memoizedState;
            if (c = d.cache, Fa(e, pl, c), c !== f.cache && Gu(
              e,
              [pl],
              a,
              !0
            ), _o(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = iy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else if (c !== o) {
                o = Jl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), os(o), e = iy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, ze = xa(t.firstChild), ia = e, Nt = !0, Of = null, Wc = !1, Yn = null, Mu = !0, a = ib(
                  e,
                  null,
                  c,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (bc(), c === o) {
                e = On(
                  t,
                  e,
                  a
                );
                break t;
              }
              hl(
                t,
                e,
                c,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return Cs(t, e), t === null ? (a = Ly(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : Nt || (a = e.type, t = e.pendingProps, c = xl(
            qa.current
          ), c = $s(
            c
          ).createElement(a), c[Ee] = e, c[ca] = t, Te(c, a, t), Xe(c), e.stateNode = c) : e.memoizedState = Ly(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return Z(e), t === null && Nt && (c = xl(qa.current), o = Q(), c = e.stateNode = ec(
            e.type,
            e.pendingProps,
            c,
            o,
            !1
          ), Wc || (o = ma(
            c,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (yi(e, 0).serverProps = o)), ia = e, Mu = !0, o = ze, Vc(e.type) ? (iS = o, ze = xa(
            c.firstChild
          )) : ze = o), hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), Cs(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Nt && (f = Q(), c = If(
            e.type,
            f.ancestorInfo
          ), o = ze, (d = !o) || (d = pv(
            o,
            e.type,
            e.pendingProps,
            Mu
          ), d !== null ? (e.stateNode = d, Wc || (f = ma(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (yi(e, 0).serverProps = f)), ia = e, ze = xa(
            d.firstChild
          ), Mu = !1, f = !0) : f = !1, d = !f), d && (c && Yl(e, o), ka(e))), Z(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, c = f.children, ef(o, f) ? c = null : d !== null && ef(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = wm(
            t,
            e,
            vs,
            null,
            null,
            a
          ), ap._currentValue = o), Cs(t, e), hl(
            t,
            e,
            c,
            a
          ), e.child;
        case 6:
          return t === null && Nt && (a = e.pendingProps, t = Q(), c = t.ancestorInfo.current, a = c != null ? Pf(
            a,
            c.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = ze, (c = !t) || (c = vv(
            t,
            e.pendingProps,
            Mu
          ), c !== null ? (e.stateNode = c, ia = e, ze = null, c = !0) : c = !1, c = !c), c && (a && Yl(e, t), ka(e))), null;
        case 13:
          return _d(t, e, a);
        case 4:
          return il(
            e,
            e.stateNode.containerInfo
          ), c = e.pendingProps, t === null ? e.child = Er(
            e,
            null,
            c,
            a
          ) : hl(
            t,
            e,
            c,
            a
          ), e.child;
        case 11:
          return jp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return hl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, c = e.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return c = e.type, o = e.pendingProps, f = o.value, "value" in o || Bb || (Bb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Fa(e, c, f), hl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ec(e), o = Zt(o), c = D1(
            c,
            o,
            void 0
          ), e.flags |= 1, hl(
            t,
            e,
            c,
            a
          ), e.child;
        case 14:
          return ty(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return ey(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return sy(
            t,
            e,
            a
          );
        case 31:
          return Gp(t, e, a);
        case 22:
          return ly(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Ec(e), c = Zt(pl), t === null ? (o = Vu(), o === null && (o = he, f = fd(), o.pooledCache = f, vi(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: c,
            cache: o
          }, Ct(e), Fa(e, pl, o)) : ((t.lanes & a) !== 0 && (Pn(t, e), eu(e, null, null, a), _o()), o = t.memoizedState, f = e.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Fa(e, pl, c)) : (c = f.cache, Fa(e, pl, c), c !== o.cache && Gu(
            e,
            [pl],
            a,
            !0
          ))), hl(
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
    function ou(t) {
      t.flags |= 4;
    }
    function Nd(t, e, a, c, o) {
      if ((e = (t.mode & DT) !== dt) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (Ry()) t.flags |= 8192;
          else
            throw Tr = lg, M1;
      } else t.flags &= -16777217;
    }
    function Qp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Hu) !== Br)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !Ut(e))
        if (Ry()) t.flags |= 8192;
        else
          throw Tr = lg, M1;
    }
    function Vo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Yr() : 536870912, t.lanes |= e, Mr |= e);
    }
    function Zo(t, e) {
      if (!Nt)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var c = null; a !== null; )
              a.alternate !== null && (c = a), a = a.sibling;
            c === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : c.sibling = null;
        }
    }
    function ae(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, c = 0;
      if (e)
        if ((t.mode & At) !== dt) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & At) !== dt) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= c, t.childLanes = a, e;
    }
    function ry(t, e, a) {
      var c = e.pendingProps;
      switch (id(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ae(e), null;
        case 1:
          return ae(e), null;
        case 3:
          return a = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), Sn(pl, e), O(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (pi(e) ? (Tc(), ou(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, is())), ae(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (ou(e), f !== null ? (ae(e), Qp(
            e,
            f
          )) : (ae(e), Nd(
            e,
            o,
            null,
            c,
            a
          ))) : f ? f !== t.memoizedState ? (ou(e), ae(e), Qp(
            e,
            f
          )) : (ae(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== c && ou(e), ae(e), Nd(
            e,
            o,
            t,
            c,
            a
          )), null;
        case 27:
          if (ct(e), a = xl(qa.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && ou(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ae(e), null;
            }
            t = Q(), pi(e) ? qm(e) : (t = ec(
              o,
              c,
              a,
              t,
              !0
            ), e.stateNode = t, ou(e));
          }
          return ae(e), null;
        case 5:
          if (ct(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && ou(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ae(e), null;
            }
            var d = Q();
            if (pi(e))
              qm(e);
            else {
              switch (f = xl(qa.current), If(o, d.ancestorInfo), d = d.context, f = $s(f), d) {
                case am:
                  f = f.createElementNS(
                    bt,
                    o
                  );
                  break;
                case Rg:
                  f = f.createElementNS(
                    vt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        bt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        vt,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof c.is == "string" ? f.createElement("select", {
                        is: c.is
                      }) : f.createElement("select"), c.multiple ? f.multiple = !0 : c.size && (f.size = c.size);
                      break;
                    default:
                      f = typeof c.is == "string" ? f.createElement(o, {
                        is: c.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Ya.call(a2, o) || (a2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Ee] = e, f[ca] = c;
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
              t: switch (Te(f, o, c), o) {
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
              c && ou(e);
            }
          }
          return ae(e), Nd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== c && ou(e);
          else {
            if (typeof c != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = xl(qa.current), a = Q(), pi(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !Wc, c = null, f = ia, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = bv(
                      t,
                      a,
                      c
                    ), o !== null && (yi(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = bv(
                      t,
                      a,
                      c
                    ), o !== null && (yi(
                      e,
                      0
                    ).serverProps = o));
                }
              t[Ee] = e, t = !!(t.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || jy(t.nodeValue, a)), t || ka(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && Pf(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = $s(t).createTextNode(
                c
              ), t[Ee] = e, e.stateNode = t;
          }
          return ae(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (c = pi(e), a !== null) {
              if (t === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[Ee] = e, ae(e), (e.mode & At) !== dt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Tc(), bc(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, ae(e), (e.mode & At) !== dt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = is(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (rl(e), e) : (rl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return ae(e), null;
        case 13:
          if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = c, f = pi(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Ee] = e, ae(e), (e.mode & At) !== dt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Tc(), bc(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, ae(e), (e.mode & At) !== dt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = is(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (rl(e), e) : (rl(e), null);
          }
          return rl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & At) !== dt && Si(e), e) : (a = c !== null, t = t !== null && t.memoizedState !== null, a && (c = e.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Vo(e, e.updateQueue), ae(e), (e.mode & At) !== dt && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return O(e), t === null && Xc(
            e.stateNode.containerInfo
          ), ae(e), null;
        case 10:
          return Sn(e.type, e), ae(e), null;
        case 19:
          if (_t(nl, e), c = e.memoizedState, c === null) return ae(e), null;
          if (o = (e.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) Zo(c, !1);
            else {
              if (Ye !== io || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Ti(t), f !== null) {
                    for (e.flags |= 128, Zo(c, !1), t = f.updateQueue, e.updateQueue = t, Vo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Bm(a, t), a = a.sibling;
                    return Ot(
                      nl,
                      nl.current & wh | G0,
                      e
                    ), Nt && gn(e, c.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              c.tail !== null && yl() > yg && (e.flags |= 128, o = !0, Zo(c, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Ti(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Vo(e, t), Zo(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !Nt)
                  return ae(e), null;
              } else
                2 * yl() - c.renderingStartTime > yg && a !== 536870912 && (e.flags |= 128, o = !0, Zo(c, !1), e.lanes = 4194304);
            c.isBackwards ? (f.sibling = e.child, e.child = f) : (t = c.last, t !== null ? t.sibling = f : e.child = f, c.last = f);
          }
          return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = yl(), t.sibling = null, a = nl.current, a = o ? a & wh | G0 : a & wh, Ot(nl, a, e), Nt && gn(e, c.treeForkCount), t) : (ae(e), null);
        case 22:
        case 23:
          return rl(e), An(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (ae(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ae(e), a = e.updateQueue, a !== null && Vo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== a && (e.flags |= 2048), t !== null && _t(Sr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Sn(pl, e), ae(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Vp(t, e) {
      switch (id(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== dt && Si(e), e) : null;
        case 3:
          return Sn(pl, e), O(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return ct(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (rl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            bc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== dt && Si(e), e) : null;
        case 13:
          if (rl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            bc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== dt && Si(e), e) : null;
        case 19:
          return _t(nl, e), null;
        case 4:
          return O(e), null;
        case 10:
          return Sn(e.type, e), null;
        case 22:
        case 23:
          return rl(e), An(e), t !== null && _t(Sr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== dt && Si(e), e) : null;
        case 24:
          return Sn(pl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function dy(t, e) {
      switch (id(e), e.tag) {
        case 3:
          Sn(pl, e), O(e);
          break;
        case 26:
        case 27:
        case 5:
          ct(e);
          break;
        case 4:
          O(e);
          break;
        case 31:
          e.memoizedState !== null && rl(e);
          break;
        case 13:
          rl(e);
          break;
        case 19:
          _t(nl, e);
          break;
        case 10:
          Sn(e.type, e);
          break;
        case 22:
        case 23:
          rl(e), An(e), t !== null && _t(Sr, e);
          break;
        case 24:
          Sn(pl, e);
      }
    }
    function fu(t) {
      return (t.mode & At) !== dt;
    }
    function Zp(t, e) {
      fu(t) ? (Be(), ku(e, t), $l()) : ku(e, t);
    }
    function xd(t, e, a) {
      fu(t) ? (Be(), Nc(
        a,
        t,
        e
      ), $l()) : Nc(
        a,
        t,
        e
      );
    }
    function ku(t, e) {
      try {
        var a = e.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var o = c.next;
          a = o;
          do {
            if ((a.tag & t) === t && (c = void 0, (t & Qa) !== ng && (tm = !0), c = W(
              e,
              CT,
              a
            ), (t & Qa) !== ng && (tm = !1), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & Gn) !== 0 ? "useLayoutEffect" : (a.tag & Qa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, W(
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
        St(e, e.return, h);
      }
    }
    function Nc(t, e, a) {
      try {
        var c = e.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & t) === t) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & Qa) !== ng && (tm = !0), o = e, W(
                o,
                HT,
                o,
                a,
                h
              ), (t & Qa) !== ng && (tm = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        St(e, e.return, y);
      }
    }
    function Ns(t, e) {
      fu(t) ? (Be(), ku(e, t), $l()) : ku(e, t);
    }
    function qd(t, e, a) {
      fu(t) ? (Be(), Nc(
        a,
        t,
        e
      ), $l()) : Nc(
        a,
        t,
        e
      );
    }
    function hy(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || Wh || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          et(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          et(t) || "instance"
        ));
        try {
          W(
            t,
            Co,
            e,
            a
          );
        } catch (c) {
          St(t, t.return, c);
        }
      }
    }
    function xs(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Lp(t, e) {
      var a = e.memoizedProps, c = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || Wh || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        et(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        et(t) || "instance"
      ));
      try {
        var o = iu(
          t.type,
          a
        ), f = W(
          t,
          xs,
          e,
          o,
          c
        );
        a = Nb, f !== void 0 || a.has(t.type) || (a.add(t.type), W(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            et(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        St(t, t.return, d);
      }
    }
    function Yd(t, e, a) {
      a.props = iu(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, fu(t) ? (Be(), W(
        t,
        PS,
        t,
        e,
        a
      ), $l()) : W(
        t,
        PS,
        t,
        e,
        a
      );
    }
    function wp(t) {
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
          if (fu(t))
            try {
              Be(), t.refCleanup = e(a);
            } finally {
              $l();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            et(t)
          ), e.current = a;
      }
    }
    function Ni(t, e) {
      try {
        W(t, wp, t);
      } catch (a) {
        St(t, e, a);
      }
    }
    function ln(t, e) {
      var a = t.ref, c = t.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (fu(t))
              try {
                Be(), W(t, c);
              } finally {
                $l(t);
              }
            else W(t, c);
          } catch (o) {
            St(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (fu(t))
              try {
                Be(), W(t, a, null);
              } finally {
                $l(t);
              }
            else W(t, a, null);
          } catch (o) {
            St(t, e, o);
          }
        else a.current = null;
    }
    function my(t, e, a, c) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", Iv && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, c, a);
    }
    function Jp(t, e, a, c) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", Iv && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        c,
        a
      );
    }
    function xc(t) {
      var e = t.type, a = t.memoizedProps, c = t.stateNode;
      try {
        W(
          t,
          uv,
          c,
          e,
          a,
          t
        );
      } catch (o) {
        St(t, t.return, o);
      }
    }
    function jd(t, e, a) {
      try {
        W(
          t,
          nh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        St(t, t.return, c);
      }
    }
    function yy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vc(t.type) || t.tag === 4;
    }
    function Gd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || yy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Vc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Lo(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? (iv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (iv(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = $a));
      else if (c !== 4 && (c === 27 && Vc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (Lo(t, e, a), t = t.sibling; t !== null; )
          Lo(t, e, a), t = t.sibling;
    }
    function qs(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (c !== 4 && (c === 27 && Vc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (qs(t, e, a), t = t.sibling; t !== null; )
          qs(t, e, a), t = t.sibling;
    }
    function py(t) {
      for (var e, a = t.return; a !== null; ) {
        if (yy(a)) {
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
          e = e.stateNode, a = Gd(t), qs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (uh(a), e.flags &= -33), e = Gd(t), qs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = Gd(t), Lo(
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
    function vy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        W(
          t,
          vu,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        St(t, t.return, c);
      }
    }
    function gy(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function $g(t, e) {
      if (t = t.containerInfo, nS = Hg, t = td(t), Dm(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var c = a.getSelection && a.getSelection();
            if (c && c.rangeCount !== 0) {
              a = c.anchorNode;
              var o = c.anchorOffset, f = c.focusNode;
              c = c.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, A = 0, D = t, S = null;
              e: for (; ; ) {
                for (var C; D !== a || o !== 0 && D.nodeType !== 3 || (h = d + o), D !== f || c !== 0 && D.nodeType !== 3 || (y = d + c), D.nodeType === 3 && (d += D.nodeValue.length), (C = D.firstChild) !== null; )
                  S = D, D = C;
                for (; ; ) {
                  if (D === t) break e;
                  if (S === a && ++p === o && (h = d), S === f && ++A === c && (y = d), (C = D.nextSibling) !== null) break;
                  D = S, S = D.parentNode;
                }
                D = C;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (uS = {
        focusedElem: t,
        selectionRange: a
      }, Hg = !1, Vl = e; Vl !== null; )
        if (e = Vl, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, Vl = t;
        else
          for (; Vl !== null; ) {
            switch (t = e = Vl, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Lp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    af(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        af(t);
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
              t.return = e.return, Vl = t;
              break;
            }
            Vl = e.return;
          }
    }
    function Xd(t, e, a) {
      var c = Se(), o = Ia(), f = za(), d = Pa(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ca(t, a), h & 4 && Zp(a, Gn | _u);
          break;
        case 1:
          if (Ca(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                et(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                et(a) || "instance"
              )), fu(a) ? (Be(), W(
                a,
                O1,
                a,
                t
              ), $l()) : W(
                a,
                O1,
                a,
                t
              );
            else {
              var y = iu(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                et(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                et(a) || "instance"
              )), fu(a) ? (Be(), W(
                a,
                kS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), $l()) : W(
                a,
                kS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && hy(a), h & 512 && Ni(a, a.return);
          break;
        case 3:
          if (e = In(), Ca(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
              W(
                a,
                Co,
                h,
                y
              );
            } catch (A) {
              St(a, a.return, A);
            }
          }
          t.effectDuration += Mo(e);
          break;
        case 27:
          e === null && h & 4 && vy(a);
        case 26:
        case 5:
          if (Ca(t, a), e === null) {
            if (h & 4) xc(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                W(
                  a,
                  cv,
                  y,
                  t,
                  e,
                  a
                );
              } catch (A) {
                St(
                  a,
                  a.return,
                  A
                );
              }
            }
          }
          h & 512 && Ni(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = In(), Ca(t, a), t = a.stateNode, t.effectDuration += Kl(h);
            try {
              W(
                a,
                my,
                a,
                e,
                Mf,
                t.effectDuration
              );
            } catch (A) {
              St(a, a.return, A);
            }
          } else Ca(t, a);
          break;
        case 31:
          Ca(t, a), h & 4 && by(t, a);
          break;
        case 13:
          Ca(t, a), h & 4 && Ty(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = Iu.bind(
            null,
            a
          ), gv(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || co, !h) {
            e = e !== null && e.memoizedState !== null || bl, y = co;
            var p = bl;
            co = h, (bl = e) && !p ? (Mn(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && ed(
              a,
              ut,
              ft
            )) : Ca(t, a), co = y, bl = p;
          }
          break;
        case 30:
          break;
        default:
          Ca(t, a);
      }
      (a.mode & At) !== dt && 0 <= ut && 0 <= ft && ((Je || 0.05 < qe) && vn(
        a,
        ut,
        ft,
        qe,
        Ce
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < ft - ut && (gy(
        a.return.alternate,
        a.return
      ) || Wa(
        a,
        ut,
        ft,
        "Mount"
      ))), fl(c), Aa(o), Ce = f, Je = d;
    }
    function Le(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Le(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && sm(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function pe(t, e, a) {
      for (a = a.child; a !== null; )
        Sy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function Sy(t, e, a) {
      if (ll && typeof ll.onCommitFiberUnmount == "function")
        try {
          ll.onCommitFiberUnmount(Ki, a);
        } catch (p) {
          Su || (Su = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = Se(), o = Ia(), f = za(), d = Pa();
      switch (a.tag) {
        case 26:
          bl || ln(a, e), pe(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          bl || ln(a, e);
          var h = Tl, y = on;
          Vc(a.type) && (Tl = a.stateNode, on = !1), pe(
            t,
            e,
            a
          ), W(
            a,
            lc,
            a.stateNode
          ), Tl = h, on = y;
          break;
        case 5:
          bl || ln(a, e);
        case 6:
          if (h = Tl, y = on, Tl = null, pe(
            t,
            e,
            a
          ), Tl = h, on = y, Tl !== null)
            if (on)
              try {
                W(
                  a,
                  fv,
                  Tl,
                  a.stateNode
                );
              } catch (p) {
                St(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                W(
                  a,
                  ov,
                  Tl,
                  a.stateNode
                );
              } catch (p) {
                St(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Tl !== null && (on ? (t = Tl, Gi(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), Zi(t)) : Gi(Tl, a.stateNode));
          break;
        case 4:
          h = Tl, y = on, Tl = a.stateNode.containerInfo, on = !0, pe(
            t,
            e,
            a
          ), Tl = h, on = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Nc(
            Qa,
            a,
            e
          ), bl || xd(
            a,
            e,
            Gn
          ), pe(
            t,
            e,
            a
          );
          break;
        case 1:
          bl || (ln(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Yd(
            a,
            e,
            h
          )), pe(
            t,
            e,
            a
          );
          break;
        case 21:
          pe(
            t,
            e,
            a
          );
          break;
        case 22:
          bl = (h = bl) || a.memoizedState !== null, pe(
            t,
            e,
            a
          ), bl = h;
          break;
        default:
          pe(
            t,
            e,
            a
          );
      }
      (a.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
        a,
        ut,
        ft,
        qe,
        Ce
      ), fl(c), Aa(o), Ce = f, Je = d;
    }
    function by(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          W(
            e,
            ch,
            t
          );
        } catch (a) {
          St(e, e.return, a);
        }
      }
    }
    function Ty(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          W(
            e,
            Vy,
            t
          );
        } catch (a) {
          St(e, e.return, a);
        }
    }
    function Kp(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new xb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new xb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function qc(t, e) {
      var a = Kp(t);
      e.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), bu)
            if (kh !== null && Fh !== null)
              ko(Fh, kh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Yi.bind(null, t, c);
          c.then(o, o);
        }
      });
    }
    function Pl(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = t, f = e, d = a[c], h = Se(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Vc(y.type)) {
                  Tl = y.stateNode, on = !1;
                  break t;
                }
                break;
              case 5:
                Tl = y.stateNode, on = !1;
                break t;
              case 3:
              case 4:
                Tl = y.stateNode.containerInfo, on = !0;
                break t;
            }
            y = y.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Sy(o, f, d), Tl = null, on = !1, (d.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && Wa(
            d,
            ut,
            ft,
            "Unmount"
          ), fl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          Ys(e, t), e = e.sibling;
    }
    function Ys(t, e) {
      var a = Se(), c = Ia(), o = za(), f = Pa(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pl(e, t), ta(t), h & 4 && (Nc(
            Qa | _u,
            t,
            t.return
          ), ku(Qa | _u, t), xd(
            t,
            t.return,
            Gn | _u
          ));
          break;
        case 1:
          if (Pl(e, t), ta(t), h & 512 && (bl || d === null || ln(d, d.return)), h & 64 && co && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = oc, Pl(e, t), ta(t), h & 512 && (bl || d === null || ln(d, d.return)), h & 4) {
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
                        )[0], (!p || p[Sf] || p[Ee] || p.namespaceURI === bt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Te(p, h, d), p[Ee] = t, Xe(p), h = p;
                        break t;
                      case "link":
                        var A = cf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (A) {
                          for (var D = 0; D < A.length; D++)
                            if (p = A[D], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Te(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (A = cf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < A.length; D++)
                            if (p = A[D], ee(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Te(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Ee] = t, Xe(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  Ev(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = fh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Ev(
                y,
                t.type,
                t.stateNode
              ) : fh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && jd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Pl(e, t), ta(t), h & 512 && (bl || d === null || ln(d, d.return)), d !== null && h & 4 && jd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Pl(e, t), ta(t), h & 512 && (bl || d === null || ln(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              W(
                t,
                uh,
                y
              );
            } catch ($) {
              St(t, t.return, $);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, jd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (G1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Pl(e, t), ta(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              W(
                t,
                Wg,
                y,
                d,
                h
              );
            } catch ($) {
              St(t, t.return, $);
            }
          }
          break;
        case 3:
          if (y = In(), Ug = null, p = oc, oc = ih(e.containerInfo), Pl(e, t), oc = p, ta(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              W(
                t,
                Qy,
                e.containerInfo
              );
            } catch ($) {
              St(t, t.return, $);
            }
          G1 && (G1 = !1, $p(t)), e.effectDuration += Mo(
            y
          );
          break;
        case 4:
          h = oc, oc = ih(
            t.stateNode.containerInfo
          ), Pl(e, t), ta(t), oc = h;
          break;
        case 12:
          h = In(), Pl(e, t), ta(t), t.stateNode.effectDuration += Kl(h);
          break;
        case 31:
          Pl(e, t), ta(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 13:
          Pl(e, t), ta(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (mg = yl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var S = d !== null && d.memoizedState !== null, C = co, w = bl;
          if (co = C || y, bl = w || S, Pl(e, t), bl = w, co = C, S && !y && !C && !w && (t.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && ed(
            t,
            ut,
            ft
          ), ta(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~A0 : e._visibility | A0, !y || d === null || S || co || bl || (Yc(t), (t.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && Wa(
              t,
              ut,
              ft,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  S = d = e;
                  try {
                    p = S.stateNode, y ? W(
                      S,
                      rv,
                      p
                    ) : W(
                      S,
                      mv,
                      S.stateNode,
                      S.memoizedProps
                    );
                  } catch ($) {
                    St(S, S.return, $);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  S = e;
                  try {
                    A = S.stateNode, y ? W(
                      S,
                      dv,
                      A
                    ) : W(
                      S,
                      yv,
                      A,
                      S.memoizedProps
                    );
                  } catch ($) {
                    St(S, S.return, $);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  S = e;
                  try {
                    D = S.stateNode, y ? W(
                      S,
                      sv,
                      D
                    ) : W(
                      S,
                      hv,
                      S.stateNode
                    );
                  } catch ($) {
                    St(S, S.return, $);
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
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, qc(t, d))));
          break;
        case 19:
          Pl(e, t), ta(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Pl(e, t), ta(t);
      }
      (t.mode & At) !== dt && 0 <= ut && 0 <= ft && ((Je || 0.05 < qe) && vn(
        t,
        ut,
        ft,
        qe,
        Ce
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < ft - ut && (gy(
        t.return.alternate,
        t.return
      ) || Wa(
        t,
        ut,
        ft,
        "Mount"
      ))), fl(a), Aa(c), Ce = o, Je = f;
    }
    function ta(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          W(t, py, t);
        } catch (a) {
          St(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function $p(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          $p(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Ca(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Xd(t, e.alternate, e), e = e.sibling;
    }
    function Qd(t) {
      var e = Se(), a = Ia(), c = za(), o = Pa();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xd(
            t,
            t.return,
            Gn
          ), Yc(t);
          break;
        case 1:
          ln(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Yd(
            t,
            t.return,
            f
          ), Yc(t);
          break;
        case 27:
          W(
            t,
            lc,
            t.stateNode
          );
        case 26:
        case 5:
          ln(t, t.return), Yc(t);
          break;
        case 22:
          t.memoizedState === null && Yc(t);
          break;
        case 30:
          Yc(t);
          break;
        default:
          Yc(t);
      }
      (t.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
        t,
        ut,
        ft,
        qe,
        Ce
      ), fl(e), Aa(a), Ce = c, Je = o;
    }
    function Yc(t) {
      for (t = t.child; t !== null; )
        Qd(t), t = t.sibling;
    }
    function Ey(t, e, a, c) {
      var o = Se(), f = Ia(), d = za(), h = Pa(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Mn(
            t,
            a,
            c
          ), Zp(a, Gn);
          break;
        case 1:
          if (Mn(
            t,
            a,
            c
          ), e = a.stateNode, typeof e.componentDidMount == "function" && W(
            a,
            O1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              W(
                a,
                Zm,
                e,
                t
              );
            } catch (p) {
              St(a, a.return, p);
            }
          }
          c && y & 64 && hy(a), Ni(a, a.return);
          break;
        case 27:
          vy(a);
        case 26:
        case 5:
          Mn(
            t,
            a,
            c
          ), c && e === null && y & 4 && xc(a), Ni(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = In(), Mn(
              t,
              a,
              c
            ), c = a.stateNode, c.effectDuration += Kl(y);
            try {
              W(
                a,
                my,
                a,
                e,
                Mf,
                c.effectDuration
              );
            } catch (p) {
              St(a, a.return, p);
            }
          } else
            Mn(
              t,
              a,
              c
            );
          break;
        case 31:
          Mn(
            t,
            a,
            c
          ), c && y & 4 && by(t, a);
          break;
        case 13:
          Mn(
            t,
            a,
            c
          ), c && y & 4 && Ty(t, a);
          break;
        case 22:
          a.memoizedState === null && Mn(
            t,
            a,
            c
          ), Ni(a, a.return);
          break;
        case 30:
          break;
        default:
          Mn(
            t,
            a,
            c
          );
      }
      (a.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
        a,
        ut,
        ft,
        qe,
        Ce
      ), fl(o), Aa(f), Ce = d, Je = h;
    }
    function Mn(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        Ey(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function js(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && vi(t), a != null && ss(a));
    }
    function Gs(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (vi(e), t != null && ss(t));
    }
    function Ha(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ay(
            t,
            e,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ay(t, e, a, c, o) {
      var f = Se(), d = Ia(), h = za(), y = Pa(), p = Af, A = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & At) !== dt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            _l,
            a
          ), Ha(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Ns(e, Va | _u);
          break;
        case 1:
          (e.mode & At) !== dt && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Mm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            _l,
            a
          )), Ha(
            t,
            e,
            a,
            c,
            o
          );
          break;
        case 3:
          var D = In(), S = _l;
          _l = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Ha(
            t,
            e,
            a,
            c,
            o
          ), _l = S, A & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), c = e.memoizedState.cache, c !== a && (vi(c), a != null && ss(a))), t.passiveEffectDuration += Mo(
            D
          );
          break;
        case 12:
          if (A & 2048) {
            A = In(), Ha(
              t,
              e,
              a,
              c,
              o
            ), t = e.stateNode, t.passiveEffectDuration += Kl(A);
            try {
              W(
                e,
                Jp,
                e,
                e.alternate,
                Mf,
                t.passiveEffectDuration
              );
            } catch (C) {
              St(e, e.return, C);
            }
          } else
            Ha(
              t,
              e,
              a,
              c,
              o
            );
          break;
        case 31:
          A = _l, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D !== null && S === null ? (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (_l = !1, D = D.hydrationErrors, D !== null && Mm(
            e,
            e.actualStartTime,
            o,
            D
          )) : _l = !0) : _l = !1, Ha(
            t,
            e,
            a,
            c,
            o
          ), _l = A;
          break;
        case 13:
          A = _l, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D === null || D.dehydrated === null || S !== null && S.dehydrated !== null ? _l = !1 : (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (_l = !1, D = D.hydrationErrors, D !== null && Mm(
            e,
            e.actualStartTime,
            o,
            D
          )) : _l = !0), Ha(
            t,
            e,
            a,
            c,
            o
          ), _l = A;
          break;
        case 23:
          break;
        case 22:
          S = e.stateNode, D = e.alternate, e.memoizedState !== null ? S._visibility & ki ? Ha(
            t,
            e,
            a,
            c,
            o
          ) : xi(
            t,
            e,
            a,
            c,
            o
          ) : S._visibility & ki ? Ha(
            t,
            e,
            a,
            c,
            o
          ) : (S._visibility |= ki, jc(
            t,
            e,
            a,
            c,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & At) === dt || _l || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && ed(e, t, o), 0 <= ut && 0 <= ft && 0.05 < ft - ut && ed(
            e,
            ut,
            ft
          ))), A & 2048 && js(
            D,
            e
          );
          break;
        case 24:
          Ha(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Gs(e.alternate, e);
          break;
        default:
          Ha(
            t,
            e,
            a,
            c,
            o
          );
      }
      (e.mode & At) !== dt && ((t = !_l && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Wa(
        e,
        a,
        o,
        "Mount"
      )), 0 <= ut && 0 <= ft && ((Je || 0.05 < qe) && vn(
        e,
        ut,
        ft,
        qe,
        Ce
      ), t && 0.05 < ft - ut && Wa(
        e,
        ut,
        ft,
        "Mount"
      ))), fl(f), Aa(d), Ce = h, Je = y, Af = p;
    }
    function jc(t, e, a, c, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Xs(
          t,
          e,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Xs(t, e, a, c, o, f) {
      var d = Se(), h = Ia(), y = za(), p = Pa(), A = Af;
      o && (e.mode & At) !== dt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
        e,
        e.actualStartTime,
        f,
        _l,
        a
      );
      var D = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          jc(
            t,
            e,
            a,
            c,
            o,
            f
          ), Ns(e, Va);
          break;
        case 23:
          break;
        case 22:
          var S = e.stateNode;
          e.memoizedState !== null ? S._visibility & ki ? jc(
            t,
            e,
            a,
            c,
            o,
            f
          ) : xi(
            t,
            e,
            a,
            c,
            f
          ) : (S._visibility |= ki, jc(
            t,
            e,
            a,
            c,
            o,
            f
          )), o && D & 2048 && js(
            e.alternate,
            e
          );
          break;
        case 24:
          jc(
            t,
            e,
            a,
            c,
            o,
            f
          ), o && D & 2048 && Gs(e.alternate, e);
          break;
        default:
          jc(
            t,
            e,
            a,
            c,
            o,
            f
          );
      }
      (e.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
        e,
        ut,
        ft,
        qe,
        Ce
      ), fl(d), Aa(h), Ce = y, Je = p, Af = A;
    }
    function xi(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = c, p = e !== null ? e.actualStartTime : o, A = Af;
          (f.mode & At) !== dt && 0 < f.actualStartTime && (f.flags & 1) !== 0 && ld(
            f,
            f.actualStartTime,
            p,
            _l,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              xi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && js(f.alternate, f);
              break;
            case 24:
              xi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && Gs(f.alternate, f);
              break;
            default:
              xi(
                d,
                f,
                h,
                y,
                p
              );
          }
          Af = A, f = e;
        }
    }
    function qi(t, e, a) {
      if (t.subtreeFlags & Z0)
        for (t = t.child; t !== null; )
          Vd(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Vd(t, e, a) {
      switch (t.tag) {
        case 26:
          qi(
            t,
            e,
            a
          ), t.flags & Z0 && t.memoizedState !== null && Ky(
            a,
            oc,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          qi(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var c = oc;
          oc = ih(
            t.stateNode.containerInfo
          ), qi(
            t,
            e,
            a
          ), oc = c;
          break;
        case 22:
          t.memoizedState === null && (c = t.alternate, c !== null && c.memoizedState !== null ? (c = Z0, Z0 = 16777216, qi(
            t,
            e,
            a
          ), Z0 = c) : qi(
            t,
            e,
            a
          ));
          break;
        default:
          qi(
            t,
            e,
            a
          );
      }
    }
    function zy(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Ba(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = Se();
            Vl = c, su(
              c,
              t
            ), (c.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && Wa(
              c,
              ut,
              ft,
              "Unmount"
            ), fl(o);
          }
        zy(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Zd(t), t = t.sibling;
    }
    function Zd(t) {
      var e = Se(), a = Ia(), c = za(), o = Pa();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ba(t), t.flags & 2048 && qd(
            t,
            t.return,
            Va | _u
          );
          break;
        case 3:
          var f = In();
          Ba(t), t.stateNode.passiveEffectDuration += Mo(f);
          break;
        case 12:
          f = In(), Ba(t), t.stateNode.passiveEffectDuration += Kl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & ki && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~ki, Ld(t), (t.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && Wa(
            t,
            ut,
            ft,
            "Disconnect"
          )) : Ba(t);
          break;
        default:
          Ba(t);
      }
      (t.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
        t,
        ut,
        ft,
        qe,
        Ce
      ), fl(e), Aa(a), Je = o, Ce = c;
    }
    function Ld(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = Se();
            Vl = c, su(
              c,
              t
            ), (c.mode & At) !== dt && 0 <= ut && 0 <= ft && 0.05 < ft - ut && Wa(
              c,
              ut,
              ft,
              "Unmount"
            ), fl(o);
          }
        zy(t);
      }
      for (t = t.child; t !== null; )
        Dy(t), t = t.sibling;
    }
    function Dy(t) {
      var e = Se(), a = Ia(), c = za(), o = Pa();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          qd(
            t,
            t.return,
            Va
          ), Ld(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & ki && (f._visibility &= ~ki, Ld(t));
          break;
        default:
          Ld(t);
      }
      (t.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
        t,
        ut,
        ft,
        qe,
        Ce
      ), fl(e), Aa(a), Je = o, Ce = c;
    }
    function su(t, e) {
      for (; Vl !== null; ) {
        var a = Vl, c = a, o = e, f = Se(), d = Ia(), h = za(), y = Pa();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            qd(
              c,
              o,
              Va
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && vi(o));
            break;
          case 24:
            ss(c.memoizedState.cache);
        }
        if ((c.mode & At) !== dt && 0 <= ut && 0 <= ft && (Je || 0.05 < qe) && vn(
          c,
          ut,
          ft,
          qe,
          Ce
        ), fl(f), Aa(d), Je = y, Ce = h, c = a.child, c !== null) c.return = a, Vl = c;
        else
          t: for (a = t; Vl !== null; ) {
            if (c = Vl, f = c.sibling, d = c.return, Le(c), c === a) {
              Vl = null;
              break t;
            }
            if (f !== null) {
              f.return = d, Vl = f;
              break t;
            }
            Vl = d;
          }
      }
    }
    function Oy() {
      YT.forEach(function(t) {
        return t();
      });
    }
    function My() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || B.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function jl(t) {
      if ((Xt & Cl) !== Zl && Dt !== 0)
        return Dt & -Dt;
      var e = B.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), Yy()) : dp();
    }
    function wo() {
      if (sn === 0)
        if ((Dt & 536870912) === 0 || Nt) {
          var t = fr;
          fr <<= 1, (fr & 3932160) === 0 && (fr = 262144), sn = t;
        } else sn = 536870912;
      return t = jn.current, t !== null && (t.flags |= 32), sn;
    }
    function ht(t, e, a) {
      if (tm && console.error("useInsertionEffect must not schedule updates."), k1 && (gg = !0), (t === he && (ie === Dr || ie === Or) || t.cancelPendingCommit !== null) && (ru(t, 0), an(
        t,
        Dt,
        sn,
        !1
      )), rc(t, a), (Xt & Cl) !== Zl && t === he) {
        if (gu)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = Rt && et(Rt) || "Unknown", kb.has(t) || (kb.add(t), e = et(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              Wb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Wb = !0);
          }
      } else
        bu && oa(t, e, a), Ls(e), t === he && ((Xt & Cl) === Zl && (xf |= a), Ye === Hf && an(
          t,
          Dt,
          sn,
          !1
        )), da(t);
    }
    function Wp(t, e, a) {
      if ((Xt & (Cl | Xn)) !== Zl)
        throw Error("Should not already be working.");
      if (Dt !== 0 && Rt !== null) {
        var c = Rt, o = yl();
        switch (VS) {
          case J0:
          case Dr:
            var f = U0;
            Ae && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Eu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Eu,
              void 0,
              "primary-light"
            ));
            break;
          case Or:
            f = U0, Ae && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Eu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Eu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ae && (c = o - U0, 3 > c || console.timeStamp(
              "Blocked",
              U0,
              o,
              Eu,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Dl(t, e)) ? Fu(t, e) : $o(t, e, !0);
      var d = a;
      do {
        if (f === io) {
          Ih && !a && an(t, e, 0, !1), e = ie, U0 = vl(), VS = e;
          break;
        } else {
          if (c = yl(), o = t.current.alternate, d && !Fp(o)) {
            pn(e), o = Ql, f = c, !Ae || f <= o || (Fe ? Fe.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                jt,
                qt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              jt,
              qt,
              "error"
            )), Gc(e, c), f = $o(t, e, !1), d = !1;
            continue;
          }
          if (f === zr) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              pn(e), Rm(
                Ql,
                c,
                e,
                Fe
              ), Gc(e, c), e = h;
              t: {
                c = t, f = d, d = $0;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (ru(c, h).flags |= 256), h = $o(
                  c,
                  h,
                  !1
                ), h !== zr) {
                  if (V1 && !y) {
                    c.errorRecoveryDisabledLanes |= f, xf |= f, f = Hf;
                    break t;
                  }
                  c = Za, Za = d, c !== null && (Za === null ? Za = c : Za.push.apply(
                    Za,
                    c
                  ));
                }
                f = h;
              }
              if (d = !1, f !== zr) continue;
              c = yl();
            }
          }
          if (f === w0) {
            pn(e), Rm(
              Ql,
              c,
              e,
              Fe
            ), Gc(e, c), ru(t, 0), an(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case io:
              case w0:
                throw Error("Root did not complete. This is a bug in React.");
              case Hf:
                if ((e & 4194048) !== e) break;
              case sg:
                pn(e), Dp(
                  Ql,
                  c,
                  e,
                  Fe
                ), Gc(e, c), o = e, (o & 127) !== 0 ? Wv = c : (o & 4194048) !== 0 && (kv = c), an(
                  a,
                  e,
                  sn,
                  !Bf
                );
                break t;
              case zr:
                Za = null;
                break;
              case fg:
              case qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (B.actQueue !== null)
              se(
                a,
                o,
                e,
                Za,
                W0,
                hg,
                sn,
                xf,
                Mr,
                f,
                null,
                null,
                Ql,
                c
              );
            else {
              if ((e & 62914560) === e && (d = mg + Gb - yl(), 10 < d)) {
                if (an(
                  a,
                  e,
                  sn,
                  !Bf
                ), qr(a, 0, !0) !== 0) break t;
                fc = e, a.timeoutHandle = n2(
                  kp.bind(
                    null,
                    a,
                    o,
                    Za,
                    W0,
                    hg,
                    e,
                    sn,
                    xf,
                    Mr,
                    Bf,
                    f,
                    "Throttled",
                    Ql,
                    c
                  ),
                  d
                );
                break t;
              }
              kp(
                a,
                o,
                Za,
                W0,
                hg,
                e,
                sn,
                xf,
                Mr,
                Bf,
                f,
                null,
                Ql,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      da(t);
    }
    function kp(t, e, a, c, o, f, d, h, y, p, A, D, S, C) {
      t.timeoutHandle = Hr;
      var w = e.subtreeFlags, $ = null;
      if ((w & 8192 || (w & 16785408) === 16785408) && ($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $a
      }, Vd(e, f, $), w = (f & 62914560) === f ? mg - yl() : (f & 4194048) === f ? jb - yl() : 0, w = sh($, w), w !== null)) {
        fc = f, t.cancelPendingCommit = w(
          se.bind(
            null,
            t,
            e,
            f,
            a,
            c,
            o,
            d,
            h,
            y,
            A,
            $,
            $.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < $.count ? 0 < $.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : $.imgCount === 1 ? "Suspended on an Image" : 0 < $.imgCount ? "Suspended on Images" : null,
            S,
            C
          )
        ), an(
          t,
          f,
          d,
          !p
        );
        return;
      }
      se(
        t,
        e,
        f,
        a,
        c,
        o,
        d,
        h,
        y,
        A,
        $,
        D,
        S,
        C
      );
    }
    function Fp(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Ga(f(), o)) return !1;
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
    function an(t, e, a, c) {
      e &= ~Z1, e &= ~xf, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - Rl(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && fm(t, a, e);
    }
    function Na() {
      return (Xt & (Cl | Xn)) === Zl ? (hu(0), !1) : !0;
    }
    function wd() {
      if (Rt !== null) {
        if (ie === fn)
          var t = Rt.return;
        else
          t = Rt, Do(), zc(t), Zh = null, j0 = 0, t = Rt;
        for (; t !== null; )
          dy(t.alternate, t), t = t.return;
        Rt = null;
      }
    }
    function Gc(t, e) {
      (t & 127) !== 0 && (yr = e), (t & 4194048) !== 0 && (eo = e), (t & 62914560) !== 0 && (XS = e), (t & 2080374784) !== 0 && (QS = e);
    }
    function ru(t, e) {
      Ae && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        qt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        qt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        qt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        qt,
        "primary-light"
      ));
      var a = Ql;
      if (Ql = vl(), Dt !== 0 && 0 < a) {
        if (pn(Dt), Ye === fg || Ye === Hf)
          Dp(
            a,
            Ql,
            e,
            Fe
          );
        else {
          var c = Ql, o = Fe;
          if (Ae && !(c <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                c,
                jt,
                qt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              c,
              jt,
              qt,
              f
            );
          }
        }
        Gc(Dt, Ql);
      }
      if (a = Fe, Fe = null, (e & 127) !== 0) {
        Fe = O0, o = 0 <= kc && kc < yr ? yr : kc, c = 0 <= pr && pr < yr ? yr : pr, f = 0 <= c ? c : 0 <= o ? o : Ql, 0 <= Wv ? (pn(2), Op(
          Wv,
          f,
          e,
          a
        )) : Fv & 127, a = o;
        var h = c, y = M0, p = 0 < Xh, A = Rf === D0, D = Rf === $v;
        if (o = Ql, c = O0, f = T1, d = E1, Ae) {
          if (jt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var S = p ? "secondary-light" : "warning";
            c ? c.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                jt,
                qt,
                S
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              jt,
              qt,
              S
            );
          }
          o > a && (h = A ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", A = D ? "Promise Resolved" : A ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", D = [], d != null && D.push(["Component name", d]), f != null && D.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: D,
                track: jt,
                trackGroup: qt,
                color: h
              }
            }
          }, c ? c.run(
            performance.measure.bind(
              performance,
              A,
              a
            )
          ) : performance.measure(A, a));
        }
        kc = -1.1, Rf = 0, E1 = T1 = null, Wv = -1.1, Xh = pr, pr = -1.1, yr = vl();
      }
      if ((e & 4194048) !== 0 && (Fe = R0, o = 0 <= lo && lo < eo ? eo : lo, a = 0 <= Ru && Ru < eo ? eo : Ru, c = 0 <= Uf && Uf < eo ? eo : Uf, f = 0 <= c ? c : 0 <= a ? a : Ql, 0 <= kv ? (pn(256), Op(
        kv,
        f,
        e,
        Fe
      )) : Fv & 4194048, D = c, h = vr, y = 0 < _f, p = A1 === $v, f = Ql, c = R0, d = jS, A = GS, Ae && (jt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (S = y ? "secondary-light" : "warning", c ? c.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          D,
          o,
          jt,
          qt,
          S
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        D,
        o,
        jt,
        qt,
        S
      )), a > o && (c ? c.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          jt,
          qt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        jt,
        qt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", D = [], A != null && D.push(["Component name", A]), d != null && D.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: D,
            track: jt,
            trackGroup: qt,
            color: "primary-light"
          }
        }
      }, c ? c.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ru = lo = -1.1, A1 = 0, kv = -1.1, _f = Uf, Uf = -1.1, eo = vl()), (e & 62914560) !== 0 && (Fv & 62914560) !== 0 && (pn(4194304), Um(XS, Ql)), (e & 2080374784) !== 0 && (Fv & 2080374784) !== 0 && (pn(268435456), Um(QS, Ql)), a = t.timeoutHandle, a !== Hr && (t.timeoutHandle = Hr, kT(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), fc = 0, wd(), he = t, Rt = a = kn(
        t.current,
        null
      ), Dt = e, ie = fn, Qn = null, Bf = !1, Ih = Dl(t, e), V1 = !1, Ye = io, Mr = sn = Z1 = xf = Nf = 0, Za = $0 = null, hg = !1, (e & 8) !== 0 && (e |= e & 32), c = t.entangledLanes, c !== 0)
        for (t = t.entanglements, c &= e; 0 < c; )
          o = 31 - Rl(c), f = 1 << o, e |= t[o], c &= ~f;
      return Ic = e, ad(), t = HS(), 1e3 < t - CS && (B.recentlyCreatedOwnerStacks = 0, CS = t), cc.discardPendingWarnings(), a;
    }
    function Rn(t, e) {
      yt = null, B.H = V0, B.getCurrentStack = null, gu = !1, pa = null, e === Vh || e === eg ? (e = bi(), ie = J0) : e === M1 ? (e = bi(), ie = Yb) : ie = e === Y1 ? Q1 : e !== null && typeof e == "object" && typeof e.then == "function" ? K0 : rg, Qn = e;
      var a = Rt;
      a === null ? (Ye = w0, Us(
        t,
        Jl(e, t.current)
      )) : a.mode & At && sd(a);
    }
    function Ry() {
      var t = jn.current;
      return t === null ? !0 : (Dt & 4194048) === Dt ? Uu === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === Uu : !1;
    }
    function Jd() {
      var t = B.H;
      return B.H = V0, t === null ? V0 : t;
    }
    function Uy() {
      var t = B.A;
      return B.A = qT, t;
    }
    function Jo(t) {
      Fe === null && (Fe = t._debugTask == null ? null : t._debugTask);
    }
    function Ko() {
      Ye = Hf, Bf || (Dt & 4194048) !== Dt && jn.current !== null || (Ih = !0), (Nf & 134217727) === 0 && (xf & 134217727) === 0 || he === null || an(
        he,
        Dt,
        sn,
        !1
      );
    }
    function $o(t, e, a) {
      var c = Xt;
      Xt |= Cl;
      var o = Jd(), f = Uy();
      if (he !== t || Dt !== e) {
        if (bu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (ko(t, Dt), d.clear()), Nu(t, e);
        }
        W0 = null, ru(t, e);
      }
      e = !1, d = Ye;
      t: do
        try {
          if (ie !== fn && Rt !== null) {
            var h = Rt, y = Qn;
            switch (ie) {
              case Q1:
                wd(), d = sg;
                break t;
              case J0:
              case Dr:
              case Or:
              case K0:
                jn.current === null && (e = !0);
                var p = ie;
                if (ie = fn, Qn = null, Wo(t, h, y, p), a && Ih) {
                  d = io;
                  break t;
                }
                break;
              default:
                p = ie, ie = fn, Qn = null, Wo(t, h, y, p);
            }
          }
          _y(), d = Ye;
          break;
        } catch (A) {
          Rn(t, A);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Do(), Xt = c, B.H = o, B.A = f, Rt === null && (he = null, Dt = 0, ad()), d;
    }
    function _y() {
      for (; Rt !== null; ) Kd(Rt);
    }
    function Fu(t, e) {
      var a = Xt;
      Xt |= Cl;
      var c = Jd(), o = Uy();
      if (he !== t || Dt !== e) {
        if (bu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (ko(t, Dt), f.clear()), Nu(t, e);
        }
        W0 = null, yg = yl() + Xb, ru(t, e);
      } else
        Ih = Dl(
          t,
          e
        );
      t: do
        try {
          if (ie !== fn && Rt !== null)
            e: switch (e = Rt, f = Qn, ie) {
              case rg:
                ie = fn, Qn = null, Wo(
                  t,
                  e,
                  f,
                  rg
                );
                break;
              case Dr:
              case Or:
                if (Qm(f)) {
                  ie = fn, Qn = null, Cy(e);
                  break;
                }
                e = function() {
                  ie !== Dr && ie !== Or || he !== t || (ie = dg), da(t);
                }, f.then(e, e);
                break t;
              case J0:
                ie = dg;
                break t;
              case Yb:
                ie = X1;
                break t;
              case dg:
                Qm(f) ? (ie = fn, Qn = null, Cy(e)) : (ie = fn, Qn = null, Wo(
                  t,
                  e,
                  f,
                  dg
                ));
                break;
              case X1:
                var d = null;
                switch (Rt.tag) {
                  case 26:
                    d = Rt.memoizedState;
                  case 5:
                  case 27:
                    var h = Rt;
                    if (d ? Ut(d) : h.stateNode.complete) {
                      ie = fn, Qn = null;
                      var y = h.sibling;
                      if (y !== null) Rt = y;
                      else {
                        var p = h.return;
                        p !== null ? (Rt = p, Qs(p)) : Rt = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                ie = fn, Qn = null, Wo(
                  t,
                  e,
                  f,
                  X1
                );
                break;
              case K0:
                ie = fn, Qn = null, Wo(
                  t,
                  e,
                  f,
                  K0
                );
                break;
              case Q1:
                wd(), Ye = sg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          B.actQueue !== null ? _y() : We();
          break;
        } catch (A) {
          Rn(t, A);
        }
      while (!0);
      return Do(), B.H = c, B.A = o, Xt = a, Rt !== null ? io : (he = null, Dt = 0, ad(), Ye);
    }
    function We() {
      for (; Rt !== null && !Th(); )
        Kd(Rt);
    }
    function Kd(t) {
      var e = t.alternate;
      (t.mode & At) !== dt ? (Xu(t), e = W(
        t,
        Bs,
        e,
        t,
        Ic
      ), sd(t)) : e = W(
        t,
        Bs,
        e,
        t,
        Ic
      ), t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Rt = e;
    }
    function Cy(t) {
      var e = W(t, ml, t);
      t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Rt = e;
    }
    function ml(t) {
      var e = t.alternate, a = (t.mode & At) !== dt;
      switch (a && Xu(t), t.tag) {
        case 15:
        case 0:
          e = cy(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Dt
          );
          break;
        case 11:
          e = cy(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Dt
          );
          break;
        case 5:
          zc(t);
        default:
          dy(e, t), t = Rt = Bm(t, Ic), e = Bs(e, t, Ic);
      }
      return a && sd(t), e;
    }
    function Wo(t, e, a, c) {
      Do(), zc(e), Zh = null, j0 = 0;
      var o = e.return;
      try {
        if (Pm(
          t,
          o,
          e,
          a,
          Dt
        )) {
          Ye = w0, Us(
            t,
            Jl(a, t.current)
          ), Rt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Rt = o, f;
        Ye = w0, Us(
          t,
          Jl(a, t.current)
        ), Rt = null;
        return;
      }
      e.flags & 32768 ? (Nt || c === rg ? t = !0 : Ih || (Dt & 536870912) !== 0 ? t = !1 : (Bf = t = !0, (c === Dr || c === Or || c === J0 || c === K0) && (c = jn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Hy(e, t)) : Qs(e);
    }
    function Qs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Hy(
            e,
            Bf
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, Xu(e), a = W(
          e,
          ry,
          a,
          e,
          Ic
        ), (e.mode & At) !== dt && rs(e), a !== null) {
          Rt = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          Rt = e;
          return;
        }
        Rt = e = t;
      } while (e !== null);
      Ye === io && (Ye = qb);
    }
    function Hy(t, e) {
      do {
        var a = Vp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, Rt = a;
          return;
        }
        if ((t.mode & At) !== dt) {
          rs(t), a = t.actualDuration;
          for (var c = t.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          Rt = t;
          return;
        }
        Rt = t = a;
      } while (t !== null);
      Ye = sg, Rt = null;
    }
    function se(t, e, a, c, o, f, d, h, y, p, A, D, S, C) {
      t.cancelPendingCommit = null;
      do
        Vs();
      while (El !== Yf);
      if (cc.flushLegacyContextWarning(), cc.flushPendingUnsafeLifecycleWarnings(), (Xt & (Cl | Xn)) !== Zl)
        throw Error("Should not already be working.");
      if (pn(a), p === zr ? Rm(
        S,
        C,
        a,
        Fe
      ) : c !== null ? Lg(
        S,
        C,
        a,
        c,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        Fe
      ) : Zg(
        S,
        C,
        a,
        Fe
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= p1, Gg(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === he && (Rt = he = null, Dt = 0), Ph = e, jf = t, fc = a, J1 = f, $1 = o, Jb = c, K1 = C, Kb = D, sc = pg, $b = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Fo(Ji, function() {
          return ep = window.event, sc === pg && (sc = w1), Zs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), to = null, Mf = vl(), D !== null && wg(
          C,
          Mf,
          D,
          Fe
        ), c = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || c) {
          c = B.T, B.T = null, o = wt.p, wt.p = al, d = Xt, Xt |= Xn;
          try {
            $g(t, e, a);
          } finally {
            Xt = d, wt.p = o, B.T = c;
          }
        }
        El = Vb, ea(), du(), By();
      }
    }
    function ea() {
      if (El === Vb) {
        El = Yf;
        var t = jf, e = Ph, a = fc, c = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || c) {
          c = B.T, B.T = null;
          var o = wt.p;
          wt.p = al;
          var f = Xt;
          Xt |= Xn;
          try {
            kh = a, Fh = t, gi(), Ys(e, t), Fh = kh = null, a = uS;
            var d = td(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Tp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Dm(h)) {
                var p = y.start, A = y.end;
                if (A === void 0 && (A = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    A,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, S = D && D.defaultView || window;
                  if (S.getSelection) {
                    var C = S.getSelection(), w = h.textContent.length, $ = Math.min(
                      y.start,
                      w
                    ), ve = y.end === void 0 ? $ : Math.min(y.end, w);
                    !C.extend && $ > ve && (d = ve, ve = $, $ = d);
                    var Yt = bp(
                      h,
                      $
                    ), g = bp(
                      h,
                      ve
                    );
                    if (Yt && g && (C.rangeCount !== 1 || C.anchorNode !== Yt.node || C.anchorOffset !== Yt.offset || C.focusNode !== g.node || C.focusOffset !== g.offset)) {
                      var b = D.createRange();
                      b.setStart(Yt.node, Yt.offset), C.removeAllRanges(), $ > ve ? (C.addRange(b), C.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), C.addRange(b));
                    }
                  }
                }
              }
              for (D = [], C = h; C = C.parentNode; )
                C.nodeType === 1 && D.push({
                  element: C,
                  left: C.scrollLeft,
                  top: C.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
                var E = D[h];
                E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
              }
            }
            Hg = !!nS, uS = nS = null;
          } finally {
            Xt = f, wt.p = o, B.T = c;
          }
        }
        t.current = e, El = Zb;
      }
    }
    function du() {
      if (El === Zb) {
        El = Yf;
        var t = $b;
        if (t !== null) {
          Mf = vl();
          var e = Pi, a = Mf;
          !Ae || a <= e || console.timeStamp(
            t,
            e,
            a,
            jt,
            qt,
            "secondary-light"
          );
        }
        t = jf, e = Ph, a = fc;
        var c = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || c) {
          c = B.T, B.T = null;
          var o = wt.p;
          wt.p = al;
          var f = Xt;
          Xt |= Xn;
          try {
            kh = a, Fh = t, gi(), Xd(
              t,
              e.alternate,
              e
            ), Fh = kh = null;
          } finally {
            Xt = f, wt.p = o, B.T = c;
          }
        }
        t = K1, e = Kb, Pi = vl(), t = e === null ? t : Mf, e = Pi, a = sc === L1, c = Fe, to !== null ? Mp(
          t,
          e,
          to,
          !1,
          c
        ) : !Ae || e <= t || (c ? c.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            jt,
            qt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          jt,
          qt,
          a ? "error" : "secondary-dark"
        )), El = Lb;
      }
    }
    function By() {
      if (El === wb || El === Lb) {
        if (El === wb) {
          var t = Pi;
          Pi = vl();
          var e = Pi, a = sc === L1;
          !Ae || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            jt,
            qt,
            a ? " error" : "secondary-light"
          ), sc !== L1 && (sc = Qb);
        }
        El = Yf, Eh(), t = jf;
        var c = Ph;
        e = fc, a = Jb;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? El = vg : (El = Yf, Ph = jf = null, Ny(
          t,
          t.pendingLanes
        ), Rr = 0, F0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (qf = null), o || kd(t), f = Ll(e), c = c.stateNode, ll && typeof ll.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case al:
                var h = s0;
                break;
              case Ul:
                h = Ah;
                break;
              case Xl:
                h = Ji;
                break;
              case Kc:
                h = zh;
                break;
              default:
                h = Ji;
            }
            ll.onCommitFiberRoot(
              Ki,
              c,
              h,
              d
            );
          } catch (D) {
            Su || (Su = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (bu && t.memoizedUpdaters.clear(), Oy(), a !== null) {
          d = B.T, h = wt.p, wt.p = al, B.T = null;
          try {
            var y = t.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], A = Ip(p.stack);
              W(
                p.source,
                y,
                p.value,
                A
              );
            }
          } finally {
            B.T = d, wt.p = h;
          }
        }
        (fc & 3) !== 0 && Vs(), da(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (Pv = !0, t === W1 ? k0++ : (k0 = 0, W1 = t)) : k0 = 0, o || Gc(e, Pi), hu(0);
      }
    }
    function Ip(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Ny(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ss(e)));
    }
    function Vs() {
      return ea(), du(), By(), Zs();
    }
    function Zs() {
      if (El !== vg) return !1;
      var t = jf, e = J1;
      J1 = 0;
      var a = Ll(fc), c = Xl > a ? Xl : a;
      a = B.T;
      var o = wt.p;
      try {
        wt.p = c, B.T = null;
        var f = $1;
        $1 = null, c = jf;
        var d = fc;
        if (El = Yf, Ph = jf = null, fc = 0, (Xt & (Cl | Xn)) !== Zl)
          throw Error("Cannot flush passive effects while already rendering.");
        pn(d), k1 = !0, gg = !1;
        var h = 0;
        if (to = null, h = yl(), sc === Qb)
          Um(
            Pi,
            h,
            UT
          );
        else {
          var y = Pi, p = h, A = sc === w1;
          !Ae || p <= y || (Fe ? Fe.run(
            console.timeStamp.bind(
              console,
              A ? "Waiting for Paint" : "Waiting",
              y,
              p,
              jt,
              qt,
              "secondary-light"
            )
          ) : console.timeStamp(
            A ? "Waiting for Paint" : "Waiting",
            y,
            p,
            jt,
            qt,
            "secondary-light"
          ));
        }
        y = Xt, Xt |= Xn;
        var D = c.current;
        gi(), Zd(D);
        var S = c.current;
        D = K1, gi(), Ay(
          c,
          S,
          d,
          f,
          D
        ), kd(c), Xt = y;
        var C = yl();
        if (S = h, D = Fe, to !== null ? Mp(
          S,
          C,
          to,
          !0,
          D
        ) : !Ae || C <= S || (D ? D.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            S,
            C,
            jt,
            qt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          S,
          C,
          jt,
          qt,
          "secondary-dark"
        )), Gc(d, C), hu(0, !1), gg ? c === F0 ? Rr++ : (Rr = 0, F0 = c) : Rr = 0, gg = k1 = !1, ll && typeof ll.onPostCommitFiberRoot == "function")
          try {
            ll.onPostCommitFiberRoot(Ki, c);
          } catch ($) {
            Su || (Su = !0, console.error(
              "React instrumentation encountered an error: %o",
              $
            ));
          }
        var w = c.current.stateNode;
        return w.effectDuration = 0, w.passiveEffectDuration = 0, !0;
      } finally {
        wt.p = o, B.T = a, Ny(t, e);
      }
    }
    function la(t, e, a) {
      e = Jl(a, e), Bp(e), e = Od(t.stateNode, e, 2), t = tu(t, e, 2), t !== null && (rc(t, 2), da(t));
    }
    function St(t, e, a) {
      if (tm = !1, t.tag === 3)
        la(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            la(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var c = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (qf === null || !qf.has(c))) {
              t = Jl(a, t), Bp(t), a = Md(2), c = tu(e, a, 2), c !== null && (Rd(
                a,
                c,
                e,
                t
              ), rc(c, 2), da(c));
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
    function $d(t, e, a) {
      var c = t.pingCache;
      if (c === null) {
        c = t.pingCache = new jT();
        var o = /* @__PURE__ */ new Set();
        c.set(e, o);
      } else
        o = c.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(e, o));
      o.has(a) || (V1 = !0, o.add(a), c = ra.bind(null, t, e, a), bu && ko(t, a), e.then(c, c));
    }
    function ra(t, e, a) {
      var c = t.pingCache;
      c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > kc && (yr = kc = vl(), O0 = Kv("Promise Resolved"), Rf = $v) : (a & 4194048) !== 0 && 0 > Ru && (eo = Ru = vl(), R0 = Kv("Promise Resolved"), A1 = $v), My() && B.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), he === t && (Dt & a) === a && (Ye === Hf || Ye === fg && (Dt & 62914560) === Dt && yl() - mg < Gb ? (Xt & Cl) === Zl && ru(t, 0) : Z1 |= a, Mr === Dt && (Mr = 0)), da(t);
    }
    function xy(t, e) {
      e === 0 && (e = Yr()), t = ql(t, e), t !== null && (rc(t, e), da(t));
    }
    function Iu(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), xy(t, a);
    }
    function Yi(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var c = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          c = t.stateNode;
          break;
        case 22:
          c = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      c !== null && c.delete(e), xy(t, a);
    }
    function Un(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var c = t, o = e, f = o.type === ua;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && W(
            o,
            Wd,
            c,
            o
          ) : Un(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? W(
            o,
            Wd,
            c,
            o
          ) : o.subtreeFlags & 67108864 && W(
            o,
            Un,
            c,
            o,
            f
          )), e = e.sibling;
        }
    }
    function Wd(t, e) {
      oe(!0);
      try {
        Qd(e), Dy(e), Ey(t, e.alternate, e, !1), Xs(t, e, 0, null, !1, 0);
      } finally {
        oe(!1);
      }
    }
    function kd(t) {
      var e = !0;
      t.current.mode & (va | uc) || (e = !1), Un(
        t,
        t.current,
        e
      );
    }
    function nn(t) {
      if ((Xt & Cl) === Zl) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = et(t) || "ReactComponent", Sg !== null) {
            if (Sg.has(e)) return;
            Sg.add(e);
          } else Sg = /* @__PURE__ */ new Set([e]);
          W(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function ko(t, e) {
      bu && t.memoizedUpdaters.forEach(function(a) {
        oa(t, a, e);
      });
    }
    function Fo(t, e) {
      var a = B.actQueue;
      return a !== null ? (a.push(e), QT) : f0(t, e);
    }
    function Ls(t) {
      My() && B.actQueue === null && W(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          et(t)
        );
      });
    }
    function da(t) {
      t !== em && t.next === null && (em === null ? bg = em = t : em = em.next = t), Tg = !0, B.actQueue !== null ? I1 || (I1 = !0, tv()) : F1 || (F1 = !0, tv());
    }
    function hu(t, e) {
      if (!P1 && Tg) {
        P1 = !0;
        do
          for (var a = !1, c = bg; c !== null; ) {
            if (t !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - Rl(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ws(c, f));
            } else
              f = Dt, f = qr(
                c,
                c === he ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== Hr
              ), (f & 3) === 0 || Dl(c, f) || (a = !0, ws(c, f));
            c = c.next;
          }
        while (a);
        P1 = !1;
      }
    }
    function Pp() {
      ep = window.event, Fd();
    }
    function Fd() {
      Tg = I1 = F1 = !1;
      var t = 0;
      Gf !== 0 && Gy() && (t = Gf);
      for (var e = yl(), a = null, c = bg; c !== null; ) {
        var o = c.next, f = Io(c, e);
        f === 0 ? (c.next = null, a === null ? bg = o : a.next = o, o === null && (em = a)) : (a = c, (t !== 0 || (f & 3) !== 0) && (Tg = !0)), c = o;
      }
      El !== Yf && El !== vg || hu(t), Gf !== 0 && (Gf = 0);
    }
    function Io(t, e) {
      for (var a = t.suspendedLanes, c = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Rl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = jg(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = he, a = Dt, a = qr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), c = t.callbackNode, a === 0 || t === e && (ie === Dr || ie === Or) || t.cancelPendingCommit !== null)
        return c !== null && Id(c), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || Dl(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || B.actQueue !== null && c !== tS)
          Id(c);
        else return e;
        switch (Ll(a)) {
          case al:
          case Ul:
            a = Ah;
            break;
          case Xl:
            a = Ji;
            break;
          case Kc:
            a = zh;
            break;
          default:
            a = Ji;
        }
        return c = qy.bind(null, t), B.actQueue !== null ? (B.actQueue.push(c), a = tS) : a = f0(a, c), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return c !== null && Id(c), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function qy(t, e) {
      if (Pv = Iv = !1, ep = window.event, El !== Yf && El !== vg)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (sc === pg && (sc = w1), Vs() && t.callbackNode !== a)
        return null;
      var c = Dt;
      return c = qr(
        t,
        t === he ? c : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), c === 0 ? null : (Wp(
        t,
        c,
        e
      ), Io(t, yl()), t.callbackNode != null && t.callbackNode === a ? qy.bind(null, t) : null);
    }
    function ws(t, e) {
      if (Vs()) return null;
      Iv = Pv, Pv = !1, Wp(t, e, !0);
    }
    function Id(t) {
      t !== tS && t !== null && bh(t);
    }
    function tv() {
      B.actQueue !== null && B.actQueue.push(function() {
        return Fd(), null;
      }), FT(function() {
        (Xt & (Cl | Xn)) !== Zl ? f0(
          s0,
          Pp
        ) : Fd();
      });
    }
    function Yy() {
      if (Gf === 0) {
        var t = gr;
        t === 0 && (t = vf, vf <<= 1, (vf & 261888) === 0 && (vf = 256)), Gf = t;
      }
      return Gf;
    }
    function Qt(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ee(t, "action"), ts("" + t));
    }
    function ne(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function Ht(t, e, a, c, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = Qt(
          (o[ca] || null).action
        ), d = c.submitter;
        d && (e = (e = d[ca] || null) ? Qt(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Xv(
          "action",
          "action",
          null,
          c,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (Gf !== 0) {
                    var y = d ? ne(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), $u(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? ne(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), $u(
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
    function Mt(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (c) {
        d1(c);
      }
      t.currentTarget = null;
    }
    function Wt(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        t: {
          var o = void 0, f = c.event;
          if (c = c.listeners, e)
            for (var d = c.length - 1; 0 <= d; d--) {
              var h = c[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? W(
                y,
                Mt,
                f,
                h,
                p
              ) : Mt(f, h, p), o = y;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? W(
                y,
                Mt,
                f,
                h,
                p
              ) : Mt(f, h, p), o = y;
            }
        }
      }
    }
    function st(t, e) {
      eS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[$i];
      a === void 0 && (a = e[$i] = /* @__PURE__ */ new Set());
      var c = t + "__bubble";
      a.has(c) || (Pd(e, t, 2, !1), a.add(c));
    }
    function mu(t, e, a) {
      eS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var c = 0;
      e && (c |= 4), Pd(
        a,
        t,
        c,
        e
      );
    }
    function Xc(t) {
      if (!t[Eg]) {
        t[Eg] = !0, xv.forEach(function(a) {
          a !== "selectionchange" && (eS.has(a) || mu(a, !1, t), mu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Eg] || (e[Eg] = !0, mu("selectionchange", !1, e));
      }
    }
    function Pd(t, e, a, c) {
      switch (hh(e)) {
        case al:
          var o = Iy;
          break;
        case Ul:
          o = Ml;
          break;
        default:
          o = Py;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !l1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), c ? o !== void 0 ? t.addEventListener(e, a, {
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
    function _n(t, e, a, c, o) {
      var f = c;
      if ((e & 1) === 0 && (e & 2) === 0 && c !== null)
        t: for (; ; ) {
          if (c === null) return;
          var d = c.tag;
          if (d === 3 || d === 4) {
            var h = c.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = c.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = xu(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      kr(function() {
        var p = f, A = mn(a), D = [];
        t: {
          var S = _S.get(t);
          if (S !== void 0) {
            var C = Xv, w = t;
            switch (t) {
              case "keypress":
                if (es(a) === 0) break t;
              case "keydown":
              case "keyup":
                C = lT;
                break;
              case "focusin":
                w = "focus", C = c1;
                break;
              case "focusout":
                w = "blur", C = c1;
                break;
              case "beforeblur":
              case "afterblur":
                C = c1;
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
                C = pS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                C = L2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                C = uT;
                break;
              case OS:
              case MS:
              case RS:
                C = K2;
                break;
              case US:
                C = iT;
                break;
              case "scroll":
              case "scrollend":
                C = V2;
                break;
              case "wheel":
                C = fT;
                break;
              case "copy":
              case "cut":
              case "paste":
                C = W2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                C = gS;
                break;
              case "toggle":
              case "beforetoggle":
                C = rT;
            }
            var $ = (e & 4) !== 0, ve = !$ && (t === "scroll" || t === "scrollend"), Yt = $ ? S !== null ? S + "Capture" : null : S;
            $ = [];
            for (var g = p, b; g !== null; ) {
              var E = g;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Yt === null || (E = $n(g, Yt), E != null && $.push(
                re(
                  g,
                  E,
                  b
                )
              )), ve) break;
              g = g.return;
            }
            0 < $.length && (S = new C(
              S,
              w,
              null,
              a,
              A
            ), D.push({
              event: S,
              listeners: $
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", S && a !== y0 && (w = a.relatedTarget || a.fromElement) && (xu(w) || w[nc]))
              break t;
            if ((C || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, C ? (w = a.relatedTarget || a.toElement, C = p, w = w ? xu(w) : null, w !== null && (ve = It(w), $ = w.tag, w !== ve || $ !== 5 && $ !== 27 && $ !== 6) && (w = null)) : (C = null, w = p), C !== w)) {
              if ($ = pS, E = "onMouseLeave", Yt = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && ($ = gS, E = "onPointerLeave", Yt = "onPointerEnter", g = "pointer"), ve = C == null ? S : dc(C), b = w == null ? S : dc(w), S = new $(
                E,
                g + "leave",
                C,
                a,
                A
              ), S.target = ve, S.relatedTarget = b, E = null, xu(A) === p && ($ = new $(
                Yt,
                g + "enter",
                w,
                a,
                A
              ), $.target = b, $.relatedTarget = ve, E = $), ve = E, C && w)
                e: {
                  for ($ = ji, Yt = C, g = w, b = 0, E = Yt; E; E = $(E))
                    b++;
                  E = 0;
                  for (var Y = g; Y; Y = $(Y))
                    E++;
                  for (; 0 < b - E; )
                    Yt = $(Yt), b--;
                  for (; 0 < E - b; )
                    g = $(g), E--;
                  for (; b--; ) {
                    if (Yt === g || g !== null && Yt === g.alternate) {
                      $ = Yt;
                      break e;
                    }
                    Yt = $(Yt), g = $(g);
                  }
                  $ = null;
                }
              else $ = null;
              C !== null && th(
                D,
                S,
                C,
                $,
                !1
              ), w !== null && ve !== null && th(
                D,
                ve,
                w,
                $,
                !0
              );
            }
          }
          t: {
            if (S = p ? dc(p) : window, C = S.nodeName && S.nodeName.toLowerCase(), C === "select" || C === "input" && S.type === "file")
              var J = pc;
            else if (Em(S))
              if (zS)
                J = us;
              else {
                J = Am;
                var pt = Vg;
              }
            else
              C = S.nodeName, !C || C.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && Kn(p.elementType) && (J = pc) : J = zm;
            if (J && (J = J(t, p))) {
              as(
                D,
                J,
                a,
                A
              );
              break t;
            }
            pt && pt(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && hm(S, "number", S.value);
          }
          switch (pt = p ? dc(p) : window, t) {
            case "focusin":
              (Em(pt) || pt.contentEditable === "true") && (Hh = pt, o1 = p, E0 = null);
              break;
            case "focusout":
              E0 = o1 = Hh = null;
              break;
            case "mousedown":
              f1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              f1 = !1, Ep(
                D,
                a,
                A
              );
              break;
            case "selectionchange":
              if (yT) break;
            case "keydown":
            case "keyup":
              Ep(
                D,
                a,
                A
              );
          }
          var nt;
          if (i1)
            t: {
              switch (t) {
                case "compositionstart":
                  var P = "onCompositionStart";
                  break t;
                case "compositionend":
                  P = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  P = "onCompositionUpdate";
                  break t;
              }
              P = void 0;
            }
          else
            Ch ? bo(t, a) && (P = "onCompositionEnd") : t === "keydown" && a.keyCode === SS && (P = "onCompositionStart");
          P && (bS && a.locale !== "ko" && (Ch || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ch && (nt = oi()) : (Ef = A, a1 = "value" in Ef ? Ef.value : Ef.textContent, Ch = !0)), pt = Cn(
            p,
            P
          ), 0 < pt.length && (P = new vS(
            P,
            t,
            null,
            a,
            A
          ), D.push({
            event: P,
            listeners: pt
          }), nt ? P.data = nt : (nt = ju(a), nt !== null && (P.data = nt)))), (nt = hT ? Tm(t, a) : Fr(t, a)) && (P = Cn(
            p,
            "onBeforeInput"
          ), 0 < P.length && (pt = new F2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            A
          ), D.push({
            event: pt,
            listeners: P
          }), pt.data = nt)), Ht(
            D,
            t,
            p,
            a,
            A
          );
        }
        Wt(D, e);
      });
    }
    function re(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function Cn(t, e) {
      for (var a = e + "Capture", c = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = $n(t, a), o != null && c.unshift(
          re(t, o, f)
        ), o = $n(t, e), o != null && c.push(
          re(t, o, f)
        )), t.tag === 3) return c;
        t = t.return;
      }
      return [];
    }
    function ji(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function th(t, e, a, c, o) {
      for (var f = e._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = $n(a, f), p != null && d.unshift(
          re(a, p, y)
        )) : o || (p = $n(a, f), p != null && d.push(
          re(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function aa(t, e) {
      vp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || mS || (mS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: Tu,
        possibleRegistrationNames: bf
      };
      Kn(t) || typeof e.is == "string" || Qg(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ue(t, e, a, c) {
      e !== a && (a = Hn(a), Hn(e) !== a && (c[t] = e));
    }
    function Js(t, e, a) {
      e.forEach(function(c) {
        a[Pu(c)] = c === "style" ? Qc(t) : t.getAttribute(c);
      });
    }
    function _e(t, e) {
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
    function eh(t, e) {
      return t = t.namespaceURI === vt || t.namespaceURI === bt ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Hn(t) {
      return Zn(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        $f(t)
      ), Pc(t)), (typeof t == "string" ? t : "" + t).replace(VT, `
`).replace(ZT, "");
    }
    function jy(t, e) {
      return e = Hn(e), Hn(t) === e;
    }
    function Lt(t, e, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (Pf(c, e, !1), e === "body" || e === "textarea" && c === "" || ii(t, c)) : (typeof c == "number" || typeof c == "bigint") && (Pf("" + c, e, !1), e !== "body" && ii(t, "" + c));
          break;
        case "className":
          kf(t, "class", c);
          break;
        case "tabIndex":
          kf(t, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          kf(t, a, c);
          break;
        case "style":
          gm(t, c, f);
          break;
        case "data":
          if (e !== "object") {
            kf(t, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ee(c, a), c = ts("" + c), t.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || Dg || (Dg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || zg || (zg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Ag ? e !== "button" || o.type == null || o.type === "submit" || Ag ? typeof c == "function" && (o.name == null || Pb || (Pb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Dg || (Dg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || zg || (zg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Ag = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Ag = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof c == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Lt(t, e, "name", o.name, o, null), Lt(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Lt(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Lt(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Lt(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Lt(t, e, "method", o.method, o, null), Lt(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ee(c, a), c = ts("" + c), t.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && _e(a, c), t.onclick = $a);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && _e(a, c), st("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && _e(a, c), st("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "muted":
          t.muted = c && typeof c != "function" && typeof c != "symbol";
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
            t.removeAttribute("xlink:href");
            break;
          }
          ee(c, a), a = ts("" + c), t.setAttributeNS(Ur, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (ee(c, a), t.setAttribute(a, "" + c)) : t.removeAttribute(a);
          break;
        case "inert":
          c !== "" || Og[a] || (Og[a] = !0, console.error(
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
          c && typeof c != "function" && typeof c != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === !0 ? t.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (ee(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (ee(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? t.removeAttribute(a) : (ee(c, a), t.setAttribute(a, c));
          break;
        case "popover":
          st("beforetoggle", t), st("toggle", t), Gr(t, "popover", c);
          break;
        case "xlinkActuate":
          Ln(
            t,
            Ur,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          Ln(
            t,
            Ur,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          Ln(
            t,
            Ur,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          Ln(
            t,
            Ur,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          Ln(
            t,
            Ur,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          Ln(
            t,
            Ur,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          Ln(
            t,
            lS,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          Ln(
            t,
            lS,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          Ln(
            t,
            lS,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Gr(t, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          t2 || c == null || typeof c != "object" || (t2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = yp(a), Gr(t, a, c)) : Tu.hasOwnProperty(a) && c != null && typeof c != "function" && _e(a, c);
      }
    }
    function Po(t, e, a, c, o, f) {
      switch (a) {
        case "style":
          gm(t, c, f);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? ii(t, c) : (typeof c == "number" || typeof c == "bigint") && ii(t, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && _e(a, c), st("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && _e(a, c), st("scrollend", t));
          break;
        case "onClick":
          c != null && (typeof c != "function" && _e(a, c), t.onclick = $a);
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
          if (Tu.hasOwnProperty(a))
            c != null && typeof c != "function" && _e(a, c);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[ca] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, c, o);
                break t;
              }
              a in t ? t[a] = c : c === !0 ? t.setAttribute(a, "") : Gr(t, a, c);
            }
      }
    }
    function Te(t, e, a) {
      switch (aa(e, a), e) {
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
          st("error", t), st("load", t);
          var c = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    c = !0;
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
                    Lt(t, e, f, d, a, null);
                }
            }
          o && Lt(t, e, "srcSet", a.srcSet, a, null), c && Lt(t, e, "src", a.src, a, null);
          return;
        case "input":
          li("input", a), st("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var A = a[c];
              if (A != null)
                switch (c) {
                  case "name":
                    o = A;
                    break;
                  case "type":
                    d = A;
                    break;
                  case "checked":
                    y = A;
                    break;
                  case "defaultChecked":
                    p = A;
                    break;
                  case "value":
                    f = A;
                    break;
                  case "defaultValue":
                    h = A;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (A != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Lt(t, e, c, A, a, null);
                }
            }
          wl(t, a), Vr(
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
          li("select", a), st("invalid", t), c = d = f = null;
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
                  c = h;
                default:
                  Lt(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Zr(t, a), e = f, a = d, t.multiple = !!c, e != null ? wn(t, !!c, e, !1) : a != null && wn(t, !!c, a, !0);
          return;
        case "textarea":
          li("textarea", a), st("invalid", t), f = o = c = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  c = h;
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
                  Lt(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          ai(t, a), mo(t, c, o, f);
          return;
        case "option":
          mp(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (c = a[y], c != null) && (y === "selected" ? t.selected = c && typeof c != "function" && typeof c != "symbol" : Lt(t, e, y, c, a, null));
          return;
        case "dialog":
          st("beforetoggle", t), st("toggle", t), st("cancel", t), st("close", t);
          break;
        case "iframe":
        case "object":
          st("load", t);
          break;
        case "video":
        case "audio":
          for (c = 0; c < I0.length; c++)
            st(I0[c], t);
          break;
        case "image":
          st("error", t), st("load", t);
          break;
        case "details":
          st("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          st("error", t), st("load", t);
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
            if (a.hasOwnProperty(p) && (c = a[p], c != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Lt(t, e, p, c, a, null);
              }
          return;
        default:
          if (Kn(e)) {
            for (A in a)
              a.hasOwnProperty(A) && (c = a[A], c !== void 0 && Po(
                t,
                e,
                A,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && Lt(t, e, h, c, a, null));
    }
    function el(t, e, a, c) {
      switch (aa(e, c), e) {
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
          var o = null, f = null, d = null, h = null, y = null, p = null, A = null;
          for (C in a) {
            var D = a[C];
            if (a.hasOwnProperty(C) && D != null)
              switch (C) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = D;
                default:
                  c.hasOwnProperty(C) || Lt(
                    t,
                    e,
                    C,
                    null,
                    c,
                    D
                  );
              }
          }
          for (var S in c) {
            var C = c[S];
            if (D = a[S], c.hasOwnProperty(S) && (C != null || D != null))
              switch (S) {
                case "type":
                  f = C;
                  break;
                case "name":
                  o = C;
                  break;
                case "checked":
                  p = C;
                  break;
                case "defaultChecked":
                  A = C;
                  break;
                case "value":
                  d = C;
                  break;
                case "defaultValue":
                  h = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  C !== D && Lt(
                    t,
                    e,
                    S,
                    C,
                    c,
                    D
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, e || !c || Ib || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Ib = !0), !e || c || Fb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Fb = !0), hc(
            t,
            d,
            h,
            y,
            p,
            A,
            f,
            o
          );
          return;
        case "select":
          C = d = h = S = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  C = y;
                default:
                  c.hasOwnProperty(f) || Lt(
                    t,
                    e,
                    f,
                    null,
                    c,
                    y
                  );
              }
          for (o in c)
            if (f = c[o], y = a[o], c.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  S = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Lt(
                    t,
                    e,
                    o,
                    f,
                    c,
                    y
                  );
              }
          c = h, e = d, a = C, S != null ? wn(t, !!e, S, !1) : !!a != !!e && (c != null ? wn(t, !!e, c, !0) : wn(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          C = S = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Lt(t, e, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  S = o;
                  break;
                case "defaultValue":
                  C = o;
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
                  o !== f && Lt(t, e, d, o, c, f);
              }
          ni(t, S, C);
          return;
        case "option":
          for (var w in a)
            S = a[w], a.hasOwnProperty(w) && S != null && !c.hasOwnProperty(w) && (w === "selected" ? t.selected = !1 : Lt(
              t,
              e,
              w,
              null,
              c,
              S
            ));
          for (y in c)
            S = c[y], C = a[y], c.hasOwnProperty(y) && S !== C && (S != null || C != null) && (y === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : Lt(
              t,
              e,
              y,
              S,
              c,
              C
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
          for (var $ in a)
            S = a[$], a.hasOwnProperty($) && S != null && !c.hasOwnProperty($) && Lt(
              t,
              e,
              $,
              null,
              c,
              S
            );
          for (p in c)
            if (S = c[p], C = a[p], c.hasOwnProperty(p) && S !== C && (S != null || C != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Lt(
                    t,
                    e,
                    p,
                    S,
                    c,
                    C
                  );
              }
          return;
        default:
          if (Kn(e)) {
            for (var ve in a)
              S = a[ve], a.hasOwnProperty(ve) && S !== void 0 && !c.hasOwnProperty(ve) && Po(
                t,
                e,
                ve,
                void 0,
                c,
                S
              );
            for (A in c)
              S = c[A], C = a[A], !c.hasOwnProperty(A) || S === C || S === void 0 && C === void 0 || Po(
                t,
                e,
                A,
                S,
                c,
                C
              );
            return;
          }
      }
      for (var Yt in a)
        S = a[Yt], a.hasOwnProperty(Yt) && S != null && !c.hasOwnProperty(Yt) && Lt(t, e, Yt, null, c, S);
      for (D in c)
        S = c[D], C = a[D], !c.hasOwnProperty(D) || S === C || S == null && C == null || Lt(t, e, D, S, c, C);
    }
    function Pu(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function Qc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        e[c] = t.getPropertyValue(c);
      }
      return e;
    }
    function yu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (cm(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || I.has(f) ? (cm(d, f), c += o + f.replace(N, "-$1").toLowerCase().replace(F, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(N, "-$1").toLowerCase().replace(F, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, e = t.getAttribute("style"), e !== c && (c = Hn(c), Hn(e) !== c && (a.style = Qc(t)));
      }
    }
    function ha(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ee(c, e), t === "" + c)
              return;
        }
      Ue(e, t, c, f);
    }
    function lh(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
        }
        if (!c) return;
      } else
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (c) return;
        }
      Ue(e, t, c, f);
    }
    function ah(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (ee(c, a), t === "" + c)
              return;
        }
      Ue(e, t, c, f);
    }
    function tf(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(c)) return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(c) && (ee(c, e), t === "" + c))
              return;
        }
      Ue(e, t, c, f);
    }
    function Ks(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ee(c, e), a = ts("" + c), t === a)
              return;
        }
      Ue(e, t, c, f);
    }
    function ma(t, e, a, c) {
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
      if (Kn(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Tu.hasOwnProperty(y))
                typeof p != "function" && _e(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Ue(
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
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = eh(t, p), Ue(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), yu(t, p, o);
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
                    f.delete("class"), d = ho(
                      t,
                      "class",
                      p
                    ), Ue(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === oo && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = ho(
                      t,
                      y,
                      p
                    ), Ue(
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
            if (Tu.hasOwnProperty(p))
              typeof y != "function" && _e(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Ue(
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
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = eh(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  ha(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  ha(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), yu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Ue(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Ue(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ue(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), Ue(
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
                  Ks(
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
                  } else if (d === LT) {
                    f.delete(p.toLowerCase()), Ue(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Ks(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ks(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  ah(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  ah(
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
                  ah(
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
                  lh(
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
                    var A = d = p, D = o;
                    if (f.delete(A), h = h.getAttribute(A), h === null)
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
                          if (ee(y, d), h === "" + y)
                            break t;
                      }
                    Ue(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, A = d = p, D = o, f.delete(A), h = h.getAttribute(A), h === null)
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
                          if (!(isNaN(y) || 1 > y) && (ee(y, d), h === "" + y))
                            break t;
                      }
                    Ue(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  tf(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  tf(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  ha(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  ha(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  ha(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  ha(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  ha(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  ha(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  ha(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  ha(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  ha(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  ha(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Og[p] || (Og[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), lh(
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
                    h = yp(p), d = !1, c.context === oo && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (A = p.toLowerCase(), A = qn.hasOwnProperty(
                      A
                    ) && qn[A] || null, A !== null && A !== p && (d = !0, f.delete(A)), f.delete(h));
                    t: if (A = t, D = h, h = y, Wf(D))
                      if (A.hasAttribute(D))
                        A = A.getAttribute(
                          D
                        ), ee(
                          h,
                          D
                        ), h = A === "" + h ? h : A;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (A = D.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ue(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Js(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function ev(t, e) {
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
    function na(t) {
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
    function lv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var o = a[c], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && na(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var A = y.transferSize, D = y.initiatorType;
              A && na(D) && (y = y.responseEnd, d += A * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function $s(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function av(t) {
      switch (t) {
        case bt:
          return am;
        case vt:
          return Rg;
        default:
          return oo;
      }
    }
    function tc(t, e) {
      if (t === oo)
        switch (e) {
          case "svg":
            return am;
          case "math":
            return Rg;
          default:
            return oo;
        }
      return t === am && e === "foreignObject" ? oo : t;
    }
    function ef(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function Gy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === cS ? !1 : (cS = t, !0) : (cS = null, !1);
    }
    function pu() {
      var t = window.event;
      return t && t !== ep ? t.type : null;
    }
    function lf() {
      var t = window.event;
      return t && t !== ep ? t.timeStamp : -1.1;
    }
    function nv(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function uv(t, e, a) {
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
    function cv() {
    }
    function nh(t, e, a, c) {
      el(t, e, a, c), t[ca] = c;
    }
    function uh(t) {
      ii(t, "");
    }
    function Wg(t, e, a) {
      t.nodeValue = a;
    }
    function iv(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[ca] || null;
        if (e !== null) {
          var a = rn(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, W(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, W(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function Vc(t) {
      return t === "head";
    }
    function ov(t, e) {
      t.removeChild(e);
    }
    function fv(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function Gi(t, e) {
      var a = e, c = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === tp || a === Mg) {
            if (c === 0) {
              t.removeChild(o), Zi(e);
              return;
            }
            c--;
          } else if (a === P0 || a === Xf || a === Cr || a === lm || a === _r)
            c++;
          else if (a === JT)
            lc(
              t.ownerDocument.documentElement
            );
          else if (a === $T) {
            a = t.ownerDocument.head, lc(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Sf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === KT && lc(t.ownerDocument.body);
        a = o;
      } while (a);
      Zi(e);
    }
    function Ws(t, e) {
      var a = t;
      t = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === tp) {
            if (t === 0) break;
            t--;
          } else
            a !== P0 && a !== Xf && a !== Cr && a !== lm || t++;
        a = c;
      } while (a);
    }
    function sv(t) {
      Ws(t, !0);
    }
    function rv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dv(t) {
      t.nodeValue = "";
    }
    function hv(t) {
      Ws(t, !1);
    }
    function mv(t, e) {
      e = e[WT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function yv(t, e) {
      t.nodeValue = e;
    }
    function af(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            af(a), sm(a);
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
    function pv(t, e, a, c) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!c && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (c) {
          if (!t[Sf])
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
          ee(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = xa(t.nextSibling), t === null) break;
      }
      return null;
    }
    function vv(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = xa(t.nextSibling), t === null)) return null;
      return t;
    }
    function kt(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = xa(t.nextSibling), t === null)) return null;
      return t;
    }
    function ks(t) {
      return t.data === Xf || t.data === Cr;
    }
    function Xy(t) {
      return t.data === lm || t.data === Xf && t.ownerDocument.readyState !== l2;
    }
    function gv(t, e) {
      var a = t.ownerDocument;
      if (t.data === Cr)
        t._reactRetry = e;
      else if (t.data !== Xf || a.readyState !== l2)
        e();
      else {
        var c = function() {
          e(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), t._reactRetry = c;
      }
    }
    function xa(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === P0 || e === lm || e === Xf || e === Cr || e === _r || e === aS || e === e2)
            break;
          if (e === tp || e === Mg)
            return null;
        }
      }
      return t;
    }
    function Sv(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, c = t.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[Pu(f.name)] = f.name.toLowerCase() === "style" ? Qc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === _r ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function bv(t, e, a) {
      return a === null || a[wT] !== !0 ? (t.nodeValue === e ? t = null : (e = Hn(e), t = Hn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function nf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === tp || a === Mg) {
            if (e === 0)
              return xa(t.nextSibling);
            e--;
          } else
            a !== P0 && a !== lm && a !== Xf && a !== Cr && a !== _r || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Xi(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === P0 || a === lm || a === Xf || a === Cr || a === _r) {
            if (e === 0) return t;
            e--;
          } else
            a !== tp && a !== Mg || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Qy(t) {
      Zi(t);
    }
    function ch(t) {
      Zi(t);
    }
    function Vy(t) {
      Zi(t);
    }
    function ec(t, e, a, c, o) {
      switch (o && If(t, c.ancestorInfo), e = $s(a), t) {
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
    function vu(t, e, a, c) {
      if (!a[nc] && rn(a)) {
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
      Te(a, t, e), a[Ee] = c, a[ca] = e;
    }
    function lc(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      sm(t);
    }
    function ih(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Zy(t, e, a) {
      var c = nm;
      if (c && typeof e == "string" && e) {
        var o = le(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), o2.has(o) || (o2.add(o), t = { rel: t, crossOrigin: a, href: e }, c.querySelector(o) === null && (e = c.createElement("link"), Te(e, "link", t), Xe(e), c.head.appendChild(e)));
      }
    }
    function Ly(t, e, a, c) {
      var o = (o = qa.current) ? ih(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Qi(a.href), e = Ka(o).hoistableStyles, c = e.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = Qi(a.href);
            var f = Ka(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Br, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              Is(t)
            )) && !f._p && (d.instance = f, d.state.loading = lp | Hu), !Bu.has(t))) {
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
              Bu.set(t, h), f || Tv(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && c === null)
              throw a = `

  - ` + Fs(e) + `
  + ` + Fs(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && c !== null)
            throw a = `

  - ` + Fs(e) + `
  + ` + Fs(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Vi(a), e = Ka(o).hoistableScripts, c = e.get(a), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function Fs(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Ya.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Ya.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Ya.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function Qi(t) {
      return 'href="' + le(t) + '"';
    }
    function Is(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function oh(t) {
      return Et({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Tv(t, e, a, c) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? c.loading = lp : (e = t.createElement("link"), c.preload = e, e.addEventListener("load", function() {
        return c.loading |= lp;
      }), e.addEventListener("error", function() {
        return c.loading |= c2;
      }), Te(e, "link", a), Xe(e), t.head.appendChild(e));
    }
    function Vi(t) {
      return '[src="' + le(t) + '"]';
    }
    function Ps(t) {
      return "script[async]" + t;
    }
    function fh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var c = t.querySelector(
              'style[data-href~="' + le(a.href) + '"]'
            );
            if (c)
              return e.instance = c, Xe(c), c;
            var o = Et({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (t.ownerDocument || t).createElement("style"), Xe(c), Te(c, "style", o), uf(c, a.precedence, t), e.instance = c;
          case "stylesheet":
            o = Qi(a.href);
            var f = t.querySelector(
              Is(o)
            );
            if (f)
              return e.state.loading |= Hu, e.instance = f, Xe(f), f;
            c = oh(a), (o = Bu.get(o)) && wy(c, o), f = (t.ownerDocument || t).createElement("link"), Xe(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Te(f, "link", c), e.state.loading |= Hu, uf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Vi(a.src), (o = t.querySelector(
              Ps(f)
            )) ? (e.instance = o, Xe(o), o) : (c = a, (o = Bu.get(f)) && (c = Et({}, a), Jy(c, o)), t = t.ownerDocument || t, o = t.createElement("script"), Xe(o), Te(o, "link", c), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Hu) === Br && (c = e.instance, e.state.loading |= Hu, uf(c, a.precedence, t));
      return e.instance;
    }
    function uf(t, e, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function wy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Jy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function cf(t, e, a) {
      if (Ug === null) {
        var c = /* @__PURE__ */ new Map(), o = Ug = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Ug, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(t)) return c;
      for (c.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Sf] || f[Ee] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== bt) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function Ev(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Av(t, e, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === am || e.itemProp != null)
        return !c || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
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
            c && console.error(
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
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = ev(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            c && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return e.rel === "stylesheet" ? (t = e.precedence, e = e.disabled, typeof t != "string" && c && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof t == "string" && e == null) : !0;
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            c && (t ? e.onLoad || e.onError ? console.error(
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
          c && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function Ut(t) {
      return !(t.type === "stylesheet" && (t.state.loading & i2) === Br);
    }
    function Ky(t, e, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Hu) === Br) {
        if (a.instance === null) {
          var o = Qi(c.href), f = e.querySelector(
            Is(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = of.bind(t), e.then(t, t)), a.state.loading |= Hu, a.instance = f, Xe(f);
            return;
          }
          f = e.ownerDocument || e, c = oh(c), (o = Bu.get(o)) && wy(c, o), f = f.createElement("link"), Xe(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Te(f, "link", c), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & i2) === Br && (t.count++, a = of.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function sh(t, e) {
      return t.stylesheets && t.count === 0 && tr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (t.stylesheets && tr(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, IT + e);
        0 < t.imgBytes && oS === 0 && (oS = 125 * lv() * tE);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tr(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > oS ? 50 : PT) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function of() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          tr(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function tr(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, _g = /* @__PURE__ */ new Map(), e.forEach($y, t), _g = null, of.call(t));
    }
    function $y(t, e) {
      if (!(e.state.loading & Hu)) {
        var a = _g.get(t);
        if (a) var c = a.get(fS);
        else {
          a = /* @__PURE__ */ new Map(), _g.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(fS, c);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(fS, o), a.set(d, o), this.count++, c = of.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Hu;
      }
    }
    function er(t, e, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Hr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jr(0), this.hiddenUpdates = jr(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function lr(t, e, a, c, o, f, d, h, y, p, A, D) {
      return t = new er(
        t,
        e,
        a,
        d,
        y,
        p,
        A,
        D,
        h
      ), e = zT, f === !0 && (e |= va | uc), e |= At, f = xt(3, null, null, e), t.current = f, f.stateNode = t, e = fd(), vi(e), t.pooledCache = e, vi(e), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: e
      }, Ct(f), t;
    }
    function zv(t) {
      return t ? (t = Df, t) : Df;
    }
    function rh(t, e, a, c, o, f) {
      if (ll && typeof ll.onScheduleFiberRoot == "function")
        try {
          ll.onScheduleFiberRoot(Ki, c, a);
        } catch (d) {
          Su || (Su = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = zv(o), c.context === null ? c.context = o : c.pendingContext = o, gu && pa !== null && !d2 && (d2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        et(pa) || "Unknown"
      )), c = Pe(e), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = tu(t, c, e), a !== null && (Fn(e, "root.render()", null), ht(a, t, e), en(a, t, e));
    }
    function Dv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Wy(t, e) {
      Dv(t, e), (t = t.alternate) && Dv(t, e);
    }
    function ky(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ql(t, 67108864);
        e !== null && ht(e, t, 67108864), Wy(t, 67108864);
      }
    }
    function Fy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = jl(t);
        e = ei(e);
        var a = ql(t, e);
        a !== null && ht(a, t, e), Wy(t, e);
      }
    }
    function ue() {
      return pa;
    }
    function Iy(t, e, a, c) {
      var o = B.T;
      B.T = null;
      var f = wt.p;
      try {
        wt.p = al, Py(t, e, a, c);
      } finally {
        wt.p = f, B.T = o;
      }
    }
    function Ml(t, e, a, c) {
      var o = B.T;
      B.T = null;
      var f = wt.p;
      try {
        wt.p = Ul, Py(t, e, a, c);
      } finally {
        wt.p = f, B.T = o;
      }
    }
    function Py(t, e, a, c) {
      if (Hg) {
        var o = dh(c);
        if (o === null)
          _n(
            t,
            e,
            c,
            Bg,
            a
          ), mh(t, c);
        else if (Ov(
          o,
          t,
          e,
          a,
          c
        ))
          c.stopPropagation();
        else if (mh(t, c), e & 4 && -1 < lE.indexOf(t)) {
          for (; o !== null; ) {
            var f = rn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ti(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Rl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      da(f), (Xt & (Cl | Xn)) === Zl && (yg = yl() + Xb, hu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ql(f, 2), h !== null && ht(h, f, 2), Na(), Wy(f, 2);
              }
            if (f = dh(c), f === null && _n(
              t,
              e,
              c,
              Bg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && c.stopPropagation();
        } else
          _n(
            t,
            e,
            c,
            null,
            a
          );
      }
    }
    function dh(t) {
      return t = mn(t), t0(t);
    }
    function t0(t) {
      if (Bg = null, t = xu(t), t !== null) {
        var e = It(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = La(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = je(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Bg = t, null;
    }
    function hh(t) {
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
          return al;
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
          return Ul;
        case "message":
          switch (or()) {
            case s0:
              return al;
            case Ah:
              return Ul;
            case Ji:
            case Hv:
              return Xl;
            case zh:
              return Kc;
            default:
              return Xl;
          }
        default:
          return Xl;
      }
    }
    function mh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Qf = null;
          break;
        case "dragenter":
        case "dragleave":
          Vf = null;
          break;
        case "mouseover":
        case "mouseout":
          Zf = null;
          break;
        case "pointerover":
        case "pointerout":
          np.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          up.delete(e.pointerId);
      }
    }
    function Zc(t, e, a, c, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = rn(e), e !== null && ky(e)), t) : (t.eventSystemFlags |= c, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Ov(t, e, a, c, o) {
      switch (e) {
        case "focusin":
          return Qf = Zc(
            Qf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Vf = Zc(
            Vf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return Zf = Zc(
            Zf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return np.set(
            f,
            Zc(
              np.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, up.set(
            f,
            Zc(
              up.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
      }
      return !1;
    }
    function e0(t) {
      var e = xu(t.target);
      if (e !== null) {
        var a = It(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = La(a), e !== null) {
              t.blockedOn = e, hp(t.priority, function() {
                Fy(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = je(a), e !== null) {
              t.blockedOn = e, hp(t.priority, function() {
                Fy(a);
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
    function ff(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = dh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          y0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), y0 = o, a.target.dispatchEvent(c), y0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), y0 = null;
        } else
          return e = rn(a), e !== null && ky(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function yh(t, e, a) {
      ff(t) && a.delete(e);
    }
    function kg() {
      sS = !1, Qf !== null && ff(Qf) && (Qf = null), Vf !== null && ff(Vf) && (Vf = null), Zf !== null && ff(Zf) && (Zf = null), np.forEach(yh), up.forEach(yh);
    }
    function ar(t, e) {
      t.blockedOn === e && (t.blockedOn = null, sS || (sS = !0, we.unstable_scheduleCallback(
        we.unstable_NormalPriority,
        kg
      )));
    }
    function Mv(t) {
      Ng !== t && (Ng = t, we.unstable_scheduleCallback(
        we.unstable_NormalPriority,
        function() {
          Ng === t && (Ng = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], c = t[e + 1], o = t[e + 2];
            if (typeof c != "function") {
              if (t0(c || a) === null)
                continue;
              break;
            }
            var f = rn(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), $u(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function Zi(t) {
      function e(y) {
        return ar(y, t);
      }
      Qf !== null && ar(Qf, t), Vf !== null && ar(Vf, t), Zf !== null && ar(Zf, t), np.forEach(e), up.forEach(e);
      for (var a = 0; a < Lf.length; a++) {
        var c = Lf[a];
        c.blockedOn === t && (c.blockedOn = null);
      }
      for (; 0 < Lf.length && (a = Lf[0], a.blockedOn === null); )
        e0(a), a.blockedOn === null && Lf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[ca] || null;
          if (typeof f == "function")
            d || Mv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ca] || null)
                h = d.formAction;
              else if (t0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), Mv(a);
          }
        }
    }
    function Rv() {
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
        o !== null && (o(), o = null), c || setTimeout(a, 20);
      }
      function a() {
        if (!c && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var c = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          c = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function l0(t) {
      this._internalRoot = t;
    }
    function Bn(t) {
      this._internalRoot = t;
    }
    function a0(t) {
      t[nc] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var we = x2(), nr = hS, Fg = N2, Et = Object.assign, Uv = /* @__PURE__ */ Symbol.for("react.element"), un = /* @__PURE__ */ Symbol.for("react.transitional.element"), Lc = /* @__PURE__ */ Symbol.for("react.portal"), sf = /* @__PURE__ */ Symbol.for("react.fragment"), ua = /* @__PURE__ */ Symbol.for("react.strict_mode"), ur = /* @__PURE__ */ Symbol.for("react.profiler"), ph = /* @__PURE__ */ Symbol.for("react.consumer"), Nn = /* @__PURE__ */ Symbol.for("react.context"), rf = /* @__PURE__ */ Symbol.for("react.forward_ref"), Li = /* @__PURE__ */ Symbol.for("react.suspense"), ya = /* @__PURE__ */ Symbol.for("react.suspense_list"), cr = /* @__PURE__ */ Symbol.for("react.memo"), Gl = /* @__PURE__ */ Symbol.for("react.lazy"), xn = /* @__PURE__ */ Symbol.for("react.activity"), Ig = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _v = Symbol.iterator, df = /* @__PURE__ */ Symbol.for("react.client.reference"), ke = Array.isArray, B = nr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, wt = Fg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), n0 = [], u0 = [], ac = -1, wc = Ge(null), hf = Ge(null), qa = Ge(null), Jc = Ge(null), mf = 0, Cv, wi, yf, c0, ir, vh, gh;
    rt.__reactDisabledLog = !0;
    var pf, i0, Sh = !1, o0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), pa = null, gu = !1, Ya = Object.prototype.hasOwnProperty, f0 = we.unstable_scheduleCallback, bh = we.unstable_cancelCallback, Th = we.unstable_shouldYield, Eh = we.unstable_requestPaint, yl = we.unstable_now, or = we.unstable_getCurrentPriorityLevel, s0 = we.unstable_ImmediatePriority, Ah = we.unstable_UserBlockingPriority, Ji = we.unstable_NormalPriority, Hv = we.unstable_LowPriority, zh = we.unstable_IdlePriority, r0 = we.log, Bv = we.unstable_setDisableYieldValue, Ki = null, ll = null, Su = !1, bu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Rl = Math.clz32 ? Math.clz32 : om, d0 = Math.log, Dh = Math.LN2, vf = 256, fr = 262144, gf = 4194304, al = 2, Ul = 8, Xl = 32, Kc = 268435456, cn = Math.random().toString(36).slice(2), Ee = "__reactFiber$" + cn, ca = "__reactProps$" + cn, nc = "__reactContainer$" + cn, $i = "__reactEvents$" + cn, t1 = "__reactListeners$" + cn, Nv = "__reactHandles$" + cn, sr = "__reactResources$" + cn, Sf = "__reactMarker$" + cn, xv = /* @__PURE__ */ new Set(), Tu = {}, bf = {}, qv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Tf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), h0 = {}, Oh = {}, Mh = /[\n"\\]/g, m0 = !1, Yv = !1, rr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), T = v.concat(["button"]), U = "dd dt li option optgroup p rp rt".split(" "), q = {
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
    }, X = {}, _ = {
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
    }, N = /([A-Z])/g, F = /^ms-/, it = /^(?:webkit|moz|o)[A-Z]/, ce = /^-ms-/, M = /-(.)/g, z = /;\s*$/, R = {}, G = {}, at = !1, Gt = !1, I = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), vt = "http://www.w3.org/1998/Math/MathML", bt = "http://www.w3.org/2000/svg", Vt = /* @__PURE__ */ new Map([
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
    ]), qn = {
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
    }, jv = {
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
    }, Rh = {}, q2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Y2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), mS = !1, ja = {}, yS = /^on./, j2 = /^on[^A-Z]/, G2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), X2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Q2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, y0 = null, Uh = null, _h = null, e1 = !1, $c = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), l1 = !1;
    if ($c)
      try {
        var p0 = {};
        Object.defineProperty(p0, "passive", {
          get: function() {
            l1 = !0;
          }
        }), window.addEventListener("test", p0, p0), window.removeEventListener("test", p0, p0);
      } catch {
        l1 = !1;
      }
    var Ef = null, a1 = null, Gv = null, dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Xv = ol(dr), v0 = Et({}, dr, { view: 0, detail: 0 }), V2 = ol(v0), n1, u1, g0, Qv = Et({}, v0, {
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
      getModifierState: ls,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== g0 && (g0 && t.type === "mousemove" ? (n1 = t.screenX - g0.screenX, u1 = t.screenY - g0.screenY) : u1 = n1 = 0, g0 = t), n1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : u1;
      }
    }), pS = ol(Qv), Z2 = Et({}, Qv, { dataTransfer: 0 }), L2 = ol(Z2), w2 = Et({}, v0, { relatedTarget: 0 }), c1 = ol(w2), J2 = Et({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), K2 = ol(J2), $2 = Et({}, dr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), W2 = ol($2), k2 = Et({}, dr, { data: 0 }), vS = ol(
      k2
    ), F2 = vS, I2 = {
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
    }, P2 = {
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
    }, tT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, eT = Et({}, v0, {
      key: function(t) {
        if (t.key) {
          var e = I2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = es(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? P2[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ls,
      charCode: function(t) {
        return t.type === "keypress" ? es(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? es(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), lT = ol(eT), aT = Et({}, Qv, {
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
    }), gS = ol(aT), nT = Et({}, v0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ls
    }), uT = ol(nT), cT = Et({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), iT = ol(cT), oT = Et({}, Qv, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), fT = ol(oT), sT = Et({}, dr, {
      newState: 0,
      oldState: 0
    }), rT = ol(sT), dT = [9, 13, 27, 32], SS = 229, i1 = $c && "CompositionEvent" in window, S0 = null;
    $c && "documentMode" in document && (S0 = document.documentMode);
    var hT = $c && "TextEvent" in window && !S0, bS = $c && (!i1 || S0 && 8 < S0 && 11 >= S0), TS = 32, ES = String.fromCharCode(TS), AS = !1, Ch = !1, mT = {
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
    }, b0 = null, T0 = null, zS = !1;
    $c && (zS = Ir("input") && (!document.documentMode || 9 < document.documentMode));
    var Ga = typeof Object.is == "function" ? Object.is : Pr, yT = $c && "documentMode" in document && 11 >= document.documentMode, Hh = null, o1 = null, E0 = null, f1 = !1, Bh = {
      animationend: fi("Animation", "AnimationEnd"),
      animationiteration: fi("Animation", "AnimationIteration"),
      animationstart: fi("Animation", "AnimationStart"),
      transitionrun: fi("Transition", "TransitionRun"),
      transitionstart: fi("Transition", "TransitionStart"),
      transitioncancel: fi("Transition", "TransitionCancel"),
      transitionend: fi("Transition", "TransitionEnd")
    }, s1 = {}, DS = {};
    $c && (DS = document.createElement("div").style, "AnimationEvent" in window || (delete Bh.animationend.animation, delete Bh.animationiteration.animation, delete Bh.animationstart.animation), "TransitionEvent" in window || delete Bh.transitionend.transition);
    var OS = si("animationend"), MS = si("animationiteration"), RS = si("animationstart"), pT = si("transitionrun"), vT = si("transitionstart"), gT = si("transitioncancel"), US = si("transitionend"), _S = /* @__PURE__ */ new Map(), r1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    r1.push("scrollEnd");
    var CS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var ST = performance, HS = function() {
        return ST.now();
      };
    else {
      var bT = Date;
      HS = function() {
        return bT.now();
      };
    }
    var d1 = typeof reportError == "function" ? reportError : function(t) {
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
    }, TT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Vv = 0, h1 = 1, m1 = 2, y1 = 3, Zv = "– ", Lv = "+ ", BS = "  ", Ae = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Eu = "Components ⚛", qt = "Scheduler ⚛", jt = "Blocking", Af = !1, Wi = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Eu
    }, zf = {
      start: -0,
      end: -0,
      detail: { devtools: Wi }
    }, ET = ["Changed Props", ""], NS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", AT = ["Changed Props", NS], A0 = 1, ki = 2, Au = [], Nh = 0, p1 = 0, Df = {};
    Object.freeze(Df);
    var zu = null, xh = null, dt = 0, zT = 1, At = 2, va = 8, uc = 16, DT = 32, xS = !1;
    try {
      var qS = Object.preventExtensions({});
    } catch {
      xS = !0;
    }
    var v1 = /* @__PURE__ */ new WeakMap(), qh = [], Yh = 0, wv = null, z0 = 0, Du = [], Ou = 0, hr = null, Fi = 1, Ii = "", ia = null, ze = null, Nt = !1, Wc = !1, Yn = null, Of = null, Mu = !1, g1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), S1 = Ge(null), b1 = Ge(null), YS = {}, Jv = null, jh = null, Gh = !1, OT = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, c) {
          t.push(c);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, MT = we.unstable_scheduleCallback, RT = we.unstable_NormalPriority, pl = {
      $$typeof: Nn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, vl = we.unstable_now, Kv = console.createTask ? console.createTask : function() {
      return null;
    }, D0 = 1, $v = 2, Ql = -0, Mf = -0, Pi = -0, to = null, Xa = -1.1, mr = -0, qe = -0, ut = -1.1, ft = -1.1, Ce = null, Je = !1, yr = -0, kc = -1.1, O0 = null, Rf = 0, T1 = null, E1 = null, pr = -1.1, M0 = null, Xh = -1.1, Wv = -1.1, eo = -0, lo = -1.1, Ru = -1.1, A1 = 0, R0 = null, jS = null, GS = null, Uf = -1.1, vr = null, _f = -1.1, kv = -1.1, XS = -0, QS = -0, Fv = 0, UT = null, VS = 0, U0 = -1.1, Iv = !1, Pv = !1, _0 = null, z1 = 0, gr = 0, Qh = null, ZS = B.S;
    B.S = function(t, e) {
      if (jb = yl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > lo && 0 > Ru) {
          lo = vl();
          var a = lf(), c = pu();
          (a !== _f || c !== vr) && (_f = -1.1), Uf = a, vr = c;
        }
        Qu(t, e);
      }
      ZS !== null && ZS(t, e);
    };
    var Sr = Ge(null), cc = {
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
    }, C0 = [], H0 = [], B0 = [], N0 = [], x0 = [], q0 = [], br = /* @__PURE__ */ new Set();
    cc.recordUnsafeLifecycleWarnings = function(t, e) {
      br.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && C0.push(t), t.mode & va && typeof e.UNSAFE_componentWillMount == "function" && H0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && B0.push(t), t.mode & va && typeof e.UNSAFE_componentWillReceiveProps == "function" && N0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && x0.push(t), t.mode & va && typeof e.UNSAFE_componentWillUpdate == "function" && q0.push(t));
    }, cc.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < C0.length && (C0.forEach(function(h) {
        t.add(
          et(h) || "Component"
        ), br.add(h.type);
      }), C0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < H0.length && (H0.forEach(function(h) {
        e.add(
          et(h) || "Component"
        ), br.add(h.type);
      }), H0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(function(h) {
        a.add(
          et(h) || "Component"
        ), br.add(h.type);
      }), B0 = []);
      var c = /* @__PURE__ */ new Set();
      0 < N0.length && (N0.forEach(
        function(h) {
          c.add(
            et(h) || "Component"
          ), br.add(h.type);
        }
      ), N0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < x0.length && (x0.forEach(function(h) {
        o.add(
          et(h) || "Component"
        ), br.add(h.type);
      }), x0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < q0.length && (q0.forEach(function(h) {
        f.add(
          et(h) || "Component"
        ), br.add(h.type);
      }), q0 = []), 0 < e.size) {
        var d = ot(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = ot(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = ot(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = ot(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = ot(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = ot(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var tg = /* @__PURE__ */ new Map(), LS = /* @__PURE__ */ new Set();
    cc.recordLegacyContextWarning = function(t, e) {
      for (var a = null, c = t; c !== null; )
        c.mode & va && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !LS.has(t.type) && (c = tg.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], tg.set(a, c)), c.push(t));
    }, cc.flushLegacyContextWarning = function() {
      tg.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(et(o) || "Component"), LS.add(o.type);
          });
          var c = ot(a);
          W(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              c
            );
          });
        }
      });
    }, cc.discardPendingWarnings = function() {
      C0 = [], H0 = [], B0 = [], N0 = [], x0 = [], q0 = [], tg = /* @__PURE__ */ new Map();
    };
    var wS = {
      react_stack_bottom_frame: function(t, e, a) {
        var c = gu;
        gu = !0;
        try {
          return t(e, a);
        } finally {
          gu = c;
        }
      }
    }, D1 = wS.react_stack_bottom_frame.bind(wS), JS = {
      react_stack_bottom_frame: function(t) {
        var e = gu;
        gu = !0;
        try {
          return t.render();
        } finally {
          gu = e;
        }
      }
    }, KS = JS.react_stack_bottom_frame.bind(JS), $S = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          St(t, t.return, a);
        }
      }
    }, O1 = $S.react_stack_bottom_frame.bind(
      $S
    ), WS = {
      react_stack_bottom_frame: function(t, e, a, c, o) {
        try {
          e.componentDidUpdate(a, c, o);
        } catch (f) {
          St(t, t.return, f);
        }
      }
    }, kS = WS.react_stack_bottom_frame.bind(
      WS
    ), FS = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, _T = FS.react_stack_bottom_frame.bind(
      FS
    ), IS = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          St(t, e, c);
        }
      }
    }, PS = IS.react_stack_bottom_frame.bind(
      IS
    ), tb = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, CT = tb.react_stack_bottom_frame.bind(tb), eb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (c) {
          St(t, e, c);
        }
      }
    }, HT = eb.react_stack_bottom_frame.bind(eb), lb = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, BT = lb.react_stack_bottom_frame.bind(lb), Vh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), M1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), eg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), lg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Tr = null, Y0 = !1, Zh = null, j0 = 0, zt = null, R1, ab = R1 = !1, nb = {}, ub = {}, cb = {};
    Vn = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = et(t), o = c || "null";
        if (!nb[o]) {
          nb[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = et(t)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && t !== a && (c = null, typeof a.tag == "number" ? c = et(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), W(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Er = sl(!0), ib = sl(!1), ob = 0, fb = 1, sb = 2, U1 = 3, Cf = !1, rb = !1, _1 = null, C1 = !1, Lh = Ge(null), ag = Ge(0), jn = Ge(null), Uu = null, wh = 1, G0 = 2, nl = Ge(0), ng = 0, _u = 1, Qa = 2, Gn = 4, Va = 8, Jh, db = /* @__PURE__ */ new Set(), hb = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), mb = /* @__PURE__ */ new Set(), ao = 0, yt = null, de = null, gl = null, ug = !1, Kh = !1, Ar = !1, cg = 0, X0 = 0, no = null, NT = 0, xT = 25, H = null, Cu = null, uo = -1, Q0 = !1, V0 = {
      readContext: Zt,
      use: wu,
      useCallback: Ne,
      useContext: Ne,
      useEffect: Ne,
      useImperativeHandle: Ne,
      useLayoutEffect: Ne,
      useInsertionEffect: Ne,
      useMemo: Ne,
      useReducer: Ne,
      useRef: Ne,
      useState: Ne,
      useDebugValue: Ne,
      useDeferredValue: Ne,
      useTransition: Ne,
      useSyncExternalStore: Ne,
      useId: Ne,
      useHostTransitionStatus: Ne,
      useFormState: Ne,
      useActionState: Ne,
      useOptimistic: Ne,
      useMemoCache: Ne,
      useCacheRefresh: Ne
    };
    V0.useEffectEvent = Ne;
    var B1 = null, yb = null, N1 = null, pb = null, Fc = null, ic = null, ig = null;
    B1 = {
      readContext: function(t) {
        return Zt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return H = "useCallback", mt(), Lu(e), bd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", mt(), Zt(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", mt(), Lu(e), Mi(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", mt(), Lu(a), nu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", mt(), Lu(e), Hc(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", mt(), Lu(e), Fl(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", mt(), Lu(e);
        var a = B.H;
        B.H = Fc;
        try {
          return Il(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", mt();
        var c = B.H;
        B.H = Fc;
        try {
          return Ho(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", mt(), Sd(t);
      },
      useState: function(t) {
        H = "useState", mt();
        var e = B.H;
        B.H = Fc;
        try {
          return Rc(t);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", mt();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", mt(), Yo(t, e);
      },
      useTransition: function() {
        return H = "useTransition", mt(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", mt(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", mt(), Os();
      },
      useFormState: function(t, e) {
        return H = "useFormState", mt(), ys(), Ua(t, e);
      },
      useActionState: function(t, e) {
        return H = "useActionState", mt(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", mt(), Oi(t);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", mt(), Td();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", mt(), zs(t);
      }
    }, yb = {
      readContext: function(t) {
        return Zt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return H = "useCallback", V(), bd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", V(), Zt(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", V(), Mi(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", V(), nu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", V(), Hc(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", V(), Fl(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", V();
        var a = B.H;
        B.H = Fc;
        try {
          return Il(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", V();
        var c = B.H;
        B.H = Fc;
        try {
          return Ho(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", V(), Sd(t);
      },
      useState: function(t) {
        H = "useState", V();
        var e = B.H;
        B.H = Fc;
        try {
          return Rc(t);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", V(), Yo(t, e);
      },
      useTransition: function() {
        return H = "useTransition", V(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", V(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", V(), Os();
      },
      useActionState: function(t, e) {
        return H = "useActionState", V(), Ua(t, e);
      },
      useFormState: function(t, e) {
        return H = "useFormState", V(), ys(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", V(), Oi(t);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Td();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", V(), zs(t);
      }
    }, N1 = {
      readContext: function(t) {
        return Zt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return H = "useCallback", V(), Dn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", V(), Zt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", V(), tl(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", V(), tl(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", V(), tl(4, Gn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", V();
        var a = B.H;
        B.H = ic;
        try {
          return be(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", V();
        var c = B.H;
        B.H = ic;
        try {
          return Ai(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", V(), Kt().memoizedState;
      },
      useState: function() {
        H = "useState", V();
        var t = B.H;
        B.H = ic;
        try {
          return Ai(Ra);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", V(), uu(t, e);
      },
      useTransition: function() {
        return H = "useTransition", V(), qp();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", V(), Kt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", V(), ys(), _c(t);
      },
      useActionState: function(t) {
        return H = "useActionState", V(), _c(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", V(), Ts(t, e);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", V(), xo(t);
      }
    }, pb = {
      readContext: function(t) {
        return Zt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return H = "useCallback", V(), Dn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", V(), Zt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", V(), tl(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", V(), tl(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", V(), tl(4, Gn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", V();
        var a = B.H;
        B.H = ig;
        try {
          return be(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", V();
        var c = B.H;
        B.H = ig;
        try {
          return zi(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", V(), Kt().memoizedState;
      },
      useState: function() {
        H = "useState", V();
        var t = B.H;
        B.H = ig;
        try {
          return zi(Ra);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", V(), gt(t, e);
      },
      useTransition: function() {
        return H = "useTransition", V(), Re();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", V(), Kt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", V(), ys(), Cc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", V(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", V(), Es(t, e);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", V(), xo(t);
      }
    }, Fc = {
      readContext: function(t) {
        return Ie(), Zt(t);
      },
      use: function(t) {
        return K(), wu(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", K(), mt(), bd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", K(), mt(), Zt(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", K(), mt(), Mi(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", K(), mt(), nu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", K(), mt(), Hc(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", K(), mt(), Fl(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", K(), mt();
        var a = B.H;
        B.H = Fc;
        try {
          return Il(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", K(), mt();
        var c = B.H;
        B.H = Fc;
        try {
          return Ho(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", K(), mt(), Sd(t);
      },
      useState: function(t) {
        H = "useState", K(), mt();
        var e = B.H;
        B.H = Fc;
        try {
          return Rc(t);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", K(), mt();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", K(), mt(), Yo(t, e);
      },
      useTransition: function() {
        return H = "useTransition", K(), mt(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", K(), mt(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", K(), mt(), Os();
      },
      useFormState: function(t, e) {
        return H = "useFormState", K(), mt(), Ua(t, e);
      },
      useActionState: function(t, e) {
        return H = "useActionState", K(), mt(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", K(), mt(), Oi(t);
      },
      useMemoCache: function(t) {
        return K(), Ma(t);
      },
      useHostTransitionStatus: Wu,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", mt(), Td();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", K(), mt(), zs(t);
      }
    }, ic = {
      readContext: function(t) {
        return Ie(), Zt(t);
      },
      use: function(t) {
        return K(), wu(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", K(), V(), Dn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", K(), V(), Zt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", K(), V(), tl(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", K(), V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", K(), V(), tl(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", K(), V(), tl(4, Gn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", K(), V();
        var a = B.H;
        B.H = ic;
        try {
          return be(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", K(), V();
        var c = B.H;
        B.H = ic;
        try {
          return Ai(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", K(), V(), Kt().memoizedState;
      },
      useState: function() {
        H = "useState", K(), V();
        var t = B.H;
        B.H = ic;
        try {
          return Ai(Ra);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", K(), V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", K(), V(), uu(t, e);
      },
      useTransition: function() {
        return H = "useTransition", K(), V(), qp();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", K(), V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", K(), V(), Kt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", K(), V(), _c(t);
      },
      useActionState: function(t) {
        return H = "useActionState", K(), V(), _c(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", K(), V(), Ts(t, e);
      },
      useMemoCache: function(t) {
        return K(), Ma(t);
      },
      useHostTransitionStatus: Wu,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", K(), V(), xo(t);
      }
    }, ig = {
      readContext: function(t) {
        return Ie(), Zt(t);
      },
      use: function(t) {
        return K(), wu(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", K(), V(), Dn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", K(), V(), Zt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", K(), V(), tl(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", K(), V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", K(), V(), tl(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", K(), V(), tl(4, Gn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", K(), V();
        var a = B.H;
        B.H = ic;
        try {
          return be(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", K(), V();
        var c = B.H;
        B.H = ic;
        try {
          return zi(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", K(), V(), Kt().memoizedState;
      },
      useState: function() {
        H = "useState", K(), V();
        var t = B.H;
        B.H = ic;
        try {
          return zi(Ra);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", K(), V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", K(), V(), gt(t, e);
      },
      useTransition: function() {
        return H = "useTransition", K(), V(), Re();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", K(), V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", K(), V(), Kt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", K(), V(), Cc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", K(), V(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", K(), V(), Es(t, e);
      },
      useMemoCache: function(t) {
        return K(), Ma(t);
      },
      useHostTransitionStatus: Wu,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", K(), V(), xo(t);
      }
    };
    var vb = {}, gb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set();
    Object.freeze(vb);
    var x1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var c = jl(t), o = Pe(c);
        o.payload = e, a != null && (Ci(a), o.callback = a), e = tu(t, o, c), e !== null && (Fn(c, "this.setState()", t), ht(e, t, c), en(e, t, c));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var c = jl(t), o = Pe(c);
        o.tag = fb, o.payload = e, a != null && (Ci(a), o.callback = a), e = tu(t, o, c), e !== null && (Fn(c, "this.replaceState()", t), ht(e, t, c), en(e, t, c));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = jl(t), c = Pe(a);
        c.tag = sb, e != null && (Ci(e), c.callback = e), e = tu(t, c, a), e !== null && (Fn(a, "this.forceUpdate()", t), ht(e, t, a), en(e, t, a));
      }
    }, $h = null, q1 = null, Y1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Sl = !1, Rb = {}, Ub = {}, _b = {}, Cb = {}, Wh = !1, Hb = {}, og = {}, j1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Bb = !1, Nb = null;
    Nb = /* @__PURE__ */ new Set();
    var co = !1, bl = !1, G1 = !1, xb = typeof WeakSet == "function" ? WeakSet : Set, Vl = null, kh = null, Fh = null, Tl = null, on = !1, oc = null, _l = !1, Z0 = 8192, qT = {
      getCacheForType: function(t) {
        var e = Zt(pl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return Zt(pl).controller.signal;
      },
      getOwner: function() {
        return pa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var L0 = Symbol.for;
      L0("selector.component"), L0("selector.has_pseudo_class"), L0("selector.role"), L0("selector.test_id"), L0("selector.text");
    }
    var YT = [], jT = typeof WeakMap == "function" ? WeakMap : Map, Zl = 0, Cl = 2, Xn = 4, io = 0, w0 = 1, zr = 2, fg = 3, Hf = 4, sg = 6, qb = 5, Xt = Zl, he = null, Rt = null, Dt = 0, fn = 0, rg = 1, Dr = 2, J0 = 3, Yb = 4, X1 = 5, K0 = 6, dg = 7, Q1 = 8, Or = 9, ie = fn, Qn = null, Bf = !1, Ih = !1, V1 = !1, Ic = 0, Ye = io, Nf = 0, xf = 0, Z1 = 0, sn = 0, Mr = 0, $0 = null, Za = null, hg = !1, mg = 0, jb = 0, Gb = 300, yg = 1 / 0, Xb = 500, W0 = null, Fe = null, qf = null, pg = 0, L1 = 1, w1 = 2, Qb = 3, Yf = 0, Vb = 1, Zb = 2, Lb = 3, wb = 4, vg = 5, El = 0, jf = null, Ph = null, fc = 0, J1 = 0, K1 = -0, $1 = null, Jb = null, Kb = null, sc = pg, $b = null, GT = 50, k0 = 0, W1 = null, k1 = !1, gg = !1, XT = 50, Rr = 0, F0 = null, tm = !1, Sg = null, Wb = !1, kb = /* @__PURE__ */ new Set(), QT = {}, bg = null, em = null, F1 = !1, I1 = !1, Tg = !1, P1 = !1, Gf = 0, tS = {};
    (function() {
      for (var t = 0; t < r1.length; t++) {
        var e = r1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), yn(a, "on" + e);
      }
      yn(OS, "onAnimationEnd"), yn(MS, "onAnimationIteration"), yn(RS, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(pT, "onTransitionRun"), yn(vT, "onTransitionStart"), yn(gT, "onTransitionCancel"), yn(US, "onTransitionEnd");
    })(), ro("onMouseEnter", ["mouseout", "mouseover"]), ro("onMouseLeave", ["mouseout", "mouseover"]), ro("onPointerEnter", ["pointerout", "pointerover"]), ro("onPointerLeave", ["pointerout", "pointerover"]), dn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), dn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), dn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), dn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), dn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), dn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var I0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), eS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(I0)
    ), Eg = "_reactListening" + Math.random().toString(36).slice(2), Fb = !1, Ib = !1, Ag = !1, Pb = !1, zg = !1, Dg = !1, t2 = !1, Og = {}, VT = /\r\n?/g, ZT = /\u0000|\uFFFD/g, Ur = "http://www.w3.org/1999/xlink", lS = "http://www.w3.org/XML/1998/namespace", LT = "javascript:throw new Error('React form unexpectedly submitted.')", wT = "suppressHydrationWarning", _r = "&", Mg = "/&", P0 = "$", tp = "/$", Xf = "$?", Cr = "$~", lm = "$!", JT = "html", KT = "body", $T = "head", aS = "F!", e2 = "F", l2 = "loading", WT = "style", oo = 0, am = 1, Rg = 2, nS = null, uS = null, a2 = { dialog: !0, webview: !0 }, cS = null, ep = void 0, n2 = typeof setTimeout == "function" ? setTimeout : void 0, kT = typeof clearTimeout == "function" ? clearTimeout : void 0, Hr = -1, u2 = typeof Promise == "function" ? Promise : void 0, FT = typeof queueMicrotask == "function" ? queueMicrotask : typeof u2 < "u" ? function(t) {
      return u2.resolve(null).then(t).catch(nv);
    } : n2, iS = null, Br = 0, lp = 1, c2 = 2, i2 = 3, Hu = 4, Bu = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Set(), fo = wt.d;
    wt.d = {
      f: function() {
        var t = fo.f(), e = Na();
        return t || e;
      },
      r: function(t) {
        var e = rn(t);
        e !== null && e.tag === 5 && e.type === "form" ? jo(e) : fo.r(t);
      },
      D: function(t) {
        fo.D(t), Zy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        fo.C(t, e), Zy("preconnect", t, e);
      },
      L: function(t, e, a) {
        fo.L(t, e, a);
        var c = nm;
        if (c && t && e) {
          var o = 'link[rel="preload"][as="' + le(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + le(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + le(
            a.imageSizes
          ) + '"]')) : o += '[href="' + le(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = Qi(t);
              break;
            case "script":
              f = Vi(t);
          }
          Bu.has(f) || (t = Et(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Bu.set(f, t), c.querySelector(o) !== null || e === "style" && c.querySelector(
            Is(f)
          ) || e === "script" && c.querySelector(Ps(f)) || (e = c.createElement("link"), Te(e, "link", t), Xe(e), c.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        fo.m(t, e);
        var a = nm;
        if (a && t) {
          var c = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + le(c) + '"][href="' + le(t) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Vi(t);
          }
          if (!Bu.has(f) && (t = Et({ rel: "modulepreload", href: t }, e), Bu.set(f, t), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Ps(f)))
                  return;
            }
            c = a.createElement("link"), Te(c, "link", t), Xe(c), a.head.appendChild(c);
          }
        }
      },
      X: function(t, e) {
        fo.X(t, e);
        var a = nm;
        if (a && t) {
          var c = Ka(a).hoistableScripts, o = Vi(t), f = c.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Et({ src: t, async: !0 }, e), (e = Bu.get(o)) && Jy(t, e), f = a.createElement("script"), Xe(f), Te(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(t, e, a) {
        fo.S(t, e, a);
        var c = nm;
        if (c && t) {
          var o = Ka(c).hoistableStyles, f = Qi(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Br, preload: null };
            if (d = c.querySelector(
              Is(f)
            ))
              h.loading = lp | Hu;
            else {
              t = Et(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Bu.get(f)) && wy(t, a);
              var y = d = c.createElement("link");
              Xe(y), Te(y, "link", t), y._p = new Promise(function(p, A) {
                y.onload = p, y.onerror = A;
              }), y.addEventListener("load", function() {
                h.loading |= lp;
              }), y.addEventListener("error", function() {
                h.loading |= c2;
              }), h.loading |= Hu, uf(d, e, c);
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
        fo.M(t, e);
        var a = nm;
        if (a && t) {
          var c = Ka(a).hoistableScripts, o = Vi(t), f = c.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Et({ src: t, async: !0, type: "module" }, e), (e = Bu.get(o)) && Jy(t, e), f = a.createElement("script"), Xe(f), Te(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var nm = typeof document > "u" ? null : document, Ug = null, IT = 6e4, PT = 800, tE = 500, oS = 0, fS = null, _g = null, Nr = Pg, ap = {
      $$typeof: Nn,
      Provider: null,
      Consumer: null,
      _currentValue: Nr,
      _currentValue2: Nr,
      _threadCount: 0
    }, f2 = "%c%s%c", s2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", r2 = "", Cg = " ", eE = Function.prototype.bind, d2 = !1, h2 = null, m2 = null, y2 = null, p2 = null, v2 = null, g2 = null, S2 = null, b2 = null, T2 = null, E2 = null;
    h2 = function(t, e, a, c) {
      e = L(t, e), e !== null && (a = Pt(e.memoizedState, a, 0, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Et({}, t.memoizedProps), a = ql(t, 2), a !== null && ht(a, t, 2));
    }, m2 = function(t, e, a) {
      e = L(t, e), e !== null && (a = te(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Et({}, t.memoizedProps), a = ql(t, 2), a !== null && ht(a, t, 2));
    }, y2 = function(t, e, a, c) {
      e = L(t, e), e !== null && (a = Ft(e.memoizedState, a, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Et({}, t.memoizedProps), a = ql(t, 2), a !== null && ht(a, t, 2));
    }, p2 = function(t, e, a) {
      t.pendingProps = Pt(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ql(t, 2), e !== null && ht(e, t, 2);
    }, v2 = function(t, e) {
      t.pendingProps = te(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ql(t, 2), e !== null && ht(e, t, 2);
    }, g2 = function(t, e, a) {
      t.pendingProps = Ft(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ql(t, 2), e !== null && ht(e, t, 2);
    }, S2 = function(t) {
      var e = ql(t, 2);
      e !== null && ht(e, t, 2);
    }, b2 = function(t) {
      var e = Yr(), a = ql(t, e);
      a !== null && ht(a, t, e);
    }, T2 = function(t) {
      Al = t;
    }, E2 = function(t) {
      ge = t;
    };
    var Hg = !0, Bg = null, sS = !1, Qf = null, Vf = null, Zf = null, np = /* @__PURE__ */ new Map(), up = /* @__PURE__ */ new Map(), Lf = [], lE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Ng = null;
    if (Bn.prototype.render = l0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : me(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var c = e.current, o = jl(c);
      rh(c, o, a, e, null, null);
    }, Bn.prototype.unmount = l0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (Xt & (Cl | Xn)) !== Zl && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), rh(t.current, 2, null, t, null, null), Na(), e[nc] = null;
      }
    }, Bn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = dp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < Lf.length && e !== 0 && e < Lf[a].priority; a++) ;
        Lf.splice(a, 0, t), a === 0 && e0(t);
      }
    }, (function() {
      var t = nr.version;
      if (t !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), wt.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = ga(e), t = t !== null ? Nl(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.2.3"
      };
      return t.overrideHookState = h2, t.overrideHookStateDeletePath = m2, t.overrideHookStateRenamePath = y2, t.overrideProps = p2, t.overridePropsDeletePath = v2, t.overridePropsRenamePath = g2, t.scheduleUpdate = S2, t.scheduleRetry = b2, t.setErrorHandler = T2, t.setSuspenseHandler = E2, t.scheduleRefresh = Me, t.scheduleRoot = Oe, t.setRefreshHandler = Bl, t.getCurrentFiber = ue, im(t);
    })() && $c && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var A2 = window.location.protocol;
      /^(https?|file):$/.test(A2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (A2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    fp.createRoot = function(t, e) {
      if (!me(t))
        throw Error("Target container is not a DOM element.");
      a0(t);
      var a = !1, c = "", o = zd, f = Dd, d = Fm;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === un && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (c = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = lr(
        t,
        1,
        !1,
        null,
        null,
        a,
        c,
        null,
        o,
        f,
        d,
        Rv
      ), t[nc] = e.current, Xc(t), new l0(e);
    }, fp.hydrateRoot = function(t, e, a) {
      if (!me(t))
        throw Error("Target container is not a DOM element.");
      a0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = zd, d = Dd, h = Fm, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = lr(
        t,
        1,
        !0,
        e,
        a ?? null,
        c,
        o,
        y,
        f,
        d,
        h,
        Rv
      ), e.context = zv(null), a = e.current, c = jl(a), c = ei(c), o = Pe(c), o.callback = null, tu(a, o, c), Fn(c, "hydrateRoot()", null), a = c, e.current.lanes = a, rc(e, a), da(e), t[nc] = e.current, Xc(t), new Bn(e);
    }, fp.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), fp;
}
var H2;
function dE() {
  if (H2) return qg.exports;
  H2 = 1;
  function L() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (Pt) {
        console.error(Pt);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (L(), qg.exports = sE()) : qg.exports = rE(), qg.exports;
}
var hE = dE();
const mE = "_container_3e8r5_1", yE = "_counter_3e8r5_10", pE = "_button_3e8r5_17", vE = "_count_3e8r5_10", gE = "_label_3e8r5_40", um = {
  container: mE,
  counter: yE,
  button: pE,
  count: vE,
  label: gE
};
function B2({ initialCount: L = 0 }) {
  const [Pt, Ft] = nE(L);
  return /* @__PURE__ */ wf.jsx("div", { className: um.container, children: /* @__PURE__ */ wf.jsxs("div", { className: um.counter, children: [
    /* @__PURE__ */ wf.jsx("div", { className: um.label, children: "React Counter:" }),
    /* @__PURE__ */ wf.jsx(
      "button",
      {
        className: um.button,
        onClick: () => Ft(Pt - 1),
        children: "-"
      }
    ),
    /* @__PURE__ */ wf.jsx("span", { className: um.count, children: Pt }),
    /* @__PURE__ */ wf.jsx(
      "button",
      {
        className: um.button,
        onClick: () => Ft(Pt + 1),
        children: "+"
      }
    )
  ] }) });
}
class SE extends HTMLElement {
  constructor() {
    super(...arguments), this._root = null;
  }
  connectedCallback() {
    const Pt = document.createElement("div");
    this.appendChild(Pt);
    const Ft = parseInt(this.getAttribute("count") || "0", 10) || 0;
    this._root = hE.createRoot(Pt), this._root.render(/* @__PURE__ */ wf.jsx(B2, { initialCount: Ft }));
  }
  disconnectedCallback() {
    this._root && this._root.unmount();
  }
  static get observedAttributes() {
    return ["count"];
  }
  attributeChangedCallback(Pt, Ft, x) {
    if (Pt === "count" && this._root) {
      const te = parseInt(x || "0", 10) || 0;
      this._root.render(/* @__PURE__ */ wf.jsx(B2, { initialCount: te }));
    }
  }
}
customElements.define("react-counter", SE);
export {
  SE as default
};
