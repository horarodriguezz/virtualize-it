import U, { useState as yr, useCallback as Rr, useEffect as ne } from "react";
var pe = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Er() {
  if ($e)
    return K;
  $e = 1;
  var c = U, a = Symbol.for("react.element"), d = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, o = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(E, p, _) {
    var v, b = {}, S = null, P = null;
    _ !== void 0 && (S = "" + _), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (P = p.ref);
    for (v in p)
      u.call(p, v) && !l.hasOwnProperty(v) && (b[v] = p[v]);
    if (E && E.defaultProps)
      for (v in p = E.defaultProps, p)
        b[v] === void 0 && (b[v] = p[v]);
    return { $$typeof: a, type: E, key: S, ref: P, props: b, _owner: o.current };
  }
  return K.Fragment = d, K.jsx = y, K.jsxs = y, K;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function _r() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var c = U, a = Symbol.for("react.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), E = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), M = Symbol.iterator, I = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[I];
      return typeof r == "function" ? r : null;
    }
    var x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var h = t.map(function(s) {
          return String(s);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var D = !1, A = !1, F = !1, z = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function Z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === l || L || e === o || e === _ || e === v || z || e === P || D || A || F || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === b || e.$$typeof === y || e.$$typeof === E || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function G(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case d:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case _:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return G(r) + ".Consumer";
          case y:
            var t = e;
            return G(t._context) + ".Provider";
          case p:
            return ie(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case S: {
            var f = e, h = f._payload, s = f._init;
            try {
              return C(s(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, V = 0, ye, Re, Ee, _e, be, we, Se;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function He() {
      {
        if (V === 0) {
          ye = console.log, Re = console.info, Ee = console.warn, _e = console.error, be = console.group, we = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        V++;
      }
    }
    function Be() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: ye
            }),
            info: W({}, e, {
              value: Re
            }),
            warn: W({}, e, {
              value: Ee
            }),
            error: W({}, e, {
              value: _e
            }),
            group: W({}, e, {
              value: be
            }),
            groupCollapsed: W({}, e, {
              value: we
            }),
            groupEnd: W({}, e, {
              value: Se
            })
          });
        }
        V < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = x.ReactCurrentDispatcher, se;
    function Q(e, r, t) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            se = n && n[1] || "";
          }
        return `
` + se + e;
      }
    }
    var le = !1, ee;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ge();
    }
    function xe(e, r) {
      if (!e || le)
        return "";
      {
        var t = ee.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      le = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = oe.current, oe.current = null, He();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (T) {
              n = T;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var i = T.stack.split(`
`), w = n.stack.split(`
`), m = i.length - 1, R = w.length - 1; m >= 1 && R >= 0 && i[m] !== w[R]; )
            R--;
          for (; m >= 1 && R >= 0; m--, R--)
            if (i[m] !== w[R]) {
              if (m !== 1 || R !== 1)
                do
                  if (m--, R--, R < 0 || i[m] !== w[R]) {
                    var O = `
` + i[m].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, O), O;
                  }
                while (m >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        le = !1, oe.current = h, Be(), Error.prepareStackTrace = f;
      }
      var B = e ? e.displayName || e.name : "", Y = B ? Q(B) : "";
      return typeof e == "function" && ee.set(e, Y), Y;
    }
    function Je(e, r, t) {
      return xe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function re(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, qe(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case _:
          return Q("Suspense");
        case v:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Je(e.render);
          case b:
            return re(e.type, r, t);
          case S: {
            var n = e, f = n._payload, h = n._init;
            try {
              return re(h(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Ce = {}, Oe = x.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, f) {
      {
        var h = Function.call.bind(J);
        for (var s in e)
          if (h(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              i = m;
            }
            i && !(i instanceof Error) && (te(f), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), te(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, te(f), g("Failed %s type: %s", t, i.message), te(null));
          }
      }
    }
    var Xe = Array.isArray;
    function ce(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Pe(e) {
      if (Qe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), je(e);
    }
    var q = x.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, De, ue;
    ue = {};
    function rr(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = C(q.current.type);
        ue[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(q.current.type), e.ref), ue[t] = !0);
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          ke || (ke = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          De || (De = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, f, h, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function sr(e, r, t, n, f) {
      {
        var h, s = {}, i = null, w = null;
        t !== void 0 && (Pe(t), i = "" + t), tr(r) && (Pe(r.key), i = "" + r.key), rr(r) && (w = r.ref, nr(r, f));
        for (h in r)
          J.call(r, h) && !er.hasOwnProperty(h) && (s[h] = r[h]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (h in m)
            s[h] === void 0 && (s[h] = m[h]);
        }
        if (i || w) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ar(s, R), w && ir(s, R);
        }
        return or(e, i, w, f, n, q.current, s);
      }
    }
    var fe = x.ReactCurrentOwner, Ae = x.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(t);
      } else
        Ae.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Fe() {
      {
        if (fe.current) {
          var e = C(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var Le = {};
    function cr(e) {
      {
        var r = Fe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function We(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Le[t])
          return;
        Le[t] = !0;
        var n = "";
        e && e._owner && e._owner !== fe.current && (n = " It was passed a child from " + C(e._owner.type) + "."), H(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), H(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ve(n) && We(n, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = $(e);
          if (typeof f == "function" && f !== e.entries)
            for (var h = f.call(e), s; !(s = h.next()).done; )
              ve(s.value) && We(s.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !de) {
          de = !0;
          var f = C(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            H(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var Ie = {};
    function Ve(e, r, t, n, f, h) {
      {
        var s = Z(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = lr();
          w ? i += w : i += Fe();
          var m;
          e === null ? m = "null" : ce(e) ? m = "array" : e !== void 0 && e.$$typeof === a ? (m = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, i);
        }
        var R = sr(e, r, t, f, h);
        if (R == null)
          return R;
        if (s) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (ce(O)) {
                for (var B = 0; B < O.length; B++)
                  Me(O[B], e);
                Object.freeze && Object.freeze(O);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(O, e);
        }
        if (J.call(r, "key")) {
          var Y = C(e), T = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), he = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[Y + he]) {
            var gr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, Y, gr, Y), Ie[Y + he] = !0;
          }
        }
        return e === u ? fr(R) : ur(R), R;
      }
    }
    function dr(e, r, t) {
      return Ve(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Ve(e, r, t, !1);
    }
    var hr = vr, pr = dr;
    X.Fragment = u, X.jsx = hr, X.jsxs = pr;
  }()), X;
}
process.env.NODE_ENV === "production" ? pe.exports = Er() : pe.exports = _r();
var j = pe.exports;
const br = {
  width: 0,
  height: 0,
  scrollTop: 0,
  scrollLeft: 0
};
function ge() {
  const c = U.useRef(null), a = U.useRef(null), [d, u] = yr(br), o = Rr(() => {
    a != null && a.current && cancelAnimationFrame(a.current), a.current = requestAnimationFrame(() => {
      c.current && u({
        width: c.current.offsetWidth,
        height: c.current.offsetHeight,
        scrollTop: c.current.scrollTop,
        scrollLeft: c.current.scrollLeft
      });
    });
  }, []);
  return ne(() => {
    const l = c.current;
    return l == null || l.addEventListener("resize", o), () => {
      l == null || l.removeEventListener("resize", o);
    };
  }, [o]), ne(() => {
    const l = c.current;
    return l == null || l.addEventListener("scroll", o), () => {
      l == null || l.removeEventListener("scroll", o);
    };
  }, [o]), ne(() => {
    o();
  }, [o]), [d, c];
}
function wr(c, a = 0, d) {
  const u = [];
  let o = 0;
  return c.forEach((l, y) => {
    const E = d(y);
    u.push(o), o += E + a;
  }), u;
}
function Ne(c, a) {
  let d = 0, u = a.length - 1;
  for (; d < u; ) {
    const o = Math.floor((d + u) / 2);
    a[o] <= c ? d = o + 1 : u = o;
  }
  return d;
}
function Ye(c) {
  const { elementRef: a, orientation: d, reverse: u } = c;
  ne(() => {
    const o = d === "vertical";
    a.current && o && u && (a.current.scrollTop = a.current.scrollHeight), a.current && !o && u && (a.current.scrollLeft = a.current.scrollWidth);
  }, []);
}
function ae(c) {
  const { children: a, isVertical: d, offset: u } = c;
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      style: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        transform: d ? `translateY(${u}px)` : `translateX(${u}px)`
      },
      className: "list-root__item",
      children: a
    }
  );
}
function me(c) {
  const { width: a, height: d } = c;
  return {
    width: a ?? "100%",
    height: d ?? "100%",
    overflow: "auto"
  };
}
function Ue(c) {
  const { isVertical: a, totalSize: d } = c;
  return {
    height: a ? d : "100%",
    width: a ? "100%" : d,
    flexDirection: a ? "column" : "row",
    display: "flex",
    position: "relative",
    overflow: "hidden"
  };
}
function Sr(c) {
  const {
    children: a,
    width: d,
    height: u,
    gap: o,
    overscanCount: l = 3,
    orientation: y = "vertical",
    reverse: E = !1,
    getItemSize: p
  } = c, _ = y === "vertical", v = wr(a, o, p), [
    { scrollTop: b, scrollLeft: S, width: P, height: M },
    I
  ] = ge();
  Ye({ elementRef: I, orientation: y, reverse: E });
  const $ = _ ? M : P, x = _ ? b : S, g = v[v.length - 1] + p(v.length - 1), k = Ne(x, v), D = Math.max(0, k - l), A = Ne(x + $, v), F = Math.min(
    a.length - 1,
    A + l
  );
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      style: me({ width: d, height: u }),
      className: "list-root",
      ref: I,
      children: /* @__PURE__ */ j.jsx(
        "div",
        {
          style: Ue({ isVertical: _, totalSize: g }),
          className: "list-root__wrapper",
          children: a.slice(D, F + 1).map((z, L) => /* @__PURE__ */ j.jsx(
            ae,
            {
              isVertical: _,
              offset: v[D + L],
              children: z
            },
            L
          ))
        }
      )
    }
  );
}
const jr = U.memo(Sr);
function Tr(c) {
  const { scrollDistance: a, listSize: d, itemSize: u, overscan: o, totalElements: l } = c, y = Math.max(0, Math.floor(a / u) - o), E = Math.min(
    l - 1,
    y + Math.ceil(d / u) + o
  );
  return { start: y, end: E };
}
function xr(c) {
  const {
    children: a,
    width: d,
    height: u,
    overscanCount: o = 3,
    totalElements: l,
    itemSize: y,
    gap: E = 0,
    orientation: p = "vertical",
    reverse: _ = !1
  } = c, v = p === "vertical", [b, S] = ge(), {
    height: P,
    width: M,
    scrollTop: I,
    scrollLeft: $
  } = b;
  Ye({ elementRef: S, orientation: p, reverse: _ });
  const x = v ? P : M, g = v ? I : $, k = y + E, D = l * y + (l - 1) * E, { start: A, end: F } = Tr({
    itemSize: k,
    listSize: x,
    overscan: o,
    scrollDistance: g,
    totalElements: l
  });
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      style: me({ width: d, height: u }),
      className: "list-root",
      ref: S,
      children: /* @__PURE__ */ j.jsx(
        "div",
        {
          style: Ue({ isVertical: v, totalSize: D }),
          className: "list-root__wrapper",
          children: a.slice(A, F + 1).map((z, L) => /* @__PURE__ */ j.jsx(
            ae,
            {
              isVertical: v,
              offset: (A + L) * k,
              children: z
            },
            L
          ))
        }
      )
    }
  );
}
const Pr = U.memo(xr);
function Cr(c) {
  const {
    width: a,
    height: d,
    rowHeight: u,
    columnWidth: o,
    totalRows: l,
    totalColumns: y = 0,
    rowGap: E = 0,
    columnGap: p = 0,
    rowOverscanCount: _ = 3,
    columnOverscanCount: v = 1,
    children: b
  } = c, [
    { width: S, height: P, scrollLeft: M, scrollTop: I },
    $
  ] = ge(), x = l * u + (l - 1) * E, g = o && y ? y * o + (l - 1) * p : void 0, k = u + E, D = (o ?? 0) + p, A = Math.max(
    0,
    Math.floor(I / k) - _
  ), F = Math.max(
    0,
    Math.floor(M / D) - v
  ), z = Math.min(
    l - 1,
    A + Math.ceil(P / k) + _
  ), L = Math.min(
    y - 1,
    F + Math.ceil(S / D) + v
  );
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: $,
      style: me({ width: a, height: d }),
      className: "list-root",
      children: /* @__PURE__ */ j.jsx(
        "div",
        {
          style: {
            height: x,
            width: g ?? "100%",
            flexDirection: "column",
            display: "flex",
            position: "relative",
            overflow: "hidden"
          },
          className: "list-root__wrapper",
          children: b.slice(A, z + 1).map((N, Z) => {
            var G, C;
            const ie = ((G = N.props) == null ? void 0 : G.children) && Array.isArray(N.props.children);
            return /* @__PURE__ */ j.jsx(ae, { isVertical: !0, offset: (A + Z) * k, children: ie ? (C = N.props.children) == null ? void 0 : C.slice(F, L + 1).map((W, V) => /* @__PURE__ */ j.jsx(
              ae,
              {
                offset: (F + V) * D,
                children: W
              },
              V
            )) : N }, Z);
          })
        }
      )
    }
  );
}
const kr = U.memo(Cr);
export {
  jr as DynamicList,
  Pr as FixedList,
  kr as VirtualizedGrid
};
//# sourceMappingURL=index.es.js.map
