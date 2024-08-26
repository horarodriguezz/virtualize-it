import L, { useState as Rr, useCallback as br, useEffect as ae, useMemo as oe } from "react";
var ge = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function _r() {
  if (Ne)
    return K;
  Ne = 1;
  var l = L, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, i = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(b, h, _) {
    var g, p = {}, S = null, O = null;
    _ !== void 0 && (S = "" + _), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (O = h.ref);
    for (g in h)
      c.call(h, g) && !f.hasOwnProperty(g) && (p[g] = h[g]);
    if (b && b.defaultProps)
      for (g in h = b.defaultProps, h)
        p[g] === void 0 && (p[g] = h[g]);
    return { $$typeof: n, type: b, key: S, ref: O, props: p, _owner: i.current };
  }
  return K.Fragment = o, K.jsx = E, K.jsxs = E, K;
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
var Ye;
function wr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var l = L, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), b = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), I = Symbol.iterator, N = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[N];
      return typeof r == "function" ? r : null;
    }
    var x = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Y("error", e, t);
      }
    }
    function Y(e, r, t) {
      {
        var a = x.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var k = !1, A = !1, D = !1, W = !1, U = !1, F;
    F = Symbol.for("react.module.reference");
    function $(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === f || U || e === i || e === _ || e === g || W || e === O || k || A || D || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === p || e.$$typeof === E || e.$$typeof === b || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function Z(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case o:
          return "Portal";
        case f:
          return "Profiler";
        case i:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return Q(r) + ".Consumer";
          case E:
            var t = e;
            return Q(t._context) + ".Provider";
          case h:
            return Z(e, e.render, "ForwardRef");
          case p:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case S: {
            var d = e, v = d._payload, u = d._init;
            try {
              return C(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, z = 0, Re, be, _e, we, Se, Te, Ce;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Ge() {
      {
        if (z === 0) {
          Re = console.log, be = console.info, _e = console.warn, we = console.error, Se = console.group, Te = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
        z++;
      }
    }
    function Je() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: Re
            }),
            info: M({}, e, {
              value: be
            }),
            warn: M({}, e, {
              value: _e
            }),
            error: M({}, e, {
              value: we
            }),
            group: M({}, e, {
              value: Se
            }),
            groupCollapsed: M({}, e, {
              value: Te
            }),
            groupEnd: M({}, e, {
              value: Ce
            })
          });
        }
        z < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = x.ReactCurrentDispatcher, le;
    function ee(e, r, t) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            le = a && a[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ce = !1, re;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new qe();
    }
    function je(e, r) {
      if (!e || ce)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ce = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = se.current, se.current = null, Ge();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (T) {
              a = T;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var s = T.stack.split(`
`), w = a.stack.split(`
`), y = s.length - 1, R = w.length - 1; y >= 1 && R >= 0 && s[y] !== w[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (s[y] !== w[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || s[y] !== w[R]) {
                    var j = `
` + s[y].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, j), j;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ce = !1, se.current = v, Je(), Error.prepareStackTrace = d;
      }
      var G = e ? e.displayName || e.name : "", H = G ? ee(G) : "";
      return typeof e == "function" && re.set(e, H), H;
    }
    function Ke(e, r, t) {
      return je(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function te(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, Xe(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case _:
          return ee("Suspense");
        case g:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ke(e.render);
          case p:
            return te(e.type, r, t);
          case S: {
            var a = e, d = a._payload, v = a._init;
            try {
              return te(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Oe = {}, Pe = x.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Ze(e, r, t, a, d) {
      {
        var v = Function.call.bind(J);
        for (var u in e)
          if (v(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              s = y;
            }
            s && !(s instanceof Error) && (ne(d), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof s), ne(null)), s instanceof Error && !(s.message in Oe) && (Oe[s.message] = !0, ne(d), m("Failed %s type: %s", t, s.message), ne(null));
          }
      }
    }
    var Qe = Array.isArray;
    function ue(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Ae(e) {
      if (rr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ke(e);
    }
    var q = x.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Fe, fe;
    fe = {};
    function nr(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = C(q.current.type);
        fe[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(q.current.type), e.ref), fe[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          De || (De = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Fe || (Fe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, a, d, v, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function cr(e, r, t, a, d) {
      {
        var v, u = {}, s = null, w = null;
        t !== void 0 && (Ae(t), s = "" + t), ar(r) && (Ae(r.key), s = "" + r.key), nr(r) && (w = r.ref, or(r, d));
        for (v in r)
          J.call(r, v) && !tr.hasOwnProperty(v) && (u[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            u[v] === void 0 && (u[v] = y[v]);
        }
        if (s || w) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(u, R), w && sr(u, R);
        }
        return lr(e, s, w, d, a, q.current, u);
      }
    }
    var de = x.ReactCurrentOwner, Le = x.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(t);
      } else
        Le.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function We() {
      {
        if (de.current) {
          var e = C(de.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var Me = {};
    function fr(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (Me[t])
          return;
        Me[t] = !0;
        var a = "";
        e && e._owner && e._owner !== de.current && (a = " It was passed a child from " + C(e._owner.type) + "."), B(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), B(null);
      }
    }
    function Ve(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            he(a) && Ie(a, r);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = V(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), u; !(u = v.next()).done; )
              he(u.value) && Ie(u.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = C(r);
          Ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var d = C(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            B(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var $e = {};
    function ze(e, r, t, a, d, v) {
      {
        var u = $(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ur();
          w ? s += w : s += We();
          var y;
          e === null ? y = "null" : ue(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, s);
        }
        var R = cr(e, r, t, d, v);
        if (R == null)
          return R;
        if (u) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (ue(j)) {
                for (var G = 0; G < j.length; G++)
                  Ve(j[G], e);
                Object.freeze && Object.freeze(j);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(j, e);
        }
        if (J.call(r, "key")) {
          var H = C(e), T = Object.keys(r).filter(function(Er) {
            return Er !== "key";
          }), pe = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[H + pe]) {
            var yr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, H, yr, H), $e[H + pe] = !0;
          }
        }
        return e === c ? vr(R) : dr(R), R;
      }
    }
    function hr(e, r, t) {
      return ze(e, r, t, !0);
    }
    function pr(e, r, t) {
      return ze(e, r, t, !1);
    }
    var gr = pr, mr = hr;
    X.Fragment = c, X.jsx = gr, X.jsxs = mr;
  }()), X;
}
process.env.NODE_ENV === "production" ? ge.exports = _r() : ge.exports = wr();
var P = ge.exports;
const Sr = {
  width: 0,
  height: 0,
  scrollTop: 0,
  scrollLeft: 0
};
function me() {
  const l = L.useRef(null), n = L.useRef(null), [o, c] = Rr(Sr), i = br(() => {
    n != null && n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
      l.current && c({
        width: l.current.offsetWidth,
        height: l.current.offsetHeight,
        scrollTop: l.current.scrollTop,
        scrollLeft: l.current.scrollLeft
      });
    });
  }, []);
  return ae(() => {
    const f = l.current;
    return f == null || f.addEventListener("resize", i), () => {
      f == null || f.removeEventListener("resize", i);
    };
  }, [i]), ae(() => {
    const f = l.current;
    return f == null || f.addEventListener("scroll", i), () => {
      f == null || f.removeEventListener("scroll", i);
    };
  }, [i]), ae(() => {
    i();
  }, [i]), [o, l];
}
function Tr(l, n = 0, o) {
  const c = [];
  let i = 0;
  return l.forEach((f, E) => {
    const b = o(E);
    c.push(i), i += b + n;
  }), c;
}
function Ue(l, n) {
  let o = 0, c = n.length - 1;
  for (; o < c; ) {
    const i = Math.floor((o + c) / 2);
    n[i] <= l ? o = i + 1 : c = i;
  }
  return o;
}
function He(l) {
  const { elementRef: n, orientation: o, reverse: c } = l;
  ae(() => {
    const i = o === "vertical";
    n.current && i && c && (n.current.scrollTop = n.current.scrollHeight), n.current && !i && c && (n.current.scrollLeft = n.current.scrollWidth);
  }, []);
}
function Cr(l) {
  const { children: n, isVertical: o, offset: c } = l;
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      style: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        transform: o ? `translateY(${c}px)` : `translateX(${c}px)`
      },
      className: "list-root__item",
      children: n
    }
  );
}
const ie = L.memo(Cr);
function ye(l) {
  const { width: n, height: o } = l;
  return {
    width: n ?? "100%",
    height: o ?? "100%",
    overflow: "auto"
  };
}
function Be(l) {
  const { isVertical: n, totalSize: o } = l;
  return {
    height: n ? o : "100%",
    width: n ? "100%" : o,
    flexDirection: n ? "column" : "row",
    display: "flex",
    position: "relative",
    overflow: "hidden"
  };
}
function Ee(l) {
  if (!l)
    return [];
  const n = [];
  return l.forEach((o) => {
    o && (Array.isArray(o) ? o.forEach((c) => {
      c && n.push(c);
    }) : typeof o == "object" && "type" in o && o.type === L.Fragment ? L.Children.toArray(o.props.children).forEach((i) => {
      i && n.push(i);
    }) : n.push(o));
  }), n;
}
function xr(l) {
  const {
    children: n,
    width: o,
    height: c,
    gap: i,
    overscanCount: f = 3,
    orientation: E = "vertical",
    reverse: b = !1,
    getItemSize: h
  } = l, _ = oe(() => Ee(n), [n]);
  console.log("validChildren", _);
  const g = E === "vertical", p = oe(
    () => Tr(_, i, h),
    [_, i, h]
  ), [
    { scrollTop: S, scrollLeft: O, width: I, height: N },
    V
  ] = me();
  He({ elementRef: V, orientation: E, reverse: b });
  const x = g ? N : I, m = g ? S : O, Y = p[p.length - 1] + h(p.length - 1), k = Ue(m, p), A = Math.max(0, k - f), D = Ue(m + x, p), W = Math.min(
    _.length - 1,
    D + f
  );
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      style: ye({ width: o, height: c }),
      className: "list-root",
      ref: V,
      children: /* @__PURE__ */ P.jsx(
        "div",
        {
          style: Be({ isVertical: g, totalSize: Y }),
          className: "list-root__wrapper",
          children: _.slice(A, W + 1).map((U, F) => /* @__PURE__ */ P.jsx(
            ie,
            {
              isVertical: g,
              offset: p[A + F],
              children: U
            },
            F
          ))
        }
      )
    }
  );
}
const Ar = L.memo(xr);
function jr(l) {
  const { scrollDistance: n, listSize: o, itemSize: c, overscan: i, totalElements: f } = l, E = Math.max(0, Math.floor(n / c) - i), b = Math.min(
    f - 1,
    E + Math.ceil(o / c) + i
  );
  return { start: E, end: b };
}
function Or(l) {
  const {
    children: n,
    width: o,
    height: c,
    overscanCount: i = 3,
    totalElements: f,
    itemSize: E,
    gap: b = 0,
    orientation: h = "vertical",
    reverse: _ = !1
  } = l, g = oe(() => Ee(n), [n]), p = h === "vertical", [S, O] = me(), {
    height: I,
    width: N,
    scrollTop: V,
    scrollLeft: x
  } = S;
  He({ elementRef: O, orientation: h, reverse: _ });
  const m = p ? I : N, Y = p ? V : x, k = E + b, A = f * E + (f - 1) * b, { start: D, end: W } = jr({
    itemSize: k,
    listSize: m,
    overscan: i,
    scrollDistance: Y,
    totalElements: f
  });
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      style: ye({ width: o, height: c }),
      className: "list-root",
      ref: O,
      children: /* @__PURE__ */ P.jsx(
        "div",
        {
          style: Be({ isVertical: p, totalSize: A }),
          className: "list-root__wrapper",
          children: g.slice(D, W + 1).map((U, F) => /* @__PURE__ */ P.jsx(
            ie,
            {
              isVertical: p,
              offset: (D + F) * k,
              children: U
            },
            F
          ))
        }
      )
    }
  );
}
const Dr = L.memo(Or);
function Pr(l) {
  const {
    width: n,
    height: o,
    rowHeight: c,
    columnWidth: i,
    totalRows: f,
    totalColumns: E = 0,
    rowGap: b = 0,
    columnGap: h = 0,
    rowOverscanCount: _ = 3,
    columnOverscanCount: g = 1,
    children: p
  } = l, S = oe(() => Ee(p), [p]);
  console.log("validChildren", S);
  const [
    { width: O, height: I, scrollLeft: N, scrollTop: V },
    x
  ] = me(), m = f * c + (f - 1) * b, Y = i && E ? E * i + (f - 1) * h : void 0, k = c + b, A = (i ?? 0) + h, D = Math.max(
    0,
    Math.floor(V / k) - _
  ), W = Math.max(
    0,
    Math.floor(N / A) - g
  ), U = Math.min(
    f - 1,
    D + Math.ceil(I / k) + _
  ), F = Math.min(
    E - 1,
    W + Math.ceil(O / A) + g
  );
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      ref: x,
      style: ye({ width: n, height: o }),
      className: "list-root",
      children: /* @__PURE__ */ P.jsx(
        "div",
        {
          style: {
            height: m,
            width: Y ?? "100%",
            flexDirection: "column",
            display: "flex",
            position: "relative",
            overflow: "hidden"
          },
          className: "list-root__wrapper",
          children: S.slice(D, U + 1).map(($, Z) => {
            var C;
            const Q = $ && typeof $ == "object" && "props" in $ && Array.isArray($.props.children);
            return /* @__PURE__ */ P.jsx(ie, { isVertical: !0, offset: (D + Z) * k, children: Q ? (C = $.props.children) == null ? void 0 : C.slice(W, F + 1).map((M, z) => /* @__PURE__ */ P.jsx(
              ie,
              {
                offset: (W + z) * A,
                children: M
              },
              z
            )) : $ }, Z);
          })
        }
      )
    }
  );
}
const Fr = L.memo(Pr);
export {
  Ar as DynamicList,
  Dr as FixedList,
  Fr as VirtualizedGrid
};
//# sourceMappingURL=index.es.js.map
