(function() {
  const Vi = document.createElement("link").relList;
  if (Vi && Vi.supports && Vi.supports("modulepreload"))
    return;
  for (const jt of document.querySelectorAll('link[rel="modulepreload"]'))
    $i(jt);
  new MutationObserver((jt) => {
    for (const ge of jt)
      if (ge.type === "childList")
        for (const ys of ge.addedNodes)
          ys.tagName === "LINK" && ys.rel === "modulepreload" && $i(ys);
  }).observe(document, { childList: !0, subtree: !0 });
  function xn(jt) {
    const ge = {};
    return jt.integrity && (ge.integrity = jt.integrity), jt.referrerPolicy && (ge.referrerPolicy = jt.referrerPolicy), jt.crossOrigin === "use-credentials" ? ge.credentials = "include" : jt.crossOrigin === "anonymous" ? ge.credentials = "omit" : ge.credentials = "same-origin", ge;
  }
  function $i(jt) {
    if (jt.ep)
      return;
    jt.ep = !0;
    const ge = xn(jt);
    fetch(jt.href, ge);
  }
})();
(function(Ve) {
  typeof define == "function" && define.amd ? define(Ve) : Ve();
})(function() {
  (function(Ve) {
    typeof define == "function" && define.amd ? define(Ve) : Ve();
  })(function() {
    (function(Ve) {
      typeof define == "function" && define.amd ? define(Ve) : Ve();
    })(function() {
      var Ve = Object.defineProperty, Vi = (n, t, e) => t in n ? Ve(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, xn = (n, t, e) => Vi(n, typeof t != "symbol" ? t + "" : t, e);
      /**
      * @license
      * Copyright 2019 Google LLC
      * SPDX-License-Identifier: BSD-3-Clause
      */
      var $i;
      const jt = globalThis, ge = jt.ShadowRoot && (jt.ShadyCSS === void 0 || jt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ys = Symbol(), au = /* @__PURE__ */ new WeakMap();
      let hu = class {
        constructor(n, t, e) {
          if (this._$cssResult$ = !0, e !== ys) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          this.cssText = n, this.t = t;
        }
        get styleSheet() {
          let n = this.o;
          const t = this.t;
          if (ge && n === void 0) {
            const e = t !== void 0 && t.length === 1;
            e && (n = au.get(t)), n === void 0 && ((this.o = n = new CSSStyleSheet()).replaceSync(this.cssText), e && au.set(t, n));
          }
          return n;
        }
        toString() {
          return this.cssText;
        }
      };
      const fg = (n) => new hu(typeof n == "string" ? n : n + "", void 0, ys), ja = (n, ...t) => {
        const e = n.length === 1 ? n[0] : t.reduce((s, i, r) => s + ((o) => {
          if (o._$cssResult$ === !0) return o.cssText;
          if (typeof o == "number") return o;
          throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(i) + n[r + 1], n[0]);
        return new hu(e, n, ys);
      }, gg = (n, t) => {
        if (ge) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
        else for (const e of t) {
          const s = document.createElement("style"), i = jt.litNonce;
          i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
        }
      }, lu = ge ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
        let e = "";
        for (const s of t.cssRules) e += s.cssText;
        return fg(e);
      })(n) : n;
      /**
      * @license
      * Copyright 2017 Google LLC
      * SPDX-License-Identifier: BSD-3-Clause
      */
      const { is: pg, defineProperty: mg, getOwnPropertyDescriptor: _g, getOwnPropertyNames: yg, getOwnPropertySymbols: xg, getPrototypeOf: Eg } = Object, Vs = globalThis, uu = Vs.trustedTypes, Mg = uu ? uu.emptyScript : "", cu = Vs.reactiveElementPolyfillSupport, Zi = (n, t) => n, Wa = { toAttribute(n, t) {
        switch (t) {
          case Boolean:
            n = n ? Mg : null;
            break;
          case Object:
          case Array:
            n = n == null ? n : JSON.stringify(n);
        }
        return n;
      }, fromAttribute(n, t) {
        let e = n;
        switch (t) {
          case Boolean:
            e = n !== null;
            break;
          case Number:
            e = n === null ? null : Number(n);
            break;
          case Object:
          case Array:
            try {
              e = JSON.parse(n);
            } catch {
              e = null;
            }
        }
        return e;
      } }, du = (n, t) => !pg(n, t), fu = { attribute: !0, type: String, converter: Wa, reflect: !1, hasChanged: du };
      Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Vs.litPropertyMetadata ?? (Vs.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
      class $s extends HTMLElement {
        static addInitializer(t) {
          this._$Ei(), (this.l ?? (this.l = [])).push(t);
        }
        static get observedAttributes() {
          return this.finalize(), this._$Eh && [...this._$Eh.keys()];
        }
        static createProperty(t, e = fu) {
          if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
            const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
            i !== void 0 && mg(this.prototype, t, i);
          }
        }
        static getPropertyDescriptor(t, e, s) {
          const { get: i, set: r } = _g(this.prototype, t) ?? { get() {
            return this[e];
          }, set(o) {
            this[e] = o;
          } };
          return { get() {
            return i == null ? void 0 : i.call(this);
          }, set(o) {
            const a = i == null ? void 0 : i.call(this);
            r.call(this, o), this.requestUpdate(t, a, s);
          }, configurable: !0, enumerable: !0 };
        }
        static getPropertyOptions(t) {
          return this.elementProperties.get(t) ?? fu;
        }
        static _$Ei() {
          if (this.hasOwnProperty(Zi("elementProperties"))) return;
          const t = Eg(this);
          t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
        }
        static finalize() {
          if (this.hasOwnProperty(Zi("finalized"))) return;
          if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Zi("properties"))) {
            const e = this.properties, s = [...yg(e), ...xg(e)];
            for (const i of s) this.createProperty(i, e[i]);
          }
          const t = this[Symbol.metadata];
          if (t !== null) {
            const e = litPropertyMetadata.get(t);
            if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
          }
          this._$Eh = /* @__PURE__ */ new Map();
          for (const [e, s] of this.elementProperties) {
            const i = this._$Eu(e, s);
            i !== void 0 && this._$Eh.set(i, e);
          }
          this.elementStyles = this.finalizeStyles(this.styles);
        }
        static finalizeStyles(t) {
          const e = [];
          if (Array.isArray(t)) {
            const s = new Set(t.flat(1 / 0).reverse());
            for (const i of s) e.unshift(lu(i));
          } else t !== void 0 && e.push(lu(t));
          return e;
        }
        static _$Eu(t, e) {
          const s = e.attribute;
          return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
        }
        constructor() {
          super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
        }
        _$Ev() {
          var t;
          this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
        }
        addController(t) {
          var e;
          (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
        }
        removeController(t) {
          var e;
          (e = this._$EO) == null || e.delete(t);
        }
        _$E_() {
          const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
          for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
          t.size > 0 && (this._$Ep = t);
        }
        createRenderRoot() {
          const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
          return gg(t, this.constructor.elementStyles), t;
        }
        connectedCallback() {
          var t;
          this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
            var s;
            return (s = e.hostConnected) == null ? void 0 : s.call(e);
          });
        }
        enableUpdating(t) {
        }
        disconnectedCallback() {
          var t;
          (t = this._$EO) == null || t.forEach((e) => {
            var s;
            return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
          });
        }
        attributeChangedCallback(t, e, s) {
          this._$AK(t, s);
        }
        _$EC(t, e) {
          var s;
          const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
          if (r !== void 0 && i.reflect === !0) {
            const o = (((s = i.converter) == null ? void 0 : s.toAttribute) !== void 0 ? i.converter : Wa).toAttribute(e, i.type);
            this._$Em = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
          }
        }
        _$AK(t, e) {
          var s;
          const i = this.constructor, r = i._$Eh.get(t);
          if (r !== void 0 && this._$Em !== r) {
            const o = i.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((s = o.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? o.converter : Wa;
            this._$Em = r, this[r] = a.fromAttribute(e, o.type), this._$Em = null;
          }
        }
        requestUpdate(t, e, s) {
          if (t !== void 0) {
            if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? du)(this[t], e)) return;
            this.P(t, e, s);
          }
          this.isUpdatePending === !1 && (this._$ES = this._$ET());
        }
        P(t, e, s) {
          this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
        }
        async _$ET() {
          this.isUpdatePending = !0;
          try {
            await this._$ES;
          } catch (e) {
            Promise.reject(e);
          }
          const t = this.scheduleUpdate();
          return t != null && await t, !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var t;
          if (!this.isUpdatePending) return;
          if (!this.hasUpdated) {
            if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
              for (const [r, o] of this._$Ep) this[r] = o;
              this._$Ep = void 0;
            }
            const i = this.constructor.elementProperties;
            if (i.size > 0) for (const [r, o] of i) o.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], o);
          }
          let e = !1;
          const s = this._$AL;
          try {
            e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$EO) == null || t.forEach((i) => {
              var r;
              return (r = i.hostUpdate) == null ? void 0 : r.call(i);
            }), this.update(s)) : this._$EU();
          } catch (i) {
            throw e = !1, this._$EU(), i;
          }
          e && this._$AE(s);
        }
        willUpdate(t) {
        }
        _$AE(t) {
          var e;
          (e = this._$EO) == null || e.forEach((s) => {
            var i;
            return (i = s.hostUpdated) == null ? void 0 : i.call(s);
          }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
        }
        _$EU() {
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
          this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
        }
        updated(t) {
        }
        firstUpdated(t) {
        }
      }
      $s.elementStyles = [], $s.shadowRootOptions = { mode: "open" }, $s[Zi("elementProperties")] = /* @__PURE__ */ new Map(), $s[Zi("finalized")] = /* @__PURE__ */ new Map(), cu == null || cu({ ReactiveElement: $s }), (Vs.reactiveElementVersions ?? (Vs.reactiveElementVersions = [])).push("2.0.4");
      /**
      * @license
      * Copyright 2017 Google LLC
      * SPDX-License-Identifier: BSD-3-Clause
      */
      const oo = globalThis, ao = oo.trustedTypes, gu = ao ? ao.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, pu = "$lit$", Un = `lit$${Math.random().toFixed(9).slice(2)}$`, mu = "?" + Un, wg = `<${mu}>`, xs = document, Ki = () => xs.createComment(""), Hi = (n) => n === null || typeof n != "object" && typeof n != "function", Ya = Array.isArray, Sg = (n) => Ya(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", Xa = `[ 	
\f\r]`, Ji = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _u = /-->/g, yu = />/g, Es = RegExp(`>|${Xa}(?:([^\\s"'>=/]+)(${Xa}*=${Xa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), xu = /'/g, Eu = /"/g, Mu = /^(?:script|style|textarea|title)$/i, vg = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), Ms = vg(1), Zs = Symbol.for("lit-noChange"), Zt = Symbol.for("lit-nothing"), wu = /* @__PURE__ */ new WeakMap(), ws = xs.createTreeWalker(xs, 129);
      function Su(n, t) {
        if (!Ya(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return gu !== void 0 ? gu.createHTML(t) : t;
      }
      const Rg = (n, t) => {
        const e = n.length - 1, s = [];
        let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Ji;
        for (let a = 0; a < e; a++) {
          const h = n[a];
          let l, u, c = -1, d = 0;
          for (; d < h.length && (o.lastIndex = d, u = o.exec(h), u !== null); ) d = o.lastIndex, o === Ji ? u[1] === "!--" ? o = _u : u[1] !== void 0 ? o = yu : u[2] !== void 0 ? (Mu.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = Es) : u[3] !== void 0 && (o = Es) : o === Es ? u[0] === ">" ? (o = i ?? Ji, c = -1) : u[1] === void 0 ? c = -2 : (c = o.lastIndex - u[2].length, l = u[1], o = u[3] === void 0 ? Es : u[3] === '"' ? Eu : xu) : o === Eu || o === xu ? o = Es : o === _u || o === yu ? o = Ji : (o = Es, i = void 0);
          const p = o === Es && n[a + 1].startsWith("/>") ? " " : "";
          r += o === Ji ? h + wg : c >= 0 ? (s.push(l), h.slice(0, c) + pu + h.slice(c) + Un + p) : h + Un + (c === -2 ? a : p);
        }
        return [Su(n, r + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
      };
      class Qi {
        constructor({ strings: t, _$litType$: e }, s) {
          let i;
          this.parts = [];
          let r = 0, o = 0;
          const a = t.length - 1, h = this.parts, [l, u] = Rg(t, e);
          if (this.el = Qi.createElement(l, s), ws.currentNode = this.el.content, e === 2 || e === 3) {
            const c = this.el.content.firstChild;
            c.replaceWith(...c.childNodes);
          }
          for (; (i = ws.nextNode()) !== null && h.length < a; ) {
            if (i.nodeType === 1) {
              if (i.hasAttributes()) for (const c of i.getAttributeNames()) if (c.endsWith(pu)) {
                const d = u[o++], p = i.getAttribute(c).split(Un), f = /([.?@])?(.*)/.exec(d);
                h.push({ type: 1, index: r, name: f[2], strings: p, ctor: f[1] === "." ? bg : f[1] === "?" ? Tg : f[1] === "@" ? Ig : ho }), i.removeAttribute(c);
              } else c.startsWith(Un) && (h.push({ type: 6, index: r }), i.removeAttribute(c));
              if (Mu.test(i.tagName)) {
                const c = i.textContent.split(Un), d = c.length - 1;
                if (d > 0) {
                  i.textContent = ao ? ao.emptyScript : "";
                  for (let p = 0; p < d; p++) i.append(c[p], Ki()), ws.nextNode(), h.push({ type: 2, index: ++r });
                  i.append(c[d], Ki());
                }
              }
            } else if (i.nodeType === 8) if (i.data === mu) h.push({ type: 2, index: r });
            else {
              let c = -1;
              for (; (c = i.data.indexOf(Un, c + 1)) !== -1; ) h.push({ type: 7, index: r }), c += Un.length - 1;
            }
            r++;
          }
        }
        static createElement(t, e) {
          const s = xs.createElement("template");
          return s.innerHTML = t, s;
        }
      }
      function Ks(n, t, e = n, s) {
        var i, r;
        if (t === Zs) return t;
        let o = s !== void 0 ? (i = e._$Co) == null ? void 0 : i[s] : e._$Cl;
        const a = Hi(t) ? void 0 : t._$litDirective$;
        return (o == null ? void 0 : o.constructor) !== a && ((r = o == null ? void 0 : o._$AO) == null || r.call(o, !1), a === void 0 ? o = void 0 : (o = new a(n), o._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = o : e._$Cl = o), o !== void 0 && (t = Ks(n, o._$AS(n, t.values), o, s)), t;
      }
      let Cg = class {
        constructor(n, t) {
          this._$AV = [], this._$AN = void 0, this._$AD = n, this._$AM = t;
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(n) {
          const { el: { content: t }, parts: e } = this._$AD, s = ((n == null ? void 0 : n.creationScope) ?? xs).importNode(t, !0);
          ws.currentNode = s;
          let i = ws.nextNode(), r = 0, o = 0, a = e[0];
          for (; a !== void 0; ) {
            if (r === a.index) {
              let h;
              a.type === 2 ? h = new qa(i, i.nextSibling, this, n) : a.type === 1 ? h = new a.ctor(i, a.name, a.strings, this, n) : a.type === 6 && (h = new Ag(i, this, n)), this._$AV.push(h), a = e[++o];
            }
            r !== (a == null ? void 0 : a.index) && (i = ws.nextNode(), r++);
          }
          return ws.currentNode = xs, s;
        }
        p(n) {
          let t = 0;
          for (const e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(n, e, t), t += e.strings.length - 2) : e._$AI(n[t])), t++;
        }
      }, qa = class cg {
        get _$AU() {
          var t;
          return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
        }
        constructor(t, e, s, i) {
          this.type = 2, this._$AH = Zt, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
        }
        get parentNode() {
          let t = this._$AA.parentNode;
          const e = this._$AM;
          return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t, e = this) {
          t = Ks(this, t, e), Hi(t) ? t === Zt || t == null || t === "" ? (this._$AH !== Zt && this._$AR(), this._$AH = Zt) : t !== this._$AH && t !== Zs && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Sg(t) ? this.k(t) : this._(t);
        }
        O(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        T(t) {
          this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
        }
        _(t) {
          this._$AH !== Zt && Hi(this._$AH) ? this._$AA.nextSibling.data = t : this.T(xs.createTextNode(t)), this._$AH = t;
        }
        $(t) {
          var e;
          const { values: s, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = Qi.createElement(Su(i.h, i.h[0]), this.options)), i);
          if (((e = this._$AH) == null ? void 0 : e._$AD) === r) this._$AH.p(s);
          else {
            const o = new Cg(r, this), a = o.u(this.options);
            o.p(s), this.T(a), this._$AH = o;
          }
        }
        _$AC(t) {
          let e = wu.get(t.strings);
          return e === void 0 && wu.set(t.strings, e = new Qi(t)), e;
        }
        k(t) {
          Ya(this._$AH) || (this._$AH = [], this._$AR());
          const e = this._$AH;
          let s, i = 0;
          for (const r of t) i === e.length ? e.push(s = new cg(this.O(Ki()), this.O(Ki()), this, this.options)) : s = e[i], s._$AI(r), i++;
          i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
        }
        _$AR(t = this._$AA.nextSibling, e) {
          var s;
          for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
            const i = t.nextSibling;
            t.remove(), t = i;
          }
        }
        setConnected(t) {
          var e;
          this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
        }
      };
      class ho {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(t, e, s, i, r) {
          this.type = 1, this._$AH = Zt, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = Zt;
        }
        _$AI(t, e = this, s, i) {
          const r = this.strings;
          let o = !1;
          if (r === void 0) t = Ks(this, t, e, 0), o = !Hi(t) || t !== this._$AH && t !== Zs, o && (this._$AH = t);
          else {
            const a = t;
            let h, l;
            for (t = r[0], h = 0; h < r.length - 1; h++) l = Ks(this, a[s + h], e, h), l === Zs && (l = this._$AH[h]), o || (o = !Hi(l) || l !== this._$AH[h]), l === Zt ? t = Zt : t !== Zt && (t += (l ?? "") + r[h + 1]), this._$AH[h] = l;
          }
          o && !i && this.j(t);
        }
        j(t) {
          t === Zt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
        }
      }
      class bg extends ho {
        constructor() {
          super(...arguments), this.type = 3;
        }
        j(t) {
          this.element[this.name] = t === Zt ? void 0 : t;
        }
      }
      let Tg = class extends ho {
        constructor() {
          super(...arguments), this.type = 4;
        }
        j(n) {
          this.element.toggleAttribute(this.name, !!n && n !== Zt);
        }
      };
      class Ig extends ho {
        constructor(t, e, s, i, r) {
          super(t, e, s, i, r), this.type = 5;
        }
        _$AI(t, e = this) {
          if ((t = Ks(this, t, e, 0) ?? Zt) === Zs) return;
          const s = this._$AH, i = t === Zt && s !== Zt || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== Zt && (s === Zt || i);
          i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
        }
        handleEvent(t) {
          var e;
          typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
        }
      }
      class Ag {
        constructor(t, e, s) {
          this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          Ks(this, t);
        }
      }
      const vu = oo.litHtmlPolyfillSupport;
      vu == null || vu(Qi, qa), (oo.litHtmlVersions ?? (oo.litHtmlVersions = [])).push("3.2.1");
      const Pg = (n, t, e) => {
        const s = (e == null ? void 0 : e.renderBefore) ?? t;
        let i = s._$litPart$;
        if (i === void 0) {
          const r = (e == null ? void 0 : e.renderBefore) ?? null;
          s._$litPart$ = i = new qa(t.insertBefore(Ki(), r), r, void 0, e ?? {});
        }
        return i._$AI(n), i;
      };
      /**
      * @license
      * Copyright 2017 Google LLC
      * SPDX-License-Identifier: BSD-3-Clause
      */
      class Bn extends $s {
        constructor() {
          super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
        }
        createRenderRoot() {
          var t;
          const e = super.createRenderRoot();
          return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
        }
        update(t) {
          const e = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Pg(e, this.renderRoot, this.renderOptions);
        }
        connectedCallback() {
          var t;
          super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
        }
        render() {
          return Zs;
        }
      }
      Bn._$litElement$ = !0, Bn.finalized = !0, ($i = globalThis.litElementHydrateSupport) == null || $i.call(globalThis, { LitElement: Bn });
      const Ru = globalThis.litElementPolyfillSupport;
      Ru == null || Ru({ LitElement: Bn }), (globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
      class En {
        constructor(t) {
          this.propagationStopped, this.defaultPrevented, this.type = t, this.target = null;
        }
        preventDefault() {
          this.defaultPrevented = !0;
        }
        stopPropagation() {
          this.propagationStopped = !0;
        }
      }
      const Hs = { PROPERTYCHANGE: "propertychange" };
      class lo {
        constructor() {
          this.disposed = !1;
        }
        dispose() {
          this.disposed || (this.disposed = !0, this.disposeInternal());
        }
        disposeInternal() {
        }
      }
      function Lg(n, t, e) {
        let s, i;
        e = e || jn;
        let r = 0, o = n.length, a = !1;
        for (; r < o; ) s = r + (o - r >> 1), i = +e(n[s], t), i < 0 ? r = s + 1 : (o = s, a = !i);
        return a ? r : ~r;
      }
      function jn(n, t) {
        return n > t ? 1 : n < t ? -1 : 0;
      }
      function Og(n, t) {
        return n < t ? 1 : n > t ? -1 : 0;
      }
      function Va(n, t, e) {
        if (n[0] <= t) return 0;
        const s = n.length;
        if (t <= n[s - 1]) return s - 1;
        if (typeof e == "function") {
          for (let i = 1; i < s; ++i) {
            const r = n[i];
            if (r === t) return i;
            if (r < t) return e(t, n[i - 1], r) > 0 ? i - 1 : i;
          }
          return s - 1;
        }
        if (e > 0) {
          for (let i = 1; i < s; ++i) if (n[i] < t) return i - 1;
          return s - 1;
        }
        if (e < 0) {
          for (let i = 1; i < s; ++i) if (n[i] <= t) return i;
          return s - 1;
        }
        for (let i = 1; i < s; ++i) {
          if (n[i] == t) return i;
          if (n[i] < t) return n[i - 1] - t < t - n[i] ? i - 1 : i;
        }
        return s - 1;
      }
      function Ng(n, t, e) {
        for (; t < e; ) {
          const s = n[t];
          n[t] = n[e], n[e] = s, ++t, --e;
        }
      }
      function pe(n, t) {
        const e = Array.isArray(t) ? t : [t], s = e.length;
        for (let i = 0; i < s; i++) n[n.length] = e[i];
      }
      function Wn(n, t) {
        const e = n.length;
        if (e !== t.length) return !1;
        for (let s = 0; s < e; s++) if (n[s] !== t[s]) return !1;
        return !0;
      }
      function Fg(n, t, e) {
        const s = t;
        return n.every(function(i, r) {
          if (r === 0) return !0;
          const o = s(n[r - 1], i);
          return !(o > 0 || o === 0);
        });
      }
      function tr() {
        return !0;
      }
      function uo() {
        return !1;
      }
      function Js() {
      }
      function Cu(n) {
        let t, e, s;
        return function() {
          const i = Array.prototype.slice.call(arguments);
          return (!e || this !== s || !Wn(i, e)) && (s = this, e = i, t = n.apply(this, arguments)), t;
        };
      }
      function kg(n) {
        function t() {
          let e;
          try {
            e = n();
          } catch (s) {
            return Promise.reject(s);
          }
          return e instanceof Promise ? e : Promise.resolve(e);
        }
        return t();
      }
      function er(n) {
        for (const t in n) delete n[t];
      }
      function Qs(n) {
        let t;
        for (t in n) return !1;
        return !t;
      }
      class co extends lo {
        constructor(t) {
          super(), this.eventTarget_ = t, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
        }
        addEventListener(t, e) {
          if (!t || !e) return;
          const s = this.listeners_ || (this.listeners_ = {}), i = s[t] || (s[t] = []);
          i.includes(e) || i.push(e);
        }
        dispatchEvent(t) {
          const e = typeof t == "string", s = e ? t : t.type, i = this.listeners_ && this.listeners_[s];
          if (!i) return;
          const r = e ? new En(t) : t;
          r.target || (r.target = this.eventTarget_ || this);
          const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
          s in o || (o[s] = 0, a[s] = 0), ++o[s];
          let h;
          for (let l = 0, u = i.length; l < u; ++l) if ("handleEvent" in i[l] ? h = i[l].handleEvent(r) : h = i[l].call(this, r), h === !1 || r.propagationStopped) {
            h = !1;
            break;
          }
          if (--o[s] === 0) {
            let l = a[s];
            for (delete a[s]; l--; ) this.removeEventListener(s, Js);
            delete o[s];
          }
          return h;
        }
        disposeInternal() {
          this.listeners_ && er(this.listeners_);
        }
        getListeners(t) {
          return this.listeners_ && this.listeners_[t] || void 0;
        }
        hasListener(t) {
          return this.listeners_ ? t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
        }
        removeEventListener(t, e) {
          if (!this.listeners_) return;
          const s = this.listeners_[t];
          if (!s) return;
          const i = s.indexOf(e);
          i !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (s[i] = Js, ++this.pendingRemovals_[t]) : (s.splice(i, 1), s.length === 0 && delete this.listeners_[t]));
        }
      }
      const lt = { CHANGE: "change", ERROR: "error", BLUR: "blur", CLEAR: "clear", CONTEXTMENU: "contextmenu", CLICK: "click", DBLCLICK: "dblclick", DRAGENTER: "dragenter", DRAGOVER: "dragover", DROP: "drop", FOCUS: "focus", KEYDOWN: "keydown", KEYPRESS: "keypress", LOAD: "load", RESIZE: "resize", TOUCHMOVE: "touchmove", WHEEL: "wheel" };
      function xt(n, t, e, s, i) {
        if (i) {
          const o = e;
          e = function() {
            n.removeEventListener(t, e), o.apply(s ?? this, arguments);
          };
        } else s && s !== n && (e = e.bind(s));
        const r = { target: n, type: t, listener: e };
        return n.addEventListener(t, e), r;
      }
      function fo(n, t, e, s) {
        return xt(n, t, e, s, !0);
      }
      function At(n) {
        n && n.target && (n.target.removeEventListener(n.type, n.listener), er(n));
      }
      class nr extends co {
        constructor() {
          super(), this.on = this.onInternal, this.once = this.onceInternal, this.un = this.unInternal, this.revision_ = 0;
        }
        changed() {
          ++this.revision_, this.dispatchEvent(lt.CHANGE);
        }
        getRevision() {
          return this.revision_;
        }
        onInternal(t, e) {
          if (Array.isArray(t)) {
            const s = t.length, i = new Array(s);
            for (let r = 0; r < s; ++r) i[r] = xt(this, t[r], e);
            return i;
          }
          return xt(this, t, e);
        }
        onceInternal(t, e) {
          let s;
          if (Array.isArray(t)) {
            const i = t.length;
            s = new Array(i);
            for (let r = 0; r < i; ++r) s[r] = fo(this, t[r], e);
          } else s = fo(this, t, e);
          return e.ol_key = s, s;
        }
        unInternal(t, e) {
          const s = e.ol_key;
          if (s) Dg(s);
          else if (Array.isArray(t)) for (let i = 0, r = t.length; i < r; ++i) this.removeEventListener(t[i], e);
          else this.removeEventListener(t, e);
        }
      }
      nr.prototype.on, nr.prototype.once, nr.prototype.un;
      function Dg(n) {
        if (Array.isArray(n)) for (let t = 0, e = n.length; t < e; ++t) At(n[t]);
        else At(n);
      }
      function dt() {
        throw new Error("Unimplemented abstract method.");
      }
      let Gg = 0;
      function vt(n) {
        return n.ol_uid || (n.ol_uid = String(++Gg));
      }
      class bu extends En {
        constructor(t, e, s) {
          super(t), this.key = e, this.oldValue = s;
        }
      }
      class $e extends nr {
        constructor(t) {
          super(), this.on, this.once, this.un, vt(this), this.values_ = null, t !== void 0 && this.setProperties(t);
        }
        get(t) {
          let e;
          return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
        }
        getKeys() {
          return this.values_ && Object.keys(this.values_) || [];
        }
        getProperties() {
          return this.values_ && Object.assign({}, this.values_) || {};
        }
        getPropertiesInternal() {
          return this.values_;
        }
        hasProperties() {
          return !!this.values_;
        }
        notify(t, e) {
          let s;
          s = `change:${t}`, this.hasListener(s) && this.dispatchEvent(new bu(s, t, e)), s = Hs.PROPERTYCHANGE, this.hasListener(s) && this.dispatchEvent(new bu(s, t, e));
        }
        addChangeListener(t, e) {
          this.addEventListener(`change:${t}`, e);
        }
        removeChangeListener(t, e) {
          this.removeEventListener(`change:${t}`, e);
        }
        set(t, e, s) {
          const i = this.values_ || (this.values_ = {});
          if (s) i[t] = e;
          else {
            const r = i[t];
            i[t] = e, r !== e && this.notify(t, r);
          }
        }
        setProperties(t, e) {
          for (const s in t) this.set(s, t[s], e);
        }
        applyProperties(t) {
          t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
        }
        unset(t, e) {
          if (this.values_ && t in this.values_) {
            const s = this.values_[t];
            delete this.values_[t], Qs(this.values_) && (this.values_ = null), e || this.notify(t, s);
          }
        }
      }
      const we = { ADD: "add", REMOVE: "remove" }, Tu = { LENGTH: "length" };
      class go extends En {
        constructor(t, e, s) {
          super(t), this.element = e, this.index = s;
        }
      }
      class on extends $e {
        constructor(t, e) {
          if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_) for (let s = 0, i = this.array_.length; s < i; ++s) this.assertUnique_(this.array_[s], s);
          this.updateLength_();
        }
        clear() {
          for (; this.getLength() > 0; ) this.pop();
        }
        extend(t) {
          for (let e = 0, s = t.length; e < s; ++e) this.push(t[e]);
          return this;
        }
        forEach(t) {
          const e = this.array_;
          for (let s = 0, i = e.length; s < i; ++s) t(e[s], s, e);
        }
        getArray() {
          return this.array_;
        }
        item(t) {
          return this.array_[t];
        }
        getLength() {
          return this.get(Tu.LENGTH);
        }
        insertAt(t, e) {
          if (t < 0 || t > this.getLength()) throw new Error("Index out of bounds: " + t);
          this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(new go(we.ADD, e, t));
        }
        pop() {
          return this.removeAt(this.getLength() - 1);
        }
        push(t) {
          this.unique_ && this.assertUnique_(t);
          const e = this.getLength();
          return this.insertAt(e, t), this.getLength();
        }
        remove(t) {
          const e = this.array_;
          for (let s = 0, i = e.length; s < i; ++s) if (e[s] === t) return this.removeAt(s);
        }
        removeAt(t) {
          if (t < 0 || t >= this.getLength()) return;
          const e = this.array_[t];
          return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new go(we.REMOVE, e, t)), e;
        }
        setAt(t, e) {
          const s = this.getLength();
          if (t >= s) {
            this.insertAt(t, e);
            return;
          }
          if (t < 0) throw new Error("Index out of bounds: " + t);
          this.unique_ && this.assertUnique_(e, t);
          const i = this.array_[t];
          this.array_[t] = e, this.dispatchEvent(new go(we.REMOVE, i, t)), this.dispatchEvent(new go(we.ADD, e, t));
        }
        updateLength_() {
          this.set(Tu.LENGTH, this.array_.length);
        }
        assertUnique_(t, e) {
          for (let s = 0, i = this.array_.length; s < i; ++s) if (this.array_[s] === t && s !== e) throw new Error("Duplicate item added to a unique collection");
        }
      }
      const Tt = { OPACITY: "opacity", VISIBLE: "visible", EXTENT: "extent", Z_INDEX: "zIndex", MAX_RESOLUTION: "maxResolution", MIN_RESOLUTION: "minResolution", MAX_ZOOM: "maxZoom", MIN_ZOOM: "minZoom", SOURCE: "source", MAP: "map" };
      function wt(n, t) {
        if (!n) throw new Error(t);
      }
      function kt(n, t, e) {
        return Math.min(Math.max(n, t), e);
      }
      function zg(n, t, e, s, i, r) {
        const o = i - e, a = r - s;
        if (o !== 0 || a !== 0) {
          const h = ((n - e) * o + (t - s) * a) / (o * o + a * a);
          h > 1 ? (e = i, s = r) : h > 0 && (e += o * h, s += a * h);
        }
        return Ss(n, t, e, s);
      }
      function Ss(n, t, e, s) {
        const i = e - n, r = s - t;
        return i * i + r * r;
      }
      function Ug(n) {
        const t = n.length;
        for (let s = 0; s < t; s++) {
          let i = s, r = Math.abs(n[s][s]);
          for (let a = s + 1; a < t; a++) {
            const h = Math.abs(n[a][s]);
            h > r && (r = h, i = a);
          }
          if (r === 0) return null;
          const o = n[i];
          n[i] = n[s], n[s] = o;
          for (let a = s + 1; a < t; a++) {
            const h = -n[a][s] / n[s][s];
            for (let l = s; l < t + 1; l++) s == l ? n[a][l] = 0 : n[a][l] += h * n[s][l];
          }
        }
        const e = new Array(t);
        for (let s = t - 1; s >= 0; s--) {
          e[s] = n[s][t] / n[s][s];
          for (let i = s - 1; i >= 0; i--) n[i][t] -= n[i][s] * e[s];
        }
        return e;
      }
      function Iu(n) {
        return n * 180 / Math.PI;
      }
      function Yn(n) {
        return n * Math.PI / 180;
      }
      function ti(n, t) {
        const e = n % t;
        return e * t < 0 ? e + t : e;
      }
      function Oe(n, t, e) {
        return n + e * (t - n);
      }
      function $a(n, t) {
        const e = Math.pow(10, t);
        return Math.round(n * e) / e;
      }
      function po(n, t) {
        return Math.floor($a(n, t));
      }
      function mo(n, t) {
        return Math.ceil($a(n, t));
      }
      function Za(n, t, e) {
        if (n >= t && n < e) return n;
        const s = e - t;
        return ((n - t) % s + s) % s + t;
      }
      class Au extends $e {
        constructor(t) {
          super(), this.on, this.once, this.un, this.background_ = t.background;
          const e = Object.assign({}, t);
          typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[Tt.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, wt(typeof e[Tt.OPACITY] == "number", "Layer opacity must be a number"), e[Tt.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[Tt.Z_INDEX] = t.zIndex, e[Tt.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[Tt.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[Tt.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[Tt.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
        }
        getBackground() {
          return this.background_;
        }
        getClassName() {
          return this.className_;
        }
        getLayerState(t) {
          const e = this.state_ || { layer: this, managed: t === void 0 ? !0 : t }, s = this.getZIndex();
          return e.opacity = kt(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = s === void 0 && !e.managed ? 1 / 0 : s, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
        }
        getLayersArray(t) {
          return dt();
        }
        getLayerStatesArray(t) {
          return dt();
        }
        getExtent() {
          return this.get(Tt.EXTENT);
        }
        getMaxResolution() {
          return this.get(Tt.MAX_RESOLUTION);
        }
        getMinResolution() {
          return this.get(Tt.MIN_RESOLUTION);
        }
        getMinZoom() {
          return this.get(Tt.MIN_ZOOM);
        }
        getMaxZoom() {
          return this.get(Tt.MAX_ZOOM);
        }
        getOpacity() {
          return this.get(Tt.OPACITY);
        }
        getSourceState() {
          return dt();
        }
        getVisible() {
          return this.get(Tt.VISIBLE);
        }
        getZIndex() {
          return this.get(Tt.Z_INDEX);
        }
        setBackground(t) {
          this.background_ = t, this.changed();
        }
        setExtent(t) {
          this.set(Tt.EXTENT, t);
        }
        setMaxResolution(t) {
          this.set(Tt.MAX_RESOLUTION, t);
        }
        setMinResolution(t) {
          this.set(Tt.MIN_RESOLUTION, t);
        }
        setMaxZoom(t) {
          this.set(Tt.MAX_ZOOM, t);
        }
        setMinZoom(t) {
          this.set(Tt.MIN_ZOOM, t);
        }
        setOpacity(t) {
          wt(typeof t == "number", "Layer opacity must be a number"), this.set(Tt.OPACITY, t);
        }
        setVisible(t) {
          this.set(Tt.VISIBLE, t);
        }
        setZIndex(t) {
          this.set(Tt.Z_INDEX, t);
        }
        disposeInternal() {
          this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
        }
      }
      const Ge = { PRERENDER: "prerender", POSTRENDER: "postrender", PRECOMPOSE: "precompose", POSTCOMPOSE: "postcompose", RENDERCOMPLETE: "rendercomplete" }, ie = { ANIMATING: 0, INTERACTING: 1 }, Ze = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" }, Bg = 42, Ka = 256, Ha = { radians: 6370997 / (2 * Math.PI), degrees: 2 * Math.PI * 6370997 / 360, ft: 0.3048, m: 1, "us-ft": 1200 / 3937 };
      let _o = class {
        constructor(n) {
          this.code_ = n.code, this.units_ = n.units, this.extent_ = n.extent !== void 0 ? n.extent : null, this.worldExtent_ = n.worldExtent !== void 0 ? n.worldExtent : null, this.axisOrientation_ = n.axisOrientation !== void 0 ? n.axisOrientation : "enu", this.global_ = n.global !== void 0 ? n.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = n.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = n.metersPerUnit;
        }
        canWrapX() {
          return this.canWrapX_;
        }
        getCode() {
          return this.code_;
        }
        getExtent() {
          return this.extent_;
        }
        getUnits() {
          return this.units_;
        }
        getMetersPerUnit() {
          return this.metersPerUnit_ || Ha[this.units_];
        }
        getWorldExtent() {
          return this.worldExtent_;
        }
        getAxisOrientation() {
          return this.axisOrientation_;
        }
        isGlobal() {
          return this.global_;
        }
        setGlobal(n) {
          this.global_ = n, this.canWrapX_ = !!(n && this.extent_);
        }
        getDefaultTileGrid() {
          return this.defaultTileGrid_;
        }
        setDefaultTileGrid(n) {
          this.defaultTileGrid_ = n;
        }
        setExtent(n) {
          this.extent_ = n, this.canWrapX_ = !!(this.global_ && n);
        }
        setWorldExtent(n) {
          this.worldExtent_ = n;
        }
        setGetPointResolution(n) {
          this.getPointResolutionFunc_ = n;
        }
        getPointResolutionFunc() {
          return this.getPointResolutionFunc_;
        }
      };
      const sr = 6378137, ei = Math.PI * sr, jg = [-ei, -ei, ei, ei], Wg = [-180, -85, 180, 85], yo = sr * Math.log(Math.tan(Math.PI / 2));
      class ni extends _o {
        constructor(t) {
          super({ code: t, units: "m", extent: jg, global: !0, worldExtent: Wg, getPointResolution: function(e, s) {
            return e / Math.cosh(s[1] / sr);
          } });
        }
      }
      const Pu = [new ni("EPSG:3857"), new ni("EPSG:102100"), new ni("EPSG:102113"), new ni("EPSG:900913"), new ni("http://www.opengis.net/def/crs/EPSG/0/3857"), new ni("http://www.opengis.net/gml/srs/epsg.xml#3857")];
      function Yg(n, t, e, s) {
        const i = n.length;
        e = e > 1 ? e : 2, s = s ?? e, t === void 0 && (e > 2 ? t = n.slice() : t = new Array(i));
        for (let r = 0; r < i; r += s) {
          t[r] = ei * n[r] / 180;
          let o = sr * Math.log(Math.tan(Math.PI * (+n[r + 1] + 90) / 360));
          o > yo ? o = yo : o < -yo && (o = -yo), t[r + 1] = o;
        }
        return t;
      }
      function Xg(n, t, e, s) {
        const i = n.length;
        e = e > 1 ? e : 2, s = s ?? e, t === void 0 && (e > 2 ? t = n.slice() : t = new Array(i));
        for (let r = 0; r < i; r += s) t[r] = 180 * n[r] / ei, t[r + 1] = 360 * Math.atan(Math.exp(n[r + 1] / sr)) / Math.PI - 90;
        return t;
      }
      const qg = 6378137, Lu = [-180, -90, 180, 90], Vg = Math.PI * qg / 180;
      class vs extends _o {
        constructor(t, e) {
          super({ code: t, units: "degrees", extent: Lu, axisOrientation: e, global: !0, metersPerUnit: Vg, worldExtent: Lu });
        }
      }
      const Ou = [new vs("CRS:84"), new vs("EPSG:4326", "neu"), new vs("urn:ogc:def:crs:OGC:1.3:CRS84"), new vs("urn:ogc:def:crs:OGC:2:84"), new vs("http://www.opengis.net/def/crs/OGC/1.3/CRS84"), new vs("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new vs("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")];
      let Ja = {};
      function xo(n) {
        return Ja[n] || Ja[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
      }
      function $g(n, t) {
        Ja[n] = t;
      }
      let si = {};
      function Rs(n, t, e) {
        const s = n.getCode(), i = t.getCode();
        s in si || (si[s] = {}), si[s][i] = e;
      }
      function Eo(n, t) {
        return n in si && t in si[n] ? si[n][t] : null;
      }
      const Kt = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 };
      function Qa(n) {
        const t = Se();
        for (let e = 0, s = n.length; e < s; ++e) bs(t, n[e]);
        return t;
      }
      function Zg(n, t, e) {
        const s = Math.min.apply(null, n), i = Math.min.apply(null, t), r = Math.max.apply(null, n), o = Math.max.apply(null, t);
        return Ne(s, i, r, o, e);
      }
      function Mo(n, t, e) {
        return e ? (e[0] = n[0] - t, e[1] = n[1] - t, e[2] = n[2] + t, e[3] = n[3] + t, e) : [n[0] - t, n[1] - t, n[2] + t, n[3] + t];
      }
      function th(n, t) {
        return t ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t) : n.slice();
      }
      function Xn(n, t, e) {
        let s, i;
        return t < n[0] ? s = n[0] - t : n[2] < t ? s = t - n[2] : s = 0, e < n[1] ? i = n[1] - e : n[3] < e ? i = e - n[3] : i = 0, s * s + i * i;
      }
      function Cs(n, t) {
        return wo(n, t[0], t[1]);
      }
      function qn(n, t) {
        return n[0] <= t[0] && t[2] <= n[2] && n[1] <= t[1] && t[3] <= n[3];
      }
      function wo(n, t, e) {
        return n[0] <= t && t <= n[2] && n[1] <= e && e <= n[3];
      }
      function So(n, t) {
        const e = n[0], s = n[1], i = n[2], r = n[3], o = t[0], a = t[1];
        let h = Kt.UNKNOWN;
        return o < e ? h = h | Kt.LEFT : o > i && (h = h | Kt.RIGHT), a < s ? h = h | Kt.BELOW : a > r && (h = h | Kt.ABOVE), h === Kt.UNKNOWN && (h = Kt.INTERSECTING), h;
      }
      function Se() {
        return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      }
      function Ne(n, t, e, s, i) {
        return i ? (i[0] = n, i[1] = t, i[2] = e, i[3] = s, i) : [n, t, e, s];
      }
      function Mn(n) {
        return Ne(1 / 0, 1 / 0, -1 / 0, -1 / 0, n);
      }
      function eh(n, t) {
        const e = n[0], s = n[1];
        return Ne(e, s, e, s, t);
      }
      function Kg(n, t) {
        const e = Mn(t);
        return nh(e, n);
      }
      function vo(n, t, e, s, i) {
        const r = Mn(i);
        return sh(r, n, t, e, s);
      }
      function Hg(n, t) {
        const e = Mn(t);
        return Nu(e, n);
      }
      function ii(n, t) {
        return n[0] == t[0] && n[2] == t[2] && n[1] == t[1] && n[3] == t[3];
      }
      function Jg(n, t, e) {
        return Math.abs(n[0] - t[0]) < e && Math.abs(n[2] - t[2]) < e && Math.abs(n[1] - t[1]) < e && Math.abs(n[3] - t[3]) < e;
      }
      function ir(n, t) {
        return t[0] < n[0] && (n[0] = t[0]), t[2] > n[2] && (n[2] = t[2]), t[1] < n[1] && (n[1] = t[1]), t[3] > n[3] && (n[3] = t[3]), n;
      }
      function bs(n, t) {
        t[0] < n[0] && (n[0] = t[0]), t[0] > n[2] && (n[2] = t[0]), t[1] < n[1] && (n[1] = t[1]), t[1] > n[3] && (n[3] = t[1]);
      }
      function nh(n, t) {
        for (let e = 0, s = t.length; e < s; ++e) bs(n, t[e]);
        return n;
      }
      function sh(n, t, e, s, i) {
        for (; e < s; e += i) Fu(n, t[e], t[e + 1]);
        return n;
      }
      function Nu(n, t) {
        for (let e = 0, s = t.length; e < s; ++e) nh(n, t[e]);
        return n;
      }
      function Fu(n, t, e) {
        n[0] = Math.min(n[0], t), n[1] = Math.min(n[1], e), n[2] = Math.max(n[2], t), n[3] = Math.max(n[3], e);
      }
      function Ro(n, t) {
        let e;
        return e = t(rr(n)), e || (e = t(or(n)), e) || (e = t(ar(n)), e) || (e = t(an(n)), e) ? e : !1;
      }
      function Ts(n) {
        let t = 0;
        return ri(n) || (t = pt(n) * Wt(n)), t;
      }
      function rr(n) {
        return [n[0], n[1]];
      }
      function or(n) {
        return [n[2], n[1]];
      }
      function wn(n) {
        return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2];
      }
      function ku(n, t) {
        let e;
        if (t === "bottom-left") e = rr(n);
        else if (t === "bottom-right") e = or(n);
        else if (t === "top-left") e = an(n);
        else if (t === "top-right") e = ar(n);
        else throw new Error("Invalid corner");
        return e;
      }
      function Qg(n, t) {
        const e = Math.min(n[0], t[0]), s = Math.min(n[1], t[1]), i = Math.max(n[2], t[2]), r = Math.max(n[3], t[3]);
        return (i - e) * (r - s);
      }
      function Co(n, t, e, s, i) {
        const [r, o, a, h, l, u, c, d] = Du(n, t, e, s);
        return Ne(Math.min(r, a, l, c), Math.min(o, h, u, d), Math.max(r, a, l, c), Math.max(o, h, u, d), i);
      }
      function Du(n, t, e, s) {
        const i = t * s[0] / 2, r = t * s[1] / 2, o = Math.cos(e), a = Math.sin(e), h = i * o, l = i * a, u = r * o, c = r * a, d = n[0], p = n[1];
        return [d - h + c, p - l - u, d - h - c, p - l + u, d + h - c, p + l + u, d + h + c, p + l - u, d - h + c, p - l - u];
      }
      function Wt(n) {
        return n[3] - n[1];
      }
      function tp(n, t) {
        const e = Fe(n, t);
        return Ts(e);
      }
      function Fe(n, t, e) {
        const s = e || Se();
        return re(n, t) ? (n[0] > t[0] ? s[0] = n[0] : s[0] = t[0], n[1] > t[1] ? s[1] = n[1] : s[1] = t[1], n[2] < t[2] ? s[2] = n[2] : s[2] = t[2], n[3] < t[3] ? s[3] = n[3] : s[3] = t[3]) : Mn(s), s;
      }
      function ep(n) {
        return pt(n) + Wt(n);
      }
      function np(n) {
        return [n[2] - n[0], n[3] - n[1]];
      }
      function an(n) {
        return [n[0], n[3]];
      }
      function ar(n) {
        return [n[2], n[3]];
      }
      function pt(n) {
        return n[2] - n[0];
      }
      function re(n, t) {
        return n[0] <= t[2] && n[2] >= t[0] && n[1] <= t[3] && n[3] >= t[1];
      }
      function ri(n) {
        return n[2] < n[0] || n[3] < n[1];
      }
      function Gu(n, t) {
        return t ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t) : n;
      }
      function sp(n, t) {
        const e = (n[2] - n[0]) / 2 * (t - 1), s = (n[3] - n[1]) / 2 * (t - 1);
        n[0] -= e, n[2] += e, n[1] -= s, n[3] += s;
      }
      function zu(n, t, e) {
        let s = !1;
        const i = So(n, t), r = So(n, e);
        if (i === Kt.INTERSECTING || r === Kt.INTERSECTING) s = !0;
        else {
          const o = n[0], a = n[1], h = n[2], l = n[3], u = t[0], c = t[1], d = e[0], p = e[1], f = (p - c) / (d - u);
          let y, E;
          r & Kt.ABOVE && !(i & Kt.ABOVE) && (y = d - (p - l) / f, s = y >= o && y <= h), !s && r & Kt.RIGHT && !(i & Kt.RIGHT) && (E = p - (d - h) * f, s = E >= a && E <= l), !s && r & Kt.BELOW && !(i & Kt.BELOW) && (y = d - (p - a) / f, s = y >= o && y <= h), !s && r & Kt.LEFT && !(i & Kt.LEFT) && (E = p - (d - o) * f, s = E >= a && E <= l);
        }
        return s;
      }
      function Uu(n, t, e, s) {
        if (ri(n)) return Mn(e);
        let i = [];
        if (s > 1) {
          const a = n[2] - n[0], h = n[3] - n[1];
          for (let l = 0; l < s; ++l) i.push(n[0] + a * l / s, n[1], n[2], n[1] + h * l / s, n[2] - a * l / s, n[3], n[0], n[3] - h * l / s);
        } else i = [n[0], n[1], n[2], n[1], n[2], n[3], n[0], n[3]];
        t(i, i, 2);
        const r = [], o = [];
        for (let a = 0, h = i.length; a < h; a += 2) r.push(i[a]), o.push(i[a + 1]);
        return Zg(r, o, e);
      }
      function ih(n, t) {
        const e = t.getExtent(), s = wn(n);
        if (t.canWrapX() && (s[0] < e[0] || s[0] >= e[2])) {
          const i = pt(e), r = Math.floor((s[0] - e[0]) / i) * i;
          n[0] -= r, n[2] -= r;
        }
        return n;
      }
      function bo(n, t, e) {
        if (t.canWrapX()) {
          const s = t.getExtent();
          if (!isFinite(n[0]) || !isFinite(n[2])) return [[s[0], n[1], s[2], n[3]]];
          ih(n, t);
          const i = pt(s);
          if (pt(n) > i && !e) return [[s[0], n[1], s[2], n[3]]];
          if (n[0] < s[0]) return [[n[0] + i, n[1], s[2], n[3]], [s[0], n[1], n[2], n[3]]];
          if (n[2] > s[2]) return [[n[0], n[1], s[2], n[3]], [s[0], n[1], n[2] - i, n[3]]];
        }
        return [n];
      }
      const ip = Object.freeze(Object.defineProperty({ __proto__: null, applyTransform: Uu, approximatelyEquals: Jg, boundingExtent: Qa, buffer: Mo, clone: th, closestSquaredDistanceXY: Xn, containsCoordinate: Cs, containsExtent: qn, containsXY: wo, coordinateRelationship: So, createEmpty: Se, createOrUpdate: Ne, createOrUpdateEmpty: Mn, createOrUpdateFromCoordinate: eh, createOrUpdateFromCoordinates: Kg, createOrUpdateFromFlatCoordinates: vo, createOrUpdateFromRings: Hg, equals: ii, extend: ir, extendCoordinate: bs, extendCoordinates: nh, extendFlatCoordinates: sh, extendRings: Nu, extendXY: Fu, forEachCorner: Ro, getArea: Ts, getBottomLeft: rr, getBottomRight: or, getCenter: wn, getCorner: ku, getEnlargedArea: Qg, getForViewAndSize: Co, getHeight: Wt, getIntersection: Fe, getIntersectionArea: tp, getMargin: ep, getRotatedViewport: Du, getSize: np, getTopLeft: an, getTopRight: ar, getWidth: pt, intersects: re, intersectsSegment: zu, isEmpty: ri, returnOrUpdate: Gu, scaleFromCenter: sp, wrapAndSliceX: bo, wrapX: ih }, Symbol.toStringTag, { value: "Module" }));
      function rp(n, t) {
        return n[0] += +t[0], n[1] += +t[1], n;
      }
      function To(n, t) {
        let e = !0;
        for (let s = n.length - 1; s >= 0; --s) if (n[s] != t[s]) {
          e = !1;
          break;
        }
        return e;
      }
      function rh(n, t) {
        const e = Math.cos(t), s = Math.sin(t), i = n[0] * e - n[1] * s, r = n[1] * e + n[0] * s;
        return n[0] = i, n[1] = r, n;
      }
      function op(n, t) {
        return n[0] *= t, n[1] *= t, n;
      }
      function Bu(n, t) {
        if (t.canWrapX()) {
          const e = pt(t.getExtent()), s = ju(n, t, e);
          s && (n[0] -= s * e);
        }
        return n;
      }
      function ju(n, t, e) {
        const s = t.getExtent();
        let i = 0;
        return t.canWrapX() && (n[0] < s[0] || n[0] > s[2]) && (e = e || pt(s), i = Math.floor((n[0] - s[0]) / e)), i;
      }
      const ap = 63710088e-1;
      function Wu(n, t, e) {
        e = e || ap;
        const s = Yn(n[1]), i = Yn(t[1]), r = (i - s) / 2, o = Yn(t[0] - n[0]) / 2, a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(s) * Math.cos(i);
        return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      }
      const Io = 0.9996, ze = 669438e-8, Ao = ze * ze, Po = Ao * ze, Is = ze / (1 - ze), Yu = Math.sqrt(1 - ze), oi = (1 - Yu) / (1 + Yu), Xu = oi * oi, oh = Xu * oi, ah = oh * oi, qu = ah * oi, Vu = 1 - ze / 4 - 3 * Ao / 64 - 5 * Po / 256, hp = 3 * ze / 8 + 3 * Ao / 32 + 45 * Po / 1024, lp = 15 * Ao / 256 + 45 * Po / 1024, up = 35 * Po / 3072, cp = 3 / 2 * oi - 27 / 32 * oh + 269 / 512 * qu, dp = 21 / 16 * Xu - 55 / 32 * ah, fp = 151 / 96 * oh - 417 / 128 * qu, gp = 1097 / 512 * ah, Lo = 6378137;
      function pp(n, t, e) {
        const s = n - 5e5, i = (e.north ? t : t - 1e7) / Io / (Lo * Vu), r = i + cp * Math.sin(2 * i) + dp * Math.sin(4 * i) + fp * Math.sin(6 * i) + gp * Math.sin(8 * i), o = Math.sin(r), a = o * o, h = Math.cos(r), l = o / h, u = l * l, c = u * u, d = 1 - ze * a, p = Math.sqrt(1 - ze * a), f = Lo / p, y = (1 - ze) / d, E = Is * h ** 2, M = E * E, w = s / (f * Io), C = w * w, v = C * w, R = v * w, I = R * w, O = I * w, A = r - l / y * (C / 2 - R / 24 * (5 + 3 * u + 10 * E - 4 * M - 9 * Is)) + O / 720 * (61 + 90 * u + 298 * E + 45 * c - 252 * Is - 3 * M);
        let P = (w - v / 6 * (1 + 2 * u + E) + I / 120 * (5 - 2 * E + 28 * u - 3 * M + 8 * Is + 24 * c)) / h;
        return P = Za(P + Yn(Ku(e.number)), -Math.PI, Math.PI), [Iu(P), Iu(A)];
      }
      const $u = -80, Zu = 84, mp = -180, _p = 180;
      function yp(n, t, e) {
        n = Za(n, mp, _p), t < $u ? t = $u : t > Zu && (t = Zu);
        const s = Yn(t), i = Math.sin(s), r = Math.cos(s), o = i / r, a = o * o, h = a * a, l = Yn(n), u = Ku(e.number), c = Yn(u), d = Lo / Math.sqrt(1 - ze * i ** 2), p = Is * r ** 2, f = r * Za(l - c, -Math.PI, Math.PI), y = f * f, E = y * f, M = E * f, w = M * f, C = w * f, v = Lo * (Vu * s - hp * Math.sin(2 * s) + lp * Math.sin(4 * s) - up * Math.sin(6 * s)), R = Io * d * (f + E / 6 * (1 - a + p) + w / 120 * (5 - 18 * a + h + 72 * p - 58 * Is)) + 5e5;
        let I = Io * (v + d * o * (y / 2 + M / 24 * (5 - a + 9 * p + 4 * p ** 2) + C / 720 * (61 - 58 * a + h + 600 * p - 330 * Is)));
        return e.north || (I += 1e7), [R, I];
      }
      function Ku(n) {
        return (n - 1) * 6 - 180 + 3;
      }
      const xp = [/^EPSG:(\d+)$/, /^urn:ogc:def:crs:EPSG::(\d+)$/, /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];
      function Hu(n) {
        let t = 0;
        for (const i of xp) {
          const r = n.match(i);
          if (r) {
            t = parseInt(r[1]);
            break;
          }
        }
        if (!t) return null;
        let e = 0, s = !1;
        return t > 32700 && t < 32761 ? e = t - 32700 : t > 32600 && t < 32661 && (s = !0, e = t - 32600), e ? { number: e, north: s } : null;
      }
      function Ju(n, t) {
        return function(e, s, i, r) {
          const o = e.length;
          i = i > 1 ? i : 2, r = r ?? i, s || (i > 2 ? s = e.slice() : s = new Array(o));
          for (let a = 0; a < o; a += r) {
            const h = e[a], l = e[a + 1], u = n(h, l, t);
            s[a] = u[0], s[a + 1] = u[1];
          }
          return s;
        };
      }
      function Ep(n) {
        return Hu(n) ? new _o({ code: n, units: "m" }) : null;
      }
      function Mp(n) {
        const t = Hu(n.getCode());
        return t ? { forward: Ju(yp, t), inverse: Ju(pp, t) } : null;
      }
      function Qu(...n) {
        console.warn(...n);
      }
      const wp = [Mp], Sp = [Ep];
      let hh = !0;
      function vp(n) {
        hh = !1;
      }
      function lh(n, t) {
        if (t !== void 0) {
          for (let e = 0, s = n.length; e < s; ++e) t[e] = n[e];
          t = t;
        } else t = n.slice();
        return t;
      }
      function Oo(n) {
        $g(n.getCode(), n), Rs(n, n, lh);
      }
      function Rp(n) {
        n.forEach(Oo);
      }
      function It(n) {
        if (typeof n != "string") return n;
        const t = xo(n);
        if (t) return t;
        for (const e of Sp) {
          const s = e(n);
          if (s) return s;
        }
        return null;
      }
      function uh(n, t, e, s) {
        n = It(n);
        let i;
        const r = n.getPointResolutionFunc();
        if (r) i = r(t, e);
        else {
          const o = n.getUnits();
          if (o == "degrees" || s == "degrees") i = t;
          else {
            const a = gh(n, It("EPSG:4326"));
            if (!a && o !== "degrees") i = t * n.getMetersPerUnit();
            else {
              let l = [e[0] - t / 2, e[1], e[0] + t / 2, e[1], e[0], e[1] - t / 2, e[0], e[1] + t / 2];
              l = a(l, l, 2);
              const u = Wu(l.slice(0, 2), l.slice(2, 4)), c = Wu(l.slice(4, 6), l.slice(6, 8));
              i = (u + c) / 2;
            }
            const h = n.getMetersPerUnit();
            h !== void 0 && (i /= h);
          }
        }
        return i;
      }
      function ch(n) {
        Rp(n), n.forEach(function(t) {
          n.forEach(function(e) {
            t !== e && Rs(t, e, lh);
          });
        });
      }
      function Cp(n, t, e, s) {
        n.forEach(function(i) {
          t.forEach(function(r) {
            Rs(i, r, e), Rs(r, i, s);
          });
        });
      }
      function dh(n, t) {
        return n ? typeof n == "string" ? It(n) : n : It(t);
      }
      function fh(n) {
        return function(t, e, s, i) {
          const r = t.length;
          s = s !== void 0 ? s : 2, i = i ?? s, e = e !== void 0 ? e : new Array(r);
          for (let o = 0; o < r; o += i) {
            const a = n(t.slice(o, o + s)), h = a.length;
            for (let l = 0, u = i; l < u; ++l) e[o + l] = l >= h ? t[o + l] : a[l];
          }
          return e;
        };
      }
      function bp(n, t, e, s) {
        const i = It(n), r = It(t);
        Rs(i, r, fh(e)), Rs(r, i, fh(s));
      }
      function hr(n, t) {
        if (n === t) return !0;
        const e = n.getUnits() === t.getUnits();
        return (n.getCode() === t.getCode() || gh(n, t) === lh) && e;
      }
      function gh(n, t) {
        const e = n.getCode(), s = t.getCode();
        let i = Eo(e, s);
        if (i) return i;
        let r = null, o = null;
        for (const h of wp) r || (r = h(n)), o || (o = h(t));
        if (!r && !o) return null;
        const a = "EPSG:4326";
        if (o) if (r) i = ph(r.inverse, o.forward);
        else {
          const h = Eo(e, a);
          h && (i = ph(h, o.forward));
        }
        else {
          const h = Eo(a, s);
          h && (i = ph(r.inverse, h));
        }
        return i && (Oo(n), Oo(t), Rs(n, t, i)), i;
      }
      function ph(n, t) {
        return function(e, s, i, r) {
          return s = n(e, s, i, r), t(s, s, i, r);
        };
      }
      function ai(n, t) {
        const e = It(n), s = It(t);
        return gh(e, s);
      }
      function tc(n, t, e) {
        const s = ai(t, e);
        if (!s) {
          const i = It(t).getCode(), r = It(e).getCode();
          throw new Error(`No transform available between ${i} and ${r}`);
        }
        return s(n, void 0, n.length);
      }
      function Tp(n, t, e, s) {
        const i = ai(t, e);
        return Uu(n, i, void 0, s);
      }
      function mh(n, t) {
        return n;
      }
      function Sn(n, t) {
        return hh && !To(n, [0, 0]) && n[0] >= -180 && n[0] <= 180 && n[1] >= -90 && n[1] <= 90 && (hh = !1, Qu("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")), n;
      }
      function ec(n, t) {
        return n;
      }
      function Vn(n, t) {
        return n;
      }
      function nc(n, t, e) {
        return function(s) {
          let i, r;
          if (n.canWrapX()) {
            const o = n.getExtent(), a = pt(o);
            s = s.slice(0), r = ju(s, n, a), r && (s[0] = s[0] - r * a), s[0] = kt(s[0], o[0], o[2]), s[1] = kt(s[1], o[1], o[3]), i = e(s);
          } else i = e(s);
          return r && t.canWrapX() && (i[0] += r * pt(t.getExtent())), i;
        };
      }
      function Ip() {
        ch(Pu), ch(Ou), Cp(Ou, Pu, Yg, Xg);
      }
      Ip();
      function sc(n, t, e) {
        return function(s, i, r, o, a) {
          if (!s) return;
          if (!i && !t) return s;
          const h = t ? 0 : r[0] * i, l = t ? 0 : r[1] * i, u = a ? a[0] : 0, c = a ? a[1] : 0;
          let d = n[0] + h / 2 + u, p = n[2] - h / 2 + u, f = n[1] + l / 2 + c, y = n[3] - l / 2 + c;
          d > p && (d = (p + d) / 2, p = d), f > y && (f = (y + f) / 2, y = f);
          let E = kt(s[0], d, p), M = kt(s[1], f, y);
          if (o && e && i) {
            const w = 30 * i;
            E += -w * Math.log(1 + Math.max(0, d - s[0]) / w) + w * Math.log(1 + Math.max(0, s[0] - p) / w), M += -w * Math.log(1 + Math.max(0, f - s[1]) / w) + w * Math.log(1 + Math.max(0, s[1] - y) / w);
          }
          return [E, M];
        };
      }
      function Ap(n) {
        return n;
      }
      function _h(n, t, e, s) {
        const i = pt(t) / e[0], r = Wt(t) / e[1];
        return s ? Math.min(n, Math.max(i, r)) : Math.min(n, Math.min(i, r));
      }
      function yh(n, t, e) {
        let s = Math.min(n, t);
        const i = 50;
        return s *= Math.log(1 + i * Math.max(0, n / t - 1)) / i + 1, e && (s = Math.max(s, e), s /= Math.log(1 + i * Math.max(0, e / n - 1)) / i + 1), kt(s, e / 2, t * 2);
      }
      function Pp(n, t, e, s) {
        return t = t !== void 0 ? t : !0, function(i, r, o, a) {
          if (i !== void 0) {
            const h = n[0], l = n[n.length - 1], u = e ? _h(h, e, o, s) : h;
            if (a) return t ? yh(i, u, l) : kt(i, l, u);
            const c = Math.min(u, i), d = Math.floor(Va(n, c, r));
            return n[d] > u && d < n.length - 1 ? n[d + 1] : n[d];
          }
        };
      }
      function Lp(n, t, e, s, i, r) {
        return s = s !== void 0 ? s : !0, e = e !== void 0 ? e : 0, function(o, a, h, l) {
          if (o !== void 0) {
            const u = i ? _h(t, i, h, r) : t;
            if (l) return s ? yh(o, u, e) : kt(o, e, u);
            const c = 1e-9, d = Math.ceil(Math.log(t / u) / Math.log(n) - c), p = -a * (0.5 - c) + 0.5, f = Math.min(u, o), y = Math.floor(Math.log(t / f) / Math.log(n) + p), E = Math.max(d, y), M = t / Math.pow(n, E);
            return kt(M, e, u);
          }
        };
      }
      function ic(n, t, e, s, i) {
        return e = e !== void 0 ? e : !0, function(r, o, a, h) {
          if (r !== void 0) {
            const l = s ? _h(n, s, a, i) : n;
            return !e || !h ? kt(r, t, l) : yh(r, l, t);
          }
        };
      }
      function xh(n) {
        if (n !== void 0) return 0;
      }
      function rc(n) {
        if (n !== void 0) return n;
      }
      function Op(n) {
        const t = 2 * Math.PI / n;
        return function(e, s) {
          if (s) return e;
          if (e !== void 0) return e = Math.floor(e / t + 0.5) * t, e;
        };
      }
      function Np(n) {
        const t = Yn(5);
        return function(e, s) {
          return s || e === void 0 ? e : Math.abs(e) <= t ? 0 : e;
        };
      }
      function oc(n) {
        return Math.pow(n, 3);
      }
      function hi(n) {
        return 1 - oc(1 - n);
      }
      function Fp(n) {
        return 3 * n * n - 2 * n * n * n;
      }
      function kp(n) {
        return n;
      }
      const Dp = new Array(6);
      function Ue() {
        return [1, 0, 0, 1, 0, 0];
      }
      function ac(n, t) {
        const e = n[0], s = n[1], i = n[2], r = n[3], o = n[4], a = n[5], h = t[0], l = t[1], u = t[2], c = t[3], d = t[4], p = t[5];
        return n[0] = e * h + i * l, n[1] = s * h + r * l, n[2] = e * u + i * c, n[3] = s * u + r * c, n[4] = e * d + i * p + o, n[5] = s * d + r * p + a, n;
      }
      function Gp(n, t, e, s, i, r, o) {
        return n[0] = t, n[1] = e, n[2] = s, n[3] = i, n[4] = r, n[5] = o, n;
      }
      function zp(n, t) {
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
      }
      function Vt(n, t) {
        const e = t[0], s = t[1];
        return t[0] = n[0] * e + n[2] * s + n[4], t[1] = n[1] * e + n[3] * s + n[5], t;
      }
      function Up(n, t, e) {
        return ac(n, Gp(Dp, t, 0, 0, e, 0, 0));
      }
      function vn(n, t, e, s, i, r, o, a) {
        const h = Math.sin(r), l = Math.cos(r);
        return n[0] = s * l, n[1] = i * h, n[2] = -s * h, n[3] = i * l, n[4] = o * s * l - a * s * h + t, n[5] = o * i * h + a * i * l + e, n;
      }
      function hc(n, t) {
        const e = Bp(t);
        wt(e !== 0, "Transformation matrix cannot be inverted");
        const s = t[0], i = t[1], r = t[2], o = t[3], a = t[4], h = t[5];
        return n[0] = o / e, n[1] = -i / e, n[2] = -r / e, n[3] = s / e, n[4] = (r * h - o * a) / e, n[5] = -(s * h - i * a) / e, n;
      }
      function Bp(n) {
        return n[0] * n[3] - n[1] * n[2];
      }
      const lc = [1e6, 1e6, 1e6, 1e6, 2, 2];
      function jp(n) {
        return "matrix(" + n.map((t, e) => Math.round(t * lc[e]) / lc[e]).join(", ") + ")";
      }
      function $n(n, t, e, s, i, r, o) {
        r = r || [], o = o || 2;
        let a = 0;
        for (let h = t; h < e; h += s) {
          const l = n[h], u = n[h + 1];
          r[a++] = i[0] * l + i[2] * u + i[4], r[a++] = i[1] * l + i[3] * u + i[5];
          for (let c = 2; c < o; c++) r[a++] = n[h + c];
        }
        return r && r.length != a && (r.length = a), r;
      }
      function Eh(n, t, e, s, i, r, o) {
        o = o || [];
        const a = Math.cos(i), h = Math.sin(i), l = r[0], u = r[1];
        let c = 0;
        for (let d = t; d < e; d += s) {
          const p = n[d] - l, f = n[d + 1] - u;
          o[c++] = l + p * a - f * h, o[c++] = u + p * h + f * a;
          for (let y = d + 2; y < d + s; ++y) o[c++] = n[y];
        }
        return o && o.length != c && (o.length = c), o;
      }
      function Wp(n, t, e, s, i, r, o, a) {
        a = a || [];
        const h = o[0], l = o[1];
        let u = 0;
        for (let c = t; c < e; c += s) {
          const d = n[c] - h, p = n[c + 1] - l;
          a[u++] = h + i * d, a[u++] = l + r * p;
          for (let f = c + 2; f < c + s; ++f) a[u++] = n[f];
        }
        return a && a.length != u && (a.length = u), a;
      }
      function Yp(n, t, e, s, i, r, o) {
        o = o || [];
        let a = 0;
        for (let h = t; h < e; h += s) {
          o[a++] = n[h] + i, o[a++] = n[h + 1] + r;
          for (let l = h + 2; l < h + s; ++l) o[a++] = n[l];
        }
        return o && o.length != a && (o.length = a), o;
      }
      const uc = Ue();
      class No extends $e {
        constructor() {
          super(), this.extent_ = Se(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = Cu((t, e, s) => {
            if (!s) return this.getSimplifiedGeometry(e);
            const i = this.clone();
            return i.applyTransform(s), i.getSimplifiedGeometry(e);
          });
        }
        simplifyTransformed(t, e) {
          return this.simplifyTransformedInternal(this.getRevision(), t, e);
        }
        clone() {
          return dt();
        }
        closestPointXY(t, e, s, i) {
          return dt();
        }
        containsXY(t, e) {
          const s = this.getClosestPoint([t, e]);
          return s[0] === t && s[1] === e;
        }
        getClosestPoint(t, e) {
          return e = e || [NaN, NaN], this.closestPointXY(t[0], t[1], e, 1 / 0), e;
        }
        intersectsCoordinate(t) {
          return this.containsXY(t[0], t[1]);
        }
        computeExtent(t) {
          return dt();
        }
        getExtent(t) {
          if (this.extentRevision_ != this.getRevision()) {
            const e = this.computeExtent(this.extent_);
            (isNaN(e[0]) || isNaN(e[1])) && Mn(e), this.extentRevision_ = this.getRevision();
          }
          return Gu(this.extent_, t);
        }
        rotate(t, e) {
          dt();
        }
        scale(t, e, s) {
          dt();
        }
        simplify(t) {
          return this.getSimplifiedGeometry(t * t);
        }
        getSimplifiedGeometry(t) {
          return dt();
        }
        getType() {
          return dt();
        }
        applyTransform(t) {
          dt();
        }
        intersectsExtent(t) {
          return dt();
        }
        translate(t, e) {
          dt();
        }
        transform(t, e) {
          const s = It(t), i = s.getUnits() == "tile-pixels" ? function(r, o, a) {
            const h = s.getExtent(), l = s.getWorldExtent(), u = Wt(l) / Wt(h);
            vn(uc, l[0], l[3], u, -u, 0, 0, 0);
            const c = $n(r, 0, r.length, a, uc, o), d = ai(s, e);
            return d ? d(c, c, a) : c;
          } : ai(s, e);
          return this.applyTransform(i), this;
        }
      }
      class Rn extends No {
        constructor() {
          super(), this.layout = "XY", this.stride = 2, this.flatCoordinates;
        }
        computeExtent(t) {
          return vo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
        }
        getCoordinates() {
          return dt();
        }
        getFirstCoordinate() {
          return this.flatCoordinates.slice(0, this.stride);
        }
        getFlatCoordinates() {
          return this.flatCoordinates;
        }
        getLastCoordinate() {
          return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
        }
        getLayout() {
          return this.layout;
        }
        getSimplifiedGeometry(t) {
          if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t <= this.simplifiedGeometryMaxMinSquaredTolerance) return this;
          const e = this.getSimplifiedGeometryInternal(t);
          return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
        }
        getSimplifiedGeometryInternal(t) {
          return this;
        }
        getStride() {
          return this.stride;
        }
        setFlatCoordinates(t, e) {
          this.stride = cc(t), this.layout = t, this.flatCoordinates = e;
        }
        setCoordinates(t, e) {
          dt();
        }
        setLayout(t, e, s) {
          let i;
          if (t) i = cc(t);
          else {
            for (let r = 0; r < s; ++r) {
              if (e.length === 0) {
                this.layout = "XY", this.stride = 2;
                return;
              }
              e = e[0];
            }
            i = e.length, t = Xp(i);
          }
          this.layout = t, this.stride = i;
        }
        applyTransform(t) {
          this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.layout.startsWith("XYZ") ? 3 : 2, this.stride), this.changed());
        }
        rotate(t, e) {
          const s = this.getFlatCoordinates();
          if (s) {
            const i = this.getStride();
            Eh(s, 0, s.length, i, t, e, s), this.changed();
          }
        }
        scale(t, e, s) {
          e === void 0 && (e = t), s || (s = wn(this.getExtent()));
          const i = this.getFlatCoordinates();
          if (i) {
            const r = this.getStride();
            Wp(i, 0, i.length, r, t, e, s, i), this.changed();
          }
        }
        translate(t, e) {
          const s = this.getFlatCoordinates();
          if (s) {
            const i = this.getStride();
            Yp(s, 0, s.length, i, t, e, s), this.changed();
          }
        }
      }
      function Xp(n) {
        let t;
        return n == 2 ? t = "XY" : n == 3 ? t = "XYZ" : n == 4 && (t = "XYZM"), t;
      }
      function cc(n) {
        let t;
        return n == "XY" ? t = 2 : n == "XYZ" || n == "XYM" ? t = 3 : n == "XYZM" && (t = 4), t;
      }
      function qp(n, t, e) {
        const s = n.getFlatCoordinates();
        if (!s) return null;
        const i = n.getStride();
        return $n(s, 0, s.length, i, t, e);
      }
      function dc(n, t, e, s, i, r, o) {
        const a = n[t], h = n[t + 1], l = n[e] - a, u = n[e + 1] - h;
        let c;
        if (l === 0 && u === 0) c = t;
        else {
          const d = ((i - a) * l + (r - h) * u) / (l * l + u * u);
          if (d > 1) c = e;
          else if (d > 0) {
            for (let p = 0; p < s; ++p) o[p] = Oe(n[t + p], n[e + p], d);
            o.length = s;
            return;
          } else c = t;
        }
        for (let d = 0; d < s; ++d) o[d] = n[c + d];
        o.length = s;
      }
      function Mh(n, t, e, s, i) {
        let r = n[t], o = n[t + 1];
        for (t += s; t < e; t += s) {
          const a = n[t], h = n[t + 1], l = Ss(r, o, a, h);
          l > i && (i = l), r = a, o = h;
        }
        return i;
      }
      function wh(n, t, e, s, i) {
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r];
          i = Mh(n, t, a, s, i), t = a;
        }
        return i;
      }
      function Vp(n, t, e, s, i) {
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r];
          i = wh(n, t, a, s, i), t = a[a.length - 1];
        }
        return i;
      }
      function Sh(n, t, e, s, i, r, o, a, h, l, u) {
        if (t == e) return l;
        let c, d;
        if (i === 0) {
          if (d = Ss(o, a, n[t], n[t + 1]), d < l) {
            for (c = 0; c < s; ++c) h[c] = n[t + c];
            return h.length = s, d;
          }
          return l;
        }
        u = u || [NaN, NaN];
        let p = t + s;
        for (; p < e; ) if (dc(n, p - s, p, s, o, a, u), d = Ss(o, a, u[0], u[1]), d < l) {
          for (l = d, c = 0; c < s; ++c) h[c] = u[c];
          h.length = s, p += s;
        } else p += s * Math.max((Math.sqrt(d) - Math.sqrt(l)) / i | 0, 1);
        if (r && (dc(n, e - s, t, s, o, a, u), d = Ss(o, a, u[0], u[1]), d < l)) {
          for (l = d, c = 0; c < s; ++c) h[c] = u[c];
          h.length = s;
        }
        return l;
      }
      function vh(n, t, e, s, i, r, o, a, h, l, u) {
        u = u || [NaN, NaN];
        for (let c = 0, d = e.length; c < d; ++c) {
          const p = e[c];
          l = Sh(n, t, p, s, i, r, o, a, h, l, u), t = p;
        }
        return l;
      }
      function $p(n, t, e, s, i, r, o, a, h, l, u) {
        u = u || [NaN, NaN];
        for (let c = 0, d = e.length; c < d; ++c) {
          const p = e[c];
          l = vh(n, t, p, s, i, r, o, a, h, l, u), t = p[p.length - 1];
        }
        return l;
      }
      function fc(n, t, e, s) {
        for (let i = 0, r = e.length; i < r; ++i) n[t++] = e[i];
        return t;
      }
      function Fo(n, t, e, s) {
        for (let i = 0, r = e.length; i < r; ++i) {
          const o = e[i];
          for (let a = 0; a < s; ++a) n[t++] = o[a];
        }
        return t;
      }
      function Rh(n, t, e, s, i) {
        i = i || [];
        let r = 0;
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = Fo(n, t, e[o], s);
          i[r++] = h, t = h;
        }
        return i.length = r, i;
      }
      function Zp(n, t, e, s, i) {
        i = i || [];
        let r = 0;
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = Rh(n, t, e[o], s, i[r]);
          h.length === 0 && (h[0] = t), i[r++] = h, t = h[h.length - 1];
        }
        return i.length = r, i;
      }
      function ko(n, t, e, s, i, r, o) {
        const a = (e - t) / s;
        if (a < 3) {
          for (; t < e; t += s) r[o++] = n[t], r[o++] = n[t + 1];
          return o;
        }
        const h = new Array(a);
        h[0] = 1, h[a - 1] = 1;
        const l = [t, e - s];
        let u = 0;
        for (; l.length > 0; ) {
          const c = l.pop(), d = l.pop();
          let p = 0;
          const f = n[d], y = n[d + 1], E = n[c], M = n[c + 1];
          for (let w = d + s; w < c; w += s) {
            const C = n[w], v = n[w + 1], R = zg(C, v, f, y, E, M);
            R > p && (u = w, p = R);
          }
          p > i && (h[(u - t) / s] = 1, d + s < u && l.push(d, u), u + s < c && l.push(u, c));
        }
        for (let c = 0; c < a; ++c) h[c] && (r[o++] = n[t + c * s], r[o++] = n[t + c * s + 1]);
        return o;
      }
      function gc(n, t, e, s, i, r, o, a) {
        for (let h = 0, l = e.length; h < l; ++h) {
          const u = e[h];
          o = ko(n, t, u, s, i, r, o), a.push(o), t = u;
        }
        return o;
      }
      function As(n, t) {
        return t * Math.round(n / t);
      }
      function Kp(n, t, e, s, i, r, o) {
        if (t == e) return o;
        let a = As(n[t], i), h = As(n[t + 1], i);
        t += s, r[o++] = a, r[o++] = h;
        let l, u;
        do
          if (l = As(n[t], i), u = As(n[t + 1], i), t += s, t == e) return r[o++] = l, r[o++] = u, o;
        while (l == a && u == h);
        for (; t < e; ) {
          const c = As(n[t], i), d = As(n[t + 1], i);
          if (t += s, c == l && d == u) continue;
          const p = l - a, f = u - h, y = c - a, E = d - h;
          if (p * E == f * y && (p < 0 && y < p || p == y || p > 0 && y > p) && (f < 0 && E < f || f == E || f > 0 && E > f)) {
            l = c, u = d;
            continue;
          }
          r[o++] = l, r[o++] = u, a = l, h = u, l = c, u = d;
        }
        return r[o++] = l, r[o++] = u, o;
      }
      function Ch(n, t, e, s, i, r, o, a) {
        for (let h = 0, l = e.length; h < l; ++h) {
          const u = e[h];
          o = Kp(n, t, u, s, i, r, o), a.push(o), t = u;
        }
        return o;
      }
      function Hp(n, t, e, s, i, r, o, a) {
        for (let h = 0, l = e.length; h < l; ++h) {
          const u = e[h], c = [];
          o = Ch(n, t, u, s, i, r, o, c), a.push(c), t = u[u.length - 1];
        }
        return o;
      }
      function Zn(n, t, e, s, i) {
        i = i !== void 0 ? i : [];
        let r = 0;
        for (let o = t; o < e; o += s) i[r++] = n.slice(o, o + s);
        return i.length = r, i;
      }
      function lr(n, t, e, s, i) {
        i = i !== void 0 ? i : [];
        let r = 0;
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = e[o];
          i[r++] = Zn(n, t, h, s, i[r]), t = h;
        }
        return i.length = r, i;
      }
      function bh(n, t, e, s, i) {
        i = i !== void 0 ? i : [];
        let r = 0;
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = e[o];
          i[r++] = h.length === 1 && h[0] === t ? [] : lr(n, t, h, s, i[r]), t = h[h.length - 1];
        }
        return i.length = r, i;
      }
      function pc(n, t, e, s) {
        let i = 0;
        const r = n[e - s], o = n[e - s + 1];
        let a = 0, h = 0;
        for (; t < e; t += s) {
          const l = n[t] - r, u = n[t + 1] - o;
          i += h * l - a * u, a = l, h = u;
        }
        return i / 2;
      }
      function mc(n, t, e, s) {
        let i = 0;
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r];
          i += pc(n, t, a, s), t = a;
        }
        return i;
      }
      function Jp(n, t, e, s) {
        let i = 0;
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r];
          i += mc(n, t, a, s), t = a[a.length - 1];
        }
        return i;
      }
      class Ps extends Rn {
        constructor(t, e) {
          super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e);
        }
        clone() {
          return new Ps(this.flatCoordinates.slice(), this.layout);
        }
        closestPointXY(t, e, s, i) {
          return i < Xn(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(Mh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), Sh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, s, i));
        }
        getArea() {
          return pc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
        }
        getCoordinates() {
          return Zn(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
        }
        getSimplifiedGeometryInternal(t) {
          const e = [];
          return e.length = ko(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0), new Ps(e, "XY");
        }
        getType() {
          return "LinearRing";
        }
        intersectsExtent(t) {
          return !1;
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Fo(this.flatCoordinates, 0, t, this.stride), this.changed();
        }
      }
      let ur = class dg extends Rn {
        constructor(t, e) {
          super(), this.setCoordinates(t, e);
        }
        clone() {
          const t = new dg(this.flatCoordinates.slice(), this.layout);
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          const r = this.flatCoordinates, o = Ss(t, e, r[0], r[1]);
          if (o < i) {
            const a = this.stride;
            for (let h = 0; h < a; ++h) s[h] = r[h];
            return s.length = a, o;
          }
          return i;
        }
        getCoordinates() {
          return this.flatCoordinates.slice();
        }
        computeExtent(t) {
          return eh(this.flatCoordinates, t);
        }
        getType() {
          return "Point";
        }
        intersectsExtent(t) {
          return wo(t, this.flatCoordinates[0], this.flatCoordinates[1]);
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = fc(this.flatCoordinates, 0, t, this.stride), this.changed();
        }
      };
      function Qp(n, t, e, s, i) {
        return !Ro(i, function(r) {
          return !Ls(n, t, e, s, r[0], r[1]);
        });
      }
      function Ls(n, t, e, s, i, r) {
        let o = 0, a = n[e - s], h = n[e - s + 1];
        for (; t < e; t += s) {
          const l = n[t], u = n[t + 1];
          h <= r ? u > r && (l - a) * (r - h) - (i - a) * (u - h) > 0 && o++ : u <= r && (l - a) * (r - h) - (i - a) * (u - h) < 0 && o--, a = l, h = u;
        }
        return o !== 0;
      }
      function Th(n, t, e, s, i, r) {
        if (e.length === 0 || !Ls(n, t, e[0], s, i, r)) return !1;
        for (let o = 1, a = e.length; o < a; ++o) if (Ls(n, e[o - 1], e[o], s, i, r)) return !1;
        return !0;
      }
      function tm(n, t, e, s, i, r) {
        if (e.length === 0) return !1;
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = e[o];
          if (Th(n, t, h, s, i, r)) return !0;
          t = h[h.length - 1];
        }
        return !1;
      }
      function Ih(n, t, e, s, i, r, o) {
        let a, h, l, u, c, d, p;
        const f = i[r + 1], y = [];
        for (let w = 0, C = e.length; w < C; ++w) {
          const v = e[w];
          for (u = n[v - s], d = n[v - s + 1], a = t; a < v; a += s) c = n[a], p = n[a + 1], (f <= d && p <= f || d <= f && f <= p) && (l = (f - d) / (p - d) * (c - u) + u, y.push(l)), u = c, d = p;
        }
        let E = NaN, M = -1 / 0;
        for (y.sort(jn), u = y[0], a = 1, h = y.length; a < h; ++a) {
          c = y[a];
          const w = Math.abs(c - u);
          w > M && (l = (u + c) / 2, Th(n, t, e, s, l, f) && (E = l, M = w)), u = c;
        }
        return isNaN(E) && (E = i[r]), o ? (o.push(E, f, M), o) : [E, f, M];
      }
      function _c(n, t, e, s, i) {
        let r = [];
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = e[o];
          r = Ih(n, t, h, s, i, 2 * o, r), t = h[h.length - 1];
        }
        return r;
      }
      function yc(n, t, e, s, i) {
        let r;
        for (t += s; t < e; t += s) if (r = i(n.slice(t - s, t), n.slice(t, t + s)), r) return r;
        return !1;
      }
      function Do(n, t, e, s, i) {
        const r = sh(Se(), n, t, e, s);
        return re(i, r) ? qn(i, r) || r[0] >= i[0] && r[2] <= i[2] || r[1] >= i[1] && r[3] <= i[3] ? !0 : yc(n, t, e, s, function(o, a) {
          return zu(i, o, a);
        }) : !1;
      }
      function em(n, t, e, s, i) {
        for (let r = 0, o = e.length; r < o; ++r) {
          if (Do(n, t, e[r], s, i)) return !0;
          t = e[r];
        }
        return !1;
      }
      function xc(n, t, e, s, i) {
        return !!(Do(n, t, e, s, i) || Ls(n, t, e, s, i[0], i[1]) || Ls(n, t, e, s, i[0], i[3]) || Ls(n, t, e, s, i[2], i[1]) || Ls(n, t, e, s, i[2], i[3]));
      }
      function Ec(n, t, e, s, i) {
        if (!xc(n, t, e[0], s, i)) return !1;
        if (e.length === 1) return !0;
        for (let r = 1, o = e.length; r < o; ++r) if (Qp(n, e[r - 1], e[r], s, i) && !Do(n, e[r - 1], e[r], s, i)) return !1;
        return !0;
      }
      function nm(n, t, e, s, i) {
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r];
          if (Ec(n, t, a, s, i)) return !0;
          t = a[a.length - 1];
        }
        return !1;
      }
      function sm(n, t, e, s) {
        for (; t < e - s; ) {
          for (let i = 0; i < s; ++i) {
            const r = n[t + i];
            n[t + i] = n[e - s + i], n[e - s + i] = r;
          }
          t += s, e -= s;
        }
      }
      function Ah(n, t, e, s) {
        let i = 0, r = n[e - s], o = n[e - s + 1];
        for (; t < e; t += s) {
          const a = n[t], h = n[t + 1];
          i += (a - r) * (h + o), r = a, o = h;
        }
        return i === 0 ? void 0 : i > 0;
      }
      function Mc(n, t, e, s, i) {
        i = i !== void 0 ? i : !1;
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r], h = Ah(n, t, a, s);
          if (r === 0) {
            if (i && h || !i && !h) return !1;
          } else if (i && !h || !i && h) return !1;
          t = a;
        }
        return !0;
      }
      function im(n, t, e, s, i) {
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r];
          if (!Mc(n, t, a, s, i)) return !1;
          a.length && (t = a[a.length - 1]);
        }
        return !0;
      }
      function Ph(n, t, e, s, i) {
        i = i !== void 0 ? i : !1;
        for (let r = 0, o = e.length; r < o; ++r) {
          const a = e[r], h = Ah(n, t, a, s);
          (r === 0 ? i && h || !i && !h : i && !h || !i && h) && sm(n, t, a, s), t = a;
        }
        return t;
      }
      function wc(n, t, e, s, i) {
        for (let r = 0, o = e.length; r < o; ++r) t = Ph(n, t, e[r], s, i);
        return t;
      }
      function rm(n, t) {
        const e = [];
        let s = 0, i = 0, r;
        for (let o = 0, a = t.length; o < a; ++o) {
          const h = t[o], l = Ah(n, s, h, 2);
          if (r === void 0 && (r = l), l === r) e.push(t.slice(i, o + 1));
          else {
            if (e.length === 0) continue;
            e[e.length - 1].push(t[i]);
          }
          i = o + 1, s = h;
        }
        return e;
      }
      class hn extends Rn {
        constructor(t, e, s) {
          super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, e !== void 0 && s ? (this.setFlatCoordinates(e, t), this.ends_ = s) : this.setCoordinates(t, e);
        }
        appendLinearRing(t) {
          this.flatCoordinates ? pe(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
        }
        clone() {
          const t = new hn(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          return i < Xn(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(wh(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), vh(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, s, i));
        }
        containsXY(t, e) {
          return Th(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e);
        }
        getArea() {
          return mc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
        }
        getCoordinates(t) {
          let e;
          return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), Ph(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, lr(e, 0, this.ends_, this.stride);
        }
        getEnds() {
          return this.ends_;
        }
        getFlatInteriorPoint() {
          if (this.flatInteriorPointRevision_ != this.getRevision()) {
            const t = wn(this.getExtent());
            this.flatInteriorPoint_ = Ih(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0), this.flatInteriorPointRevision_ = this.getRevision();
          }
          return this.flatInteriorPoint_;
        }
        getInteriorPoint() {
          return new ur(this.getFlatInteriorPoint(), "XYM");
        }
        getLinearRingCount() {
          return this.ends_.length;
        }
        getLinearRing(t) {
          return t < 0 || this.ends_.length <= t ? null : new Ps(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout);
        }
        getLinearRings() {
          const t = this.layout, e = this.flatCoordinates, s = this.ends_, i = [];
          let r = 0;
          for (let o = 0, a = s.length; o < a; ++o) {
            const h = s[o], l = new Ps(e.slice(r, h), t);
            i.push(l), r = h;
          }
          return i;
        }
        getOrientedFlatCoordinates() {
          if (this.orientedRevision_ != this.getRevision()) {
            const t = this.flatCoordinates;
            Mc(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = Ph(this.orientedFlatCoordinates_, 0, this.ends_, this.stride)), this.orientedRevision_ = this.getRevision();
          }
          return this.orientedFlatCoordinates_;
        }
        getSimplifiedGeometryInternal(t) {
          const e = [], s = [];
          return e.length = Ch(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, s), new hn(e, "XY", s);
        }
        getType() {
          return "Polygon";
        }
        intersectsExtent(t) {
          return Ec(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t);
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
          const s = Rh(this.flatCoordinates, 0, t, this.stride, this.ends_);
          this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1], this.changed();
        }
      }
      function Sc(n) {
        if (ri(n)) throw new Error("Cannot create polygon from empty extent");
        const t = n[0], e = n[1], s = n[2], i = n[3], r = [t, e, t, i, s, i, s, e, t, e];
        return new hn(r, "XY", [r.length]);
      }
      const Lh = 0;
      class ln extends $e {
        constructor(t) {
          super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = dh(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && vp(), t.center && (t.center = Sn(t.center, this.projection_)), t.extent && (t.extent = Vn(t.extent, this.projection_)), this.applyOptions_(t);
        }
        applyOptions_(t) {
          const e = Object.assign({}, t);
          for (const a in Ze) delete e[a];
          this.setProperties(e, !0);
          const s = am(t);
          this.maxResolution_ = s.maxResolution, this.minResolution_ = s.minResolution, this.zoomFactor_ = s.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = s.minZoom;
          const i = om(t), r = s.constraint, o = hm(t);
          this.constraints_ = { center: i, resolution: r, rotation: o }, this.setRotation(t.rotation !== void 0 ? t.rotation : 0), this.setCenterInternal(t.center !== void 0 ? t.center : null), t.resolution !== void 0 ? this.setResolution(t.resolution) : t.zoom !== void 0 && this.setZoom(t.zoom);
        }
        get padding() {
          return this.padding_;
        }
        set padding(t) {
          let e = this.padding_;
          this.padding_ = t;
          const s = this.getCenterInternal();
          if (s) {
            const i = t || [0, 0, 0, 0];
            e = e || [0, 0, 0, 0];
            const r = this.getResolution(), o = r / 2 * (i[3] - e[3] + e[1] - i[1]), a = r / 2 * (i[0] - e[0] + e[2] - i[2]);
            this.setCenterInternal([s[0] + o, s[1] - a]);
          }
        }
        getUpdatedOptions_(t) {
          const e = this.getProperties();
          return e.resolution !== void 0 ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), Object.assign({}, e, t);
        }
        animate(t) {
          this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
          const e = new Array(arguments.length);
          for (let s = 0; s < e.length; ++s) {
            let i = arguments[s];
            i.center && (i = Object.assign({}, i), i.center = Sn(i.center, this.getProjection())), i.anchor && (i = Object.assign({}, i), i.anchor = Sn(i.anchor, this.getProjection())), e[s] = i;
          }
          this.animateInternal.apply(this, e);
        }
        animateInternal(t) {
          let e = arguments.length, s;
          e > 1 && typeof arguments[e - 1] == "function" && (s = arguments[e - 1], --e);
          let i = 0;
          for (; i < e && !this.isDef(); ++i) {
            const u = arguments[i];
            u.center && this.setCenterInternal(u.center), u.zoom !== void 0 ? this.setZoom(u.zoom) : u.resolution && this.setResolution(u.resolution), u.rotation !== void 0 && this.setRotation(u.rotation);
          }
          if (i === e) {
            s && Go(s, !0);
            return;
          }
          let r = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, h = this.targetRotation_;
          const l = [];
          for (; i < e; ++i) {
            const u = arguments[i], c = { start: r, complete: !1, anchor: u.anchor, duration: u.duration !== void 0 ? u.duration : 1e3, easing: u.easing || Fp, callback: s };
            if (u.center && (c.sourceCenter = o, c.targetCenter = u.center.slice(), o = c.targetCenter), u.zoom !== void 0 ? (c.sourceResolution = a, c.targetResolution = this.getResolutionForZoom(u.zoom), a = c.targetResolution) : u.resolution && (c.sourceResolution = a, c.targetResolution = u.resolution, a = c.targetResolution), u.rotation !== void 0) {
              c.sourceRotation = h;
              const d = ti(u.rotation - h + Math.PI, 2 * Math.PI) - Math.PI;
              c.targetRotation = h + d, h = c.targetRotation;
            }
            lm(c) ? c.complete = !0 : r += c.duration, l.push(c);
          }
          this.animations_.push(l), this.setHint(ie.ANIMATING, 1), this.updateAnimations_();
        }
        getAnimating() {
          return this.hints_[ie.ANIMATING] > 0;
        }
        getInteracting() {
          return this.hints_[ie.INTERACTING] > 0;
        }
        cancelAnimations() {
          this.setHint(ie.ANIMATING, -this.hints_[ie.ANIMATING]);
          let t;
          for (let e = 0, s = this.animations_.length; e < s; ++e) {
            const i = this.animations_[e];
            if (i[0].callback && Go(i[0].callback, !1), !t) for (let r = 0, o = i.length; r < o; ++r) {
              const a = i[r];
              if (!a.complete) {
                t = a.anchor;
                break;
              }
            }
          }
          this.animations_.length = 0, this.cancelAnchor_ = t, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        }
        updateAnimations_() {
          if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating()) return;
          const t = Date.now();
          let e = !1;
          for (let s = this.animations_.length - 1; s >= 0; --s) {
            const i = this.animations_[s];
            let r = !0;
            for (let o = 0, a = i.length; o < a; ++o) {
              const h = i[o];
              if (h.complete) continue;
              const l = t - h.start;
              let u = h.duration > 0 ? l / h.duration : 1;
              u >= 1 ? (h.complete = !0, u = 1) : r = !1;
              const c = h.easing(u);
              if (h.sourceCenter) {
                const d = h.sourceCenter[0], p = h.sourceCenter[1], f = h.targetCenter[0], y = h.targetCenter[1];
                this.nextCenter_ = h.targetCenter;
                const E = d + c * (f - d), M = p + c * (y - p);
                this.targetCenter_ = [E, M];
              }
              if (h.sourceResolution && h.targetResolution) {
                const d = c === 1 ? h.targetResolution : h.sourceResolution + c * (h.targetResolution - h.sourceResolution);
                if (h.anchor) {
                  const p = this.getViewportSize_(this.getRotation()), f = this.constraints_.resolution(d, 0, p, !0);
                  this.targetCenter_ = this.calculateCenterZoom(f, h.anchor);
                }
                this.nextResolution_ = h.targetResolution, this.targetResolution_ = d, this.applyTargetState_(!0);
              }
              if (h.sourceRotation !== void 0 && h.targetRotation !== void 0) {
                const d = c === 1 ? ti(h.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : h.sourceRotation + c * (h.targetRotation - h.sourceRotation);
                if (h.anchor) {
                  const p = this.constraints_.rotation(d, !0);
                  this.targetCenter_ = this.calculateCenterRotate(p, h.anchor);
                }
                this.nextRotation_ = h.targetRotation, this.targetRotation_ = d;
              }
              if (this.applyTargetState_(!0), e = !0, !h.complete) break;
            }
            if (r) {
              this.animations_[s] = null, this.setHint(ie.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
              const o = i[0].callback;
              o && Go(o, !0);
            }
          }
          this.animations_ = this.animations_.filter(Boolean), e && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this)));
        }
        calculateCenterRotate(t, e) {
          let s;
          const i = this.getCenterInternal();
          return i !== void 0 && (s = [i[0] - e[0], i[1] - e[1]], rh(s, t - this.getRotation()), rp(s, e)), s;
        }
        calculateCenterZoom(t, e) {
          let s;
          const i = this.getCenterInternal(), r = this.getResolution();
          if (i !== void 0 && r !== void 0) {
            const o = e[0] - t * (e[0] - i[0]) / r, a = e[1] - t * (e[1] - i[1]) / r;
            s = [o, a];
          }
          return s;
        }
        getViewportSize_(t) {
          const e = this.viewportSize_;
          if (t) {
            const s = e[0], i = e[1];
            return [Math.abs(s * Math.cos(t)) + Math.abs(i * Math.sin(t)), Math.abs(s * Math.sin(t)) + Math.abs(i * Math.cos(t))];
          }
          return e;
        }
        setViewportSize(t) {
          this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
        }
        getCenter() {
          const t = this.getCenterInternal();
          return t && mh(t, this.getProjection());
        }
        getCenterInternal() {
          return this.get(Ze.CENTER);
        }
        getConstraints() {
          return this.constraints_;
        }
        getConstrainResolution() {
          return this.get("constrainResolution");
        }
        getHints(t) {
          return t !== void 0 ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice();
        }
        calculateExtent(t) {
          const e = this.calculateExtentInternal(t);
          return ec(e, this.getProjection());
        }
        calculateExtentInternal(t) {
          t = t || this.getViewportSizeMinusPadding_();
          const e = this.getCenterInternal();
          wt(e, "The view center is not defined");
          const s = this.getResolution();
          wt(s !== void 0, "The view resolution is not defined");
          const i = this.getRotation();
          return wt(i !== void 0, "The view rotation is not defined"), Co(e, s, i, t);
        }
        getMaxResolution() {
          return this.maxResolution_;
        }
        getMinResolution() {
          return this.minResolution_;
        }
        getMaxZoom() {
          return this.getZoomForResolution(this.minResolution_);
        }
        setMaxZoom(t) {
          this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
        }
        getMinZoom() {
          return this.getZoomForResolution(this.maxResolution_);
        }
        setMinZoom(t) {
          this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
        }
        setConstrainResolution(t) {
          this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
        }
        getProjection() {
          return this.projection_;
        }
        getResolution() {
          return this.get(Ze.RESOLUTION);
        }
        getResolutions() {
          return this.resolutions_;
        }
        getResolutionForExtent(t, e) {
          return this.getResolutionForExtentInternal(Vn(t, this.getProjection()), e);
        }
        getResolutionForExtentInternal(t, e) {
          e = e || this.getViewportSizeMinusPadding_();
          const s = pt(t) / e[0], i = Wt(t) / e[1];
          return Math.max(s, i);
        }
        getResolutionForValueFunction(t) {
          t = t || 2;
          const e = this.getConstrainedResolution(this.maxResolution_), s = this.minResolution_, i = Math.log(e / s) / Math.log(t);
          return function(r) {
            return e / Math.pow(t, r * i);
          };
        }
        getRotation() {
          return this.get(Ze.ROTATION);
        }
        getValueForResolutionFunction(t) {
          const e = Math.log(t || 2), s = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, r = Math.log(s / i) / e;
          return function(o) {
            return Math.log(s / o) / e / r;
          };
        }
        getViewportSizeMinusPadding_(t) {
          let e = this.getViewportSize_(t);
          const s = this.padding_;
          return s && (e = [e[0] - s[1] - s[3], e[1] - s[0] - s[2]]), e;
        }
        getState() {
          const t = this.getProjection(), e = this.getResolution(), s = this.getRotation();
          let i = this.getCenterInternal();
          const r = this.padding_;
          if (r) {
            const o = this.getViewportSizeMinusPadding_();
            i = Oh(i, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, s);
          }
          return { center: i.slice(0), projection: t !== void 0 ? t : null, resolution: e, nextCenter: this.nextCenter_, nextResolution: this.nextResolution_, nextRotation: this.nextRotation_, rotation: s, zoom: this.getZoom() };
        }
        getViewStateAndExtent() {
          return { viewState: this.getState(), extent: this.calculateExtent() };
        }
        getZoom() {
          let t;
          const e = this.getResolution();
          return e !== void 0 && (t = this.getZoomForResolution(e)), t;
        }
        getZoomForResolution(t) {
          let e = this.minZoom_ || 0, s, i;
          if (this.resolutions_) {
            const r = Va(this.resolutions_, t, 1);
            e = r, s = this.resolutions_[r], r == this.resolutions_.length - 1 ? i = 2 : i = s / this.resolutions_[r + 1];
          } else s = this.maxResolution_, i = this.zoomFactor_;
          return e + Math.log(s / t) / Math.log(i);
        }
        getResolutionForZoom(t) {
          var e;
          if ((e = this.resolutions_) != null && e.length) {
            if (this.resolutions_.length === 1) return this.resolutions_[0];
            const s = kt(Math.floor(t), 0, this.resolutions_.length - 2), i = this.resolutions_[s] / this.resolutions_[s + 1];
            return this.resolutions_[s] / Math.pow(i, kt(t - s, 0, 1));
          }
          return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
        }
        fit(t, e) {
          let s;
          if (wt(Array.isArray(t) || typeof t.getSimplifiedGeometry == "function", "Invalid extent or geometry provided as `geometry`"), Array.isArray(t)) {
            wt(!ri(t), "Cannot fit empty extent provided as `geometry`");
            const i = Vn(t, this.getProjection());
            s = Sc(i);
          } else if (t.getType() === "Circle") {
            const i = Vn(t.getExtent(), this.getProjection());
            s = Sc(i), s.rotate(this.getRotation(), wn(i));
          } else s = t;
          this.fitInternal(s, e);
        }
        rotatedExtentForGeometry(t) {
          const e = this.getRotation(), s = Math.cos(e), i = Math.sin(-e), r = t.getFlatCoordinates(), o = t.getStride();
          let a = 1 / 0, h = 1 / 0, l = -1 / 0, u = -1 / 0;
          for (let c = 0, d = r.length; c < d; c += o) {
            const p = r[c] * s - r[c + 1] * i, f = r[c] * i + r[c + 1] * s;
            a = Math.min(a, p), h = Math.min(h, f), l = Math.max(l, p), u = Math.max(u, f);
          }
          return [a, h, l, u];
        }
        fitInternal(t, e) {
          e = e || {};
          let s = e.size;
          s || (s = this.getViewportSizeMinusPadding_());
          const i = e.padding !== void 0 ? e.padding : [0, 0, 0, 0], r = e.nearest !== void 0 ? e.nearest : !1;
          let o;
          e.minResolution !== void 0 ? o = e.minResolution : e.maxZoom !== void 0 ? o = this.getResolutionForZoom(e.maxZoom) : o = 0;
          const a = this.rotatedExtentForGeometry(t);
          let h = this.getResolutionForExtentInternal(a, [s[0] - i[1] - i[3], s[1] - i[0] - i[2]]);
          h = isNaN(h) ? o : Math.max(h, o), h = this.getConstrainedResolution(h, r ? 0 : 1);
          const l = this.getRotation(), u = Math.sin(l), c = Math.cos(l), d = wn(a);
          d[0] += (i[1] - i[3]) / 2 * h, d[1] += (i[0] - i[2]) / 2 * h;
          const p = d[0] * c - d[1] * u, f = d[1] * c + d[0] * u, y = this.getConstrainedCenter([p, f], h), E = e.callback ? e.callback : Js;
          e.duration !== void 0 ? this.animateInternal({ resolution: h, center: y, duration: e.duration, easing: e.easing }, E) : (this.targetResolution_ = h, this.targetCenter_ = y, this.applyTargetState_(!1, !0), Go(E, !0));
        }
        centerOn(t, e, s) {
          this.centerOnInternal(Sn(t, this.getProjection()), e, s);
        }
        centerOnInternal(t, e, s) {
          this.setCenterInternal(Oh(t, e, s, this.getResolution(), this.getRotation()));
        }
        calculateCenterShift(t, e, s, i) {
          let r;
          const o = this.padding_;
          if (o && t) {
            const a = this.getViewportSizeMinusPadding_(-s), h = Oh(t, i, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, s);
            r = [t[0] - h[0], t[1] - h[1]];
          }
          return r;
        }
        isDef() {
          return !!this.getCenterInternal() && this.getResolution() !== void 0;
        }
        adjustCenter(t) {
          const e = mh(this.targetCenter_, this.getProjection());
          this.setCenter([e[0] + t[0], e[1] + t[1]]);
        }
        adjustCenterInternal(t) {
          const e = this.targetCenter_;
          this.setCenterInternal([e[0] + t[0], e[1] + t[1]]);
        }
        adjustResolution(t, e) {
          e = e && Sn(e, this.getProjection()), this.adjustResolutionInternal(t, e);
        }
        adjustResolutionInternal(t, e) {
          const s = this.getAnimating() || this.getInteracting(), i = this.getViewportSize_(this.getRotation()), r = this.constraints_.resolution(this.targetResolution_ * t, 0, i, s);
          e && (this.targetCenter_ = this.calculateCenterZoom(r, e)), this.targetResolution_ *= t, this.applyTargetState_();
        }
        adjustZoom(t, e) {
          this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
        }
        adjustRotation(t, e) {
          e && (e = Sn(e, this.getProjection())), this.adjustRotationInternal(t, e);
        }
        adjustRotationInternal(t, e) {
          const s = this.getAnimating() || this.getInteracting(), i = this.constraints_.rotation(this.targetRotation_ + t, s);
          e && (this.targetCenter_ = this.calculateCenterRotate(i, e)), this.targetRotation_ += t, this.applyTargetState_();
        }
        setCenter(t) {
          this.setCenterInternal(t && Sn(t, this.getProjection()));
        }
        setCenterInternal(t) {
          this.targetCenter_ = t, this.applyTargetState_();
        }
        setHint(t, e) {
          return this.hints_[t] += e, this.changed(), this.hints_[t];
        }
        setResolution(t) {
          this.targetResolution_ = t, this.applyTargetState_();
        }
        setRotation(t) {
          this.targetRotation_ = t, this.applyTargetState_();
        }
        setZoom(t) {
          this.setResolution(this.getResolutionForZoom(t));
        }
        applyTargetState_(t, e) {
          const s = this.getAnimating() || this.getInteracting() || e, i = this.constraints_.rotation(this.targetRotation_, s), r = this.getViewportSize_(i), o = this.constraints_.resolution(this.targetResolution_, 0, r, s), a = this.constraints_.center(this.targetCenter_, o, r, s, this.calculateCenterShift(this.targetCenter_, o, i, r));
          this.get(Ze.ROTATION) !== i && this.set(Ze.ROTATION, i), this.get(Ze.RESOLUTION) !== o && (this.set(Ze.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Ze.CENTER) || !To(this.get(Ze.CENTER), a)) && this.set(Ze.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
        }
        resolveConstraints(t, e, s) {
          t = t !== void 0 ? t : 200;
          const i = e || 0, r = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(r), a = this.constraints_.resolution(this.targetResolution_, i, o), h = this.constraints_.center(this.targetCenter_, a, o, !1, this.calculateCenterShift(this.targetCenter_, a, r, o));
          if (t === 0 && !this.cancelAnchor_) {
            this.targetResolution_ = a, this.targetRotation_ = r, this.targetCenter_ = h, this.applyTargetState_();
            return;
          }
          s = s || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== r || !this.getCenterInternal() || !To(this.getCenterInternal(), h)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({ rotation: r, center: h, resolution: a, duration: t, easing: hi, anchor: s }));
        }
        beginInteraction() {
          this.resolveConstraints(0), this.setHint(ie.INTERACTING, 1);
        }
        endInteraction(t, e, s) {
          s = s && Sn(s, this.getProjection()), this.endInteractionInternal(t, e, s);
        }
        endInteractionInternal(t, e, s) {
          this.getInteracting() && (this.setHint(ie.INTERACTING, -1), this.resolveConstraints(t, e, s));
        }
        getConstrainedCenter(t, e) {
          const s = this.getViewportSize_(this.getRotation());
          return this.constraints_.center(t, e || this.getResolution(), s);
        }
        getConstrainedZoom(t, e) {
          const s = this.getResolutionForZoom(t);
          return this.getZoomForResolution(this.getConstrainedResolution(s, e));
        }
        getConstrainedResolution(t, e) {
          e = e || 0;
          const s = this.getViewportSize_(this.getRotation());
          return this.constraints_.resolution(t, e, s);
        }
      }
      function Go(n, t) {
        setTimeout(function() {
          n(t);
        }, 0);
      }
      function om(n) {
        if (n.extent !== void 0) {
          const e = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0;
          return sc(n.extent, n.constrainOnlyCenter, e);
        }
        const t = dh(n.projection, "EPSG:3857");
        if (n.multiWorld !== !0 && t.isGlobal()) {
          const e = t.getExtent().slice();
          return e[0] = -1 / 0, e[2] = 1 / 0, sc(e, !1, !1);
        }
        return Ap;
      }
      function am(n) {
        let t, e, s, i = n.minZoom !== void 0 ? n.minZoom : Lh, r = n.maxZoom !== void 0 ? n.maxZoom : 28;
        const o = n.zoomFactor !== void 0 ? n.zoomFactor : 2, a = n.multiWorld !== void 0 ? n.multiWorld : !1, h = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0, l = n.showFullExtent !== void 0 ? n.showFullExtent : !1, u = dh(n.projection, "EPSG:3857"), c = u.getExtent();
        let d = n.constrainOnlyCenter, p = n.extent;
        if (!a && !p && u.isGlobal() && (d = !1, p = c), n.resolutions !== void 0) {
          const f = n.resolutions;
          e = f[i], s = f[r] !== void 0 ? f[r] : f[f.length - 1], n.constrainResolution ? t = Pp(f, h, !d && p, l) : t = ic(e, s, h, !d && p, l);
        } else {
          const f = (c ? Math.max(pt(c), Wt(c)) : 360 * Ha.degrees / u.getMetersPerUnit()) / Ka / Math.pow(2, Lh), y = f / Math.pow(2, 28 - Lh);
          e = n.maxResolution, e !== void 0 ? i = 0 : e = f / Math.pow(o, i), s = n.minResolution, s === void 0 && (n.maxZoom !== void 0 ? n.maxResolution !== void 0 ? s = e / Math.pow(o, r) : s = f / Math.pow(o, r) : s = y), r = i + Math.floor(Math.log(e / s) / Math.log(o)), s = e / Math.pow(o, r - i), n.constrainResolution ? t = Lp(o, e, s, h, !d && p, l) : t = ic(e, s, h, !d && p, l);
        }
        return { constraint: t, maxResolution: e, minResolution: s, minZoom: i, zoomFactor: o };
      }
      function hm(n) {
        if (n.enableRotation === void 0 || n.enableRotation) {
          const t = n.constrainRotation;
          return t === void 0 || t === !0 ? Np() : t === !1 ? rc : typeof t == "number" ? Op(t) : rc;
        }
        return xh;
      }
      function lm(n) {
        return !(n.sourceCenter && n.targetCenter && !To(n.sourceCenter, n.targetCenter) || n.sourceResolution !== n.targetResolution || n.sourceRotation !== n.targetRotation);
      }
      function Oh(n, t, e, s, i) {
        const r = Math.cos(-i);
        let o = Math.sin(-i), a = n[0] * r - n[1] * o, h = n[1] * r + n[0] * o;
        a += (t[0] / 2 - e[0]) * s, h += (e[1] - t[1] / 2) * s, o = -o;
        const l = a * r - h * o, u = h * r + a * o;
        return [l, u];
      }
      class zo extends Au {
        constructor(t) {
          const e = Object.assign({}, t);
          delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(Tt.SOURCE, this.handleSourcePropertyChange_);
          const s = t.source ? t.source : null;
          this.setSource(s);
        }
        getLayersArray(t) {
          return t = t || [], t.push(this), t;
        }
        getLayerStatesArray(t) {
          return t = t || [], t.push(this.getLayerState()), t;
        }
        getSource() {
          return this.get(Tt.SOURCE) || null;
        }
        getRenderSource() {
          return this.getSource();
        }
        getSourceState() {
          const t = this.getSource();
          return t ? t.getState() : "undefined";
        }
        handleSourceChange_() {
          this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
        }
        handleSourcePropertyChange_() {
          this.sourceChangeKey_ && (At(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
          const t = this.getSource();
          t && (this.sourceChangeKey_ = xt(t, lt.CHANGE, this.handleSourceChange_, this), t.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
            this.dispatchEvent("sourceready");
          }, 0))), this.changed();
        }
        getFeatures(t) {
          return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
        }
        getData(t) {
          return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
        }
        isVisible(t) {
          let e;
          const s = this.getMapInternal();
          !t && s && (t = s.getView()), t instanceof ln ? e = { viewState: t.getState(), extent: t.calculateExtent() } : e = t, !e.layerStatesArray && s && (e.layerStatesArray = s.getLayerGroup().getLayerStatesArray());
          let i;
          if (e.layerStatesArray) {
            if (i = e.layerStatesArray.find((o) => o.layer === this), !i) return !1;
          } else i = this.getLayerState();
          const r = this.getExtent();
          return Nh(i, e.viewState) && (!r || re(r, e.extent));
        }
        getAttributions(t) {
          var e;
          if (!this.isVisible(t)) return [];
          const s = (e = this.getSource()) == null ? void 0 : e.getAttributions();
          if (!s) return [];
          const i = t instanceof ln ? t.getViewStateAndExtent() : t;
          let r = s(i);
          return Array.isArray(r) || (r = [r]), r;
        }
        render(t, e) {
          const s = this.getRenderer();
          return s.prepareFrame(t) ? (this.rendered = !0, s.renderFrame(t, e)) : null;
        }
        unrender() {
          this.rendered = !1;
        }
        getDeclutter() {
        }
        renderDeclutter(t, e) {
        }
        renderDeferred(t) {
          const e = this.getRenderer();
          e && e.renderDeferred(t);
        }
        setMapInternal(t) {
          t || this.unrender(), this.set(Tt.MAP, t);
        }
        getMapInternal() {
          return this.get(Tt.MAP);
        }
        setMap(t) {
          this.mapPrecomposeKey_ && (At(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (At(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = xt(t, Ge.PRECOMPOSE, this.handlePrecompose_, this), this.mapRenderKey_ = xt(this, lt.CHANGE, t.render, t), this.changed());
        }
        handlePrecompose_(t) {
          const e = t.frameState.layerStatesArray, s = this.getLayerState(!1);
          wt(!e.some((i) => i.layer === s.layer), "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."), e.push(s);
        }
        setSource(t) {
          this.set(Tt.SOURCE, t);
        }
        getRenderer() {
          return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
        }
        hasRenderer() {
          return !!this.renderer_;
        }
        createRenderer() {
          return null;
        }
        clearRenderer() {
          this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
        }
        disposeInternal() {
          this.clearRenderer(), this.setSource(null), super.disposeInternal();
        }
      }
      function Nh(n, t) {
        if (!n.visible) return !1;
        const e = t.resolution;
        if (e < n.minResolution || e >= n.maxResolution) return !1;
        const s = t.zoom;
        return s > n.minZoom && s <= n.maxZoom;
      }
      function vc(n, t, e = 0, s = n.length - 1, i = um) {
        for (; s > e; ) {
          if (s - e > 600) {
            const h = s - e + 1, l = t - e + 1, u = Math.log(h), c = 0.5 * Math.exp(2 * u / 3), d = 0.5 * Math.sqrt(u * c * (h - c) / h) * (l - h / 2 < 0 ? -1 : 1), p = Math.max(e, Math.floor(t - l * c / h + d)), f = Math.min(s, Math.floor(t + (h - l) * c / h + d));
            vc(n, t, p, f, i);
          }
          const r = n[t];
          let o = e, a = s;
          for (cr(n, e, t), i(n[s], r) > 0 && cr(n, e, s); o < a; ) {
            for (cr(n, o, a), o++, a--; i(n[o], r) < 0; ) o++;
            for (; i(n[a], r) > 0; ) a--;
          }
          i(n[e], r) === 0 ? cr(n, e, a) : (a++, cr(n, a, s)), a <= t && (e = a + 1), t <= a && (s = a - 1);
        }
      }
      function cr(n, t, e) {
        const s = n[t];
        n[t] = n[e], n[e] = s;
      }
      function um(n, t) {
        return n < t ? -1 : n > t ? 1 : 0;
      }
      let Rc = class {
        constructor(n = 9) {
          this._maxEntries = Math.max(4, n), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
        }
        all() {
          return this._all(this.data, []);
        }
        search(n) {
          let t = this.data;
          const e = [];
          if (!Bo(n, t)) return e;
          const s = this.toBBox, i = [];
          for (; t; ) {
            for (let r = 0; r < t.children.length; r++) {
              const o = t.children[r], a = t.leaf ? s(o) : o;
              Bo(n, a) && (t.leaf ? e.push(o) : kh(n, a) ? this._all(o, e) : i.push(o));
            }
            t = i.pop();
          }
          return e;
        }
        collides(n) {
          let t = this.data;
          if (!Bo(n, t)) return !1;
          const e = [];
          for (; t; ) {
            for (let s = 0; s < t.children.length; s++) {
              const i = t.children[s], r = t.leaf ? this.toBBox(i) : i;
              if (Bo(n, r)) {
                if (t.leaf || kh(n, r)) return !0;
                e.push(i);
              }
            }
            t = e.pop();
          }
          return !1;
        }
        load(n) {
          if (!(n && n.length)) return this;
          if (n.length < this._minEntries) {
            for (let e = 0; e < n.length; e++) this.insert(n[e]);
            return this;
          }
          let t = this._build(n.slice(), 0, n.length - 1, 0);
          if (!this.data.children.length) this.data = t;
          else if (this.data.height === t.height) this._splitRoot(this.data, t);
          else {
            if (this.data.height < t.height) {
              const e = this.data;
              this.data = t, t = e;
            }
            this._insert(t, this.data.height - t.height - 1, !0);
          }
          return this;
        }
        insert(n) {
          return n && this._insert(n, this.data.height - 1), this;
        }
        clear() {
          return this.data = ui([]), this;
        }
        remove(n, t) {
          if (!n) return this;
          let e = this.data;
          const s = this.toBBox(n), i = [], r = [];
          let o, a, h;
          for (; e || i.length; ) {
            if (e || (e = i.pop(), a = i[i.length - 1], o = r.pop(), h = !0), e.leaf) {
              const l = cm(n, e.children, t);
              if (l !== -1) return e.children.splice(l, 1), i.push(e), this._condense(i), this;
            }
            !h && !e.leaf && kh(e, s) ? (i.push(e), r.push(o), o = 0, a = e, e = e.children[0]) : a ? (o++, e = a.children[o], h = !1) : e = null;
          }
          return this;
        }
        toBBox(n) {
          return n;
        }
        compareMinX(n, t) {
          return n.minX - t.minX;
        }
        compareMinY(n, t) {
          return n.minY - t.minY;
        }
        toJSON() {
          return this.data;
        }
        fromJSON(n) {
          return this.data = n, this;
        }
        _all(n, t) {
          const e = [];
          for (; n; ) n.leaf ? t.push(...n.children) : e.push(...n.children), n = e.pop();
          return t;
        }
        _build(n, t, e, s) {
          const i = e - t + 1;
          let r = this._maxEntries, o;
          if (i <= r) return o = ui(n.slice(t, e + 1)), li(o, this.toBBox), o;
          s || (s = Math.ceil(Math.log(i) / Math.log(r)), r = Math.ceil(i / Math.pow(r, s - 1))), o = ui([]), o.leaf = !1, o.height = s;
          const a = Math.ceil(i / r), h = a * Math.ceil(Math.sqrt(r));
          Cc(n, t, e, h, this.compareMinX);
          for (let l = t; l <= e; l += h) {
            const u = Math.min(l + h - 1, e);
            Cc(n, l, u, a, this.compareMinY);
            for (let c = l; c <= u; c += a) {
              const d = Math.min(c + a - 1, u);
              o.children.push(this._build(n, c, d, s - 1));
            }
          }
          return li(o, this.toBBox), o;
        }
        _chooseSubtree(n, t, e, s) {
          for (; s.push(t), !(t.leaf || s.length - 1 === e); ) {
            let i = 1 / 0, r = 1 / 0, o;
            for (let a = 0; a < t.children.length; a++) {
              const h = t.children[a], l = Fh(h), u = gm(n, h) - l;
              u < r ? (r = u, i = l < i ? l : i, o = h) : u === r && l < i && (i = l, o = h);
            }
            t = o || t.children[0];
          }
          return t;
        }
        _insert(n, t, e) {
          const s = e ? n : this.toBBox(n), i = [], r = this._chooseSubtree(s, this.data, t, i);
          for (r.children.push(n), fr(r, s); t >= 0 && i[t].children.length > this._maxEntries; ) this._split(i, t), t--;
          this._adjustParentBBoxes(s, i, t);
        }
        _split(n, t) {
          const e = n[t], s = e.children.length, i = this._minEntries;
          this._chooseSplitAxis(e, i, s);
          const r = this._chooseSplitIndex(e, i, s), o = ui(e.children.splice(r, e.children.length - r));
          o.height = e.height, o.leaf = e.leaf, li(e, this.toBBox), li(o, this.toBBox), t ? n[t - 1].children.push(o) : this._splitRoot(e, o);
        }
        _splitRoot(n, t) {
          this.data = ui([n, t]), this.data.height = n.height + 1, this.data.leaf = !1, li(this.data, this.toBBox);
        }
        _chooseSplitIndex(n, t, e) {
          let s, i = 1 / 0, r = 1 / 0;
          for (let o = t; o <= e - t; o++) {
            const a = dr(n, 0, o, this.toBBox), h = dr(n, o, e, this.toBBox), l = pm(a, h), u = Fh(a) + Fh(h);
            l < i ? (i = l, s = o, r = u < r ? u : r) : l === i && u < r && (r = u, s = o);
          }
          return s || e - t;
        }
        _chooseSplitAxis(n, t, e) {
          const s = n.leaf ? this.compareMinX : dm, i = n.leaf ? this.compareMinY : fm, r = this._allDistMargin(n, t, e, s), o = this._allDistMargin(n, t, e, i);
          r < o && n.children.sort(s);
        }
        _allDistMargin(n, t, e, s) {
          n.children.sort(s);
          const i = this.toBBox, r = dr(n, 0, t, i), o = dr(n, e - t, e, i);
          let a = Uo(r) + Uo(o);
          for (let h = t; h < e - t; h++) {
            const l = n.children[h];
            fr(r, n.leaf ? i(l) : l), a += Uo(r);
          }
          for (let h = e - t - 1; h >= t; h--) {
            const l = n.children[h];
            fr(o, n.leaf ? i(l) : l), a += Uo(o);
          }
          return a;
        }
        _adjustParentBBoxes(n, t, e) {
          for (let s = e; s >= 0; s--) fr(t[s], n);
        }
        _condense(n) {
          for (let t = n.length - 1, e; t >= 0; t--) n[t].children.length === 0 ? t > 0 ? (e = n[t - 1].children, e.splice(e.indexOf(n[t]), 1)) : this.clear() : li(n[t], this.toBBox);
        }
      };
      function cm(n, t, e) {
        if (!e) return t.indexOf(n);
        for (let s = 0; s < t.length; s++) if (e(n, t[s])) return s;
        return -1;
      }
      function li(n, t) {
        dr(n, 0, n.children.length, t, n);
      }
      function dr(n, t, e, s, i) {
        i || (i = ui(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
        for (let r = t; r < e; r++) {
          const o = n.children[r];
          fr(i, n.leaf ? s(o) : o);
        }
        return i;
      }
      function fr(n, t) {
        return n.minX = Math.min(n.minX, t.minX), n.minY = Math.min(n.minY, t.minY), n.maxX = Math.max(n.maxX, t.maxX), n.maxY = Math.max(n.maxY, t.maxY), n;
      }
      function dm(n, t) {
        return n.minX - t.minX;
      }
      function fm(n, t) {
        return n.minY - t.minY;
      }
      function Fh(n) {
        return (n.maxX - n.minX) * (n.maxY - n.minY);
      }
      function Uo(n) {
        return n.maxX - n.minX + (n.maxY - n.minY);
      }
      function gm(n, t) {
        return (Math.max(t.maxX, n.maxX) - Math.min(t.minX, n.minX)) * (Math.max(t.maxY, n.maxY) - Math.min(t.minY, n.minY));
      }
      function pm(n, t) {
        const e = Math.max(n.minX, t.minX), s = Math.max(n.minY, t.minY), i = Math.min(n.maxX, t.maxX), r = Math.min(n.maxY, t.maxY);
        return Math.max(0, i - e) * Math.max(0, r - s);
      }
      function kh(n, t) {
        return n.minX <= t.minX && n.minY <= t.minY && t.maxX <= n.maxX && t.maxY <= n.maxY;
      }
      function Bo(n, t) {
        return t.minX <= n.maxX && t.minY <= n.maxY && t.maxX >= n.minX && t.maxY >= n.minY;
      }
      function ui(n) {
        return { children: n, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
      }
      function Cc(n, t, e, s, i) {
        const r = [t, e];
        for (; r.length; ) {
          if (e = r.pop(), t = r.pop(), e - t <= s) continue;
          const o = t + Math.ceil((e - t) / s / 2) * s;
          vc(n, o, t, e, i), r.push(t, o, o, e);
        }
      }
      const gt = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
      var gr = { name: "rgb", min: [0, 0, 0], max: [255, 255, 255], channel: ["red", "green", "blue"], alias: ["RGB"] }, oe = { name: "xyz", min: [0, 0, 0], channel: ["X", "Y", "Z"], alias: ["XYZ", "ciexyz", "cie1931"], whitepoint: { 2: { A: [109.85, 100, 35.585], C: [98.074, 100, 118.232], D50: [96.422, 100, 82.521], D55: [95.682, 100, 92.149], D65: [95.045592705167, 100, 108.9057750759878], D75: [94.972, 100, 122.638], F2: [99.187, 100, 67.395], F7: [95.044, 100, 108.755], F11: [100.966, 100, 64.37], E: [100, 100, 100] }, 10: { A: [111.144, 100, 35.2], C: [97.285, 100, 116.145], D50: [96.72, 100, 81.427], D55: [95.799, 100, 90.926], D65: [94.811, 100, 107.304], D75: [94.416, 100, 120.641], F2: [103.28, 100, 69.026], F7: [95.792, 100, 107.687], F11: [103.866, 100, 65.627], E: [100, 100, 100] } } };
      oe.max = oe.whitepoint[2].D65, oe.rgb = function(n, t) {
        t = t || oe.whitepoint[2].E;
        var e = n[0] / t[0], s = n[1] / t[1], i = n[2] / t[2], r, o, a;
        return r = e * 3.240969941904521 + s * -1.537383177570093 + i * -0.498610760293, o = e * -0.96924363628087 + s * 1.87596750150772 + i * 0.041555057407175, a = e * 0.055630079696993 + s * -0.20397695888897 + i * 1.056971514242878, r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r = r * 12.92, o = o > 31308e-7 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o = o * 12.92, a = a > 31308e-7 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : a = a * 12.92, r = Math.min(Math.max(0, r), 1), o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), [r * 255, o * 255, a * 255];
      }, gr.xyz = function(n, t) {
        var e = n[0] / 255, s = n[1] / 255, i = n[2] / 255;
        e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92, s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92, i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
        var r = e * 0.41239079926595 + s * 0.35758433938387 + i * 0.18048078840183, o = e * 0.21263900587151 + s * 0.71516867876775 + i * 0.072192315360733, a = e * 0.019330818715591 + s * 0.11919477979462 + i * 0.95053215224966;
        return t = t || oe.whitepoint[2].E, [r * t[0], o * t[1], a * t[2]];
      };
      var Dh = { name: "luv", min: [0, -134, -140], max: [100, 224, 122], channel: ["lightness", "u", "v"], alias: ["LUV", "cieluv", "cie1976"], xyz: function(n, t, e) {
        var s, i, r, o, a, h, l, u, c, d, p, f, y;
        if (r = n[0], o = n[1], a = n[2], r === 0) return [0, 0, 0];
        var E = 0.0011070564598794539;
        return t = t || "D65", e = e || 2, c = oe.whitepoint[e][t][0], d = oe.whitepoint[e][t][1], p = oe.whitepoint[e][t][2], f = 4 * c / (c + 15 * d + 3 * p), y = 9 * d / (c + 15 * d + 3 * p), s = o / (13 * r) + f || 0, i = a / (13 * r) + y || 0, l = r > 8 ? d * Math.pow((r + 16) / 116, 3) : d * r * E, h = l * 9 * s / (4 * i) || 0, u = l * (12 - 3 * s - 20 * i) / (4 * i) || 0, [h, l, u];
      } };
      oe.luv = function(n, t, e) {
        var s, i, r, o, a, h, l, u, c, d, p, f, y, E = 0.008856451679035631, M = 903.2962962962961;
        t = t || "D65", e = e || 2, c = oe.whitepoint[e][t][0], d = oe.whitepoint[e][t][1], p = oe.whitepoint[e][t][2], f = 4 * c / (c + 15 * d + 3 * p), y = 9 * d / (c + 15 * d + 3 * p), h = n[0], l = n[1], u = n[2], s = 4 * h / (h + 15 * l + 3 * u) || 0, i = 9 * l / (h + 15 * l + 3 * u) || 0;
        var w = l / d;
        return r = w <= E ? M * w : 116 * Math.pow(w, 1 / 3) - 16, o = 13 * r * (s - f), a = 13 * r * (i - y), [r, o, a];
      };
      var bc = { name: "lchuv", channel: ["lightness", "chroma", "hue"], alias: ["LCHuv", "cielchuv"], min: [0, 0, 0], max: [100, 100, 360], luv: function(n) {
        var t = n[0], e = n[1], s = n[2], i, r, o;
        return o = s / 360 * 2 * Math.PI, i = e * Math.cos(o), r = e * Math.sin(o), [t, i, r];
      }, xyz: function(n) {
        return Dh.xyz(bc.luv(n));
      } };
      Dh.lchuv = function(n) {
        var t = n[0], e = n[1], s = n[2], i = Math.sqrt(e * e + s * s), r = Math.atan2(s, e), o = r * 360 / 2 / Math.PI;
        return o < 0 && (o += 360), [t, i, o];
      }, oe.lchuv = function(n) {
        return Dh.lchuv(oe.luv(n));
      };
      const Tc = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
      var Ic = { red: 0, orange: 60, yellow: 120, green: 180, blue: 240, purple: 300 };
      function mm(n) {
        var t, e, s, i = [], r = 1, o;
        if (typeof n == "number") return { space: "rgb", values: [n >>> 16, (n & 65280) >>> 8, n & 255], alpha: 1 };
        if (typeof n == "number") return { space: "rgb", values: [n >>> 16, (n & 65280) >>> 8, n & 255], alpha: 1 };
        if (n = String(n).toLowerCase(), Tc[n]) i = Tc[n].slice(), o = "rgb";
        else if (n === "transparent") r = 0, o = "rgb", i = [0, 0, 0];
        else if (n[0] === "#") {
          var a = n.slice(1), h = a.length, l = h <= 4;
          r = 1, l ? (i = [parseInt(a[0] + a[0], 16), parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16)], h === 4 && (r = parseInt(a[3] + a[3], 16) / 255)) : (i = [parseInt(a[0] + a[1], 16), parseInt(a[2] + a[3], 16), parseInt(a[4] + a[5], 16)], h === 8 && (r = parseInt(a[6] + a[7], 16) / 255)), i[0] || (i[0] = 0), i[1] || (i[1] = 0), i[2] || (i[2] = 0), o = "rgb";
        } else if (s = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(n)) {
          var u = s[1];
          o = u.replace(/a$/, "");
          var c = o === "cmyk" ? 4 : o === "gray" ? 1 : 3;
          i = s[2].trim().split(/\s*[,\/]\s*|\s+/), o === "color" && (o = i.shift()), i = i.map(function(d, p) {
            if (d[d.length - 1] === "%") return d = parseFloat(d) / 100, p === 3 ? d : o === "rgb" ? d * 255 : o[0] === "h" || o[0] === "l" && !p ? d * 100 : o === "lab" ? d * 125 : o === "lch" ? p < 2 ? d * 150 : d * 360 : o[0] === "o" && !p ? d : o === "oklab" ? d * 0.4 : o === "oklch" ? p < 2 ? d * 0.4 : d * 360 : d;
            if (o[p] === "h" || p === 2 && o[o.length - 1] === "h") {
              if (Ic[d] !== void 0) return Ic[d];
              if (d.endsWith("deg")) return parseFloat(d);
              if (d.endsWith("turn")) return parseFloat(d) * 360;
              if (d.endsWith("grad")) return parseFloat(d) * 360 / 400;
              if (d.endsWith("rad")) return parseFloat(d) * 180 / Math.PI;
            }
            return d === "none" ? 0 : parseFloat(d);
          }), r = i.length > c ? i.pop() : 1;
        } else /[0-9](?:\s|\/|,)/.test(n) && (i = n.match(/([0-9]+)/g).map(function(d) {
          return parseFloat(d);
        }), o = ((e = (t = n.match(/([a-z])/ig)) == null ? void 0 : t.join("")) == null ? void 0 : e.toLowerCase()) || "rgb");
        return { space: o, values: i, alpha: r };
      }
      var Gh = { name: "hsl", min: [0, 0, 0], max: [360, 100, 100], channel: ["hue", "saturation", "lightness"], alias: ["HSL"], rgb: function(n) {
        var t = n[0] / 360, e = n[1] / 100, s = n[2] / 100, i, r, o, a, h, l = 0;
        if (e === 0) return h = s * 255, [h, h, h];
        for (r = s < 0.5 ? s * (1 + e) : s + e - s * e, i = 2 * s - r, a = [0, 0, 0]; l < 3; ) o = t + 1 / 3 * -(l - 1), o < 0 ? o++ : o > 1 && o--, h = 6 * o < 1 ? i + (r - i) * 6 * o : 2 * o < 1 ? r : 3 * o < 2 ? i + (r - i) * (2 / 3 - o) * 6 : i, a[l++] = h * 255;
        return a;
      } };
      gr.hsl = function(n) {
        var t = n[0] / 255, e = n[1] / 255, s = n[2] / 255, i = Math.min(t, e, s), r = Math.max(t, e, s), o = r - i, a, h, l;
        return r === i ? a = 0 : t === r ? a = (e - s) / o : e === r ? a = 2 + (s - t) / o : s === r && (a = 4 + (t - e) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360), l = (i + r) / 2, r === i ? h = 0 : l <= 0.5 ? h = o / (r + i) : h = o / (2 - r - i), [a, h * 100, l * 100];
      };
      function _m(n) {
        Array.isArray(n) && n.raw && (n = String.raw(...arguments)), n instanceof Number && (n = +n);
        var t, e = mm(n);
        if (!e.space) return [];
        const s = e.space[0] === "h" ? Gh.min : gr.min, i = e.space[0] === "h" ? Gh.max : gr.max;
        return t = Array(3), t[0] = Math.min(Math.max(e.values[0], s[0]), i[0]), t[1] = Math.min(Math.max(e.values[1], s[1]), i[1]), t[2] = Math.min(Math.max(e.values[2], s[2]), i[2]), e.space[0] === "h" && (t = Gh.rgb(t)), t.push(Math.min(Math.max(e.alpha, 0), 1)), t;
      }
      const zh = [NaN, NaN, NaN, 0];
      function ym(n) {
        return typeof n == "string" ? n : jh(n);
      }
      const xm = 1024, pr = {};
      let Uh = 0;
      function Em(n) {
        if (n.length === 4) return n;
        const t = n.slice();
        return t[3] = 1, t;
      }
      function Ac(n) {
        const t = oe.lchuv(gr.xyz(n));
        return t[3] = n[3], t;
      }
      function Mm(n) {
        const t = oe.rgb(bc.xyz(n));
        return t[3] = n[3], t;
      }
      function Bh(n) {
        if (n === "none") return zh;
        if (pr.hasOwnProperty(n)) return pr[n];
        if (Uh >= xm) {
          let e = 0;
          for (const s in pr) e++ & 3 || (delete pr[s], --Uh);
        }
        const t = _m(n);
        if (t.length !== 4) throw new Error('failed to parse "' + n + '" as color');
        for (const e of t) if (isNaN(e)) throw new Error('failed to parse "' + n + '" as color');
        return Pc(t), pr[n] = t, ++Uh, t;
      }
      function ci(n) {
        return Array.isArray(n) ? n : Bh(n);
      }
      function Pc(n) {
        return n[0] = kt(n[0] + 0.5 | 0, 0, 255), n[1] = kt(n[1] + 0.5 | 0, 0, 255), n[2] = kt(n[2] + 0.5 | 0, 0, 255), n[3] = kt(n[3], 0, 1), n;
      }
      function jh(n) {
        let t = n[0];
        t != (t | 0) && (t = t + 0.5 | 0);
        let e = n[1];
        e != (e | 0) && (e = e + 0.5 | 0);
        let s = n[2];
        s != (s | 0) && (s = s + 0.5 | 0);
        const i = n[3] === void 0 ? 1 : Math.round(n[3] * 1e3) / 1e3;
        return "rgba(" + t + "," + e + "," + s + "," + i + ")";
      }
      const Kn = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "", Lc = Kn.includes("firefox"), Oc = Kn.includes("safari") && !Kn.includes("chrom"), wm = Oc && (Kn.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(Kn)), Nc = Kn.includes("webkit") && !Kn.includes("edge"), Wh = Kn.includes("macintosh"), jo = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, Wo = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, Yh = typeof Image < "u" && Image.prototype.decode, Sm = typeof createImageBitmap == "function", Xh = function() {
        let n = !1;
        try {
          const t = Object.defineProperty({}, "passive", { get: function() {
            n = !0;
          } });
          window.addEventListener("_", null, t), window.removeEventListener("_", null, t);
        } catch {
        }
        return n;
      }(), vm = Object.freeze(Object.defineProperty({ __proto__: null, CREATE_IMAGE_BITMAP: Sm, DEVICE_PIXEL_RATIO: jo, FIREFOX: Lc, IMAGE_DECODE: Yh, MAC: Wh, PASSIVE_EVENT_LISTENERS: Xh, SAFARI: Oc, SAFARI_BUG_237906: wm, WEBKIT: Nc, WORKER_OFFSCREEN_CANVAS: Wo }, Symbol.toStringTag, { value: "Module" }));
      function Yt(n, t, e, s) {
        let i;
        return e && e.length ? i = e.shift() : Wo ? i = new OffscreenCanvas(n || 300, t || 300) : i = document.createElement("canvas"), n && (i.width = n), t && (i.height = t), i.getContext("2d", s);
      }
      let qh;
      function Yo() {
        return qh || (qh = Yt(1, 1)), qh;
      }
      function Xo(n) {
        const t = n.canvas;
        t.width = 1, t.height = 1, n.clearRect(0, 0, 1, 1);
      }
      function Rm(n) {
        let t = n.offsetWidth;
        const e = getComputedStyle(n);
        return t += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10), t;
      }
      function Cm(n) {
        let t = n.offsetHeight;
        const e = getComputedStyle(n);
        return t += parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10), t;
      }
      function Fc(n, t) {
        const e = t.parentNode;
        e && e.replaceChild(n, t);
      }
      function kc(n) {
        for (; n.lastChild; ) n.lastChild.remove();
      }
      function bm(n, t) {
        const e = n.childNodes;
        for (let s = 0; ; ++s) {
          const i = e[s], r = t[s];
          if (!i && !r) break;
          if (i !== r) {
            if (!i) {
              n.appendChild(r);
              continue;
            }
            if (!r) {
              n.removeChild(i), --s;
              continue;
            }
            n.insertBefore(r, i);
          }
        }
      }
      function Tm(n, t, e) {
        const s = n;
        let i = !0, r = !1, o = !1;
        const a = [fo(s, lt.LOAD, function() {
          o = !0, r || t();
        })];
        return s.src && Yh ? (r = !0, s.decode().then(function() {
          i && t();
        }).catch(function(h) {
          i && (o ? t() : e());
        })) : a.push(fo(s, lt.ERROR, e)), function() {
          i = !1, a.forEach(At);
        };
      }
      function Im(n, t) {
        return new Promise((e, s) => {
          function i() {
            o(), e(n);
          }
          function r() {
            o(), s(new Error("Image load error"));
          }
          function o() {
            n.removeEventListener("load", i), n.removeEventListener("error", r);
          }
          n.addEventListener("load", i), n.addEventListener("error", r);
        });
      }
      function Am(n, t) {
        return t && (n.src = t), n.src && Yh ? new Promise((e, s) => n.decode().then(() => e(n)).catch((i) => n.complete && n.width ? e(n) : s(i))) : Im(n);
      }
      class Pm {
        constructor() {
          this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 1024;
        }
        clear() {
          this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0;
        }
        canExpireCache() {
          return this.cacheSize_ > this.maxCacheSize_;
        }
        expire() {
          if (this.canExpireCache()) {
            let t = 0;
            for (const e in this.cache_) {
              const s = this.cache_[e];
              !(t++ & 3) && !s.hasListener() && (delete this.cache_[e], delete this.patternCache_[e], --this.cacheSize_);
            }
          }
        }
        get(t, e, s) {
          const i = Vh(t, e, s);
          return i in this.cache_ ? this.cache_[i] : null;
        }
        getPattern(t, e, s) {
          const i = Vh(t, e, s);
          return i in this.patternCache_ ? this.patternCache_[i] : null;
        }
        set(t, e, s, i, r) {
          const o = Vh(t, e, s), a = o in this.cache_;
          this.cache_[o] = i, r && (i.getImageState() === gt.IDLE && i.load(), i.getImageState() === gt.LOADING ? i.ready().then(() => {
            this.patternCache_[o] = Yo().createPattern(i.getImage(1), "repeat");
          }) : this.patternCache_[o] = Yo().createPattern(i.getImage(1), "repeat")), a || ++this.cacheSize_;
        }
        setSize(t) {
          this.maxCacheSize_ = t, this.expire();
        }
      }
      function Vh(n, t, e) {
        const s = e ? ci(e) : "null";
        return t + ":" + n + ":" + s;
      }
      const Be = new Pm();
      let mr = null;
      class $h extends co {
        constructor(t, e, s, i, r) {
          super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = s, this.canvas_ = {}, this.color_ = r, this.imageState_ = i === void 0 ? gt.IDLE : i, this.size_ = t && t.width && t.height ? [t.width, t.height] : null, this.src_ = e, this.tainted_, this.ready_ = null;
        }
        initializeImage_() {
          this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
        }
        isTainted_() {
          if (this.tainted_ === void 0 && this.imageState_ === gt.LOADED) {
            mr || (mr = Yt(1, 1, void 0, { willReadFrequently: !0 })), mr.drawImage(this.image_, 0, 0);
            try {
              mr.getImageData(0, 0, 1, 1), this.tainted_ = !1;
            } catch {
              mr = null, this.tainted_ = !0;
            }
          }
          return this.tainted_ === !0;
        }
        dispatchChangeEvent_() {
          this.dispatchEvent(lt.CHANGE);
        }
        handleImageError_() {
          this.imageState_ = gt.ERROR, this.dispatchChangeEvent_();
        }
        handleImageLoad_() {
          this.imageState_ = gt.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
        }
        getImage(t) {
          return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_;
        }
        getPixelRatio(t) {
          return this.replaceColor_(t), this.canvas_[t] ? t : 1;
        }
        getImageState() {
          return this.imageState_;
        }
        getHitDetectionImage() {
          if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_) if (this.isTainted_()) {
            const t = this.size_[0], e = this.size_[1], s = Yt(t, e);
            s.fillRect(0, 0, t, e), this.hitDetectionImage_ = s.canvas;
          } else this.hitDetectionImage_ = this.image_;
          return this.hitDetectionImage_;
        }
        getSize() {
          return this.size_;
        }
        getSrc() {
          return this.src_;
        }
        load() {
          if (this.imageState_ === gt.IDLE) {
            this.image_ || this.initializeImage_(), this.imageState_ = gt.LOADING;
            try {
              this.src_ !== void 0 && (this.image_.src = this.src_);
            } catch {
              this.handleImageError_();
            }
            this.image_ instanceof HTMLImageElement && Am(this.image_, this.src_).then((t) => {
              this.image_ = t, this.handleImageLoad_();
            }).catch(this.handleImageError_.bind(this));
          }
        }
        replaceColor_(t) {
          if (!this.color_ || this.canvas_[t] || this.imageState_ !== gt.LOADED) return;
          const e = this.image_, s = Yt(Math.ceil(e.width * t), Math.ceil(e.height * t)), i = s.canvas;
          s.scale(t, t), s.drawImage(e, 0, 0), s.globalCompositeOperation = "multiply", s.fillStyle = ym(this.color_), s.fillRect(0, 0, i.width / t, i.height / t), s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0), this.canvas_[t] = i;
        }
        ready() {
          return this.ready_ || (this.ready_ = new Promise((t) => {
            if (this.imageState_ === gt.LOADED || this.imageState_ === gt.ERROR) t();
            else {
              const e = () => {
                (this.imageState_ === gt.LOADED || this.imageState_ === gt.ERROR) && (this.removeEventListener(lt.CHANGE, e), t());
              };
              this.addEventListener(lt.CHANGE, e);
            }
          })), this.ready_;
        }
      }
      function Zh(n, t, e, s, i, r) {
        let o = t === void 0 ? void 0 : Be.get(t, e, i);
        return o || (o = new $h(n, n && "src" in n ? n.src || void 0 : t, e, s, i), Be.set(t, e, i, o, r)), r && o && !Be.getPattern(t, e, i) && Be.set(t, e, i, o, r), o;
      }
      function Dc(n) {
        return n[0] > 0 && n[1] > 0;
      }
      function Lm(n, t, e) {
        return e === void 0 && (e = [0, 0]), e[0] = n[0] * t + 0.5 | 0, e[1] = n[1] * t + 0.5 | 0, e;
      }
      function ve(n, t) {
        return Array.isArray(n) ? n : (t === void 0 ? t = [n, n] : (t[0] = n, t[1] = n), t);
      }
      class _r {
        constructor(t) {
          this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = ve(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
        }
        clone() {
          const t = this.getScale();
          return new _r({ opacity: this.getOpacity(), scale: Array.isArray(t) ? t.slice() : t, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
        }
        getOpacity() {
          return this.opacity_;
        }
        getRotateWithView() {
          return this.rotateWithView_;
        }
        getRotation() {
          return this.rotation_;
        }
        getScale() {
          return this.scale_;
        }
        getScaleArray() {
          return this.scaleArray_;
        }
        getDisplacement() {
          return this.displacement_;
        }
        getDeclutterMode() {
          return this.declutterMode_;
        }
        getAnchor() {
          return dt();
        }
        getImage(t) {
          return dt();
        }
        getHitDetectionImage() {
          return dt();
        }
        getPixelRatio(t) {
          return 1;
        }
        getImageState() {
          return dt();
        }
        getImageSize() {
          return dt();
        }
        getOrigin() {
          return dt();
        }
        getSize() {
          return dt();
        }
        setDisplacement(t) {
          this.displacement_ = t;
        }
        setOpacity(t) {
          this.opacity_ = t;
        }
        setRotateWithView(t) {
          this.rotateWithView_ = t;
        }
        setRotation(t) {
          this.rotation_ = t;
        }
        setScale(t) {
          this.scale_ = t, this.scaleArray_ = ve(t);
        }
        listenImageChange(t) {
          dt();
        }
        load() {
          dt();
        }
        unlistenImageChange(t) {
          dt();
        }
        ready() {
          return Promise.resolve();
        }
      }
      function un(n) {
        return n ? Array.isArray(n) ? jh(n) : typeof n == "object" && "src" in n ? Om(n) : n : null;
      }
      function Om(n) {
        if (!n.offset || !n.size) return Be.getPattern(n.src, "anonymous", n.color);
        const t = n.src + ":" + n.offset, e = Be.getPattern(t, void 0, n.color);
        if (e) return e;
        const s = Be.get(n.src, "anonymous", null);
        if (s.getImageState() !== gt.LOADED) return null;
        const i = Yt(n.size[0], n.size[1]);
        return i.drawImage(s.getImage(1), n.offset[0], n.offset[1], n.size[0], n.size[1], 0, 0, n.size[0], n.size[1]), Zh(i.canvas, t, void 0, gt.LOADED, n.color, !0), Be.getPattern(t, void 0, n.color);
      }
      const qo = "ol-hidden", Nm = "ol-selectable", Vo = "ol-unselectable", Kh = "ol-control", Gc = "ol-collapsed", Fm = new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)", "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)", "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)", "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?", "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))", "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))", `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""), "i"), zc = ["style", "variant", "weight", "size", "lineHeight", "family"], Uc = function(n) {
        const t = n.match(Fm);
        if (!t) return null;
        const e = { lineHeight: "normal", size: "1.2em", style: "normal", weight: "normal", variant: "normal" };
        for (let s = 0, i = zc.length; s < i; ++s) {
          const r = t[s + 1];
          r !== void 0 && (e[zc[s]] = r);
        }
        return e.families = e.family.split(/,\s?/), e;
      }, Bc = "10px sans-serif", Re = "#000", di = "round", Cn = [], bn = 0, fi = "round", yr = 10, xr = "#000", Er = "center", $o = "middle", Os = [0, 0, 0, 0], Mr = 1, Tn = new $e();
      let gi = null, Hh;
      const Jh = {}, km = function() {
        const n = "32px ", t = ["monospace", "serif"], e = t.length, s = "wmytzilWMYTZIL@#/&?$%10";
        let i, r;
        function o(h, l, u) {
          let c = !0;
          for (let d = 0; d < e; ++d) {
            const p = t[d];
            if (r = Zo(h + " " + l + " " + n + p, s), u != p) {
              const f = Zo(h + " " + l + " " + n + u + "," + p, s);
              c = c && f != r;
            }
          }
          return !!c;
        }
        function a() {
          let h = !0;
          const l = Tn.getKeys();
          for (let u = 0, c = l.length; u < c; ++u) {
            const d = l[u];
            if (Tn.get(d) < 100) {
              const [p, f, y] = d.split(`
`);
              o(p, f, y) ? (er(Jh), gi = null, Hh = void 0, Tn.set(d, 100)) : (Tn.set(d, Tn.get(d) + 1, !0), h = !1);
            }
          }
          h && (clearInterval(i), i = void 0);
        }
        return function(h) {
          const l = Uc(h);
          if (!l) return;
          const u = l.families;
          for (let c = 0, d = u.length; c < d; ++c) {
            const p = u[c], f = l.style + `
` + l.weight + `
` + p;
            Tn.get(f) === void 0 && (Tn.set(f, 100, !0), o(l.style, l.weight, p) || (Tn.set(f, 0, !0), i === void 0 && (i = setInterval(a, 32))));
          }
        };
      }(), Dm = /* @__PURE__ */ function() {
        let n;
        return function(t) {
          let e = Jh[t];
          if (e == null) {
            if (Wo) {
              const s = Uc(t), i = jc(t, "Žg");
              e = (isNaN(Number(s.lineHeight)) ? 1.2 : Number(s.lineHeight)) * (i.actualBoundingBoxAscent + i.actualBoundingBoxDescent);
            } else n || (n = document.createElement("div"), n.innerHTML = "M", n.style.minHeight = "0", n.style.maxHeight = "none", n.style.height = "auto", n.style.padding = "0", n.style.border = "none", n.style.position = "absolute", n.style.display = "block", n.style.left = "-99999px"), n.style.font = t, document.body.appendChild(n), e = n.offsetHeight, document.body.removeChild(n);
            Jh[t] = e;
          }
          return e;
        };
      }();
      function jc(n, t) {
        return gi || (gi = Yt(1, 1)), n != Hh && (gi.font = n, Hh = gi.font), gi.measureText(t);
      }
      function Zo(n, t) {
        return jc(n, t).width;
      }
      function Wc(n, t, e) {
        if (t in e) return e[t];
        const s = t.split(`
`).reduce((i, r) => Math.max(i, Zo(n, r)), 0);
        return e[t] = s, s;
      }
      function Gm(n, t) {
        const e = [], s = [], i = [];
        let r = 0, o = 0, a = 0, h = 0;
        for (let l = 0, u = t.length; l <= u; l += 2) {
          const c = t[l];
          if (c === `
` || l === u) {
            r = Math.max(r, o), i.push(o), o = 0, a += h, h = 0;
            continue;
          }
          const d = t[l + 1] || n.font, p = Zo(d, c);
          e.push(p), o += p;
          const f = Dm(d);
          s.push(f), h = Math.max(h, f);
        }
        return { width: r, height: a, widths: e, heights: s, lineWidths: i };
      }
      function zm(n, t, e, s, i, r, o, a, h, l, u) {
        n.save(), e !== 1 && (n.globalAlpha === void 0 ? n.globalAlpha = (c) => c.globalAlpha *= e : n.globalAlpha *= e), t && n.transform.apply(n, t), s.contextInstructions ? (n.translate(h, l), n.scale(u[0], u[1]), Um(s, n)) : u[0] < 0 || u[1] < 0 ? (n.translate(h, l), n.scale(u[0], u[1]), n.drawImage(s, i, r, o, a, 0, 0, o, a)) : n.drawImage(s, i, r, o, a, h, l, o * u[0], a * u[1]), n.restore();
      }
      function Um(n, t) {
        const e = n.contextInstructions;
        for (let s = 0, i = e.length; s < i; s += 2) Array.isArray(e[s + 1]) ? t[e[s]].apply(t, e[s + 1]) : t[e[s]] = e[s + 1];
      }
      class wr extends _r {
        constructor(t) {
          super({ opacity: 1, rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1, rotation: t.rotation !== void 0 ? t.rotation : 0, scale: t.scale !== void 0 ? t.scale : 1, displacement: t.displacement !== void 0 ? t.displacement : [0, 0], declutterMode: t.declutterMode }), this.hitDetectionCanvas_ = null, this.fill_ = t.fill !== void 0 ? t.fill : null, this.origin_ = [0, 0], this.points_ = t.points, this.radius = t.radius, this.radius2_ = t.radius2, this.angle_ = t.angle !== void 0 ? t.angle : 0, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? gt.LOADING : gt.LOADED, this.imageState_ === gt.LOADING && this.ready().then(() => this.imageState_ = gt.LOADED), this.render();
        }
        clone() {
          const t = this.getScale(), e = new wr({ fill: this.getFill() ? this.getFill().clone() : void 0, points: this.getPoints(), radius: this.getRadius(), radius2: this.getRadius2(), angle: this.getAngle(), stroke: this.getStroke() ? this.getStroke().clone() : void 0, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), scale: Array.isArray(t) ? t.slice() : t, displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
          return e.setOpacity(this.getOpacity()), e;
        }
        getAnchor() {
          const t = this.size_, e = this.getDisplacement(), s = this.getScaleArray();
          return [t[0] / 2 - e[0] / s[0], t[1] / 2 + e[1] / s[1]];
        }
        getAngle() {
          return this.angle_;
        }
        getFill() {
          return this.fill_;
        }
        setFill(t) {
          this.fill_ = t, this.render();
        }
        getHitDetectionImage() {
          return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(this.renderOptions_)), this.hitDetectionCanvas_;
        }
        getImage(t) {
          var e, s;
          const i = (e = this.fill_) == null ? void 0 : e.getKey(), r = `${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${i}` + Object.values(this.renderOptions_).join(",");
          let o = (s = Be.get(r, null, null)) == null ? void 0 : s.getImage(1);
          if (!o) {
            const a = this.renderOptions_, h = Math.ceil(a.size * t), l = Yt(h, h);
            this.draw_(a, l, t), o = l.canvas, Be.set(r, null, null, new $h(o, void 0, null, gt.LOADED, null));
          }
          return o;
        }
        getPixelRatio(t) {
          return t;
        }
        getImageSize() {
          return this.size_;
        }
        getImageState() {
          return this.imageState_;
        }
        getOrigin() {
          return this.origin_;
        }
        getPoints() {
          return this.points_;
        }
        getRadius() {
          return this.radius;
        }
        getRadius2() {
          return this.radius2_;
        }
        getSize() {
          return this.size_;
        }
        getStroke() {
          return this.stroke_;
        }
        setStroke(t) {
          this.stroke_ = t, this.render();
        }
        listenImageChange(t) {
        }
        load() {
        }
        unlistenImageChange(t) {
        }
        calculateLineJoinSize_(t, e, s) {
          if (e === 0 || this.points_ === 1 / 0 || t !== "bevel" && t !== "miter") return e;
          let i = this.radius, r = this.radius2_ === void 0 ? i : this.radius2_;
          if (i < r) {
            const v = i;
            i = r, r = v;
          }
          const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, h = r * Math.sin(a), l = Math.sqrt(r * r - h * h), u = i - l, c = Math.sqrt(h * h + u * u), d = c / h;
          if (t === "miter" && d <= s) return d * e;
          const p = e / 2 / d, f = e / 2 * (u / c), y = Math.sqrt((i + p) * (i + p) + f * f) - i;
          if (this.radius2_ === void 0 || t === "bevel") return y * 2;
          const E = i * Math.sin(a), M = Math.sqrt(i * i - E * E), w = r - M, C = Math.sqrt(E * E + w * w) / E;
          if (C <= s) {
            const v = C * e / 2 - r - i;
            return 2 * Math.max(y, v);
          }
          return y * 2;
        }
        createRenderOptions() {
          let t = di, e = fi, s = 0, i = null, r = 0, o, a = 0;
          this.stroke_ && (o = un(this.stroke_.getColor() ?? xr), a = this.stroke_.getWidth() ?? Mr, i = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset() ?? 0, e = this.stroke_.getLineJoin() ?? fi, t = this.stroke_.getLineCap() ?? di, s = this.stroke_.getMiterLimit() ?? yr);
          const h = this.calculateLineJoinSize_(e, a, s), l = Math.max(this.radius, this.radius2_ || 0), u = Math.ceil(2 * l + h);
          return { strokeStyle: o, strokeWidth: a, size: u, lineCap: t, lineDash: i, lineDashOffset: r, lineJoin: e, miterLimit: s };
        }
        render() {
          this.renderOptions_ = this.createRenderOptions();
          const t = this.renderOptions_.size;
          this.hitDetectionCanvas_ = null, this.size_ = [t, t];
        }
        draw_(t, e, s) {
          if (e.scale(s, s), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_) {
            let i = this.fill_.getColor();
            i === null && (i = Re), e.fillStyle = un(i), e.fill();
          }
          t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
        }
        createHitDetectionCanvas_(t) {
          let e;
          if (this.fill_) {
            let s = this.fill_.getColor(), i = 0;
            typeof s == "string" && (s = ci(s)), s === null ? i = 1 : Array.isArray(s) && (i = s.length === 4 ? s[3] : 1), i === 0 && (e = Yt(t.size, t.size), this.drawHitDetectionCanvas_(t, e));
          }
          return e ? e.canvas : this.getImage(1);
        }
        createPath_(t) {
          let e = this.points_;
          const s = this.radius;
          if (e === 1 / 0) t.arc(0, 0, s, 0, 2 * Math.PI);
          else {
            const i = this.radius2_ === void 0 ? s : this.radius2_;
            this.radius2_ !== void 0 && (e *= 2);
            const r = this.angle_ - Math.PI / 2, o = 2 * Math.PI / e;
            for (let a = 0; a < e; a++) {
              const h = r + a * o, l = a % 2 === 0 ? s : i;
              t.lineTo(l * Math.cos(h), l * Math.sin(h));
            }
            t.closePath();
          }
        }
        drawHitDetectionCanvas_(t, e) {
          e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = Re, e.fill(), t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
        }
        ready() {
          return this.fill_ ? this.fill_.ready() : Promise.resolve();
        }
      }
      class Ns extends wr {
        constructor(t) {
          t = t || { radius: 5 }, super({ points: 1 / 0, fill: t.fill, radius: t.radius, stroke: t.stroke, scale: t.scale !== void 0 ? t.scale : 1, rotation: t.rotation !== void 0 ? t.rotation : 0, rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1, displacement: t.displacement !== void 0 ? t.displacement : [0, 0], declutterMode: t.declutterMode });
        }
        clone() {
          const t = this.getScale(), e = new Ns({ fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, radius: this.getRadius(), scale: Array.isArray(t) ? t.slice() : t, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
          return e.setOpacity(this.getOpacity()), e;
        }
        setRadius(t) {
          this.radius = t, this.render();
        }
      }
      class Ke {
        constructor(t) {
          t = t || {}, this.patternImage_ = null, this.color_ = null, t.color !== void 0 && this.setColor(t.color);
        }
        clone() {
          const t = this.getColor();
          return new Ke({ color: Array.isArray(t) ? t.slice() : t || void 0 });
        }
        getColor() {
          return this.color_;
        }
        setColor(t) {
          if (t !== null && typeof t == "object" && "src" in t) {
            const e = Zh(null, t.src, "anonymous", void 0, t.offset ? null : t.color ? t.color : null, !(t.offset && t.size));
            e.ready().then(() => {
              this.patternImage_ = null;
            }), e.getImageState() === gt.IDLE && e.load(), e.getImageState() === gt.LOADING && (this.patternImage_ = e);
          }
          this.color_ = t;
        }
        getKey() {
          const t = this.getColor();
          return t ? t instanceof CanvasPattern || t instanceof CanvasGradient ? vt(t) : typeof t == "object" && "src" in t ? t.src + ":" + t.offset : ci(t).toString() : "";
        }
        loading() {
          return !!this.patternImage_;
        }
        ready() {
          return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
        }
      }
      class ke {
        constructor(t) {
          t = t || {}, this.color_ = t.color !== void 0 ? t.color : null, this.lineCap_ = t.lineCap, this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null, this.lineDashOffset_ = t.lineDashOffset, this.lineJoin_ = t.lineJoin, this.miterLimit_ = t.miterLimit, this.width_ = t.width;
        }
        clone() {
          const t = this.getColor();
          return new ke({ color: Array.isArray(t) ? t.slice() : t || void 0, lineCap: this.getLineCap(), lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0, lineDashOffset: this.getLineDashOffset(), lineJoin: this.getLineJoin(), miterLimit: this.getMiterLimit(), width: this.getWidth() });
        }
        getColor() {
          return this.color_;
        }
        getLineCap() {
          return this.lineCap_;
        }
        getLineDash() {
          return this.lineDash_;
        }
        getLineDashOffset() {
          return this.lineDashOffset_;
        }
        getLineJoin() {
          return this.lineJoin_;
        }
        getMiterLimit() {
          return this.miterLimit_;
        }
        getWidth() {
          return this.width_;
        }
        setColor(t) {
          this.color_ = t;
        }
        setLineCap(t) {
          this.lineCap_ = t;
        }
        setLineDash(t) {
          this.lineDash_ = t;
        }
        setLineDashOffset(t) {
          this.lineDashOffset_ = t;
        }
        setLineJoin(t) {
          this.lineJoin_ = t;
        }
        setMiterLimit(t) {
          this.miterLimit_ = t;
        }
        setWidth(t) {
          this.width_ = t;
        }
      }
      class ae {
        constructor(t) {
          t = t || {}, this.geometry_ = null, this.geometryFunction_ = Xc, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
        }
        clone() {
          let t = this.getGeometry();
          return t && typeof t == "object" && (t = t.clone()), new ae({ geometry: t ?? void 0, fill: this.getFill() ? this.getFill().clone() : void 0, image: this.getImage() ? this.getImage().clone() : void 0, renderer: this.getRenderer() ?? void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, text: this.getText() ? this.getText().clone() : void 0, zIndex: this.getZIndex() });
        }
        getRenderer() {
          return this.renderer_;
        }
        setRenderer(t) {
          this.renderer_ = t;
        }
        setHitDetectionRenderer(t) {
          this.hitDetectionRenderer_ = t;
        }
        getHitDetectionRenderer() {
          return this.hitDetectionRenderer_;
        }
        getGeometry() {
          return this.geometry_;
        }
        getGeometryFunction() {
          return this.geometryFunction_;
        }
        getFill() {
          return this.fill_;
        }
        setFill(t) {
          this.fill_ = t;
        }
        getImage() {
          return this.image_;
        }
        setImage(t) {
          this.image_ = t;
        }
        getStroke() {
          return this.stroke_;
        }
        setStroke(t) {
          this.stroke_ = t;
        }
        getText() {
          return this.text_;
        }
        setText(t) {
          this.text_ = t;
        }
        getZIndex() {
          return this.zIndex_;
        }
        setGeometry(t) {
          typeof t == "function" ? this.geometryFunction_ = t : typeof t == "string" ? this.geometryFunction_ = function(e) {
            return e.get(t);
          } : t ? t !== void 0 && (this.geometryFunction_ = function() {
            return t;
          }) : this.geometryFunction_ = Xc, this.geometry_ = t;
        }
        setZIndex(t) {
          this.zIndex_ = t;
        }
      }
      function Bm(n) {
        let t;
        if (typeof n == "function") t = n;
        else {
          let e;
          Array.isArray(n) ? e = n : (wt(typeof n.getZIndex == "function", "Expected an `Style` or an array of `Style`"), e = [n]), t = function() {
            return e;
          };
        }
        return t;
      }
      let Qh = null;
      function Yc(n, t) {
        if (!Qh) {
          const e = new Ke({ color: "rgba(255,255,255,0.4)" }), s = new ke({ color: "#3399CC", width: 1.25 });
          Qh = [new ae({ image: new Ns({ fill: e, stroke: s, radius: 5 }), fill: e, stroke: s })];
        }
        return Qh;
      }
      function Xc(n) {
        return n.getGeometry();
      }
      function qc(n, t, e, s) {
        return e !== void 0 && s !== void 0 ? [e / n, s / t] : e !== void 0 ? e / n : s !== void 0 ? s / t : 1;
      }
      class Sr extends _r {
        constructor(t) {
          t = t || {};
          const e = t.opacity !== void 0 ? t.opacity : 1, s = t.rotation !== void 0 ? t.rotation : 0, i = t.scale !== void 0 ? t.scale : 1, r = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
          super({ opacity: e, rotation: s, scale: i, displacement: t.displacement !== void 0 ? t.displacement : [0, 0], rotateWithView: r, declutterMode: t.declutterMode }), this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left", this.anchorXUnits_ = t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction", this.anchorYUnits_ = t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction", this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null;
          const o = t.img !== void 0 ? t.img : null;
          let a = t.src;
          wt(!(a !== void 0 && o), "`image` and `src` cannot be provided at the same time"), (a === void 0 || a.length === 0) && o && (a = o.src || vt(o)), wt(a !== void 0 && a.length > 0, "A defined and non-empty `src` or `image` must be provided"), wt(!((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0), "`width` or `height` cannot be provided together with `scale`");
          let h;
          if (t.src !== void 0 ? h = gt.IDLE : o !== void 0 && ("complete" in o ? o.complete ? h = o.src ? gt.LOADED : gt.IDLE : h = gt.LOADING : h = gt.LOADED), this.color_ = t.color !== void 0 ? ci(t.color) : null, this.iconImage_ = Zh(o, a, this.crossOrigin_, h, this.color_), this.offset_ = t.offset !== void 0 ? t.offset : [0, 0], this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = t.size !== void 0 ? t.size : null, this.initialOptions_, t.width !== void 0 || t.height !== void 0) {
            let l, u;
            if (t.size) [l, u] = t.size;
            else {
              const c = this.getImage(1);
              if (c.width && c.height) l = c.width, u = c.height;
              else if (c instanceof HTMLImageElement) {
                this.initialOptions_ = t;
                const d = () => {
                  if (this.unlistenImageChange(d), !this.initialOptions_) return;
                  const p = this.iconImage_.getSize();
                  this.setScale(qc(p[0], p[1], t.width, t.height));
                };
                this.listenImageChange(d);
                return;
              }
            }
            l !== void 0 && this.setScale(qc(l, u, t.width, t.height));
          }
        }
        clone() {
          let t, e, s;
          return this.initialOptions_ ? (e = this.initialOptions_.width, s = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new Sr({ anchor: this.anchor_.slice(), anchorOrigin: this.anchorOrigin_, anchorXUnits: this.anchorXUnits_, anchorYUnits: this.anchorYUnits_, color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0, crossOrigin: this.crossOrigin_, offset: this.offset_.slice(), offsetOrigin: this.offsetOrigin_, opacity: this.getOpacity(), rotateWithView: this.getRotateWithView(), rotation: this.getRotation(), scale: t, width: e, height: s, size: this.size_ !== null ? this.size_.slice() : void 0, src: this.getSrc(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
        }
        getAnchor() {
          let t = this.normalizedAnchor_;
          if (!t) {
            t = this.anchor_;
            const i = this.getSize();
            if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
              if (!i) return null;
              t = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (t[0] *= i[0]), this.anchorYUnits_ == "fraction" && (t[1] *= i[1]);
            }
            if (this.anchorOrigin_ != "top-left") {
              if (!i) return null;
              t === this.anchor_ && (t = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (t[0] = -t[0] + i[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (t[1] = -t[1] + i[1]);
            }
            this.normalizedAnchor_ = t;
          }
          const e = this.getDisplacement(), s = this.getScaleArray();
          return [t[0] - e[0] / s[0], t[1] + e[1] / s[1]];
        }
        setAnchor(t) {
          this.anchor_ = t, this.normalizedAnchor_ = null;
        }
        getColor() {
          return this.color_;
        }
        getImage(t) {
          return this.iconImage_.getImage(t);
        }
        getPixelRatio(t) {
          return this.iconImage_.getPixelRatio(t);
        }
        getImageSize() {
          return this.iconImage_.getSize();
        }
        getImageState() {
          return this.iconImage_.getImageState();
        }
        getHitDetectionImage() {
          return this.iconImage_.getHitDetectionImage();
        }
        getOrigin() {
          if (this.origin_) return this.origin_;
          let t = this.offset_;
          if (this.offsetOrigin_ != "top-left") {
            const e = this.getSize(), s = this.iconImage_.getSize();
            if (!e || !s) return null;
            t = t.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (t[0] = s[0] - e[0] - t[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (t[1] = s[1] - e[1] - t[1]);
          }
          return this.origin_ = t, this.origin_;
        }
        getSrc() {
          return this.iconImage_.getSrc();
        }
        getSize() {
          return this.size_ ? this.size_ : this.iconImage_.getSize();
        }
        getWidth() {
          const t = this.getScaleArray();
          if (this.size_) return this.size_[0] * t[0];
          if (this.iconImage_.getImageState() == gt.LOADED) return this.iconImage_.getSize()[0] * t[0];
        }
        getHeight() {
          const t = this.getScaleArray();
          if (this.size_) return this.size_[1] * t[1];
          if (this.iconImage_.getImageState() == gt.LOADED) return this.iconImage_.getSize()[1] * t[1];
        }
        setScale(t) {
          delete this.initialOptions_, super.setScale(t);
        }
        listenImageChange(t) {
          this.iconImage_.addEventListener(lt.CHANGE, t);
        }
        load() {
          this.iconImage_.load();
        }
        unlistenImageChange(t) {
          this.iconImage_.removeEventListener(lt.CHANGE, t);
        }
        ready() {
          return this.iconImage_.ready();
        }
      }
      const jm = "#333";
      class Ko {
        constructor(t) {
          t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.keepUpright_ = t.keepUpright, this.scale_ = t.scale, this.scaleArray_ = ve(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new Ke({ color: jm }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding, this.declutterMode_ = t.declutterMode;
        }
        clone() {
          const t = this.getScale();
          return new Ko({ font: this.getFont(), placement: this.getPlacement(), repeat: this.getRepeat(), maxAngle: this.getMaxAngle(), overflow: this.getOverflow(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), keepUpright: this.getKeepUpright(), scale: Array.isArray(t) ? t.slice() : t, text: this.getText(), textAlign: this.getTextAlign(), justify: this.getJustify(), textBaseline: this.getTextBaseline(), fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, offsetX: this.getOffsetX(), offsetY: this.getOffsetY(), backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0, backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0, padding: this.getPadding() || void 0, declutterMode: this.getDeclutterMode() });
        }
        getOverflow() {
          return this.overflow_;
        }
        getFont() {
          return this.font_;
        }
        getMaxAngle() {
          return this.maxAngle_;
        }
        getPlacement() {
          return this.placement_;
        }
        getRepeat() {
          return this.repeat_;
        }
        getOffsetX() {
          return this.offsetX_;
        }
        getOffsetY() {
          return this.offsetY_;
        }
        getFill() {
          return this.fill_;
        }
        getRotateWithView() {
          return this.rotateWithView_;
        }
        getKeepUpright() {
          return this.keepUpright_;
        }
        getRotation() {
          return this.rotation_;
        }
        getScale() {
          return this.scale_;
        }
        getScaleArray() {
          return this.scaleArray_;
        }
        getStroke() {
          return this.stroke_;
        }
        getText() {
          return this.text_;
        }
        getTextAlign() {
          return this.textAlign_;
        }
        getJustify() {
          return this.justify_;
        }
        getTextBaseline() {
          return this.textBaseline_;
        }
        getBackgroundFill() {
          return this.backgroundFill_;
        }
        getBackgroundStroke() {
          return this.backgroundStroke_;
        }
        getPadding() {
          return this.padding_;
        }
        getDeclutterMode() {
          return this.declutterMode_;
        }
        setOverflow(t) {
          this.overflow_ = t;
        }
        setFont(t) {
          this.font_ = t;
        }
        setMaxAngle(t) {
          this.maxAngle_ = t;
        }
        setOffsetX(t) {
          this.offsetX_ = t;
        }
        setOffsetY(t) {
          this.offsetY_ = t;
        }
        setPlacement(t) {
          this.placement_ = t;
        }
        setRepeat(t) {
          this.repeat_ = t;
        }
        setRotateWithView(t) {
          this.rotateWithView_ = t;
        }
        setKeepUpright(t) {
          this.keepUpright_ = t;
        }
        setFill(t) {
          this.fill_ = t;
        }
        setRotation(t) {
          this.rotation_ = t;
        }
        setScale(t) {
          this.scale_ = t, this.scaleArray_ = ve(t !== void 0 ? t : 1);
        }
        setStroke(t) {
          this.stroke_ = t;
        }
        setText(t) {
          this.text_ = t;
        }
        setTextAlign(t) {
          this.textAlign_ = t;
        }
        setJustify(t) {
          this.justify_ = t;
        }
        setTextBaseline(t) {
          this.textBaseline_ = t;
        }
        setBackgroundFill(t) {
          this.backgroundFill_ = t;
        }
        setBackgroundStroke(t) {
          this.backgroundStroke_ = t;
        }
        setPadding(t) {
          this.padding_ = t;
        }
      }
      let Fs = 0;
      const me = 1 << Fs++, Et = 1 << Fs++, Ce = 1 << Fs++, He = 1 << Fs++, ks = 1 << Fs++, vr = 1 << Fs++, Ho = Math.pow(2, Fs) - 1, tl = { [me]: "boolean", [Et]: "number", [Ce]: "string", [He]: "color", [ks]: "number[]", [vr]: "size" }, Wm = Object.keys(tl).map(Number).sort(jn);
      function Ym(n) {
        return n in tl;
      }
      function Rr(n) {
        const t = [];
        for (const e of Wm) Cr(n, e) && t.push(tl[e]);
        return t.length === 0 ? "untyped" : t.length < 3 ? t.join(" or ") : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
      }
      function Cr(n, t) {
        return (n & t) === t;
      }
      function Hn(n, t) {
        return n === t;
      }
      class $t {
        constructor(t, e) {
          if (!Ym(t)) throw new Error(`literal expressions must have a specific type, got ${Rr(t)}`);
          this.type = t, this.value = e;
        }
      }
      class Xm {
        constructor(t, e, ...s) {
          this.type = t, this.operator = e, this.args = s;
        }
      }
      function Vc() {
        return { variables: /* @__PURE__ */ new Set(), properties: /* @__PURE__ */ new Set(), featureId: !1, geometryType: !1 };
      }
      function Qt(n, t, e) {
        switch (typeof n) {
          case "boolean": {
            if (Hn(t, Ce)) return new $t(Ce, n ? "true" : "false");
            if (!Cr(t, me)) throw new Error(`got a boolean, but expected ${Rr(t)}`);
            return new $t(me, n);
          }
          case "number": {
            if (Hn(t, vr)) return new $t(vr, ve(n));
            if (Hn(t, me)) return new $t(me, !!n);
            if (Hn(t, Ce)) return new $t(Ce, n.toString());
            if (!Cr(t, Et)) throw new Error(`got a number, but expected ${Rr(t)}`);
            return new $t(Et, n);
          }
          case "string": {
            if (Hn(t, He)) return new $t(He, Bh(n));
            if (Hn(t, me)) return new $t(me, !!n);
            if (!Cr(t, Ce)) throw new Error(`got a string, but expected ${Rr(t)}`);
            return new $t(Ce, n);
          }
        }
        if (!Array.isArray(n)) throw new Error("expression must be an array or a primitive value");
        if (n.length === 0) throw new Error("empty expression");
        if (typeof n[0] == "string") return n_(n, t, e);
        for (const s of n) if (typeof s != "number") throw new Error("expected an array of numbers");
        if (Hn(t, vr)) {
          if (n.length !== 2) throw new Error(`expected an array of two values for a size, got ${n.length}`);
          return new $t(vr, n);
        }
        if (Hn(t, He)) {
          if (n.length === 3) return new $t(He, [...n, 1]);
          if (n.length === 4) return new $t(He, n);
          throw new Error(`expected an array of 3 or 4 values for a color, got ${n.length}`);
        }
        if (!Cr(t, ks)) throw new Error(`got an array of numbers, but expected ${Rr(t)}`);
        return new $t(ks, n);
      }
      const L = { Get: "get", Var: "var", Concat: "concat", GeometryType: "geometry-type", LineMetric: "line-metric", Any: "any", All: "all", Not: "!", Resolution: "resolution", Zoom: "zoom", Time: "time", Equal: "==", NotEqual: "!=", GreaterThan: ">", GreaterThanOrEqualTo: ">=", LessThan: "<", LessThanOrEqualTo: "<=", Multiply: "*", Divide: "/", Add: "+", Subtract: "-", Clamp: "clamp", Mod: "%", Pow: "^", Abs: "abs", Floor: "floor", Ceil: "ceil", Round: "round", Sin: "sin", Cos: "cos", Atan: "atan", Sqrt: "sqrt", Match: "match", Between: "between", Interpolate: "interpolate", Coalesce: "coalesce", Case: "case", In: "in", Number: "number", String: "string", Array: "array", Color: "color", Id: "id", Band: "band", Palette: "palette", ToString: "to-string", Has: "has" }, qm = { [L.Get]: rt(ft(1, 1 / 0), $c), [L.Var]: rt(ft(1, 1), Vm), [L.Has]: rt(ft(1, 1 / 0), $c), [L.Id]: rt($m, pi), [L.Concat]: rt(ft(2, 1 / 0), Rt(Ce)), [L.GeometryType]: rt(Zm, pi), [L.LineMetric]: rt(pi), [L.Resolution]: rt(pi), [L.Zoom]: rt(pi), [L.Time]: rt(pi), [L.Any]: rt(ft(2, 1 / 0), Rt(me)), [L.All]: rt(ft(2, 1 / 0), Rt(me)), [L.Not]: rt(ft(1, 1), Rt(me)), [L.Equal]: rt(ft(2, 2), Rt(Ho)), [L.NotEqual]: rt(ft(2, 2), Rt(Ho)), [L.GreaterThan]: rt(ft(2, 2), Rt(Et)), [L.GreaterThanOrEqualTo]: rt(ft(2, 2), Rt(Et)), [L.LessThan]: rt(ft(2, 2), Rt(Et)), [L.LessThanOrEqualTo]: rt(ft(2, 2), Rt(Et)), [L.Multiply]: rt(ft(2, 1 / 0), Zc), [L.Coalesce]: rt(ft(2, 1 / 0), Zc), [L.Divide]: rt(ft(2, 2), Rt(Et)), [L.Add]: rt(ft(2, 1 / 0), Rt(Et)), [L.Subtract]: rt(ft(2, 2), Rt(Et)), [L.Clamp]: rt(ft(3, 3), Rt(Et)), [L.Mod]: rt(ft(2, 2), Rt(Et)), [L.Pow]: rt(ft(2, 2), Rt(Et)), [L.Abs]: rt(ft(1, 1), Rt(Et)), [L.Floor]: rt(ft(1, 1), Rt(Et)), [L.Ceil]: rt(ft(1, 1), Rt(Et)), [L.Round]: rt(ft(1, 1), Rt(Et)), [L.Sin]: rt(ft(1, 1), Rt(Et)), [L.Cos]: rt(ft(1, 1), Rt(Et)), [L.Atan]: rt(ft(1, 2), Rt(Et)), [L.Sqrt]: rt(ft(1, 1), Rt(Et)), [L.Match]: rt(ft(4, 1 / 0), Kc, Hm), [L.Between]: rt(ft(3, 3), Rt(Et)), [L.Interpolate]: rt(ft(6, 1 / 0), Kc, Jm), [L.Case]: rt(ft(3, 1 / 0), Km, Qm), [L.In]: rt(ft(2, 2), t_), [L.Number]: rt(ft(1, 1 / 0), Rt(Ho)), [L.String]: rt(ft(1, 1 / 0), Rt(Ho)), [L.Array]: rt(ft(1, 1 / 0), Rt(Et)), [L.Color]: rt(ft(1, 4), Rt(Et)), [L.Band]: rt(ft(1, 3), Rt(Et)), [L.Palette]: rt(ft(2, 2), e_), [L.ToString]: rt(ft(1, 1), Rt(me | Et | Ce | He)) };
      function $c(n, t, e) {
        const s = n.length - 1, i = new Array(s);
        for (let r = 0; r < s; ++r) {
          const o = n[r + 1];
          switch (typeof o) {
            case "number": {
              i[r] = new $t(Et, o);
              break;
            }
            case "string": {
              i[r] = new $t(Ce, o);
              break;
            }
            default:
              throw new Error(`expected a string key or numeric array index for a get operation, got ${o}`);
          }
          r === 0 && e.properties.add(String(o));
        }
        return i;
      }
      function Vm(n, t, e) {
        const s = n[1];
        if (typeof s != "string") throw new Error("expected a string argument for var operation");
        return e.variables.add(s), [new $t(Ce, s)];
      }
      function $m(n, t, e) {
        e.featureId = !0;
      }
      function Zm(n, t, e) {
        e.geometryType = !0;
      }
      function pi(n, t, e) {
        const s = n[0];
        if (n.length !== 1) throw new Error(`expected no arguments for ${s} operation`);
        return [];
      }
      function ft(n, t) {
        return function(e, s, i) {
          const r = e[0], o = e.length - 1;
          if (n === t) {
            if (o !== n) {
              const a = n === 1 ? "" : "s";
              throw new Error(`expected ${n} argument${a} for ${r}, got ${o}`);
            }
          } else if (o < n || o > t) {
            const a = t === 1 / 0 ? `${n} or more` : `${n} to ${t}`;
            throw new Error(`expected ${a} arguments for ${r}, got ${o}`);
          }
        };
      }
      function Zc(n, t, e) {
        const s = n.length - 1, i = new Array(s);
        for (let r = 0; r < s; ++r) {
          const o = Qt(n[r + 1], t, e);
          i[r] = o;
        }
        return i;
      }
      function Rt(n) {
        return function(t, e, s) {
          const i = t.length - 1, r = new Array(i);
          for (let o = 0; o < i; ++o) {
            const a = Qt(t[o + 1], n, s);
            r[o] = a;
          }
          return r;
        };
      }
      function Km(n, t, e) {
        const s = n[0], i = n.length - 1;
        if (i % 2 === 0) throw new Error(`expected an odd number of arguments for ${s}, got ${i} instead`);
      }
      function Kc(n, t, e) {
        const s = n[0], i = n.length - 1;
        if (i % 2 === 1) throw new Error(`expected an even number of arguments for operation ${s}, got ${i} instead`);
      }
      function Hm(n, t, e) {
        const s = n.length - 1, i = Ce | Et | me, r = Qt(n[1], i, e), o = Qt(n[n.length - 1], t, e), a = new Array(s - 2);
        for (let h = 0; h < s - 2; h += 2) {
          try {
            const l = Qt(n[h + 2], r.type, e);
            a[h] = l;
          } catch (l) {
            throw new Error(`failed to parse argument ${h + 1} of match expression: ${l.message}`);
          }
          try {
            const l = Qt(n[h + 3], o.type, e);
            a[h + 1] = l;
          } catch (l) {
            throw new Error(`failed to parse argument ${h + 2} of match expression: ${l.message}`);
          }
        }
        return [r, ...a, o];
      }
      function Jm(n, t, e) {
        const s = n[1];
        let i;
        switch (s[0]) {
          case "linear":
            i = 1;
            break;
          case "exponential":
            const h = s[1];
            if (typeof h != "number" || h <= 0) throw new Error(`expected a number base for exponential interpolation, got ${JSON.stringify(h)} instead`);
            i = h;
            break;
          default:
            throw new Error(`invalid interpolation type: ${JSON.stringify(s)}`);
        }
        const r = new $t(Et, i);
        let o;
        try {
          o = Qt(n[2], Et, e);
        } catch (h) {
          throw new Error(`failed to parse argument 1 in interpolate expression: ${h.message}`);
        }
        const a = new Array(n.length - 3);
        for (let h = 0; h < a.length; h += 2) {
          try {
            const l = Qt(n[h + 3], Et, e);
            a[h] = l;
          } catch (l) {
            throw new Error(`failed to parse argument ${h + 2} for interpolate expression: ${l.message}`);
          }
          try {
            const l = Qt(n[h + 4], t, e);
            a[h + 1] = l;
          } catch (l) {
            throw new Error(`failed to parse argument ${h + 3} for interpolate expression: ${l.message}`);
          }
        }
        return [r, o, ...a];
      }
      function Qm(n, t, e) {
        const s = Qt(n[n.length - 1], t, e), i = new Array(n.length - 1);
        for (let r = 0; r < i.length - 1; r += 2) {
          try {
            const o = Qt(n[r + 1], me, e);
            i[r] = o;
          } catch (o) {
            throw new Error(`failed to parse argument ${r} of case expression: ${o.message}`);
          }
          try {
            const o = Qt(n[r + 2], s.type, e);
            i[r + 1] = o;
          } catch (o) {
            throw new Error(`failed to parse argument ${r + 1} of case expression: ${o.message}`);
          }
        }
        return i[i.length - 1] = s, i;
      }
      function t_(n, t, e) {
        let s = n[2];
        if (!Array.isArray(s)) throw new Error('the second argument for the "in" operator must be an array');
        let i;
        if (typeof s[0] == "string") {
          if (s[0] !== "literal") throw new Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');
          if (!Array.isArray(s[1])) throw new Error('failed to parse "in" expression: the literal operator must be followed by an array');
          s = s[1], i = Ce;
        } else i = Et;
        const r = new Array(s.length);
        for (let o = 0; o < r.length; o++) try {
          const a = Qt(s[o], i, e);
          r[o] = a;
        } catch (a) {
          throw new Error(`failed to parse haystack item ${o} for "in" expression: ${a.message}`);
        }
        return [Qt(n[1], i, e), ...r];
      }
      function e_(n, t, e) {
        let s;
        try {
          s = Qt(n[1], Et, e);
        } catch (o) {
          throw new Error(`failed to parse first argument in palette expression: ${o.message}`);
        }
        const i = n[2];
        if (!Array.isArray(i)) throw new Error("the second argument of palette must be an array");
        const r = new Array(i.length);
        for (let o = 0; o < r.length; o++) {
          let a;
          try {
            a = Qt(i[o], He, e);
          } catch (h) {
            throw new Error(`failed to parse color at index ${o} in palette expression: ${h.message}`);
          }
          if (!(a instanceof $t)) throw new Error(`the palette color at index ${o} must be a literal value`);
          r[o] = a;
        }
        return [s, ...r];
      }
      function rt(...n) {
        return function(t, e, s) {
          const i = t[0];
          let r;
          for (let o = 0; o < n.length; o++) {
            const a = n[o](t, e, s);
            if (o == n.length - 1) {
              if (!a) throw new Error("expected last argument validator to return the parsed args");
              r = a;
            }
          }
          return new Xm(e, i, ...r);
        };
      }
      function n_(n, t, e) {
        const s = n[0], i = qm[s];
        if (!i) throw new Error(`unknown operator: ${s}`);
        return i(n, t, e);
      }
      function Hc(n) {
        if (!n) return "";
        const t = n.getType();
        switch (t) {
          case "Point":
          case "LineString":
          case "Polygon":
            return t;
          case "MultiPoint":
          case "MultiLineString":
          case "MultiPolygon":
            return t.substring(5);
          case "Circle":
            return "Polygon";
          case "GeometryCollection":
            return Hc(n.getGeometries()[0]);
          default:
            return "";
        }
      }
      function Jc() {
        return { variables: {}, properties: {}, resolution: NaN, featureId: null, geometryType: "" };
      }
      function In(n, t, e) {
        const s = Qt(n, t, e);
        return Je(s);
      }
      function Je(n, t) {
        if (n instanceof $t) {
          if (n.type === He && typeof n.value == "string") {
            const s = Bh(n.value);
            return function() {
              return s;
            };
          }
          return function() {
            return n.value;
          };
        }
        const e = n.operator;
        switch (e) {
          case L.Number:
          case L.String:
          case L.Coalesce:
            return s_(n);
          case L.Get:
          case L.Var:
          case L.Has:
            return i_(n);
          case L.Id:
            return (s) => s.featureId;
          case L.GeometryType:
            return (s) => s.geometryType;
          case L.Concat: {
            const s = n.args.map((i) => Je(i));
            return (i) => "".concat(...s.map((r) => r(i).toString()));
          }
          case L.Resolution:
            return (s) => s.resolution;
          case L.Any:
          case L.All:
          case L.Between:
          case L.In:
          case L.Not:
            return o_(n);
          case L.Equal:
          case L.NotEqual:
          case L.LessThan:
          case L.LessThanOrEqualTo:
          case L.GreaterThan:
          case L.GreaterThanOrEqualTo:
            return r_(n);
          case L.Multiply:
          case L.Divide:
          case L.Add:
          case L.Subtract:
          case L.Clamp:
          case L.Mod:
          case L.Pow:
          case L.Abs:
          case L.Floor:
          case L.Ceil:
          case L.Round:
          case L.Sin:
          case L.Cos:
          case L.Atan:
          case L.Sqrt:
            return a_(n);
          case L.Case:
            return h_(n);
          case L.Match:
            return l_(n);
          case L.Interpolate:
            return u_(n);
          case L.ToString:
            return c_(n);
          default:
            throw new Error(`Unsupported operator ${e}`);
        }
      }
      function s_(n, t) {
        const e = n.operator, s = n.args.length, i = new Array(s);
        for (let r = 0; r < s; ++r) i[r] = Je(n.args[r]);
        switch (e) {
          case L.Coalesce:
            return (r) => {
              for (let o = 0; o < s; ++o) {
                const a = i[o](r);
                if (typeof a < "u" && a !== null) return a;
              }
              throw new Error("Expected one of the values to be non-null");
            };
          case L.Number:
          case L.String:
            return (r) => {
              for (let o = 0; o < s; ++o) {
                const a = i[o](r);
                if (typeof a === e) return a;
              }
              throw new Error(`Expected one of the values to be a ${e}`);
            };
          default:
            throw new Error(`Unsupported assertion operator ${e}`);
        }
      }
      function i_(n, t) {
        const e = n.args[0].value;
        switch (n.operator) {
          case L.Get:
            return (s) => {
              const i = n.args;
              let r = s.properties[e];
              for (let o = 1, a = i.length; o < a; ++o) {
                const h = i[o].value;
                r = r[h];
              }
              return r;
            };
          case L.Var:
            return (s) => s.variables[e];
          case L.Has:
            return (s) => {
              const i = n.args;
              if (!(e in s.properties)) return !1;
              let r = s.properties[e];
              for (let o = 1, a = i.length; o < a; ++o) {
                const h = i[o].value;
                if (!r || !Object.hasOwn(r, h)) return !1;
                r = r[h];
              }
              return !0;
            };
          default:
            throw new Error(`Unsupported accessor operator ${n.operator}`);
        }
      }
      function r_(n, t) {
        const e = n.operator, s = Je(n.args[0]), i = Je(n.args[1]);
        switch (e) {
          case L.Equal:
            return (r) => s(r) === i(r);
          case L.NotEqual:
            return (r) => s(r) !== i(r);
          case L.LessThan:
            return (r) => s(r) < i(r);
          case L.LessThanOrEqualTo:
            return (r) => s(r) <= i(r);
          case L.GreaterThan:
            return (r) => s(r) > i(r);
          case L.GreaterThanOrEqualTo:
            return (r) => s(r) >= i(r);
          default:
            throw new Error(`Unsupported comparison operator ${e}`);
        }
      }
      function o_(n, t) {
        const e = n.operator, s = n.args.length, i = new Array(s);
        for (let r = 0; r < s; ++r) i[r] = Je(n.args[r]);
        switch (e) {
          case L.Any:
            return (r) => {
              for (let o = 0; o < s; ++o) if (i[o](r)) return !0;
              return !1;
            };
          case L.All:
            return (r) => {
              for (let o = 0; o < s; ++o) if (!i[o](r)) return !1;
              return !0;
            };
          case L.Between:
            return (r) => {
              const o = i[0](r), a = i[1](r), h = i[2](r);
              return o >= a && o <= h;
            };
          case L.In:
            return (r) => {
              const o = i[0](r);
              for (let a = 1; a < s; ++a) if (o === i[a](r)) return !0;
              return !1;
            };
          case L.Not:
            return (r) => !i[0](r);
          default:
            throw new Error(`Unsupported logical operator ${e}`);
        }
      }
      function a_(n, t) {
        const e = n.operator, s = n.args.length, i = new Array(s);
        for (let r = 0; r < s; ++r) i[r] = Je(n.args[r]);
        switch (e) {
          case L.Multiply:
            return (r) => {
              let o = 1;
              for (let a = 0; a < s; ++a) o *= i[a](r);
              return o;
            };
          case L.Divide:
            return (r) => i[0](r) / i[1](r);
          case L.Add:
            return (r) => {
              let o = 0;
              for (let a = 0; a < s; ++a) o += i[a](r);
              return o;
            };
          case L.Subtract:
            return (r) => i[0](r) - i[1](r);
          case L.Clamp:
            return (r) => {
              const o = i[0](r), a = i[1](r);
              if (o < a) return a;
              const h = i[2](r);
              return o > h ? h : o;
            };
          case L.Mod:
            return (r) => i[0](r) % i[1](r);
          case L.Pow:
            return (r) => Math.pow(i[0](r), i[1](r));
          case L.Abs:
            return (r) => Math.abs(i[0](r));
          case L.Floor:
            return (r) => Math.floor(i[0](r));
          case L.Ceil:
            return (r) => Math.ceil(i[0](r));
          case L.Round:
            return (r) => Math.round(i[0](r));
          case L.Sin:
            return (r) => Math.sin(i[0](r));
          case L.Cos:
            return (r) => Math.cos(i[0](r));
          case L.Atan:
            return s === 2 ? (r) => Math.atan2(i[0](r), i[1](r)) : (r) => Math.atan(i[0](r));
          case L.Sqrt:
            return (r) => Math.sqrt(i[0](r));
          default:
            throw new Error(`Unsupported numeric operator ${e}`);
        }
      }
      function h_(n, t) {
        const e = n.args.length, s = new Array(e);
        for (let i = 0; i < e; ++i) s[i] = Je(n.args[i]);
        return (i) => {
          for (let r = 0; r < e - 1; r += 2) if (s[r](i)) return s[r + 1](i);
          return s[e - 1](i);
        };
      }
      function l_(n, t) {
        const e = n.args.length, s = new Array(e);
        for (let i = 0; i < e; ++i) s[i] = Je(n.args[i]);
        return (i) => {
          const r = s[0](i);
          for (let o = 1; o < e; o += 2) if (r === s[o](i)) return s[o + 1](i);
          return s[e - 1](i);
        };
      }
      function u_(n, t) {
        const e = n.args.length, s = new Array(e);
        for (let i = 0; i < e; ++i) s[i] = Je(n.args[i]);
        return (i) => {
          const r = s[0](i), o = s[1](i);
          let a, h;
          for (let l = 2; l < e; l += 2) {
            const u = s[l](i);
            let c = s[l + 1](i);
            const d = Array.isArray(c);
            if (d && (c = Em(c)), u >= o) return l === 2 ? c : d ? d_(r, o, a, h, u, c) : br(r, o, a, h, u, c);
            a = u, h = c;
          }
          return h;
        };
      }
      function c_(n, t) {
        const e = n.operator, s = n.args.length, i = new Array(s);
        for (let r = 0; r < s; ++r) i[r] = Je(n.args[r]);
        switch (e) {
          case L.ToString:
            return (r) => {
              const o = i[0](r);
              return n.args[0].type === He ? jh(o) : o.toString();
            };
          default:
            throw new Error(`Unsupported convert operator ${e}`);
        }
      }
      function br(n, t, e, s, i, r) {
        const o = i - e;
        if (o === 0) return s;
        const a = t - e, h = n === 1 ? a / o : (Math.pow(n, a) - 1) / (Math.pow(n, o) - 1);
        return s + h * (r - s);
      }
      function d_(n, t, e, s, i, r) {
        if (i - e === 0) return s;
        const o = Ac(s), a = Ac(r);
        let h = a[2] - o[2];
        h > 180 ? h -= 360 : h < -180 && (h += 360);
        const l = [br(n, t, e, o[0], i, a[0]), br(n, t, e, o[1], i, a[1]), o[2] + br(n, t, e, 0, i, h), br(n, t, e, s[3], i, r[3])];
        return Pc(Mm(l));
      }
      function f_(n) {
        return !0;
      }
      function g_(n) {
        const t = Vc(), e = p_(n, t), s = Jc();
        return function(i, r) {
          if (s.properties = i.getPropertiesInternal(), s.resolution = r, t.featureId) {
            const o = i.getId();
            o !== void 0 ? s.featureId = o : s.featureId = null;
          }
          return t.geometryType && (s.geometryType = Hc(i.getGeometry())), e(s);
        };
      }
      function Qc(n) {
        const t = Vc(), e = n.length, s = new Array(e);
        for (let o = 0; o < e; ++o) s[o] = el(n[o], t);
        const i = Jc(), r = new Array(e);
        return function(o, a) {
          if (i.properties = o.getPropertiesInternal(), i.resolution = a, t.featureId) {
            const l = o.getId();
            l !== void 0 ? i.featureId = l : i.featureId = null;
          }
          let h = 0;
          for (let l = 0; l < e; ++l) {
            const u = s[l](i);
            u && (r[h] = u, h += 1);
          }
          return r.length = h, r;
        };
      }
      function p_(n, t) {
        const e = n.length, s = new Array(e);
        for (let i = 0; i < e; ++i) {
          const r = n[i], o = "filter" in r ? In(r.filter, me, t) : f_;
          let a;
          if (Array.isArray(r.style)) {
            const h = r.style.length;
            a = new Array(h);
            for (let l = 0; l < h; ++l) a[l] = el(r.style[l], t);
          } else a = [el(r.style, t)];
          s[i] = { filter: o, styles: a };
        }
        return function(i) {
          const r = [];
          let o = !1;
          for (let a = 0; a < e; ++a) {
            const h = s[a].filter;
            if (h(i) && !(n[a].else && o)) {
              o = !0;
              for (const l of s[a].styles) {
                const u = l(i);
                u && r.push(u);
              }
            }
          }
          return r;
        };
      }
      function el(n, t) {
        const e = Tr(n, "", t), s = Ir(n, "", t), i = m_(n, t), r = __(n, t), o = be(n, "z-index", t);
        if (!e && !s && !i && !r && !Qs(n)) throw new Error("No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(n));
        const a = new ae();
        return function(h) {
          let l = !0;
          if (e) {
            const u = e(h);
            u && (l = !1), a.setFill(u);
          }
          if (s) {
            const u = s(h);
            u && (l = !1), a.setStroke(u);
          }
          if (i) {
            const u = i(h);
            u && (l = !1), a.setText(u);
          }
          if (r) {
            const u = r(h);
            u && (l = !1), a.setImage(u);
          }
          return o && a.setZIndex(o(h)), l ? null : a;
        };
      }
      function Tr(n, t, e) {
        let s;
        if (t + "fill-pattern-src" in n) s = M_(n, t + "fill-", e);
        else {
          if (n[t + "fill-color"] === "none") return (r) => null;
          s = nl(n, t + "fill-color", e);
        }
        if (!s) return null;
        const i = new Ke();
        return function(r) {
          const o = s(r);
          return o === zh ? null : (i.setColor(o), i);
        };
      }
      function Ir(n, t, e) {
        const s = be(n, t + "stroke-width", e), i = nl(n, t + "stroke-color", e);
        if (!s && !i) return null;
        const r = An(n, t + "stroke-line-cap", e), o = An(n, t + "stroke-line-join", e), a = td(n, t + "stroke-line-dash", e), h = be(n, t + "stroke-line-dash-offset", e), l = be(n, t + "stroke-miter-limit", e), u = new ke();
        return function(c) {
          if (i) {
            const d = i(c);
            if (d === zh) return null;
            u.setColor(d);
          }
          if (s && u.setWidth(s(c)), r) {
            const d = r(c);
            if (d !== "butt" && d !== "round" && d !== "square") throw new Error("Expected butt, round, or square line cap");
            u.setLineCap(d);
          }
          if (o) {
            const d = o(c);
            if (d !== "bevel" && d !== "round" && d !== "miter") throw new Error("Expected bevel, round, or miter line join");
            u.setLineJoin(d);
          }
          return a && u.setLineDash(a(c)), h && u.setLineDashOffset(h(c)), l && u.setMiterLimit(l(c)), u;
        };
      }
      function m_(n, t) {
        const e = "text-", s = An(n, e + "value", t);
        if (!s) return null;
        const i = Tr(n, e, t), r = Tr(n, e + "background-", t), o = Ir(n, e, t), a = Ir(n, e + "background-", t), h = An(n, e + "font", t), l = be(n, e + "max-angle", t), u = be(n, e + "offset-x", t), c = be(n, e + "offset-y", t), d = mi(n, e + "overflow", t), p = An(n, e + "placement", t), f = be(n, e + "repeat", t), y = Qo(n, e + "scale", t), E = mi(n, e + "rotate-with-view", t), M = be(n, e + "rotation", t), w = An(n, e + "align", t), C = An(n, e + "justify", t), v = An(n, e + "baseline", t), R = mi(n, e + "keep-upright", t), I = td(n, e + "padding", t), O = ea(n, e + "declutter-mode"), A = new Ko({ declutterMode: O });
        return function(P) {
          if (A.setText(s(P)), i && A.setFill(i(P)), r && A.setBackgroundFill(r(P)), o && A.setStroke(o(P)), a && A.setBackgroundStroke(a(P)), h && A.setFont(h(P)), l && A.setMaxAngle(l(P)), u && A.setOffsetX(u(P)), c && A.setOffsetY(c(P)), d && A.setOverflow(d(P)), p) {
            const F = p(P);
            if (F !== "point" && F !== "line") throw new Error("Expected point or line for text-placement");
            A.setPlacement(F);
          }
          if (f && A.setRepeat(f(P)), y && A.setScale(y(P)), E && A.setRotateWithView(E(P)), M && A.setRotation(M(P)), w) {
            const F = w(P);
            if (F !== "left" && F !== "center" && F !== "right" && F !== "end" && F !== "start") throw new Error("Expected left, right, center, start, or end for text-align");
            A.setTextAlign(F);
          }
          if (C) {
            const F = C(P);
            if (F !== "left" && F !== "right" && F !== "center") throw new Error("Expected left, right, or center for text-justify");
            A.setJustify(F);
          }
          if (v) {
            const F = v(P);
            if (F !== "bottom" && F !== "top" && F !== "middle" && F !== "alphabetic" && F !== "hanging") throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");
            A.setTextBaseline(F);
          }
          return I && A.setPadding(I(P)), R && A.setKeepUpright(R(P)), A;
        };
      }
      function __(n, t) {
        return "icon-src" in n ? y_(n, t) : "shape-points" in n ? x_(n, t) : "circle-radius" in n ? E_(n, t) : null;
      }
      function y_(n, t) {
        const e = "icon-", s = e + "src", i = id(n[s], s), r = Jo(n, e + "anchor", t), o = Qo(n, e + "scale", t), a = be(n, e + "opacity", t), h = Jo(n, e + "displacement", t), l = be(n, e + "rotation", t), u = mi(n, e + "rotate-with-view", t), c = nd(n, e + "anchor-origin"), d = sd(n, e + "anchor-x-units"), p = sd(n, e + "anchor-y-units"), f = R_(n, e + "color"), y = S_(n, e + "cross-origin"), E = v_(n, e + "offset"), M = nd(n, e + "offset-origin"), w = ta(n, e + "width"), C = ta(n, e + "height"), v = w_(n, e + "size"), R = ea(n, e + "declutter-mode"), I = new Sr({ src: i, anchorOrigin: c, anchorXUnits: d, anchorYUnits: p, color: f, crossOrigin: y, offset: E, offsetOrigin: M, height: C, width: w, size: v, declutterMode: R });
        return function(O) {
          return a && I.setOpacity(a(O)), h && I.setDisplacement(h(O)), l && I.setRotation(l(O)), u && I.setRotateWithView(u(O)), o && I.setScale(o(O)), r && I.setAnchor(r(O)), I;
        };
      }
      function x_(n, t) {
        const e = "shape-", s = e + "points", i = e + "radius", r = sl(n[s], s), o = sl(n[i], i), a = Tr(n, e, t), h = Ir(n, e, t), l = Qo(n, e + "scale", t), u = Jo(n, e + "displacement", t), c = be(n, e + "rotation", t), d = mi(n, e + "rotate-with-view", t), p = ta(n, e + "radius2"), f = ta(n, e + "angle"), y = ea(n, e + "declutter-mode"), E = new wr({ points: r, radius: o, radius2: p, angle: f, declutterMode: y });
        return function(M) {
          return a && E.setFill(a(M)), h && E.setStroke(h(M)), u && E.setDisplacement(u(M)), c && E.setRotation(c(M)), d && E.setRotateWithView(d(M)), l && E.setScale(l(M)), E;
        };
      }
      function E_(n, t) {
        const e = "circle-", s = Tr(n, e, t), i = Ir(n, e, t), r = be(n, e + "radius", t), o = Qo(n, e + "scale", t), a = Jo(n, e + "displacement", t), h = be(n, e + "rotation", t), l = mi(n, e + "rotate-with-view", t), u = ea(n, e + "declutter-mode"), c = new Ns({ radius: 5, declutterMode: u });
        return function(d) {
          return r && c.setRadius(r(d)), s && c.setFill(s(d)), i && c.setStroke(i(d)), a && c.setDisplacement(a(d)), h && c.setRotation(h(d)), l && c.setRotateWithView(l(d)), o && c.setScale(o(d)), c;
        };
      }
      function be(n, t, e) {
        if (!(t in n)) return;
        const s = In(n[t], Et, e);
        return function(i) {
          return sl(s(i), t);
        };
      }
      function An(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], Ce, e);
        return function(i) {
          return id(s(i), t);
        };
      }
      function M_(n, t, e) {
        const s = An(n, t + "pattern-src", e), i = ed(n, t + "pattern-offset", e), r = ed(n, t + "pattern-size", e), o = nl(n, t + "color", e);
        return function(a) {
          return { src: s(a), offset: i && i(a), size: r && r(a), color: o && o(a) };
        };
      }
      function mi(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], me, e);
        return function(i) {
          const r = s(i);
          if (typeof r != "boolean") throw new Error(`Expected a boolean for ${t}`);
          return r;
        };
      }
      function nl(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], He, e);
        return function(i) {
          return rd(s(i), t);
        };
      }
      function td(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], ks, e);
        return function(i) {
          return Ar(s(i), t);
        };
      }
      function Jo(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], ks, e);
        return function(i) {
          const r = Ar(s(i), t);
          if (r.length !== 2) throw new Error(`Expected two numbers for ${t}`);
          return r;
        };
      }
      function ed(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], ks, e);
        return function(i) {
          return od(s(i), t);
        };
      }
      function Qo(n, t, e) {
        if (!(t in n)) return null;
        const s = In(n[t], ks | Et, e);
        return function(i) {
          return C_(s(i), t);
        };
      }
      function ta(n, t) {
        const e = n[t];
        if (e !== void 0) {
          if (typeof e != "number") throw new Error(`Expected a number for ${t}`);
          return e;
        }
      }
      function w_(n, t) {
        const e = n[t];
        if (e !== void 0) {
          if (typeof e == "number") return ve(e);
          if (!Array.isArray(e)) throw new Error(`Expected a number or size array for ${t}`);
          if (e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") throw new Error(`Expected a number or size array for ${t}`);
          return e;
        }
      }
      function S_(n, t) {
        const e = n[t];
        if (e !== void 0) {
          if (typeof e != "string") throw new Error(`Expected a string for ${t}`);
          return e;
        }
      }
      function nd(n, t) {
        const e = n[t];
        if (e !== void 0) {
          if (e !== "bottom-left" && e !== "bottom-right" && e !== "top-left" && e !== "top-right") throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);
          return e;
        }
      }
      function sd(n, t) {
        const e = n[t];
        if (e !== void 0) {
          if (e !== "pixels" && e !== "fraction") throw new Error(`Expected pixels or fraction for ${t}`);
          return e;
        }
      }
      function v_(n, t) {
        const e = n[t];
        if (e !== void 0) return Ar(e, t);
      }
      function ea(n, t) {
        const e = n[t];
        if (e !== void 0) {
          if (typeof e != "string") throw new Error(`Expected a string for ${t}`);
          if (e !== "declutter" && e !== "obstacle" && e !== "none") throw new Error(`Expected declutter, obstacle, or none for ${t}`);
          return e;
        }
      }
      function R_(n, t) {
        const e = n[t];
        if (e !== void 0) return rd(e, t);
      }
      function Ar(n, t) {
        if (!Array.isArray(n)) throw new Error(`Expected an array for ${t}`);
        const e = n.length;
        for (let s = 0; s < e; ++s) if (typeof n[s] != "number") throw new Error(`Expected an array of numbers for ${t}`);
        return n;
      }
      function id(n, t) {
        if (typeof n != "string") throw new Error(`Expected a string for ${t}`);
        return n;
      }
      function sl(n, t) {
        if (typeof n != "number") throw new Error(`Expected a number for ${t}`);
        return n;
      }
      function rd(n, t) {
        if (typeof n == "string") return n;
        const e = Ar(n, t), s = e.length;
        if (s < 3 || s > 4) throw new Error(`Expected a color with 3 or 4 values for ${t}`);
        return e;
      }
      function od(n, t) {
        const e = Ar(n, t);
        if (e.length !== 2) throw new Error(`Expected an array of two numbers for ${t}`);
        return e;
      }
      function C_(n, t) {
        return typeof n == "number" ? n : od(n, t);
      }
      const ad = { RENDER_ORDER: "renderOrder" };
      class hd extends zo {
        constructor(t) {
          t = t || {};
          const e = Object.assign({}, t);
          delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), this.declutter_ = t.declutter ? String(t.declutter) : void 0, this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(t.style), this.updateWhileAnimating_ = t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1, this.updateWhileInteracting_ = t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1;
        }
        getDeclutter() {
          return this.declutter_;
        }
        getFeatures(t) {
          return super.getFeatures(t);
        }
        getRenderBuffer() {
          return this.renderBuffer_;
        }
        getRenderOrder() {
          return this.get(ad.RENDER_ORDER);
        }
        getStyle() {
          return this.style_;
        }
        getStyleFunction() {
          return this.styleFunction_;
        }
        getUpdateWhileAnimating() {
          return this.updateWhileAnimating_;
        }
        getUpdateWhileInteracting() {
          return this.updateWhileInteracting_;
        }
        renderDeclutter(t, e) {
          const s = this.getDeclutter();
          s in t.declutter || (t.declutter[s] = new Rc(9)), this.getRenderer().renderDeclutter(t, e);
        }
        setRenderOrder(t) {
          this.set(ad.RENDER_ORDER, t);
        }
        setStyle(t) {
          this.style_ = t === void 0 ? Yc : t;
          const e = b_(t);
          this.styleFunction_ = t === null ? void 0 : Bm(e), this.changed();
        }
        setDeclutter(t) {
          this.declutter_ = t ? String(t) : void 0, this.changed();
        }
      }
      function b_(n) {
        if (n === void 0) return Yc;
        if (!n) return null;
        if (typeof n == "function" || n instanceof ae) return n;
        if (!Array.isArray(n)) return Qc([n]);
        if (n.length === 0) return [];
        const t = n.length, e = n[0];
        if (e instanceof ae) {
          const s = new Array(t);
          for (let i = 0; i < t; ++i) {
            const r = n[i];
            if (!(r instanceof ae)) throw new Error("Expected a list of style instances");
            s[i] = r;
          }
          return s;
        }
        if ("style" in e) {
          const s = new Array(t);
          for (let i = 0; i < t; ++i) {
            const r = n[i];
            if (!("style" in r)) throw new Error("Expected a list of rules with a style property");
            s[i] = r;
          }
          return g_(s);
        }
        return Qc(n);
      }
      class T_ extends lo {
        constructor(t) {
          super(), this.map_ = t;
        }
        dispatchRenderEvent(t, e) {
          dt();
        }
        calculateMatrices2D(t) {
          const e = t.viewState, s = t.coordinateToPixelTransform, i = t.pixelToCoordinateTransform;
          vn(s, t.size[0] / 2, t.size[1] / 2, 1 / e.resolution, -1 / e.resolution, -e.rotation, -e.center[0], -e.center[1]), hc(i, s);
        }
        forEachFeatureAtCoordinate(t, e, s, i, r, o, a, h) {
          let l;
          const u = e.viewState;
          function c(v, R, I, O) {
            return r.call(o, R, v ? I : null, O);
          }
          const d = u.projection, p = Bu(t.slice(), d), f = [[0, 0]];
          if (d.canWrapX() && i) {
            const v = d.getExtent(), R = pt(v);
            f.push([-R, 0], [R, 0]);
          }
          const y = e.layerStatesArray, E = y.length, M = [], w = [];
          for (let v = 0; v < f.length; v++) for (let R = E - 1; R >= 0; --R) {
            const I = y[R], O = I.layer;
            if (O.hasRenderer() && Nh(I, u) && a.call(h, O)) {
              const A = O.getRenderer(), P = O.getSource();
              if (A && P) {
                const F = P.getWrapX() ? p : t, z = c.bind(null, I.managed);
                w[0] = F[0] + f[v][0], w[1] = F[1] + f[v][1], l = A.forEachFeatureAtCoordinate(w, e, s, z, M);
              }
              if (l) return l;
            }
          }
          if (M.length === 0) return;
          const C = 1 / M.length;
          return M.forEach((v, R) => v.distanceSq += R * C), M.sort((v, R) => v.distanceSq - R.distanceSq), M.some((v) => l = v.callback(v.feature, v.layer, v.geometry)), l;
        }
        hasFeatureAtCoordinate(t, e, s, i, r, o) {
          return this.forEachFeatureAtCoordinate(t, e, s, i, tr, this, r, o) !== void 0;
        }
        getMap() {
          return this.map_;
        }
        renderFrame(t) {
          dt();
        }
        scheduleExpireIconCache(t) {
          Be.canExpireCache() && t.postRenderFunctions.push(I_);
        }
      }
      function I_(n, t) {
        Be.expire();
      }
      class ld extends En {
        constructor(t, e, s, i) {
          super(t), this.inversePixelTransform = e, this.frameState = s, this.context = i;
        }
      }
      class A_ extends T_ {
        constructor(t) {
          super(t), this.fontChangeListenerKey_ = xt(Tn, Hs.PROPERTYCHANGE, t.redrawText, t), this.element_ = document.createElement("div");
          const e = this.element_.style;
          e.position = "absolute", e.width = "100%", e.height = "100%", e.zIndex = "0", this.element_.className = Vo + " ol-layers";
          const s = t.getViewport();
          s.insertBefore(this.element_, s.firstChild || null), this.children_ = [], this.renderedVisible_ = !0;
        }
        dispatchRenderEvent(t, e) {
          const s = this.getMap();
          if (s.hasListener(t)) {
            const i = new ld(t, void 0, e);
            s.dispatchEvent(i);
          }
        }
        disposeInternal() {
          At(this.fontChangeListenerKey_), this.element_.remove(), super.disposeInternal();
        }
        renderFrame(t) {
          if (!t) {
            this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1);
            return;
          }
          this.calculateMatrices2D(t), this.dispatchRenderEvent(Ge.PRECOMPOSE, t);
          const e = t.layerStatesArray.sort((o, a) => o.zIndex - a.zIndex);
          e.some((o) => o.layer instanceof hd && o.layer.getDeclutter()) && (t.declutter = {});
          const s = t.viewState;
          this.children_.length = 0;
          const i = [];
          let r = null;
          for (let o = 0, a = e.length; o < a; ++o) {
            const h = e[o];
            t.layerIndex = o;
            const l = h.layer, u = l.getSourceState();
            if (!Nh(h, s) || u != "ready" && u != "undefined") {
              l.unrender();
              continue;
            }
            const c = l.render(t, r);
            c && (c !== r && (this.children_.push(c), r = c), i.push(h));
          }
          this.declutter(t, i), bm(this.element_, this.children_), this.dispatchRenderEvent(Ge.POSTCOMPOSE, t), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(t);
        }
        declutter(t, e) {
          if (t.declutter) {
            for (let s = e.length - 1; s >= 0; --s) {
              const i = e[s], r = i.layer;
              r.getDeclutter() && r.renderDeclutter(t, i);
            }
            e.forEach((s) => s.layer.renderDeferred(t));
          }
        }
      }
      class Jn extends En {
        constructor(t, e) {
          super(t), this.layer = e;
        }
      }
      const il = { LAYERS: "layers" };
      class _i extends Au {
        constructor(t) {
          t = t || {};
          const e = Object.assign({}, t);
          delete e.layers;
          let s = t.layers;
          super(e), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(il.LAYERS, this.handleLayersChanged_), s ? Array.isArray(s) ? s = new on(s.slice(), { unique: !0 }) : wt(typeof s.getArray == "function", "Expected `layers` to be an array or a `Collection`") : s = new on(void 0, { unique: !0 }), this.setLayers(s);
        }
        handleLayerChange_() {
          this.changed();
        }
        handleLayersChanged_() {
          this.layersListenerKeys_.forEach(At), this.layersListenerKeys_.length = 0;
          const t = this.getLayers();
          this.layersListenerKeys_.push(xt(t, we.ADD, this.handleLayersAdd_, this), xt(t, we.REMOVE, this.handleLayersRemove_, this));
          for (const s in this.listenerKeys_) this.listenerKeys_[s].forEach(At);
          er(this.listenerKeys_);
          const e = t.getArray();
          for (let s = 0, i = e.length; s < i; s++) {
            const r = e[s];
            this.registerLayerListeners_(r), this.dispatchEvent(new Jn("addlayer", r));
          }
          this.changed();
        }
        registerLayerListeners_(t) {
          const e = [xt(t, Hs.PROPERTYCHANGE, this.handleLayerChange_, this), xt(t, lt.CHANGE, this.handleLayerChange_, this)];
          t instanceof _i && e.push(xt(t, "addlayer", this.handleLayerGroupAdd_, this), xt(t, "removelayer", this.handleLayerGroupRemove_, this)), this.listenerKeys_[vt(t)] = e;
        }
        handleLayerGroupAdd_(t) {
          this.dispatchEvent(new Jn("addlayer", t.layer));
        }
        handleLayerGroupRemove_(t) {
          this.dispatchEvent(new Jn("removelayer", t.layer));
        }
        handleLayersAdd_(t) {
          const e = t.element;
          this.registerLayerListeners_(e), this.dispatchEvent(new Jn("addlayer", e)), this.changed();
        }
        handleLayersRemove_(t) {
          const e = t.element, s = vt(e);
          this.listenerKeys_[s].forEach(At), delete this.listenerKeys_[s], this.dispatchEvent(new Jn("removelayer", e)), this.changed();
        }
        getLayers() {
          return this.get(il.LAYERS);
        }
        setLayers(t) {
          const e = this.getLayers();
          if (e) {
            const s = e.getArray();
            for (let i = 0, r = s.length; i < r; ++i) this.dispatchEvent(new Jn("removelayer", s[i]));
          }
          this.set(il.LAYERS, t);
        }
        getLayersArray(t) {
          return t = t !== void 0 ? t : [], this.getLayers().forEach(function(e) {
            e.getLayersArray(t);
          }), t;
        }
        getLayerStatesArray(t) {
          const e = t !== void 0 ? t : [], s = e.length;
          this.getLayers().forEach(function(o) {
            o.getLayerStatesArray(e);
          });
          const i = this.getLayerState();
          let r = i.zIndex;
          !t && i.zIndex === void 0 && (r = 0);
          for (let o = s, a = e.length; o < a; o++) {
            const h = e[o];
            h.opacity *= i.opacity, h.visible = h.visible && i.visible, h.maxResolution = Math.min(h.maxResolution, i.maxResolution), h.minResolution = Math.max(h.minResolution, i.minResolution), h.minZoom = Math.max(h.minZoom, i.minZoom), h.maxZoom = Math.min(h.maxZoom, i.maxZoom), i.extent !== void 0 && (h.extent !== void 0 ? h.extent = Fe(h.extent, i.extent) : h.extent = i.extent), h.zIndex === void 0 && (h.zIndex = r);
          }
          return e;
        }
        getSourceState() {
          return "ready";
        }
      }
      class yi extends En {
        constructor(t, e, s) {
          super(t), this.map = e, this.frameState = s !== void 0 ? s : null;
        }
      }
      class Qn extends yi {
        constructor(t, e, s, i, r, o) {
          super(t, e, r), this.originalEvent = s, this.pixel_ = null, this.coordinate_ = null, this.dragging = i !== void 0 ? i : !1, this.activePointers = o;
        }
        get pixel() {
          return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
        }
        set pixel(t) {
          this.pixel_ = t;
        }
        get coordinate() {
          return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
        }
        set coordinate(t) {
          this.coordinate_ = t;
        }
        preventDefault() {
          super.preventDefault(), "preventDefault" in this.originalEvent && this.originalEvent.preventDefault();
        }
        stopPropagation() {
          super.stopPropagation(), "stopPropagation" in this.originalEvent && this.originalEvent.stopPropagation();
        }
      }
      const zt = { SINGLECLICK: "singleclick", CLICK: lt.CLICK, DBLCLICK: lt.DBLCLICK, POINTERDRAG: "pointerdrag", POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown", POINTERUP: "pointerup", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERCANCEL: "pointercancel" }, rl = { POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown", POINTERUP: "pointerup", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERCANCEL: "pointercancel" };
      class P_ extends co {
        constructor(t, e) {
          super(t), this.map_ = t, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = e === void 0 ? 1 : e, this.down_ = null;
          const s = this.map_.getViewport();
          this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = s, this.pointerdownListenerKey_ = xt(s, rl.POINTERDOWN, this.handlePointerDown_, this), this.originalPointerMoveEvent_, this.relayedListenerKey_ = xt(s, rl.POINTERMOVE, this.relayMoveEvent_, this), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(lt.TOUCHMOVE, this.boundHandleTouchMove_, Xh ? { passive: !1 } : !1);
        }
        emulateClick_(t) {
          let e = new Qn(zt.CLICK, this.map_, t);
          this.dispatchEvent(e), this.clickTimeoutId_ !== void 0 ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new Qn(zt.DBLCLICK, this.map_, t), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const s = new Qn(zt.SINGLECLICK, this.map_, t);
            this.dispatchEvent(s);
          }, 250);
        }
        updateActivePointers_(t) {
          const e = t, s = e.pointerId;
          if (e.type == zt.POINTERUP || e.type == zt.POINTERCANCEL) {
            delete this.trackedTouches_[s];
            for (const i in this.trackedTouches_) if (this.trackedTouches_[i].target !== e.target) {
              delete this.trackedTouches_[i];
              break;
            }
          } else (e.type == zt.POINTERDOWN || e.type == zt.POINTERMOVE) && (this.trackedTouches_[s] = e);
          this.activePointers_ = Object.values(this.trackedTouches_);
        }
        handlePointerUp_(t) {
          this.updateActivePointers_(t);
          const e = new Qn(zt.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_);
          this.dispatchEvent(e), this.emulateClicks_ && !e.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(t) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(At), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null);
        }
        isMouseActionButton_(t) {
          return t.button === 0;
        }
        handlePointerDown_(t) {
          this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(t);
          const e = new Qn(zt.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_);
          if (this.dispatchEvent(e), this.down_ = new PointerEvent(t.type, t), Object.defineProperty(this.down_, "target", { writable: !1, value: t.target }), this.dragListenerKeys_.length === 0) {
            const s = this.map_.getOwnerDocument();
            this.dragListenerKeys_.push(xt(s, zt.POINTERMOVE, this.handlePointerMove_, this), xt(s, zt.POINTERUP, this.handlePointerUp_, this), xt(this.element_, zt.POINTERCANCEL, this.handlePointerUp_, this)), this.element_.getRootNode && this.element_.getRootNode() !== s && this.dragListenerKeys_.push(xt(this.element_.getRootNode(), zt.POINTERUP, this.handlePointerUp_, this));
          }
        }
        handlePointerMove_(t) {
          if (this.isMoving_(t)) {
            this.updateActivePointers_(t), this.dragging_ = !0;
            const e = new Qn(zt.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_);
            this.dispatchEvent(e);
          }
        }
        relayMoveEvent_(t) {
          this.originalPointerMoveEvent_ = t;
          const e = !!(this.down_ && this.isMoving_(t));
          this.dispatchEvent(new Qn(zt.POINTERMOVE, this.map_, t, e));
        }
        handleTouchMove_(t) {
          const e = this.originalPointerMoveEvent_;
          (!e || e.defaultPrevented) && (typeof t.cancelable != "boolean" || t.cancelable === !0) && t.preventDefault();
        }
        isMoving_(t) {
          return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_;
        }
        disposeInternal() {
          this.relayedListenerKey_ && (At(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(lt.TOUCHMOVE, this.boundHandleTouchMove_), this.pointerdownListenerKey_ && (At(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(At), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
        }
      }
      const Pn = { POSTRENDER: "postrender", MOVESTART: "movestart", MOVEEND: "moveend", LOADSTART: "loadstart", LOADEND: "loadend" }, he = { LAYERGROUP: "layergroup", SIZE: "size", TARGET: "target", VIEW: "view" }, ol = 1 / 0;
      class L_ {
        constructor(t, e) {
          this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
        }
        clear() {
          this.elements_.length = 0, this.priorities_.length = 0, er(this.queuedElements_);
        }
        dequeue() {
          const t = this.elements_, e = this.priorities_, s = t[0];
          t.length == 1 ? (t.length = 0, e.length = 0) : (t[0] = t.pop(), e[0] = e.pop(), this.siftUp_(0));
          const i = this.keyFunction_(s);
          return delete this.queuedElements_[i], s;
        }
        enqueue(t) {
          wt(!(this.keyFunction_(t) in this.queuedElements_), "Tried to enqueue an `element` that was already added to the queue");
          const e = this.priorityFunction_(t);
          return e != ol ? (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) : !1;
        }
        getCount() {
          return this.elements_.length;
        }
        getLeftChildIndex_(t) {
          return t * 2 + 1;
        }
        getRightChildIndex_(t) {
          return t * 2 + 2;
        }
        getParentIndex_(t) {
          return t - 1 >> 1;
        }
        heapify_() {
          let t;
          for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t);
        }
        isEmpty() {
          return this.elements_.length === 0;
        }
        isKeyQueued(t) {
          return t in this.queuedElements_;
        }
        isQueued(t) {
          return this.isKeyQueued(this.keyFunction_(t));
        }
        siftUp_(t) {
          const e = this.elements_, s = this.priorities_, i = e.length, r = e[t], o = s[t], a = t;
          for (; t < i >> 1; ) {
            const h = this.getLeftChildIndex_(t), l = this.getRightChildIndex_(t), u = l < i && s[l] < s[h] ? l : h;
            e[t] = e[u], s[t] = s[u], t = u;
          }
          e[t] = r, s[t] = o, this.siftDown_(a, t);
        }
        siftDown_(t, e) {
          const s = this.elements_, i = this.priorities_, r = s[e], o = i[e];
          for (; e > t; ) {
            const a = this.getParentIndex_(e);
            if (i[a] > o) s[e] = s[a], i[e] = i[a], e = a;
            else break;
          }
          s[e] = r, i[e] = o;
        }
        reprioritize() {
          const t = this.priorityFunction_, e = this.elements_, s = this.priorities_;
          let i = 0;
          const r = e.length;
          let o, a, h;
          for (a = 0; a < r; ++a) o = e[a], h = t(o), h == ol ? delete this.queuedElements_[this.keyFunction_(o)] : (s[i] = h, e[i++] = o);
          e.length = i, s.length = i, this.heapify_();
        }
      }
      const Z = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
      class O_ extends L_ {
        constructor(t, e) {
          super(function(s) {
            return t.apply(null, s);
          }, function(s) {
            return s[0].getKey();
          }), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = e, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
        }
        enqueue(t) {
          const e = super.enqueue(t);
          return e && t[0].addEventListener(lt.CHANGE, this.boundHandleTileChange_), e;
        }
        getTilesLoading() {
          return this.tilesLoading_;
        }
        handleTileChange(t) {
          const e = t.target, s = e.getState();
          if (s === Z.LOADED || s === Z.ERROR || s === Z.EMPTY) {
            s !== Z.ERROR && e.removeEventListener(lt.CHANGE, this.boundHandleTileChange_);
            const i = e.getKey();
            i in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[i], --this.tilesLoading_), this.tileChangeCallback_();
          }
        }
        loadMoreTiles(t, e) {
          let s = 0;
          for (; this.tilesLoading_ < t && s < e && this.getCount() > 0; ) {
            const i = this.dequeue()[0], r = i.getKey();
            i.getState() === Z.IDLE && !(r in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[r] = !0, ++this.tilesLoading_, ++s, i.load());
          }
        }
      }
      function N_(n, t, e, s, i) {
        if (!n || !(e in n.wantedTiles) || !n.wantedTiles[e][t.getKey()]) return ol;
        const r = n.viewState.center, o = s[0] - r[0], a = s[1] - r[1];
        return 65536 * Math.log(i) + Math.sqrt(o * o + a * a) / i;
      }
      class al extends $e {
        constructor(t) {
          super();
          const e = t.element;
          e && !t.target && !e.style.pointerEvents && (e.style.pointerEvents = "auto"), this.element = e || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], t.render && (this.render = t.render), t.target && this.setTarget(t.target);
        }
        disposeInternal() {
          var t;
          (t = this.element) == null || t.remove(), super.disposeInternal();
        }
        getMap() {
          return this.map_;
        }
        setMap(t) {
          var e;
          this.map_ && ((e = this.element) == null || e.remove());
          for (let s = 0, i = this.listenerKeys.length; s < i; ++s) At(this.listenerKeys[s]);
          if (this.listenerKeys.length = 0, this.map_ = t, t) {
            const s = this.target_ ?? t.getOverlayContainerStopEvent();
            this.element && s.appendChild(this.element), this.render !== Js && this.listenerKeys.push(xt(t, Pn.POSTRENDER, this.render, this)), t.render();
          }
        }
        render(t) {
        }
        setTarget(t) {
          this.target_ = typeof t == "string" ? document.getElementById(t) : t;
        }
      }
      class F_ extends al {
        constructor(t) {
          t = t || {}, super({ element: document.createElement("div"), render: t.render, target: t.target }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = t.collapsible !== void 0, this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0, this.collapsible_ || (this.collapsed_ = !1), this.attributions_ = t.attributions;
          const e = t.className !== void 0 ? t.className : "ol-attribution", s = t.tipLabel !== void 0 ? t.tipLabel : "Attributions", i = t.expandClassName !== void 0 ? t.expandClassName : e + "-expand", r = t.collapseLabel !== void 0 ? t.collapseLabel : "›", o = t.collapseClassName !== void 0 ? t.collapseClassName : e + "-collapse";
          typeof r == "string" ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = r, this.collapseLabel_.className = o) : this.collapseLabel_ = r;
          const a = t.label !== void 0 ? t.label : "i";
          typeof a == "string" ? (this.label_ = document.createElement("span"), this.label_.textContent = a, this.label_.className = i) : this.label_ = a;
          const h = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
          this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = s, this.toggleButton_.appendChild(h), this.toggleButton_.addEventListener(lt.CLICK, this.handleClick_.bind(this), !1);
          const l = e + " " + Vo + " " + Kh + (this.collapsed_ && this.collapsible_ ? " " + Gc : "") + (this.collapsible_ ? "" : " ol-uncollapsible"), u = this.element;
          u.className = l, u.appendChild(this.toggleButton_), u.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
        }
        collectSourceAttributions_(t) {
          const e = this.getMap().getAllLayers(), s = new Set(e.flatMap((i) => i.getAttributions(t)));
          if (this.attributions_ !== void 0 && (Array.isArray(this.attributions_) ? this.attributions_.forEach((i) => s.add(i)) : s.add(this.attributions_)), !this.overrideCollapsible_) {
            const i = !e.some((r) => {
              var o;
              return ((o = r.getSource()) == null ? void 0 : o.getAttributionsCollapsible()) === !1;
            });
            this.setCollapsible(i);
          }
          return Array.from(s);
        }
        async updateElement_(t) {
          if (!t) {
            this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
            return;
          }
          const e = await Promise.all(this.collectSourceAttributions_(t).map((i) => kg(() => i))), s = e.length > 0;
          if (this.renderedVisible_ != s && (this.element.style.display = s ? "" : "none", this.renderedVisible_ = s), !Wn(e, this.renderedAttributions_)) {
            kc(this.ulElement_);
            for (let i = 0, r = e.length; i < r; ++i) {
              const o = document.createElement("li");
              o.innerHTML = e[i], this.ulElement_.appendChild(o);
            }
            this.renderedAttributions_ = e;
          }
        }
        handleClick_(t) {
          t.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
        }
        handleToggle_() {
          this.element.classList.toggle(Gc), this.collapsed_ ? Fc(this.collapseLabel_, this.label_) : Fc(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
        }
        getCollapsible() {
          return this.collapsible_;
        }
        setCollapsible(t) {
          this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_());
        }
        setCollapsed(t) {
          this.userCollapsed_ = t, !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
        }
        getCollapsed() {
          return this.collapsed_;
        }
        render(t) {
          this.updateElement_(t.frameState);
        }
      }
      class k_ extends al {
        constructor(t) {
          t = t || {}, super({ element: document.createElement("div"), render: t.render, target: t.target });
          const e = t.className !== void 0 ? t.className : "ol-rotate", s = t.label !== void 0 ? t.label : "⇧", i = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
          this.label_ = null, typeof s == "string" ? (this.label_ = document.createElement("span"), this.label_.className = i, this.label_.textContent = s) : (this.label_ = s, this.label_.classList.add(i));
          const r = t.tipLabel ? t.tipLabel : "Reset rotation", o = document.createElement("button");
          o.className = e + "-reset", o.setAttribute("type", "button"), o.title = r, o.appendChild(this.label_), o.addEventListener(lt.CLICK, this.handleClick_.bind(this), !1);
          const a = e + " " + Vo + " " + Kh, h = this.element;
          h.className = a, h.appendChild(o), this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(qo);
        }
        handleClick_(t) {
          t.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_();
        }
        resetNorth_() {
          const t = this.getMap().getView();
          if (!t) return;
          const e = t.getRotation();
          e !== void 0 && (this.duration_ > 0 && e % (2 * Math.PI) !== 0 ? t.animate({ rotation: 0, duration: this.duration_, easing: hi }) : t.setRotation(0));
        }
        render(t) {
          const e = t.frameState;
          if (!e) return;
          const s = e.viewState.rotation;
          if (s != this.rotation_) {
            const i = "rotate(" + s + "rad)";
            if (this.autoHide_) {
              const r = this.element.classList.contains(qo);
              !r && s === 0 ? this.element.classList.add(qo) : r && s !== 0 && this.element.classList.remove(qo);
            }
            this.label_.style.transform = i;
          }
          this.rotation_ = s;
        }
      }
      class D_ extends al {
        constructor(t) {
          t = t || {}, super({ element: document.createElement("div"), target: t.target });
          const e = t.className !== void 0 ? t.className : "ol-zoom", s = t.delta !== void 0 ? t.delta : 1, i = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + "-in", r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + "-out", o = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+", a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "–", h = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in", l = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out", u = document.createElement("button");
          u.className = i, u.setAttribute("type", "button"), u.title = h, u.appendChild(typeof o == "string" ? document.createTextNode(o) : o), u.addEventListener(lt.CLICK, this.handleClick_.bind(this, s), !1);
          const c = document.createElement("button");
          c.className = r, c.setAttribute("type", "button"), c.title = l, c.appendChild(typeof a == "string" ? document.createTextNode(a) : a), c.addEventListener(lt.CLICK, this.handleClick_.bind(this, -s), !1);
          const d = e + " " + Vo + " " + Kh, p = this.element;
          p.className = d, p.appendChild(u), p.appendChild(c), this.duration_ = t.duration !== void 0 ? t.duration : 250;
        }
        handleClick_(t, e) {
          e.preventDefault(), this.zoomByDelta_(t);
        }
        zoomByDelta_(t) {
          const e = this.getMap().getView();
          if (!e) return;
          const s = e.getZoom();
          if (s !== void 0) {
            const i = e.getConstrainedZoom(s + t);
            this.duration_ > 0 ? (e.getAnimating() && e.cancelAnimations(), e.animate({ zoom: i, duration: this.duration_, easing: hi })) : e.setZoom(i);
          }
        }
      }
      function G_(n) {
        n = n || {};
        const t = new on();
        return (n.zoom === void 0 || n.zoom) && t.push(new D_(n.zoomOptions)), (n.rotate === void 0 || n.rotate) && t.push(new k_(n.rotateOptions)), (n.attribution === void 0 || n.attribution) && t.push(new F_(n.attributionOptions)), t;
      }
      const ud = { ACTIVE: "active" };
      class Pr extends $e {
        constructor(t) {
          super(), this.on, this.once, this.un, t && t.handleEvent && (this.handleEvent = t.handleEvent), this.map_ = null, this.setActive(!0);
        }
        getActive() {
          return this.get(ud.ACTIVE);
        }
        getMap() {
          return this.map_;
        }
        handleEvent(t) {
          return !0;
        }
        setActive(t) {
          this.set(ud.ACTIVE, t);
        }
        setMap(t) {
          this.map_ = t;
        }
      }
      function z_(n, t, e) {
        const s = n.getCenterInternal();
        if (s) {
          const i = [s[0] + t[0], s[1] + t[1]];
          n.animateInternal({ duration: e !== void 0 ? e : 250, easing: kp, center: n.getConstrainedCenter(i) });
        }
      }
      function hl(n, t, e, s) {
        const i = n.getZoom();
        if (i === void 0) return;
        const r = n.getConstrainedZoom(i + t), o = n.getResolutionForZoom(r);
        n.getAnimating() && n.cancelAnimations(), n.animate({ resolution: o, anchor: e, duration: s !== void 0 ? s : 250, easing: hi });
      }
      class U_ extends Pr {
        constructor(t) {
          super(), t = t || {}, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250;
        }
        handleEvent(t) {
          let e = !1;
          if (t.type == zt.DBLCLICK) {
            const s = t.originalEvent, i = t.map, r = t.coordinate, o = s.shiftKey ? -this.delta_ : this.delta_, a = i.getView();
            hl(a, o, r, this.duration_), s.preventDefault(), e = !0;
          }
          return !e;
        }
      }
      class Lr extends Pr {
        constructor(t) {
          t = t || {}, super(t), t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent), t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent), t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent), t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent), t.stopDown && (this.stopDown = t.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = [];
        }
        getPointerCount() {
          return this.targetPointers.length;
        }
        handleDownEvent(t) {
          return !1;
        }
        handleDragEvent(t) {
        }
        handleEvent(t) {
          if (!t.originalEvent) return !0;
          let e = !1;
          if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) {
            if (t.type == zt.POINTERDRAG) this.handleDragEvent(t), t.originalEvent.preventDefault();
            else if (t.type == zt.POINTERUP) {
              const s = this.handleUpEvent(t);
              this.handlingDownUpSequence = s && this.targetPointers.length > 0;
            }
          } else if (t.type == zt.POINTERDOWN) {
            const s = this.handleDownEvent(t);
            this.handlingDownUpSequence = s, e = this.stopDown(s);
          } else t.type == zt.POINTERMOVE && this.handleMoveEvent(t);
          return !e;
        }
        handleMoveEvent(t) {
        }
        handleUpEvent(t) {
          return !1;
        }
        stopDown(t) {
          return t;
        }
        updateTrackedPointers_(t) {
          t.activePointers && (this.targetPointers = t.activePointers);
        }
      }
      function ll(n) {
        const t = n.length;
        let e = 0, s = 0;
        for (let i = 0; i < t; i++) e += n[i].clientX, s += n[i].clientY;
        return { clientX: e / t, clientY: s / t };
      }
      function ul(n) {
        const t = arguments;
        return function(e) {
          let s = !0;
          for (let i = 0, r = t.length; i < r && (s = s && t[i](e), !!s); ++i) ;
          return s;
        };
      }
      const B_ = function(n) {
        const t = n.originalEvent;
        return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
      }, j_ = function(n) {
        const t = n.map.getTargetElement(), e = t.getRootNode(), s = n.map.getOwnerDocument().activeElement;
        return e instanceof ShadowRoot ? e.host.contains(s) : t.contains(s);
      }, cd = function(n) {
        const t = n.map.getTargetElement(), e = t.getRootNode();
        return (e instanceof ShadowRoot ? e.host : t).hasAttribute("tabindex") ? j_(n) : !0;
      }, W_ = tr, dd = function(n) {
        const t = n.originalEvent;
        return t.button == 0 && !(Nc && Wh && t.ctrlKey);
      }, fd = function(n) {
        const t = n.originalEvent;
        return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
      }, Y_ = function(n) {
        const t = n.originalEvent;
        return Wh ? t.metaKey : t.ctrlKey;
      }, X_ = function(n) {
        const t = n.originalEvent;
        return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
      }, gd = function(n) {
        const t = n.originalEvent, e = t.target.tagName;
        return e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA" && !t.target.isContentEditable;
      }, cl = function(n) {
        const t = n.originalEvent;
        return wt(t !== void 0, "mapBrowserEvent must originate from a pointer event"), t.pointerType == "mouse";
      }, q_ = function(n) {
        const t = n.originalEvent;
        return wt(t !== void 0, "mapBrowserEvent must originate from a pointer event"), t.isPrimary && t.button === 0;
      };
      class V_ extends Lr {
        constructor(t) {
          super({ stopDown: uo }), t = t || {}, this.kinetic_ = t.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
          const e = t.condition ? t.condition : ul(fd, q_);
          this.condition_ = t.onFocusOnly ? ul(cd, e) : e, this.noKinetic_ = !1;
        }
        handleDragEvent(t) {
          const e = t.map;
          this.panning_ || (this.panning_ = !0, e.getView().beginInteraction());
          const s = this.targetPointers, i = e.getEventPixel(ll(s));
          if (s.length == this.lastPointersCount_) {
            if (this.kinetic_ && this.kinetic_.update(i[0], i[1]), this.lastCentroid) {
              const r = [this.lastCentroid[0] - i[0], i[1] - this.lastCentroid[1]], o = t.map.getView();
              op(r, o.getResolution()), rh(r, o.getRotation()), o.adjustCenterInternal(r);
            }
          } else this.kinetic_ && this.kinetic_.begin();
          this.lastCentroid = i, this.lastPointersCount_ = s.length, t.originalEvent.preventDefault();
        }
        handleUpEvent(t) {
          const e = t.map, s = e.getView();
          if (this.targetPointers.length === 0) {
            if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
              const i = this.kinetic_.getDistance(), r = this.kinetic_.getAngle(), o = s.getCenterInternal(), a = e.getPixelFromCoordinateInternal(o), h = e.getCoordinateFromPixelInternal([a[0] - i * Math.cos(r), a[1] - i * Math.sin(r)]);
              s.animateInternal({ center: s.getConstrainedCenter(h), duration: 500, easing: hi });
            }
            return this.panning_ && (this.panning_ = !1, s.endInteraction()), !1;
          }
          return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0;
        }
        handleDownEvent(t) {
          if (this.targetPointers.length > 0 && this.condition_(t)) {
            const e = t.map.getView();
            return this.lastCentroid = null, e.getAnimating() && e.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
          }
          return !1;
        }
      }
      class $_ extends Lr {
        constructor(t) {
          t = t || {}, super({ stopDown: uo }), this.condition_ = t.condition ? t.condition : B_, this.lastAngle_ = void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250;
        }
        handleDragEvent(t) {
          if (!cl(t)) return;
          const e = t.map, s = e.getView();
          if (s.getConstraints().rotation === xh) return;
          const i = e.getSize(), r = t.pixel, o = Math.atan2(i[1] / 2 - r[1], r[0] - i[0] / 2);
          if (this.lastAngle_ !== void 0) {
            const a = o - this.lastAngle_;
            s.adjustRotationInternal(-a);
          }
          this.lastAngle_ = o;
        }
        handleUpEvent(t) {
          return cl(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
        }
        handleDownEvent(t) {
          return cl(t) && dd(t) && this.condition_(t) ? (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0) : !1;
        }
      }
      class Z_ extends lo {
        constructor(t) {
          super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + t, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
        }
        disposeInternal() {
          this.setMap(null);
        }
        render_() {
          const t = this.startPixel_, e = this.endPixel_, s = "px", i = this.element_.style;
          i.left = Math.min(t[0], e[0]) + s, i.top = Math.min(t[1], e[1]) + s, i.width = Math.abs(e[0] - t[0]) + s, i.height = Math.abs(e[1] - t[1]) + s;
        }
        setMap(t) {
          if (this.map_) {
            this.map_.getOverlayContainer().removeChild(this.element_);
            const e = this.element_.style;
            e.left = "inherit", e.top = "inherit", e.width = "inherit", e.height = "inherit";
          }
          this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
        }
        setPixels(t, e) {
          this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_();
        }
        createOrUpdateGeometry() {
          if (!this.map_) return;
          const t = this.startPixel_, e = this.endPixel_, s = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_);
          s[4] = s[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([s]) : this.geometry_ = new hn([s]);
        }
        getGeometry() {
          return this.geometry_;
        }
      }
      const xi = { BOXSTART: "boxstart", BOXDRAG: "boxdrag", BOXEND: "boxend", BOXCANCEL: "boxcancel" };
      class Or extends En {
        constructor(t, e, s) {
          super(t), this.coordinate = e, this.mapBrowserEvent = s;
        }
      }
      class K_ extends Lr {
        constructor(t) {
          super(), this.on, this.once, this.un, t = t ?? {}, this.box_ = new Z_(t.className || "ol-dragbox"), this.minArea_ = t.minArea ?? 64, t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd), this.startPixel_ = null, this.condition_ = t.condition ?? dd, this.boxEndCondition_ = t.boxEndCondition ?? this.defaultBoxEndCondition;
        }
        defaultBoxEndCondition(t, e, s) {
          const i = s[0] - e[0], r = s[1] - e[1];
          return i * i + r * r >= this.minArea_;
        }
        getGeometry() {
          return this.box_.getGeometry();
        }
        handleDragEvent(t) {
          this.startPixel_ && (this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new Or(xi.BOXDRAG, t.coordinate, t)));
        }
        handleUpEvent(t) {
          if (!this.startPixel_) return !1;
          const e = this.boxEndCondition_(t, this.startPixel_, t.pixel);
          return e && this.onBoxEnd(t), this.dispatchEvent(new Or(e ? xi.BOXEND : xi.BOXCANCEL, t.coordinate, t)), this.box_.setMap(null), this.startPixel_ = null, !1;
        }
        handleDownEvent(t) {
          return this.condition_(t) ? (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new Or(xi.BOXSTART, t.coordinate, t)), !0) : !1;
        }
        onBoxEnd(t) {
        }
        setActive(t) {
          t || (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(new Or(xi.BOXCANCEL, this.startPixel_, null)), this.startPixel_ = null)), super.setActive(t);
        }
        setMap(t) {
          this.getMap() && (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(new Or(xi.BOXCANCEL, this.startPixel_, null)), this.startPixel_ = null)), super.setMap(t);
        }
      }
      class H_ extends K_ {
        constructor(t) {
          t = t || {};
          const e = t.condition ? t.condition : X_;
          super({ condition: e, className: t.className || "ol-dragzoom", minArea: t.minArea }), this.duration_ = t.duration !== void 0 ? t.duration : 200, this.out_ = t.out !== void 0 ? t.out : !1;
        }
        onBoxEnd(t) {
          const e = this.getMap().getView();
          let s = this.getGeometry();
          if (this.out_) {
            const i = e.rotatedExtentForGeometry(s), r = e.getResolutionForExtentInternal(i), o = e.getResolution() / r;
            s = s.clone(), s.scale(o * o);
          }
          e.fitInternal(s, { duration: this.duration_, easing: hi });
        }
      }
      const Ds = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", DOWN: "ArrowDown" };
      class J_ extends Pr {
        constructor(t) {
          super(), t = t || {}, this.defaultCondition_ = function(e) {
            return fd(e) && gd(e);
          }, this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_, this.duration_ = t.duration !== void 0 ? t.duration : 100, this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128;
        }
        handleEvent(t) {
          let e = !1;
          if (t.type == lt.KEYDOWN) {
            const s = t.originalEvent, i = s.key;
            if (this.condition_(t) && (i == Ds.DOWN || i == Ds.LEFT || i == Ds.RIGHT || i == Ds.UP)) {
              const r = t.map.getView(), o = r.getResolution() * this.pixelDelta_;
              let a = 0, h = 0;
              i == Ds.DOWN ? h = -o : i == Ds.LEFT ? a = -o : i == Ds.RIGHT ? a = o : h = o;
              const l = [a, h];
              rh(l, r.getRotation()), z_(r, l, this.duration_), s.preventDefault(), e = !0;
            }
          }
          return !e;
        }
      }
      class Q_ extends Pr {
        constructor(t) {
          super(), t = t || {}, this.condition_ = t.condition ? t.condition : function(e) {
            return !Y_(e) && gd(e);
          }, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 100;
        }
        handleEvent(t) {
          let e = !1;
          if (t.type == lt.KEYDOWN || t.type == lt.KEYPRESS) {
            const s = t.originalEvent, i = s.key;
            if (this.condition_(t) && (i === "+" || i === "-")) {
              const r = t.map, o = i === "+" ? this.delta_ : -this.delta_, a = r.getView();
              hl(a, o, void 0, this.duration_), s.preventDefault(), e = !0;
            }
          }
          return !e;
        }
      }
      class t0 {
        constructor(t, e, s) {
          this.decay_ = t, this.minVelocity_ = e, this.delay_ = s, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
        }
        begin() {
          this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
        }
        update(t, e) {
          this.points_.push(t, e, Date.now());
        }
        end() {
          if (this.points_.length < 6) return !1;
          const t = Date.now() - this.delay_, e = this.points_.length - 3;
          if (this.points_[e + 2] < t) return !1;
          let s = e - 3;
          for (; s > 0 && this.points_[s + 2] > t; ) s -= 3;
          const i = this.points_[e + 2] - this.points_[s + 2];
          if (i < 1e3 / 60) return !1;
          const r = this.points_[e] - this.points_[s], o = this.points_[e + 1] - this.points_[s + 1];
          return this.angle_ = Math.atan2(o, r), this.initialVelocity_ = Math.sqrt(r * r + o * o) / i, this.initialVelocity_ > this.minVelocity_;
        }
        getDistance() {
          return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
        }
        getAngle() {
          return this.angle_;
        }
      }
      class e0 extends Pr {
        constructor(t) {
          t = t || {}, super(t), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.timeout_ = t.timeout !== void 0 ? t.timeout : 80, this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0, this.constrainResolution_ = t.constrainResolution !== void 0 ? t.constrainResolution : !1;
          const e = t.condition ? t.condition : W_;
          this.condition_ = t.onFocusOnly ? ul(cd, e) : e, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
        }
        endInteraction_() {
          this.trackpadTimeoutId_ = void 0;
          const t = this.getMap();
          t && t.getView().endInteraction(void 0, this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0, this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null);
        }
        handleEvent(t) {
          if (!this.condition_(t) || t.type !== lt.WHEEL) return !0;
          const e = t.map, s = t.originalEvent;
          s.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.pixel);
          let i;
          if (t.type == lt.WHEEL && (i = s.deltaY, Lc && s.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (i /= jo), s.deltaMode === WheelEvent.DOM_DELTA_LINE && (i *= 40)), i === 0) return !1;
          this.lastDelta_ = i;
          const r = Date.now();
          this.startTime_ === void 0 && (this.startTime_ = r), (!this.mode_ || r - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(i) < 4 ? "trackpad" : "wheel");
          const o = e.getView();
          if (this.mode_ === "trackpad" && !(o.getConstrainResolution() || this.constrainResolution_)) return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (o.getAnimating() && o.cancelAnimations(), o.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_), o.adjustZoom(-i / this.deltaPerZoom_, this.lastAnchor_ ? e.getCoordinateFromPixel(this.lastAnchor_) : null), this.startTime_ = r, !1;
          this.totalDelta_ += i;
          const a = Math.max(this.timeout_ - (r - this.startTime_), 0);
          return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, e), a), !1;
        }
        handleWheelZoom_(t) {
          const e = t.getView();
          e.getAnimating() && e.cancelAnimations();
          let s = -kt(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
          (e.getConstrainResolution() || this.constrainResolution_) && (s = s ? s > 0 ? 1 : -1 : 0), hl(e, s, this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
        }
        setMouseAnchor(t) {
          this.useAnchor_ = t, t || (this.lastAnchor_ = null);
        }
      }
      class n0 extends Lr {
        constructor(t) {
          t = t || {};
          const e = t;
          e.stopDown || (e.stopDown = uo), super(e), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3, this.duration_ = t.duration !== void 0 ? t.duration : 250;
        }
        handleDragEvent(t) {
          let e = 0;
          const s = this.targetPointers[0], i = this.targetPointers[1], r = Math.atan2(i.clientY - s.clientY, i.clientX - s.clientX);
          if (this.lastAngle_ !== void 0) {
            const h = r - this.lastAngle_;
            this.rotationDelta_ += h, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = h;
          }
          this.lastAngle_ = r;
          const o = t.map, a = o.getView();
          a.getConstraints().rotation !== xh && (this.anchor_ = o.getCoordinateFromPixelInternal(o.getEventPixel(ll(this.targetPointers))), this.rotating_ && (o.render(), a.adjustRotationInternal(e, this.anchor_)));
        }
        handleUpEvent(t) {
          return this.targetPointers.length < 2 ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
        }
        handleDownEvent(t) {
          if (this.targetPointers.length >= 2) {
            const e = t.map;
            return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
          }
          return !1;
        }
      }
      class s0 extends Lr {
        constructor(t) {
          t = t || {};
          const e = t;
          e.stopDown || (e.stopDown = uo), super(e), this.anchor_ = null, this.duration_ = t.duration !== void 0 ? t.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
        }
        handleDragEvent(t) {
          let e = 1;
          const s = this.targetPointers[0], i = this.targetPointers[1], r = s.clientX - i.clientX, o = s.clientY - i.clientY, a = Math.sqrt(r * r + o * o);
          this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), this.lastDistance_ = a;
          const h = t.map, l = h.getView();
          e != 1 && (this.lastScaleDelta_ = e), this.anchor_ = h.getCoordinateFromPixelInternal(h.getEventPixel(ll(this.targetPointers))), h.render(), l.adjustResolutionInternal(e, this.anchor_);
        }
        handleUpEvent(t) {
          if (this.targetPointers.length < 2) {
            const e = t.map.getView(), s = this.lastScaleDelta_ > 1 ? 1 : -1;
            return e.endInteraction(this.duration_, s), !1;
          }
          return !0;
        }
        handleDownEvent(t) {
          if (this.targetPointers.length >= 2) {
            const e = t.map;
            return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
          }
          return !1;
        }
      }
      function i0(n) {
        n = n || {};
        const t = new on(), e = new t0(-5e-3, 0.05, 100);
        return (n.altShiftDragRotate === void 0 || n.altShiftDragRotate) && t.push(new $_()), (n.doubleClickZoom === void 0 || n.doubleClickZoom) && t.push(new U_({ delta: n.zoomDelta, duration: n.zoomDuration })), (n.dragPan === void 0 || n.dragPan) && t.push(new V_({ onFocusOnly: n.onFocusOnly, kinetic: e })), (n.pinchRotate === void 0 || n.pinchRotate) && t.push(new n0()), (n.pinchZoom === void 0 || n.pinchZoom) && t.push(new s0({ duration: n.zoomDuration })), (n.keyboard === void 0 || n.keyboard) && (t.push(new J_()), t.push(new Q_({ delta: n.zoomDelta, duration: n.zoomDuration }))), (n.mouseWheelZoom === void 0 || n.mouseWheelZoom) && t.push(new e0({ onFocusOnly: n.onFocusOnly, duration: n.zoomDuration })), (n.shiftDragZoom === void 0 || n.shiftDragZoom) && t.push(new H_({ duration: n.zoomDuration })), t;
      }
      function pd(n) {
        if (n instanceof zo) {
          n.setMapInternal(null);
          return;
        }
        n instanceof _i && n.getLayers().forEach(pd);
      }
      function md(n, t) {
        if (n instanceof zo) {
          n.setMapInternal(t);
          return;
        }
        if (n instanceof _i) {
          const e = n.getLayers().getArray();
          for (let s = 0, i = e.length; s < i; ++s) md(e[s], t);
        }
      }
      let r0 = class extends $e {
        constructor(n) {
          super(), n = n || {}, this.on, this.once, this.un;
          const t = o0(n);
          this.renderComplete_ = !1, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = n.maxTilesLoading !== void 0 ? n.maxTilesLoading : 16, this.pixelRatio_ = n.pixelRatio !== void 0 ? n.pixelRatio : jo, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = Ue(), this.pixelToCoordinateTransform_ = Ue(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = n.moveTolerance, this.keyboardEventTarget_ = t.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = t.controls || G_(), this.interactions = t.interactions || i0({ onFocusOnly: !0 }), this.overlays_ = t.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new O_(this.getTilePriority.bind(this), this.handleTileChange_.bind(this)), this.addChangeListener(he.LAYERGROUP, this.handleLayerGroupChanged_), this.addChangeListener(he.VIEW, this.handleViewChanged_), this.addChangeListener(he.SIZE, this.handleSizeChanged_), this.addChangeListener(he.TARGET, this.handleTargetChanged_), this.setProperties(t.values);
          const e = this;
          n.view && !(n.view instanceof ln) && n.view.then(function(s) {
            e.setView(new ln(s));
          }), this.controls.addEventListener(we.ADD, (s) => {
            s.element.setMap(this);
          }), this.controls.addEventListener(we.REMOVE, (s) => {
            s.element.setMap(null);
          }), this.interactions.addEventListener(we.ADD, (s) => {
            s.element.setMap(this);
          }), this.interactions.addEventListener(we.REMOVE, (s) => {
            s.element.setMap(null);
          }), this.overlays_.addEventListener(we.ADD, (s) => {
            this.addOverlayInternal_(s.element);
          }), this.overlays_.addEventListener(we.REMOVE, (s) => {
            const i = s.element.getId();
            i !== void 0 && delete this.overlayIdIndex_[i.toString()], s.element.setMap(null);
          }), this.controls.forEach((s) => {
            s.setMap(this);
          }), this.interactions.forEach((s) => {
            s.setMap(this);
          }), this.overlays_.forEach(this.addOverlayInternal_.bind(this));
        }
        addControl(n) {
          this.getControls().push(n);
        }
        addInteraction(n) {
          this.getInteractions().push(n);
        }
        addLayer(n) {
          this.getLayerGroup().getLayers().push(n);
        }
        handleLayerAdd_(n) {
          md(n.layer, this);
        }
        addOverlay(n) {
          this.getOverlays().push(n);
        }
        addOverlayInternal_(n) {
          const t = n.getId();
          t !== void 0 && (this.overlayIdIndex_[t.toString()] = n), n.setMap(this);
        }
        disposeInternal() {
          this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
        }
        forEachFeatureAtPixel(n, t, e) {
          if (!this.frameState_ || !this.renderer_) return;
          const s = this.getCoordinateFromPixelInternal(n);
          e = e !== void 0 ? e : {};
          const i = e.hitTolerance !== void 0 ? e.hitTolerance : 0, r = e.layerFilter !== void 0 ? e.layerFilter : tr, o = e.checkWrapped !== !1;
          return this.renderer_.forEachFeatureAtCoordinate(s, this.frameState_, i, o, t, null, r, null);
        }
        getFeaturesAtPixel(n, t) {
          const e = [];
          return this.forEachFeatureAtPixel(n, function(s) {
            e.push(s);
          }, t), e;
        }
        getAllLayers() {
          const n = [];
          function t(e) {
            e.forEach(function(s) {
              s instanceof _i ? t(s.getLayers()) : n.push(s);
            });
          }
          return t(this.getLayers()), n;
        }
        hasFeatureAtPixel(n, t) {
          if (!this.frameState_ || !this.renderer_) return !1;
          const e = this.getCoordinateFromPixelInternal(n);
          t = t !== void 0 ? t : {};
          const s = t.layerFilter !== void 0 ? t.layerFilter : tr, i = t.hitTolerance !== void 0 ? t.hitTolerance : 0, r = t.checkWrapped !== !1;
          return this.renderer_.hasFeatureAtCoordinate(e, this.frameState_, i, r, s, null);
        }
        getEventCoordinate(n) {
          return this.getCoordinateFromPixel(this.getEventPixel(n));
        }
        getEventCoordinateInternal(n) {
          return this.getCoordinateFromPixelInternal(this.getEventPixel(n));
        }
        getEventPixel(n) {
          const t = this.viewport_.getBoundingClientRect(), e = this.getSize(), s = t.width / e[0], i = t.height / e[1], r = "changedTouches" in n ? n.changedTouches[0] : n;
          return [(r.clientX - t.left) / s, (r.clientY - t.top) / i];
        }
        getTarget() {
          return this.get(he.TARGET);
        }
        getTargetElement() {
          return this.targetElement_;
        }
        getCoordinateFromPixel(n) {
          return mh(this.getCoordinateFromPixelInternal(n), this.getView().getProjection());
        }
        getCoordinateFromPixelInternal(n) {
          const t = this.frameState_;
          return t ? Vt(t.pixelToCoordinateTransform, n.slice()) : null;
        }
        getControls() {
          return this.controls;
        }
        getOverlays() {
          return this.overlays_;
        }
        getOverlayById(n) {
          const t = this.overlayIdIndex_[n.toString()];
          return t !== void 0 ? t : null;
        }
        getInteractions() {
          return this.interactions;
        }
        getLayerGroup() {
          return this.get(he.LAYERGROUP);
        }
        setLayers(n) {
          const t = this.getLayerGroup();
          if (n instanceof on) {
            t.setLayers(n);
            return;
          }
          const e = t.getLayers();
          e.clear(), e.extend(n);
        }
        getLayers() {
          return this.getLayerGroup().getLayers();
        }
        getLoadingOrNotReady() {
          const n = this.getLayerGroup().getLayerStatesArray();
          for (let t = 0, e = n.length; t < e; ++t) {
            const s = n[t];
            if (!s.visible) continue;
            const i = s.layer.getRenderer();
            if (i && !i.ready) return !0;
            const r = s.layer.getSource();
            if (r && r.loading) return !0;
          }
          return !1;
        }
        getPixelFromCoordinate(n) {
          const t = Sn(n, this.getView().getProjection());
          return this.getPixelFromCoordinateInternal(t);
        }
        getPixelFromCoordinateInternal(n) {
          const t = this.frameState_;
          return t ? Vt(t.coordinateToPixelTransform, n.slice(0, 2)) : null;
        }
        getRenderer() {
          return this.renderer_;
        }
        getSize() {
          return this.get(he.SIZE);
        }
        getView() {
          return this.get(he.VIEW);
        }
        getViewport() {
          return this.viewport_;
        }
        getOverlayContainer() {
          return this.overlayContainer_;
        }
        getOverlayContainerStopEvent() {
          return this.overlayContainerStopEvent_;
        }
        getOwnerDocument() {
          const n = this.getTargetElement();
          return n ? n.ownerDocument : document;
        }
        getTilePriority(n, t, e, s) {
          return N_(this.frameState_, n, t, e, s);
        }
        handleBrowserEvent(n, t) {
          t = t || n.type;
          const e = new Qn(t, this, n);
          this.handleMapBrowserEvent(e);
        }
        handleMapBrowserEvent(n) {
          if (!this.frameState_) return;
          const t = n.originalEvent, e = t.type;
          if (e === rl.POINTERDOWN || e === lt.WHEEL || e === lt.KEYDOWN) {
            const s = this.getOwnerDocument(), i = this.viewport_.getRootNode ? this.viewport_.getRootNode() : s, r = t.target, o = i instanceof ShadowRoot ? i.host === r ? i.host.ownerDocument : i : i === s ? s.documentElement : i;
            if (this.overlayContainerStopEvent_.contains(r) || !o.contains(r)) return;
          }
          if (n.frameState = this.frameState_, this.dispatchEvent(n) !== !1) {
            const s = this.getInteractions().getArray().slice();
            for (let i = s.length - 1; i >= 0; i--) {
              const r = s[i];
              if (!(r.getMap() !== this || !r.getActive() || !this.getTargetElement()) && (!r.handleEvent(n) || n.propagationStopped)) break;
            }
          }
        }
        handlePostRender() {
          const n = this.frameState_, t = this.tileQueue_;
          if (!t.isEmpty()) {
            let s = this.maxTilesLoading_, i = s;
            if (n) {
              const r = n.viewHints;
              if (r[ie.ANIMATING] || r[ie.INTERACTING]) {
                const o = Date.now() - n.time > 8;
                s = o ? 0 : 8, i = o ? 0 : 2;
              }
            }
            t.getTilesLoading() < s && (t.reprioritize(), t.loadMoreTiles(s, i));
          }
          n && this.renderer_ && !n.animate && (this.renderComplete_ ? (this.hasListener(Ge.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(Ge.RENDERCOMPLETE, n), this.loaded_ === !1 && (this.loaded_ = !0, this.dispatchEvent(new yi(Pn.LOADEND, this, n)))) : this.loaded_ === !0 && (this.loaded_ = !1, this.dispatchEvent(new yi(Pn.LOADSTART, this, n))));
          const e = this.postRenderFunctions_;
          if (n) for (let s = 0, i = e.length; s < i; ++s) e[s](this, n);
          e.length = 0;
        }
        handleSizeChanged_() {
          this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
        }
        handleTargetChanged_() {
          if (this.mapBrowserEventHandler_) {
            for (let e = 0, s = this.targetChangeHandlerKeys_.length; e < s; ++e) At(this.targetChangeHandlerKeys_[e]);
            this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(lt.CONTEXTMENU, this.boundHandleBrowserEvent_), this.viewport_.removeEventListener(lt.WHEEL, this.boundHandleBrowserEvent_), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, this.viewport_.remove();
          }
          if (this.targetElement_) {
            this.resizeObserver_.unobserve(this.targetElement_);
            const e = this.targetElement_.getRootNode();
            e instanceof ShadowRoot && this.resizeObserver_.unobserve(e.host), this.setSize(void 0);
          }
          const n = this.getTarget(), t = typeof n == "string" ? document.getElementById(n) : n;
          if (this.targetElement_ = t, !t) this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
          else {
            t.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new A_(this)), this.mapBrowserEventHandler_ = new P_(this, this.moveTolerance_);
            for (const i in zt) this.mapBrowserEventHandler_.addEventListener(zt[i], this.handleMapBrowserEvent.bind(this));
            this.viewport_.addEventListener(lt.CONTEXTMENU, this.boundHandleBrowserEvent_, !1), this.viewport_.addEventListener(lt.WHEEL, this.boundHandleBrowserEvent_, Xh ? { passive: !1 } : !1);
            let e;
            if (this.keyboardEventTarget_) e = this.keyboardEventTarget_;
            else {
              const i = t.getRootNode();
              e = i instanceof ShadowRoot ? i.host : t;
            }
            this.targetChangeHandlerKeys_ = [xt(e, lt.KEYDOWN, this.handleBrowserEvent, this), xt(e, lt.KEYPRESS, this.handleBrowserEvent, this)];
            const s = t.getRootNode();
            s instanceof ShadowRoot && this.resizeObserver_.observe(s.host), this.resizeObserver_.observe(t);
          }
          this.updateSize();
        }
        handleTileChange_() {
          this.render();
        }
        handleViewPropertyChanged_() {
          this.render();
        }
        handleViewChanged_() {
          this.viewPropertyListenerKey_ && (At(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (At(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
          const n = this.getView();
          n && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = xt(n, Hs.PROPERTYCHANGE, this.handleViewPropertyChanged_, this), this.viewChangeListenerKey_ = xt(n, lt.CHANGE, this.handleViewPropertyChanged_, this), n.resolveConstraints(0)), this.render();
        }
        handleLayerGroupChanged_() {
          this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(At), this.layerGroupPropertyListenerKeys_ = null);
          const n = this.getLayerGroup();
          n && (this.handleLayerAdd_(new Jn("addlayer", n)), this.layerGroupPropertyListenerKeys_ = [xt(n, Hs.PROPERTYCHANGE, this.render, this), xt(n, lt.CHANGE, this.render, this), xt(n, "addlayer", this.handleLayerAdd_, this), xt(n, "removelayer", this.handleLayerRemove_, this)]), this.render();
        }
        isRendered() {
          return !!this.frameState_;
        }
        animationDelay_() {
          this.animationDelayKey_ = void 0, this.renderFrame_(Date.now());
        }
        renderSync() {
          this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
        }
        redrawText() {
          const n = this.getLayerGroup().getLayerStatesArray();
          for (let t = 0, e = n.length; t < e; ++t) {
            const s = n[t].layer;
            s.hasRenderer() && s.getRenderer().handleFontsChanged();
          }
        }
        render() {
          this.renderer_ && this.animationDelayKey_ === void 0 && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
        }
        removeControl(n) {
          return this.getControls().remove(n);
        }
        removeInteraction(n) {
          return this.getInteractions().remove(n);
        }
        removeLayer(n) {
          return this.getLayerGroup().getLayers().remove(n);
        }
        handleLayerRemove_(n) {
          pd(n.layer);
        }
        removeOverlay(n) {
          return this.getOverlays().remove(n);
        }
        renderFrame_(n) {
          const t = this.getSize(), e = this.getView(), s = this.frameState_;
          let i = null;
          if (t !== void 0 && Dc(t) && e && e.isDef()) {
            const r = e.getHints(this.frameState_ ? this.frameState_.viewHints : void 0), o = e.getState();
            if (i = { animate: !1, coordinateToPixelTransform: this.coordinateToPixelTransform_, declutter: null, extent: Co(o.center, o.resolution, o.rotation, t), index: this.frameIndex_++, layerIndex: 0, layerStatesArray: this.getLayerGroup().getLayerStatesArray(), pixelRatio: this.pixelRatio_, pixelToCoordinateTransform: this.pixelToCoordinateTransform_, postRenderFunctions: [], size: t, tileQueue: this.tileQueue_, time: n, usedTiles: {}, viewState: o, viewHints: r, wantedTiles: {}, mapId: vt(this), renderTargets: {} }, o.nextCenter && o.nextResolution) {
              const a = isNaN(o.nextRotation) ? o.rotation : o.nextRotation;
              i.nextExtent = Co(o.nextCenter, o.nextResolution, a, t);
            }
          }
          this.frameState_ = i, this.renderer_.renderFrame(i), i && (i.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, i.postRenderFunctions), s && (!this.previousExtent_ || !ri(this.previousExtent_) && !ii(i.extent, this.previousExtent_)) && (this.dispatchEvent(new yi(Pn.MOVESTART, this, s)), this.previousExtent_ = Mn(this.previousExtent_)), this.previousExtent_ && !i.viewHints[ie.ANIMATING] && !i.viewHints[ie.INTERACTING] && !ii(i.extent, this.previousExtent_) && (this.dispatchEvent(new yi(Pn.MOVEEND, this, i)), th(i.extent, this.previousExtent_))), this.dispatchEvent(new yi(Pn.POSTRENDER, this, i)), this.renderComplete_ = (this.hasListener(Pn.LOADSTART) || this.hasListener(Pn.LOADEND) || this.hasListener(Ge.RENDERCOMPLETE)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady(), this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
            this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
          }, 0));
        }
        setLayerGroup(n) {
          const t = this.getLayerGroup();
          t && this.handleLayerRemove_(new Jn("removelayer", t)), this.set(he.LAYERGROUP, n);
        }
        setSize(n) {
          this.set(he.SIZE, n);
        }
        setTarget(n) {
          this.set(he.TARGET, n);
        }
        setView(n) {
          if (!n || n instanceof ln) {
            this.set(he.VIEW, n);
            return;
          }
          this.set(he.VIEW, new ln());
          const t = this;
          n.then(function(e) {
            t.setView(new ln(e));
          });
        }
        updateSize() {
          const n = this.getTargetElement();
          let t;
          if (n) {
            const s = getComputedStyle(n), i = n.offsetWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - parseFloat(s.borderRightWidth), r = n.offsetHeight - parseFloat(s.borderTopWidth) - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom) - parseFloat(s.borderBottomWidth);
            !isNaN(i) && !isNaN(r) && (t = [Math.max(0, i), Math.max(0, r)], !Dc(t) && (n.offsetWidth || n.offsetHeight || n.getClientRects().length) && Qu("No map visible because the map container's width or height are 0."));
          }
          const e = this.getSize();
          t && (!e || !Wn(t, e)) && (this.setSize(t), this.updateViewportSize_(t));
        }
        updateViewportSize_(n) {
          const t = this.getView();
          t && t.setViewportSize(n);
        }
      };
      function o0(n) {
        let t = null;
        n.keyboardEventTarget !== void 0 && (t = typeof n.keyboardEventTarget == "string" ? document.getElementById(n.keyboardEventTarget) : n.keyboardEventTarget);
        const e = {}, s = n.layers && typeof n.layers.getLayers == "function" ? n.layers : new _i({ layers: n.layers });
        e[he.LAYERGROUP] = s, e[he.TARGET] = n.target, e[he.VIEW] = n.view instanceof ln ? n.view : new ln();
        let i;
        n.controls !== void 0 && (Array.isArray(n.controls) ? i = new on(n.controls.slice()) : (wt(typeof n.controls.getArray == "function", "Expected `controls` to be an array or an `ol/Collection.js`"), i = n.controls));
        let r;
        n.interactions !== void 0 && (Array.isArray(n.interactions) ? r = new on(n.interactions.slice()) : (wt(typeof n.interactions.getArray == "function", "Expected `interactions` to be an array or an `ol/Collection.js`"), r = n.interactions));
        let o;
        return n.overlays !== void 0 ? Array.isArray(n.overlays) ? o = new on(n.overlays.slice()) : (wt(typeof n.overlays.getArray == "function", "Expected `overlays` to be an array or an `ol/Collection.js`"), o = n.overlays) : o = new on(), { controls: i, interactions: r, keyboardEventTarget: t, overlays: o, values: e };
      }
      class na extends $e {
        constructor(t) {
          if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t) if (typeof t.getSimplifiedGeometry == "function") {
            const e = t;
            this.setGeometry(e);
          } else {
            const e = t;
            this.setProperties(e);
          }
        }
        clone() {
          const t = new na(this.hasProperties() ? this.getProperties() : null);
          t.setGeometryName(this.getGeometryName());
          const e = this.getGeometry();
          e && t.setGeometry(e.clone());
          const s = this.getStyle();
          return s && t.setStyle(s), t;
        }
        getGeometry() {
          return this.get(this.geometryName_);
        }
        getId() {
          return this.id_;
        }
        getGeometryName() {
          return this.geometryName_;
        }
        getStyle() {
          return this.style_;
        }
        getStyleFunction() {
          return this.styleFunction_;
        }
        handleGeometryChange_() {
          this.changed();
        }
        handleGeometryChanged_() {
          this.geometryChangeKey_ && (At(this.geometryChangeKey_), this.geometryChangeKey_ = null);
          const t = this.getGeometry();
          t && (this.geometryChangeKey_ = xt(t, lt.CHANGE, this.handleGeometryChange_, this)), this.changed();
        }
        setGeometry(t) {
          this.set(this.geometryName_, t);
        }
        setStyle(t) {
          this.style_ = t, this.styleFunction_ = t ? a0(t) : void 0, this.changed();
        }
        setId(t) {
          this.id_ = t, this.changed();
        }
        setGeometryName(t) {
          this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = t, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
        }
      }
      function a0(n) {
        if (typeof n == "function") return n;
        let t;
        return Array.isArray(n) ? t = n : (wt(typeof n.getZIndex == "function", "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"), t = [n]), function() {
          return t;
        };
      }
      function sa(n, t, e, s, i, r, o) {
        let a, h;
        const l = (e - t) / s;
        if (l === 1) a = t;
        else if (l === 2) a = t, h = i;
        else if (l !== 0) {
          let u = n[t], c = n[t + 1], d = 0;
          const p = [0];
          for (let E = t + s; E < e; E += s) {
            const M = n[E], w = n[E + 1];
            d += Math.sqrt((M - u) * (M - u) + (w - c) * (w - c)), p.push(d), u = M, c = w;
          }
          const f = i * d, y = Lg(p, f);
          y < 0 ? (h = (f - p[-y - 2]) / (p[-y - 1] - p[-y - 2]), a = t + (-y - 2) * s) : a = t + y * s;
        }
        o = o > 1 ? o : 2, r = r || new Array(o);
        for (let u = 0; u < o; ++u) r[u] = a === void 0 ? NaN : h === void 0 ? n[a + u] : Oe(n[a + u], n[a + s + u], h);
        return r;
      }
      function dl(n, t, e, s, i, r) {
        if (e == t) return null;
        let o;
        if (i < n[t + s - 1]) return r ? (o = n.slice(t, t + s), o[s - 1] = i, o) : null;
        if (n[e - 1] < i) return r ? (o = n.slice(e - s, e), o[s - 1] = i, o) : null;
        if (i == n[t + s - 1]) return n.slice(t, t + s);
        let a = t / s, h = e / s;
        for (; a < h; ) {
          const d = a + h >> 1;
          i < n[(d + 1) * s - 1] ? h = d : a = d + 1;
        }
        const l = n[a * s - 1];
        if (i == l) return n.slice((a - 1) * s, (a - 1) * s + s);
        const u = n[(a + 1) * s - 1], c = (i - l) / (u - l);
        o = [];
        for (let d = 0; d < s - 1; ++d) o.push(Oe(n[(a - 1) * s + d], n[a * s + d], c));
        return o.push(i), o;
      }
      function h0(n, t, e, s, i, r, o) {
        if (o) return dl(n, t, e[e.length - 1], s, i, r);
        let a;
        if (i < n[s - 1]) return r ? (a = n.slice(0, s), a[s - 1] = i, a) : null;
        if (n[n.length - 1] < i) return r ? (a = n.slice(n.length - s), a[s - 1] = i, a) : null;
        for (let h = 0, l = e.length; h < l; ++h) {
          const u = e[h];
          if (t != u) {
            if (i < n[t + s - 1]) return null;
            if (i <= n[u - 1]) return dl(n, t, u, s, i, !1);
            t = u;
          }
        }
        return null;
      }
      function _d(n, t, e, s) {
        let i = n[t], r = n[t + 1], o = 0;
        for (let a = t + s; a < e; a += s) {
          const h = n[a], l = n[a + 1];
          o += Math.sqrt((h - i) * (h - i) + (l - r) * (l - r)), i = h, r = l;
        }
        return o;
      }
      class ts extends Rn {
        constructor(t, e) {
          super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e);
        }
        appendCoordinate(t) {
          pe(this.flatCoordinates, t), this.changed();
        }
        clone() {
          const t = new ts(this.flatCoordinates.slice(), this.layout);
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          return i < Xn(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(Mh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), Sh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, s, i));
        }
        forEachSegment(t) {
          return yc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
        }
        getCoordinateAtM(t, e) {
          return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, dl(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e));
        }
        getCoordinates() {
          return Zn(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
        }
        getCoordinateAt(t, e) {
          return sa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride);
        }
        getLength() {
          return _d(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
        }
        getFlatMidpoint() {
          return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_ ?? void 0), this.flatMidpointRevision_ = this.getRevision()), this.flatMidpoint_;
        }
        getSimplifiedGeometryInternal(t) {
          const e = [];
          return e.length = ko(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0), new ts(e, "XY");
        }
        getType() {
          return "LineString";
        }
        intersectsExtent(t) {
          return Do(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Fo(this.flatCoordinates, 0, t, this.stride), this.changed();
        }
      }
      const nt = { BEGIN_GEOMETRY: 0, BEGIN_PATH: 1, CIRCLE: 2, CLOSE_PATH: 3, CUSTOM: 4, DRAW_CHARS: 5, DRAW_IMAGE: 6, END_GEOMETRY: 7, FILL: 8, MOVE_TO_LINE_TO: 9, SET_FILL_STYLE: 10, SET_STROKE_STYLE: 11, STROKE: 12 }, ia = [nt.FILL], es = [nt.STROKE], Gs = [nt.BEGIN_PATH], yd = [nt.CLOSE_PATH];
      class xd {
        drawCustom(t, e, s, i, r) {
        }
        drawGeometry(t) {
        }
        setStyle(t) {
        }
        drawCircle(t, e, s) {
        }
        drawFeature(t, e, s) {
        }
        drawGeometryCollection(t, e, s) {
        }
        drawLineString(t, e, s) {
        }
        drawMultiLineString(t, e, s) {
        }
        drawMultiPoint(t, e, s) {
        }
        drawMultiPolygon(t, e, s) {
        }
        drawPoint(t, e, s) {
        }
        drawPolygon(t, e, s) {
        }
        drawText(t, e, s) {
        }
        setFillStrokeStyle(t, e) {
        }
        setImageStyle(t, e) {
        }
        setTextStyle(t, e) {
        }
      }
      class Nr extends xd {
        constructor(t, e, s, i) {
          super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = i, this.maxLineWidth = 0, this.resolution = s, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = {};
        }
        applyPixelRatio(t) {
          const e = this.pixelRatio;
          return e == 1 ? t : t.map(function(s) {
            return s * e;
          });
        }
        appendFlatPointCoordinates(t, e) {
          const s = this.getBufferedMaxExtent(), i = this.tmpCoordinate_, r = this.coordinates;
          let o = r.length;
          for (let a = 0, h = t.length; a < h; a += e) i[0] = t[a], i[1] = t[a + 1], Cs(s, i) && (r[o++] = i[0], r[o++] = i[1]);
          return o;
        }
        appendFlatLineCoordinates(t, e, s, i, r, o) {
          const a = this.coordinates;
          let h = a.length;
          const l = this.getBufferedMaxExtent();
          o && (e += i);
          let u = t[e], c = t[e + 1];
          const d = this.tmpCoordinate_;
          let p = !0, f, y, E;
          for (f = e + i; f < s; f += i) d[0] = t[f], d[1] = t[f + 1], E = So(l, d), E !== y ? (p && (a[h++] = u, a[h++] = c, p = !1), a[h++] = d[0], a[h++] = d[1]) : E === Kt.INTERSECTING ? (a[h++] = d[0], a[h++] = d[1], p = !1) : p = !0, u = d[0], c = d[1], y = E;
          return (r && p || f === e + i) && (a[h++] = u, a[h++] = c), h;
        }
        drawCustomCoordinates_(t, e, s, i, r) {
          for (let o = 0, a = s.length; o < a; ++o) {
            const h = s[o], l = this.appendFlatLineCoordinates(t, e, h, i, !1, !1);
            r.push(l), e = h;
          }
          return e;
        }
        drawCustom(t, e, s, i, r) {
          this.beginGeometry(t, e, r);
          const o = t.getType(), a = t.getStride(), h = this.coordinates.length;
          let l, u, c, d, p;
          switch (o) {
            case "MultiPolygon":
              l = t.getOrientedFlatCoordinates(), d = [];
              const f = t.getEndss();
              p = 0;
              for (let y = 0, E = f.length; y < E; ++y) {
                const M = [];
                p = this.drawCustomCoordinates_(l, p, f[y], a, M), d.push(M);
              }
              this.instructions.push([nt.CUSTOM, h, d, t, s, bh, r]), this.hitDetectionInstructions.push([nt.CUSTOM, h, d, t, i || s, bh, r]);
              break;
            case "Polygon":
            case "MultiLineString":
              c = [], l = o == "Polygon" ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates(), p = this.drawCustomCoordinates_(l, 0, t.getEnds(), a, c), this.instructions.push([nt.CUSTOM, h, c, t, s, lr, r]), this.hitDetectionInstructions.push([nt.CUSTOM, h, c, t, i || s, lr, r]);
              break;
            case "LineString":
            case "Circle":
              l = t.getFlatCoordinates(), u = this.appendFlatLineCoordinates(l, 0, l.length, a, !1, !1), this.instructions.push([nt.CUSTOM, h, u, t, s, Zn, r]), this.hitDetectionInstructions.push([nt.CUSTOM, h, u, t, i || s, Zn, r]);
              break;
            case "MultiPoint":
              l = t.getFlatCoordinates(), u = this.appendFlatPointCoordinates(l, a), u > h && (this.instructions.push([nt.CUSTOM, h, u, t, s, Zn, r]), this.hitDetectionInstructions.push([nt.CUSTOM, h, u, t, i || s, Zn, r]));
              break;
            case "Point":
              l = t.getFlatCoordinates(), this.coordinates.push(l[0], l[1]), u = this.coordinates.length, this.instructions.push([nt.CUSTOM, h, u, t, s, void 0, r]), this.hitDetectionInstructions.push([nt.CUSTOM, h, u, t, i || s, void 0, r]);
              break;
          }
          this.endGeometry(e);
        }
        beginGeometry(t, e, s) {
          this.beginGeometryInstruction1_ = [nt.BEGIN_GEOMETRY, e, 0, t, s], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [nt.BEGIN_GEOMETRY, e, 0, t, s], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
        }
        finish() {
          return { instructions: this.instructions, hitDetectionInstructions: this.hitDetectionInstructions, coordinates: this.coordinates };
        }
        reverseHitDetectionInstructions() {
          const t = this.hitDetectionInstructions;
          t.reverse();
          let e;
          const s = t.length;
          let i, r, o = -1;
          for (e = 0; e < s; ++e) i = t[e], r = i[0], r == nt.END_GEOMETRY ? o = e : r == nt.BEGIN_GEOMETRY && (i[2] = e, Ng(this.hitDetectionInstructions, o, e), o = -1);
        }
        setFillStrokeStyle(t, e) {
          const s = this.state;
          if (t) {
            const i = t.getColor();
            s.fillPatternScale = i && typeof i == "object" && "src" in i ? this.pixelRatio : 1, s.fillStyle = un(i || Re);
          } else s.fillStyle = void 0;
          if (e) {
            const i = e.getColor();
            s.strokeStyle = un(i || xr);
            const r = e.getLineCap();
            s.lineCap = r !== void 0 ? r : di;
            const o = e.getLineDash();
            s.lineDash = o ? o.slice() : Cn;
            const a = e.getLineDashOffset();
            s.lineDashOffset = a || bn;
            const h = e.getLineJoin();
            s.lineJoin = h !== void 0 ? h : fi;
            const l = e.getWidth();
            s.lineWidth = l !== void 0 ? l : Mr;
            const u = e.getMiterLimit();
            s.miterLimit = u !== void 0 ? u : yr, s.lineWidth > this.maxLineWidth && (this.maxLineWidth = s.lineWidth, this.bufferedMaxExtent_ = null);
          } else s.strokeStyle = void 0, s.lineCap = void 0, s.lineDash = null, s.lineDashOffset = void 0, s.lineJoin = void 0, s.lineWidth = void 0, s.miterLimit = void 0;
        }
        createFill(t) {
          const e = t.fillStyle, s = [nt.SET_FILL_STYLE, e];
          return typeof e != "string" && s.push(t.fillPatternScale), s;
        }
        applyStroke(t) {
          this.instructions.push(this.createStroke(t));
        }
        createStroke(t) {
          return [nt.SET_STROKE_STYLE, t.strokeStyle, t.lineWidth * this.pixelRatio, t.lineCap, t.lineJoin, t.miterLimit, this.applyPixelRatio(t.lineDash), t.lineDashOffset * this.pixelRatio];
        }
        updateFillStyle(t, e) {
          const s = t.fillStyle;
          (typeof s != "string" || t.currentFillStyle != s) && (s !== void 0 && this.instructions.push(e.call(this, t)), t.currentFillStyle = s);
        }
        updateStrokeStyle(t, e) {
          const s = t.strokeStyle, i = t.lineCap, r = t.lineDash, o = t.lineDashOffset, a = t.lineJoin, h = t.lineWidth, l = t.miterLimit;
          (t.currentStrokeStyle != s || t.currentLineCap != i || r != t.currentLineDash && !Wn(t.currentLineDash, r) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != h || t.currentMiterLimit != l) && (s !== void 0 && e.call(this, t), t.currentStrokeStyle = s, t.currentLineCap = i, t.currentLineDash = r, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = h, t.currentMiterLimit = l);
        }
        endGeometry(t) {
          this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
          const e = [nt.END_GEOMETRY, t];
          this.instructions.push(e), this.hitDetectionInstructions.push(e);
        }
        getBufferedMaxExtent() {
          if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = th(this.maxExtent), this.maxLineWidth > 0)) {
            const t = this.resolution * (this.maxLineWidth + 1) / 2;
            Mo(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
          }
          return this.bufferedMaxExtent_;
        }
      }
      class l0 extends Nr {
        constructor(t, e, s, i) {
          super(t, e, s, i), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
        }
        drawPoint(t, e, s) {
          if (!this.image_ || this.maxExtent && !Cs(this.maxExtent, t.getFlatCoordinates())) return;
          this.beginGeometry(t, e, s);
          const i = t.getFlatCoordinates(), r = t.getStride(), o = this.coordinates.length, a = this.appendFlatPointCoordinates(i, r);
          this.instructions.push([nt.DRAW_IMAGE, o, a, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([nt.DRAW_IMAGE, o, a, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(e);
        }
        drawMultiPoint(t, e, s) {
          if (!this.image_) return;
          this.beginGeometry(t, e, s);
          const i = t.getFlatCoordinates(), r = [];
          for (let h = 0, l = i.length; h < l; h += t.getStride()) (!this.maxExtent || Cs(this.maxExtent, i.slice(h, h + 2))) && r.push(i[h], i[h + 1]);
          const o = this.coordinates.length, a = this.appendFlatPointCoordinates(r, 2);
          this.instructions.push([nt.DRAW_IMAGE, o, a, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([nt.DRAW_IMAGE, o, a, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(e);
        }
        finish() {
          return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
        }
        setImageStyle(t, e) {
          const s = t.getAnchor(), i = t.getSize(), r = t.getOrigin();
          this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = s[0], this.anchorY_ = s[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = i[1], this.opacity_ = t.getOpacity(), this.originX_ = r[0], this.originY_ = r[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = i[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
        }
      }
      class u0 extends Nr {
        constructor(t, e, s, i) {
          super(t, e, s, i);
        }
        drawFlatCoordinates_(t, e, s, i) {
          const r = this.coordinates.length, o = this.appendFlatLineCoordinates(t, e, s, i, !1, !1), a = [nt.MOVE_TO_LINE_TO, r, o];
          return this.instructions.push(a), this.hitDetectionInstructions.push(a), s;
        }
        drawLineString(t, e, s) {
          const i = this.state, r = i.strokeStyle, o = i.lineWidth;
          if (r === void 0 || o === void 0) return;
          this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e, s), this.hitDetectionInstructions.push([nt.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Cn, bn], Gs);
          const a = t.getFlatCoordinates(), h = t.getStride();
          this.drawFlatCoordinates_(a, 0, a.length, h), this.hitDetectionInstructions.push(es), this.endGeometry(e);
        }
        drawMultiLineString(t, e, s) {
          const i = this.state, r = i.strokeStyle, o = i.lineWidth;
          if (r === void 0 || o === void 0) return;
          this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e, s), this.hitDetectionInstructions.push([nt.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Cn, bn], Gs);
          const a = t.getEnds(), h = t.getFlatCoordinates(), l = t.getStride();
          let u = 0;
          for (let c = 0, d = a.length; c < d; ++c) u = this.drawFlatCoordinates_(h, u, a[c], l);
          this.hitDetectionInstructions.push(es), this.endGeometry(e);
        }
        finish() {
          const t = this.state;
          return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(es), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
        }
        applyStroke(t) {
          t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(es), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(Gs);
        }
      }
      class Ed extends Nr {
        constructor(t, e, s, i) {
          super(t, e, s, i);
        }
        drawFlatCoordinatess_(t, e, s, i) {
          const r = this.state, o = r.fillStyle !== void 0, a = r.strokeStyle !== void 0, h = s.length;
          this.instructions.push(Gs), this.hitDetectionInstructions.push(Gs);
          for (let l = 0; l < h; ++l) {
            const u = s[l], c = this.coordinates.length, d = this.appendFlatLineCoordinates(t, e, u, i, !0, !a), p = [nt.MOVE_TO_LINE_TO, c, d];
            this.instructions.push(p), this.hitDetectionInstructions.push(p), a && (this.instructions.push(yd), this.hitDetectionInstructions.push(yd)), e = u;
          }
          return o && (this.instructions.push(ia), this.hitDetectionInstructions.push(ia)), a && (this.instructions.push(es), this.hitDetectionInstructions.push(es)), e;
        }
        drawCircle(t, e, s) {
          const i = this.state, r = i.fillStyle, o = i.strokeStyle;
          if (r === void 0 && o === void 0) return;
          this.setFillStrokeStyles_(), this.beginGeometry(t, e, s), i.fillStyle !== void 0 && this.hitDetectionInstructions.push([nt.SET_FILL_STYLE, Re]), i.strokeStyle !== void 0 && this.hitDetectionInstructions.push([nt.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Cn, bn]);
          const a = t.getFlatCoordinates(), h = t.getStride(), l = this.coordinates.length;
          this.appendFlatLineCoordinates(a, 0, a.length, h, !1, !1);
          const u = [nt.CIRCLE, l];
          this.instructions.push(Gs, u), this.hitDetectionInstructions.push(Gs, u), i.fillStyle !== void 0 && (this.instructions.push(ia), this.hitDetectionInstructions.push(ia)), i.strokeStyle !== void 0 && (this.instructions.push(es), this.hitDetectionInstructions.push(es)), this.endGeometry(e);
        }
        drawPolygon(t, e, s) {
          const i = this.state, r = i.fillStyle, o = i.strokeStyle;
          if (r === void 0 && o === void 0) return;
          this.setFillStrokeStyles_(), this.beginGeometry(t, e, s), i.fillStyle !== void 0 && this.hitDetectionInstructions.push([nt.SET_FILL_STYLE, Re]), i.strokeStyle !== void 0 && this.hitDetectionInstructions.push([nt.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Cn, bn]);
          const a = t.getEnds(), h = t.getOrientedFlatCoordinates(), l = t.getStride();
          this.drawFlatCoordinatess_(h, 0, a, l), this.endGeometry(e);
        }
        drawMultiPolygon(t, e, s) {
          const i = this.state, r = i.fillStyle, o = i.strokeStyle;
          if (r === void 0 && o === void 0) return;
          this.setFillStrokeStyles_(), this.beginGeometry(t, e, s), i.fillStyle !== void 0 && this.hitDetectionInstructions.push([nt.SET_FILL_STYLE, Re]), i.strokeStyle !== void 0 && this.hitDetectionInstructions.push([nt.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Cn, bn]);
          const a = t.getEndss(), h = t.getOrientedFlatCoordinates(), l = t.getStride();
          let u = 0;
          for (let c = 0, d = a.length; c < d; ++c) u = this.drawFlatCoordinatess_(h, u, a[c], l);
          this.endGeometry(e);
        }
        finish() {
          this.reverseHitDetectionInstructions(), this.state = null;
          const t = this.tolerance;
          if (t !== 0) {
            const e = this.coordinates;
            for (let s = 0, i = e.length; s < i; ++s) e[s] = As(e[s], t);
          }
          return super.finish();
        }
        setFillStrokeStyles_() {
          const t = this.state;
          t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill), t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
        }
      }
      function c0(n, t, e, s, i) {
        const r = [];
        let o = e, a = 0, h = t.slice(e, 2);
        for (; a < n && o + i < s; ) {
          const [l, u] = h.slice(-2), c = t[o + i], d = t[o + i + 1], p = Math.sqrt((c - l) * (c - l) + (d - u) * (d - u));
          if (a += p, a >= n) {
            const f = (n - a + p) / p, y = Oe(l, c, f), E = Oe(u, d, f);
            h.push(y, E), r.push(h), h = [y, E], a == n && (o += i), a = 0;
          } else if (a < n) h.push(t[o + i], t[o + i + 1]), o += i;
          else {
            const f = p - a, y = Oe(l, c, f / p), E = Oe(u, d, f / p);
            h.push(y, E), r.push(h), h = [y, E], a = 0, o += i;
          }
        }
        return a > 0 && r.push(h), r;
      }
      function d0(n, t, e, s, i) {
        let r = e, o = e, a = 0, h = 0, l = e, u, c, d, p, f, y, E, M, w, C;
        for (c = e; c < s; c += i) {
          const v = t[c], R = t[c + 1];
          f !== void 0 && (w = v - f, C = R - y, p = Math.sqrt(w * w + C * C), E !== void 0 && (h += d, u = Math.acos((E * w + M * C) / (d * p)), u > n && (h > a && (a = h, r = l, o = c), h = 0, l = c - i)), d = p, E = w, M = C), f = v, y = R;
        }
        return h += p, h > a ? [l, c] : [r, o];
      }
      const ra = { left: 0, center: 0.5, right: 1, top: 0, middle: 0.5, hanging: 0.2, alphabetic: 0.8, ideographic: 0.8, bottom: 1 };
      class f0 extends Nr {
        constructor(t, e, s, i) {
          super(t, e, s, i), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textKeepUpright_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[Re] = { fillStyle: Re }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
        }
        finish() {
          const t = super.finish();
          return t.textStates = this.textStates, t.fillStates = this.fillStates, t.strokeStates = this.strokeStates, t;
        }
        drawText(t, e, s) {
          const i = this.textFillState_, r = this.textStrokeState_, o = this.textState_;
          if (this.text_ === "" || !o || !i && !r) return;
          const a = this.coordinates;
          let h = a.length;
          const l = t.getType();
          let u = null, c = t.getStride();
          if (o.placement === "line" && (l == "LineString" || l == "MultiLineString" || l == "Polygon" || l == "MultiPolygon")) {
            if (!re(this.maxExtent, t.getExtent())) return;
            let d;
            if (u = t.getFlatCoordinates(), l == "LineString") d = [u.length];
            else if (l == "MultiLineString") d = t.getEnds();
            else if (l == "Polygon") d = t.getEnds().slice(0, 1);
            else if (l == "MultiPolygon") {
              const E = t.getEndss();
              d = [];
              for (let M = 0, w = E.length; M < w; ++M) d.push(E[M][0]);
            }
            this.beginGeometry(t, e, s);
            const p = o.repeat, f = p ? void 0 : o.textAlign;
            let y = 0;
            for (let E = 0, M = d.length; E < M; ++E) {
              let w;
              p ? w = c0(p * this.resolution, u, y, d[E], c) : w = [u.slice(y, d[E])];
              for (let C = 0, v = w.length; C < v; ++C) {
                const R = w[C];
                let I = 0, O = R.length;
                if (f == null) {
                  const P = d0(o.maxAngle, R, 0, R.length, 2);
                  I = P[0], O = P[1];
                }
                for (let P = I; P < O; P += c) a.push(R[P], R[P + 1]);
                const A = a.length;
                y = d[E], this.drawChars_(h, A), h = A;
              }
            }
            this.endGeometry(e);
          } else {
            let d = o.overflow ? null : [];
            switch (l) {
              case "Point":
              case "MultiPoint":
                u = t.getFlatCoordinates();
                break;
              case "LineString":
                u = t.getFlatMidpoint();
                break;
              case "Circle":
                u = t.getCenter();
                break;
              case "MultiLineString":
                u = t.getFlatMidpoints(), c = 2;
                break;
              case "Polygon":
                u = t.getFlatInteriorPoint(), o.overflow || d.push(u[2] / this.resolution), c = 3;
                break;
              case "MultiPolygon":
                const w = t.getFlatInteriorPoints();
                u = [];
                for (let C = 0, v = w.length; C < v; C += 3) o.overflow || d.push(w[C + 2] / this.resolution), u.push(w[C], w[C + 1]);
                if (u.length === 0) return;
                c = 2;
                break;
            }
            const p = this.appendFlatPointCoordinates(u, c);
            if (p === h) return;
            if (d && (p - h) / 2 !== u.length / c) {
              let w = h / 2;
              d = d.filter((C, v) => {
                const R = a[(w + v) * 2] === u[v * c] && a[(w + v) * 2 + 1] === u[v * c + 1];
                return R || --w, R;
              });
            }
            this.saveTextStates_(), (o.backgroundFill || o.backgroundStroke) && (this.setFillStrokeStyle(o.backgroundFill, o.backgroundStroke), o.backgroundFill && this.updateFillStyle(this.state, this.createFill), o.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e, s);
            let f = o.padding;
            if (f != Os && (o.scale[0] < 0 || o.scale[1] < 0)) {
              let w = o.padding[0], C = o.padding[1], v = o.padding[2], R = o.padding[3];
              o.scale[0] < 0 && (C = -C, R = -R), o.scale[1] < 0 && (w = -w, v = -v), f = [w, C, v, R];
            }
            const y = this.pixelRatio;
            this.instructions.push([nt.DRAW_IMAGE, h, p, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, this.declutterMode_, this.declutterImageWithText_, f == Os ? Os : f.map(function(w) {
              return w * y;
            }), !!o.backgroundFill, !!o.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, d]);
            const E = 1 / y, M = this.state.fillStyle;
            o.backgroundFill && (this.state.fillStyle = Re, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([nt.DRAW_IMAGE, h, p, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [E, E], NaN, this.declutterMode_, this.declutterImageWithText_, f, !!o.backgroundFill, !!o.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? Re : this.fillKey_, this.textOffsetX_, this.textOffsetY_, d]), o.backgroundFill && (this.state.fillStyle = M, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(e);
          }
        }
        saveTextStates_() {
          const t = this.textStrokeState_, e = this.textState_, s = this.textFillState_, i = this.strokeKey_;
          t && (i in this.strokeStates || (this.strokeStates[i] = { strokeStyle: t.strokeStyle, lineCap: t.lineCap, lineDashOffset: t.lineDashOffset, lineWidth: t.lineWidth, lineJoin: t.lineJoin, miterLimit: t.miterLimit, lineDash: t.lineDash }));
          const r = this.textKey_;
          r in this.textStates || (this.textStates[r] = { font: e.font, textAlign: e.textAlign || Er, justify: e.justify, textBaseline: e.textBaseline || $o, scale: e.scale });
          const o = this.fillKey_;
          s && (o in this.fillStates || (this.fillStates[o] = { fillStyle: s.fillStyle }));
        }
        drawChars_(t, e) {
          const s = this.textStrokeState_, i = this.textState_, r = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
          this.saveTextStates_();
          const h = this.pixelRatio, l = ra[i.textBaseline], u = this.textOffsetY_ * h, c = this.text_, d = s ? s.lineWidth * Math.abs(i.scale[0]) / 2 : 0;
          this.instructions.push([nt.DRAW_CHARS, t, e, l, i.overflow, a, i.maxAngle, h, u, r, d * h, c, o, 1, this.declutterMode_, this.textKeepUpright_]), this.hitDetectionInstructions.push([nt.DRAW_CHARS, t, e, l, i.overflow, a && Re, i.maxAngle, h, u, r, d * h, c, o, 1 / h, this.declutterMode_, this.textKeepUpright_]);
        }
        setTextStyle(t, e) {
          let s, i, r;
          if (!t) this.text_ = "";
          else {
            const o = t.getFill();
            o ? (i = this.textFillState_, i || (i = {}, this.textFillState_ = i), i.fillStyle = un(o.getColor() || Re)) : (i = null, this.textFillState_ = i);
            const a = t.getStroke();
            if (!a) r = null, this.textStrokeState_ = r;
            else {
              r = this.textStrokeState_, r || (r = {}, this.textStrokeState_ = r);
              const y = a.getLineDash(), E = a.getLineDashOffset(), M = a.getWidth(), w = a.getMiterLimit();
              r.lineCap = a.getLineCap() || di, r.lineDash = y ? y.slice() : Cn, r.lineDashOffset = E === void 0 ? bn : E, r.lineJoin = a.getLineJoin() || fi, r.lineWidth = M === void 0 ? Mr : M, r.miterLimit = w === void 0 ? yr : w, r.strokeStyle = un(a.getColor() || xr);
            }
            s = this.textState_;
            const h = t.getFont() || Bc;
            km(h);
            const l = t.getScaleArray();
            s.overflow = t.getOverflow(), s.font = h, s.maxAngle = t.getMaxAngle(), s.placement = t.getPlacement(), s.textAlign = t.getTextAlign(), s.repeat = t.getRepeat(), s.justify = t.getJustify(), s.textBaseline = t.getTextBaseline() || $o, s.backgroundFill = t.getBackgroundFill(), s.backgroundStroke = t.getBackgroundStroke(), s.padding = t.getPadding() || Os, s.scale = l === void 0 ? [1, 1] : l;
            const u = t.getOffsetX(), c = t.getOffsetY(), d = t.getRotateWithView(), p = t.getKeepUpright(), f = t.getRotation();
            this.text_ = t.getText() || "", this.textOffsetX_ = u === void 0 ? 0 : u, this.textOffsetY_ = c === void 0 ? 0 : c, this.textRotateWithView_ = d === void 0 ? !1 : d, this.textKeepUpright_ = p === void 0 ? !0 : p, this.textRotation_ = f === void 0 ? 0 : f, this.strokeKey_ = r ? (typeof r.strokeStyle == "string" ? r.strokeStyle : vt(r.strokeStyle)) + r.lineCap + r.lineDashOffset + "|" + r.lineWidth + r.lineJoin + r.miterLimit + "[" + r.lineDash.join() + "]" : "", this.textKey_ = s.font + s.scale + (s.textAlign || "?") + (s.repeat || "?") + (s.justify || "?") + (s.textBaseline || "?"), this.fillKey_ = i && i.fillStyle ? typeof i.fillStyle == "string" ? i.fillStyle : "|" + vt(i.fillStyle) : "";
          }
          this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
        }
      }
      const g0 = { Circle: Ed, Default: Nr, Image: l0, LineString: u0, Polygon: Ed, Text: f0 };
      class p0 {
        constructor(t, e, s, i) {
          this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = i, this.resolution_ = s, this.buildersByZIndex_ = {};
        }
        finish() {
          const t = {};
          for (const e in this.buildersByZIndex_) {
            t[e] = t[e] || {};
            const s = this.buildersByZIndex_[e];
            for (const i in s) {
              const r = s[i].finish();
              t[e][i] = r;
            }
          }
          return t;
        }
        getBuilder(t, e) {
          const s = t !== void 0 ? t.toString() : "0";
          let i = this.buildersByZIndex_[s];
          i === void 0 && (i = {}, this.buildersByZIndex_[s] = i);
          let r = i[e];
          if (r === void 0) {
            const o = g0[e];
            r = new o(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_), i[e] = r;
          }
          return r;
        }
      }
      const m0 = 5;
      class _0 extends nr {
        constructor(t) {
          super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = t, this.staleKeys_ = new Array(), this.maxStaleKeys = m0;
        }
        getStaleKeys() {
          return this.staleKeys_;
        }
        prependStaleKey(t) {
          this.staleKeys_.unshift(t), this.staleKeys_.length > this.maxStaleKeys && (this.staleKeys_.length = this.maxStaleKeys);
        }
        getFeatures(t) {
          return dt();
        }
        getData(t) {
          return null;
        }
        prepareFrame(t) {
          return dt();
        }
        renderFrame(t, e) {
          return dt();
        }
        forEachFeatureAtCoordinate(t, e, s, i, r) {
        }
        getLayer() {
          return this.layer_;
        }
        handleFontsChanged() {
        }
        handleImageChange_(t) {
          const e = t.target;
          (e.getState() === gt.LOADED || e.getState() === gt.ERROR) && this.renderIfReadyAndVisible();
        }
        loadImage(t) {
          let e = t.getState();
          return e != gt.LOADED && e != gt.ERROR && t.addEventListener(lt.CHANGE, this.boundHandleImageChange_), e == gt.IDLE && (t.load(), e = t.getState()), e == gt.LOADED;
        }
        renderIfReadyAndVisible() {
          const t = this.getLayer();
          t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
        }
        renderDeferred(t) {
        }
        disposeInternal() {
          delete this.layer_, super.disposeInternal();
        }
      }
      class Md {
        constructor() {
          xn(this, "pushMethodArgs_", (...t) => (this.instructions_[this.zIndex + this.offset_].push(t), this)), this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = new Proxy(Yo(), { get: (t, e) => {
            if (typeof Yo()[e] == "function") return this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(e), this.pushMethodArgs_;
          }, set: (t, e, s) => (this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(e, s), !0) });
        }
        pushFunction(t) {
          this.instructions_[this.zIndex + this.offset_].push(t);
        }
        getContext() {
          return this.context_;
        }
        draw(t) {
          this.instructions_.forEach((e) => {
            for (let s = 0, i = e.length; s < i; ++s) {
              const r = e[s];
              if (typeof r == "function") {
                r(t);
                continue;
              }
              const o = e[++s];
              if (typeof t[r] == "function") t[r](...o);
              else {
                if (typeof o == "function") {
                  t[r] = o(t);
                  continue;
                }
                t[r] = o;
              }
            }
          });
        }
        clear() {
          this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
        }
        offset() {
          this.offset_ = this.instructions_.length, this.zIndex = 0;
        }
      }
      const wd = [];
      let Ei = null;
      function y0() {
        Ei = Yt(1, 1, void 0, { willReadFrequently: !0 });
      }
      class Sd extends _0 {
        constructor(t) {
          super(t), this.container = null, this.renderedResolution, this.tempTransform = Ue(), this.pixelTransform = Ue(), this.inversePixelTransform = Ue(), this.context = null, this.deferredContext_ = null, this.containerReused = !1, this.frameState = null;
        }
        getImageData(t, e, s) {
          Ei || y0(), Ei.clearRect(0, 0, 1, 1);
          let i;
          try {
            Ei.drawImage(t, e, s, 1, 1, 0, 0, 1, 1), i = Ei.getImageData(0, 0, 1, 1).data;
          } catch {
            return Ei = null, null;
          }
          return i;
        }
        getBackground(t) {
          let e = this.getLayer().getBackground();
          return typeof e == "function" && (e = e(t.viewState.resolution)), e || void 0;
        }
        useContainer(t, e, s) {
          const i = this.getLayer().getClassName();
          let r, o;
          if (t && t.className === i && (!s || t && t.style.backgroundColor && Wn(ci(t.style.backgroundColor), ci(s)))) {
            const a = t.firstElementChild;
            a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
          }
          if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
            r = document.createElement("div"), r.className = i;
            let a = r.style;
            a.position = "absolute", a.width = "100%", a.height = "100%", o = Yt();
            const h = o.canvas;
            r.appendChild(h), a = h.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = r, this.context = o;
          }
          !this.containerReused && s && !this.container.style.backgroundColor && (this.container.style.backgroundColor = s);
        }
        clipUnrotated(t, e, s) {
          const i = an(s), r = ar(s), o = or(s), a = rr(s);
          Vt(e.coordinateToPixelTransform, i), Vt(e.coordinateToPixelTransform, r), Vt(e.coordinateToPixelTransform, o), Vt(e.coordinateToPixelTransform, a);
          const h = this.inversePixelTransform;
          Vt(h, i), Vt(h, r), Vt(h, o), Vt(h, a), t.save(), t.beginPath(), t.moveTo(Math.round(i[0]), Math.round(i[1])), t.lineTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
        }
        prepareContainer(t, e) {
          const s = t.extent, i = t.viewState.resolution, r = t.viewState.rotation, o = t.pixelRatio, a = Math.round(pt(s) / i * o), h = Math.round(Wt(s) / i * o);
          vn(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / o, 1 / o, r, -a / 2, -h / 2), hc(this.inversePixelTransform, this.pixelTransform);
          const l = jp(this.pixelTransform);
          if (this.useContainer(e, l, this.getBackground(t)), !this.containerReused) {
            const u = this.context.canvas;
            u.width != a || u.height != h ? (u.width = a, u.height = h) : this.context.clearRect(0, 0, a, h), l !== u.style.transform && (u.style.transform = l);
          }
        }
        dispatchRenderEvent_(t, e, s) {
          const i = this.getLayer();
          if (i.hasListener(t)) {
            const r = new ld(t, this.inversePixelTransform, s, e);
            i.dispatchEvent(r);
          }
        }
        preRender(t, e) {
          this.frameState = e, !e.declutter && this.dispatchRenderEvent_(Ge.PRERENDER, t, e);
        }
        postRender(t, e) {
          e.declutter || this.dispatchRenderEvent_(Ge.POSTRENDER, t, e);
        }
        renderDeferredInternal(t) {
        }
        getRenderContext(t) {
          return t.declutter && !this.deferredContext_ && (this.deferredContext_ = new Md()), t.declutter ? this.deferredContext_.getContext() : this.context;
        }
        renderDeferred(t) {
          t.declutter && (this.dispatchRenderEvent_(Ge.PRERENDER, this.context, t), t.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(t), this.dispatchRenderEvent_(Ge.POSTRENDER, this.context, t));
        }
        getRenderTransform(t, e, s, i, r, o, a) {
          const h = r / 2, l = o / 2, u = i / e, c = -u, d = -t[0] + a, p = -t[1];
          return vn(this.tempTransform, h, l, u, c, -s, d, p);
        }
        disposeInternal() {
          delete this.frameState, super.disposeInternal();
        }
      }
      function x0(n, t, e, s, i, r, o, a, h, l, u, c, d = !0) {
        let p = n[t], f = n[t + 1], y = 0, E = 0, M = 0, w = 0;
        function C() {
          y = p, E = f, t += s, p = n[t], f = n[t + 1], w += M, M = Math.sqrt((p - y) * (p - y) + (f - E) * (f - E));
        }
        do
          C();
        while (t < e - s && w + M < r);
        let v = M === 0 ? 0 : (r - w) / M;
        const R = Oe(y, p, v), I = Oe(E, f, v), O = t - s, A = w, P = r + a * h(l, i, u);
        for (; t < e - s && w + M < P; ) C();
        v = M === 0 ? 0 : (P - w) / M;
        const F = Oe(y, p, v), z = Oe(E, f, v);
        let k = !1;
        if (d) if (c) {
          const B = [R, I, F, z];
          Eh(B, 0, 4, 2, c, B, B), k = B[0] > B[2];
        } else k = R > F;
        const J = Math.PI, V = [], Y = O + s === t;
        t = O, M = 0, w = A, p = n[t], f = n[t + 1];
        let Q;
        if (Y) {
          C(), Q = Math.atan2(f - E, p - y), k && (Q += Q > 0 ? -J : J);
          const B = (F + R) / 2, it = (z + I) / 2;
          return V[0] = [B, it, (P - r) / 2, Q, i], V;
        }
        i = i.replace(/\n/g, " ");
        for (let B = 0, it = i.length; B < it; ) {
          C();
          let ot = Math.atan2(f - E, p - y);
          if (k && (ot += ot > 0 ? -J : J), Q !== void 0) {
            let at = ot - Q;
            if (at += at > J ? -2 * J : at < -J ? 2 * J : 0, Math.abs(at) > o) return null;
          }
          Q = ot;
          const H = B;
          let X = 0;
          for (; B < it; ++B) {
            const at = k ? it - B - 1 : B, Pt = a * h(l, i[at], u);
            if (t + s < e && w + M < r + X + Pt / 2) break;
            X += Pt;
          }
          if (B === H) continue;
          const mt = k ? i.substring(it - H, it - B) : i.substring(H, B);
          v = M === 0 ? 0 : (r + X / 2 - w) / M;
          const et = Oe(y, p, v), b = Oe(E, f, v);
          V.push([et, b, X / 2, ot, mt]), r += X;
        }
        return V;
      }
      const Mi = Se(), ns = [], Ln = [], On = [], ss = [];
      function vd(n) {
        return n[3].declutterBox;
      }
      const Rd = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
      function fl(n, t) {
        return t === "start" ? t = Rd.test(n) ? "right" : "left" : t === "end" && (t = Rd.test(n) ? "left" : "right"), ra[t];
      }
      function E0(n, t, e) {
        return e > 0 && n.push(`
`, ""), n.push(t, ""), n;
      }
      class M0 {
        constructor(t, e, s, i, r) {
          this.overlaps = s, this.pixelRatio = e, this.resolution = t, this.alignAndScaleFill_, this.instructions = i.instructions, this.coordinates = i.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = Ue(), this.hitDetectionInstructions = i.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = i.fillStates || {}, this.strokeStates = i.strokeStates || {}, this.textStates = i.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = r ? new Md() : null;
        }
        getZIndexContext() {
          return this.zIndexContext_;
        }
        createLabel(t, e, s, i) {
          const r = t + e + s + i;
          if (this.labels_[r]) return this.labels_[r];
          const o = i ? this.strokeStates[i] : null, a = s ? this.fillStates[s] : null, h = this.textStates[e], l = this.pixelRatio, u = [h.scale[0] * l, h.scale[1] * l], c = h.justify ? ra[h.justify] : fl(Array.isArray(t) ? t[0] : t, h.textAlign || Er), d = i && o.lineWidth ? o.lineWidth : 0, p = Array.isArray(t) ? t : String(t).split(`
`).reduce(E0, []), { width: f, height: y, widths: E, heights: M, lineWidths: w } = Gm(h, p), C = f + d, v = [], R = (C + 2) * u[0], I = (y + d) * u[1], O = { width: R < 0 ? Math.floor(R) : Math.ceil(R), height: I < 0 ? Math.floor(I) : Math.ceil(I), contextInstructions: v };
          (u[0] != 1 || u[1] != 1) && v.push("scale", u), i && (v.push("strokeStyle", o.strokeStyle), v.push("lineWidth", d), v.push("lineCap", o.lineCap), v.push("lineJoin", o.lineJoin), v.push("miterLimit", o.miterLimit), v.push("setLineDash", [o.lineDash]), v.push("lineDashOffset", o.lineDashOffset)), s && v.push("fillStyle", a.fillStyle), v.push("textBaseline", "middle"), v.push("textAlign", "center");
          const A = 0.5 - c;
          let P = c * C + A * d;
          const F = [], z = [];
          let k = 0, J = 0, V = 0, Y = 0, Q;
          for (let B = 0, it = p.length; B < it; B += 2) {
            const ot = p[B];
            if (ot === `
`) {
              J += k, k = 0, P = c * C + A * d, ++Y;
              continue;
            }
            const H = p[B + 1] || h.font;
            H !== Q && (i && F.push("font", H), s && z.push("font", H), Q = H), k = Math.max(k, M[V]);
            const X = [ot, P + A * E[V] + c * (E[V] - w[Y]), 0.5 * (d + k) + J];
            P += E[V], i && F.push("strokeText", X), s && z.push("fillText", X), ++V;
          }
          return Array.prototype.push.apply(v, F), Array.prototype.push.apply(v, z), this.labels_[r] = O, O;
        }
        replayTextBackground_(t, e, s, i, r, o, a) {
          t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, s), t.lineTo.apply(t, i), t.lineTo.apply(t, r), t.lineTo.apply(t, e), o && (this.alignAndScaleFill_ = o[2], this.fill_(t)), a && (this.setStrokeStyle_(t, a), t.stroke());
        }
        calculateImageOrLabelDimensions_(t, e, s, i, r, o, a, h, l, u, c, d, p, f, y, E) {
          a *= d[0], h *= d[1];
          let M = s - a, w = i - h;
          const C = r + l > t ? t - l : r, v = o + u > e ? e - u : o, R = f[3] + C * d[0] + f[1], I = f[0] + v * d[1] + f[2], O = M - f[3], A = w - f[0];
          (y || c !== 0) && (ns[0] = O, ss[0] = O, ns[1] = A, Ln[1] = A, Ln[0] = O + R, On[0] = Ln[0], On[1] = A + I, ss[1] = On[1]);
          let P;
          return c !== 0 ? (P = vn(Ue(), s, i, 1, 1, c, -s, -i), Vt(P, ns), Vt(P, Ln), Vt(P, On), Vt(P, ss), Ne(Math.min(ns[0], Ln[0], On[0], ss[0]), Math.min(ns[1], Ln[1], On[1], ss[1]), Math.max(ns[0], Ln[0], On[0], ss[0]), Math.max(ns[1], Ln[1], On[1], ss[1]), Mi)) : Ne(Math.min(O, O + R), Math.min(A, A + I), Math.max(O, O + R), Math.max(A, A + I), Mi), p && (M = Math.round(M), w = Math.round(w)), { drawImageX: M, drawImageY: w, drawImageW: C, drawImageH: v, originX: l, originY: u, declutterBox: { minX: Mi[0], minY: Mi[1], maxX: Mi[2], maxY: Mi[3], value: E }, canvasTransform: P, scale: d };
        }
        replayImageOrLabel_(t, e, s, i, r, o, a) {
          const h = !!(o || a), l = i.declutterBox, u = a ? a[2] * i.scale[0] / 2 : 0;
          return l.minX - u <= e[0] && l.maxX + u >= 0 && l.minY - u <= e[1] && l.maxY + u >= 0 && (h && this.replayTextBackground_(t, ns, Ln, On, ss, o, a), zm(t, i.canvasTransform, r, s, i.originX, i.originY, i.drawImageW, i.drawImageH, i.drawImageX, i.drawImageY, i.scale)), !0;
        }
        fill_(t) {
          const e = this.alignAndScaleFill_;
          if (e) {
            const s = Vt(this.renderedTransform_, [0, 0]), i = 512 * this.pixelRatio;
            t.save(), t.translate(s[0] % i, s[1] % i), e !== 1 && t.scale(e, e), t.rotate(this.viewRotation_);
          }
          t.fill(), e && t.restore();
        }
        setStrokeStyle_(t, e) {
          t.strokeStyle = e[1], t.lineWidth = e[2], t.lineCap = e[3], t.lineJoin = e[4], t.miterLimit = e[5], t.lineDashOffset = e[7], t.setLineDash(e[6]);
        }
        drawLabelWithPointPlacement_(t, e, s, i) {
          const r = this.textStates[e], o = this.createLabel(t, e, i, s), a = this.strokeStates[s], h = this.pixelRatio, l = fl(Array.isArray(t) ? t[0] : t, r.textAlign || Er), u = ra[r.textBaseline || $o], c = a && a.lineWidth ? a.lineWidth : 0, d = o.width / h - 2 * r.scale[0], p = l * d + 2 * (0.5 - l) * c, f = u * o.height / h + 2 * (0.5 - u) * c;
          return { label: o, anchorX: p, anchorY: f };
        }
        execute_(t, e, s, i, r, o, a, h) {
          const l = this.zIndexContext_;
          let u;
          this.pixelCoordinates_ && Wn(s, this.renderedTransform_) ? u = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), u = $n(this.coordinates, 0, this.coordinates.length, 2, s, this.pixelCoordinates_), zp(this.renderedTransform_, s));
          let c = 0;
          const d = i.length;
          let p = 0, f, y, E, M, w, C, v, R, I, O, A, P, F, z = 0, k = 0, J = null, V = null;
          const Y = this.coordinateCache_, Q = this.viewRotation_, B = Math.round(Math.atan2(-s[1], s[0]) * 1e12) / 1e12, it = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: Q }, ot = this.instructions != i || this.overlaps ? 0 : 200;
          let H, X, mt, et;
          for (; c < d; ) {
            const b = i[c];
            switch (b[0]) {
              case nt.BEGIN_GEOMETRY:
                H = b[1], et = b[3], H.getGeometry() ? a !== void 0 && !re(a, et.getExtent()) ? c = b[2] + 1 : ++c : c = b[2], l && (l.zIndex = b[4]);
                break;
              case nt.BEGIN_PATH:
                z > ot && (this.fill_(t), z = 0), k > ot && (t.stroke(), k = 0), !z && !k && (t.beginPath(), w = NaN, C = NaN), ++c;
                break;
              case nt.CIRCLE:
                p = b[1];
                const at = u[p], Pt = u[p + 1], Ut = u[p + 2], Xt = u[p + 3], en = Ut - at, Bt = Xt - Pt, mn = Math.sqrt(en * en + Bt * Bt);
                t.moveTo(at + mn, Pt), t.arc(at, Pt, mn, 0, 2 * Math.PI, !0), ++c;
                break;
              case nt.CLOSE_PATH:
                t.closePath(), ++c;
                break;
              case nt.CUSTOM:
                p = b[1], f = b[2];
                const us = b[3], _n = b[4], Fn = b[5];
                it.geometry = us, it.feature = H, c in Y || (Y[c] = []);
                const nn = Y[c];
                Fn ? Fn(u, p, f, 2, nn) : (nn[0] = u[p], nn[1] = u[p + 1], nn.length = 2), l && (l.zIndex = b[6]), _n(nn, it), ++c;
                break;
              case nt.DRAW_IMAGE:
                p = b[1], f = b[2], I = b[3], y = b[4], E = b[5];
                let de = b[6];
                const Xe = b[7], cs = b[8], ds = b[9], yn = b[10];
                let kn = b[11];
                const fs = b[12];
                let gs = b[13];
                M = b[14] || "declutter";
                const qt = b[15];
                if (!I && b.length >= 20) {
                  O = b[19], A = b[20], P = b[21], F = b[22];
                  const Pe = this.drawLabelWithPointPlacement_(O, A, P, F);
                  I = Pe.label, b[3] = I;
                  const Gn = b[23];
                  y = (Pe.anchorX - Gn) * this.pixelRatio, b[4] = y;
                  const Ee = b[24];
                  E = (Pe.anchorY - Ee) * this.pixelRatio, b[5] = E, de = I.height, b[6] = de, gs = I.width, b[13] = gs;
                }
                let eo;
                b.length > 25 && (eo = b[25]);
                let Bi, Bs, ps;
                b.length > 17 ? (Bi = b[16], Bs = b[17], ps = b[18]) : (Bi = Os, Bs = !1, ps = !1), yn && B ? kn += Q : !yn && !B && (kn -= Q);
                let no = 0;
                for (; p < f; p += 2) {
                  if (eo && eo[no++] < gs / this.pixelRatio) continue;
                  const Pe = this.calculateImageOrLabelDimensions_(I.width, I.height, u[p], u[p + 1], gs, de, y, E, cs, ds, kn, fs, r, Bi, Bs || ps, H), Gn = [t, e, I, Pe, Xe, Bs ? J : null, ps ? V : null];
                  if (h) {
                    let Ee, Le, fe;
                    if (qt) {
                      const Dt = f - p;
                      if (!qt[Dt]) {
                        qt[Dt] = { args: Gn, declutterMode: M };
                        continue;
                      }
                      const ne = qt[Dt];
                      Ee = ne.args, Le = ne.declutterMode, delete qt[Dt], fe = vd(Ee);
                    }
                    let sn, rn;
                    if (Ee && (Le !== "declutter" || !h.collides(fe)) && (sn = !0), (M !== "declutter" || !h.collides(Pe.declutterBox)) && (rn = !0), Le === "declutter" && M === "declutter") {
                      const Dt = sn && rn;
                      sn = Dt, rn = Dt;
                    }
                    sn && (Le !== "none" && h.insert(fe), this.replayImageOrLabel_.apply(this, Ee)), rn && (M !== "none" && h.insert(Pe.declutterBox), this.replayImageOrLabel_.apply(this, Gn));
                  } else this.replayImageOrLabel_.apply(this, Gn);
                }
                ++c;
                break;
              case nt.DRAW_CHARS:
                const js = b[1], ji = b[2], Ws = b[3], Ys = b[4];
                F = b[5];
                const Jl = b[6], La = b[7], so = b[8];
                P = b[9];
                const Wi = b[10];
                O = b[11], A = b[12];
                const Yi = [b[13], b[13]];
                M = b[14] || "declutter";
                const Oa = b[15], io = this.textStates[A], ms = io.font, _s = [io.scale[0] * La, io.scale[1] * La];
                let Dn;
                ms in this.widths_ ? Dn = this.widths_[ms] : (Dn = {}, this.widths_[ms] = Dn);
                const Xi = _d(u, js, ji, 2), ro = Math.abs(_s[0]) * Wc(ms, O, Dn);
                if (Ys || ro <= Xi) {
                  const Pe = this.textStates[A].textAlign, Gn = (Xi - ro) * fl(O, Pe), Ee = x0(u, js, ji, 2, O, Gn, Jl, Math.abs(_s[0]), Wc, ms, Dn, B ? 0 : this.viewRotation_, Oa);
                  t: if (Ee) {
                    const Le = [];
                    let fe, sn, rn, Dt, ne;
                    if (P) for (fe = 0, sn = Ee.length; fe < sn; ++fe) {
                      ne = Ee[fe], rn = ne[4], Dt = this.createLabel(rn, A, "", P), y = ne[2] + (_s[0] < 0 ? -Wi : Wi), E = Ws * Dt.height + (0.5 - Ws) * 2 * Wi * _s[1] / _s[0] - so;
                      const qe = this.calculateImageOrLabelDimensions_(Dt.width, Dt.height, ne[0], ne[1], Dt.width, Dt.height, y, E, 0, 0, ne[3], Yi, !1, Os, !1, H);
                      if (h && M === "declutter" && h.collides(qe.declutterBox)) break t;
                      Le.push([t, e, Dt, qe, 1, null, null]);
                    }
                    if (F) for (fe = 0, sn = Ee.length; fe < sn; ++fe) {
                      ne = Ee[fe], rn = ne[4], Dt = this.createLabel(rn, A, F, ""), y = ne[2], E = Ws * Dt.height - so;
                      const qe = this.calculateImageOrLabelDimensions_(Dt.width, Dt.height, ne[0], ne[1], Dt.width, Dt.height, y, E, 0, 0, ne[3], Yi, !1, Os, !1, H);
                      if (h && M === "declutter" && h.collides(qe.declutterBox)) break t;
                      Le.push([t, e, Dt, qe, 1, null, null]);
                    }
                    h && M !== "none" && h.load(Le.map(vd));
                    for (let qe = 0, Ql = Le.length; qe < Ql; ++qe) this.replayImageOrLabel_.apply(this, Le[qe]);
                  }
                }
                ++c;
                break;
              case nt.END_GEOMETRY:
                if (o !== void 0) {
                  H = b[1];
                  const Pe = o(H, et, M);
                  if (Pe) return Pe;
                }
                ++c;
                break;
              case nt.FILL:
                ot ? z++ : this.fill_(t), ++c;
                break;
              case nt.MOVE_TO_LINE_TO:
                for (p = b[1], f = b[2], X = u[p], mt = u[p + 1], t.moveTo(X, mt), w = X + 0.5 | 0, C = mt + 0.5 | 0, p += 2; p < f; p += 2) X = u[p], mt = u[p + 1], v = X + 0.5 | 0, R = mt + 0.5 | 0, (p == f - 2 || v !== w || R !== C) && (t.lineTo(X, mt), w = v, C = R);
                ++c;
                break;
              case nt.SET_FILL_STYLE:
                J = b, this.alignAndScaleFill_ = b[2], z && (this.fill_(t), z = 0, k && (t.stroke(), k = 0)), t.fillStyle = b[1], ++c;
                break;
              case nt.SET_STROKE_STYLE:
                V = b, k && (t.stroke(), k = 0), this.setStrokeStyle_(t, b), ++c;
                break;
              case nt.STROKE:
                ot ? k++ : t.stroke(), ++c;
                break;
              default:
                ++c;
                break;
            }
          }
          z && this.fill_(t), k && t.stroke();
        }
        execute(t, e, s, i, r, o) {
          this.viewRotation_ = i, this.execute_(t, e, s, this.instructions, r, void 0, void 0, o);
        }
        executeHitDetection(t, e, s, i, r) {
          return this.viewRotation_ = s, this.execute_(t, [t.canvas.width, t.canvas.height], e, this.hitDetectionInstructions, !0, i, r);
        }
      }
      const wi = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"], Cd = ["Image", "Text"], w0 = wi.filter((n) => !Cd.includes(n));
      class S0 {
        constructor(t, e, s, i, r, o, a) {
          this.maxExtent_ = t, this.overlaps_ = i, this.pixelRatio_ = s, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = Ue(), this.renderedContext_ = null, this.deferredZIndexContexts_ = {}, this.createExecutors_(r, a);
        }
        clip(t, e) {
          const s = this.getClipCoords(e);
          t.beginPath(), t.moveTo(s[0], s[1]), t.lineTo(s[2], s[3]), t.lineTo(s[4], s[5]), t.lineTo(s[6], s[7]), t.clip();
        }
        createExecutors_(t, e) {
          for (const s in t) {
            let i = this.executorsByZIndex_[s];
            i === void 0 && (i = {}, this.executorsByZIndex_[s] = i);
            const r = t[s];
            for (const o in r) {
              const a = r[o];
              i[o] = new M0(this.resolution_, this.pixelRatio_, this.overlaps_, a, e);
            }
          }
        }
        hasExecutors(t) {
          for (const e in this.executorsByZIndex_) {
            const s = this.executorsByZIndex_[e];
            for (let i = 0, r = t.length; i < r; ++i) if (t[i] in s) return !0;
          }
          return !1;
        }
        forEachFeatureAtCoordinate(t, e, s, i, r, o) {
          i = Math.round(i);
          const a = i * 2 + 1, h = vn(this.hitDetectionTransform_, i + 0.5, i + 0.5, 1 / e, -1 / e, -s, -t[0], -t[1]), l = !this.hitDetectionContext_;
          l && (this.hitDetectionContext_ = Yt(a, a, void 0, { willReadFrequently: !0 }));
          const u = this.hitDetectionContext_;
          u.canvas.width !== a || u.canvas.height !== a ? (u.canvas.width = a, u.canvas.height = a) : l || u.clearRect(0, 0, a, a);
          let c;
          this.renderBuffer_ !== void 0 && (c = Se(), bs(c, t), Mo(c, e * (this.renderBuffer_ + i), c));
          const d = v0(i);
          let p;
          function f(R, I, O) {
            const A = u.getImageData(0, 0, a, a).data;
            for (let P = 0, F = d.length; P < F; P++) if (A[d[P]] > 0) {
              if (!o || O === "none" || p !== "Image" && p !== "Text" || o.includes(R)) {
                const z = (d[P] - 3) / 4, k = i - z % a, J = i - (z / a | 0), V = r(R, I, k * k + J * J);
                if (V) return V;
              }
              u.clearRect(0, 0, a, a);
              break;
            }
          }
          const y = Object.keys(this.executorsByZIndex_).map(Number);
          y.sort(jn);
          let E, M, w, C, v;
          for (E = y.length - 1; E >= 0; --E) {
            const R = y[E].toString();
            for (w = this.executorsByZIndex_[R], M = wi.length - 1; M >= 0; --M) if (p = wi[M], C = w[p], C !== void 0 && (v = C.executeHitDetection(u, h, s, f, c), v)) return v;
          }
        }
        getClipCoords(t) {
          const e = this.maxExtent_;
          if (!e) return null;
          const s = e[0], i = e[1], r = e[2], o = e[3], a = [s, i, s, o, r, o, r, i];
          return $n(a, 0, 8, 2, t, a), a;
        }
        isEmpty() {
          return Qs(this.executorsByZIndex_);
        }
        execute(t, e, s, i, r, o, a) {
          const h = Object.keys(this.executorsByZIndex_).map(Number);
          h.sort(a ? Og : jn), o = o || wi;
          const l = wi.length;
          for (let u = 0, c = h.length; u < c; ++u) {
            const d = h[u].toString(), p = this.executorsByZIndex_[d];
            for (let f = 0, y = o.length; f < y; ++f) {
              const E = o[f], M = p[E];
              if (M !== void 0) {
                const w = a === null ? void 0 : M.getZIndexContext(), C = w ? w.getContext() : t, v = this.maxExtent_ && E !== "Image" && E !== "Text";
                if (v && (C.save(), this.clip(C, s)), !w || E === "Text" || E === "Image" ? M.execute(C, e, s, i, r, a) : w.pushFunction((R) => M.execute(R, e, s, i, r, a)), v && C.restore(), w) {
                  w.offset();
                  const R = h[u] * l + f;
                  this.deferredZIndexContexts_[R] || (this.deferredZIndexContexts_[R] = []), this.deferredZIndexContexts_[R].push(w);
                }
              }
            }
          }
          this.renderedContext_ = t;
        }
        getDeferredZIndexContexts() {
          return this.deferredZIndexContexts_;
        }
        getRenderedContext() {
          return this.renderedContext_;
        }
        renderDeferred() {
          const t = this.deferredZIndexContexts_, e = Object.keys(t).map(Number).sort(jn);
          for (let s = 0, i = e.length; s < i; ++s) t[e[s]].forEach((r) => {
            r.draw(this.renderedContext_), r.clear();
          }), t[e[s]].length = 0;
        }
      }
      const gl = {};
      function v0(n) {
        if (gl[n] !== void 0) return gl[n];
        const t = n * 2 + 1, e = n * n, s = new Array(e + 1);
        for (let r = 0; r <= n; ++r) for (let o = 0; o <= n; ++o) {
          const a = r * r + o * o;
          if (a > e) break;
          let h = s[a];
          h || (h = [], s[a] = h), h.push(((n + r) * t + (n + o)) * 4 + 3), r > 0 && h.push(((n - r) * t + (n + o)) * 4 + 3), o > 0 && (h.push(((n + r) * t + (n - o)) * 4 + 3), r > 0 && h.push(((n - r) * t + (n - o)) * 4 + 3));
        }
        const i = [];
        for (let r = 0, o = s.length; r < o; ++r) s[r] && i.push(...s[r]);
        return gl[n] = i, i;
      }
      class pl extends xd {
        constructor(t, e, s, i, r, o, a) {
          super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = s, this.transform_ = i, this.transformRotation_ = i ? $a(Math.atan2(i[1], i[0]), 10) : 0, this.viewRotation_ = r, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = Ue();
        }
        drawImages_(t, e, s, i) {
          if (!this.image_) return;
          const r = $n(t, e, s, i, this.transform_, this.pixelCoordinates_), o = this.context_, a = this.tmpLocalTransform_, h = o.globalAlpha;
          this.imageOpacity_ != 1 && (o.globalAlpha = h * this.imageOpacity_);
          let l = this.imageRotation_;
          this.transformRotation_ === 0 && (l -= this.viewRotation_), this.imageRotateWithView_ && (l += this.viewRotation_);
          for (let u = 0, c = r.length; u < c; u += 2) {
            const d = r[u] - this.imageAnchorX_, p = r[u + 1] - this.imageAnchorY_;
            if (l !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
              const f = d + this.imageAnchorX_, y = p + this.imageAnchorY_;
              vn(a, f, y, 1, 1, l, -f, -y), o.save(), o.transform.apply(o, a), o.translate(f, y), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_), o.restore();
            } else o.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, d, p, this.imageWidth_, this.imageHeight_);
          }
          this.imageOpacity_ != 1 && (o.globalAlpha = h);
        }
        drawText_(t, e, s, i) {
          if (!this.textState_ || this.text_ === "") return;
          this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
          const r = $n(t, e, s, i, this.transform_, this.pixelCoordinates_), o = this.context_;
          let a = this.textRotation_;
          for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); e < s; e += i) {
            const h = r[e] + this.textOffsetX_, l = r[e + 1] + this.textOffsetY_;
            a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (o.save(), o.translate(h - this.textOffsetX_, l - this.textOffsetY_), o.rotate(a), o.translate(this.textOffsetX_, this.textOffsetY_), o.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && o.strokeText(this.text_, 0, 0), this.textFillState_ && o.fillText(this.text_, 0, 0), o.restore()) : (this.textStrokeState_ && o.strokeText(this.text_, h, l), this.textFillState_ && o.fillText(this.text_, h, l));
          }
        }
        moveToLineTo_(t, e, s, i, r) {
          const o = this.context_, a = $n(t, e, s, i, this.transform_, this.pixelCoordinates_);
          o.moveTo(a[0], a[1]);
          let h = a.length;
          r && (h -= 2);
          for (let l = 2; l < h; l += 2) o.lineTo(a[l], a[l + 1]);
          return r && o.closePath(), s;
        }
        drawRings_(t, e, s, i) {
          for (let r = 0, o = s.length; r < o; ++r) e = this.moveToLineTo_(t, e, s[r], i, !0);
          return e;
        }
        drawCircle(t) {
          if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), !!re(this.extent_, t.getExtent())) {
            if (this.fillState_ || this.strokeState_) {
              this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
              const e = qp(t, this.transform_, this.pixelCoordinates_), s = e[2] - e[0], i = e[3] - e[1], r = Math.sqrt(s * s + i * i), o = this.context_;
              o.beginPath(), o.arc(e[0], e[1], r, 0, 2 * Math.PI), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
            }
            this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
          }
        }
        setStyle(t) {
          this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
        }
        setTransform(t) {
          this.transform_ = t;
        }
        drawGeometry(t) {
          switch (t.getType()) {
            case "Point":
              this.drawPoint(t);
              break;
            case "LineString":
              this.drawLineString(t);
              break;
            case "Polygon":
              this.drawPolygon(t);
              break;
            case "MultiPoint":
              this.drawMultiPoint(t);
              break;
            case "MultiLineString":
              this.drawMultiLineString(t);
              break;
            case "MultiPolygon":
              this.drawMultiPolygon(t);
              break;
            case "GeometryCollection":
              this.drawGeometryCollection(t);
              break;
            case "Circle":
              this.drawCircle(t);
              break;
          }
        }
        drawFeature(t, e) {
          const s = e.getGeometryFunction()(t);
          s && (this.setStyle(e), this.drawGeometry(s));
        }
        drawGeometryCollection(t) {
          const e = t.getGeometriesArray();
          for (let s = 0, i = e.length; s < i; ++s) this.drawGeometry(e[s]);
        }
        drawPoint(t) {
          this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
          const e = t.getFlatCoordinates(), s = t.getStride();
          this.image_ && this.drawImages_(e, 0, e.length, s), this.text_ !== "" && this.drawText_(e, 0, e.length, s);
        }
        drawMultiPoint(t) {
          this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
          const e = t.getFlatCoordinates(), s = t.getStride();
          this.image_ && this.drawImages_(e, 0, e.length, s), this.text_ !== "" && this.drawText_(e, 0, e.length, s);
        }
        drawLineString(t) {
          if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), !!re(this.extent_, t.getExtent())) {
            if (this.strokeState_) {
              this.setContextStrokeState_(this.strokeState_);
              const e = this.context_, s = t.getFlatCoordinates();
              e.beginPath(), this.moveToLineTo_(s, 0, s.length, t.getStride(), !1), e.stroke();
            }
            if (this.text_ !== "") {
              const e = t.getFlatMidpoint();
              this.drawText_(e, 0, 2, 2);
            }
          }
        }
        drawMultiLineString(t) {
          this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
          const e = t.getExtent();
          if (re(this.extent_, e)) {
            if (this.strokeState_) {
              this.setContextStrokeState_(this.strokeState_);
              const s = this.context_, i = t.getFlatCoordinates();
              let r = 0;
              const o = t.getEnds(), a = t.getStride();
              s.beginPath();
              for (let h = 0, l = o.length; h < l; ++h) r = this.moveToLineTo_(i, r, o[h], a, !1);
              s.stroke();
            }
            if (this.text_ !== "") {
              const s = t.getFlatMidpoints();
              this.drawText_(s, 0, s.length, 2);
            }
          }
        }
        drawPolygon(t) {
          if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), !!re(this.extent_, t.getExtent())) {
            if (this.strokeState_ || this.fillState_) {
              this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
              const e = this.context_;
              e.beginPath(), this.drawRings_(t.getOrientedFlatCoordinates(), 0, t.getEnds(), t.getStride()), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
            }
            if (this.text_ !== "") {
              const e = t.getFlatInteriorPoint();
              this.drawText_(e, 0, 2, 2);
            }
          }
        }
        drawMultiPolygon(t) {
          if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), !!re(this.extent_, t.getExtent())) {
            if (this.strokeState_ || this.fillState_) {
              this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
              const e = this.context_, s = t.getOrientedFlatCoordinates();
              let i = 0;
              const r = t.getEndss(), o = t.getStride();
              e.beginPath();
              for (let a = 0, h = r.length; a < h; ++a) {
                const l = r[a];
                i = this.drawRings_(s, i, l, o);
              }
              this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
            }
            if (this.text_ !== "") {
              const e = t.getFlatInteriorPoints();
              this.drawText_(e, 0, e.length, 2);
            }
          }
        }
        setContextFillState_(t) {
          const e = this.context_, s = this.contextFillState_;
          s ? s.fillStyle != t.fillStyle && (s.fillStyle = t.fillStyle, e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = { fillStyle: t.fillStyle });
        }
        setContextStrokeState_(t) {
          const e = this.context_, s = this.contextStrokeState_;
          s ? (s.lineCap != t.lineCap && (s.lineCap = t.lineCap, e.lineCap = t.lineCap), Wn(s.lineDash, t.lineDash) || e.setLineDash(s.lineDash = t.lineDash), s.lineDashOffset != t.lineDashOffset && (s.lineDashOffset = t.lineDashOffset, e.lineDashOffset = t.lineDashOffset), s.lineJoin != t.lineJoin && (s.lineJoin = t.lineJoin, e.lineJoin = t.lineJoin), s.lineWidth != t.lineWidth && (s.lineWidth = t.lineWidth, e.lineWidth = t.lineWidth), s.miterLimit != t.miterLimit && (s.miterLimit = t.miterLimit, e.miterLimit = t.miterLimit), s.strokeStyle != t.strokeStyle && (s.strokeStyle = t.strokeStyle, e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = { lineCap: t.lineCap, lineDash: t.lineDash, lineDashOffset: t.lineDashOffset, lineJoin: t.lineJoin, lineWidth: t.lineWidth, miterLimit: t.miterLimit, strokeStyle: t.strokeStyle });
        }
        setContextTextState_(t) {
          const e = this.context_, s = this.contextTextState_, i = t.textAlign ? t.textAlign : Er;
          s ? (s.font != t.font && (s.font = t.font, e.font = t.font), s.textAlign != i && (s.textAlign = i, e.textAlign = i), s.textBaseline != t.textBaseline && (s.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = i, e.textBaseline = t.textBaseline, this.contextTextState_ = { font: t.font, textAlign: i, textBaseline: t.textBaseline });
        }
        setFillStrokeStyle(t, e) {
          if (!t) this.fillState_ = null;
          else {
            const s = t.getColor();
            this.fillState_ = { fillStyle: un(s || Re) };
          }
          if (!e) this.strokeState_ = null;
          else {
            const s = e.getColor(), i = e.getLineCap(), r = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), h = e.getWidth(), l = e.getMiterLimit(), u = r || Cn;
            this.strokeState_ = { lineCap: i !== void 0 ? i : di, lineDash: this.pixelRatio_ === 1 ? u : u.map((c) => c * this.pixelRatio_), lineDashOffset: (o || bn) * this.pixelRatio_, lineJoin: a !== void 0 ? a : fi, lineWidth: (h !== void 0 ? h : Mr) * this.pixelRatio_, miterLimit: l !== void 0 ? l : yr, strokeStyle: un(s || xr) };
          }
        }
        setImageStyle(t) {
          let e;
          if (!t || !(e = t.getSize())) {
            this.image_ = null;
            return;
          }
          const s = t.getPixelRatio(this.pixelRatio_), i = t.getAnchor(), r = t.getOrigin();
          this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = i[0] * s, this.imageAnchorY_ = i[1] * s, this.imageHeight_ = e[1] * s, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
          const o = t.getScaleArray();
          this.imageScale_ = [o[0] * this.pixelRatio_ / s, o[1] * this.pixelRatio_ / s], this.imageWidth_ = e[0] * s;
        }
        setTextStyle(t) {
          if (!t) this.text_ = "";
          else {
            const e = t.getFill();
            if (!e) this.textFillState_ = null;
            else {
              const p = e.getColor();
              this.textFillState_ = { fillStyle: un(p || Re) };
            }
            const s = t.getStroke();
            if (!s) this.textStrokeState_ = null;
            else {
              const p = s.getColor(), f = s.getLineCap(), y = s.getLineDash(), E = s.getLineDashOffset(), M = s.getLineJoin(), w = s.getWidth(), C = s.getMiterLimit();
              this.textStrokeState_ = { lineCap: f !== void 0 ? f : di, lineDash: y || Cn, lineDashOffset: E || bn, lineJoin: M !== void 0 ? M : fi, lineWidth: w !== void 0 ? w : Mr, miterLimit: C !== void 0 ? C : yr, strokeStyle: un(p || xr) };
            }
            const i = t.getFont(), r = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), h = t.getRotation(), l = t.getScaleArray(), u = t.getText(), c = t.getTextAlign(), d = t.getTextBaseline();
            this.textState_ = { font: i !== void 0 ? i : Bc, textAlign: c !== void 0 ? c : Er, textBaseline: d !== void 0 ? d : $o }, this.text_ = u !== void 0 ? Array.isArray(u) ? u.reduce((p, f, y) => p += y % 2 ? " " : f, "") : u : "", this.textOffsetX_ = r !== void 0 ? this.pixelRatio_ * r : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = h !== void 0 ? h : 0, this.textScale_ = [this.pixelRatio_ * l[0], this.pixelRatio_ * l[1]];
          }
        }
      }
      const R0 = Object.freeze(Object.defineProperty({ __proto__: null, Circle: Ns, Fill: Ke, Icon: Sr, IconImage: $h, Image: _r, RegularShape: wr, Stroke: ke, Style: ae, Text: Ko }, Symbol.toStringTag, { value: "Module" })), cn = 0.5;
      function C0(n, t, e, s, i, r, o, a, h) {
        const l = i, u = n[0] * cn, c = n[1] * cn, d = Yt(u, c);
        d.imageSmoothingEnabled = !1;
        const p = d.canvas, f = new pl(d, cn, i, null, o, a, null), y = e.length, E = Math.floor((256 * 256 * 256 - 1) / y), M = {};
        for (let C = 1; C <= y; ++C) {
          const v = e[C - 1], R = v.getStyleFunction() || s;
          if (!R) continue;
          let I = R(v, r);
          if (!I) continue;
          Array.isArray(I) || (I = [I]);
          const O = (C * E).toString(16).padStart(7, "#00000");
          for (let A = 0, P = I.length; A < P; ++A) {
            const F = I[A], z = F.getGeometryFunction()(v);
            if (!z || !re(l, z.getExtent())) continue;
            const k = F.clone(), J = k.getFill();
            J && J.setColor(O);
            const V = k.getStroke();
            V && (V.setColor(O), V.setLineDash(null)), k.setText(void 0);
            const Y = F.getImage();
            if (Y) {
              const ot = Y.getImageSize();
              if (!ot) continue;
              const H = Yt(ot[0], ot[1], void 0, { alpha: !1 }), X = H.canvas;
              H.fillStyle = O, H.fillRect(0, 0, X.width, X.height), k.setImage(new Sr({ img: X, anchor: Y.getAnchor(), anchorXUnits: "pixels", anchorYUnits: "pixels", offset: Y.getOrigin(), opacity: 1, size: Y.getSize(), scale: Y.getScale(), rotation: Y.getRotation(), rotateWithView: Y.getRotateWithView() }));
            }
            const Q = k.getZIndex() || 0;
            let B = M[Q];
            B || (B = {}, M[Q] = B, B.Polygon = [], B.Circle = [], B.LineString = [], B.Point = []);
            const it = z.getType();
            if (it === "GeometryCollection") {
              const ot = z.getGeometriesArrayRecursive();
              for (let H = 0, X = ot.length; H < X; ++H) {
                const mt = ot[H];
                B[mt.getType().replace("Multi", "")].push(mt, k);
              }
            } else B[it.replace("Multi", "")].push(z, k);
          }
        }
        const w = Object.keys(M).map(Number).sort(jn);
        for (let C = 0, v = w.length; C < v; ++C) {
          const R = M[w[C]];
          for (const I in R) {
            const O = R[I];
            for (let A = 0, P = O.length; A < P; A += 2) {
              f.setStyle(O[A + 1]);
              for (let F = 0, z = t.length; F < z; ++F) f.setTransform(t[F]), f.drawGeometry(O[A]);
            }
          }
        }
        return d.getImageData(0, 0, p.width, p.height);
      }
      function b0(n, t, e) {
        const s = [];
        if (e) {
          const i = Math.floor(Math.round(n[0]) * cn), r = Math.floor(Math.round(n[1]) * cn), o = (kt(i, 0, e.width - 1) + kt(r, 0, e.height - 1) * e.width) * 4, a = e.data[o], h = e.data[o + 1], l = e.data[o + 2] + 256 * (h + 256 * a), u = Math.floor((256 * 256 * 256 - 1) / t.length);
          l && l % u === 0 && s.push(t[l / u - 1]);
        }
        return s;
      }
      const T0 = 0.5, bd = { Point: k0, LineString: O0, Polygon: G0, MultiPoint: D0, MultiLineString: N0, MultiPolygon: F0, GeometryCollection: L0, Circle: A0 };
      function I0(n, t) {
        return parseInt(vt(n), 10) - parseInt(vt(t), 10);
      }
      function ml(n, t) {
        const e = Td(n, t);
        return e * e;
      }
      function Td(n, t) {
        return T0 * n / t;
      }
      function A0(n, t, e, s, i) {
        const r = e.getFill(), o = e.getStroke();
        if (r || o) {
          const h = n.getBuilder(e.getZIndex(), "Circle");
          h.setFillStrokeStyle(r, o), h.drawCircle(t, s, i);
        }
        const a = e.getText();
        if (a && a.getText()) {
          const h = n.getBuilder(e.getZIndex(), "Text");
          h.setTextStyle(a), h.drawText(t, s);
        }
      }
      function Id(n, t, e, s, i, r, o, a) {
        const h = [], l = e.getImage();
        if (l) {
          let d = !0;
          const p = l.getImageState();
          p == gt.LOADED || p == gt.ERROR ? d = !1 : p == gt.IDLE && l.load(), d && h.push(l.ready());
        }
        const u = e.getFill();
        u && u.loading() && h.push(u.ready());
        const c = h.length > 0;
        return c && Promise.all(h).then(() => i(null)), P0(n, t, e, s, r, o, a), c;
      }
      function P0(n, t, e, s, i, r, o) {
        const a = e.getGeometryFunction()(t);
        if (!a) return;
        const h = a.simplifyTransformed(s, i);
        if (e.getRenderer()) Ad(n, h, e, t, o);
        else {
          const l = bd[h.getType()];
          l(n, h, e, t, o, r);
        }
      }
      function Ad(n, t, e, s, i) {
        if (t.getType() == "GeometryCollection") {
          const r = t.getGeometries();
          for (let o = 0, a = r.length; o < a; ++o) Ad(n, r[o], e, s, i);
          return;
        }
        n.getBuilder(e.getZIndex(), "Default").drawCustom(t, s, e.getRenderer(), e.getHitDetectionRenderer(), i);
      }
      function L0(n, t, e, s, i, r) {
        const o = t.getGeometriesArray();
        let a, h;
        for (a = 0, h = o.length; a < h; ++a) {
          const l = bd[o[a].getType()];
          l(n, o[a], e, s, i, r);
        }
      }
      function O0(n, t, e, s, i) {
        const r = e.getStroke();
        if (r) {
          const a = n.getBuilder(e.getZIndex(), "LineString");
          a.setFillStrokeStyle(null, r), a.drawLineString(t, s, i);
        }
        const o = e.getText();
        if (o && o.getText()) {
          const a = n.getBuilder(e.getZIndex(), "Text");
          a.setTextStyle(o), a.drawText(t, s, i);
        }
      }
      function N0(n, t, e, s, i) {
        const r = e.getStroke();
        if (r) {
          const a = n.getBuilder(e.getZIndex(), "LineString");
          a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, s, i);
        }
        const o = e.getText();
        if (o && o.getText()) {
          const a = n.getBuilder(e.getZIndex(), "Text");
          a.setTextStyle(o), a.drawText(t, s, i);
        }
      }
      function F0(n, t, e, s, i) {
        const r = e.getFill(), o = e.getStroke();
        if (o || r) {
          const h = n.getBuilder(e.getZIndex(), "Polygon");
          h.setFillStrokeStyle(r, o), h.drawMultiPolygon(t, s, i);
        }
        const a = e.getText();
        if (a && a.getText()) {
          const h = n.getBuilder(e.getZIndex(), "Text");
          h.setTextStyle(a), h.drawText(t, s, i);
        }
      }
      function k0(n, t, e, s, i, r) {
        const o = e.getImage(), a = e.getText(), h = a && a.getText(), l = r && o && h ? {} : void 0;
        if (o) {
          if (o.getImageState() != gt.LOADED) return;
          const u = n.getBuilder(e.getZIndex(), "Image");
          u.setImageStyle(o, l), u.drawPoint(t, s, i);
        }
        if (h) {
          const u = n.getBuilder(e.getZIndex(), "Text");
          u.setTextStyle(a, l), u.drawText(t, s, i);
        }
      }
      function D0(n, t, e, s, i, r) {
        const o = e.getImage(), a = o && o.getOpacity() !== 0, h = e.getText(), l = h && h.getText(), u = r && a && l ? {} : void 0;
        if (a) {
          if (o.getImageState() != gt.LOADED) return;
          const c = n.getBuilder(e.getZIndex(), "Image");
          c.setImageStyle(o, u), c.drawMultiPoint(t, s, i);
        }
        if (l) {
          const c = n.getBuilder(e.getZIndex(), "Text");
          c.setTextStyle(h, u), c.drawText(t, s, i);
        }
      }
      function G0(n, t, e, s, i) {
        const r = e.getFill(), o = e.getStroke();
        if (r || o) {
          const h = n.getBuilder(e.getZIndex(), "Polygon");
          h.setFillStrokeStyle(r, o), h.drawPolygon(t, s, i);
        }
        const a = e.getText();
        if (a && a.getText()) {
          const h = n.getBuilder(e.getZIndex(), "Text");
          h.setTextStyle(a), h.drawText(t, s, i);
        }
      }
      class z0 extends Sd {
        constructor(t) {
          super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.clipped_ = !1, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = Se(), this.wrappedRenderedExtent_ = Se(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.renderedFrameDeclutter_, this.replayGroup_ = null, this.replayGroupChanged = !0, this.clipping = !0, this.targetContext_ = null, this.opacity_ = 1;
        }
        renderWorlds(t, e, s) {
          const i = e.extent, r = e.viewState, o = r.center, a = r.resolution, h = r.projection, l = r.rotation, u = h.getExtent(), c = this.getLayer().getSource(), d = this.getLayer().getDeclutter(), p = e.pixelRatio, f = e.viewHints, y = !(f[ie.ANIMATING] || f[ie.INTERACTING]), E = this.context, M = Math.round(pt(i) / a * p), w = Math.round(Wt(i) / a * p), C = c.getWrapX() && h.canWrapX(), v = C ? pt(u) : null, R = C ? Math.ceil((i[2] - u[2]) / v) + 1 : 1;
          let I = C ? Math.floor((i[0] - u[0]) / v) : 0;
          do {
            let O = this.getRenderTransform(o, a, 0, p, M, w, I * v);
            e.declutter && (O = O.slice(0)), t.execute(E, [E.canvas.width, E.canvas.height], O, l, y, s === void 0 ? wi : s ? Cd : w0, s ? d && e.declutter[d] : void 0);
          } while (++I < R);
        }
        setDrawContext_() {
          this.opacity_ !== 1 && (this.targetContext_ = this.context, this.context = Yt(this.context.canvas.width, this.context.canvas.height, wd));
        }
        resetDrawContext_() {
          if (this.opacity_ !== 1) {
            const t = this.targetContext_.globalAlpha;
            this.targetContext_.globalAlpha = this.opacity_, this.targetContext_.drawImage(this.context.canvas, 0, 0), this.targetContext_.globalAlpha = t, Xo(this.context), wd.push(this.context.canvas), this.context = this.targetContext_, this.targetContext_ = null;
          }
        }
        renderDeclutter(t) {
          !this.replayGroup_ || !this.getLayer().getDeclutter() || this.renderWorlds(this.replayGroup_, t, !0);
        }
        renderDeferredInternal(t) {
          this.replayGroup_ && (this.replayGroup_.renderDeferred(), this.clipped_ && this.context.restore(), this.resetDrawContext_());
        }
        renderFrame(t, e) {
          const s = t.layerStatesArray[t.layerIndex];
          this.opacity_ = s.opacity;
          const i = t.viewState;
          this.prepareContainer(t, e);
          const r = this.context, o = this.replayGroup_;
          let a = o && !o.isEmpty();
          if (!a && !(this.getLayer().hasListener(Ge.PRERENDER) || this.getLayer().hasListener(Ge.POSTRENDER))) return null;
          if (this.setDrawContext_(), this.preRender(r, t), i.projection, this.clipped_ = !1, a && s.extent && this.clipping) {
            const h = Vn(s.extent);
            a = re(h, t.extent), this.clipped_ = a && !qn(h, t.extent), this.clipped_ && this.clipUnrotated(r, t, h);
          }
          return a && this.renderWorlds(o, t, this.getLayer().getDeclutter() ? !1 : void 0), !t.declutter && this.clipped_ && r.restore(), this.postRender(r, t), this.renderedRotation_ !== i.rotation && (this.renderedRotation_ = i.rotation, this.hitDetectionImageData_ = null), t.declutter || this.resetDrawContext_(), this.container;
        }
        getFeatures(t) {
          return new Promise((e) => {
            if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
              const s = this.frameState.size.slice(), i = this.renderedCenter_, r = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, h = this.wrappedRenderedExtent_, l = this.getLayer(), u = [], c = s[0] * cn, d = s[1] * cn;
              u.push(this.getRenderTransform(i, r, o, cn, c, d, 0).slice());
              const p = l.getSource(), f = a.getExtent();
              if (p.getWrapX() && a.canWrapX() && !qn(f, h)) {
                let y = h[0];
                const E = pt(f);
                let M = 0, w;
                for (; y < f[0]; ) --M, w = E * M, u.push(this.getRenderTransform(i, r, o, cn, c, d, w).slice()), y += E;
                for (M = 0, y = h[2]; y > f[2]; ) ++M, w = E * M, u.push(this.getRenderTransform(i, r, o, cn, c, d, w).slice()), y -= E;
              }
              this.hitDetectionImageData_ = C0(s, u, this.renderedFeatures_, l.getStyleFunction(), h, r, o, ml(r, this.renderedPixelRatio_));
            }
            e(b0(t, this.renderedFeatures_, this.hitDetectionImageData_));
          });
        }
        forEachFeatureAtCoordinate(t, e, s, i, r) {
          if (!this.replayGroup_) return;
          const o = e.viewState.resolution, a = e.viewState.rotation, h = this.getLayer(), l = {}, u = function(d, p, f) {
            const y = vt(d), E = l[y];
            if (E) {
              if (E !== !0 && f < E.distanceSq) {
                if (f === 0) return l[y] = !0, r.splice(r.lastIndexOf(E), 1), i(d, h, p);
                E.geometry = p, E.distanceSq = f;
              }
            } else {
              if (f === 0) return l[y] = !0, i(d, h, p);
              r.push(l[y] = { feature: d, layer: h, geometry: p, distanceSq: f, callback: i });
            }
          }, c = this.getLayer().getDeclutter();
          return this.replayGroup_.forEachFeatureAtCoordinate(t, o, a, s, u, c ? e.declutter[c].all().map((d) => d.value) : null);
        }
        handleFontsChanged() {
          const t = this.getLayer();
          t.getVisible() && this.replayGroup_ && t.changed();
        }
        handleStyleImageChange_(t) {
          this.renderIfReadyAndVisible();
        }
        prepareFrame(t) {
          const e = this.getLayer(), s = e.getSource();
          if (!s) return !1;
          const i = t.viewHints[ie.ANIMATING], r = t.viewHints[ie.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
          if (this.ready && !o && i || !a && r) return this.animatingOrInteracting_ = !0, !0;
          this.animatingOrInteracting_ = !1;
          const h = t.extent, l = t.viewState, u = l.projection, c = l.resolution, d = t.pixelRatio, p = e.getRevision(), f = e.getRenderBuffer();
          let y = e.getRenderOrder();
          y === void 0 && (y = I0);
          const E = l.center.slice(), M = Mo(h, f * c), w = M.slice(), C = [M.slice()], v = u.getExtent();
          if (s.getWrapX() && u.canWrapX() && !qn(v, t.extent)) {
            const V = pt(v), Y = Math.max(pt(M) / 2, V);
            M[0] = v[0] - Y, M[2] = v[2] + Y, Bu(E, u);
            const Q = ih(C[0], u);
            Q[0] < v[0] && Q[2] < v[2] ? C.push([Q[0] + V, Q[1], Q[2] + V, Q[3]]) : Q[0] > v[0] && Q[2] > v[2] && C.push([Q[0] - V, Q[1], Q[2] - V, Q[3]]);
          }
          if (this.ready && this.renderedResolution_ == c && this.renderedRevision_ == p && this.renderedRenderOrder_ == y && this.renderedFrameDeclutter_ === !!t.declutter && qn(this.wrappedRenderedExtent_, M)) return Wn(this.renderedExtent_, w) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = w), this.renderedCenter_ = E, this.replayGroupChanged = !1, !0;
          this.replayGroup_ = null;
          const R = new p0(Td(c, d), M, c, d);
          let I;
          for (let V = 0, Y = C.length; V < Y; ++V) s.loadFeatures(C[V], c, u);
          const O = ml(c, d);
          let A = !0;
          const P = (V, Y) => {
            let Q;
            const B = V.getStyleFunction() || e.getStyleFunction();
            if (B && (Q = B(V, c)), Q) {
              const it = this.renderFeature(V, O, Q, R, I, this.getLayer().getDeclutter(), Y);
              A = A && !it;
            }
          }, F = ec(M), z = s.getFeaturesInExtent(F);
          y && z.sort(y);
          for (let V = 0, Y = z.length; V < Y; ++V) P(z[V], V);
          this.renderedFeatures_ = z, this.ready = A;
          const k = R.finish(), J = new S0(M, c, d, s.getOverlaps(), k, e.getRenderBuffer(), !!t.declutter);
          return this.renderedResolution_ = c, this.renderedRevision_ = p, this.renderedRenderOrder_ = y, this.renderedFrameDeclutter_ = !!t.declutter, this.renderedExtent_ = w, this.wrappedRenderedExtent_ = M, this.renderedCenter_ = E, this.renderedProjection_ = u, this.renderedPixelRatio_ = d, this.replayGroup_ = J, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
        }
        renderFeature(t, e, s, i, r, o, a) {
          if (!s) return !1;
          let h = !1;
          if (Array.isArray(s)) for (let l = 0, u = s.length; l < u; ++l) h = Id(i, t, s[l], e, this.boundHandleStyleImageChange_, r, o, a) || h;
          else h = Id(i, t, s, e, this.boundHandleStyleImageChange_, r, o, a);
          return h;
        }
      }
      class U0 extends hd {
        constructor(t) {
          super(t);
        }
        createRenderer() {
          return new z0(this);
        }
      }
      class Pd {
        constructor(t) {
          this.rbush_ = new Rc(t), this.items_ = {};
        }
        insert(t, e) {
          const s = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e };
          this.rbush_.insert(s), this.items_[vt(e)] = s;
        }
        load(t, e) {
          const s = new Array(e.length);
          for (let i = 0, r = e.length; i < r; i++) {
            const o = t[i], a = e[i], h = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a };
            s[i] = h, this.items_[vt(a)] = h;
          }
          this.rbush_.load(s);
        }
        remove(t) {
          const e = vt(t), s = this.items_[e];
          return delete this.items_[e], this.rbush_.remove(s) !== null;
        }
        update(t, e) {
          const s = this.items_[vt(e)], i = [s.minX, s.minY, s.maxX, s.maxY];
          ii(i, t) || (this.remove(e), this.insert(t, e));
        }
        getAll() {
          return this.rbush_.all().map(function(t) {
            return t.value;
          });
        }
        getInExtent(t) {
          const e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
          return this.rbush_.search(e).map(function(s) {
            return s.value;
          });
        }
        forEach(t) {
          return this.forEach_(this.getAll(), t);
        }
        forEachInExtent(t, e) {
          return this.forEach_(this.getInExtent(t), e);
        }
        forEach_(t, e) {
          let s;
          for (let i = 0, r = t.length; i < r; i++) if (s = e(t[i]), s) return s;
          return s;
        }
        isEmpty() {
          return Qs(this.items_);
        }
        clear() {
          this.rbush_.clear(), this.items_ = {};
        }
        getExtent(t) {
          const e = this.rbush_.toJSON();
          return Ne(e.minX, e.minY, e.maxX, e.maxY, t);
        }
        concat(t) {
          this.rbush_.load(t.rbush_.all());
          for (const e in t.items_) this.items_[e] = t.items_[e];
        }
      }
      class oa extends Rn {
        constructor(t, e, s) {
          super(), s !== void 0 && e === void 0 ? this.setFlatCoordinates(s, t) : (e = e || 0, this.setCenterAndRadius(t, e, s));
        }
        clone() {
          const t = new oa(this.flatCoordinates.slice(), void 0, this.layout);
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          const r = this.flatCoordinates, o = t - r[0], a = e - r[1], h = o * o + a * a;
          if (h < i) {
            if (h === 0) for (let l = 0; l < this.stride; ++l) s[l] = r[l];
            else {
              const l = this.getRadius() / Math.sqrt(h);
              s[0] = r[0] + l * o, s[1] = r[1] + l * a;
              for (let u = 2; u < this.stride; ++u) s[u] = r[u];
            }
            return s.length = this.stride, h;
          }
          return i;
        }
        containsXY(t, e) {
          const s = this.flatCoordinates, i = t - s[0], r = e - s[1];
          return i * i + r * r <= this.getRadiusSquared_();
        }
        getCenter() {
          return this.flatCoordinates.slice(0, this.stride);
        }
        computeExtent(t) {
          const e = this.flatCoordinates, s = e[this.stride] - e[0];
          return Ne(e[0] - s, e[1] - s, e[0] + s, e[1] + s, t);
        }
        getRadius() {
          return Math.sqrt(this.getRadiusSquared_());
        }
        getRadiusSquared_() {
          const t = this.flatCoordinates[this.stride] - this.flatCoordinates[0], e = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1];
          return t * t + e * e;
        }
        getType() {
          return "Circle";
        }
        intersectsExtent(t) {
          const e = this.getExtent();
          if (re(t, e)) {
            const s = this.getCenter();
            return t[0] <= s[0] && t[2] >= s[0] || t[1] <= s[1] && t[3] >= s[1] ? !0 : Ro(t, this.intersectsCoordinate.bind(this));
          }
          return !1;
        }
        setCenter(t) {
          const e = this.stride, s = this.flatCoordinates[e] - this.flatCoordinates[0], i = t.slice();
          i[e] = i[0] + s;
          for (let r = 1; r < e; ++r) i[e + r] = t[r];
          this.setFlatCoordinates(this.layout, i), this.changed();
        }
        setCenterAndRadius(t, e, s) {
          this.setLayout(s, t, 0), this.flatCoordinates || (this.flatCoordinates = []);
          const i = this.flatCoordinates;
          let r = fc(i, 0, t, this.stride);
          i[r++] = i[0] + e;
          for (let o = 1, a = this.stride; o < a; ++o) i[r++] = i[o];
          i.length = r, this.changed();
        }
        getCoordinates() {
          return null;
        }
        setCoordinates(t, e) {
        }
        setRadius(t) {
          this.flatCoordinates[this.stride] = this.flatCoordinates[0] + t, this.changed();
        }
        rotate(t, e) {
          const s = this.getCenter(), i = this.getStride();
          this.setCenter(Eh(s, 0, s.length, i, t, e, s)), this.changed();
        }
      }
      oa.prototype.transform;
      class aa extends No {
        constructor(t) {
          super(), this.geometries_ = t, this.changeEventsKeys_ = [], this.listenGeometriesChange_();
        }
        unlistenGeometriesChange_() {
          this.changeEventsKeys_.forEach(At), this.changeEventsKeys_.length = 0;
        }
        listenGeometriesChange_() {
          const t = this.geometries_;
          for (let e = 0, s = t.length; e < s; ++e) this.changeEventsKeys_.push(xt(t[e], lt.CHANGE, this.changed, this));
        }
        clone() {
          const t = new aa(_l(this.geometries_));
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          if (i < Xn(this.getExtent(), t, e)) return i;
          const r = this.geometries_;
          for (let o = 0, a = r.length; o < a; ++o) i = r[o].closestPointXY(t, e, s, i);
          return i;
        }
        containsXY(t, e) {
          const s = this.geometries_;
          for (let i = 0, r = s.length; i < r; ++i) if (s[i].containsXY(t, e)) return !0;
          return !1;
        }
        computeExtent(t) {
          Mn(t);
          const e = this.geometries_;
          for (let s = 0, i = e.length; s < i; ++s) ir(t, e[s].getExtent());
          return t;
        }
        getGeometries() {
          return _l(this.geometries_);
        }
        getGeometriesArray() {
          return this.geometries_;
        }
        getGeometriesArrayRecursive() {
          let t = [];
          const e = this.geometries_;
          for (let s = 0, i = e.length; s < i; ++s) e[s].getType() === this.getType() ? t = t.concat(e[s].getGeometriesArrayRecursive()) : t.push(e[s]);
          return t;
        }
        getSimplifiedGeometry(t) {
          if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t < this.simplifiedGeometryMaxMinSquaredTolerance) return this;
          const e = [], s = this.geometries_;
          let i = !1;
          for (let r = 0, o = s.length; r < o; ++r) {
            const a = s[r], h = a.getSimplifiedGeometry(t);
            e.push(h), h !== a && (i = !0);
          }
          return i ? new aa(e) : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
        }
        getType() {
          return "GeometryCollection";
        }
        intersectsExtent(t) {
          const e = this.geometries_;
          for (let s = 0, i = e.length; s < i; ++s) if (e[s].intersectsExtent(t)) return !0;
          return !1;
        }
        isEmpty() {
          return this.geometries_.length === 0;
        }
        rotate(t, e) {
          const s = this.geometries_;
          for (let i = 0, r = s.length; i < r; ++i) s[i].rotate(t, e);
          this.changed();
        }
        scale(t, e, s) {
          s || (s = wn(this.getExtent()));
          const i = this.geometries_;
          for (let r = 0, o = i.length; r < o; ++r) i[r].scale(t, e, s);
          this.changed();
        }
        setGeometries(t) {
          this.setGeometriesArray(_l(t));
        }
        setGeometriesArray(t) {
          this.unlistenGeometriesChange_(), this.geometries_ = t, this.listenGeometriesChange_(), this.changed();
        }
        applyTransform(t) {
          const e = this.geometries_;
          for (let s = 0, i = e.length; s < i; ++s) e[s].applyTransform(t);
          this.changed();
        }
        translate(t, e) {
          const s = this.geometries_;
          for (let i = 0, r = s.length; i < r; ++i) s[i].translate(t, e);
          this.changed();
        }
        disposeInternal() {
          this.unlistenGeometriesChange_(), super.disposeInternal();
        }
      }
      function _l(n) {
        return n.map((t) => t.clone());
      }
      class Si extends Rn {
        constructor(t, e, s) {
          if (super(), this.ends_ = [], this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, Array.isArray(t[0])) this.setCoordinates(t, e);
          else if (e !== void 0 && s) this.setFlatCoordinates(e, t), this.ends_ = s;
          else {
            const i = t, r = [], o = [];
            for (let h = 0, l = i.length; h < l; ++h) {
              const u = i[h];
              pe(r, u.getFlatCoordinates()), o.push(r.length);
            }
            const a = i.length === 0 ? this.getLayout() : i[0].getLayout();
            this.setFlatCoordinates(a, r), this.ends_ = o;
          }
        }
        appendLineString(t) {
          pe(this.flatCoordinates, t.getFlatCoordinates().slice()), this.ends_.push(this.flatCoordinates.length), this.changed();
        }
        clone() {
          const t = new Si(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          return i < Xn(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(wh(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), vh(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, s, i));
        }
        getCoordinateAtM(t, e, s) {
          return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (e = e !== void 0 ? e : !1, s = s !== void 0 ? s : !1, h0(this.flatCoordinates, 0, this.ends_, this.stride, t, e, s));
        }
        getCoordinates() {
          return lr(this.flatCoordinates, 0, this.ends_, this.stride);
        }
        getEnds() {
          return this.ends_;
        }
        getLineString(t) {
          return t < 0 || this.ends_.length <= t ? null : new ts(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout);
        }
        getLineStrings() {
          const t = this.flatCoordinates, e = this.ends_, s = this.layout, i = [];
          let r = 0;
          for (let o = 0, a = e.length; o < a; ++o) {
            const h = e[o], l = new ts(t.slice(r, h), s);
            i.push(l), r = h;
          }
          return i;
        }
        getFlatMidpoints() {
          const t = [], e = this.flatCoordinates;
          let s = 0;
          const i = this.ends_, r = this.stride;
          for (let o = 0, a = i.length; o < a; ++o) {
            const h = i[o], l = sa(e, s, h, r, 0.5);
            pe(t, l), s = h;
          }
          return t;
        }
        getSimplifiedGeometryInternal(t) {
          const e = [], s = [];
          return e.length = gc(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, s), new Si(e, "XY", s);
        }
        getType() {
          return "MultiLineString";
        }
        intersectsExtent(t) {
          return em(this.flatCoordinates, 0, this.ends_, this.stride, t);
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
          const s = Rh(this.flatCoordinates, 0, t, this.stride, this.ends_);
          this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1], this.changed();
        }
      }
      class Fr extends Rn {
        constructor(t, e) {
          super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e);
        }
        appendPoint(t) {
          pe(this.flatCoordinates, t.getFlatCoordinates()), this.changed();
        }
        clone() {
          const t = new Fr(this.flatCoordinates.slice(), this.layout);
          return t.applyProperties(this), t;
        }
        closestPointXY(t, e, s, i) {
          if (i < Xn(this.getExtent(), t, e)) return i;
          const r = this.flatCoordinates, o = this.stride;
          for (let a = 0, h = r.length; a < h; a += o) {
            const l = Ss(t, e, r[a], r[a + 1]);
            if (l < i) {
              i = l;
              for (let u = 0; u < o; ++u) s[u] = r[a + u];
              s.length = o;
            }
          }
          return i;
        }
        getCoordinates() {
          return Zn(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
        }
        getPoint(t) {
          const e = this.flatCoordinates.length / this.stride;
          return t < 0 || e <= t ? null : new ur(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout);
        }
        getPoints() {
          const t = this.flatCoordinates, e = this.layout, s = this.stride, i = [];
          for (let r = 0, o = t.length; r < o; r += s) {
            const a = new ur(t.slice(r, r + s), e);
            i.push(a);
          }
          return i;
        }
        getType() {
          return "MultiPoint";
        }
        intersectsExtent(t) {
          const e = this.flatCoordinates, s = this.stride;
          for (let i = 0, r = e.length; i < r; i += s) {
            const o = e[i], a = e[i + 1];
            if (wo(t, o, a)) return !0;
          }
          return !1;
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Fo(this.flatCoordinates, 0, t, this.stride), this.changed();
        }
      }
      function Ld(n, t, e, s) {
        const i = [];
        let r = Se();
        for (let o = 0, a = e.length; o < a; ++o) {
          const h = e[o];
          r = vo(n, t, h[0], s), i.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), t = h[h.length - 1];
        }
        return i;
      }
      class vi extends Rn {
        constructor(t, e, s) {
          if (super(), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !s && !Array.isArray(t[0])) {
            const i = t, r = [], o = [];
            for (let a = 0, h = i.length; a < h; ++a) {
              const l = i[a], u = r.length, c = l.getEnds();
              for (let d = 0, p = c.length; d < p; ++d) c[d] += u;
              pe(r, l.getFlatCoordinates()), o.push(c);
            }
            e = i.length === 0 ? this.getLayout() : i[0].getLayout(), t = r, s = o;
          }
          e !== void 0 && s ? (this.setFlatCoordinates(e, t), this.endss_ = s) : this.setCoordinates(t, e);
        }
        appendPolygon(t) {
          let e;
          if (!this.flatCoordinates) this.flatCoordinates = t.getFlatCoordinates().slice(), e = t.getEnds().slice(), this.endss_.push();
          else {
            const s = this.flatCoordinates.length;
            pe(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
            for (let i = 0, r = e.length; i < r; ++i) e[i] += s;
          }
          this.endss_.push(e), this.changed();
        }
        clone() {
          const t = this.endss_.length, e = new Array(t);
          for (let i = 0; i < t; ++i) e[i] = this.endss_[i].slice();
          const s = new vi(this.flatCoordinates.slice(), this.layout, e);
          return s.applyProperties(this), s;
        }
        closestPointXY(t, e, s, i) {
          return i < Xn(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(Vp(this.flatCoordinates, 0, this.endss_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), $p(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, s, i));
        }
        containsXY(t, e) {
          return tm(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e);
        }
        getArea() {
          return Jp(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
        }
        getCoordinates(t) {
          let e;
          return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), wc(e, 0, this.endss_, this.stride, t)) : e = this.flatCoordinates, bh(e, 0, this.endss_, this.stride);
        }
        getEndss() {
          return this.endss_;
        }
        getFlatInteriorPoints() {
          if (this.flatInteriorPointsRevision_ != this.getRevision()) {
            const t = Ld(this.flatCoordinates, 0, this.endss_, this.stride);
            this.flatInteriorPoints_ = _c(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t), this.flatInteriorPointsRevision_ = this.getRevision();
          }
          return this.flatInteriorPoints_;
        }
        getInteriorPoints() {
          return new Fr(this.getFlatInteriorPoints().slice(), "XYM");
        }
        getOrientedFlatCoordinates() {
          if (this.orientedRevision_ != this.getRevision()) {
            const t = this.flatCoordinates;
            im(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = wc(this.orientedFlatCoordinates_, 0, this.endss_, this.stride)), this.orientedRevision_ = this.getRevision();
          }
          return this.orientedFlatCoordinates_;
        }
        getSimplifiedGeometryInternal(t) {
          const e = [], s = [];
          return e.length = Hp(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, s), new vi(e, "XY", s);
        }
        getPolygon(t) {
          if (t < 0 || this.endss_.length <= t) return null;
          let e;
          if (t === 0) e = 0;
          else {
            const r = this.endss_[t - 1];
            e = r[r.length - 1];
          }
          const s = this.endss_[t].slice(), i = s[s.length - 1];
          if (e !== 0) for (let r = 0, o = s.length; r < o; ++r) s[r] -= e;
          return new hn(this.flatCoordinates.slice(e, i), this.layout, s);
        }
        getPolygons() {
          const t = this.layout, e = this.flatCoordinates, s = this.endss_, i = [];
          let r = 0;
          for (let o = 0, a = s.length; o < a; ++o) {
            const h = s[o].slice(), l = h[h.length - 1];
            if (r !== 0) for (let c = 0, d = h.length; c < d; ++c) h[c] -= r;
            const u = new hn(e.slice(r, l), t, h);
            i.push(u), r = l;
          }
          return i;
        }
        getType() {
          return "MultiPolygon";
        }
        intersectsExtent(t) {
          return nm(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t);
        }
        setCoordinates(t, e) {
          this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []);
          const s = Zp(this.flatCoordinates, 0, t, this.stride, this.endss_);
          if (s.length === 0) this.flatCoordinates.length = 0;
          else {
            const i = s[s.length - 1];
            this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1];
          }
          this.changed();
        }
      }
      const B0 = Object.freeze(Object.defineProperty({ __proto__: null, Circle: oa, Geometry: No, GeometryCollection: aa, LineString: ts, LinearRing: Ps, MultiLineString: Si, MultiPoint: Fr, MultiPolygon: vi, Point: ur, Polygon: hn, SimpleGeometry: Rn }, Symbol.toStringTag, { value: "Module" })), Od = Ue();
      class Qe {
        constructor(t, e, s, i, r, o) {
          this.styleFunction, this.extent_, this.id_ = o, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = s || null, this.properties_ = r, this.squaredTolerance_, this.stride_ = i, this.simplifiedGeometry_;
        }
        get(t) {
          return this.properties_[t];
        }
        getExtent() {
          return this.extent_ || (this.extent_ = this.type_ === "Point" ? eh(this.flatCoordinates_) : vo(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)), this.extent_;
        }
        getFlatInteriorPoint() {
          if (!this.flatInteriorPoints_) {
            const t = wn(this.getExtent());
            this.flatInteriorPoints_ = Ih(this.flatCoordinates_, 0, this.ends_, 2, t, 0);
          }
          return this.flatInteriorPoints_;
        }
        getFlatInteriorPoints() {
          if (!this.flatInteriorPoints_) {
            const t = rm(this.flatCoordinates_, this.ends_), e = Ld(this.flatCoordinates_, 0, t, 2);
            this.flatInteriorPoints_ = _c(this.flatCoordinates_, 0, t, 2, e);
          }
          return this.flatInteriorPoints_;
        }
        getFlatMidpoint() {
          return this.flatMidpoints_ || (this.flatMidpoints_ = sa(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, 0.5)), this.flatMidpoints_;
        }
        getFlatMidpoints() {
          if (!this.flatMidpoints_) {
            this.flatMidpoints_ = [];
            const t = this.flatCoordinates_;
            let e = 0;
            const s = this.ends_;
            for (let i = 0, r = s.length; i < r; ++i) {
              const o = s[i], a = sa(t, e, o, 2, 0.5);
              pe(this.flatMidpoints_, a), e = o;
            }
          }
          return this.flatMidpoints_;
        }
        getId() {
          return this.id_;
        }
        getOrientedFlatCoordinates() {
          return this.flatCoordinates_;
        }
        getGeometry() {
          return this;
        }
        getSimplifiedGeometry(t) {
          return this;
        }
        simplifyTransformed(t, e) {
          return this;
        }
        getProperties() {
          return this.properties_;
        }
        getPropertiesInternal() {
          return this.properties_;
        }
        getStride() {
          return this.stride_;
        }
        getStyleFunction() {
          return this.styleFunction;
        }
        getType() {
          return this.type_;
        }
        transform(t) {
          t = It(t);
          const e = t.getExtent(), s = t.getWorldExtent();
          if (e && s) {
            const i = Wt(s) / Wt(e);
            vn(Od, s[0], s[3], i, -i, 0, 0, 0), $n(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, Od, this.flatCoordinates_);
          }
        }
        applyTransform(t) {
          t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
        }
        clone() {
          var t;
          return new Qe(this.type_, this.flatCoordinates_.slice(), (t = this.ends_) == null ? void 0 : t.slice(), this.stride_, Object.assign({}, this.properties_), this.id_);
        }
        getEnds() {
          return this.ends_;
        }
        enableSimplifyTransformed() {
          return this.simplifyTransformed = Cu((t, e) => {
            if (t === this.squaredTolerance_) return this.simplifiedGeometry_;
            this.simplifiedGeometry_ = this.clone(), e && this.simplifiedGeometry_.applyTransform(e);
            const s = this.simplifiedGeometry_.getFlatCoordinates();
            let i;
            switch (this.type_) {
              case "LineString":
                s.length = ko(s, 0, this.simplifiedGeometry_.flatCoordinates_.length, this.simplifiedGeometry_.stride_, t, s, 0), i = [s.length];
                break;
              case "MultiLineString":
                i = [], s.length = gc(s, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, t, s, 0, i);
                break;
              case "Polygon":
                i = [], s.length = Ch(s, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, Math.sqrt(t), s, 0, i);
                break;
            }
            return i && (this.simplifiedGeometry_ = new Qe(this.type_, s, i, 2, this.properties_, this.id_)), this.squaredTolerance_ = t, this.simplifiedGeometry_;
          }), this;
        }
      }
      Qe.prototype.getFlatCoordinates = Qe.prototype.getOrientedFlatCoordinates;
      class Nd extends $e {
        constructor(t) {
          super(), this.projection = It(t.projection), this.attributions_ = Fd(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible ?? !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
          const e = this;
          this.viewPromise_ = new Promise(function(s, i) {
            e.viewResolver = s, e.viewRejector = i;
          });
        }
        getAttributions() {
          return this.attributions_;
        }
        getAttributionsCollapsible() {
          return this.attributionsCollapsible_;
        }
        getProjection() {
          return this.projection;
        }
        getResolutions(t) {
          return null;
        }
        getView() {
          return this.viewPromise_;
        }
        getState() {
          return this.state_;
        }
        getWrapX() {
          return this.wrapX_;
        }
        getInterpolate() {
          return this.interpolate_;
        }
        refresh() {
          this.changed();
        }
        setAttributions(t) {
          this.attributions_ = Fd(t), this.changed();
        }
        setState(t) {
          this.state_ = t, this.changed();
        }
      }
      function Fd(n) {
        return n ? typeof n == "function" ? n : (Array.isArray(n) || (n = [n]), (t) => n) : null;
      }
      const je = { ADDFEATURE: "addfeature", CHANGEFEATURE: "changefeature", CLEAR: "clear", REMOVEFEATURE: "removefeature", FEATURESLOADSTART: "featuresloadstart", FEATURESLOADEND: "featuresloadend", FEATURESLOADERROR: "featuresloaderror" };
      function j0(n, t) {
        return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
      }
      let W0 = !1;
      function Y0(n, t, e, s, i, r, o) {
        const a = new XMLHttpRequest();
        a.open("GET", typeof n == "function" ? n(e, s, i) : n, !0), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = W0, a.onload = function(h) {
          if (!a.status || a.status >= 200 && a.status < 300) {
            const l = t.getType();
            try {
              let u;
              l == "text" || l == "json" ? u = a.responseText : l == "xml" ? u = a.responseXML || a.responseText : l == "arraybuffer" && (u = a.response), u ? r(t.readFeatures(u, { extent: e, featureProjection: i }), t.readProjection(u)) : o();
            } catch {
              o();
            }
          } else o();
        }, a.onerror = o, a.send();
      }
      function kd(n, t) {
        return function(e, s, i, r, o) {
          const a = this;
          Y0(n, t, e, s, i, function(h, l) {
            a.addFeatures(h), r !== void 0 && r(h);
          }, o || Js);
        };
      }
      class is extends En {
        constructor(t, e, s) {
          super(t), this.feature = e, this.features = s;
        }
      }
      class X0 extends Nd {
        constructor(t) {
          t = t || {}, super({ attributions: t.attributions, interpolate: !0, projection: void 0, state: "ready", wrapX: t.wrapX !== void 0 ? t.wrapX : !0 }), this.on, this.once, this.un, this.loader_ = Js, this.format_ = t.format || null, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (wt(this.format_, "`format` must be set when `url` is set"), this.loader_ = kd(this.url_, this.format_)), this.strategy_ = t.strategy !== void 0 ? t.strategy : j0;
          const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
          this.featuresRtree_ = e ? new Pd() : null, this.loadedExtentsRtree_ = new Pd(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
          let s, i;
          Array.isArray(t.features) ? i = t.features : t.features && (s = t.features, i = s.getArray()), !e && s === void 0 && (s = new on(i)), i !== void 0 && this.addFeaturesInternal(i), s !== void 0 && this.bindFeaturesCollection_(s);
        }
        addFeature(t) {
          this.addFeatureInternal(t), this.changed();
        }
        addFeatureInternal(t) {
          const e = vt(t);
          if (!this.addToIndex_(e, t)) {
            this.featuresCollection_ && this.featuresCollection_.remove(t);
            return;
          }
          this.setupChangeEvents_(e, t);
          const s = t.getGeometry();
          if (s) {
            const i = s.getExtent();
            this.featuresRtree_ && this.featuresRtree_.insert(i, t);
          } else this.nullGeometryFeatures_[e] = t;
          this.dispatchEvent(new is(je.ADDFEATURE, t));
        }
        setupChangeEvents_(t, e) {
          e instanceof Qe || (this.featureChangeKeys_[t] = [xt(e, lt.CHANGE, this.handleFeatureChange_, this), xt(e, Hs.PROPERTYCHANGE, this.handleFeatureChange_, this)]);
        }
        addToIndex_(t, e) {
          let s = !0;
          if (e.getId() !== void 0) {
            const i = String(e.getId());
            if (!(i in this.idIndex_)) this.idIndex_[i] = e;
            else if (e instanceof Qe) {
              const r = this.idIndex_[i];
              r instanceof Qe ? Array.isArray(r) ? r.push(e) : this.idIndex_[i] = [r, e] : s = !1;
            } else s = !1;
          }
          return s && (wt(!(t in this.uidIndex_), "The passed `feature` was already added to the source"), this.uidIndex_[t] = e), s;
        }
        addFeatures(t) {
          this.addFeaturesInternal(t), this.changed();
        }
        addFeaturesInternal(t) {
          const e = [], s = [], i = [];
          for (let r = 0, o = t.length; r < o; r++) {
            const a = t[r], h = vt(a);
            this.addToIndex_(h, a) && s.push(a);
          }
          for (let r = 0, o = s.length; r < o; r++) {
            const a = s[r], h = vt(a);
            this.setupChangeEvents_(h, a);
            const l = a.getGeometry();
            if (l) {
              const u = l.getExtent();
              e.push(u), i.push(a);
            } else this.nullGeometryFeatures_[h] = a;
          }
          if (this.featuresRtree_ && this.featuresRtree_.load(e, i), this.hasListener(je.ADDFEATURE)) for (let r = 0, o = s.length; r < o; r++) this.dispatchEvent(new is(je.ADDFEATURE, s[r]));
        }
        bindFeaturesCollection_(t) {
          let e = !1;
          this.addEventListener(je.ADDFEATURE, function(s) {
            e || (e = !0, t.push(s.feature), e = !1);
          }), this.addEventListener(je.REMOVEFEATURE, function(s) {
            e || (e = !0, t.remove(s.feature), e = !1);
          }), t.addEventListener(we.ADD, (s) => {
            e || (e = !0, this.addFeature(s.element), e = !1);
          }), t.addEventListener(we.REMOVE, (s) => {
            e || (e = !0, this.removeFeature(s.element), e = !1);
          }), this.featuresCollection_ = t;
        }
        clear(t) {
          if (t) {
            for (const s in this.featureChangeKeys_) this.featureChangeKeys_[s].forEach(At);
            this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
          } else if (this.featuresRtree_) {
            this.featuresRtree_.forEach((s) => {
              this.removeFeatureInternal(s);
            });
            for (const s in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[s]);
          }
          this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
          const e = new is(je.CLEAR);
          this.dispatchEvent(e), this.changed();
        }
        forEachFeature(t) {
          if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
          this.featuresCollection_ && this.featuresCollection_.forEach(t);
        }
        forEachFeatureAtCoordinateDirect(t, e) {
          const s = [t[0], t[1], t[0], t[1]];
          return this.forEachFeatureInExtent(s, function(i) {
            const r = i.getGeometry();
            if (r instanceof Qe || r.intersectsCoordinate(t)) return e(i);
          });
        }
        forEachFeatureInExtent(t, e) {
          if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e);
          this.featuresCollection_ && this.featuresCollection_.forEach(e);
        }
        forEachFeatureIntersectingExtent(t, e) {
          return this.forEachFeatureInExtent(t, function(s) {
            const i = s.getGeometry();
            if (i instanceof Qe || i.intersectsExtent(t)) {
              const r = e(s);
              if (r) return r;
            }
          });
        }
        getFeaturesCollection() {
          return this.featuresCollection_;
        }
        getFeatures() {
          let t;
          return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), Qs(this.nullGeometryFeatures_) || pe(t, Object.values(this.nullGeometryFeatures_))), t;
        }
        getFeaturesAtCoordinate(t) {
          const e = [];
          return this.forEachFeatureAtCoordinateDirect(t, function(s) {
            e.push(s);
          }), e;
        }
        getFeaturesInExtent(t, e) {
          if (this.featuresRtree_) {
            if (!(e && e.canWrapX() && this.getWrapX())) return this.featuresRtree_.getInExtent(t);
            const s = bo(t, e);
            return [].concat(...s.map((i) => this.featuresRtree_.getInExtent(i)));
          }
          return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
        }
        getClosestFeatureToCoordinate(t, e) {
          const s = t[0], i = t[1];
          let r = null;
          const o = [NaN, NaN];
          let a = 1 / 0;
          const h = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
          return e = e || tr, this.featuresRtree_.forEachInExtent(h, function(l) {
            if (e(l)) {
              const u = l.getGeometry(), c = a;
              if (a = u instanceof Qe ? 0 : u.closestPointXY(s, i, o, a), a < c) {
                r = l;
                const d = Math.sqrt(a);
                h[0] = s - d, h[1] = i - d, h[2] = s + d, h[3] = i + d;
              }
            }
          }), r;
        }
        getExtent(t) {
          return this.featuresRtree_.getExtent(t);
        }
        getFeatureById(t) {
          const e = this.idIndex_[t.toString()];
          return e !== void 0 ? e : null;
        }
        getFeatureByUid(t) {
          const e = this.uidIndex_[t];
          return e !== void 0 ? e : null;
        }
        getFormat() {
          return this.format_;
        }
        getOverlaps() {
          return this.overlaps_;
        }
        getUrl() {
          return this.url_;
        }
        handleFeatureChange_(t) {
          const e = t.target, s = vt(e), i = e.getGeometry();
          if (!i) s in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[s] = e);
          else {
            const o = i.getExtent();
            s in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[s], this.featuresRtree_ && this.featuresRtree_.insert(o, e)) : this.featuresRtree_ && this.featuresRtree_.update(o, e);
          }
          const r = e.getId();
          if (r !== void 0) {
            const o = r.toString();
            this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), this.idIndex_[o] = e);
          } else this.removeFromIdIndex_(e), this.uidIndex_[s] = e;
          this.changed(), this.dispatchEvent(new is(je.CHANGEFEATURE, e));
        }
        hasFeature(t) {
          const e = t.getId();
          return e !== void 0 ? e in this.idIndex_ : vt(t) in this.uidIndex_;
        }
        isEmpty() {
          return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && Qs(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
        }
        loadFeatures(t, e, s) {
          const i = this.loadedExtentsRtree_, r = this.strategy_(t, e, s);
          for (let o = 0, a = r.length; o < a; ++o) {
            const h = r[o];
            i.forEachInExtent(h, function(l) {
              return qn(l.extent, h);
            }) || (++this.loadingExtentsCount_, this.dispatchEvent(new is(je.FEATURESLOADSTART)), this.loader_.call(this, h, e, s, (l) => {
              --this.loadingExtentsCount_, this.dispatchEvent(new is(je.FEATURESLOADEND, void 0, l));
            }, () => {
              --this.loadingExtentsCount_, this.dispatchEvent(new is(je.FEATURESLOADERROR));
            }), i.insert(h, { extent: h.slice() }));
          }
          this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
        }
        refresh() {
          this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
        }
        removeLoadedExtent(t) {
          const e = this.loadedExtentsRtree_, s = e.forEachInExtent(t, function(i) {
            if (ii(i.extent, t)) return i;
          });
          s && e.remove(s);
        }
        removeFeatures(t) {
          let e = !1;
          for (let s = 0, i = t.length; s < i; ++s) e = this.removeFeatureInternal(t[s]) || e;
          e && this.changed();
        }
        removeFeature(t) {
          t && this.removeFeatureInternal(t) && this.changed();
        }
        removeFeatureInternal(t) {
          const e = vt(t);
          if (!(e in this.uidIndex_)) return !1;
          e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t);
          const s = this.featureChangeKeys_[e];
          s == null || s.forEach(At), delete this.featureChangeKeys_[e];
          const i = t.getId();
          if (i !== void 0) {
            const r = i.toString(), o = this.idIndex_[r];
            o === t ? delete this.idIndex_[r] : Array.isArray(o) && (o.splice(o.indexOf(t), 1), o.length === 1 && (this.idIndex_[r] = o[0]));
          }
          return delete this.uidIndex_[e], this.hasListener(je.REMOVEFEATURE) && this.dispatchEvent(new is(je.REMOVEFEATURE, t)), !0;
        }
        removeFromIdIndex_(t) {
          for (const e in this.idIndex_) if (this.idIndex_[e] === t) {
            delete this.idIndex_[e];
            break;
          }
        }
        setLoader(t) {
          this.loader_ = t;
        }
        setUrl(t) {
          wt(this.format_, "`format` must be set when `url` is set"), this.url_ = t, this.setLoader(kd(t, this.format_));
        }
        setOverlaps(t) {
          this.overlaps_ = t, this.changed();
        }
      }
      function q0(n, t) {
        const e = n.canvas;
        t = t || {};
        const s = t.pixelRatio || jo, i = t.size;
        i && (e.width = i[0] * s, e.height = i[1] * s, e.style.width = i[0] + "px", e.style.height = i[1] + "px");
        const r = [0, 0, e.width, e.height], o = Up(Ue(), s, s);
        return new pl(n, s, r, o, 0);
      }
      function V0(n) {
        if (!(n.context instanceof CanvasRenderingContext2D)) throw new Error("Only works for render events from Canvas 2D layers");
        const t = n.inversePixelTransform[0], e = n.inversePixelTransform[1], s = Math.sqrt(t * t + e * e), i = n.frameState, r = ac(n.inversePixelTransform.slice(), i.coordinateToPixelTransform), o = ml(i.viewState.resolution, s);
        let a;
        return new pl(n.context, s, i.extent, r, i.viewState.rotation, o, a);
      }
      function $0(n, t) {
        return Vt(n.inversePixelTransform, t.slice(0));
      }
      const Z0 = Object.freeze(Object.defineProperty({ __proto__: null, getRenderPixel: $0, getVectorContext: V0, toContext: q0 }, Symbol.toStringTag, { value: "Module" }));
      function ha() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }
      function yl(n, t, e, s, i, r, o) {
        o = o ?? ha();
        const a = 1 / (n - t), h = 1 / (e - s), l = 1 / (i - r);
        return o[0] = -2 * a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = -2 * h, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 2 * l, o[11] = 0, o[12] = (n + t) * a, o[13] = (s + e) * h, o[14] = (r + i) * l, o[15] = 1, o;
      }
      function Dd(n, t, e, s, i) {
        return i = i ?? ha(), i[0] = n[0] * t, i[1] = n[1] * t, i[2] = n[2] * t, i[3] = n[3] * t, i[4] = n[4] * e, i[5] = n[5] * e, i[6] = n[6] * e, i[7] = n[7] * e, i[8] = n[8] * s, i[9] = n[9] * s, i[10] = n[10] * s, i[11] = n[11] * s, i[12] = n[12], i[13] = n[13], i[14] = n[14], i[15] = n[15], i;
      }
      function K0(n, t, e, s, i) {
        i = i ?? ha();
        let r, o, a, h, l, u, c, d, p, f, y, E;
        return n === i ? (i[12] = n[0] * t + n[4] * e + n[8] * s + n[12], i[13] = n[1] * t + n[5] * e + n[9] * s + n[13], i[14] = n[2] * t + n[6] * e + n[10] * s + n[14], i[15] = n[3] * t + n[7] * e + n[11] * s + n[15]) : (r = n[0], o = n[1], a = n[2], h = n[3], l = n[4], u = n[5], c = n[6], d = n[7], p = n[8], f = n[9], y = n[10], E = n[11], i[0] = r, i[1] = o, i[2] = a, i[3] = h, i[4] = l, i[5] = u, i[6] = c, i[7] = d, i[8] = p, i[9] = f, i[10] = y, i[11] = E, i[12] = r * t + l * e + p * s + n[12], i[13] = o * t + u * e + f * s + n[13], i[14] = a * t + c * e + y * s + n[14], i[15] = h * t + d * e + E * s + n[15]), i;
      }
      function H0(n, t, e, s) {
        return s = s ?? ha(), s[0] = 1, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 1, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 1, s[11] = 0, s[12] = n, s[13] = t, s[14] = e, s[15] = 1, s;
      }
      const Gd = 0.5;
      class xl extends co {
        constructor(t, e, s) {
          super(), s = s || {}, this.tileCoord = t, this.state = e, this.key = "", this.transition_ = s.transition === void 0 ? 250 : s.transition, this.transitionStarts_ = {}, this.interpolate = !!s.interpolate;
        }
        changed() {
          this.dispatchEvent(lt.CHANGE);
        }
        release() {
          this.state === Z.ERROR && this.setState(Z.EMPTY);
        }
        getKey() {
          return this.key + "/" + this.tileCoord;
        }
        getTileCoord() {
          return this.tileCoord;
        }
        getState() {
          return this.state;
        }
        setState(t) {
          if (this.state !== Z.ERROR && this.state > t) throw new Error("Tile load sequence violation");
          this.state = t, this.changed();
        }
        load() {
          dt();
        }
        getAlpha(t, e) {
          if (!this.transition_) return 1;
          let s = this.transitionStarts_[t];
          if (!s) s = e, this.transitionStarts_[t] = s;
          else if (s === -1) return 1;
          const i = e - s + 1e3 / 60;
          return i >= this.transition_ ? 1 : oc(i / this.transition_);
        }
        inTransition(t) {
          return this.transition_ ? this.transitionStarts_[t] !== -1 : !1;
        }
        endTransition(t) {
          this.transition_ && (this.transitionStarts_[t] = -1);
        }
        disposeInternal() {
          this.release(), super.disposeInternal();
        }
      }
      function la(n) {
        return n instanceof Image || n instanceof HTMLCanvasElement || n instanceof HTMLVideoElement || n instanceof ImageBitmap ? n : null;
      }
      function J0(n) {
        return n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Float32Array || n instanceof DataView ? n : null;
      }
      const Q0 = new Error("disposed");
      let Ri = null;
      function ty(n) {
        Ri || (Ri = Yt(n.width, n.height, void 0, { willReadFrequently: !0 }));
        const t = Ri.canvas, e = n.width;
        t.width !== e && (t.width = e);
        const s = n.height;
        return t.height !== s && (t.height = s), Ri.clearRect(0, 0, e, s), Ri.drawImage(n, 0, 0), Ri.getImageData(0, 0, e, s).data;
      }
      const ey = [256, 256];
      class El extends xl {
        constructor(t) {
          const e = Z.IDLE;
          super(t.tileCoord, e, { transition: t.transition, interpolate: t.interpolate }), this.loader_ = t.loader, this.data_ = null, this.error_ = null, this.size_ = t.size || null, this.controller_ = t.controller || null;
        }
        getSize() {
          if (this.size_) return this.size_;
          const t = la(this.data_);
          return t ? [t.width, t.height] : ey;
        }
        getData() {
          return this.data_;
        }
        getError() {
          return this.error_;
        }
        load() {
          if (this.state !== Z.IDLE && this.state !== Z.ERROR) return;
          this.state = Z.LOADING, this.changed();
          const t = this;
          this.loader_().then(function(e) {
            t.data_ = e, t.state = Z.LOADED, t.changed();
          }).catch(function(e) {
            t.error_ = e, t.state = Z.ERROR, t.changed();
          });
        }
        disposeInternal() {
          this.controller_ && (this.controller_.abort(Q0), this.controller_ = null), super.disposeInternal();
        }
      }
      const ny = 10, zd = 0.25;
      class Ud {
        constructor(t, e, s, i, r, o, a) {
          this.sourceProj_ = t, this.targetProj_ = e;
          let h = {};
          const l = a ? fh((C) => Vt(a, tc(C, this.targetProj_, this.sourceProj_))) : ai(this.targetProj_, this.sourceProj_);
          this.transformInv_ = function(C) {
            const v = C[0] + "/" + C[1];
            return h[v] || (h[v] = l(C)), h[v];
          }, this.maxSourceExtent_ = i, this.errorThresholdSquared_ = r * r, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!i && !!this.sourceProj_.getExtent() && pt(i) >= pt(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? pt(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? pt(this.targetProj_.getExtent()) : null;
          const u = an(s), c = ar(s), d = or(s), p = rr(s), f = this.transformInv_(u), y = this.transformInv_(c), E = this.transformInv_(d), M = this.transformInv_(p), w = ny + (o ? Math.max(0, Math.ceil(Math.log2(Ts(s) / (o * o * 256 * 256)))) : 0);
          if (this.addQuad_(u, c, d, p, f, y, E, M, w), this.wrapsXInSource_) {
            let C = 1 / 0;
            this.triangles_.forEach(function(v, R, I) {
              C = Math.min(C, v.source[0][0], v.source[1][0], v.source[2][0]);
            }), this.triangles_.forEach((v) => {
              if (Math.max(v.source[0][0], v.source[1][0], v.source[2][0]) - C > this.sourceWorldWidth_ / 2) {
                const R = [[v.source[0][0], v.source[0][1]], [v.source[1][0], v.source[1][1]], [v.source[2][0], v.source[2][1]]];
                R[0][0] - C > this.sourceWorldWidth_ / 2 && (R[0][0] -= this.sourceWorldWidth_), R[1][0] - C > this.sourceWorldWidth_ / 2 && (R[1][0] -= this.sourceWorldWidth_), R[2][0] - C > this.sourceWorldWidth_ / 2 && (R[2][0] -= this.sourceWorldWidth_);
                const I = Math.min(R[0][0], R[1][0], R[2][0]);
                Math.max(R[0][0], R[1][0], R[2][0]) - I < this.sourceWorldWidth_ / 2 && (v.source = R);
              }
            });
          }
          h = {};
        }
        addTriangle_(t, e, s, i, r, o) {
          this.triangles_.push({ source: [i, r, o], target: [t, e, s] });
        }
        addQuad_(t, e, s, i, r, o, a, h, l) {
          const u = Qa([r, o, a, h]), c = this.sourceWorldWidth_ ? pt(u) / this.sourceWorldWidth_ : null, d = this.sourceWorldWidth_, p = this.sourceProj_.canWrapX() && c > 0.5 && c < 1;
          let f = !1;
          if (l > 0) {
            if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
              const E = Qa([t, e, s, i]);
              f = pt(E) / this.targetWorldWidth_ > zd || f;
            }
            !p && this.sourceProj_.isGlobal() && c && (f = c > zd || f);
          }
          if (!f && this.maxSourceExtent_ && isFinite(u[0]) && isFinite(u[1]) && isFinite(u[2]) && isFinite(u[3]) && !re(u, this.maxSourceExtent_)) return;
          let y = 0;
          if (!f && (!isFinite(r[0]) || !isFinite(r[1]) || !isFinite(o[0]) || !isFinite(o[1]) || !isFinite(a[0]) || !isFinite(a[1]) || !isFinite(h[0]) || !isFinite(h[1]))) {
            if (l > 0) f = !0;
            else if (y = (!isFinite(r[0]) || !isFinite(r[1]) ? 8 : 0) + (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) + (!isFinite(a[0]) || !isFinite(a[1]) ? 2 : 0) + (!isFinite(h[0]) || !isFinite(h[1]) ? 1 : 0), y != 1 && y != 2 && y != 4 && y != 8) return;
          }
          if (l > 0) {
            if (!f) {
              const E = [(t[0] + s[0]) / 2, (t[1] + s[1]) / 2], M = this.transformInv_(E);
              let w;
              p ? w = (ti(r[0], d) + ti(a[0], d)) / 2 - ti(M[0], d) : w = (r[0] + a[0]) / 2 - M[0];
              const C = (r[1] + a[1]) / 2 - M[1];
              f = w * w + C * C > this.errorThresholdSquared_;
            }
            if (f) {
              if (Math.abs(t[0] - s[0]) <= Math.abs(t[1] - s[1])) {
                const E = [(e[0] + s[0]) / 2, (e[1] + s[1]) / 2], M = this.transformInv_(E), w = [(i[0] + t[0]) / 2, (i[1] + t[1]) / 2], C = this.transformInv_(w);
                this.addQuad_(t, e, E, w, r, o, M, C, l - 1), this.addQuad_(w, E, s, i, C, M, a, h, l - 1);
              } else {
                const E = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], M = this.transformInv_(E), w = [(s[0] + i[0]) / 2, (s[1] + i[1]) / 2], C = this.transformInv_(w);
                this.addQuad_(t, E, w, i, r, M, C, h, l - 1), this.addQuad_(E, e, s, w, M, o, a, C, l - 1);
              }
              return;
            }
          }
          if (p) {
            if (!this.canWrapXInSource_) return;
            this.wrapsXInSource_ = !0;
          }
          y & 11 || this.addTriangle_(t, s, i, r, a, h), y & 14 || this.addTriangle_(t, s, e, r, a, o), y && (y & 13 || this.addTriangle_(e, i, t, o, h, r), y & 7 || this.addTriangle_(e, i, s, o, h, a));
        }
        calculateSourceExtent() {
          const t = Se();
          return this.triangles_.forEach(function(e, s, i) {
            const r = e.source;
            bs(t, r[0]), bs(t, r[1]), bs(t, r[2]);
          }), t;
        }
        getTriangles() {
          return this.triangles_;
        }
      }
      let Ml;
      const Ci = [];
      function Bd(n, t, e, s, i) {
        n.beginPath(), n.moveTo(0, 0), n.lineTo(t, e), n.lineTo(s, i), n.closePath(), n.save(), n.clip(), n.fillRect(0, 0, Math.max(t, s) + 1, Math.max(e, i)), n.restore();
      }
      function wl(n, t) {
        return Math.abs(n[t * 4] - 210) > 2 || Math.abs(n[t * 4 + 3] - 0.75 * 255) > 2;
      }
      function sy() {
        if (Ml === void 0) {
          const n = Yt(6, 6, Ci);
          n.globalCompositeOperation = "lighter", n.fillStyle = "rgba(210, 0, 0, 0.75)", Bd(n, 4, 5, 4, 0), Bd(n, 4, 5, 0, 5);
          const t = n.getImageData(0, 0, 3, 3).data;
          Ml = wl(t, 0) || wl(t, 4) || wl(t, 8), Xo(n), Ci.push(n.canvas);
        }
        return Ml;
      }
      function jd(n, t, e, s) {
        const i = tc(e, t, n);
        let r = uh(t, s, e);
        const o = t.getMetersPerUnit();
        o !== void 0 && (r *= o);
        const a = n.getMetersPerUnit();
        a !== void 0 && (r /= a);
        const h = n.getExtent();
        if (!h || Cs(h, i)) {
          const l = uh(n, r, i) / r;
          isFinite(l) && l > 0 && (r /= l);
        }
        return r;
      }
      function Wd(n, t, e, s) {
        const i = wn(e);
        let r = jd(n, t, i, s);
        return (!isFinite(r) || r <= 0) && Ro(e, function(o) {
          return r = jd(n, t, o, s), isFinite(r) && r > 0;
        }), r;
      }
      function iy(n, t, e, s, i, r, o, a, h, l, u, c, d, p) {
        const f = Yt(Math.round(e * n), Math.round(e * t), Ci);
        if (c || (f.imageSmoothingEnabled = !1), h.length === 0) return f.canvas;
        f.scale(e, e);
        function y(R) {
          return Math.round(R * e) / e;
        }
        f.globalCompositeOperation = "lighter";
        const E = Se();
        h.forEach(function(R, I, O) {
          ir(E, R.extent);
        });
        let M;
        const w = e / s, C = (c ? 1 : 1 + Math.pow(2, -24)) / w;
        M = Yt(Math.round(pt(E) * w), Math.round(Wt(E) * w), Ci), c || (M.imageSmoothingEnabled = !1), h.forEach(function(R, I, O) {
          if (R.image.width > 0 && R.image.height > 0) {
            if (R.clipExtent) {
              M.save();
              const k = (R.clipExtent[0] - E[0]) * w, J = -(R.clipExtent[3] - E[3]) * w, V = pt(R.clipExtent) * w, Y = Wt(R.clipExtent) * w;
              M.rect(c ? k : Math.round(k), c ? J : Math.round(J), c ? V : Math.round(k + V) - Math.round(k), c ? Y : Math.round(J + Y) - Math.round(J)), M.clip();
            }
            const A = (R.extent[0] - E[0]) * w, P = -(R.extent[3] - E[3]) * w, F = pt(R.extent) * w, z = Wt(R.extent) * w;
            M.drawImage(R.image, l, l, R.image.width - 2 * l, R.image.height - 2 * l, c ? A : Math.round(A), c ? P : Math.round(P), c ? F : Math.round(A + F) - Math.round(A), c ? z : Math.round(P + z) - Math.round(P)), R.clipExtent && M.restore();
          }
        });
        const v = an(o);
        return a.getTriangles().forEach(function(R, I, O) {
          const A = R.source, P = R.target;
          let F = A[0][0], z = A[0][1], k = A[1][0], J = A[1][1], V = A[2][0], Y = A[2][1];
          const Q = y((P[0][0] - v[0]) / r), B = y(-(P[0][1] - v[1]) / r), it = y((P[1][0] - v[0]) / r), ot = y(-(P[1][1] - v[1]) / r), H = y((P[2][0] - v[0]) / r), X = y(-(P[2][1] - v[1]) / r), mt = F, et = z;
          F = 0, z = 0, k -= mt, J -= et, V -= mt, Y -= et;
          const b = [[k, J, 0, 0, it - Q], [V, Y, 0, 0, H - Q], [0, 0, k, J, ot - B], [0, 0, V, Y, X - B]], at = Ug(b);
          if (!at) return;
          if (f.save(), f.beginPath(), sy() || !c) {
            f.moveTo(it, ot);
            const Ut = 4, Xt = Q - it, en = B - ot;
            for (let Bt = 0; Bt < Ut; Bt++) f.lineTo(it + y((Bt + 1) * Xt / Ut), ot + y(Bt * en / (Ut - 1))), Bt != Ut - 1 && f.lineTo(it + y((Bt + 1) * Xt / Ut), ot + y((Bt + 1) * en / (Ut - 1)));
            f.lineTo(H, X);
          } else f.moveTo(it, ot), f.lineTo(Q, B), f.lineTo(H, X);
          f.clip(), f.transform(at[0], at[2], at[1], at[3], Q, B), f.translate(E[0] - mt, E[3] - et);
          let Pt;
          if (M) Pt = M.canvas, f.scale(C, -C);
          else {
            const Ut = h[0], Xt = Ut.extent;
            Pt = Ut.image, f.scale(pt(Xt) / Pt.width, -Wt(Xt) / Pt.height);
          }
          f.drawImage(Pt, 0, 0), f.restore();
        }), M && (Xo(M), Ci.push(M.canvas)), u && (f.save(), f.globalCompositeOperation = "source-over", f.strokeStyle = "black", f.lineWidth = 1, a.getTriangles().forEach(function(R, I, O) {
          const A = R.target, P = (A[0][0] - v[0]) / r, F = -(A[0][1] - v[1]) / r, z = (A[1][0] - v[0]) / r, k = -(A[1][1] - v[1]) / r, J = (A[2][0] - v[0]) / r, V = -(A[2][1] - v[1]) / r;
          f.beginPath(), f.moveTo(z, k), f.lineTo(P, F), f.lineTo(J, V), f.closePath(), f.stroke();
        }), f.restore()), f.canvas;
      }
      const ry = `
  attribute vec4 a_position;
  attribute vec4 a_texcoord;

  uniform mat4 u_matrix;
  uniform mat4 u_textureMatrix;

  varying vec2 v_texcoord;

  void main() {
    gl_Position = u_matrix * a_position;
    vec2 texcoord = (u_textureMatrix * a_texcoord).xy;
    v_texcoord = texcoord;
  }
`, oy = `
  precision mediump float;

  varying vec2 v_texcoord;

  uniform sampler2D u_texture;

  void main() {
    if (
      v_texcoord.x < 0.0 ||
      v_texcoord.y < 0.0 ||
      v_texcoord.x > 1.0 ||
      v_texcoord.y > 1.0
    ) {
      discard;
    }
    gl_FragColor = texture2D(u_texture, v_texcoord);
  }
`;
      class ay {
        constructor(t) {
          this.gl_ = t, this.program_ = Sl(t, oy, ry), this.positionLocation = t.getAttribLocation(this.program_, "a_position"), this.texcoordLocation = t.getAttribLocation(this.program_, "a_texcoord"), this.matrixLocation = t.getUniformLocation(this.program_, "u_matrix"), this.textureMatrixLocation = t.getUniformLocation(this.program_, "u_textureMatrix"), this.textureLocation = t.getUniformLocation(this.program_, "u_texture"), this.positionBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.positionBuffer), this.positions = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.positions), t.STATIC_DRAW), this.texcoordBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.texcoordBuffer), this.texcoords = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.texcoords), t.STATIC_DRAW);
        }
        drawImage(t, e, s, i, r, o, a, h, l, u, c, d, p) {
          const f = this.gl_;
          h === void 0 && (h = i), l === void 0 && (l = r), o === void 0 && (o = e), a === void 0 && (a = s), u === void 0 && (u = o), c === void 0 && (c = a), d === void 0 && (d = f.canvas.width), p === void 0 && (p = f.canvas.height), f.bindTexture(f.TEXTURE_2D, t), f.useProgram(this.program_), f.bindBuffer(f.ARRAY_BUFFER, this.positionBuffer), f.enableVertexAttribArray(this.positionLocation), f.vertexAttribPointer(this.positionLocation, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ARRAY_BUFFER, this.texcoordBuffer), f.enableVertexAttribArray(this.texcoordLocation), f.vertexAttribPointer(this.texcoordLocation, 2, f.FLOAT, !1, 0, 0);
          let y = yl(0, d, 0, p, -1, 1);
          y = K0(y, h, l, 0), y = Dd(y, u, c, 1), f.uniformMatrix4fv(this.matrixLocation, !1, y);
          let E = H0(i / e, r / s, 0);
          E = Dd(E, o / e, a / s, 1), f.uniformMatrix4fv(this.textureMatrixLocation, !1, E), f.uniform1i(this.textureLocation, 0), f.drawArrays(f.TRIANGLES, 0, this.positions.length / 2);
        }
      }
      function Yd(n, t, e) {
        const s = n.createShader(t);
        if (s === null) throw new Error("Shader compilation failed");
        if (n.shaderSource(s, e), n.compileShader(s), !n.getShaderParameter(s, n.COMPILE_STATUS)) {
          const i = n.getShaderInfoLog(s);
          throw i === null ? new Error("Shader info log creation failed") : new Error(i);
        }
        return s;
      }
      function Sl(n, t, e) {
        const s = n.createProgram(), i = Yd(n, n.VERTEX_SHADER, e), r = Yd(n, n.FRAGMENT_SHADER, t);
        if (s === null) throw new Error("Program creation failed");
        if (n.attachShader(s, i), n.attachShader(s, r), n.linkProgram(s), !n.getProgramParameter(s, n.LINK_STATUS)) throw n.getProgramInfoLog(s) === null ? new Error("Program info log creation failed") : new Error();
        return s;
      }
      const hy = `
  attribute vec4 a_position;

  uniform mat4 u_matrix;

  void main() {
     gl_Position = u_matrix * a_position;
  }
`, ly = `
  precision mediump float;

  uniform vec4 u_val;
  void main() {
     gl_FragColor = u_val;
  }
`, uy = `
  attribute vec4 a_position;
  attribute vec2 a_texcoord;

  varying vec2 v_texcoord;

  uniform mat4 u_matrix;

  void main() {
     gl_Position = u_matrix * a_position;
     v_texcoord = a_texcoord;
  }
`, cy = `
  precision mediump float;

  varying vec2 v_texcoord;

  uniform sampler2D u_texture;

  void main() {
    if (v_texcoord.x < 0.0 || v_texcoord.x > 1.0 || v_texcoord.y < 0.0 || v_texcoord.y > 1.0) {
      discard;
    }
    gl_FragColor = texture2D(u_texture, v_texcoord);
  }
`;
      function dy(n, t, e, s) {
        let i;
        return e.length ? i = e.shift() : Wo ? i = new OffscreenCanvas(n || 300, t || 300) : i = document.createElement("canvas"), n && (i.width = n), t && (i.height = t), i.getContext("webgl", s);
      }
      function fy(n) {
        const t = n.canvas;
        t.width = 1, t.height = 1, n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT | n.STENCIL_BUFFER_BIT);
      }
      const Xd = [];
      function gy(n, t, e, s, i, r, o, a, h, l, u, c, d, p) {
        const f = Math.round(s * t), y = Math.round(s * e);
        n.canvas.width = f, n.canvas.height = y;
        let E, M;
        if (M = n.createTexture(), n.bindTexture(n.TEXTURE_2D, M), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), d ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST)), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, f, y, 0, n.RGBA, u, null), E = n.createFramebuffer(), n.bindFramebuffer(n.FRAMEBUFFER, E), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, M, 0), E === null) throw new Error("Could not create framebuffer");
        if (M === null) throw new Error("Could not create texture");
        if (h.length === 0) return { width: f, height: y, framebuffer: E, texture: M };
        const w = Se();
        h.forEach(function(F, z, k) {
          ir(w, F.extent);
        });
        let C, v, R;
        const I = 1 / i;
        {
          if (C = n.createTexture(), M === null) throw new Error("Could not create texture");
          v = Math.round(pt(w) * I), R = Math.round(Wt(w) * I);
          const F = n.getParameter(n.MAX_TEXTURE_SIZE), z = Math.max(v, R), k = z > F ? F / z : 1, J = Math.round(v * k), V = Math.round(R * k);
          n.bindTexture(n.TEXTURE_2D, C), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), d ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST)), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, J, V, 0, n.RGBA, u, null);
          const Y = n.createFramebuffer();
          n.bindFramebuffer(n.FRAMEBUFFER, Y), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, C, 0);
          const Q = new ay(n);
          h.forEach(function(B, it, ot) {
            const H = (B.extent[0] - w[0]) * I * k, X = -(B.extent[3] - w[3]) * I * k, mt = pt(B.extent) * I * k, et = Wt(B.extent) * I * k;
            if (n.bindFramebuffer(n.FRAMEBUFFER, Y), n.viewport(0, 0, J, V), B.clipExtent) {
              const b = (B.clipExtent[0] - w[0]) * I * k, at = -(B.clipExtent[3] - w[3]) * I * k, Pt = pt(B.clipExtent) * I * k, Ut = Wt(B.clipExtent) * I * k;
              n.enable(n.SCISSOR_TEST), n.scissor(d ? b : Math.round(b), d ? at : Math.round(at), d ? Pt : Math.round(b + Pt) - Math.round(b), d ? Ut : Math.round(at + Ut) - Math.round(at));
            }
            Q.drawImage(B.texture, B.width, B.height, l, l, B.width - 2 * l, B.height - 2 * l, d ? H : Math.round(H), d ? X : Math.round(X), d ? mt : Math.round(H + mt) - Math.round(H), d ? et : Math.round(X + et) - Math.round(X), J, V), n.disable(n.SCISSOR_TEST);
          }), n.deleteFramebuffer(Y);
        }
        const O = an(o), A = an(w), P = (F) => {
          const z = (F[0][0] - O[0]) / r * s, k = -(F[0][1] - O[1]) / r * s, J = (F[1][0] - O[0]) / r * s, V = -(F[1][1] - O[1]) / r * s, Y = (F[2][0] - O[0]) / r * s, Q = -(F[2][1] - O[1]) / r * s;
          return { u1: J, v1: V, u0: z, v0: k, u2: Y, v2: Q };
        };
        n.bindFramebuffer(n.FRAMEBUFFER, E), n.viewport(0, 0, f, y);
        {
          const F = [], z = [], k = Sl(n, cy, uy);
          n.useProgram(k);
          const J = n.getUniformLocation(k, "u_texture");
          n.bindTexture(n.TEXTURE_2D, C), n.uniform1i(J, 0), a.getTriangles().forEach(function(H, X, mt) {
            const et = H.source, b = H.target, { u1: at, v1: Pt, u0: Ut, v0: Xt, u2: en, v2: Bt } = P(b), mn = (et[0][0] - A[0]) / i / v, us = -(et[0][1] - A[1]) / i / R, _n = (et[1][0] - A[0]) / i / v, Fn = -(et[1][1] - A[1]) / i / R, nn = (et[2][0] - A[0]) / i / v, de = -(et[2][1] - A[1]) / i / R;
            F.push(at, Pt, Ut, Xt, en, Bt), z.push(_n, Fn, mn, us, nn, de);
          });
          const V = yl(0, f, y, 0, -1, 1), Y = n.getUniformLocation(k, "u_matrix");
          n.uniformMatrix4fv(Y, !1, V);
          const Q = n.getAttribLocation(k, "a_position"), B = n.createBuffer();
          n.bindBuffer(n.ARRAY_BUFFER, B), n.bufferData(n.ARRAY_BUFFER, new Float32Array(F), n.STATIC_DRAW), n.vertexAttribPointer(Q, 2, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(Q);
          const it = n.getAttribLocation(k, "a_texcoord"), ot = n.createBuffer();
          n.bindBuffer(n.ARRAY_BUFFER, ot), n.bufferData(n.ARRAY_BUFFER, new Float32Array(z), n.STATIC_DRAW), n.vertexAttribPointer(it, 2, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(it), n.drawArrays(n.TRIANGLES, 0, F.length / 2);
        }
        if (c) {
          const F = Sl(n, ly, hy);
          n.useProgram(F);
          const z = yl(0, f, y, 0, -1, 1), k = n.getUniformLocation(F, "u_matrix");
          n.uniformMatrix4fv(k, !1, z);
          const J = Array.isArray(c) ? c : [0, 0, 0, 255], V = n.getUniformLocation(F, "u_val");
          n.uniform4fv(V, J);
          const Y = n.getAttribLocation(F, "a_position"), Q = n.createBuffer();
          n.bindBuffer(n.ARRAY_BUFFER, Q), n.vertexAttribPointer(Y, 2, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(Y);
          const B = a.getTriangles().reduce(function(it, ot) {
            const H = ot.target, { u1: X, v1: mt, u0: et, v0: b, u2: at, v2: Pt } = P(H);
            return it.concat([X, mt, et, b, et, b, at, Pt, at, Pt, X, mt]);
          }, []);
          n.bufferData(n.ARRAY_BUFFER, new Float32Array(B), n.STATIC_DRAW), n.drawArrays(n.LINES, 0, B.length / 2);
        }
        return { width: f, height: y, framebuffer: E, texture: M };
      }
      class py extends El {
        constructor(t) {
          super({ tileCoord: t.tileCoord, loader: () => Promise.resolve(new Uint8ClampedArray(4)), interpolate: t.interpolate, transition: t.transition }), this.renderEdges_ = t.renderEdges !== void 0 ? t.renderEdges : !1, this.pixelRatio_ = t.pixelRatio, this.gutter_ = t.gutter, this.reprojData_ = null, this.reprojError_ = null, this.reprojSize_ = void 0, this.sourceTileGrid_ = t.sourceTileGrid, this.targetTileGrid_ = t.targetTileGrid, this.wrappedTileCoord_ = t.wrappedTileCoord || t.tileCoord, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0;
          const e = t.sourceProj, s = e.getExtent(), i = t.sourceTileGrid.getExtent();
          this.clipExtent_ = e.canWrapX() ? i ? Fe(s, i) : s : i;
          const r = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_), o = this.targetTileGrid_.getExtent();
          let a = this.sourceTileGrid_.getExtent();
          const h = o ? Fe(r, o) : r;
          if (Ts(h) === 0) {
            this.state = Z.EMPTY;
            return;
          }
          s && (a ? a = Fe(a, s) : a = s);
          const l = this.targetTileGrid_.getResolution(this.wrappedTileCoord_[0]), u = t.targetProj, c = Wd(e, u, h, l);
          if (!isFinite(c) || c <= 0) {
            this.state = Z.EMPTY;
            return;
          }
          const d = t.errorThreshold !== void 0 ? t.errorThreshold : Gd;
          if (this.triangulation_ = new Ud(e, u, h, a, c * d, l, t.transformMatrix), this.triangulation_.getTriangles().length === 0) {
            this.state = Z.EMPTY;
            return;
          }
          this.sourceZ_ = this.sourceTileGrid_.getZForResolution(c);
          let p = this.triangulation_.calculateSourceExtent();
          if (a && (e.canWrapX() ? (p[1] = kt(p[1], a[1], a[3]), p[3] = kt(p[3], a[1], a[3])) : p = Fe(p, a)), !Ts(p)) this.state = Z.EMPTY;
          else {
            let f = 0, y = 0;
            e.canWrapX() && (f = pt(s), y = Math.floor((p[0] - s[0]) / f)), bo(p.slice(), e, !0).forEach((E) => {
              const M = this.sourceTileGrid_.getTileRangeForExtentAndZ(E, this.sourceZ_), w = t.getTileFunction;
              for (let C = M.minX; C <= M.maxX; C++) for (let v = M.minY; v <= M.maxY; v++) {
                const R = w(this.sourceZ_, C, v, this.pixelRatio_);
                if (R) {
                  const I = y * f;
                  this.sourceTiles_.push({ tile: R, offset: I });
                }
              }
              ++y;
            }), this.sourceTiles_.length === 0 && (this.state = Z.EMPTY);
          }
        }
        getSize() {
          return this.reprojSize_;
        }
        getData() {
          return this.reprojData_;
        }
        getError() {
          return this.reprojError_;
        }
        reproject_() {
          const t = [];
          let e = !1;
          if (this.sourceTiles_.forEach((v) => {
            var R;
            const I = v.tile;
            if (!I || I.getState() !== Z.LOADED) return;
            const O = I.getSize(), A = this.gutter_;
            let P;
            const F = J0(I.getData());
            F ? P = F : (e = !0, P = ty(la(I.getData())));
            const z = [O[0] + 2 * A, O[1] + 2 * A], k = P instanceof Float32Array, J = z[0] * z[1], V = k ? Float32Array : Uint8ClampedArray, Y = new V(P.buffer), Q = V.BYTES_PER_ELEMENT, B = Q * Y.length / J, it = Y.byteLength / z[1], ot = Math.floor(it / Q / z[0]), H = this.sourceTileGrid_.getTileCoordExtent(I.tileCoord);
            H[0] += v.offset, H[2] += v.offset;
            const X = (R = this.clipExtent_) == null ? void 0 : R.slice();
            X && (X[0] += v.offset, X[2] += v.offset), t.push({ extent: H, clipExtent: X, data: Y, dataType: V, bytesPerPixel: B, pixelSize: z, bandCount: ot });
          }), this.sourceTiles_.length = 0, t.length === 0) {
            this.state = Z.ERROR, this.changed();
            return;
          }
          const s = this.wrappedTileCoord_[0], i = this.targetTileGrid_.getTileSize(s), r = typeof i == "number" ? i : i[0], o = typeof i == "number" ? i : i[1], a = r * this.pixelRatio_, h = o * this.pixelRatio_, l = this.targetTileGrid_.getResolution(s), u = this.sourceTileGrid_.getResolution(this.sourceZ_), c = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_), d = t[0].bandCount, p = new t[0].dataType(d * a * h), f = dy(a, h, Xd, { premultipliedAlpha: !1, antialias: !1 });
          let y;
          const E = f.RGBA;
          let M;
          t[0].dataType == Float32Array ? (M = f.FLOAT, f.getExtension("WEBGL_color_buffer_float"), f.getExtension("OES_texture_float"), f.getExtension("EXT_float_blend"), y = f.getExtension("OES_texture_float_linear") !== null && this.interpolate) : (M = f.UNSIGNED_BYTE, y = this.interpolate);
          const w = 4, C = Math.ceil(d / w);
          for (let v = C - 1; v >= 0; --v) {
            const R = [];
            for (let J = 0, V = t.length; J < V; ++J) {
              const Y = t[J], Q = Y.pixelSize, B = Q[0], it = Q[1], ot = new Y.dataType(w * B * it), H = Y.data;
              let X = v * w;
              for (let et = 0, b = ot.length; et < b; et += w) ot[et] = H[X], ot[et + 1] = H[X + 1], ot[et + 2] = H[X + 2], ot[et + 3] = H[X + 3], X += d;
              const mt = f.createTexture();
              f.bindTexture(f.TEXTURE_2D, mt), y ? (f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.LINEAR), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.LINEAR)) : (f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST)), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texImage2D(f.TEXTURE_2D, 0, E, B, it, 0, E, M, ot), R.push({ extent: Y.extent, clipExtent: Y.clipExtent, texture: mt, width: B, height: it });
            }
            const { framebuffer: I, width: O, height: A } = gy(f, r, o, this.pixelRatio_, u, l, c, this.triangulation_, R, this.gutter_, M, this.renderEdges_, y), P = O, F = A * w, z = new t[0].dataType(P * F);
            f.bindFramebuffer(f.FRAMEBUFFER, I), f.readPixels(0, 0, O, A, f.RGBA, M, z);
            let k = v * w;
            for (let J = 0, V = z.length; J < V; J += w) {
              const Y = (P - 1 - (J / F | 0)) * F + J % F;
              p[k] = z[Y], p[k + 1] = z[Y + 1], p[k + 2] = z[Y + 2], p[k + 3] = z[Y + 3], k += d;
            }
          }
          if (fy(f), Xd.push(f.canvas), e) {
            const v = Yt(r, o), R = new ImageData(p, r);
            v.putImageData(R, 0, 0), this.reprojData_ = v.canvas;
          } else this.reprojData_ = p;
          this.reprojSize_ = [Math.round(a), Math.round(h)], this.state = Z.LOADED, this.changed();
        }
        load() {
          if (this.state !== Z.IDLE && this.state !== Z.ERROR) return;
          this.state = Z.LOADING, this.changed();
          let t = 0;
          this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({ tile: e }) => {
            const s = e.getState();
            if (s !== Z.IDLE && s !== Z.LOADING) return;
            t++;
            const i = xt(e, lt.CHANGE, () => {
              const r = e.getState();
              (r == Z.LOADED || r == Z.ERROR || r == Z.EMPTY) && (At(i), t--, t === 0 && (this.unlistenSources_(), this.reproject_()));
            });
            this.sourcesListenerKeys_.push(i);
          }), t === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({ tile: e }) {
            e.getState() == Z.IDLE && e.load();
          });
        }
        unlistenSources_() {
          this.sourcesListenerKeys_.forEach(At), this.sourcesListenerKeys_ = null;
        }
      }
      class vl extends xl {
        constructor(t, e, s, i, r, o, a, h, l, u, c, d) {
          super(r, Z.IDLE, d), this.renderEdges_ = c !== void 0 ? c : !1, this.pixelRatio_ = a, this.gutter_ = h, this.canvas_ = null, this.sourceTileGrid_ = e, this.targetTileGrid_ = i, this.wrappedTileCoord_ = o || r, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0, this.clipExtent_ = t.canWrapX() ? t.getExtent() : void 0;
          const p = i.getTileCoordExtent(this.wrappedTileCoord_), f = this.targetTileGrid_.getExtent();
          let y = this.sourceTileGrid_.getExtent();
          const E = f ? Fe(p, f) : p;
          if (Ts(E) === 0) {
            this.state = Z.EMPTY;
            return;
          }
          const M = t.getExtent();
          M && (y ? y = Fe(y, M) : y = M);
          const w = i.getResolution(this.wrappedTileCoord_[0]), C = Wd(t, s, E, w);
          if (!isFinite(C) || C <= 0) {
            this.state = Z.EMPTY;
            return;
          }
          const v = u !== void 0 ? u : Gd;
          if (this.triangulation_ = new Ud(t, s, E, y, C * v, w), this.triangulation_.getTriangles().length === 0) {
            this.state = Z.EMPTY;
            return;
          }
          this.sourceZ_ = e.getZForResolution(C);
          let R = this.triangulation_.calculateSourceExtent();
          if (y && (t.canWrapX() ? (R[1] = kt(R[1], y[1], y[3]), R[3] = kt(R[3], y[1], y[3])) : R = Fe(R, y)), !Ts(R)) this.state = Z.EMPTY;
          else {
            let I = 0, O = 0;
            t.canWrapX() && (I = pt(M), O = Math.floor((R[0] - M[0]) / I)), bo(R.slice(), t, !0).forEach((A) => {
              const P = e.getTileRangeForExtentAndZ(A, this.sourceZ_);
              for (let F = P.minX; F <= P.maxX; F++) for (let z = P.minY; z <= P.maxY; z++) {
                const k = l(this.sourceZ_, F, z, a);
                if (k) {
                  const J = O * I;
                  this.sourceTiles_.push({ tile: k, offset: J });
                }
              }
              ++O;
            }), this.sourceTiles_.length === 0 && (this.state = Z.EMPTY);
          }
        }
        getImage() {
          return this.canvas_;
        }
        reproject_() {
          const t = [];
          if (this.sourceTiles_.forEach((e) => {
            var s;
            const i = e.tile;
            if (i && i.getState() == Z.LOADED) {
              const r = this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);
              r[0] += e.offset, r[2] += e.offset;
              const o = (s = this.clipExtent_) == null ? void 0 : s.slice();
              o && (o[0] += e.offset, o[2] += e.offset), t.push({ extent: r, clipExtent: o, image: i.getImage() });
            }
          }), this.sourceTiles_.length = 0, t.length === 0) this.state = Z.ERROR;
          else {
            const e = this.wrappedTileCoord_[0], s = this.targetTileGrid_.getTileSize(e), i = typeof s == "number" ? s : s[0], r = typeof s == "number" ? s : s[1], o = this.targetTileGrid_.getResolution(e), a = this.sourceTileGrid_.getResolution(this.sourceZ_), h = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
            this.canvas_ = iy(i, r, this.pixelRatio_, a, this.sourceTileGrid_.getExtent(), o, h, this.triangulation_, t, this.gutter_, this.renderEdges_, this.interpolate), this.state = Z.LOADED;
          }
          this.changed();
        }
        load() {
          if (this.state == Z.IDLE) {
            this.state = Z.LOADING, this.changed();
            let t = 0;
            this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({ tile: e }) => {
              const s = e.getState();
              if (s == Z.IDLE || s == Z.LOADING) {
                t++;
                const i = xt(e, lt.CHANGE, (r) => {
                  const o = e.getState();
                  (o == Z.LOADED || o == Z.ERROR || o == Z.EMPTY) && (At(i), t--, t === 0 && (this.unlistenSources_(), this.reproject_()));
                });
                this.sourcesListenerKeys_.push(i);
              }
            }), t === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({ tile: e }, s, i) {
              e.getState() == Z.IDLE && e.load();
            });
          }
        }
        unlistenSources_() {
          this.sourcesListenerKeys_.forEach(At), this.sourcesListenerKeys_ = null;
        }
        release() {
          this.canvas_ && (Xo(this.canvas_.getContext("2d")), Ci.push(this.canvas_), this.canvas_ = null), super.release();
        }
      }
      class qd extends xl {
        constructor(t, e, s, i, r, o) {
          super(t, e, o), this.crossOrigin_ = i, this.src_ = s, this.key = s, this.image_ = new Image(), i !== null && (this.image_.crossOrigin = i), this.unlisten_ = null, this.tileLoadFunction_ = r;
        }
        getImage() {
          return this.image_;
        }
        setImage(t) {
          this.image_ = t, this.state = Z.LOADED, this.unlistenImage_(), this.changed();
        }
        handleImageError_() {
          this.state = Z.ERROR, this.unlistenImage_(), this.image_ = my(), this.changed();
        }
        handleImageLoad_() {
          const t = this.image_;
          t.naturalWidth && t.naturalHeight ? this.state = Z.LOADED : this.state = Z.EMPTY, this.unlistenImage_(), this.changed();
        }
        load() {
          this.state == Z.ERROR && (this.state = Z.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == Z.IDLE && (this.state = Z.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = Tm(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this)));
        }
        unlistenImage_() {
          this.unlisten_ && (this.unlisten_(), this.unlisten_ = null);
        }
        disposeInternal() {
          this.unlistenImage_(), this.image_ = null, super.disposeInternal();
        }
      }
      function my() {
        const n = Yt(1, 1);
        return n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1), n.canvas;
      }
      class _y {
        constructor(t) {
          this.highWaterMark = t !== void 0 ? t : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
        }
        deleteOldest() {
          const t = this.pop();
          t instanceof lo && t.dispose();
        }
        canExpireCache() {
          return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
        }
        expireCache(t) {
          for (; this.canExpireCache(); ) this.deleteOldest();
        }
        clear() {
          for (; this.oldest_; ) this.deleteOldest();
        }
        containsKey(t) {
          return this.entries_.hasOwnProperty(t);
        }
        forEach(t) {
          let e = this.oldest_;
          for (; e; ) t(e.value_, e.key_, this), e = e.newer;
        }
        get(t, e) {
          const s = this.entries_[t];
          return wt(s !== void 0, "Tried to get a value for a key that does not exist in the cache"), s === this.newest_ || (s === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (s.newer.older = s.older, s.older.newer = s.newer), s.newer = null, s.older = this.newest_, this.newest_.newer = s, this.newest_ = s), s.value_;
        }
        remove(t) {
          const e = this.entries_[t];
          return wt(e !== void 0, "Tried to get a value for a key that does not exist in the cache"), e === this.newest_ ? (this.newest_ = e.older, this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? (this.oldest_ = e.newer, this.oldest_ && (this.oldest_.older = null)) : (e.newer.older = e.older, e.older.newer = e.newer), delete this.entries_[t], --this.count_, e.value_;
        }
        getCount() {
          return this.count_;
        }
        getKeys() {
          const t = new Array(this.count_);
          let e = 0, s;
          for (s = this.newest_; s; s = s.older) t[e++] = s.key_;
          return t;
        }
        getValues() {
          const t = new Array(this.count_);
          let e = 0, s;
          for (s = this.newest_; s; s = s.older) t[e++] = s.value_;
          return t;
        }
        peekLast() {
          return this.oldest_.value_;
        }
        peekLastKey() {
          return this.oldest_.key_;
        }
        peekFirstKey() {
          return this.newest_.key_;
        }
        peek(t) {
          var e;
          return (e = this.entries_[t]) == null ? void 0 : e.value_;
        }
        pop() {
          const t = this.oldest_;
          return delete this.entries_[t.key_], t.newer && (t.newer.older = null), this.oldest_ = t.newer, this.oldest_ || (this.newest_ = null), --this.count_, t.value_;
        }
        replace(t, e) {
          this.get(t), this.entries_[t].value_ = e;
        }
        set(t, e) {
          wt(!(t in this.entries_), "Tried to set a value for a key that is used already");
          const s = { key_: t, newer: null, older: this.newest_, value_: e };
          this.newest_ ? this.newest_.newer = s : this.oldest_ = s, this.newest_ = s, this.entries_[t] = s, ++this.count_;
        }
        setSize(t) {
          this.highWaterMark = t;
        }
      }
      class Rl {
        constructor(t, e, s, i) {
          this.minX = t, this.maxX = e, this.minY = s, this.maxY = i;
        }
        contains(t) {
          return this.containsXY(t[1], t[2]);
        }
        containsTileRange(t) {
          return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY;
        }
        containsXY(t, e) {
          return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY;
        }
        equals(t) {
          return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY;
        }
        extend(t) {
          t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY);
        }
        getHeight() {
          return this.maxY - this.minY + 1;
        }
        getSize() {
          return [this.getWidth(), this.getHeight()];
        }
        getWidth() {
          return this.maxX - this.minX + 1;
        }
        intersects(t) {
          return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY;
        }
      }
      function bi(n, t, e, s, i) {
        return i !== void 0 ? (i.minX = n, i.maxX = t, i.minY = e, i.maxY = s, i) : new Rl(n, t, e, s);
      }
      function ua(n, t, e, s) {
        return s !== void 0 ? (s[0] = n, s[1] = t, s[2] = e, s) : [n, t, e];
      }
      function yy(n, t, e) {
        return n + "/" + t + "/" + e;
      }
      function xy(n) {
        return Ey(n[0], n[1], n[2]);
      }
      function Ey(n, t, e) {
        return (t << n) + e;
      }
      function My(n, t) {
        const e = n[0], s = n[1], i = n[2];
        if (t.getMinZoom() > e || e > t.getMaxZoom()) return !1;
        const r = t.getFullTileRange(e);
        return r ? r.containsXY(s, i) : !0;
      }
      const ca = { PRELOAD: "preload", USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError" };
      class wy extends zo {
        constructor(t) {
          t = t || {};
          const e = Object.assign({}, t), s = t.cacheSize;
          delete t.cacheSize, delete e.preload, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un, this.cacheSize_ = s, this.setPreload(t.preload !== void 0 ? t.preload : 0), this.setUseInterimTilesOnError(t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0);
        }
        getCacheSize() {
          return this.cacheSize_;
        }
        getPreload() {
          return this.get(ca.PRELOAD);
        }
        setPreload(t) {
          this.set(ca.PRELOAD, t);
        }
        getUseInterimTilesOnError() {
          return this.get(ca.USE_INTERIM_TILES_ON_ERROR);
        }
        setUseInterimTilesOnError(t) {
          this.set(ca.USE_INTERIM_TILES_ON_ERROR, t);
        }
        getData(t) {
          return super.getData(t);
        }
      }
      function Cl(n, t, e, s) {
        return `${n},${yy(t, e, s)}`;
      }
      function bl(n, t, e) {
        if (!(e in n)) return n[e] = /* @__PURE__ */ new Set([t]), !0;
        const s = n[e], i = s.has(t);
        return i || s.add(t), !i;
      }
      function Sy(n, t, e) {
        const s = n[e];
        return s ? s.delete(t) : !1;
      }
      function Vd(n, t) {
        const e = n.layerStatesArray[n.layerIndex];
        e.extent && (t = Fe(t, Vn(e.extent, n.viewState.projection)));
        const s = e.layer.getRenderSource();
        if (!s.getWrapX()) {
          const i = s.getTileGridForProjection(n.viewState.projection).getExtent();
          i && (t = Fe(t, i));
        }
        return t;
      }
      class vy extends Sd {
        constructor(t, e) {
          super(t), e = e || {}, this.extentChanged = !0, this.renderComplete = !1, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedRevision, this.renderedTiles = [], this.renderedSourceKey_, this.renderedSourceRevision_, this.tempExtent = Se(), this.tempTileRange_ = new Rl(0, 0, 0, 0), this.tempTileCoord_ = ua(0, 0, 0);
          const s = e.cacheSize !== void 0 ? e.cacheSize : 512;
          this.tileCache_ = new _y(s), this.maxStaleKeys = s * 0.5;
        }
        getTileCache() {
          return this.tileCache_;
        }
        getOrCreateTile(t, e, s, i) {
          const r = this.tileCache_, o = this.getLayer().getSource(), a = Cl(o.getKey(), t, e, s);
          let h;
          if (r.containsKey(a)) h = r.get(a);
          else {
            if (h = o.getTile(t, e, s, i.pixelRatio, i.viewState.projection), !h) return null;
            r.set(a, h);
          }
          return h;
        }
        getTile(t, e, s, i) {
          return this.getOrCreateTile(t, e, s, i) || null;
        }
        getData(t) {
          const e = this.frameState;
          if (!e) return null;
          const s = this.getLayer(), i = Vt(e.pixelToCoordinateTransform, t.slice()), r = s.getExtent();
          if (r && !Cs(r, i)) return null;
          const o = e.viewState, a = s.getRenderSource(), h = a.getTileGridForProjection(o.projection), l = a.getTilePixelRatio(e.pixelRatio);
          for (let u = h.getZForResolution(o.resolution); u >= h.getMinZoom(); --u) {
            const c = h.getTileCoordForCoordAndZ(i, u), d = this.getTile(u, c[1], c[2], e);
            if (!d || d.getState() !== Z.LOADED) continue;
            const p = h.getOrigin(u), f = ve(h.getTileSize(u)), y = h.getResolution(u);
            let E;
            if (d instanceof qd || d instanceof vl) E = d.getImage();
            else if (d instanceof El) {
              if (E = la(d.getData()), !E) continue;
            } else continue;
            const M = Math.floor(l * ((i[0] - p[0]) / y - c[1] * f[0])), w = Math.floor(l * ((p[1] - i[1]) / y - c[2] * f[1])), C = Math.round(l * a.getGutterForProjection(o.projection));
            return this.getImageData(E, M + C, w + C);
          }
          return null;
        }
        prepareFrame(t) {
          this.renderedProjection ? t.viewState.projection !== this.renderedProjection && (this.tileCache_.clear(), this.renderedProjection = t.viewState.projection) : this.renderedProjection = t.viewState.projection;
          const e = this.getLayer().getSource();
          if (!e) return !1;
          const s = e.getRevision();
          return this.renderedRevision_ ? this.renderedRevision_ !== s && (this.renderedRevision_ = s, this.renderedSourceKey_ === e.getKey() && this.tileCache_.clear()) : this.renderedRevision_ = s, !0;
        }
        enqueueTiles(t, e, s, i, r) {
          const o = t.viewState, a = this.getLayer(), h = a.getRenderSource(), l = h.getTileGridForProjection(o.projection), u = vt(h);
          u in t.wantedTiles || (t.wantedTiles[u] = {});
          const c = t.wantedTiles[u], d = a.getMapInternal(), p = Math.max(s - r, l.getMinZoom(), l.getZForResolution(Math.min(a.getMaxResolution(), d ? d.getView().getResolutionForZoom(Math.max(a.getMinZoom(), 0)) : l.getResolution(0)), h.zDirection));
          for (let f = s; f >= p; --f) {
            const y = l.getTileRangeForExtentAndZ(e, f, this.tempTileRange_), E = l.getResolution(f);
            for (let M = y.minX; M <= y.maxX; ++M) for (let w = y.minY; w <= y.maxY; ++w) {
              const C = this.getTile(f, M, w, t);
              if (!C || !bl(i, C, f)) continue;
              const v = C.getKey();
              if (c[v] = !0, C.getState() === Z.IDLE && !t.tileQueue.isKeyQueued(v)) {
                const R = ua(f, M, w, this.tempTileCoord_);
                t.tileQueue.enqueue([C, u, l.getTileCoordCenter(R), E]);
              }
            }
          }
        }
        findStaleTile_(t, e) {
          const s = this.tileCache_, i = t[0], r = t[1], o = t[2], a = this.getStaleKeys();
          for (let h = 0; h < a.length; ++h) {
            const l = Cl(a[h], i, r, o);
            if (s.containsKey(l)) {
              const u = s.get(l);
              if (u.getState() === Z.LOADED) return u.endTransition(vt(this)), bl(e, u, i), !0;
            }
          }
          return !1;
        }
        findAltTiles_(t, e, s, i) {
          const r = t.getTileRangeForTileCoordAndZ(e, s, this.tempTileRange_);
          if (!r) return !1;
          let o = !0;
          const a = this.tileCache_, h = this.getLayer().getRenderSource().getKey();
          for (let l = r.minX; l <= r.maxX; ++l) for (let u = r.minY; u <= r.maxY; ++u) {
            const c = Cl(h, s, l, u);
            let d = !1;
            if (a.containsKey(c)) {
              const p = a.get(c);
              p.getState() === Z.LOADED && (bl(i, p, s), d = !0);
            }
            d || (o = !1);
          }
          return o;
        }
        renderFrame(t, e) {
          let s = !0;
          this.renderComplete = !0;
          const i = t.layerStatesArray[t.layerIndex], r = t.viewState, o = r.projection, a = r.resolution, h = r.center, l = t.pixelRatio, u = this.getLayer(), c = u.getSource(), d = c.getRevision(), p = c.getTileGridForProjection(o), f = p.getZForResolution(a, c.zDirection), y = p.getResolution(f), E = c.getKey();
          this.renderedSourceKey_ ? this.renderedSourceKey_ !== E && (this.prependStaleKey(this.renderedSourceKey_), this.renderedSourceKey_ = E) : this.renderedSourceKey_ = E;
          let M = t.extent;
          const w = c.getTilePixelRatio(l);
          this.prepareContainer(t, e);
          const C = this.context.canvas.width, v = this.context.canvas.height, R = i.extent && Vn(i.extent);
          R && (M = Fe(M, Vn(i.extent)));
          const I = y * C / 2 / w, O = y * v / 2 / w, A = [h[0] - I, h[1] - O, h[0] + I, h[1] + O], P = {};
          this.renderedTiles.length = 0;
          const F = u.getPreload();
          if (t.nextExtent) {
            const H = p.getZForResolution(r.nextResolution, c.zDirection), X = Vd(t, t.nextExtent);
            this.enqueueTiles(t, X, H, P, F);
          }
          const z = Vd(t, M);
          if (this.enqueueTiles(t, z, f, P, 0), F > 0 && setTimeout(() => {
            this.enqueueTiles(t, z, f - 1, P, F - 1);
          }, 0), !(f in P)) return this.container;
          const k = vt(this), J = t.time;
          for (const H of P[f]) {
            const X = H.getState();
            if ((H instanceof vl || H instanceof py) && X === Z.EMPTY) continue;
            const mt = H.tileCoord;
            if (X === Z.LOADED && H.getAlpha(k, J) === 1) {
              H.endTransition(k);
              continue;
            }
            if (X !== Z.IDLE && (s = !1), X !== Z.ERROR && (this.renderComplete = !1), this.findStaleTile_(mt, P)) {
              Sy(P, H, f), t.animate = !0;
              continue;
            }
            if (this.findAltTiles_(p, mt, f + 1, P)) continue;
            const et = p.getMinZoom();
            for (let b = f - 1; b >= et && !this.findAltTiles_(p, mt, b, P); --b) ;
          }
          const V = y / a * l / w, Y = this.getRenderContext(t);
          vn(this.tempTransform, C / 2, v / 2, V, V, 0, -C / 2, -v / 2), i.extent && this.clipUnrotated(Y, t, R), c.getInterpolate() || (Y.imageSmoothingEnabled = !1), this.preRender(Y, t);
          const Q = Object.keys(P).map(Number);
          Q.sort(jn);
          let B;
          const it = [], ot = [];
          for (let H = Q.length - 1; H >= 0; --H) {
            const X = Q[H], mt = c.getTilePixelSize(X, l, o), et = p.getResolution(X) / y, b = mt[0] * et * V, at = mt[1] * et * V, Pt = p.getTileCoordForCoordAndZ(an(A), X), Ut = p.getTileCoordExtent(Pt), Xt = Vt(this.tempTransform, [w * (Ut[0] - A[0]) / y, w * (A[3] - Ut[3]) / y]), en = w * c.getGutterForProjection(o);
            for (const Bt of P[X]) {
              if (Bt.getState() !== Z.LOADED) continue;
              const mn = Bt.tileCoord, us = Pt[1] - mn[1], _n = Math.round(Xt[0] - (us - 1) * b), Fn = Pt[2] - mn[2], nn = Math.round(Xt[1] - (Fn - 1) * at), de = Math.round(Xt[0] - us * b), Xe = Math.round(Xt[1] - Fn * at), cs = _n - de, ds = nn - Xe, yn = Q.length === 1;
              let kn = !1;
              B = [de, Xe, de + cs, Xe, de + cs, Xe + ds, de, Xe + ds];
              for (let fs = 0, gs = it.length; fs < gs; ++fs) if (!yn && X < ot[fs]) {
                const qt = it[fs];
                re([de, Xe, de + cs, Xe + ds], [qt[0], qt[3], qt[4], qt[7]]) && (kn || (Y.save(), kn = !0), Y.beginPath(), Y.moveTo(B[0], B[1]), Y.lineTo(B[2], B[3]), Y.lineTo(B[4], B[5]), Y.lineTo(B[6], B[7]), Y.moveTo(qt[6], qt[7]), Y.lineTo(qt[4], qt[5]), Y.lineTo(qt[2], qt[3]), Y.lineTo(qt[0], qt[1]), Y.clip());
              }
              it.push(B), ot.push(X), this.drawTile(Bt, t, de, Xe, cs, ds, en, yn), kn && Y.restore(), this.renderedTiles.unshift(Bt), this.updateUsedTiles(t.usedTiles, c, Bt);
            }
          }
          if (this.renderedRevision = d, this.renderedResolution = y, this.extentChanged = !this.renderedExtent_ || !ii(this.renderedExtent_, A), this.renderedExtent_ = A, this.renderedPixelRatio = l, this.postRender(this.context, t), i.extent && Y.restore(), Y.imageSmoothingEnabled = !0, this.renderComplete) {
            const H = (X, mt) => {
              const et = vt(c), b = mt.wantedTiles[et], at = b ? Object.keys(b).length : 0;
              this.updateCacheSize(at), this.tileCache_.expireCache();
            };
            t.postRenderFunctions.push(H);
          }
          return !this.renderComplete && !s && (t.animate = !0), this.container;
        }
        updateCacheSize(t) {
          this.tileCache_.highWaterMark = Math.max(this.tileCache_.highWaterMark, t * 2);
        }
        drawTile(t, e, s, i, r, o, a, h) {
          let l;
          if (t instanceof El) {
            if (l = la(t.getData()), !l) throw new Error("Rendering array data is not yet supported");
          } else l = this.getTileImage(t);
          if (!l) return;
          const u = this.getRenderContext(e), c = vt(this), d = e.layerStatesArray[e.layerIndex], p = d.opacity * (h ? t.getAlpha(c, e.time) : 1), f = p !== u.globalAlpha;
          f && (u.save(), u.globalAlpha = p), u.drawImage(l, a, a, l.width - 2 * a, l.height - 2 * a, s, i, r, o), f && u.restore(), p !== d.opacity ? e.animate = !0 : h && t.endTransition(c);
        }
        getImage() {
          const t = this.context;
          return t ? t.canvas : null;
        }
        getTileImage(t) {
          return t.getImage();
        }
        updateUsedTiles(t, e, s) {
          const i = vt(e);
          i in t || (t[i] = {}), t[i][s.getKey()] = !0;
        }
      }
      class Ry extends wy {
        constructor(t) {
          super(t);
        }
        createRenderer() {
          return new vy(this, { cacheSize: this.getCacheSize() });
        }
      }
      const Tl = { TILELOADSTART: "tileloadstart", TILELOADEND: "tileloadend", TILELOADERROR: "tileloaderror" }, Ti = [0, 0, 0], rs = 5;
      class $d {
        constructor(t) {
          this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0, this.resolutions_ = t.resolutions, wt(Fg(this.resolutions_, (i, r) => r - i), "`resolutions` must be sorted in descending order");
          let e;
          if (!t.origins) {
            for (let i = 0, r = this.resolutions_.length - 1; i < r; ++i) if (!e) e = this.resolutions_[i] / this.resolutions_[i + 1];
            else if (this.resolutions_[i] / this.resolutions_[i + 1] !== e) {
              e = void 0;
              break;
            }
          }
          this.zoomFactor_ = e, this.maxZoom = this.resolutions_.length - 1, this.origin_ = t.origin !== void 0 ? t.origin : null, this.origins_ = null, t.origins !== void 0 && (this.origins_ = t.origins, wt(this.origins_.length == this.resolutions_.length, "Number of `origins` and `resolutions` must be equal"));
          const s = t.extent;
          s !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = an(s)), wt(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, "Either `origin` or `origins` must be configured, never both"), this.tileSizes_ = null, t.tileSizes !== void 0 && (this.tileSizes_ = t.tileSizes, wt(this.tileSizes_.length == this.resolutions_.length, "Number of `tileSizes` and `resolutions` must be equal")), this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Ka, wt(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, "Either `tileSize` or `tileSizes` must be configured, never both"), this.extent_ = s !== void 0 ? s : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], t.sizes !== void 0 ? this.fullTileRanges_ = t.sizes.map((i, r) => {
            const o = new Rl(Math.min(0, i[0]), Math.max(i[0] - 1, -1), Math.min(0, i[1]), Math.max(i[1] - 1, -1));
            if (s) {
              const a = this.getTileRangeForExtentAndZ(s, r);
              o.minX = Math.max(a.minX, o.minX), o.maxX = Math.min(a.maxX, o.maxX), o.minY = Math.max(a.minY, o.minY), o.maxY = Math.min(a.maxY, o.maxY);
            }
            return o;
          }) : s && this.calculateTileRanges_(s);
        }
        forEachTileCoord(t, e, s) {
          const i = this.getTileRangeForExtentAndZ(t, e);
          for (let r = i.minX, o = i.maxX; r <= o; ++r) for (let a = i.minY, h = i.maxY; a <= h; ++a) s([e, r, a]);
        }
        forEachTileCoordParentTileRange(t, e, s, i) {
          let r, o, a, h = null, l = t[0] - 1;
          for (this.zoomFactor_ === 2 ? (o = t[1], a = t[2]) : h = this.getTileCoordExtent(t, i); l >= this.minZoom; ) {
            if (o !== void 0 && a !== void 0 ? (o = Math.floor(o / 2), a = Math.floor(a / 2), r = bi(o, o, a, a, s)) : r = this.getTileRangeForExtentAndZ(h, l, s), e(l, r)) return !0;
            --l;
          }
          return !1;
        }
        getExtent() {
          return this.extent_;
        }
        getMaxZoom() {
          return this.maxZoom;
        }
        getMinZoom() {
          return this.minZoom;
        }
        getOrigin(t) {
          return this.origin_ ? this.origin_ : this.origins_[t];
        }
        getResolution(t) {
          return this.resolutions_[t];
        }
        getResolutions() {
          return this.resolutions_;
        }
        getTileCoordChildTileRange(t, e, s) {
          if (t[0] < this.maxZoom) {
            if (this.zoomFactor_ === 2) {
              const r = t[1] * 2, o = t[2] * 2;
              return bi(r, r + 1, o, o + 1, e);
            }
            const i = this.getTileCoordExtent(t, s || this.tmpExtent_);
            return this.getTileRangeForExtentAndZ(i, t[0] + 1, e);
          }
          return null;
        }
        getTileRangeForTileCoordAndZ(t, e, s) {
          if (e > this.maxZoom || e < this.minZoom) return null;
          const i = t[0], r = t[1], o = t[2];
          if (e === i) return bi(r, o, r, o, s);
          if (this.zoomFactor_) {
            const h = Math.pow(this.zoomFactor_, e - i), l = Math.floor(r * h), u = Math.floor(o * h);
            if (e < i) return bi(l, l, u, u, s);
            const c = Math.floor(h * (r + 1)) - 1, d = Math.floor(h * (o + 1)) - 1;
            return bi(l, c, u, d, s);
          }
          const a = this.getTileCoordExtent(t, this.tmpExtent_);
          return this.getTileRangeForExtentAndZ(a, e, s);
        }
        getTileRangeForExtentAndZ(t, e, s) {
          this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, Ti);
          const i = Ti[1], r = Ti[2];
          this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, Ti);
          const o = Ti[1], a = Ti[2];
          return bi(i, o, r, a, s);
        }
        getTileCoordCenter(t) {
          const e = this.getOrigin(t[0]), s = this.getResolution(t[0]), i = ve(this.getTileSize(t[0]), this.tmpSize_);
          return [e[0] + (t[1] + 0.5) * i[0] * s, e[1] - (t[2] + 0.5) * i[1] * s];
        }
        getTileCoordExtent(t, e) {
          const s = this.getOrigin(t[0]), i = this.getResolution(t[0]), r = ve(this.getTileSize(t[0]), this.tmpSize_), o = s[0] + t[1] * r[0] * i, a = s[1] - (t[2] + 1) * r[1] * i, h = o + r[0] * i, l = a + r[1] * i;
          return Ne(o, a, h, l, e);
        }
        getTileCoordForCoordAndResolution(t, e, s) {
          return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, s);
        }
        getTileCoordForXYAndResolution_(t, e, s, i, r) {
          const o = this.getZForResolution(s), a = s / this.getResolution(o), h = this.getOrigin(o), l = ve(this.getTileSize(o), this.tmpSize_);
          let u = a * (t - h[0]) / s / l[0], c = a * (h[1] - e) / s / l[1];
          return i ? (u = mo(u, rs) - 1, c = mo(c, rs) - 1) : (u = po(u, rs), c = po(c, rs)), ua(o, u, c, r);
        }
        getTileCoordForXYAndZ_(t, e, s, i, r) {
          const o = this.getOrigin(s), a = this.getResolution(s), h = ve(this.getTileSize(s), this.tmpSize_);
          let l = (t - o[0]) / a / h[0], u = (o[1] - e) / a / h[1];
          return i ? (l = mo(l, rs) - 1, u = mo(u, rs) - 1) : (l = po(l, rs), u = po(u, rs)), ua(s, l, u, r);
        }
        getTileCoordForCoordAndZ(t, e, s) {
          return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, s);
        }
        getTileCoordResolution(t) {
          return this.resolutions_[t[0]];
        }
        getTileSize(t) {
          return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
        }
        getFullTileRange(t) {
          return this.fullTileRanges_ ? this.fullTileRanges_[t] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, t) : null;
        }
        getZForResolution(t, e) {
          const s = Va(this.resolutions_, t, e || 0);
          return kt(s, this.minZoom, this.maxZoom);
        }
        tileCoordIntersectsViewport(t, e) {
          return xc(e, 0, e.length, 2, this.getTileCoordExtent(t));
        }
        calculateTileRanges_(t) {
          const e = this.resolutions_.length, s = new Array(e);
          for (let i = this.minZoom; i < e; ++i) s[i] = this.getTileRangeForExtentAndZ(t, i);
          this.fullTileRanges_ = s;
        }
      }
      class Cy extends $d {
        constructor(t) {
          super({ extent: t.extent, origin: t.origin, origins: t.origins, resolutions: t.resolutions, tileSize: t.tileSize, tileSizes: t.tileSizes, sizes: t.sizes }), this.matrixIds_ = t.matrixIds;
        }
        getMatrixId(t) {
          return this.matrixIds_[t];
        }
        getMatrixIds() {
          return this.matrixIds_;
        }
      }
      function Zd(n) {
        let t = n.getDefaultTileGrid();
        return t || (t = Ay(n), n.setDefaultTileGrid(t)), t;
      }
      function by(n, t, e) {
        const s = t[0], i = n.getTileCoordCenter(t), r = Kd(e);
        if (!Cs(r, i)) {
          const o = pt(r), a = Math.ceil((r[0] - i[0]) / o);
          return i[0] += o * a, n.getTileCoordForCoordAndZ(i, s);
        }
        return t;
      }
      function Ty(n, t, e, s) {
        s = s !== void 0 ? s : "top-left";
        const i = Iy(n, t, e);
        return new $d({ extent: n, origin: ku(n, s), resolutions: i, tileSize: e });
      }
      function Iy(n, t, e, s) {
        t = t !== void 0 ? t : Bg, e = ve(e !== void 0 ? e : Ka);
        const i = Wt(n), r = pt(n);
        s = s > 0 ? s : Math.max(r / e[0], i / e[1]);
        const o = t + 1, a = new Array(o);
        for (let h = 0; h < o; ++h) a[h] = s / Math.pow(2, h);
        return a;
      }
      function Ay(n, t, e, s) {
        const i = Kd(n);
        return Ty(i, t, e, s);
      }
      function Kd(n) {
        n = It(n);
        let t = n.getExtent();
        if (!t) {
          const e = 180 * Ha.degrees / n.getMetersPerUnit();
          t = Ne(-e, -e, e, e);
        }
        return t;
      }
      class Py extends Nd {
        constructor(t) {
          super({ attributions: t.attributions, attributionsCollapsible: t.attributionsCollapsible, projection: t.projection, state: t.state, wrapX: t.wrapX, interpolate: t.interpolate }), this.on, this.once, this.un, this.tilePixelRatio_ = t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1, this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null;
          const e = [256, 256];
          this.tileGrid && ve(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e), this.tmpSize = [0, 0], this.key_ = t.key || vt(this), this.tileOptions = { transition: t.transition, interpolate: t.interpolate }, this.zDirection = t.zDirection ? t.zDirection : 0;
        }
        getGutterForProjection(t) {
          return 0;
        }
        getKey() {
          return this.key_;
        }
        setKey(t) {
          this.key_ !== t && (this.key_ = t, this.changed());
        }
        getResolutions(t) {
          const e = t ? this.getTileGridForProjection(t) : this.tileGrid;
          return e ? e.getResolutions() : null;
        }
        getTile(t, e, s, i, r) {
          return dt();
        }
        getTileGrid() {
          return this.tileGrid;
        }
        getTileGridForProjection(t) {
          return this.tileGrid ? this.tileGrid : Zd(t);
        }
        getTilePixelRatio(t) {
          return this.tilePixelRatio_;
        }
        getTilePixelSize(t, e, s) {
          const i = this.getTileGridForProjection(s), r = this.getTilePixelRatio(e), o = ve(i.getTileSize(t), this.tmpSize);
          return r == 1 ? o : Lm(o, r, this.tmpSize);
        }
        getTileCoordForTileUrlFunction(t, e) {
          const s = e !== void 0 ? e : this.getProjection(), i = e !== void 0 ? this.getTileGridForProjection(s) : this.tileGrid || this.getTileGridForProjection(s);
          return this.getWrapX() && s.isGlobal() && (t = by(i, t, s)), My(t, i) ? t : null;
        }
        clear() {
        }
        refresh() {
          this.clear(), super.refresh();
        }
      }
      class Ly extends En {
        constructor(t, e) {
          super(t), this.tile = e;
        }
      }
      function Hd(n, t) {
        const e = [];
        Object.keys(t).forEach(function(i) {
          t[i] !== null && t[i] !== void 0 && e.push(i + "=" + encodeURIComponent(t[i]));
        });
        const s = e.join("&");
        return n = n.replace(/[?&]$/, ""), n += n.includes("?") ? "&" : "?", n + s;
      }
      const Oy = /\{z\}/g, Ny = /\{x\}/g, Fy = /\{y\}/g, ky = /\{-y\}/g;
      function Dy(n, t, e, s, i) {
        return n.replace(Oy, t.toString()).replace(Ny, e.toString()).replace(Fy, s.toString()).replace(ky, function() {
          if (i === void 0) throw new Error("If the URL template has a {-y} placeholder, the grid extent must be known");
          return (i - s).toString();
        });
      }
      function Jd(n) {
        const t = [];
        let e = /\{([a-z])-([a-z])\}/.exec(n);
        if (e) {
          const s = e[1].charCodeAt(0), i = e[2].charCodeAt(0);
          let r;
          for (r = s; r <= i; ++r) t.push(n.replace(e[0], String.fromCharCode(r)));
          return t;
        }
        if (e = /\{(\d+)-(\d+)\}/.exec(n), e) {
          const s = parseInt(e[2], 10);
          for (let i = parseInt(e[1], 10); i <= s; i++) t.push(n.replace(e[0], i.toString()));
          return t;
        }
        return t.push(n), t;
      }
      function Gy(n, t) {
        return function(e, s, i) {
          if (!e) return;
          let r;
          const o = e[0];
          if (t) {
            const a = t.getFullTileRange(o);
            a && (r = a.getHeight() - 1);
          }
          return Dy(n, o, e[1], e[2], r);
        };
      }
      function zy(n, t) {
        const e = n.length, s = new Array(e);
        for (let i = 0; i < e; ++i) s[i] = Gy(n[i], t);
        return Il(s);
      }
      function Il(n) {
        return n.length === 1 ? n[0] : function(t, e, s) {
          if (!t) return;
          const i = xy(t), r = ti(i, n.length);
          return n[r](t, e, s);
        };
      }
      class Al extends Py {
        constructor(t) {
          super({ attributions: t.attributions, cacheSize: t.cacheSize, projection: t.projection, state: t.state, tileGrid: t.tileGrid, tilePixelRatio: t.tilePixelRatio, wrapX: t.wrapX, transition: t.transition, interpolate: t.interpolate, key: t.key, attributionsCollapsible: t.attributionsCollapsible, zDirection: t.zDirection }), this.generateTileUrlFunction_ = this.tileUrlFunction === Al.prototype.tileUrlFunction, this.tileLoadFunction = t.tileLoadFunction, t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction), this.urls = null, t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url), this.tileLoadingKeys_ = {};
        }
        getTileLoadFunction() {
          return this.tileLoadFunction;
        }
        getTileUrlFunction() {
          return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
        }
        getUrls() {
          return this.urls;
        }
        handleTileChange(t) {
          const e = t.target, s = vt(e), i = e.getState();
          let r;
          i == Z.LOADING ? (this.tileLoadingKeys_[s] = !0, r = Tl.TILELOADSTART) : s in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[s], r = i == Z.ERROR ? Tl.TILELOADERROR : i == Z.LOADED ? Tl.TILELOADEND : void 0), r != null && this.dispatchEvent(new Ly(r, e));
        }
        setTileLoadFunction(t) {
          this.tileLoadFunction = t, this.changed();
        }
        setTileUrlFunction(t, e) {
          this.tileUrlFunction = t, typeof e < "u" ? this.setKey(e) : this.changed();
        }
        setUrl(t) {
          const e = Jd(t);
          this.urls = e, this.setUrls(e);
        }
        setUrls(t) {
          this.urls = t;
          const e = t.join(`
`);
          this.generateTileUrlFunction_ ? this.setTileUrlFunction(zy(t, this.tileGrid), e) : this.setKey(e);
        }
        tileUrlFunction(t, e, s) {
        }
      }
      class Uy extends Al {
        constructor(t) {
          super({ attributions: t.attributions, cacheSize: t.cacheSize, projection: t.projection, state: t.state, tileGrid: t.tileGrid, tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : By, tilePixelRatio: t.tilePixelRatio, tileUrlFunction: t.tileUrlFunction, url: t.url, urls: t.urls, wrapX: t.wrapX, transition: t.transition, interpolate: t.interpolate !== void 0 ? t.interpolate : !0, key: t.key, attributionsCollapsible: t.attributionsCollapsible, zDirection: t.zDirection }), this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null, this.tileClass = t.tileClass !== void 0 ? t.tileClass : qd, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1;
        }
        getGutterForProjection(t) {
          return this.getProjection() && t && !hr(this.getProjection(), t) ? 0 : this.getGutter();
        }
        getGutter() {
          return 0;
        }
        getKey() {
          let t = super.getKey();
          return this.getInterpolate() || (t += ":disable-interpolation"), t;
        }
        getTileGridForProjection(t) {
          const e = this.getProjection();
          if (this.tileGrid && (!e || hr(e, t))) return this.tileGrid;
          const s = vt(t);
          return s in this.tileGridForProjection || (this.tileGridForProjection[s] = Zd(t)), this.tileGridForProjection[s];
        }
        createTile_(t, e, s, i, r, o) {
          const a = [t, e, s], h = this.getTileCoordForTileUrlFunction(a, r), l = h ? this.tileUrlFunction(h, i, r) : void 0, u = new this.tileClass(a, l !== void 0 ? Z.IDLE : Z.EMPTY, l !== void 0 ? l : "", this.crossOrigin, this.tileLoadFunction, this.tileOptions);
          return u.key = o, u.addEventListener(lt.CHANGE, this.handleTileChange.bind(this)), u;
        }
        getTile(t, e, s, i, r) {
          const o = this.getProjection();
          if (!o || !r || hr(o, r)) return this.getTileInternal(t, e, s, i, o || r);
          const a = [t, e, s], h = this.getKey(), l = this.getTileGridForProjection(o), u = this.getTileGridForProjection(r), c = this.getTileCoordForTileUrlFunction(a, r), d = new vl(o, l, r, u, a, c, this.getTilePixelRatio(i), this.getGutter(), (p, f, y, E) => this.getTileInternal(p, f, y, E, o), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.tileOptions);
          return d.key = h, d;
        }
        getTileInternal(t, e, s, i, r) {
          const o = this.getKey();
          return this.createTile_(t, e, s, i, r, o);
        }
        setRenderReprojectionEdges(t) {
          this.renderReprojectionEdges_ != t && (this.renderReprojectionEdges_ = t, this.changed());
        }
        setTileGridForProjection(t, e) {
          const s = It(t);
          if (s) {
            const i = vt(s);
            i in this.tileGridForProjection || (this.tileGridForProjection[i] = e);
          }
        }
      }
      function By(n, t) {
        n.getImage().src = t;
      }
      function kr(n) {
        if (n.__esModule) return n;
        var t = n.default;
        if (typeof t == "function") {
          var e = function s() {
            return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
          };
          e.prototype = t.prototype;
        } else e = {};
        return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(n).forEach(function(s) {
          var i = Object.getOwnPropertyDescriptor(n, s);
          Object.defineProperty(e, s, i.get ? i : { enumerable: !0, get: function() {
            return n[s];
          } });
        }), e;
      }
      class jy extends Uy {
        constructor(t) {
          const e = t.requestEncoding !== void 0 ? t.requestEncoding : "KVP", s = t.tileGrid;
          let i = t.urls;
          i === void 0 && t.url !== void 0 && (i = Jd(t.url)), super({ attributions: t.attributions, attributionsCollapsible: t.attributionsCollapsible, cacheSize: t.cacheSize, crossOrigin: t.crossOrigin, interpolate: t.interpolate, projection: t.projection, reprojectionErrorThreshold: t.reprojectionErrorThreshold, tileClass: t.tileClass, tileGrid: s, tileLoadFunction: t.tileLoadFunction, tilePixelRatio: t.tilePixelRatio, urls: i, wrapX: t.wrapX !== void 0 ? t.wrapX : !1, transition: t.transition, zDirection: t.zDirection }), this.version_ = t.version !== void 0 ? t.version : "1.0.0", this.format_ = t.format !== void 0 ? t.format : "image/jpeg", this.dimensions_ = t.dimensions !== void 0 ? t.dimensions : {}, this.layer_ = t.layer, this.matrixSet_ = t.matrixSet, this.style_ = t.style, this.requestEncoding_ = e, this.setKey(this.getKeyForDimensions_()), i && i.length > 0 && (this.tileUrlFunction = Il(i.map(this.createFromWMTSTemplate.bind(this))));
        }
        setUrls(t) {
          this.urls = t;
          const e = t.join(`
`);
          this.setTileUrlFunction(Il(t.map(this.createFromWMTSTemplate.bind(this))), e);
        }
        getDimensions() {
          return this.dimensions_;
        }
        getFormat() {
          return this.format_;
        }
        getLayer() {
          return this.layer_;
        }
        getMatrixSet() {
          return this.matrixSet_;
        }
        getRequestEncoding() {
          return this.requestEncoding_;
        }
        getStyle() {
          return this.style_;
        }
        getVersion() {
          return this.version_;
        }
        getKeyForDimensions_() {
          const t = this.urls ? this.urls.slice(0) : [];
          for (const e in this.dimensions_) t.push(e + "-" + this.dimensions_[e]);
          return t.join("/");
        }
        updateDimensions(t) {
          Object.assign(this.dimensions_, t), this.setKey(this.getKeyForDimensions_());
        }
        createFromWMTSTemplate(t) {
          const e = this.requestEncoding_, s = { layer: this.layer_, style: this.style_, tilematrixset: this.matrixSet_ };
          e == "KVP" && Object.assign(s, { Service: "WMTS", Request: "GetTile", Version: this.version_, Format: this.format_ }), t = e == "KVP" ? Hd(t, s) : t.replace(/\{(\w+?)\}/g, function(o, a) {
            return a.toLowerCase() in s ? s[a.toLowerCase()] : o;
          });
          const i = this.tileGrid, r = this.dimensions_;
          return function(o, a, h) {
            if (!o) return;
            const l = { TileMatrix: i.getMatrixId(o[0]), TileCol: o[1], TileRow: o[2] };
            Object.assign(l, r);
            let u = t;
            return e == "KVP" ? u = Hd(u, l) : u = u.replace(/\{(\w+?)\}/g, function(c, d) {
              return encodeURIComponent(l[d]);
            }), u;
          };
        }
      }
      class Wy {
        constructor() {
          this.dataProjection = void 0, this.defaultFeatureProjection = void 0, this.featureClass = na, this.supportedMediaTypes = null;
        }
        getReadOptions(t, e) {
          if (e) {
            let s = e.dataProjection ? It(e.dataProjection) : this.readProjection(t);
            e.extent && s && s.getUnits() === "tile-pixels" && (s = It(s), s.setWorldExtent(e.extent)), e = { dataProjection: s, featureProjection: e.featureProjection };
          }
          return this.adaptOptions(e);
        }
        adaptOptions(t) {
          return Object.assign({ dataProjection: this.dataProjection, featureProjection: this.defaultFeatureProjection, featureClass: this.featureClass }, t);
        }
        getType() {
          return dt();
        }
        readFeature(t, e) {
          return dt();
        }
        readFeatures(t, e) {
          return dt();
        }
        readGeometry(t, e) {
          return dt();
        }
        readProjection(t) {
          return dt();
        }
        writeFeature(t, e) {
          return dt();
        }
        writeFeatures(t, e) {
          return dt();
        }
        writeGeometry(t, e) {
          return dt();
        }
      }
      function Pl(n, t, e) {
        const s = e ? It(e.featureProjection) : null, i = e ? It(e.dataProjection) : null;
        let r = n;
        if (s && i && !hr(s, i)) {
          t && (r = n.clone());
          const o = t ? s : i, a = t ? i : s;
          o.getUnits() === "tile-pixels" ? r.transform(o, a) : r.applyTransform(ai(o, a));
        }
        if (t && e && e.decimals !== void 0) {
          const o = Math.pow(10, e.decimals), a = function(h) {
            for (let l = 0, u = h.length; l < u; ++l) h[l] = Math.round(h[l] * o) / o;
            return h;
          };
          r === n && (r = n.clone()), r.applyTransform(a);
        }
        return r;
      }
      function Ll(n, t) {
        const e = t ? It(t.featureProjection) : null, s = t ? It(t.dataProjection) : null;
        return e && s && !hr(e, s) ? Tp(n, s, e) : n;
      }
      const Yy = "http://www.w3.org/2001/XMLSchema-instance";
      function Nt(n, t) {
        return nf().createElementNS(n, t);
      }
      function da(n, t) {
        return Qd(n, t, []).join("");
      }
      function Qd(n, t, e) {
        if (n.nodeType == Node.CDATA_SECTION_NODE || n.nodeType == Node.TEXT_NODE) e.push(n.nodeValue);
        else {
          let s;
          for (s = n.firstChild; s; s = s.nextSibling) Qd(s, t, e);
        }
        return e;
      }
      function fa(n) {
        return "documentElement" in n;
      }
      function Xy(n, t, e) {
        return n.getAttributeNS(t, e) || "";
      }
      function ga(n) {
        return new DOMParser().parseFromString(n, "application/xml");
      }
      function tf(n, t) {
        return function(e, s) {
          const i = n.call(this, e, s);
          if (i !== void 0) {
            const r = s[s.length - 1];
            pe(r, i);
          }
        };
      }
      function ut(n, t) {
        return function(e, s) {
          const i = n.call(t ?? this, e, s);
          i !== void 0 && s[s.length - 1].push(i);
        };
      }
      function st(n, t) {
        return function(e, s) {
          const i = n.call(t ?? this, e, s);
          i !== void 0 && (s[s.length - 1] = i);
        };
      }
      function K(n, t) {
        return function(e, s, i) {
          n.call(t ?? this, e, s, i), i[i.length - 1].node.appendChild(e);
        };
      }
      function Ii(n, t) {
        return function(e, s, i) {
          const r = s[s.length - 1].node;
          let o = n;
          o === void 0 && (o = i);
          const a = t !== void 0 ? t : r.namespaceURI;
          return Nt(a, o);
        };
      }
      const ef = Ii();
      function Ai(n, t, e, s) {
        let i;
        for (i = t.firstElementChild; i; i = i.nextElementSibling) {
          const r = n[i.namespaceURI];
          if (r !== void 0) {
            const o = r[i.localName];
            o !== void 0 && o.call(s, i, e);
          }
        }
      }
      function Ft(n, t, e, s, i) {
        return s.push(n), Ai(t, e, s, i), s.pop();
      }
      function qy(n, t, e, s, i, r) {
        const o = (i !== void 0 ? i : e).length;
        let a, h;
        for (let l = 0; l < o; ++l) a = e[l], a !== void 0 && (h = t.call(r, a, s, i !== void 0 ? i[l] : void 0), h !== void 0 && n[h.namespaceURI][h.localName].call(r, h, a, s));
      }
      function _e(n, t, e, s, i, r, o) {
        return i.push(n), qy(t, e, s, i, r, o), i.pop();
      }
      let Ol;
      function Vy() {
        return Ol === void 0 && typeof XMLSerializer < "u" && (Ol = new XMLSerializer()), Ol;
      }
      let Nl;
      function nf() {
        return Nl === void 0 && typeof document < "u" && (Nl = document.implementation.createDocument("", "", null)), Nl;
      }
      class $y extends Wy {
        constructor() {
          super(), this.xmlSerializer_ = Vy();
        }
        getType() {
          return "xml";
        }
        readFeature(t, e) {
          if (!t) return null;
          if (typeof t == "string") {
            const s = ga(t);
            return this.readFeatureFromDocument(s, e);
          }
          return fa(t) ? this.readFeatureFromDocument(t, e) : this.readFeatureFromNode(t, e);
        }
        readFeatureFromDocument(t, e) {
          const s = this.readFeaturesFromDocument(t, e);
          return s.length > 0 ? s[0] : null;
        }
        readFeatureFromNode(t, e) {
          return null;
        }
        readFeatures(t, e) {
          if (!t) return [];
          if (typeof t == "string") {
            const s = ga(t);
            return this.readFeaturesFromDocument(s, e);
          }
          return fa(t) ? this.readFeaturesFromDocument(t, e) : this.readFeaturesFromNode(t, e);
        }
        readFeaturesFromDocument(t, e) {
          const s = [];
          for (let i = t.firstChild; i; i = i.nextSibling) i.nodeType == Node.ELEMENT_NODE && pe(s, this.readFeaturesFromNode(i, e));
          return s;
        }
        readFeaturesFromNode(t, e) {
          return dt();
        }
        readGeometry(t, e) {
          if (!t) return null;
          if (typeof t == "string") {
            const s = ga(t);
            return this.readGeometryFromDocument(s, e);
          }
          return fa(t) ? this.readGeometryFromDocument(t, e) : this.readGeometryFromNode(t, e);
        }
        readGeometryFromDocument(t, e) {
          return null;
        }
        readGeometryFromNode(t, e) {
          return null;
        }
        readProjection(t) {
          if (!t) return null;
          if (typeof t == "string") {
            const e = ga(t);
            return this.readProjectionFromDocument(e);
          }
          return fa(t) ? this.readProjectionFromDocument(t) : this.readProjectionFromNode(t);
        }
        readProjectionFromDocument(t) {
          return this.dataProjection;
        }
        readProjectionFromNode(t) {
          return this.dataProjection;
        }
        writeFeature(t, e) {
          const s = this.writeFeatureNode(t, e);
          return this.xmlSerializer_.serializeToString(s);
        }
        writeFeatureNode(t, e) {
          return null;
        }
        writeFeatures(t, e) {
          const s = this.writeFeaturesNode(t, e);
          return this.xmlSerializer_.serializeToString(s);
        }
        writeFeaturesNode(t, e) {
          return null;
        }
        writeGeometry(t, e) {
          const s = this.writeGeometryNode(t, e);
          return this.xmlSerializer_.serializeToString(s);
        }
        writeGeometryNode(t, e) {
          return null;
        }
      }
      const pa = "http://www.opengis.net/gml", Zy = /^\s*$/;
      class tt extends $y {
        constructor(t) {
          super(), t = t || {}, this.featureType = t.featureType, this.featureNS = t.featureNS, this.srsName = t.srsName, this.schemaLocation = "", this.FEATURE_COLLECTION_PARSERS = {}, this.FEATURE_COLLECTION_PARSERS[this.namespace] = { featureMember: ut(this.readFeaturesInternal), featureMembers: st(this.readFeaturesInternal) }, this.supportedMediaTypes = ["application/gml+xml"];
        }
        readFeaturesInternal(t, e) {
          const s = t.localName;
          let i = null;
          if (s == "FeatureCollection") i = Ft([], this.FEATURE_COLLECTION_PARSERS, t, e, this);
          else if (s == "featureMembers" || s == "featureMember" || s == "member") {
            const r = e[0];
            let o = r.featureType, a = r.featureNS;
            const h = "p", l = "p0";
            if (!o && t.childNodes) {
              o = [], a = {};
              for (let d = 0, p = t.childNodes.length; d < p; ++d) {
                const f = t.childNodes[d];
                if (f.nodeType === 1) {
                  const y = f.nodeName.split(":").pop();
                  if (!o.includes(y)) {
                    let E = "", M = 0;
                    const w = f.namespaceURI;
                    for (const C in a) {
                      if (a[C] === w) {
                        E = C;
                        break;
                      }
                      ++M;
                    }
                    E || (E = h + M, a[E] = w), o.push(E + ":" + y);
                  }
                }
              }
              s != "featureMember" && (r.featureType = o, r.featureNS = a);
            }
            if (typeof a == "string") {
              const d = a;
              a = {}, a[l] = d;
            }
            const u = {}, c = Array.isArray(o) ? o : [o];
            for (const d in a) {
              const p = {};
              for (let f = 0, y = c.length; f < y; ++f) (c[f].includes(":") ? c[f].split(":")[0] : l) === d && (p[c[f].split(":").pop()] = s == "featureMembers" ? ut(this.readFeatureElement, this) : st(this.readFeatureElement, this));
              u[a[d]] = p;
            }
            s == "featureMember" || s == "member" ? i = Ft(void 0, u, t, e) : i = Ft([], u, t, e);
          }
          return i === null && (i = []), i;
        }
        readGeometryOrExtent(t, e) {
          const s = e[0];
          return s.srsName = t.firstElementChild.getAttribute("srsName"), s.srsDimension = t.firstElementChild.getAttribute("srsDimension"), Ft(null, this.GEOMETRY_PARSERS, t, e, this);
        }
        readExtentElement(t, e) {
          const s = e[0], i = this.readGeometryOrExtent(t, e);
          return i ? Ll(i, s) : void 0;
        }
        readGeometryElement(t, e) {
          const s = e[0], i = this.readGeometryOrExtent(t, e);
          return i ? Pl(i, !1, s) : void 0;
        }
        readFeatureElementInternal(t, e, s) {
          let i;
          const r = {};
          for (let h = t.firstElementChild; h; h = h.nextElementSibling) {
            let l;
            const u = h.localName;
            h.childNodes.length === 0 || h.childNodes.length === 1 && (h.firstChild.nodeType === 3 || h.firstChild.nodeType === 4) ? (l = da(h, !1), Zy.test(l) && (l = void 0)) : (s && (l = u === "boundedBy" ? this.readExtentElement(h, e) : this.readGeometryElement(h, e)), l ? u !== "boundedBy" && (i = u) : l = this.readFeatureElementInternal(h, e, !1));
            const c = h.attributes.length;
            if (c > 0 && !(l instanceof No)) {
              l = { _content_: l };
              for (let d = 0; d < c; d++) {
                const p = h.attributes[d].name;
                l[p] = h.attributes[d].value;
              }
            }
            r[u] ? (r[u] instanceof Array || (r[u] = [r[u]]), r[u].push(l)) : r[u] = l;
          }
          if (!s) return r;
          const o = new na(r);
          i && o.setGeometryName(i);
          const a = t.getAttribute("fid") || Xy(t, this.namespace, "id");
          return a && o.setId(a), o;
        }
        readFeatureElement(t, e) {
          return this.readFeatureElementInternal(t, e, !0);
        }
        readPoint(t, e) {
          const s = this.readFlatCoordinatesFromNode(t, e);
          if (s) return new ur(s, "XYZ");
        }
        readMultiPoint(t, e) {
          const s = Ft([], this.MULTIPOINT_PARSERS, t, e, this);
          if (s) return new Fr(s);
        }
        readMultiLineString(t, e) {
          const s = Ft([], this.MULTILINESTRING_PARSERS, t, e, this);
          if (s) return new Si(s);
        }
        readMultiPolygon(t, e) {
          const s = Ft([], this.MULTIPOLYGON_PARSERS, t, e, this);
          if (s) return new vi(s);
        }
        pointMemberParser(t, e) {
          Ai(this.POINTMEMBER_PARSERS, t, e, this);
        }
        lineStringMemberParser(t, e) {
          Ai(this.LINESTRINGMEMBER_PARSERS, t, e, this);
        }
        polygonMemberParser(t, e) {
          Ai(this.POLYGONMEMBER_PARSERS, t, e, this);
        }
        readLineString(t, e) {
          const s = this.readFlatCoordinatesFromNode(t, e);
          if (s) return new ts(s, "XYZ");
        }
        readFlatLinearRing(t, e) {
          const s = Ft(null, this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this);
          if (s) return s;
        }
        readLinearRing(t, e) {
          const s = this.readFlatCoordinatesFromNode(t, e);
          if (s) return new Ps(s, "XYZ");
        }
        readPolygon(t, e) {
          const s = Ft([null], this.FLAT_LINEAR_RINGS_PARSERS, t, e, this);
          if (s && s[0]) {
            const i = s[0], r = [i.length];
            let o, a;
            for (o = 1, a = s.length; o < a; ++o) pe(i, s[o]), r.push(i.length);
            return new hn(i, "XYZ", r);
          }
        }
        readFlatCoordinatesFromNode(t, e) {
          return Ft(null, this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this);
        }
        readGeometryFromNode(t, e) {
          return this.readGeometryElement(t, [this.getReadOptions(t, e || {})]) || null;
        }
        readFeaturesFromNode(t, e) {
          const s = { featureType: this.featureType, featureNS: this.featureNS };
          return Object.assign(s, this.getReadOptions(t, e)), this.readFeaturesInternal(t, [s]) || [];
        }
        readProjectionFromNode(t) {
          return It(this.srsName ? this.srsName : t.firstElementChild.getAttribute("srsName"));
        }
      }
      tt.prototype.namespace = pa, tt.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml": {} }, tt.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml": {} }, tt.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml": {} }, tt.prototype.MULTIPOINT_PARSERS = { "http://www.opengis.net/gml": { pointMember: ut(tt.prototype.pointMemberParser), pointMembers: ut(tt.prototype.pointMemberParser) } }, tt.prototype.MULTILINESTRING_PARSERS = { "http://www.opengis.net/gml": { lineStringMember: ut(tt.prototype.lineStringMemberParser), lineStringMembers: ut(tt.prototype.lineStringMemberParser) } }, tt.prototype.MULTIPOLYGON_PARSERS = { "http://www.opengis.net/gml": { polygonMember: ut(tt.prototype.polygonMemberParser), polygonMembers: ut(tt.prototype.polygonMemberParser) } }, tt.prototype.POINTMEMBER_PARSERS = { "http://www.opengis.net/gml": { Point: ut(tt.prototype.readFlatCoordinatesFromNode) } }, tt.prototype.LINESTRINGMEMBER_PARSERS = { "http://www.opengis.net/gml": { LineString: ut(tt.prototype.readLineString) } }, tt.prototype.POLYGONMEMBER_PARSERS = { "http://www.opengis.net/gml": { Polygon: ut(tt.prototype.readPolygon) } }, tt.prototype.RING_PARSERS = { "http://www.opengis.net/gml": { LinearRing: st(tt.prototype.readFlatLinearRing) } };
      function ma(n) {
        const t = /^\s*(\d+)\s*$/.exec(n);
        if (t) return parseInt(t[1], 10);
      }
      function We(n, t) {
        n.appendChild(nf().createTextNode(t));
      }
      const Ky = pa + " http://schemas.opengis.net/gml/2.1.2/feature.xsd", Hy = { MultiLineString: "lineStringMember", MultiCurve: "curveMember", MultiPolygon: "polygonMember", MultiSurface: "surfaceMember" };
      class _t extends tt {
        constructor(t) {
          t = t || {}, super(t), this.FEATURE_COLLECTION_PARSERS[pa].featureMember = ut(this.readFeaturesInternal), this.schemaLocation = t.schemaLocation ? t.schemaLocation : Ky;
        }
        readFlatCoordinates(t, e) {
          const s = da(t, !1).replace(/^\s*|\s*$/g, ""), i = e[0].srsName;
          let r = "enu";
          if (i) {
            const h = It(i);
            h && (r = h.getAxisOrientation());
          }
          const o = s.trim().split(/\s+/), a = [];
          for (let h = 0, l = o.length; h < l; h++) {
            const u = o[h].split(/,+/), c = parseFloat(u[0]), d = parseFloat(u[1]), p = u.length === 3 ? parseFloat(u[2]) : 0;
            r.startsWith("en") ? a.push(c, d, p) : a.push(d, c, p);
          }
          return a;
        }
        readBox(t, e) {
          const s = Ft([null], this.BOX_PARSERS_, t, e, this);
          return Ne(s[1][0], s[1][1], s[1][3], s[1][4]);
        }
        innerBoundaryIsParser(t, e) {
          const s = Ft(void 0, this.RING_PARSERS, t, e, this);
          s && e[e.length - 1].push(s);
        }
        outerBoundaryIsParser(t, e) {
          const s = Ft(void 0, this.RING_PARSERS, t, e, this);
          if (s) {
            const i = e[e.length - 1];
            i[0] = s;
          }
        }
        GEOMETRY_NODE_FACTORY_(t, e, s) {
          const i = e[e.length - 1], r = i.multiSurface, o = i.surface, a = i.multiCurve;
          return Array.isArray(t) ? s = "Envelope" : (s = t.getType(), s === "MultiPolygon" && r === !0 ? s = "MultiSurface" : s === "Polygon" && o === !0 ? s = "Surface" : s === "MultiLineString" && a === !0 && (s = "MultiCurve")), Nt("http://www.opengis.net/gml", s);
        }
        writeFeatureElement(t, e, s) {
          const i = e.getId();
          i && t.setAttribute("fid", i);
          const r = s[s.length - 1], o = r.featureNS, a = e.getGeometryName();
          r.serializers || (r.serializers = {}, r.serializers[o] = {});
          const h = [], l = [];
          if (e.hasProperties()) {
            const c = e.getProperties();
            for (const d in c) {
              const p = c[d];
              p != null && (h.push(d), l.push(p), d == a || typeof p.getSimplifiedGeometry == "function" ? d in r.serializers[o] || (r.serializers[o][d] = K(this.writeGeometryElement, this)) : d in r.serializers[o] || (r.serializers[o][d] = K(We)));
            }
          }
          const u = Object.assign({}, r);
          u.node = t, _e(u, r.serializers, Ii(void 0, o), l, s, h);
        }
        writeCurveOrLineString(t, e, s) {
          const i = s[s.length - 1].srsName;
          if (t.nodeName !== "LineStringSegment" && i && t.setAttribute("srsName", i), t.nodeName === "LineString" || t.nodeName === "LineStringSegment") {
            const r = this.createCoordinatesNode_(t.namespaceURI);
            t.appendChild(r), this.writeCoordinates_(r, e, s);
          } else if (t.nodeName === "Curve") {
            const r = Nt(t.namespaceURI, "segments");
            t.appendChild(r), this.writeCurveSegments_(r, e, s);
          }
        }
        writeLineStringOrCurveMember(t, e, s) {
          const i = this.GEOMETRY_NODE_FACTORY_(e, s);
          i && (t.appendChild(i), this.writeCurveOrLineString(i, e, s));
        }
        writeMultiCurveOrLineString(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName, a = i.curve;
          o && t.setAttribute("srsName", o);
          const h = e.getLineStrings();
          _e({ node: t, hasZ: r, srsName: o, curve: a }, this.LINESTRINGORCURVEMEMBER_SERIALIZERS, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, h, s, void 0, this);
        }
        writeGeometryElement(t, e, s) {
          const i = s[s.length - 1], r = Object.assign({}, i);
          r.node = t;
          let o;
          Array.isArray(e) ? o = Ll(e, i) : o = Pl(e, !0, i), _e(r, this.GEOMETRY_SERIALIZERS, this.GEOMETRY_NODE_FACTORY_, [o], s, void 0, this);
        }
        createCoordinatesNode_(t) {
          const e = Nt(t, "coordinates");
          return e.setAttribute("decimal", "."), e.setAttribute("cs", ","), e.setAttribute("ts", " "), e;
        }
        writeCoordinates_(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName, a = e.getCoordinates(), h = a.length, l = new Array(h);
          for (let u = 0; u < h; ++u) {
            const c = a[u];
            l[u] = this.getCoords_(c, o, r);
          }
          We(t, l.join(" "));
        }
        writeCurveSegments_(t, e, s) {
          const i = Nt(t.namespaceURI, "LineStringSegment");
          t.appendChild(i), this.writeCurveOrLineString(i, e, s);
        }
        writeSurfaceOrPolygon(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName;
          if (t.nodeName !== "PolygonPatch" && o && t.setAttribute("srsName", o), t.nodeName === "Polygon" || t.nodeName === "PolygonPatch") {
            const a = e.getLinearRings();
            _e({ node: t, hasZ: r, srsName: o }, this.RING_SERIALIZERS, this.RING_NODE_FACTORY_, a, s, void 0, this);
          } else if (t.nodeName === "Surface") {
            const a = Nt(t.namespaceURI, "patches");
            t.appendChild(a), this.writeSurfacePatches_(a, e, s);
          }
        }
        RING_NODE_FACTORY_(t, e, s) {
          const i = e[e.length - 1], r = i.node, o = i.exteriorWritten;
          return o === void 0 && (i.exteriorWritten = !0), Nt(r.namespaceURI, o !== void 0 ? "innerBoundaryIs" : "outerBoundaryIs");
        }
        writeSurfacePatches_(t, e, s) {
          const i = Nt(t.namespaceURI, "PolygonPatch");
          t.appendChild(i), this.writeSurfaceOrPolygon(i, e, s);
        }
        writeRing(t, e, s) {
          const i = Nt(t.namespaceURI, "LinearRing");
          t.appendChild(i), this.writeLinearRing(i, e, s);
        }
        getCoords_(t, e, s) {
          let i = (e ? It(e).getAxisOrientation() : "enu").startsWith("en") ? t[0] + "," + t[1] : t[1] + "," + t[0];
          if (s) {
            const r = t[2] || 0;
            i += "," + r;
          }
          return i;
        }
        writePoint(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName;
          o && t.setAttribute("srsName", o);
          const a = this.createCoordinatesNode_(t.namespaceURI);
          t.appendChild(a);
          const h = e.getCoordinates(), l = this.getCoords_(h, o, r);
          We(a, l);
        }
        writeMultiPoint(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName;
          o && t.setAttribute("srsName", o);
          const a = e.getPoints();
          _e({ node: t, hasZ: r, srsName: o }, this.POINTMEMBER_SERIALIZERS, Ii("pointMember"), a, s, void 0, this);
        }
        writePointMember(t, e, s) {
          const i = Nt(t.namespaceURI, "Point");
          t.appendChild(i), this.writePoint(i, e, s);
        }
        writeLinearRing(t, e, s) {
          const i = s[s.length - 1].srsName;
          i && t.setAttribute("srsName", i);
          const r = this.createCoordinatesNode_(t.namespaceURI);
          t.appendChild(r), this.writeCoordinates_(r, e, s);
        }
        writeMultiSurfaceOrPolygon(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName, a = i.surface;
          o && t.setAttribute("srsName", o);
          const h = e.getPolygons();
          _e({ node: t, hasZ: r, srsName: o, surface: a }, this.SURFACEORPOLYGONMEMBER_SERIALIZERS, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, h, s, void 0, this);
        }
        writeSurfaceOrPolygonMember(t, e, s) {
          const i = this.GEOMETRY_NODE_FACTORY_(e, s);
          i && (t.appendChild(i), this.writeSurfaceOrPolygon(i, e, s));
        }
        writeEnvelope(t, e, s) {
          const i = s[s.length - 1].srsName;
          i && t.setAttribute("srsName", i);
          const r = ["lowerCorner", "upperCorner"], o = [e[0] + " " + e[1], e[2] + " " + e[3]];
          _e({ node: t }, this.ENVELOPE_SERIALIZERS, ef, o, s, r, this);
        }
        MULTIGEOMETRY_MEMBER_NODE_FACTORY_(t, e, s) {
          const i = e[e.length - 1].node;
          return Nt("http://www.opengis.net/gml", Hy[i.nodeName]);
        }
      }
      _t.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml": { coordinates: st(_t.prototype.readFlatCoordinates) } }, _t.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml": { innerBoundaryIs: _t.prototype.innerBoundaryIsParser, outerBoundaryIs: _t.prototype.outerBoundaryIsParser } }, _t.prototype.BOX_PARSERS_ = { "http://www.opengis.net/gml": { coordinates: ut(_t.prototype.readFlatCoordinates) } }, _t.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml": { Point: st(tt.prototype.readPoint), MultiPoint: st(tt.prototype.readMultiPoint), LineString: st(tt.prototype.readLineString), MultiLineString: st(tt.prototype.readMultiLineString), LinearRing: st(tt.prototype.readLinearRing), Polygon: st(tt.prototype.readPolygon), MultiPolygon: st(tt.prototype.readMultiPolygon), Box: st(_t.prototype.readBox) } }, _t.prototype.GEOMETRY_SERIALIZERS = { "http://www.opengis.net/gml": { Curve: K(_t.prototype.writeCurveOrLineString), MultiCurve: K(_t.prototype.writeMultiCurveOrLineString), Point: K(_t.prototype.writePoint), MultiPoint: K(_t.prototype.writeMultiPoint), LineString: K(_t.prototype.writeCurveOrLineString), MultiLineString: K(_t.prototype.writeMultiCurveOrLineString), LinearRing: K(_t.prototype.writeLinearRing), Polygon: K(_t.prototype.writeSurfaceOrPolygon), MultiPolygon: K(_t.prototype.writeMultiSurfaceOrPolygon), Surface: K(_t.prototype.writeSurfaceOrPolygon), MultiSurface: K(_t.prototype.writeMultiSurfaceOrPolygon), Envelope: K(_t.prototype.writeEnvelope) } }, _t.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS = { "http://www.opengis.net/gml": { lineStringMember: K(_t.prototype.writeLineStringOrCurveMember), curveMember: K(_t.prototype.writeLineStringOrCurveMember) } }, _t.prototype.RING_SERIALIZERS = { "http://www.opengis.net/gml": { outerBoundaryIs: K(_t.prototype.writeRing), innerBoundaryIs: K(_t.prototype.writeRing) } }, _t.prototype.POINTMEMBER_SERIALIZERS = { "http://www.opengis.net/gml": { pointMember: K(_t.prototype.writePointMember) } }, _t.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS = { "http://www.opengis.net/gml": { surfaceMember: K(_t.prototype.writeSurfaceOrPolygonMember), polygonMember: K(_t.prototype.writeSurfaceOrPolygonMember) } }, _t.prototype.ENVELOPE_SERIALIZERS = { "http://www.opengis.net/gml": { lowerCorner: K(We), upperCorner: K(We) } };
      const Jy = pa + " http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd", Qy = { MultiLineString: "lineStringMember", MultiCurve: "curveMember", MultiPolygon: "polygonMember", MultiSurface: "surfaceMember" };
      class G extends tt {
        constructor(t) {
          t = t || {}, super(t), this.surface_ = t.surface !== void 0 ? t.surface : !1, this.curve_ = t.curve !== void 0 ? t.curve : !1, this.multiCurve_ = t.multiCurve !== void 0 ? t.multiCurve : !0, this.multiSurface_ = t.multiSurface !== void 0 ? t.multiSurface : !0, this.schemaLocation = t.schemaLocation ? t.schemaLocation : Jy, this.hasZ = t.hasZ !== void 0 ? t.hasZ : !1;
        }
        readMultiCurve(t, e) {
          const s = Ft([], this.MULTICURVE_PARSERS, t, e, this);
          if (s) return new Si(s);
        }
        readFlatCurveRing(t, e) {
          const s = Ft([], this.MULTICURVE_PARSERS, t, e, this), i = [];
          for (let r = 0, o = s.length; r < o; ++r) pe(i, s[r].getFlatCoordinates());
          return i;
        }
        readMultiSurface(t, e) {
          const s = Ft([], this.MULTISURFACE_PARSERS, t, e, this);
          if (s) return new vi(s);
        }
        curveMemberParser(t, e) {
          Ai(this.CURVEMEMBER_PARSERS, t, e, this);
        }
        surfaceMemberParser(t, e) {
          Ai(this.SURFACEMEMBER_PARSERS, t, e, this);
        }
        readPatch(t, e) {
          return Ft([null], this.PATCHES_PARSERS, t, e, this);
        }
        readSegment(t, e) {
          return Ft([], this.SEGMENTS_PARSERS, t, e, this);
        }
        readPolygonPatch(t, e) {
          return Ft([null], this.FLAT_LINEAR_RINGS_PARSERS, t, e, this);
        }
        readLineStringSegment(t, e) {
          return Ft([null], this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this);
        }
        interiorParser(t, e) {
          const s = Ft(void 0, this.RING_PARSERS, t, e, this);
          s && e[e.length - 1].push(s);
        }
        exteriorParser(t, e) {
          const s = Ft(void 0, this.RING_PARSERS, t, e, this);
          if (s) {
            const i = e[e.length - 1];
            i[0] = s;
          }
        }
        readSurface(t, e) {
          const s = Ft([null], this.SURFACE_PARSERS, t, e, this);
          if (s && s[0]) {
            const i = s[0], r = [i.length];
            let o, a;
            for (o = 1, a = s.length; o < a; ++o) pe(i, s[o]), r.push(i.length);
            return new hn(i, "XYZ", r);
          }
        }
        readCurve(t, e) {
          const s = Ft([null], this.CURVE_PARSERS, t, e, this);
          if (s) return new ts(s, "XYZ");
        }
        readEnvelope(t, e) {
          const s = Ft([null], this.ENVELOPE_PARSERS, t, e, this);
          return Ne(s[1][0], s[1][1], s[2][0], s[2][1]);
        }
        readFlatPos(t, e) {
          let s = da(t, !1);
          const i = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, r = [];
          let o;
          for (; o = i.exec(s); ) r.push(parseFloat(o[1])), s = s.substr(o[0].length);
          if (s !== "") return;
          const a = e[0].srsName;
          if ((a ? It(a).getAxisOrientation() : "enu") === "neu") for (let l = 0, u = r.length; l < u; l += 3) {
            const c = r[l], d = r[l + 1];
            r[l] = d, r[l + 1] = c;
          }
          const h = r.length;
          if (h == 2 && r.push(0), h !== 0) return r;
        }
        readFlatPosList(t, e) {
          const s = da(t, !1).replace(/^\s*|\s*$/g, ""), i = e[0], r = i.srsName, o = i.srsDimension, a = r ? It(r).getAxisOrientation() : "enu", h = s.split(/\s+/);
          let l = 2;
          t.getAttribute("srsDimension") ? l = ma(t.getAttribute("srsDimension")) : t.getAttribute("dimension") ? l = ma(t.getAttribute("dimension")) : t.parentNode.getAttribute("srsDimension") ? l = ma(t.parentNode.getAttribute("srsDimension")) : o && (l = ma(o));
          const u = a.startsWith("en");
          let c, d, p;
          const f = [];
          for (let y = 0, E = h.length; y < E; y += l) c = parseFloat(h[y]), d = parseFloat(h[y + 1]), p = l === 3 ? parseFloat(h[y + 2]) : 0, u ? f.push(c, d, p) : f.push(d, c, p);
          return f;
        }
        writePos_(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = r ? "3" : "2";
          t.setAttribute("srsDimension", o);
          const a = i.srsName, h = a ? It(a).getAxisOrientation() : "enu", l = e.getCoordinates();
          let u = h.startsWith("en") ? l[0] + " " + l[1] : l[1] + " " + l[0];
          if (r) {
            const c = l[2] || 0;
            u += " " + c;
          }
          We(t, u);
        }
        getCoords_(t, e, s) {
          let i = (e ? It(e).getAxisOrientation() : "enu").startsWith("en") ? t[0] + " " + t[1] : t[1] + " " + t[0];
          if (s) {
            const r = t[2] || 0;
            i += " " + r;
          }
          return i;
        }
        writePosList_(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = r ? "3" : "2";
          t.setAttribute("srsDimension", o);
          const a = i.srsName, h = e.getCoordinates(), l = h.length, u = new Array(l);
          let c;
          for (let d = 0; d < l; ++d) c = h[d], u[d] = this.getCoords_(c, a, r);
          We(t, u.join(" "));
        }
        writePoint(t, e, s) {
          const i = s[s.length - 1].srsName;
          i && t.setAttribute("srsName", i);
          const r = Nt(t.namespaceURI, "pos");
          t.appendChild(r), this.writePos_(r, e, s);
        }
        writeEnvelope(t, e, s) {
          const i = s[s.length - 1].srsName;
          i && t.setAttribute("srsName", i);
          const r = ["lowerCorner", "upperCorner"], o = [e[0] + " " + e[1], e[2] + " " + e[3]];
          _e({ node: t }, this.ENVELOPE_SERIALIZERS, ef, o, s, r, this);
        }
        writeLinearRing(t, e, s) {
          const i = s[s.length - 1].srsName;
          i && t.setAttribute("srsName", i);
          const r = Nt(t.namespaceURI, "posList");
          t.appendChild(r), this.writePosList_(r, e, s);
        }
        RING_NODE_FACTORY_(t, e, s) {
          const i = e[e.length - 1], r = i.node, o = i.exteriorWritten;
          return o === void 0 && (i.exteriorWritten = !0), Nt(r.namespaceURI, o !== void 0 ? "interior" : "exterior");
        }
        writeSurfaceOrPolygon(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName;
          if (t.nodeName !== "PolygonPatch" && o && t.setAttribute("srsName", o), t.nodeName === "Polygon" || t.nodeName === "PolygonPatch") {
            const a = e.getLinearRings();
            _e({ node: t, hasZ: r, srsName: o }, this.RING_SERIALIZERS, this.RING_NODE_FACTORY_, a, s, void 0, this);
          } else if (t.nodeName === "Surface") {
            const a = Nt(t.namespaceURI, "patches");
            t.appendChild(a), this.writeSurfacePatches_(a, e, s);
          }
        }
        writeCurveOrLineString(t, e, s) {
          const i = s[s.length - 1].srsName;
          if (t.nodeName !== "LineStringSegment" && i && t.setAttribute("srsName", i), t.nodeName === "LineString" || t.nodeName === "LineStringSegment") {
            const r = Nt(t.namespaceURI, "posList");
            t.appendChild(r), this.writePosList_(r, e, s);
          } else if (t.nodeName === "Curve") {
            const r = Nt(t.namespaceURI, "segments");
            t.appendChild(r), this.writeCurveSegments_(r, e, s);
          }
        }
        writeMultiSurfaceOrPolygon(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName, a = i.surface;
          o && t.setAttribute("srsName", o);
          const h = e.getPolygons();
          _e({ node: t, hasZ: r, srsName: o, surface: a }, this.SURFACEORPOLYGONMEMBER_SERIALIZERS, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, h, s, void 0, this);
        }
        writeMultiPoint(t, e, s) {
          const i = s[s.length - 1], r = i.srsName, o = i.hasZ;
          r && t.setAttribute("srsName", r);
          const a = e.getPoints();
          _e({ node: t, hasZ: o, srsName: r }, this.POINTMEMBER_SERIALIZERS, Ii("pointMember"), a, s, void 0, this);
        }
        writeMultiCurveOrLineString(t, e, s) {
          const i = s[s.length - 1], r = i.hasZ, o = i.srsName, a = i.curve;
          o && t.setAttribute("srsName", o);
          const h = e.getLineStrings();
          _e({ node: t, hasZ: r, srsName: o, curve: a }, this.LINESTRINGORCURVEMEMBER_SERIALIZERS, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, h, s, void 0, this);
        }
        writeRing(t, e, s) {
          const i = Nt(t.namespaceURI, "LinearRing");
          t.appendChild(i), this.writeLinearRing(i, e, s);
        }
        writeSurfaceOrPolygonMember(t, e, s) {
          const i = this.GEOMETRY_NODE_FACTORY_(e, s);
          i && (t.appendChild(i), this.writeSurfaceOrPolygon(i, e, s));
        }
        writePointMember(t, e, s) {
          const i = Nt(t.namespaceURI, "Point");
          t.appendChild(i), this.writePoint(i, e, s);
        }
        writeLineStringOrCurveMember(t, e, s) {
          const i = this.GEOMETRY_NODE_FACTORY_(e, s);
          i && (t.appendChild(i), this.writeCurveOrLineString(i, e, s));
        }
        writeSurfacePatches_(t, e, s) {
          const i = Nt(t.namespaceURI, "PolygonPatch");
          t.appendChild(i), this.writeSurfaceOrPolygon(i, e, s);
        }
        writeCurveSegments_(t, e, s) {
          const i = Nt(t.namespaceURI, "LineStringSegment");
          t.appendChild(i), this.writeCurveOrLineString(i, e, s);
        }
        writeGeometryElement(t, e, s) {
          const i = s[s.length - 1], r = Object.assign({}, i);
          r.node = t;
          let o;
          Array.isArray(e) ? o = Ll(e, i) : o = Pl(e, !0, i), _e(r, this.GEOMETRY_SERIALIZERS, this.GEOMETRY_NODE_FACTORY_, [o], s, void 0, this);
        }
        writeFeatureElement(t, e, s) {
          const i = e.getId();
          i && t.setAttribute("fid", i);
          const r = s[s.length - 1], o = r.featureNS, a = e.getGeometryName();
          r.serializers || (r.serializers = {}, r.serializers[o] = {});
          const h = [], l = [];
          if (e.hasProperties()) {
            const c = e.getProperties();
            for (const d in c) {
              const p = c[d];
              p != null && (h.push(d), l.push(p), d == a || typeof p.getSimplifiedGeometry == "function" ? d in r.serializers[o] || (r.serializers[o][d] = K(this.writeGeometryElement, this)) : d in r.serializers[o] || (r.serializers[o][d] = K(We)));
            }
          }
          const u = Object.assign({}, r);
          u.node = t, _e(u, r.serializers, Ii(void 0, o), l, s, h);
        }
        writeFeatureMembers_(t, e, s) {
          const i = s[s.length - 1], r = i.featureType, o = i.featureNS, a = {};
          a[o] = {}, a[o][r] = K(this.writeFeatureElement, this);
          const h = Object.assign({}, i);
          h.node = t, _e(h, a, Ii(r, o), e, s);
        }
        MULTIGEOMETRY_MEMBER_NODE_FACTORY_(t, e, s) {
          const i = e[e.length - 1].node;
          return Nt(this.namespace, Qy[i.nodeName]);
        }
        GEOMETRY_NODE_FACTORY_(t, e, s) {
          const i = e[e.length - 1], r = i.multiSurface, o = i.surface, a = i.curve, h = i.multiCurve;
          return Array.isArray(t) ? s = "Envelope" : (s = t.getType(), s === "MultiPolygon" && r === !0 ? s = "MultiSurface" : s === "Polygon" && o === !0 ? s = "Surface" : s === "LineString" && a === !0 ? s = "Curve" : s === "MultiLineString" && h === !0 && (s = "MultiCurve")), Nt(this.namespace, s);
        }
        writeGeometryNode(t, e) {
          e = this.adaptOptions(e);
          const s = Nt(this.namespace, "geom"), i = { node: s, hasZ: this.hasZ, srsName: this.srsName, curve: this.curve_, surface: this.surface_, multiSurface: this.multiSurface_, multiCurve: this.multiCurve_ };
          return e && Object.assign(i, e), this.writeGeometryElement(s, t, [i]), s;
        }
        writeFeaturesNode(t, e) {
          e = this.adaptOptions(e);
          const s = Nt(this.namespace, "featureMembers");
          s.setAttributeNS(Yy, "xsi:schemaLocation", this.schemaLocation);
          const i = { srsName: this.srsName, hasZ: this.hasZ, curve: this.curve_, surface: this.surface_, multiSurface: this.multiSurface_, multiCurve: this.multiCurve_, featureNS: this.featureNS, featureType: this.featureType };
          return e && Object.assign(i, e), this.writeFeatureMembers_(s, t, [i]), s;
        }
      }
      G.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml": { pos: st(G.prototype.readFlatPos), posList: st(G.prototype.readFlatPosList), coordinates: st(_t.prototype.readFlatCoordinates) } }, G.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml": { interior: G.prototype.interiorParser, exterior: G.prototype.exteriorParser } }, G.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml": { Point: st(tt.prototype.readPoint), MultiPoint: st(tt.prototype.readMultiPoint), LineString: st(tt.prototype.readLineString), MultiLineString: st(tt.prototype.readMultiLineString), LinearRing: st(tt.prototype.readLinearRing), Polygon: st(tt.prototype.readPolygon), MultiPolygon: st(tt.prototype.readMultiPolygon), Surface: st(G.prototype.readSurface), MultiSurface: st(G.prototype.readMultiSurface), Curve: st(G.prototype.readCurve), MultiCurve: st(G.prototype.readMultiCurve), Envelope: st(G.prototype.readEnvelope) } }, G.prototype.MULTICURVE_PARSERS = { "http://www.opengis.net/gml": { curveMember: ut(G.prototype.curveMemberParser), curveMembers: ut(G.prototype.curveMemberParser) } }, G.prototype.MULTISURFACE_PARSERS = { "http://www.opengis.net/gml": { surfaceMember: ut(G.prototype.surfaceMemberParser), surfaceMembers: ut(G.prototype.surfaceMemberParser) } }, G.prototype.CURVEMEMBER_PARSERS = { "http://www.opengis.net/gml": { LineString: ut(tt.prototype.readLineString), Curve: ut(G.prototype.readCurve) } }, G.prototype.SURFACEMEMBER_PARSERS = { "http://www.opengis.net/gml": { Polygon: ut(tt.prototype.readPolygon), Surface: ut(G.prototype.readSurface) } }, G.prototype.SURFACE_PARSERS = { "http://www.opengis.net/gml": { patches: st(G.prototype.readPatch) } }, G.prototype.CURVE_PARSERS = { "http://www.opengis.net/gml": { segments: st(G.prototype.readSegment) } }, G.prototype.ENVELOPE_PARSERS = { "http://www.opengis.net/gml": { lowerCorner: ut(G.prototype.readFlatPosList), upperCorner: ut(G.prototype.readFlatPosList) } }, G.prototype.PATCHES_PARSERS = { "http://www.opengis.net/gml": { PolygonPatch: st(G.prototype.readPolygonPatch) } }, G.prototype.SEGMENTS_PARSERS = { "http://www.opengis.net/gml": { LineStringSegment: tf(G.prototype.readLineStringSegment) } }, tt.prototype.RING_PARSERS = { "http://www.opengis.net/gml": { LinearRing: st(tt.prototype.readFlatLinearRing), Ring: st(G.prototype.readFlatCurveRing) } }, G.prototype.RING_SERIALIZERS = { "http://www.opengis.net/gml": { exterior: K(G.prototype.writeRing), interior: K(G.prototype.writeRing) } }, G.prototype.ENVELOPE_SERIALIZERS = { "http://www.opengis.net/gml": { lowerCorner: K(We), upperCorner: K(We) } }, G.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS = { "http://www.opengis.net/gml": { surfaceMember: K(G.prototype.writeSurfaceOrPolygonMember), polygonMember: K(G.prototype.writeSurfaceOrPolygonMember) } }, G.prototype.POINTMEMBER_SERIALIZERS = { "http://www.opengis.net/gml": { pointMember: K(G.prototype.writePointMember) } }, G.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS = { "http://www.opengis.net/gml": { lineStringMember: K(G.prototype.writeLineStringOrCurveMember), curveMember: K(G.prototype.writeLineStringOrCurveMember) } }, G.prototype.GEOMETRY_SERIALIZERS = { "http://www.opengis.net/gml": { Curve: K(G.prototype.writeCurveOrLineString), MultiCurve: K(G.prototype.writeMultiCurveOrLineString), Point: K(G.prototype.writePoint), MultiPoint: K(G.prototype.writeMultiPoint), LineString: K(G.prototype.writeCurveOrLineString), MultiLineString: K(G.prototype.writeMultiCurveOrLineString), LinearRing: K(G.prototype.writeLinearRing), Polygon: K(G.prototype.writeSurfaceOrPolygon), MultiPolygon: K(G.prototype.writeMultiSurfaceOrPolygon), Surface: K(G.prototype.writeSurfaceOrPolygon), MultiSurface: K(G.prototype.writeMultiSurfaceOrPolygon), Envelope: K(G.prototype.writeEnvelope) } };
      class St extends G {
        constructor(t) {
          t = t || {}, super(t), this.schemaLocation = t.schemaLocation ? t.schemaLocation : this.namespace + " http://schemas.opengis.net/gml/3.2.1/gml.xsd";
        }
        writeGeometryElement(t, e, s) {
          const i = s[s.length - 1];
          s[s.length - 1] = Object.assign({ multiCurve: !0, multiSurface: !0 }, i), super.writeGeometryElement(t, e, s);
        }
      }
      St.prototype.namespace = "http://www.opengis.net/gml/3.2", St.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml/3.2": { pos: st(G.prototype.readFlatPos), posList: st(G.prototype.readFlatPosList), coordinates: st(_t.prototype.readFlatCoordinates) } }, St.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml/3.2": { interior: G.prototype.interiorParser, exterior: G.prototype.exteriorParser } }, St.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml/3.2": { Point: st(tt.prototype.readPoint), MultiPoint: st(tt.prototype.readMultiPoint), LineString: st(tt.prototype.readLineString), MultiLineString: st(tt.prototype.readMultiLineString), LinearRing: st(tt.prototype.readLinearRing), Polygon: st(tt.prototype.readPolygon), MultiPolygon: st(tt.prototype.readMultiPolygon), Surface: st(St.prototype.readSurface), MultiSurface: st(G.prototype.readMultiSurface), Curve: st(St.prototype.readCurve), MultiCurve: st(G.prototype.readMultiCurve), Envelope: st(St.prototype.readEnvelope) } }, St.prototype.MULTICURVE_PARSERS = { "http://www.opengis.net/gml/3.2": { curveMember: ut(G.prototype.curveMemberParser), curveMembers: ut(G.prototype.curveMemberParser) } }, St.prototype.MULTISURFACE_PARSERS = { "http://www.opengis.net/gml/3.2": { surfaceMember: ut(G.prototype.surfaceMemberParser), surfaceMembers: ut(G.prototype.surfaceMemberParser) } }, St.prototype.CURVEMEMBER_PARSERS = { "http://www.opengis.net/gml/3.2": { LineString: ut(tt.prototype.readLineString), Curve: ut(G.prototype.readCurve) } }, St.prototype.SURFACEMEMBER_PARSERS = { "http://www.opengis.net/gml/3.2": { Polygon: ut(tt.prototype.readPolygon), Surface: ut(G.prototype.readSurface) } }, St.prototype.SURFACE_PARSERS = { "http://www.opengis.net/gml/3.2": { patches: st(G.prototype.readPatch) } }, St.prototype.CURVE_PARSERS = { "http://www.opengis.net/gml/3.2": { segments: st(G.prototype.readSegment) } }, St.prototype.ENVELOPE_PARSERS = { "http://www.opengis.net/gml/3.2": { lowerCorner: ut(G.prototype.readFlatPosList), upperCorner: ut(G.prototype.readFlatPosList) } }, St.prototype.PATCHES_PARSERS = { "http://www.opengis.net/gml/3.2": { PolygonPatch: st(G.prototype.readPolygonPatch) } }, St.prototype.SEGMENTS_PARSERS = { "http://www.opengis.net/gml/3.2": { LineStringSegment: tf(G.prototype.readLineStringSegment) } }, St.prototype.MULTIPOINT_PARSERS = { "http://www.opengis.net/gml/3.2": { pointMember: ut(tt.prototype.pointMemberParser), pointMembers: ut(tt.prototype.pointMemberParser) } }, St.prototype.MULTILINESTRING_PARSERS = { "http://www.opengis.net/gml/3.2": { lineStringMember: ut(tt.prototype.lineStringMemberParser), lineStringMembers: ut(tt.prototype.lineStringMemberParser) } }, St.prototype.MULTIPOLYGON_PARSERS = { "http://www.opengis.net/gml/3.2": { polygonMember: ut(tt.prototype.polygonMemberParser), polygonMembers: ut(tt.prototype.polygonMemberParser) } }, St.prototype.POINTMEMBER_PARSERS = { "http://www.opengis.net/gml/3.2": { Point: ut(tt.prototype.readFlatCoordinatesFromNode) } }, St.prototype.LINESTRINGMEMBER_PARSERS = { "http://www.opengis.net/gml/3.2": { LineString: ut(tt.prototype.readLineString) } }, St.prototype.POLYGONMEMBER_PARSERS = { "http://www.opengis.net/gml/3.2": { Polygon: ut(tt.prototype.readPolygon) } }, St.prototype.RING_PARSERS = { "http://www.opengis.net/gml/3.2": { LinearRing: st(tt.prototype.readFlatLinearRing), Ring: st(St.prototype.readFlatCurveRing) } }, St.prototype.RING_SERIALIZERS = { "http://www.opengis.net/gml/3.2": { exterior: K(G.prototype.writeRing), interior: K(G.prototype.writeRing) } }, St.prototype.ENVELOPE_SERIALIZERS = { "http://www.opengis.net/gml/3.2": { lowerCorner: K(We), upperCorner: K(We) } }, St.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS = { "http://www.opengis.net/gml/3.2": { surfaceMember: K(G.prototype.writeSurfaceOrPolygonMember), polygonMember: K(G.prototype.writeSurfaceOrPolygonMember) } }, St.prototype.POINTMEMBER_SERIALIZERS = { "http://www.opengis.net/gml/3.2": { pointMember: K(G.prototype.writePointMember) } }, St.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS = { "http://www.opengis.net/gml/3.2": { lineStringMember: K(G.prototype.writeLineStringOrCurveMember), curveMember: K(G.prototype.writeLineStringOrCurveMember) } }, St.prototype.GEOMETRY_SERIALIZERS = { "http://www.opengis.net/gml/3.2": { Curve: K(G.prototype.writeCurveOrLineString), MultiCurve: K(G.prototype.writeMultiCurveOrLineString), Point: K(St.prototype.writePoint), MultiPoint: K(G.prototype.writeMultiPoint), LineString: K(G.prototype.writeCurveOrLineString), MultiLineString: K(G.prototype.writeMultiCurveOrLineString), LinearRing: K(G.prototype.writeLinearRing), Polygon: K(G.prototype.writeSurfaceOrPolygon), MultiPolygon: K(G.prototype.writeMultiSurfaceOrPolygon), Surface: K(G.prototype.writeSurfaceOrPolygon), MultiSurface: K(G.prototype.writeMultiSurfaceOrPolygon), Envelope: K(G.prototype.writeEnvelope) } };
      function t1(n) {
        const t = Object.keys(n.defs), e = t.length;
        let s, i;
        for (s = 0; s < e; ++s) {
          const r = t[s];
          if (!xo(r)) {
            const o = n.defs(r);
            let a = o.units;
            !a && o.projName === "longlat" && (a = "degrees"), Oo(new _o({ code: r, axisOrientation: o.axis, metersPerUnit: o.to_meter, units: a }));
          }
        }
        for (s = 0; s < e; ++s) {
          const r = t[s], o = xo(r);
          for (i = 0; i < e; ++i) {
            const a = t[i], h = xo(a);
            if (!Eo(r, a)) if (n.defs[r] === n.defs[a]) ch([o, h]);
            else {
              const l = n(r, a);
              bp(o, h, nc(o, h, l.forward), nc(h, o, l.inverse));
            }
          }
        }
      }
      function e1(n) {
        n("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), n("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), n("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
        for (var t = 1; t <= 60; ++t) n("EPSG:" + (32600 + t), "+proj=utm +zone=" + t + " +datum=WGS84 +units=m"), n("EPSG:" + (32700 + t), "+proj=utm +zone=" + t + " +south +datum=WGS84 +units=m");
        n.WGS84 = n["EPSG:4326"], n["EPSG:3785"] = n["EPSG:3857"], n.GOOGLE = n["EPSG:3857"], n["EPSG:900913"] = n["EPSG:3857"], n["EPSG:102113"] = n["EPSG:3857"];
      }
      var zs = 1, Us = 2, Pi = 3, n1 = 4, Fl = 5, sf = 6378137, s1 = 6356752314e-3, rf = 0.0066943799901413165, Dr = 484813681109536e-20, D = Math.PI / 2, i1 = 0.16666666666666666, r1 = 0.04722222222222222, o1 = 0.022156084656084655, q = 1e-10, te = 0.017453292519943295, dn = 57.29577951308232, Ct = Math.PI / 4, Gr = Math.PI * 2, ee = 3.14159265359, Te = {};
      Te.greenwich = 0, Te.lisbon = -9.131906111111, Te.paris = 2.337229166667, Te.bogota = -74.080916666667, Te.madrid = -3.687938888889, Te.rome = 12.452333333333, Te.bern = 7.439583333333, Te.jakarta = 106.807719444444, Te.ferro = -17.666666666667, Te.brussels = 4.367975, Te.stockholm = 18.058277777778, Te.athens = 23.7163375, Te.oslo = 10.722916666667;
      const a1 = { mm: { to_meter: 1e-3 }, cm: { to_meter: 0.01 }, ft: { to_meter: 0.3048 }, "us-ft": { to_meter: 1200 / 3937 }, fath: { to_meter: 1.8288 }, kmi: { to_meter: 1852 }, "us-ch": { to_meter: 20.1168402336805 }, "us-mi": { to_meter: 1609.34721869444 }, km: { to_meter: 1e3 }, "ind-ft": { to_meter: 0.30479841 }, "ind-yd": { to_meter: 0.91439523 }, mi: { to_meter: 1609.344 }, yd: { to_meter: 0.9144 }, ch: { to_meter: 20.1168 }, link: { to_meter: 0.201168 }, dm: { to_meter: 0.01 }, in: { to_meter: 0.0254 }, "ind-ch": { to_meter: 20.11669506 }, "us-in": { to_meter: 0.025400050800101 }, "us-yd": { to_meter: 0.914401828803658 } };
      var of = /[\s_\-\/\(\)]/g;
      function os(n, t) {
        if (n[t]) return n[t];
        for (var e = Object.keys(n), s = t.toLowerCase().replace(of, ""), i = -1, r, o; ++i < e.length; ) if (r = e[i], o = r.toLowerCase().replace(of, ""), o === s) return n[r];
      }
      function kl(n) {
        var t = {}, e = n.split("+").map(function(a) {
          return a.trim();
        }).filter(function(a) {
          return a;
        }).reduce(function(a, h) {
          var l = h.split("=");
          return l.push(!0), a[l[0].toLowerCase()] = l[1], a;
        }, {}), s, i, r, o = { proj: "projName", datum: "datumCode", rf: function(a) {
          t.rf = parseFloat(a);
        }, lat_0: function(a) {
          t.lat0 = a * te;
        }, lat_1: function(a) {
          t.lat1 = a * te;
        }, lat_2: function(a) {
          t.lat2 = a * te;
        }, lat_ts: function(a) {
          t.lat_ts = a * te;
        }, lon_0: function(a) {
          t.long0 = a * te;
        }, lon_1: function(a) {
          t.long1 = a * te;
        }, lon_2: function(a) {
          t.long2 = a * te;
        }, alpha: function(a) {
          t.alpha = parseFloat(a) * te;
        }, gamma: function(a) {
          t.rectified_grid_angle = parseFloat(a);
        }, lonc: function(a) {
          t.longc = a * te;
        }, x_0: function(a) {
          t.x0 = parseFloat(a);
        }, y_0: function(a) {
          t.y0 = parseFloat(a);
        }, k_0: function(a) {
          t.k0 = parseFloat(a);
        }, k: function(a) {
          t.k0 = parseFloat(a);
        }, a: function(a) {
          t.a = parseFloat(a);
        }, b: function(a) {
          t.b = parseFloat(a);
        }, r: function(a) {
          t.a = t.b = parseFloat(a);
        }, r_a: function() {
          t.R_A = !0;
        }, zone: function(a) {
          t.zone = parseInt(a, 10);
        }, south: function() {
          t.utmSouth = !0;
        }, towgs84: function(a) {
          t.datum_params = a.split(",").map(function(h) {
            return parseFloat(h);
          });
        }, to_meter: function(a) {
          t.to_meter = parseFloat(a);
        }, units: function(a) {
          t.units = a;
          var h = os(a1, a);
          h && (t.to_meter = h.to_meter);
        }, from_greenwich: function(a) {
          t.from_greenwich = a * te;
        }, pm: function(a) {
          var h = os(Te, a);
          t.from_greenwich = (h || parseFloat(a)) * te;
        }, nadgrids: function(a) {
          a === "@null" ? t.datumCode = "none" : t.nadgrids = a;
        }, axis: function(a) {
          var h = "ewnsud";
          a.length === 3 && h.indexOf(a.substr(0, 1)) !== -1 && h.indexOf(a.substr(1, 1)) !== -1 && h.indexOf(a.substr(2, 1)) !== -1 && (t.axis = a);
        }, approx: function() {
          t.approx = !0;
        } };
        for (s in e) i = e[s], s in o ? (r = o[s], typeof r == "function" ? r(i) : t[r] = i) : t[s] = i;
        return typeof t.datumCode == "string" && t.datumCode !== "WGS84" && (t.datumCode = t.datumCode.toLowerCase()), t;
      }
      var zr = 1, af = 2, hf = 3, _a = 4, lf = 5, Dl = -1, h1 = /\s/, l1 = /[A-Za-z]/, u1 = /[A-Za-z84_]/, ya = /[,\]]/, uf = /[\d\.E\-\+]/;
      function Nn(n) {
        if (typeof n != "string") throw new Error("not a string");
        this.text = n.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = zr;
      }
      Nn.prototype.readCharicter = function() {
        var n = this.text[this.place++];
        if (this.state !== _a) for (; h1.test(n); ) {
          if (this.place >= this.text.length) return;
          n = this.text[this.place++];
        }
        switch (this.state) {
          case zr:
            return this.neutral(n);
          case af:
            return this.keyword(n);
          case _a:
            return this.quoted(n);
          case lf:
            return this.afterquote(n);
          case hf:
            return this.number(n);
          case Dl:
            return;
        }
      }, Nn.prototype.afterquote = function(n) {
        if (n === '"') {
          this.word += '"', this.state = _a;
          return;
        }
        if (ya.test(n)) {
          this.word = this.word.trim(), this.afterItem(n);
          return;
        }
        throw new Error(`havn't handled "` + n + '" in afterquote yet, index ' + this.place);
      }, Nn.prototype.afterItem = function(n) {
        if (n === ",") {
          this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = zr;
          return;
        }
        if (n === "]") {
          this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = zr, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Dl);
          return;
        }
      }, Nn.prototype.number = function(n) {
        if (uf.test(n)) {
          this.word += n;
          return;
        }
        if (ya.test(n)) {
          this.word = parseFloat(this.word), this.afterItem(n);
          return;
        }
        throw new Error(`havn't handled "` + n + '" in number yet, index ' + this.place);
      }, Nn.prototype.quoted = function(n) {
        if (n === '"') {
          this.state = lf;
          return;
        }
        this.word += n;
      }, Nn.prototype.keyword = function(n) {
        if (u1.test(n)) {
          this.word += n;
          return;
        }
        if (n === "[") {
          var t = [];
          t.push(this.word), this.level++, this.root === null ? this.root = t : this.currentObject.push(t), this.stack.push(this.currentObject), this.currentObject = t, this.state = zr;
          return;
        }
        if (ya.test(n)) {
          this.afterItem(n);
          return;
        }
        throw new Error(`havn't handled "` + n + '" in keyword yet, index ' + this.place);
      }, Nn.prototype.neutral = function(n) {
        if (l1.test(n)) {
          this.word = n, this.state = af;
          return;
        }
        if (n === '"') {
          this.word = "", this.state = _a;
          return;
        }
        if (uf.test(n)) {
          this.word = n, this.state = hf;
          return;
        }
        if (ya.test(n)) {
          this.afterItem(n);
          return;
        }
        throw new Error(`havn't handled "` + n + '" in neutral yet, index ' + this.place);
      }, Nn.prototype.output = function() {
        for (; this.place < this.text.length; ) this.readCharicter();
        if (this.state === Dl) return this.root;
        throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
      };
      function c1(n) {
        var t = new Nn(n);
        return t.output();
      }
      function Gl(n, t, e) {
        Array.isArray(t) && (e.unshift(t), t = null);
        var s = t ? {} : n, i = e.reduce(function(r, o) {
          return Li(o, r), r;
        }, s);
        t && (n[t] = i);
      }
      function Li(n, t) {
        if (!Array.isArray(n)) {
          t[n] = !0;
          return;
        }
        var e = n.shift();
        if (e === "PARAMETER" && (e = n.shift()), n.length === 1) {
          if (Array.isArray(n[0])) {
            t[e] = {}, Li(n[0], t[e]);
            return;
          }
          t[e] = n[0];
          return;
        }
        if (!n.length) {
          t[e] = !0;
          return;
        }
        if (e === "TOWGS84") {
          t[e] = n;
          return;
        }
        if (e === "AXIS") {
          e in t || (t[e] = []), t[e].push(n);
          return;
        }
        Array.isArray(e) || (t[e] = {});
        var s;
        switch (e) {
          case "UNIT":
          case "PRIMEM":
          case "VERT_DATUM":
            t[e] = { name: n[0].toLowerCase(), convert: n[1] }, n.length === 3 && Li(n[2], t[e]);
            return;
          case "SPHEROID":
          case "ELLIPSOID":
            t[e] = { name: n[0], a: n[1], rf: n[2] }, n.length === 4 && Li(n[3], t[e]);
            return;
          case "EDATUM":
          case "ENGINEERINGDATUM":
          case "LOCAL_DATUM":
          case "DATUM":
          case "VERT_CS":
          case "VERTCRS":
          case "VERTICALCRS":
            n[0] = ["name", n[0]], Gl(t, e, n);
            return;
          case "COMPD_CS":
          case "COMPOUNDCRS":
          case "FITTED_CS":
          case "PROJECTEDCRS":
          case "PROJCRS":
          case "GEOGCS":
          case "GEOCCS":
          case "PROJCS":
          case "LOCAL_CS":
          case "GEODCRS":
          case "GEODETICCRS":
          case "GEODETICDATUM":
          case "ENGCRS":
          case "ENGINEERINGCRS":
            n[0] = ["name", n[0]], Gl(t, e, n), t[e].type = e;
            return;
          default:
            for (s = -1; ++s < n.length; ) if (!Array.isArray(n[s])) return Li(n, t[e]);
            return Gl(t, e, n);
        }
      }
      var d1 = 0.017453292519943295, f1 = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
      function g1(n, t) {
        var e = t[0], s = t[1];
        !(e in n) && s in n && (n[e] = n[s], t.length === 3 && (n[e] = t[2](n[e])));
      }
      function fn(n) {
        return n * d1;
      }
      function cf(n) {
        for (var t = Object.keys(n), e = 0, s = t.length; e < s; ++e) {
          var i = t[e];
          f1.indexOf(i) !== -1 && p1(n[i]), typeof n[i] == "object" && cf(n[i]);
        }
      }
      function p1(n) {
        if (n.AUTHORITY) {
          var t = Object.keys(n.AUTHORITY)[0];
          t && t in n.AUTHORITY && (n.title = t + ":" + n.AUTHORITY[t]);
        }
        if (n.type === "GEOGCS" ? n.projName = "longlat" : n.type === "LOCAL_CS" ? (n.projName = "identity", n.local = !0) : typeof n.PROJECTION == "object" ? n.projName = Object.keys(n.PROJECTION)[0] : n.projName = n.PROJECTION, n.AXIS) {
          for (var e = "", s = 0, i = n.AXIS.length; s < i; ++s) {
            var r = [n.AXIS[s][0].toLowerCase(), n.AXIS[s][1].toLowerCase()];
            r[0].indexOf("north") !== -1 || (r[0] === "y" || r[0] === "lat") && r[1] === "north" ? e += "n" : r[0].indexOf("south") !== -1 || (r[0] === "y" || r[0] === "lat") && r[1] === "south" ? e += "s" : r[0].indexOf("east") !== -1 || (r[0] === "x" || r[0] === "lon") && r[1] === "east" ? e += "e" : (r[0].indexOf("west") !== -1 || (r[0] === "x" || r[0] === "lon") && r[1] === "west") && (e += "w");
          }
          e.length === 2 && (e += "u"), e.length === 3 && (n.axis = e);
        }
        n.UNIT && (n.units = n.UNIT.name.toLowerCase(), n.units === "metre" && (n.units = "meter"), n.UNIT.convert && (n.type === "GEOGCS" ? n.DATUM && n.DATUM.SPHEROID && (n.to_meter = n.UNIT.convert * n.DATUM.SPHEROID.a) : n.to_meter = n.UNIT.convert));
        var o = n.GEOGCS;
        n.type === "GEOGCS" && (o = n), o && (o.DATUM ? n.datumCode = o.DATUM.name.toLowerCase() : n.datumCode = o.name.toLowerCase(), n.datumCode.slice(0, 2) === "d_" && (n.datumCode = n.datumCode.slice(2)), n.datumCode === "new_zealand_1949" && (n.datumCode = "nzgd49"), (n.datumCode === "wgs_1984" || n.datumCode === "world_geodetic_system_1984") && (n.PROJECTION === "Mercator_Auxiliary_Sphere" && (n.sphere = !0), n.datumCode = "wgs84"), n.datumCode === "belge_1972" && (n.datumCode = "rnb72"), o.DATUM && o.DATUM.SPHEROID && (n.ellps = o.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), n.ellps.toLowerCase().slice(0, 13) === "international" && (n.ellps = "intl"), n.a = o.DATUM.SPHEROID.a, n.rf = parseFloat(o.DATUM.SPHEROID.rf, 10)), o.DATUM && o.DATUM.TOWGS84 && (n.datum_params = o.DATUM.TOWGS84), ~n.datumCode.indexOf("osgb_1936") && (n.datumCode = "osgb36"), ~n.datumCode.indexOf("osni_1952") && (n.datumCode = "osni52"), (~n.datumCode.indexOf("tm65") || ~n.datumCode.indexOf("geodetic_datum_of_1965")) && (n.datumCode = "ire65"), n.datumCode === "ch1903+" && (n.datumCode = "ch1903"), ~n.datumCode.indexOf("israel") && (n.datumCode = "isr93")), n.b && !isFinite(n.b) && (n.b = n.a);
        function a(u) {
          var c = n.to_meter || 1;
          return u * c;
        }
        var h = function(u) {
          return g1(n, u);
        }, l = [["standard_parallel_1", "Standard_Parallel_1"], ["standard_parallel_1", "Latitude of 1st standard parallel"], ["standard_parallel_2", "Standard_Parallel_2"], ["standard_parallel_2", "Latitude of 2nd standard parallel"], ["false_easting", "False_Easting"], ["false_easting", "False easting"], ["false-easting", "Easting at false origin"], ["false_northing", "False_Northing"], ["false_northing", "False northing"], ["false_northing", "Northing at false origin"], ["central_meridian", "Central_Meridian"], ["central_meridian", "Longitude of natural origin"], ["central_meridian", "Longitude of false origin"], ["latitude_of_origin", "Latitude_Of_Origin"], ["latitude_of_origin", "Central_Parallel"], ["latitude_of_origin", "Latitude of natural origin"], ["latitude_of_origin", "Latitude of false origin"], ["scale_factor", "Scale_Factor"], ["k0", "scale_factor"], ["latitude_of_center", "Latitude_Of_Center"], ["latitude_of_center", "Latitude_of_center"], ["lat0", "latitude_of_center", fn], ["longitude_of_center", "Longitude_Of_Center"], ["longitude_of_center", "Longitude_of_center"], ["longc", "longitude_of_center", fn], ["x0", "false_easting", a], ["y0", "false_northing", a], ["long0", "central_meridian", fn], ["lat0", "latitude_of_origin", fn], ["lat0", "standard_parallel_1", fn], ["lat1", "standard_parallel_1", fn], ["lat2", "standard_parallel_2", fn], ["azimuth", "Azimuth"], ["alpha", "azimuth", fn], ["srsCode", "name"]];
        l.forEach(h), !n.long0 && n.longc && (n.projName === "Albers_Conic_Equal_Area" || n.projName === "Lambert_Azimuthal_Equal_Area") && (n.long0 = n.longc), !n.lat_ts && n.lat1 && (n.projName === "Stereographic_South_Pole" || n.projName === "Polar Stereographic (variant B)") ? (n.lat0 = fn(n.lat1 > 0 ? 90 : -90), n.lat_ts = n.lat1) : !n.lat_ts && n.lat0 && n.projName === "Polar_Stereographic" && (n.lat_ts = n.lat0, n.lat0 = fn(n.lat0 > 0 ? 90 : -90));
      }
      function df(n) {
        var t = c1(n), e = t[0], s = {};
        return Li(t, s), cf(s), s[e];
      }
      function ye(n) {
        var t = this;
        if (arguments.length === 2) {
          var e = arguments[1];
          typeof e == "string" ? e.charAt(0) === "+" ? ye[n] = kl(arguments[1]) : ye[n] = df(arguments[1]) : ye[n] = e;
        } else if (arguments.length === 1) {
          if (Array.isArray(n)) return n.map(function(s) {
            Array.isArray(s) ? ye.apply(t, s) : ye(s);
          });
          if (typeof n == "string") {
            if (n in ye) return ye[n];
          } else "EPSG" in n ? ye["EPSG:" + n.EPSG] = n : "ESRI" in n ? ye["ESRI:" + n.ESRI] = n : "IAU2000" in n ? ye["IAU2000:" + n.IAU2000] = n : console.log(n);
          return;
        }
      }
      e1(ye);
      function m1(n) {
        return typeof n == "string";
      }
      function _1(n) {
        return n in ye;
      }
      var y1 = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
      function x1(n) {
        return y1.some(function(t) {
          return n.indexOf(t) > -1;
        });
      }
      var E1 = ["3857", "900913", "3785", "102113"];
      function M1(n) {
        var t = os(n, "authority");
        if (t) {
          var e = os(t, "epsg");
          return e && E1.indexOf(e) > -1;
        }
      }
      function w1(n) {
        var t = os(n, "extension");
        if (t) return os(t, "proj4");
      }
      function S1(n) {
        return n[0] === "+";
      }
      function v1(n) {
        if (m1(n)) {
          if (_1(n)) return ye[n];
          if (x1(n)) {
            var t = df(n);
            if (M1(t)) return ye["EPSG:3857"];
            var e = w1(t);
            return e ? kl(e) : t;
          }
          if (S1(n)) return kl(n);
        } else return n;
      }
      function ff(n, t) {
        n = n || {};
        var e, s;
        if (!t) return n;
        for (s in t) e = t[s], e !== void 0 && (n[s] = e);
        return n;
      }
      function gn(n, t, e) {
        var s = n * t;
        return e / Math.sqrt(1 - s * s);
      }
      function Ur(n) {
        return n < 0 ? -1 : 1;
      }
      function $(n) {
        return Math.abs(n) <= ee ? n : n - Ur(n) * Gr;
      }
      function tn(n, t, e) {
        var s = n * e, i = 0.5 * n;
        return s = Math.pow((1 - s) / (1 + s), i), Math.tan(0.5 * (D - t)) / s;
      }
      function Br(n, t) {
        for (var e = 0.5 * n, s, i, r = D - 2 * Math.atan(t), o = 0; o <= 15; o++) if (s = n * Math.sin(r), i = D - 2 * Math.atan(t * Math.pow((1 - s) / (1 + s), e)) - r, r += i, Math.abs(i) <= 1e-10) return r;
        return -9999;
      }
      function R1() {
        var n = this.b / this.a;
        this.es = 1 - n * n, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = gn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
      }
      function C1(n) {
        var t = n.x, e = n.y;
        if (e * dn > 90 && e * dn < -90 && t * dn > 180 && t * dn < -180) return null;
        var s, i;
        if (Math.abs(Math.abs(e) - D) <= q) return null;
        if (this.sphere) s = this.x0 + this.a * this.k0 * $(t - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(Ct + 0.5 * e));
        else {
          var r = Math.sin(e), o = tn(this.e, e, r);
          s = this.x0 + this.a * this.k0 * $(t - this.long0), i = this.y0 - this.a * this.k0 * Math.log(o);
        }
        return n.x = s, n.y = i, n;
      }
      function b1(n) {
        var t = n.x - this.x0, e = n.y - this.y0, s, i;
        if (this.sphere) i = D - 2 * Math.atan(Math.exp(-e / (this.a * this.k0)));
        else {
          var r = Math.exp(-e / (this.a * this.k0));
          if (i = Br(this.e, r), i === -9999) return null;
        }
        return s = $(this.long0 + t / (this.a * this.k0)), n.x = s, n.y = i, n;
      }
      var T1 = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
      const I1 = { init: R1, forward: C1, inverse: b1, names: T1 };
      function A1() {
      }
      function gf(n) {
        return n;
      }
      var P1 = ["longlat", "identity"], L1 = [I1, { init: A1, forward: gf, inverse: gf, names: P1 }], xa = {}, Ea = [];
      function pf(n, t) {
        var e = Ea.length;
        return n.names ? (Ea[e] = n, n.names.forEach(function(s) {
          xa[s.toLowerCase()] = e;
        }), this) : (console.log(t), !0);
      }
      function O1(n) {
        if (!n) return !1;
        var t = n.toLowerCase();
        if (typeof xa[t] < "u" && Ea[xa[t]]) return Ea[xa[t]];
      }
      function N1() {
        L1.forEach(pf);
      }
      const F1 = { start: N1, add: pf, get: O1 };
      var ht = {};
      ht.MERIT = { a: 6378137, rf: 298.257, ellipseName: "MERIT 1983" }, ht.SGS85 = { a: 6378136, rf: 298.257, ellipseName: "Soviet Geodetic System 85" }, ht.GRS80 = { a: 6378137, rf: 298.257222101, ellipseName: "GRS 1980(IUGG, 1980)" }, ht.IAU76 = { a: 6378140, rf: 298.257, ellipseName: "IAU 1976" }, ht.airy = { a: 6377563396e-3, b: 635625691e-2, ellipseName: "Airy 1830" }, ht.APL4 = { a: 6378137, rf: 298.25, ellipseName: "Appl. Physics. 1965" }, ht.NWL9D = { a: 6378145, rf: 298.25, ellipseName: "Naval Weapons Lab., 1965" }, ht.mod_airy = { a: 6377340189e-3, b: 6356034446e-3, ellipseName: "Modified Airy" }, ht.andrae = { a: 637710443e-2, rf: 300, ellipseName: "Andrae 1876 (Den., Iclnd.)" }, ht.aust_SA = { a: 6378160, rf: 298.25, ellipseName: "Australian Natl & S. Amer. 1969" }, ht.GRS67 = { a: 6378160, rf: 298.247167427, ellipseName: "GRS 67(IUGG 1967)" }, ht.bessel = { a: 6377397155e-3, rf: 299.1528128, ellipseName: "Bessel 1841" }, ht.bess_nam = { a: 6377483865e-3, rf: 299.1528128, ellipseName: "Bessel 1841 (Namibia)" }, ht.clrk66 = { a: 63782064e-1, b: 63565838e-1, ellipseName: "Clarke 1866" }, ht.clrk80 = { a: 6378249145e-3, rf: 293.4663, ellipseName: "Clarke 1880 mod." }, ht.clrk80ign = { a: 63782492e-1, b: 6356515, rf: 293.4660213, ellipseName: "Clarke 1880 (IGN)" }, ht.clrk58 = { a: 6378293645208759e-9, rf: 294.2606763692654, ellipseName: "Clarke 1858" }, ht.CPM = { a: 63757387e-1, rf: 334.29, ellipseName: "Comm. des Poids et Mesures 1799" }, ht.delmbr = { a: 6376428, rf: 311.5, ellipseName: "Delambre 1810 (Belgium)" }, ht.engelis = { a: 637813605e-2, rf: 298.2566, ellipseName: "Engelis 1985" }, ht.evrst30 = { a: 6377276345e-3, rf: 300.8017, ellipseName: "Everest 1830" }, ht.evrst48 = { a: 6377304063e-3, rf: 300.8017, ellipseName: "Everest 1948" }, ht.evrst56 = { a: 6377301243e-3, rf: 300.8017, ellipseName: "Everest 1956" }, ht.evrst69 = { a: 6377295664e-3, rf: 300.8017, ellipseName: "Everest 1969" }, ht.evrstSS = { a: 6377298556e-3, rf: 300.8017, ellipseName: "Everest (Sabah & Sarawak)" }, ht.fschr60 = { a: 6378166, rf: 298.3, ellipseName: "Fischer (Mercury Datum) 1960" }, ht.fschr60m = { a: 6378155, rf: 298.3, ellipseName: "Fischer 1960" }, ht.fschr68 = { a: 6378150, rf: 298.3, ellipseName: "Fischer 1968" }, ht.helmert = { a: 6378200, rf: 298.3, ellipseName: "Helmert 1906" }, ht.hough = { a: 6378270, rf: 297, ellipseName: "Hough" }, ht.intl = { a: 6378388, rf: 297, ellipseName: "International 1909 (Hayford)" }, ht.kaula = { a: 6378163, rf: 298.24, ellipseName: "Kaula 1961" }, ht.lerch = { a: 6378139, rf: 298.257, ellipseName: "Lerch 1979" }, ht.mprts = { a: 6397300, rf: 191, ellipseName: "Maupertius 1738" }, ht.new_intl = { a: 63781575e-1, b: 63567722e-1, ellipseName: "New International 1967" }, ht.plessis = { a: 6376523, rf: 6355863, ellipseName: "Plessis 1817 (France)" }, ht.krass = { a: 6378245, rf: 298.3, ellipseName: "Krassovsky, 1942" }, ht.SEasia = { a: 6378155, b: 63567733205e-4, ellipseName: "Southeast Asia" }, ht.walbeck = { a: 6376896, b: 63558348467e-4, ellipseName: "Walbeck" }, ht.WGS60 = { a: 6378165, rf: 298.3, ellipseName: "WGS 60" }, ht.WGS66 = { a: 6378145, rf: 298.25, ellipseName: "WGS 66" }, ht.WGS7 = { a: 6378135, rf: 298.26, ellipseName: "WGS 72" };
      var k1 = ht.WGS84 = { a: 6378137, rf: 298.257223563, ellipseName: "WGS 84" };
      ht.sphere = { a: 6370997, b: 6370997, ellipseName: "Normal Sphere (r=6370997)" };
      function D1(n, t, e, s) {
        var i = n * n, r = t * t, o = (i - r) / i, a = 0;
        s ? (n *= 1 - o * (i1 + o * (r1 + o * o1)), i = n * n, o = 0) : a = Math.sqrt(o);
        var h = (i - r) / r;
        return { es: o, e: a, ep2: h };
      }
      function G1(n, t, e, s, i) {
        if (!n) {
          var r = os(ht, s);
          r || (r = k1), n = r.a, t = r.b, e = r.rf;
        }
        return e && !t && (t = (1 - 1 / e) * n), (e === 0 || Math.abs(n - t) < q) && (i = !0, t = n), { a: n, b: t, rf: e, sphere: i };
      }
      var Ma = { wgs84: { towgs84: "0,0,0", ellipse: "WGS84", datumName: "WGS84" }, ch1903: { towgs84: "674.374,15.056,405.346", ellipse: "bessel", datumName: "swiss" }, ggrs87: { towgs84: "-199.87,74.79,246.62", ellipse: "GRS80", datumName: "Greek_Geodetic_Reference_System_1987" }, nad83: { towgs84: "0,0,0", ellipse: "GRS80", datumName: "North_American_Datum_1983" }, nad27: { nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat", ellipse: "clrk66", datumName: "North_American_Datum_1927" }, potsdam: { towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7", ellipse: "bessel", datumName: "Potsdam Rauenberg 1950 DHDN" }, carthage: { towgs84: "-263.0,6.0,431.0", ellipse: "clark80", datumName: "Carthage 1934 Tunisia" }, hermannskogel: { towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232", ellipse: "bessel", datumName: "Hermannskogel" }, mgi: { towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232", ellipse: "bessel", datumName: "Militar-Geographische Institut" }, osni52: { towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "airy", datumName: "Irish National" }, ire65: { towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "mod_airy", datumName: "Ireland 1965" }, rassadiran: { towgs84: "-133.63,-157.5,-158.62", ellipse: "intl", datumName: "Rassadiran" }, nzgd49: { towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993", ellipse: "intl", datumName: "New Zealand Geodetic Datum 1949" }, osgb36: { towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894", ellipse: "airy", datumName: "Ordnance Survey of Great Britain 1936" }, s_jtsk: { towgs84: "589,76,480", ellipse: "bessel", datumName: "S-JTSK (Ferro)" }, beduaram: { towgs84: "-106,-87,188", ellipse: "clrk80", datumName: "Beduaram" }, gunung_segara: { towgs84: "-403,684,41", ellipse: "bessel", datumName: "Gunung Segara Jakarta" }, rnb72: { towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1", ellipse: "intl", datumName: "Reseau National Belge 1972" } };
      for (var z1 in Ma) {
        var mf = Ma[z1];
        Ma[mf.datumName] = mf;
      }
      function U1(n, t, e, s, i, r, o) {
        var a = {};
        return n === void 0 || n === "none" ? a.datum_type = Fl : a.datum_type = n1, t && (a.datum_params = t.map(parseFloat), (a.datum_params[0] !== 0 || a.datum_params[1] !== 0 || a.datum_params[2] !== 0) && (a.datum_type = zs), a.datum_params.length > 3 && (a.datum_params[3] !== 0 || a.datum_params[4] !== 0 || a.datum_params[5] !== 0 || a.datum_params[6] !== 0) && (a.datum_type = Us, a.datum_params[3] *= Dr, a.datum_params[4] *= Dr, a.datum_params[5] *= Dr, a.datum_params[6] = a.datum_params[6] / 1e6 + 1)), o && (a.datum_type = Pi, a.grids = o), a.a = e, a.b = s, a.es = i, a.ep2 = r, a;
      }
      var _f = {};
      function B1(n, t) {
        var e = new DataView(t), s = Y1(e), i = X1(e, s), r = q1(e, i, s), o = { header: i, subgrids: r };
        return _f[n] = o, o;
      }
      function j1(n) {
        if (n === void 0) return null;
        var t = n.split(",");
        return t.map(W1);
      }
      function W1(n) {
        if (n.length === 0) return null;
        var t = n[0] === "@";
        return t && (n = n.slice(1)), n === "null" ? { name: "null", mandatory: !t, grid: null, isNull: !0 } : { name: n, mandatory: !t, grid: _f[n] || null, isNull: !1 };
      }
      function Oi(n) {
        return n / 3600 * Math.PI / 180;
      }
      function Y1(n) {
        var t = n.getInt32(8, !1);
        return t === 11 ? !1 : (t = n.getInt32(8, !0), t !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
      }
      function X1(n, t) {
        return { nFields: n.getInt32(8, t), nSubgridFields: n.getInt32(24, t), nSubgrids: n.getInt32(40, t), shiftType: zl(n, 56, 64).trim(), fromSemiMajorAxis: n.getFloat64(120, t), fromSemiMinorAxis: n.getFloat64(136, t), toSemiMajorAxis: n.getFloat64(152, t), toSemiMinorAxis: n.getFloat64(168, t) };
      }
      function zl(n, t, e) {
        return String.fromCharCode.apply(null, new Uint8Array(n.buffer.slice(t, e)));
      }
      function q1(n, t, e) {
        for (var s = 176, i = [], r = 0; r < t.nSubgrids; r++) {
          var o = $1(n, s, e), a = Z1(n, s, o, e), h = Math.round(1 + (o.upperLongitude - o.lowerLongitude) / o.longitudeInterval), l = Math.round(1 + (o.upperLatitude - o.lowerLatitude) / o.latitudeInterval);
          i.push({ ll: [Oi(o.lowerLongitude), Oi(o.lowerLatitude)], del: [Oi(o.longitudeInterval), Oi(o.latitudeInterval)], lim: [h, l], count: o.gridNodeCount, cvs: V1(a) }), s += 176 + o.gridNodeCount * 16;
        }
        return i;
      }
      function V1(n) {
        return n.map(function(t) {
          return [Oi(t.longitudeShift), Oi(t.latitudeShift)];
        });
      }
      function $1(n, t, e) {
        return { name: zl(n, t + 8, t + 16).trim(), parent: zl(n, t + 24, t + 24 + 8).trim(), lowerLatitude: n.getFloat64(t + 72, e), upperLatitude: n.getFloat64(t + 88, e), lowerLongitude: n.getFloat64(t + 104, e), upperLongitude: n.getFloat64(t + 120, e), latitudeInterval: n.getFloat64(t + 136, e), longitudeInterval: n.getFloat64(t + 152, e), gridNodeCount: n.getInt32(t + 168, e) };
      }
      function Z1(n, t, e, s) {
        for (var i = t + 176, r = 16, o = [], a = 0; a < e.gridNodeCount; a++) {
          var h = { latitudeShift: n.getFloat32(i + a * r, s), longitudeShift: n.getFloat32(i + a * r + 4, s), latitudeAccuracy: n.getFloat32(i + a * r + 8, s), longitudeAccuracy: n.getFloat32(i + a * r + 12, s) };
          o.push(h);
        }
        return o;
      }
      function pn(n, t) {
        if (!(this instanceof pn)) return new pn(n);
        t = t || function(l) {
          if (l) throw l;
        };
        var e = v1(n);
        if (typeof e != "object") {
          t("Could not parse to valid json: " + n);
          return;
        }
        var s = pn.projections.get(e.projName);
        if (!s) {
          t("Could not get projection name from: " + n);
          return;
        }
        if (e.datumCode && e.datumCode !== "none") {
          var i = os(Ma, e.datumCode);
          i && (e.datum_params = e.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), e.ellps = i.ellipse, e.datumName = i.datumName ? i.datumName : e.datumCode);
        }
        e.k0 = e.k0 || 1, e.axis = e.axis || "enu", e.ellps = e.ellps || "wgs84", e.lat1 = e.lat1 || e.lat0;
        var r = G1(e.a, e.b, e.rf, e.ellps, e.sphere), o = D1(r.a, r.b, r.rf, e.R_A), a = j1(e.nadgrids), h = e.datum || U1(e.datumCode, e.datum_params, r.a, r.b, o.es, o.ep2, a);
        ff(this, e), ff(this, s), this.a = r.a, this.b = r.b, this.rf = r.rf, this.sphere = r.sphere, this.es = o.es, this.e = o.e, this.ep2 = o.ep2, this.datum = h, this.init(), t(null, this);
      }
      pn.projections = F1, pn.projections.start();
      function K1(n, t) {
        return n.datum_type !== t.datum_type || n.a !== t.a || Math.abs(n.es - t.es) > 5e-11 ? !1 : n.datum_type === zs ? n.datum_params[0] === t.datum_params[0] && n.datum_params[1] === t.datum_params[1] && n.datum_params[2] === t.datum_params[2] : n.datum_type === Us ? n.datum_params[0] === t.datum_params[0] && n.datum_params[1] === t.datum_params[1] && n.datum_params[2] === t.datum_params[2] && n.datum_params[3] === t.datum_params[3] && n.datum_params[4] === t.datum_params[4] && n.datum_params[5] === t.datum_params[5] && n.datum_params[6] === t.datum_params[6] : !0;
      }
      function yf(n, t, e) {
        var s = n.x, i = n.y, r = n.z ? n.z : 0, o, a, h, l;
        if (i < -D && i > -1.001 * D) i = -D;
        else if (i > D && i < 1.001 * D) i = D;
        else {
          if (i < -D) return { x: -1 / 0, y: -1 / 0, z: n.z };
          if (i > D) return { x: 1 / 0, y: 1 / 0, z: n.z };
        }
        return s > Math.PI && (s -= 2 * Math.PI), a = Math.sin(i), l = Math.cos(i), h = a * a, o = e / Math.sqrt(1 - t * h), { x: (o + r) * l * Math.cos(s), y: (o + r) * l * Math.sin(s), z: (o * (1 - t) + r) * a };
      }
      function xf(n, t, e, s) {
        var i = 1e-12, r = i * i, o = 30, a, h, l, u, c, d, p, f, y, E, M, w, C, v = n.x, R = n.y, I = n.z ? n.z : 0, O, A, P;
        if (a = Math.sqrt(v * v + R * R), h = Math.sqrt(v * v + R * R + I * I), a / e < i) {
          if (O = 0, h / e < i) return A = D, P = -s, { x: n.x, y: n.y, z: n.z };
        } else O = Math.atan2(R, v);
        l = I / h, u = a / h, c = 1 / Math.sqrt(1 - t * (2 - t) * u * u), f = u * (1 - t) * c, y = l * c, C = 0;
        do
          C++, p = e / Math.sqrt(1 - t * y * y), P = a * f + I * y - p * (1 - t * y * y), d = t * p / (p + P), c = 1 / Math.sqrt(1 - d * (2 - d) * u * u), E = u * (1 - d) * c, M = l * c, w = M * f - E * y, f = E, y = M;
        while (w * w > r && C < o);
        return A = Math.atan(M / Math.abs(E)), { x: O, y: A, z: P };
      }
      function H1(n, t, e) {
        if (t === zs) return { x: n.x + e[0], y: n.y + e[1], z: n.z + e[2] };
        if (t === Us) {
          var s = e[0], i = e[1], r = e[2], o = e[3], a = e[4], h = e[5], l = e[6];
          return { x: l * (n.x - h * n.y + a * n.z) + s, y: l * (h * n.x + n.y - o * n.z) + i, z: l * (-a * n.x + o * n.y + n.z) + r };
        }
      }
      function J1(n, t, e) {
        if (t === zs) return { x: n.x - e[0], y: n.y - e[1], z: n.z - e[2] };
        if (t === Us) {
          var s = e[0], i = e[1], r = e[2], o = e[3], a = e[4], h = e[5], l = e[6], u = (n.x - s) / l, c = (n.y - i) / l, d = (n.z - r) / l;
          return { x: u + h * c - a * d, y: -h * u + c + o * d, z: a * u - o * c + d };
        }
      }
      function wa(n) {
        return n === zs || n === Us;
      }
      function Q1(n, t, e) {
        if (K1(n, t) || n.datum_type === Fl || t.datum_type === Fl) return e;
        var s = n.a, i = n.es;
        if (n.datum_type === Pi) {
          var r = Ef(n, !1, e);
          if (r !== 0) return;
          s = sf, i = rf;
        }
        var o = t.a, a = t.b, h = t.es;
        if (t.datum_type === Pi && (o = sf, a = s1, h = rf), i === h && s === o && !wa(n.datum_type) && !wa(t.datum_type)) return e;
        if (e = yf(e, i, s), wa(n.datum_type) && (e = H1(e, n.datum_type, n.datum_params)), wa(t.datum_type) && (e = J1(e, t.datum_type, t.datum_params)), e = xf(e, h, o, a), t.datum_type === Pi) {
          var l = Ef(t, !0, e);
          if (l !== 0) return;
        }
        return e;
      }
      function Ef(n, t, e) {
        if (n.grids === null || n.grids.length === 0) return console.log("Grid shift grids not found"), -1;
        var s = { x: -e.x, y: e.y }, i = { x: Number.NaN, y: Number.NaN }, r = [];
        t: for (var o = 0; o < n.grids.length; o++) {
          var a = n.grids[o];
          if (r.push(a.name), a.isNull) {
            i = s;
            break;
          }
          if (a.mandatory, a.grid === null) {
            if (a.mandatory) return console.log("Unable to find mandatory grid '" + a.name + "'"), -1;
            continue;
          }
          for (var h = a.grid.subgrids, l = 0, u = h.length; l < u; l++) {
            var c = h[l], d = (Math.abs(c.del[1]) + Math.abs(c.del[0])) / 1e4, p = c.ll[0] - d, f = c.ll[1] - d, y = c.ll[0] + (c.lim[0] - 1) * c.del[0] + d, E = c.ll[1] + (c.lim[1] - 1) * c.del[1] + d;
            if (!(f > s.y || p > s.x || E < s.y || y < s.x) && (i = tx(s, t, c), !isNaN(i.x))) break t;
          }
        }
        return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -s.x * dn + " " + s.y * dn + " tried: '" + r + "'"), -1) : (e.x = -i.x, e.y = i.y, 0);
      }
      function tx(n, t, e) {
        var s = { x: Number.NaN, y: Number.NaN };
        if (isNaN(n.x)) return s;
        var i = { x: n.x, y: n.y };
        i.x -= e.ll[0], i.y -= e.ll[1], i.x = $(i.x - Math.PI) + Math.PI;
        var r = Mf(i, e);
        if (t) {
          if (isNaN(r.x)) return s;
          r.x = i.x - r.x, r.y = i.y - r.y;
          var o = 9, a = 1e-12, h, l;
          do {
            if (l = Mf(r, e), isNaN(l.x)) {
              console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
              break;
            }
            h = { x: i.x - (l.x + r.x), y: i.y - (l.y + r.y) }, r.x += h.x, r.y += h.y;
          } while (o-- && Math.abs(h.x) > a && Math.abs(h.y) > a);
          if (o < 0) return console.log("Inverse grid shift iterator failed to converge."), s;
          s.x = $(r.x + e.ll[0]), s.y = r.y + e.ll[1];
        } else isNaN(r.x) || (s.x = n.x + r.x, s.y = n.y + r.y);
        return s;
      }
      function Mf(n, t) {
        var e = { x: n.x / t.del[0], y: n.y / t.del[1] }, s = { x: Math.floor(e.x), y: Math.floor(e.y) }, i = { x: e.x - 1 * s.x, y: e.y - 1 * s.y }, r = { x: Number.NaN, y: Number.NaN }, o;
        if (s.x < 0 || s.x >= t.lim[0] || s.y < 0 || s.y >= t.lim[1]) return r;
        o = s.y * t.lim[0] + s.x;
        var a = { x: t.cvs[o][0], y: t.cvs[o][1] };
        o++;
        var h = { x: t.cvs[o][0], y: t.cvs[o][1] };
        o += t.lim[0];
        var l = { x: t.cvs[o][0], y: t.cvs[o][1] };
        o--;
        var u = { x: t.cvs[o][0], y: t.cvs[o][1] }, c = i.x * i.y, d = i.x * (1 - i.y), p = (1 - i.x) * (1 - i.y), f = (1 - i.x) * i.y;
        return r.x = p * a.x + d * h.x + f * u.x + c * l.x, r.y = p * a.y + d * h.y + f * u.y + c * l.y, r;
      }
      function wf(n, t, e) {
        var s = e.x, i = e.y, r = e.z || 0, o, a, h, l = {};
        for (h = 0; h < 3; h++) if (!(t && h === 2 && e.z === void 0)) switch (h === 0 ? (o = s, "ew".indexOf(n.axis[h]) !== -1 ? a = "x" : a = "y") : h === 1 ? (o = i, "ns".indexOf(n.axis[h]) !== -1 ? a = "y" : a = "x") : (o = r, a = "z"), n.axis[h]) {
          case "e":
            l[a] = o;
            break;
          case "w":
            l[a] = -o;
            break;
          case "n":
            l[a] = o;
            break;
          case "s":
            l[a] = -o;
            break;
          case "u":
            e[a] !== void 0 && (l.z = o);
            break;
          case "d":
            e[a] !== void 0 && (l.z = -o);
            break;
          default:
            return null;
        }
        return l;
      }
      function Sf(n) {
        var t = { x: n[0], y: n[1] };
        return n.length > 2 && (t.z = n[2]), n.length > 3 && (t.m = n[3]), t;
      }
      function ex(n) {
        vf(n.x), vf(n.y);
      }
      function vf(n) {
        if (typeof Number.isFinite == "function") {
          if (Number.isFinite(n)) return;
          throw new TypeError("coordinates must be finite numbers");
        }
        if (typeof n != "number" || n !== n || !isFinite(n)) throw new TypeError("coordinates must be finite numbers");
      }
      function nx(n, t) {
        return (n.datum.datum_type === zs || n.datum.datum_type === Us || n.datum.datum_type === Pi) && t.datumCode !== "WGS84" || (t.datum.datum_type === zs || t.datum.datum_type === Us || t.datum.datum_type === Pi) && n.datumCode !== "WGS84";
      }
      function Sa(n, t, e, s) {
        var i;
        Array.isArray(e) ? e = Sf(e) : e = { x: e.x, y: e.y, z: e.z, m: e.m };
        var r = e.z !== void 0;
        if (ex(e), n.datum && t.datum && nx(n, t) && (i = new pn("WGS84"), e = Sa(n, i, e, s), n = i), s && n.axis !== "enu" && (e = wf(n, !1, e)), n.projName === "longlat") e = { x: e.x * te, y: e.y * te, z: e.z || 0 };
        else if (n.to_meter && (e = { x: e.x * n.to_meter, y: e.y * n.to_meter, z: e.z || 0 }), e = n.inverse(e), !e) return;
        if (n.from_greenwich && (e.x += n.from_greenwich), e = Q1(n.datum, t.datum, e), !!e) return t.from_greenwich && (e = { x: e.x - t.from_greenwich, y: e.y, z: e.z || 0 }), t.projName === "longlat" ? e = { x: e.x * dn, y: e.y * dn, z: e.z || 0 } : (e = t.forward(e), t.to_meter && (e = { x: e.x / t.to_meter, y: e.y / t.to_meter, z: e.z || 0 })), s && t.axis !== "enu" ? wf(t, !0, e) : (e && !r && delete e.z, e);
      }
      var Rf = pn("WGS84");
      function Ul(n, t, e, s) {
        var i, r, o;
        return Array.isArray(e) ? (i = Sa(n, t, e, s) || { x: NaN, y: NaN }, e.length > 2 ? typeof n.name < "u" && n.name === "geocent" || typeof t.name < "u" && t.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(e.slice(3)) : [i.x, i.y, e[2]].concat(e.slice(3)) : [i.x, i.y].concat(e.slice(2)) : [i.x, i.y]) : (r = Sa(n, t, e, s), o = Object.keys(e), o.length === 2 || o.forEach(function(a) {
          if (typeof n.name < "u" && n.name === "geocent" || typeof t.name < "u" && t.name === "geocent") {
            if (a === "x" || a === "y" || a === "z") return;
          } else if (a === "x" || a === "y") return;
          r[a] = e[a];
        }), r);
      }
      function Cf(n) {
        return n instanceof pn ? n : n.oProj ? n.oProj : pn(n);
      }
      function le(n, t, e) {
        n = Cf(n);
        var s = !1, i;
        return typeof t > "u" ? (t = n, n = Rf, s = !0) : (typeof t.x < "u" || Array.isArray(t)) && (e = t, t = n, n = Rf, s = !0), t = Cf(t), e ? Ul(n, t, e) : (i = { forward: function(r, o) {
          return Ul(n, t, r, o);
        }, inverse: function(r, o) {
          return Ul(t, n, r, o);
        } }, s && (i.oProj = t), i);
      }
      var bf = 6, Tf = "AJSAJS", If = "AFAFAF", Ni = 65, Ie = 73, Ye = 79, jr = 86, Wr = 90;
      const sx = { forward: Af, inverse: ix, toPoint: Pf };
      function Af(n, t) {
        return t = t || 5, ax(rx({ lat: n[1], lon: n[0] }), t);
      }
      function ix(n) {
        var t = jl(Nf(n.toUpperCase()));
        return t.lat && t.lon ? [t.lon, t.lat, t.lon, t.lat] : [t.left, t.bottom, t.right, t.top];
      }
      function Pf(n) {
        var t = jl(Nf(n.toUpperCase()));
        return t.lat && t.lon ? [t.lon, t.lat] : [(t.left + t.right) / 2, (t.top + t.bottom) / 2];
      }
      function Bl(n) {
        return n * (Math.PI / 180);
      }
      function Lf(n) {
        return 180 * (n / Math.PI);
      }
      function rx(n) {
        var t = n.lat, e = n.lon, s = 6378137, i = 669438e-8, r = 0.9996, o, a, h, l, u, c, d, p = Bl(t), f = Bl(e), y, E;
        E = Math.floor((e + 180) / 6) + 1, e === 180 && (E = 60), t >= 56 && t < 64 && e >= 3 && e < 12 && (E = 32), t >= 72 && t < 84 && (e >= 0 && e < 9 ? E = 31 : e >= 9 && e < 21 ? E = 33 : e >= 21 && e < 33 ? E = 35 : e >= 33 && e < 42 && (E = 37)), o = (E - 1) * 6 - 180 + 3, y = Bl(o), a = i / (1 - i), h = s / Math.sqrt(1 - i * Math.sin(p) * Math.sin(p)), l = Math.tan(p) * Math.tan(p), u = a * Math.cos(p) * Math.cos(p), c = Math.cos(p) * (f - y), d = s * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * p - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * p) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * p) - 35 * i * i * i / 3072 * Math.sin(6 * p));
        var M = r * h * (c + (1 - l + u) * c * c * c / 6 + (5 - 18 * l + l * l + 72 * u - 58 * a) * c * c * c * c * c / 120) + 5e5, w = r * (d + h * Math.tan(p) * (c * c / 2 + (5 - l + 9 * u + 4 * u * u) * c * c * c * c / 24 + (61 - 58 * l + l * l + 600 * u - 330 * a) * c * c * c * c * c * c / 720));
        return t < 0 && (w += 1e7), { northing: Math.round(w), easting: Math.round(M), zoneNumber: E, zoneLetter: ox(t) };
      }
      function jl(n) {
        var t = n.northing, e = n.easting, s = n.zoneLetter, i = n.zoneNumber;
        if (i < 0 || i > 60) return null;
        var r = 0.9996, o = 6378137, a = 669438e-8, h, l = (1 - Math.sqrt(1 - a)) / (1 + Math.sqrt(1 - a)), u, c, d, p, f, y, E, M, w, C = e - 5e5, v = t;
        s < "N" && (v -= 1e7), E = (i - 1) * 6 - 180 + 3, h = a / (1 - a), y = v / r, M = y / (o * (1 - a / 4 - 3 * a * a / 64 - 5 * a * a * a / 256)), w = M + (3 * l / 2 - 27 * l * l * l / 32) * Math.sin(2 * M) + (21 * l * l / 16 - 55 * l * l * l * l / 32) * Math.sin(4 * M) + 151 * l * l * l / 96 * Math.sin(6 * M), u = o / Math.sqrt(1 - a * Math.sin(w) * Math.sin(w)), c = Math.tan(w) * Math.tan(w), d = h * Math.cos(w) * Math.cos(w), p = o * (1 - a) / Math.pow(1 - a * Math.sin(w) * Math.sin(w), 1.5), f = C / (u * r);
        var R = w - u * Math.tan(w) / p * (f * f / 2 - (5 + 3 * c + 10 * d - 4 * d * d - 9 * h) * f * f * f * f / 24 + (61 + 90 * c + 298 * d + 45 * c * c - 252 * h - 3 * d * d) * f * f * f * f * f * f / 720);
        R = Lf(R);
        var I = (f - (1 + 2 * c + d) * f * f * f / 6 + (5 - 2 * d + 28 * c - 3 * d * d + 8 * h + 24 * c * c) * f * f * f * f * f / 120) / Math.cos(w);
        I = E + Lf(I);
        var O;
        if (n.accuracy) {
          var A = jl({ northing: n.northing + n.accuracy, easting: n.easting + n.accuracy, zoneLetter: n.zoneLetter, zoneNumber: n.zoneNumber });
          O = { top: A.lat, right: A.lon, bottom: R, left: I };
        } else O = { lat: R, lon: I };
        return O;
      }
      function ox(n) {
        var t = "Z";
        return 84 >= n && n >= 72 ? t = "X" : 72 > n && n >= 64 ? t = "W" : 64 > n && n >= 56 ? t = "V" : 56 > n && n >= 48 ? t = "U" : 48 > n && n >= 40 ? t = "T" : 40 > n && n >= 32 ? t = "S" : 32 > n && n >= 24 ? t = "R" : 24 > n && n >= 16 ? t = "Q" : 16 > n && n >= 8 ? t = "P" : 8 > n && n >= 0 ? t = "N" : 0 > n && n >= -8 ? t = "M" : -8 > n && n >= -16 ? t = "L" : -16 > n && n >= -24 ? t = "K" : -24 > n && n >= -32 ? t = "J" : -32 > n && n >= -40 ? t = "H" : -40 > n && n >= -48 ? t = "G" : -48 > n && n >= -56 ? t = "F" : -56 > n && n >= -64 ? t = "E" : -64 > n && n >= -72 ? t = "D" : -72 > n && n >= -80 && (t = "C"), t;
      }
      function ax(n, t) {
        var e = "00000" + n.easting, s = "00000" + n.northing;
        return n.zoneNumber + n.zoneLetter + hx(n.easting, n.northing, n.zoneNumber) + e.substr(e.length - 5, t) + s.substr(s.length - 5, t);
      }
      function hx(n, t, e) {
        var s = Of(e), i = Math.floor(n / 1e5), r = Math.floor(t / 1e5) % 20;
        return lx(i, r, s);
      }
      function Of(n) {
        var t = n % bf;
        return t === 0 && (t = bf), t;
      }
      function lx(n, t, e) {
        var s = e - 1, i = Tf.charCodeAt(s), r = If.charCodeAt(s), o = i + n - 1, a = r + t, h = !1;
        o > Wr && (o = o - Wr + Ni - 1, h = !0), (o === Ie || i < Ie && o > Ie || (o > Ie || i < Ie) && h) && o++, (o === Ye || i < Ye && o > Ye || (o > Ye || i < Ye) && h) && (o++, o === Ie && o++), o > Wr && (o = o - Wr + Ni - 1), a > jr ? (a = a - jr + Ni - 1, h = !0) : h = !1, (a === Ie || r < Ie && a > Ie || (a > Ie || r < Ie) && h) && a++, (a === Ye || r < Ye && a > Ye || (a > Ye || r < Ye) && h) && (a++, a === Ie && a++), a > jr && (a = a - jr + Ni - 1);
        var l = String.fromCharCode(o) + String.fromCharCode(a);
        return l;
      }
      function Nf(n) {
        if (n && n.length === 0) throw "MGRSPoint coverting from nothing";
        for (var t = n.length, e = null, s = "", i, r = 0; !/[A-Z]/.test(i = n.charAt(r)); ) {
          if (r >= 2) throw "MGRSPoint bad conversion from: " + n;
          s += i, r++;
        }
        var o = parseInt(s, 10);
        if (r === 0 || r + 3 > t) throw "MGRSPoint bad conversion from: " + n;
        var a = n.charAt(r++);
        if (a <= "A" || a === "B" || a === "Y" || a >= "Z" || a === "I" || a === "O") throw "MGRSPoint zone letter " + a + " not handled: " + n;
        e = n.substring(r, r += 2);
        for (var h = Of(o), l = ux(e.charAt(0), h), u = cx(e.charAt(1), h); u < dx(a); ) u += 2e6;
        var c = t - r;
        if (c % 2 !== 0) throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + n;
        var d = c / 2, p = 0, f = 0, y, E, M, w, C;
        return d > 0 && (y = 1e5 / Math.pow(10, d), E = n.substring(r, r + d), p = parseFloat(E) * y, M = n.substring(r + d), f = parseFloat(M) * y), w = p + l, C = f + u, { easting: w, northing: C, zoneLetter: a, zoneNumber: o, accuracy: y };
      }
      function ux(n, t) {
        for (var e = Tf.charCodeAt(t - 1), s = 1e5, i = !1; e !== n.charCodeAt(0); ) {
          if (e++, e === Ie && e++, e === Ye && e++, e > Wr) {
            if (i) throw "Bad character: " + n;
            e = Ni, i = !0;
          }
          s += 1e5;
        }
        return s;
      }
      function cx(n, t) {
        if (n > "V") throw "MGRSPoint given invalid Northing " + n;
        for (var e = If.charCodeAt(t - 1), s = 0, i = !1; e !== n.charCodeAt(0); ) {
          if (e++, e === Ie && e++, e === Ye && e++, e > jr) {
            if (i) throw "Bad character: " + n;
            e = Ni, i = !0;
          }
          s += 1e5;
        }
        return s;
      }
      function dx(n) {
        var t;
        switch (n) {
          case "C":
            t = 11e5;
            break;
          case "D":
            t = 2e6;
            break;
          case "E":
            t = 28e5;
            break;
          case "F":
            t = 37e5;
            break;
          case "G":
            t = 46e5;
            break;
          case "H":
            t = 55e5;
            break;
          case "J":
            t = 64e5;
            break;
          case "K":
            t = 73e5;
            break;
          case "L":
            t = 82e5;
            break;
          case "M":
            t = 91e5;
            break;
          case "N":
            t = 0;
            break;
          case "P":
            t = 8e5;
            break;
          case "Q":
            t = 17e5;
            break;
          case "R":
            t = 26e5;
            break;
          case "S":
            t = 35e5;
            break;
          case "T":
            t = 44e5;
            break;
          case "U":
            t = 53e5;
            break;
          case "V":
            t = 62e5;
            break;
          case "W":
            t = 7e6;
            break;
          case "X":
            t = 79e5;
            break;
          default:
            t = -1;
        }
        if (t >= 0) return t;
        throw "Invalid zone letter: " + n;
      }
      function Fi(n, t, e) {
        if (!(this instanceof Fi)) return new Fi(n, t, e);
        if (Array.isArray(n)) this.x = n[0], this.y = n[1], this.z = n[2] || 0;
        else if (typeof n == "object") this.x = n.x, this.y = n.y, this.z = n.z || 0;
        else if (typeof n == "string" && typeof t > "u") {
          var s = n.split(",");
          this.x = parseFloat(s[0], 10), this.y = parseFloat(s[1], 10), this.z = parseFloat(s[2], 10) || 0;
        } else this.x = n, this.y = t, this.z = e || 0;
        console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
      }
      Fi.fromMGRS = function(n) {
        return new Fi(Pf(n));
      }, Fi.prototype.toMGRS = function(n) {
        return Af([this.x, this.y], n);
      };
      var fx = 1, gx = 0.25, Ff = 0.046875, kf = 0.01953125, Df = 0.01068115234375, px = 0.75, mx = 0.46875, _x = 0.013020833333333334, yx = 0.007120768229166667, xx = 0.3645833333333333, Ex = 0.005696614583333333, Mx = 0.3076171875;
      function Wl(n) {
        var t = [];
        t[0] = fx - n * (gx + n * (Ff + n * (kf + n * Df))), t[1] = n * (px - n * (Ff + n * (kf + n * Df)));
        var e = n * n;
        return t[2] = e * (mx - n * (_x + n * yx)), e *= n, t[3] = e * (xx - n * Ex), t[4] = e * n * Mx, t;
      }
      function ki(n, t, e, s) {
        return e *= t, t *= t, s[0] * n - e * (s[1] + t * (s[2] + t * (s[3] + t * s[4])));
      }
      var wx = 20;
      function Yl(n, t, e) {
        for (var s = 1 / (1 - t), i = n, r = wx; r; --r) {
          var o = Math.sin(i), a = 1 - t * o * o;
          if (a = (ki(i, o, Math.cos(i), e) - n) * (a * Math.sqrt(a)) * s, i -= a, Math.abs(a) < q) return i;
        }
        return i;
      }
      function Sx() {
        this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Wl(this.es), this.ml0 = ki(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
      }
      function vx(n) {
        var t = n.x, e = n.y, s = $(t - this.long0), i, r, o, a = Math.sin(e), h = Math.cos(e);
        if (this.es) {
          var l = h * s, u = Math.pow(l, 2), c = this.ep2 * Math.pow(h, 2), d = Math.pow(c, 2), p = Math.abs(h) > q ? Math.tan(e) : 0, f = Math.pow(p, 2), y = Math.pow(f, 2);
          i = 1 - this.es * Math.pow(a, 2), l = l / Math.sqrt(i);
          var E = ki(e, a, h, this.en);
          r = this.a * (this.k0 * l * (1 + u / 6 * (1 - f + c + u / 20 * (5 - 18 * f + y + 14 * c - 58 * f * c + u / 42 * (61 + 179 * y - y * f - 479 * f))))) + this.x0, o = this.a * (this.k0 * (E - this.ml0 + a * s * l / 2 * (1 + u / 12 * (5 - f + 9 * c + 4 * d + u / 30 * (61 + y - 58 * f + 270 * c - 330 * f * c + u / 56 * (1385 + 543 * y - y * f - 3111 * f)))))) + this.y0;
        } else {
          var M = h * Math.sin(s);
          if (Math.abs(Math.abs(M) - 1) < q) return 93;
          if (r = 0.5 * this.a * this.k0 * Math.log((1 + M) / (1 - M)) + this.x0, o = h * Math.cos(s) / Math.sqrt(1 - Math.pow(M, 2)), M = Math.abs(o), M >= 1) {
            if (M - 1 > q) return 93;
            o = 0;
          } else o = Math.acos(o);
          e < 0 && (o = -o), o = this.a * this.k0 * (o - this.lat0) + this.y0;
        }
        return n.x = r, n.y = o, n;
      }
      function Rx(n) {
        var t, e, s, i, r = (n.x - this.x0) * (1 / this.a), o = (n.y - this.y0) * (1 / this.a);
        if (this.es) if (t = this.ml0 + o / this.k0, e = Yl(t, this.es, this.en), Math.abs(e) < D) {
          var a = Math.sin(e), h = Math.cos(e), l = Math.abs(h) > q ? Math.tan(e) : 0, u = this.ep2 * Math.pow(h, 2), c = Math.pow(u, 2), d = Math.pow(l, 2), p = Math.pow(d, 2);
          t = 1 - this.es * Math.pow(a, 2);
          var f = r * Math.sqrt(t) / this.k0, y = Math.pow(f, 2);
          t = t * l, s = e - t * y / (1 - this.es) * 0.5 * (1 - y / 12 * (5 + 3 * d - 9 * u * d + u - 4 * c - y / 30 * (61 + 90 * d - 252 * u * d + 45 * p + 46 * u - y / 56 * (1385 + 3633 * d + 4095 * p + 1574 * p * d)))), i = $(this.long0 + f * (1 - y / 6 * (1 + 2 * d + u - y / 20 * (5 + 28 * d + 24 * p + 8 * u * d + 6 * u - y / 42 * (61 + 662 * d + 1320 * p + 720 * p * d)))) / h);
        } else s = D * Ur(o), i = 0;
        else {
          var E = Math.exp(r / this.k0), M = 0.5 * (E - 1 / E), w = this.lat0 + o / this.k0, C = Math.cos(w);
          t = Math.sqrt((1 - Math.pow(C, 2)) / (1 + Math.pow(M, 2))), s = Math.asin(t), o < 0 && (s = -s), M === 0 && C === 0 ? i = 0 : i = $(Math.atan2(M, C) + this.long0);
        }
        return n.x = i, n.y = s, n;
      }
      var Cx = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
      const va = { init: Sx, forward: vx, inverse: Rx, names: Cx };
      function Gf(n) {
        var t = Math.exp(n);
        return t = (t - 1 / t) / 2, t;
      }
      function Ae(n, t) {
        n = Math.abs(n), t = Math.abs(t);
        var e = Math.max(n, t), s = Math.min(n, t) / (e || 1);
        return e * Math.sqrt(1 + Math.pow(s, 2));
      }
      function bx(n) {
        var t = 1 + n, e = t - 1;
        return e === 0 ? n : n * Math.log(t) / e;
      }
      function Tx(n) {
        var t = Math.abs(n);
        return t = bx(t * (1 + t / (Ae(1, t) + 1))), n < 0 ? -t : t;
      }
      function Xl(n, t) {
        for (var e = 2 * Math.cos(2 * t), s = n.length - 1, i = n[s], r = 0, o; --s >= 0; ) o = -r + e * i + n[s], r = i, i = o;
        return t + o * Math.sin(2 * t);
      }
      function Ix(n, t) {
        for (var e = 2 * Math.cos(t), s = n.length - 1, i = n[s], r = 0, o; --s >= 0; ) o = -r + e * i + n[s], r = i, i = o;
        return Math.sin(t) * o;
      }
      function Ax(n) {
        var t = Math.exp(n);
        return t = (t + 1 / t) / 2, t;
      }
      function zf(n, t, e) {
        for (var s = Math.sin(t), i = Math.cos(t), r = Gf(e), o = Ax(e), a = 2 * i * o, h = -2 * s * r, l = n.length - 1, u = n[l], c = 0, d = 0, p = 0, f, y; --l >= 0; ) f = d, y = c, d = u, c = p, u = -f + a * d - h * c + n[l], p = -y + h * d + a * c;
        return a = s * o, h = i * r, [a * u - h * p, a * p + h * u];
      }
      function Px() {
        if (!this.approx && (isNaN(this.es) || this.es <= 0)) throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
        this.approx && (va.init.apply(this), this.forward = va.forward, this.inverse = va.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
        var n = this.es / (1 + Math.sqrt(1 - this.es)), t = n / (2 - n), e = t;
        this.cgb[0] = t * (2 + t * (-2 / 3 + t * (-2 + t * (116 / 45 + t * (26 / 45 + t * (-2854 / 675)))))), this.cbg[0] = t * (-2 + t * (2 / 3 + t * (4 / 3 + t * (-82 / 45 + t * (32 / 45 + t * (4642 / 4725)))))), e = e * t, this.cgb[1] = e * (7 / 3 + t * (-8 / 5 + t * (-227 / 45 + t * (2704 / 315 + t * (2323 / 945))))), this.cbg[1] = e * (5 / 3 + t * (-16 / 15 + t * (-13 / 9 + t * (904 / 315 + t * (-1522 / 945))))), e = e * t, this.cgb[2] = e * (56 / 15 + t * (-136 / 35 + t * (-1262 / 105 + t * (73814 / 2835)))), this.cbg[2] = e * (-26 / 15 + t * (34 / 21 + t * (8 / 5 + t * (-12686 / 2835)))), e = e * t, this.cgb[3] = e * (4279 / 630 + t * (-332 / 35 + t * (-399572 / 14175))), this.cbg[3] = e * (1237 / 630 + t * (-12 / 5 + t * (-24832 / 14175))), e = e * t, this.cgb[4] = e * (4174 / 315 + t * (-144838 / 6237)), this.cbg[4] = e * (-734 / 315 + t * (109598 / 31185)), e = e * t, this.cgb[5] = e * (601676 / 22275), this.cbg[5] = e * (444337 / 155925), e = Math.pow(t, 2), this.Qn = this.k0 / (1 + t) * (1 + e * (1 / 4 + e * (1 / 64 + e / 256))), this.utg[0] = t * (-0.5 + t * (2 / 3 + t * (-37 / 96 + t * (1 / 360 + t * (81 / 512 + t * (-96199 / 604800)))))), this.gtu[0] = t * (0.5 + t * (-2 / 3 + t * (5 / 16 + t * (41 / 180 + t * (-127 / 288 + t * (7891 / 37800)))))), this.utg[1] = e * (-1 / 48 + t * (-1 / 15 + t * (437 / 1440 + t * (-46 / 105 + t * (1118711 / 3870720))))), this.gtu[1] = e * (13 / 48 + t * (-3 / 5 + t * (557 / 1440 + t * (281 / 630 + t * (-1983433 / 1935360))))), e = e * t, this.utg[2] = e * (-17 / 480 + t * (37 / 840 + t * (209 / 4480 + t * (-5569 / 90720)))), this.gtu[2] = e * (61 / 240 + t * (-103 / 140 + t * (15061 / 26880 + t * (167603 / 181440)))), e = e * t, this.utg[3] = e * (-4397 / 161280 + t * (11 / 504 + t * (830251 / 7257600))), this.gtu[3] = e * (49561 / 161280 + t * (-179 / 168 + t * (6601661 / 7257600))), e = e * t, this.utg[4] = e * (-4583 / 161280 + t * (108847 / 3991680)), this.gtu[4] = e * (34729 / 80640 + t * (-3418889 / 1995840)), e = e * t, this.utg[5] = e * (-20648693 / 638668800), this.gtu[5] = e * (212378941 / 319334400);
        var s = Xl(this.cbg, this.lat0);
        this.Zb = -this.Qn * (s + Ix(this.gtu, 2 * s));
      }
      function Lx(n) {
        var t = $(n.x - this.long0), e = n.y;
        e = Xl(this.cbg, e);
        var s = Math.sin(e), i = Math.cos(e), r = Math.sin(t), o = Math.cos(t);
        e = Math.atan2(s, o * i), t = Math.atan2(r * i, Ae(s, i * o)), t = Tx(Math.tan(t));
        var a = zf(this.gtu, 2 * e, 2 * t);
        e = e + a[0], t = t + a[1];
        var h, l;
        return Math.abs(t) <= 2.623395162778 ? (h = this.a * (this.Qn * t) + this.x0, l = this.a * (this.Qn * e + this.Zb) + this.y0) : (h = 1 / 0, l = 1 / 0), n.x = h, n.y = l, n;
      }
      function Ox(n) {
        var t = (n.x - this.x0) * (1 / this.a), e = (n.y - this.y0) * (1 / this.a);
        e = (e - this.Zb) / this.Qn, t = t / this.Qn;
        var s, i;
        if (Math.abs(t) <= 2.623395162778) {
          var r = zf(this.utg, 2 * e, 2 * t);
          e = e + r[0], t = t + r[1], t = Math.atan(Gf(t));
          var o = Math.sin(e), a = Math.cos(e), h = Math.sin(t), l = Math.cos(t);
          e = Math.atan2(o * l, Ae(h, l * a)), t = Math.atan2(h, l * a), s = $(t + this.long0), i = Xl(this.cgb, e);
        } else s = 1 / 0, i = 1 / 0;
        return n.x = s, n.y = i, n;
      }
      var Nx = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
      const Ra = { init: Px, forward: Lx, inverse: Ox, names: Nx };
      function Fx(n, t) {
        if (n === void 0) {
          if (n = Math.floor(($(t) + Math.PI) * 30 / Math.PI) + 1, n < 0) return 0;
          if (n > 60) return 60;
        }
        return n;
      }
      var kx = "etmerc";
      function Dx() {
        var n = Fx(this.zone, this.long0);
        if (n === void 0) throw new Error("unknown utm zone");
        this.lat0 = 0, this.long0 = (6 * Math.abs(n) - 183) * te, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Ra.init.apply(this), this.forward = Ra.forward, this.inverse = Ra.inverse;
      }
      var Gx = ["Universal Transverse Mercator System", "utm"];
      const zx = { init: Dx, names: Gx, dependsOn: kx };
      function ql(n, t) {
        return Math.pow((1 - n) / (1 + n), t);
      }
      var Ux = 20;
      function Bx() {
        var n = Math.sin(this.lat0), t = Math.cos(this.lat0);
        t *= t, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * n * n), this.C = Math.sqrt(1 + this.es * t * t / (1 - this.es)), this.phic0 = Math.asin(n / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + Ct) / (Math.pow(Math.tan(0.5 * this.lat0 + Ct), this.C) * ql(this.e * n, this.ratexp));
      }
      function jx(n) {
        var t = n.x, e = n.y;
        return n.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * e + Ct), this.C) * ql(this.e * Math.sin(e), this.ratexp)) - D, n.x = this.C * t, n;
      }
      function Wx(n) {
        for (var t = 1e-14, e = n.x / this.C, s = n.y, i = Math.pow(Math.tan(0.5 * s + Ct) / this.K, 1 / this.C), r = Ux; r > 0 && (s = 2 * Math.atan(i * ql(this.e * Math.sin(n.y), -0.5 * this.e)) - D, !(Math.abs(s - n.y) < t)); --r) n.y = s;
        return r ? (n.x = e, n.y = s, n) : null;
      }
      var Yx = ["gauss"];
      const Vl = { init: Bx, forward: jx, inverse: Wx, names: Yx };
      function Xx() {
        Vl.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
      }
      function qx(n) {
        var t, e, s, i;
        return n.x = $(n.x - this.long0), Vl.forward.apply(this, [n]), t = Math.sin(n.y), e = Math.cos(n.y), s = Math.cos(n.x), i = this.k0 * this.R2 / (1 + this.sinc0 * t + this.cosc0 * e * s), n.x = i * e * Math.sin(n.x), n.y = i * (this.cosc0 * t - this.sinc0 * e * s), n.x = this.a * n.x + this.x0, n.y = this.a * n.y + this.y0, n;
      }
      function Vx(n) {
        var t, e, s, i, r;
        if (n.x = (n.x - this.x0) / this.a, n.y = (n.y - this.y0) / this.a, n.x /= this.k0, n.y /= this.k0, r = Ae(n.x, n.y)) {
          var o = 2 * Math.atan2(r, this.R2);
          t = Math.sin(o), e = Math.cos(o), i = Math.asin(e * this.sinc0 + n.y * t * this.cosc0 / r), s = Math.atan2(n.x * t, r * this.cosc0 * e - n.y * this.sinc0 * t);
        } else i = this.phic0, s = 0;
        return n.x = s, n.y = i, Vl.inverse.apply(this, [n]), n.x = $(n.x + this.long0), n;
      }
      var $x = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
      const Zx = { init: Xx, forward: qx, inverse: Vx, names: $x };
      function Kx(n, t, e) {
        return t *= e, Math.tan(0.5 * (D + n)) * Math.pow((1 - t) / (1 + t), 0.5 * e);
      }
      function Hx() {
        this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= q && (this.k0 = 0.5 * (1 + Ur(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= q && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= q && Math.abs(Math.cos(this.lat_ts)) > q && (this.k0 = 0.5 * this.cons * gn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tn(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = gn(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - D, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
      }
      function Jx(n) {
        var t = n.x, e = n.y, s = Math.sin(e), i = Math.cos(e), r, o, a, h, l, u, c = $(t - this.long0);
        return Math.abs(Math.abs(t - this.long0) - Math.PI) <= q && Math.abs(e + this.lat0) <= q ? (n.x = NaN, n.y = NaN, n) : this.sphere ? (r = 2 * this.k0 / (1 + this.sinlat0 * s + this.coslat0 * i * Math.cos(c)), n.x = this.a * r * i * Math.sin(c) + this.x0, n.y = this.a * r * (this.coslat0 * s - this.sinlat0 * i * Math.cos(c)) + this.y0, n) : (o = 2 * Math.atan(this.ssfn_(e, s, this.e)) - D, h = Math.cos(o), a = Math.sin(o), Math.abs(this.coslat0) <= q ? (l = tn(this.e, e * this.con, this.con * s), u = 2 * this.a * this.k0 * l / this.cons, n.x = this.x0 + u * Math.sin(t - this.long0), n.y = this.y0 - this.con * u * Math.cos(t - this.long0), n) : (Math.abs(this.sinlat0) < q ? (r = 2 * this.a * this.k0 / (1 + h * Math.cos(c)), n.y = r * a) : (r = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * a + this.cosX0 * h * Math.cos(c))), n.y = r * (this.cosX0 * a - this.sinX0 * h * Math.cos(c)) + this.y0), n.x = r * h * Math.sin(c) + this.x0, n));
      }
      function Qx(n) {
        n.x -= this.x0, n.y -= this.y0;
        var t, e, s, i, r, o = Math.sqrt(n.x * n.x + n.y * n.y);
        if (this.sphere) {
          var a = 2 * Math.atan(o / (2 * this.a * this.k0));
          return t = this.long0, e = this.lat0, o <= q ? (n.x = t, n.y = e, n) : (e = Math.asin(Math.cos(a) * this.sinlat0 + n.y * Math.sin(a) * this.coslat0 / o), Math.abs(this.coslat0) < q ? this.lat0 > 0 ? t = $(this.long0 + Math.atan2(n.x, -1 * n.y)) : t = $(this.long0 + Math.atan2(n.x, n.y)) : t = $(this.long0 + Math.atan2(n.x * Math.sin(a), o * this.coslat0 * Math.cos(a) - n.y * this.sinlat0 * Math.sin(a))), n.x = t, n.y = e, n);
        } else if (Math.abs(this.coslat0) <= q) {
          if (o <= q) return e = this.lat0, t = this.long0, n.x = t, n.y = e, n;
          n.x *= this.con, n.y *= this.con, s = o * this.cons / (2 * this.a * this.k0), e = this.con * Br(this.e, s), t = this.con * $(this.con * this.long0 + Math.atan2(n.x, -1 * n.y));
        } else i = 2 * Math.atan(o * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), t = this.long0, o <= q ? r = this.X0 : (r = Math.asin(Math.cos(i) * this.sinX0 + n.y * Math.sin(i) * this.cosX0 / o), t = $(this.long0 + Math.atan2(n.x * Math.sin(i), o * this.cosX0 * Math.cos(i) - n.y * this.sinX0 * Math.sin(i)))), e = -1 * Br(this.e, Math.tan(0.5 * (D + r)));
        return n.x = t, n.y = e, n;
      }
      var tE = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
      const eE = { init: Hx, forward: Jx, inverse: Qx, names: tE, ssfn_: Kx };
      function nE() {
        var n = this.lat0;
        this.lambda0 = this.long0;
        var t = Math.sin(n), e = this.a, s = this.rf, i = 1 / s, r = 2 * i - Math.pow(i, 2), o = this.e = Math.sqrt(r);
        this.R = this.k0 * e * Math.sqrt(1 - r) / (1 - r * Math.pow(t, 2)), this.alpha = Math.sqrt(1 + r / (1 - r) * Math.pow(Math.cos(n), 4)), this.b0 = Math.asin(t / this.alpha);
        var a = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), h = Math.log(Math.tan(Math.PI / 4 + n / 2)), l = Math.log((1 + o * t) / (1 - o * t));
        this.K = a - this.alpha * h + this.alpha * o / 2 * l;
      }
      function sE(n) {
        var t = Math.log(Math.tan(Math.PI / 4 - n.y / 2)), e = this.e / 2 * Math.log((1 + this.e * Math.sin(n.y)) / (1 - this.e * Math.sin(n.y))), s = -this.alpha * (t + e) + this.K, i = 2 * (Math.atan(Math.exp(s)) - Math.PI / 4), r = this.alpha * (n.x - this.lambda0), o = Math.atan(Math.sin(r) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(r))), a = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(r));
        return n.y = this.R / 2 * Math.log((1 + Math.sin(a)) / (1 - Math.sin(a))) + this.y0, n.x = this.R * o + this.x0, n;
      }
      function iE(n) {
        for (var t = n.x - this.x0, e = n.y - this.y0, s = t / this.R, i = 2 * (Math.atan(Math.exp(e / this.R)) - Math.PI / 4), r = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(s)), o = Math.atan(Math.sin(s) / (Math.cos(this.b0) * Math.cos(s) - Math.sin(this.b0) * Math.tan(i))), a = this.lambda0 + o / this.alpha, h = 0, l = r, u = -1e3, c = 0; Math.abs(l - u) > 1e-7; ) {
          if (++c > 20) return;
          h = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + r / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(h)) - Math.PI / 2;
        }
        return n.x = a, n.y = l, n;
      }
      var rE = ["somerc"];
      const oE = { init: nE, forward: sE, inverse: iE, names: rE };
      var Di = 1e-7;
      function aE(n) {
        var t = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], e = typeof n.PROJECTION == "object" ? Object.keys(n.PROJECTION)[0] : n.PROJECTION;
        return "no_uoff" in n || "no_off" in n || t.indexOf(e) !== -1;
      }
      function hE() {
        var n, t, e, s, i, r, o, a, h, l, u = 0, c, d = 0, p = 0, f = 0, y = 0, E = 0, M = 0;
        this.no_off = aE(this), this.no_rot = "no_rot" in this;
        var w = !1;
        "alpha" in this && (w = !0);
        var C = !1;
        if ("rectified_grid_angle" in this && (C = !0), w && (M = this.alpha), C && (u = this.rectified_grid_angle * te), w || C) d = this.longc;
        else if (p = this.long1, y = this.lat1, f = this.long2, E = this.lat2, Math.abs(y - E) <= Di || (n = Math.abs(y)) <= Di || Math.abs(n - D) <= Di || Math.abs(Math.abs(this.lat0) - D) <= Di || Math.abs(Math.abs(E) - D) <= Di) throw new Error();
        var v = 1 - this.es;
        t = Math.sqrt(v), Math.abs(this.lat0) > q ? (a = Math.sin(this.lat0), e = Math.cos(this.lat0), n = 1 - this.es * a * a, this.B = e * e, this.B = Math.sqrt(1 + this.es * this.B * this.B / v), this.A = this.B * this.k0 * t / n, s = this.B * t / (e * Math.sqrt(n)), i = s * s - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += s, this.E *= Math.pow(tn(this.e, this.lat0, a), this.B)) : (this.B = 1 / t, this.A = this.k0, this.E = s = i = 1), w || C ? (w ? (c = Math.asin(Math.sin(M) / s), C || (u = M)) : (c = u, M = Math.asin(s * Math.sin(c))), this.lam0 = d - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (r = Math.pow(tn(this.e, y, Math.sin(y)), this.B), o = Math.pow(tn(this.e, E, Math.sin(E)), this.B), i = this.E / r, h = (o - r) / (o + r), l = this.E * this.E, l = (l - o * r) / (l + o * r), n = p - f, n < -Math.pi ? f -= Gr : n > Math.pi && (f += Gr), this.lam0 = $(0.5 * (p + f) - Math.atan(l * Math.tan(0.5 * this.B * (p - f)) / h) / this.B), c = Math.atan(2 * Math.sin(this.B * $(p - this.lam0)) / (i - 1 / i)), u = M = Math.asin(s * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(u), this.cosrot = Math.cos(u), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(s * s - 1) / Math.cos(M))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(Ct - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(Ct + i));
      }
      function lE(n) {
        var t = {}, e, s, i, r, o, a, h, l;
        if (n.x = n.x - this.lam0, Math.abs(Math.abs(n.y) - D) > q) {
          if (o = this.E / Math.pow(tn(this.e, n.y, Math.sin(n.y)), this.B), a = 1 / o, e = 0.5 * (o - a), s = 0.5 * (o + a), r = Math.sin(this.B * n.x), i = (e * this.singam - r * this.cosgam) / s, Math.abs(Math.abs(i) - 1) < q) throw new Error();
          l = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), a = Math.cos(this.B * n.x), Math.abs(a) < Di ? h = this.A * n.x : h = this.ArB * Math.atan2(e * this.cosgam + r * this.singam, a);
        } else l = n.y > 0 ? this.v_pole_n : this.v_pole_s, h = this.ArB * n.y;
        return this.no_rot ? (t.x = h, t.y = l) : (h -= this.u_0, t.x = l * this.cosrot + h * this.sinrot, t.y = h * this.cosrot - l * this.sinrot), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
      }
      function uE(n) {
        var t, e, s, i, r, o, a, h = {};
        if (n.x = (n.x - this.x0) * (1 / this.a), n.y = (n.y - this.y0) * (1 / this.a), this.no_rot ? (e = n.y, t = n.x) : (e = n.x * this.cosrot - n.y * this.sinrot, t = n.y * this.cosrot + n.x * this.sinrot + this.u_0), s = Math.exp(-this.BrA * e), i = 0.5 * (s - 1 / s), r = 0.5 * (s + 1 / s), o = Math.sin(this.BrA * t), a = (o * this.cosgam + i * this.singam) / r, Math.abs(Math.abs(a) - 1) < q) h.x = 0, h.y = a < 0 ? -D : D;
        else {
          if (h.y = this.E / Math.sqrt((1 + a) / (1 - a)), h.y = Br(this.e, Math.pow(h.y, 1 / this.B)), h.y === 1 / 0) throw new Error();
          h.x = -this.rB * Math.atan2(i * this.cosgam - o * this.singam, Math.cos(this.BrA * t));
        }
        return h.x += this.lam0, h;
      }
      var cE = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
      const dE = { init: hE, forward: lE, inverse: uE, names: cE };
      function fE() {
        if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < q)) {
          var n = this.b / this.a;
          this.e = Math.sqrt(1 - n * n);
          var t = Math.sin(this.lat1), e = Math.cos(this.lat1), s = gn(this.e, t, e), i = tn(this.e, this.lat1, t), r = Math.sin(this.lat2), o = Math.cos(this.lat2), a = gn(this.e, r, o), h = tn(this.e, this.lat2, r), l = tn(this.e, this.lat0, Math.sin(this.lat0));
          Math.abs(this.lat1 - this.lat2) > q ? this.ns = Math.log(s / a) / Math.log(i / h) : this.ns = t, isNaN(this.ns) && (this.ns = t), this.f0 = s / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(l, this.ns), this.title || (this.title = "Lambert Conformal Conic");
        }
      }
      function gE(n) {
        var t = n.x, e = n.y;
        Math.abs(2 * Math.abs(e) - Math.PI) <= q && (e = Ur(e) * (D - 2 * q));
        var s = Math.abs(Math.abs(e) - D), i, r;
        if (s > q) i = tn(this.e, e, Math.sin(e)), r = this.a * this.f0 * Math.pow(i, this.ns);
        else {
          if (s = e * this.ns, s <= 0) return null;
          r = 0;
        }
        var o = this.ns * $(t - this.long0);
        return n.x = this.k0 * (r * Math.sin(o)) + this.x0, n.y = this.k0 * (this.rh - r * Math.cos(o)) + this.y0, n;
      }
      function pE(n) {
        var t, e, s, i, r, o = (n.x - this.x0) / this.k0, a = this.rh - (n.y - this.y0) / this.k0;
        this.ns > 0 ? (t = Math.sqrt(o * o + a * a), e = 1) : (t = -Math.sqrt(o * o + a * a), e = -1);
        var h = 0;
        if (t !== 0 && (h = Math.atan2(e * o, e * a)), t !== 0 || this.ns > 0) {
          if (e = 1 / this.ns, s = Math.pow(t / (this.a * this.f0), e), i = Br(this.e, s), i === -9999) return null;
        } else i = -D;
        return r = $(h / this.ns + this.long0), n.x = r, n.y = i, n;
      }
      var mE = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_1SP", "Lambert_Conformal_Conic_2SP", "lcc", "Lambert Conic Conformal (1SP)", "Lambert Conic Conformal (2SP)"];
      const _E = { init: fE, forward: gE, inverse: pE, names: mE };
      function yE() {
        this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
      }
      function xE(n) {
        var t, e, s, i, r, o, a, h = n.x, l = n.y, u = $(h - this.long0);
        return t = Math.pow((1 + this.e * Math.sin(l)) / (1 - this.e * Math.sin(l)), this.alfa * this.e / 2), e = 2 * (Math.atan(this.k * Math.pow(Math.tan(l / 2 + this.s45), this.alfa) / t) - this.s45), s = -u * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(e) + Math.sin(this.ad) * Math.cos(e) * Math.cos(s)), r = Math.asin(Math.cos(e) * Math.sin(s) / Math.cos(i)), o = this.n * r, a = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), n.y = a * Math.cos(o) / 1, n.x = a * Math.sin(o) / 1, this.czech || (n.y *= -1, n.x *= -1), n;
      }
      function EE(n) {
        var t, e, s, i, r, o, a, h, l = n.x;
        n.x = n.y, n.y = l, this.czech || (n.y *= -1, n.x *= -1), o = Math.sqrt(n.x * n.x + n.y * n.y), r = Math.atan2(n.y, n.x), i = r / Math.sin(this.s0), s = 2 * (Math.atan(Math.pow(this.ro0 / o, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), t = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(i)), e = Math.asin(Math.cos(s) * Math.sin(i) / Math.cos(t)), n.x = this.long0 - e / this.alfa, a = t, h = 0;
        var u = 0;
        do
          n.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(t / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(a)) / (1 - this.e * Math.sin(a)), this.e / 2)) - this.s45), Math.abs(a - n.y) < 1e-10 && (h = 1), a = n.y, u += 1;
        while (h === 0 && u < 15);
        return u >= 15 ? null : n;
      }
      var ME = ["Krovak", "krovak"];
      const wE = { init: yE, forward: xE, inverse: EE, names: ME };
      function xe(n, t, e, s, i) {
        return n * i - t * Math.sin(2 * i) + e * Math.sin(4 * i) - s * Math.sin(6 * i);
      }
      function Yr(n) {
        return 1 - 0.25 * n * (1 + n / 16 * (3 + 1.25 * n));
      }
      function Xr(n) {
        return 0.375 * n * (1 + 0.25 * n * (1 + 0.46875 * n));
      }
      function qr(n) {
        return 0.05859375 * n * n * (1 + 0.75 * n);
      }
      function Vr(n) {
        return n * n * n * (35 / 3072);
      }
      function Gi(n, t, e) {
        var s = t * e;
        return n / Math.sqrt(1 - s * s);
      }
      function as(n) {
        return Math.abs(n) < D ? n : n - Ur(n) * Math.PI;
      }
      function Ca(n, t, e, s, i) {
        var r, o;
        r = n / t;
        for (var a = 0; a < 15; a++) if (o = (n - (t * r - e * Math.sin(2 * r) + s * Math.sin(4 * r) - i * Math.sin(6 * r))) / (t - 2 * e * Math.cos(2 * r) + 4 * s * Math.cos(4 * r) - 6 * i * Math.cos(6 * r)), r += o, Math.abs(o) <= 1e-10) return r;
        return NaN;
      }
      function SE() {
        this.sphere || (this.e0 = Yr(this.es), this.e1 = Xr(this.es), this.e2 = qr(this.es), this.e3 = Vr(this.es), this.ml0 = this.a * xe(this.e0, this.e1, this.e2, this.e3, this.lat0));
      }
      function vE(n) {
        var t, e, s = n.x, i = n.y;
        if (s = $(s - this.long0), this.sphere) t = this.a * Math.asin(Math.cos(i) * Math.sin(s)), e = this.a * (Math.atan2(Math.tan(i), Math.cos(s)) - this.lat0);
        else {
          var r = Math.sin(i), o = Math.cos(i), a = Gi(this.a, this.e, r), h = Math.tan(i) * Math.tan(i), l = s * Math.cos(i), u = l * l, c = this.es * o * o / (1 - this.es), d = this.a * xe(this.e0, this.e1, this.e2, this.e3, i);
          t = a * l * (1 - u * h * (1 / 6 - (8 - h + 8 * c) * u / 120)), e = d - this.ml0 + a * r / o * u * (0.5 + (5 - h + 6 * c) * u / 24);
        }
        return n.x = t + this.x0, n.y = e + this.y0, n;
      }
      function RE(n) {
        n.x -= this.x0, n.y -= this.y0;
        var t = n.x / this.a, e = n.y / this.a, s, i;
        if (this.sphere) {
          var r = e + this.lat0;
          s = Math.asin(Math.sin(r) * Math.cos(t)), i = Math.atan2(Math.tan(t), Math.cos(r));
        } else {
          var o = this.ml0 / this.a + e, a = Ca(o, this.e0, this.e1, this.e2, this.e3);
          if (Math.abs(Math.abs(a) - D) <= q) return n.x = this.long0, n.y = D, e < 0 && (n.y *= -1), n;
          var h = Gi(this.a, this.e, Math.sin(a)), l = h * h * h / this.a / this.a * (1 - this.es), u = Math.pow(Math.tan(a), 2), c = t * this.a / h, d = c * c;
          s = a - h * Math.tan(a) / l * c * c * (0.5 - (1 + 3 * u) * c * c / 24), i = c * (1 - d * (u / 3 + (1 + 3 * u) * u * d / 15)) / Math.cos(a);
        }
        return n.x = $(i + this.long0), n.y = as(s), n;
      }
      var CE = ["Cassini", "Cassini_Soldner", "cass"];
      const bE = { init: SE, forward: vE, inverse: RE, names: CE };
      function hs(n, t) {
        var e;
        return n > 1e-7 ? (e = n * t, (1 - n * n) * (t / (1 - e * e) - 0.5 / n * Math.log((1 - e) / (1 + e)))) : 2 * t;
      }
      var TE = 1, IE = 2, AE = 3, PE = 4;
      function LE() {
        var n = Math.abs(this.lat0);
        if (Math.abs(n - D) < q ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(n) < q ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
          var t;
          switch (this.qp = hs(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = BE(this.es), this.mode) {
            case this.N_POLE:
              this.dd = 1;
              break;
            case this.S_POLE:
              this.dd = 1;
              break;
            case this.EQUIT:
              this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
              break;
            case this.OBLIQ:
              this.rq = Math.sqrt(0.5 * this.qp), t = Math.sin(this.lat0), this.sinb1 = hs(this.e, t) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * t * t) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
              break;
          }
        } else this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
      }
      function OE(n) {
        var t, e, s, i, r, o, a, h, l, u, c = n.x, d = n.y;
        if (c = $(c - this.long0), this.sphere) {
          if (r = Math.sin(d), u = Math.cos(d), s = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
            if (e = this.mode === this.EQUIT ? 1 + u * s : 1 + this.sinph0 * r + this.cosph0 * u * s, e <= q) return null;
            e = Math.sqrt(2 / e), t = e * u * Math.sin(c), e *= this.mode === this.EQUIT ? r : this.cosph0 * r - this.sinph0 * u * s;
          } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
            if (this.mode === this.N_POLE && (s = -s), Math.abs(d + this.lat0) < q) return null;
            e = Ct - d * 0.5, e = 2 * (this.mode === this.S_POLE ? Math.cos(e) : Math.sin(e)), t = e * Math.sin(c), e *= s;
          }
        } else {
          switch (a = 0, h = 0, l = 0, s = Math.cos(c), i = Math.sin(c), r = Math.sin(d), o = hs(this.e, r), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (a = o / this.qp, h = Math.sqrt(1 - a * a)), this.mode) {
            case this.OBLIQ:
              l = 1 + this.sinb1 * a + this.cosb1 * h * s;
              break;
            case this.EQUIT:
              l = 1 + h * s;
              break;
            case this.N_POLE:
              l = D + d, o = this.qp - o;
              break;
            case this.S_POLE:
              l = d - D, o = this.qp + o;
              break;
          }
          if (Math.abs(l) < q) return null;
          switch (this.mode) {
            case this.OBLIQ:
            case this.EQUIT:
              l = Math.sqrt(2 / l), this.mode === this.OBLIQ ? e = this.ymf * l * (this.cosb1 * a - this.sinb1 * h * s) : e = (l = Math.sqrt(2 / (1 + h * s))) * a * this.ymf, t = this.xmf * l * h * i;
              break;
            case this.N_POLE:
            case this.S_POLE:
              o >= 0 ? (t = (l = Math.sqrt(o)) * i, e = s * (this.mode === this.S_POLE ? l : -l)) : t = e = 0;
              break;
          }
        }
        return n.x = this.a * t + this.x0, n.y = this.a * e + this.y0, n;
      }
      function NE(n) {
        n.x -= this.x0, n.y -= this.y0;
        var t = n.x / this.a, e = n.y / this.a, s, i, r, o, a, h, l;
        if (this.sphere) {
          var u = 0, c, d = 0;
          if (c = Math.sqrt(t * t + e * e), i = c * 0.5, i > 1) return null;
          switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (d = Math.sin(i), u = Math.cos(i)), this.mode) {
            case this.EQUIT:
              i = Math.abs(c) <= q ? 0 : Math.asin(e * d / c), t *= d, e = u * c;
              break;
            case this.OBLIQ:
              i = Math.abs(c) <= q ? this.lat0 : Math.asin(u * this.sinph0 + e * d * this.cosph0 / c), t *= d * this.cosph0, e = (u - Math.sin(i) * this.sinph0) * c;
              break;
            case this.N_POLE:
              e = -e, i = D - i;
              break;
            case this.S_POLE:
              i -= D;
              break;
          }
          s = e === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(t, e);
        } else {
          if (l = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
            if (t /= this.dd, e *= this.dd, h = Math.sqrt(t * t + e * e), h < q) return n.x = this.long0, n.y = this.lat0, n;
            o = 2 * Math.asin(0.5 * h / this.rq), r = Math.cos(o), t *= o = Math.sin(o), this.mode === this.OBLIQ ? (l = r * this.sinb1 + e * o * this.cosb1 / h, a = this.qp * l, e = h * this.cosb1 * r - e * this.sinb1 * o) : (l = e * o / h, a = this.qp * l, e = h * r);
          } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
            if (this.mode === this.N_POLE && (e = -e), a = t * t + e * e, !a) return n.x = this.long0, n.y = this.lat0, n;
            l = 1 - a / this.qp, this.mode === this.S_POLE && (l = -l);
          }
          s = Math.atan2(t, e), i = jE(Math.asin(l), this.apa);
        }
        return n.x = $(this.long0 + s), n.y = i, n;
      }
      var FE = 0.3333333333333333, kE = 0.17222222222222222, DE = 0.10257936507936508, GE = 0.06388888888888888, zE = 0.0664021164021164, UE = 0.016415012942191543;
      function BE(n) {
        var t, e = [];
        return e[0] = n * FE, t = n * n, e[0] += t * kE, e[1] = t * GE, t *= n, e[0] += t * DE, e[1] += t * zE, e[2] = t * UE, e;
      }
      function jE(n, t) {
        var e = n + n;
        return n + t[0] * Math.sin(e) + t[1] * Math.sin(e + e) + t[2] * Math.sin(e + e + e);
      }
      var WE = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
      const YE = { init: LE, forward: OE, inverse: NE, names: WE, S_POLE: TE, N_POLE: IE, EQUIT: AE, OBLIQ: PE };
      function ls(n) {
        return Math.abs(n) > 1 && (n = n > 1 ? 1 : -1), Math.asin(n);
      }
      function XE() {
        Math.abs(this.lat1 + this.lat2) < q || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = gn(this.e3, this.sin_po, this.cos_po), this.qs1 = hs(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = gn(this.e3, this.sin_po, this.cos_po), this.qs2 = hs(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = hs(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > q ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
      }
      function qE(n) {
        var t = n.x, e = n.y;
        this.sin_phi = Math.sin(e), this.cos_phi = Math.cos(e);
        var s = hs(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * s) / this.ns0, r = this.ns0 * $(t - this.long0), o = i * Math.sin(r) + this.x0, a = this.rh - i * Math.cos(r) + this.y0;
        return n.x = o, n.y = a, n;
      }
      function VE(n) {
        var t, e, s, i, r, o;
        return n.x -= this.x0, n.y = this.rh - n.y + this.y0, this.ns0 >= 0 ? (t = Math.sqrt(n.x * n.x + n.y * n.y), s = 1) : (t = -Math.sqrt(n.x * n.x + n.y * n.y), s = -1), i = 0, t !== 0 && (i = Math.atan2(s * n.x, s * n.y)), s = t * this.ns0 / this.a, this.sphere ? o = Math.asin((this.c - s * s) / (2 * this.ns0)) : (e = (this.c - s * s) / this.ns0, o = this.phi1z(this.e3, e)), r = $(i / this.ns0 + this.long0), n.x = r, n.y = o, n;
      }
      function $E(n, t) {
        var e, s, i, r, o, a = ls(0.5 * t);
        if (n < q) return a;
        for (var h = n * n, l = 1; l <= 25; l++) if (e = Math.sin(a), s = Math.cos(a), i = n * e, r = 1 - i * i, o = 0.5 * r * r / s * (t / (1 - h) - e / r + 0.5 / n * Math.log((1 - i) / (1 + i))), a = a + o, Math.abs(o) <= 1e-7) return a;
        return null;
      }
      var ZE = ["Albers_Conic_Equal_Area", "Albers", "aea"];
      const KE = { init: XE, forward: qE, inverse: VE, names: ZE, phi1z: $E };
      function HE() {
        this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
      }
      function JE(n) {
        var t, e, s, i, r, o, a, h, l = n.x, u = n.y;
        return s = $(l - this.long0), t = Math.sin(u), e = Math.cos(u), i = Math.cos(s), o = this.sin_p14 * t + this.cos_p14 * e * i, r = 1, o > 0 || Math.abs(o) <= q ? (a = this.x0 + this.a * r * e * Math.sin(s) / o, h = this.y0 + this.a * r * (this.cos_p14 * t - this.sin_p14 * e * i) / o) : (a = this.x0 + this.infinity_dist * e * Math.sin(s), h = this.y0 + this.infinity_dist * (this.cos_p14 * t - this.sin_p14 * e * i)), n.x = a, n.y = h, n;
      }
      function QE(n) {
        var t, e, s, i, r, o;
        return n.x = (n.x - this.x0) / this.a, n.y = (n.y - this.y0) / this.a, n.x /= this.k0, n.y /= this.k0, (t = Math.sqrt(n.x * n.x + n.y * n.y)) ? (i = Math.atan2(t, this.rc), e = Math.sin(i), s = Math.cos(i), o = ls(s * this.sin_p14 + n.y * e * this.cos_p14 / t), r = Math.atan2(n.x * e, t * this.cos_p14 * s - n.y * this.sin_p14 * e), r = $(this.long0 + r)) : (o = this.phic0, r = 0), n.x = r, n.y = o, n;
      }
      var tM = ["gnom"];
      const eM = { init: HE, forward: JE, inverse: QE, names: tM };
      function nM(n, t) {
        var e = 1 - (1 - n * n) / (2 * n) * Math.log((1 - n) / (1 + n));
        if (Math.abs(Math.abs(t) - e) < 1e-6) return t < 0 ? -1 * D : D;
        for (var s = Math.asin(0.5 * t), i, r, o, a, h = 0; h < 30; h++) if (r = Math.sin(s), o = Math.cos(s), a = n * r, i = Math.pow(1 - a * a, 2) / (2 * o) * (t / (1 - n * n) - r / (1 - a * a) + 0.5 / n * Math.log((1 - a) / (1 + a))), s += i, Math.abs(i) <= 1e-10) return s;
        return NaN;
      }
      function sM() {
        this.sphere || (this.k0 = gn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
      }
      function iM(n) {
        var t = n.x, e = n.y, s, i, r = $(t - this.long0);
        if (this.sphere) s = this.x0 + this.a * r * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(e) / Math.cos(this.lat_ts);
        else {
          var o = hs(this.e, Math.sin(e));
          s = this.x0 + this.a * this.k0 * r, i = this.y0 + this.a * o * 0.5 / this.k0;
        }
        return n.x = s, n.y = i, n;
      }
      function rM(n) {
        n.x -= this.x0, n.y -= this.y0;
        var t, e;
        return this.sphere ? (t = $(this.long0 + n.x / this.a / Math.cos(this.lat_ts)), e = Math.asin(n.y / this.a * Math.cos(this.lat_ts))) : (e = nM(this.e, 2 * n.y * this.k0 / this.a), t = $(this.long0 + n.x / (this.a * this.k0))), n.x = t, n.y = e, n;
      }
      var oM = ["cea"];
      const aM = { init: sM, forward: iM, inverse: rM, names: oM };
      function hM() {
        this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
      }
      function lM(n) {
        var t = n.x, e = n.y, s = $(t - this.long0), i = as(e - this.lat0);
        return n.x = this.x0 + this.a * s * this.rc, n.y = this.y0 + this.a * i, n;
      }
      function uM(n) {
        var t = n.x, e = n.y;
        return n.x = $(this.long0 + (t - this.x0) / (this.a * this.rc)), n.y = as(this.lat0 + (e - this.y0) / this.a), n;
      }
      var cM = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
      const dM = { init: hM, forward: lM, inverse: uM, names: cM };
      var Uf = 20;
      function fM() {
        this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Yr(this.es), this.e1 = Xr(this.es), this.e2 = qr(this.es), this.e3 = Vr(this.es), this.ml0 = this.a * xe(this.e0, this.e1, this.e2, this.e3, this.lat0);
      }
      function gM(n) {
        var t = n.x, e = n.y, s, i, r, o = $(t - this.long0);
        if (r = o * Math.sin(e), this.sphere) Math.abs(e) <= q ? (s = this.a * o, i = -1 * this.a * this.lat0) : (s = this.a * Math.sin(r) / Math.tan(e), i = this.a * (as(e - this.lat0) + (1 - Math.cos(r)) / Math.tan(e)));
        else if (Math.abs(e) <= q) s = this.a * o, i = -1 * this.ml0;
        else {
          var a = Gi(this.a, this.e, Math.sin(e)) / Math.tan(e);
          s = a * Math.sin(r), i = this.a * xe(this.e0, this.e1, this.e2, this.e3, e) - this.ml0 + a * (1 - Math.cos(r));
        }
        return n.x = s + this.x0, n.y = i + this.y0, n;
      }
      function pM(n) {
        var t, e, s, i, r, o, a, h, l;
        if (s = n.x - this.x0, i = n.y - this.y0, this.sphere) if (Math.abs(i + this.a * this.lat0) <= q) t = $(s / this.a + this.long0), e = 0;
        else {
          o = this.lat0 + i / this.a, a = s * s / this.a / this.a + o * o, h = o;
          var u;
          for (r = Uf; r; --r) if (u = Math.tan(h), l = -1 * (o * (h * u + 1) - h - 0.5 * (h * h + a) * u) / ((h - o) / u - 1), h += l, Math.abs(l) <= q) {
            e = h;
            break;
          }
          t = $(this.long0 + Math.asin(s * Math.tan(h) / this.a) / Math.sin(e));
        }
        else if (Math.abs(i + this.ml0) <= q) e = 0, t = $(this.long0 + s / this.a);
        else {
          o = (this.ml0 + i) / this.a, a = s * s / this.a / this.a + o * o, h = o;
          var c, d, p, f, y;
          for (r = Uf; r; --r) if (y = this.e * Math.sin(h), c = Math.sqrt(1 - y * y) * Math.tan(h), d = this.a * xe(this.e0, this.e1, this.e2, this.e3, h), p = this.e0 - 2 * this.e1 * Math.cos(2 * h) + 4 * this.e2 * Math.cos(4 * h) - 6 * this.e3 * Math.cos(6 * h), f = d / this.a, l = (o * (c * f + 1) - f - 0.5 * c * (f * f + a)) / (this.es * Math.sin(2 * h) * (f * f + a - 2 * o * f) / (4 * c) + (o - f) * (c * p - 2 / Math.sin(2 * h)) - p), h -= l, Math.abs(l) <= q) {
            e = h;
            break;
          }
          c = Math.sqrt(1 - this.es * Math.pow(Math.sin(e), 2)) * Math.tan(e), t = $(this.long0 + Math.asin(s * c / this.a) / Math.sin(e));
        }
        return n.x = t, n.y = e, n;
      }
      var mM = ["Polyconic", "poly"];
      const _M = { init: fM, forward: gM, inverse: pM, names: mM };
      function yM() {
        this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
      }
      function xM(n) {
        var t, e = n.x, s = n.y, i = s - this.lat0, r = e - this.long0, o = i / Dr * 1e-5, a = r, h = 1, l = 0;
        for (t = 1; t <= 10; t++) h = h * o, l = l + this.A[t] * h;
        var u = l, c = a, d = 1, p = 0, f, y, E = 0, M = 0;
        for (t = 1; t <= 6; t++) f = d * u - p * c, y = p * u + d * c, d = f, p = y, E = E + this.B_re[t] * d - this.B_im[t] * p, M = M + this.B_im[t] * d + this.B_re[t] * p;
        return n.x = M * this.a + this.x0, n.y = E * this.a + this.y0, n;
      }
      function EM(n) {
        var t, e = n.x, s = n.y, i = e - this.x0, r = s - this.y0, o = r / this.a, a = i / this.a, h = 1, l = 0, u, c, d = 0, p = 0;
        for (t = 1; t <= 6; t++) u = h * o - l * a, c = l * o + h * a, h = u, l = c, d = d + this.C_re[t] * h - this.C_im[t] * l, p = p + this.C_im[t] * h + this.C_re[t] * l;
        for (var f = 0; f < this.iterations; f++) {
          var y = d, E = p, M, w, C = o, v = a;
          for (t = 2; t <= 6; t++) M = y * d - E * p, w = E * d + y * p, y = M, E = w, C = C + (t - 1) * (this.B_re[t] * y - this.B_im[t] * E), v = v + (t - 1) * (this.B_im[t] * y + this.B_re[t] * E);
          y = 1, E = 0;
          var R = this.B_re[1], I = this.B_im[1];
          for (t = 2; t <= 6; t++) M = y * d - E * p, w = E * d + y * p, y = M, E = w, R = R + t * (this.B_re[t] * y - this.B_im[t] * E), I = I + t * (this.B_im[t] * y + this.B_re[t] * E);
          var O = R * R + I * I;
          d = (C * R + v * I) / O, p = (v * R - C * I) / O;
        }
        var A = d, P = p, F = 1, z = 0;
        for (t = 1; t <= 9; t++) F = F * A, z = z + this.D[t] * F;
        var k = this.lat0 + z * Dr * 1e5, J = this.long0 + P;
        return n.x = J, n.y = k, n;
      }
      var MM = ["New_Zealand_Map_Grid", "nzmg"];
      const wM = { init: yM, forward: xM, inverse: EM, names: MM };
      function SM() {
      }
      function vM(n) {
        var t = n.x, e = n.y, s = $(t - this.long0), i = this.x0 + this.a * s, r = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + e / 2.5)) * 1.25;
        return n.x = i, n.y = r, n;
      }
      function RM(n) {
        n.x -= this.x0, n.y -= this.y0;
        var t = $(this.long0 + n.x / this.a), e = 2.5 * (Math.atan(Math.exp(0.8 * n.y / this.a)) - Math.PI / 4);
        return n.x = t, n.y = e, n;
      }
      var CM = ["Miller_Cylindrical", "mill"];
      const bM = { init: SM, forward: vM, inverse: RM, names: CM };
      var TM = 20;
      function IM() {
        this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Wl(this.es);
      }
      function AM(n) {
        var t, e, s = n.x, i = n.y;
        if (s = $(s - this.long0), this.sphere) {
          if (!this.m) i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
          else for (var r = this.n * Math.sin(i), o = TM; o; --o) {
            var a = (this.m * i + Math.sin(i) - r) / (this.m + Math.cos(i));
            if (i -= a, Math.abs(a) < q) break;
          }
          t = this.a * this.C_x * s * (this.m + Math.cos(i)), e = this.a * this.C_y * i;
        } else {
          var h = Math.sin(i), l = Math.cos(i);
          e = this.a * ki(i, h, l, this.en), t = this.a * s * l / Math.sqrt(1 - this.es * h * h);
        }
        return n.x = t, n.y = e, n;
      }
      function PM(n) {
        var t, e, s, i;
        return n.x -= this.x0, s = n.x / this.a, n.y -= this.y0, t = n.y / this.a, this.sphere ? (t /= this.C_y, s = s / (this.C_x * (this.m + Math.cos(t))), this.m ? t = ls((this.m * t + Math.sin(t)) / this.n) : this.n !== 1 && (t = ls(Math.sin(t) / this.n)), s = $(s + this.long0), t = as(t)) : (t = Yl(n.y / this.a, this.es, this.en), i = Math.abs(t), i < D ? (i = Math.sin(t), e = this.long0 + n.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(t)), s = $(e)) : i - q < D && (s = this.long0)), n.x = s, n.y = t, n;
      }
      var LM = ["Sinusoidal", "sinu"];
      const OM = { init: IM, forward: AM, inverse: PM, names: LM };
      function NM() {
      }
      function FM(n) {
        for (var t = n.x, e = n.y, s = $(t - this.long0), i = e, r = Math.PI * Math.sin(e); ; ) {
          var o = -(i + Math.sin(i) - r) / (1 + Math.cos(i));
          if (i += o, Math.abs(o) < q) break;
        }
        i /= 2, Math.PI / 2 - Math.abs(e) < q && (s = 0);
        var a = 0.900316316158 * this.a * s * Math.cos(i) + this.x0, h = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
        return n.x = a, n.y = h, n;
      }
      function kM(n) {
        var t, e;
        n.x -= this.x0, n.y -= this.y0, e = n.y / (1.4142135623731 * this.a), Math.abs(e) > 0.999999999999 && (e = 0.999999999999), t = Math.asin(e);
        var s = $(this.long0 + n.x / (0.900316316158 * this.a * Math.cos(t)));
        s < -Math.PI && (s = -Math.PI), s > Math.PI && (s = Math.PI), e = (2 * t + Math.sin(2 * t)) / Math.PI, Math.abs(e) > 1 && (e = 1);
        var i = Math.asin(e);
        return n.x = s, n.y = i, n;
      }
      var DM = ["Mollweide", "moll"];
      const GM = { init: NM, forward: FM, inverse: kM, names: DM };
      function zM() {
        Math.abs(this.lat1 + this.lat2) < q || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Yr(this.es), this.e1 = Xr(this.es), this.e2 = qr(this.es), this.e3 = Vr(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = gn(this.e, this.sinphi, this.cosphi), this.ml1 = xe(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < q ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = gn(this.e, this.sinphi, this.cosphi), this.ml2 = xe(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = xe(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
      }
      function UM(n) {
        var t = n.x, e = n.y, s;
        if (this.sphere) s = this.a * (this.g - e);
        else {
          var i = xe(this.e0, this.e1, this.e2, this.e3, e);
          s = this.a * (this.g - i);
        }
        var r = this.ns * $(t - this.long0), o = this.x0 + s * Math.sin(r), a = this.y0 + this.rh - s * Math.cos(r);
        return n.x = o, n.y = a, n;
      }
      function BM(n) {
        n.x -= this.x0, n.y = this.rh - n.y + this.y0;
        var t, e, s, i;
        this.ns >= 0 ? (e = Math.sqrt(n.x * n.x + n.y * n.y), t = 1) : (e = -Math.sqrt(n.x * n.x + n.y * n.y), t = -1);
        var r = 0;
        if (e !== 0 && (r = Math.atan2(t * n.x, t * n.y)), this.sphere) return i = $(this.long0 + r / this.ns), s = as(this.g - e / this.a), n.x = i, n.y = s, n;
        var o = this.g - e / this.a;
        return s = Ca(o, this.e0, this.e1, this.e2, this.e3), i = $(this.long0 + r / this.ns), n.x = i, n.y = s, n;
      }
      var jM = ["Equidistant_Conic", "eqdc"];
      const WM = { init: zM, forward: UM, inverse: BM, names: jM };
      function YM() {
        this.R = this.a;
      }
      function XM(n) {
        var t = n.x, e = n.y, s = $(t - this.long0), i, r;
        Math.abs(e) <= q && (i = this.x0 + this.R * s, r = this.y0);
        var o = ls(2 * Math.abs(e / Math.PI));
        (Math.abs(s) <= q || Math.abs(Math.abs(e) - D) <= q) && (i = this.x0, e >= 0 ? r = this.y0 + Math.PI * this.R * Math.tan(0.5 * o) : r = this.y0 + Math.PI * this.R * -Math.tan(0.5 * o));
        var a = 0.5 * Math.abs(Math.PI / s - s / Math.PI), h = a * a, l = Math.sin(o), u = Math.cos(o), c = u / (l + u - 1), d = c * c, p = c * (2 / l - 1), f = p * p, y = Math.PI * this.R * (a * (c - f) + Math.sqrt(h * (c - f) * (c - f) - (f + h) * (d - f))) / (f + h);
        s < 0 && (y = -y), i = this.x0 + y;
        var E = h + c;
        return y = Math.PI * this.R * (p * E - a * Math.sqrt((f + h) * (h + 1) - E * E)) / (f + h), e >= 0 ? r = this.y0 + y : r = this.y0 - y, n.x = i, n.y = r, n;
      }
      function qM(n) {
        var t, e, s, i, r, o, a, h, l, u, c, d, p;
        return n.x -= this.x0, n.y -= this.y0, c = Math.PI * this.R, s = n.x / c, i = n.y / c, r = s * s + i * i, o = -Math.abs(i) * (1 + r), a = o - 2 * i * i + s * s, h = -2 * o + 1 + 2 * i * i + r * r, p = i * i / h + (2 * a * a * a / h / h / h - 9 * o * a / h / h) / 27, l = (o - a * a / 3 / h) / h, u = 2 * Math.sqrt(-l / 3), c = 3 * p / l / u, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), d = Math.acos(c) / 3, n.y >= 0 ? e = (-u * Math.cos(d + Math.PI / 3) - a / 3 / h) * Math.PI : e = -(-u * Math.cos(d + Math.PI / 3) - a / 3 / h) * Math.PI, Math.abs(s) < q ? t = this.long0 : t = $(this.long0 + Math.PI * (r - 1 + Math.sqrt(1 + 2 * (s * s - i * i) + r * r)) / 2 / s), n.x = t, n.y = e, n;
      }
      var VM = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
      const $M = { init: YM, forward: XM, inverse: qM, names: VM };
      function ZM() {
        this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
      }
      function KM(n) {
        var t = n.x, e = n.y, s = Math.sin(n.y), i = Math.cos(n.y), r = $(t - this.long0), o, a, h, l, u, c, d, p, f, y, E, M, w, C, v, R, I, O, A, P, F, z, k;
        return this.sphere ? Math.abs(this.sin_p12 - 1) <= q ? (n.x = this.x0 + this.a * (D - e) * Math.sin(r), n.y = this.y0 - this.a * (D - e) * Math.cos(r), n) : Math.abs(this.sin_p12 + 1) <= q ? (n.x = this.x0 + this.a * (D + e) * Math.sin(r), n.y = this.y0 + this.a * (D + e) * Math.cos(r), n) : (O = this.sin_p12 * s + this.cos_p12 * i * Math.cos(r), R = Math.acos(O), I = R ? R / Math.sin(R) : 1, n.x = this.x0 + this.a * I * i * Math.sin(r), n.y = this.y0 + this.a * I * (this.cos_p12 * s - this.sin_p12 * i * Math.cos(r)), n) : (o = Yr(this.es), a = Xr(this.es), h = qr(this.es), l = Vr(this.es), Math.abs(this.sin_p12 - 1) <= q ? (u = this.a * xe(o, a, h, l, D), c = this.a * xe(o, a, h, l, e), n.x = this.x0 + (u - c) * Math.sin(r), n.y = this.y0 - (u - c) * Math.cos(r), n) : Math.abs(this.sin_p12 + 1) <= q ? (u = this.a * xe(o, a, h, l, D), c = this.a * xe(o, a, h, l, e), n.x = this.x0 + (u + c) * Math.sin(r), n.y = this.y0 + (u + c) * Math.cos(r), n) : (d = s / i, p = Gi(this.a, this.e, this.sin_p12), f = Gi(this.a, this.e, s), y = Math.atan((1 - this.es) * d + this.es * p * this.sin_p12 / (f * i)), E = Math.atan2(Math.sin(r), this.cos_p12 * Math.tan(y) - this.sin_p12 * Math.cos(r)), E === 0 ? A = Math.asin(this.cos_p12 * Math.sin(y) - this.sin_p12 * Math.cos(y)) : Math.abs(Math.abs(E) - Math.PI) <= q ? A = -Math.asin(this.cos_p12 * Math.sin(y) - this.sin_p12 * Math.cos(y)) : A = Math.asin(Math.sin(r) * Math.cos(y) / Math.sin(E)), M = this.e * this.sin_p12 / Math.sqrt(1 - this.es), w = this.e * this.cos_p12 * Math.cos(E) / Math.sqrt(1 - this.es), C = M * w, v = w * w, P = A * A, F = P * A, z = F * A, k = z * A, R = p * A * (1 - P * v * (1 - v) / 6 + F / 8 * C * (1 - 2 * v) + z / 120 * (v * (4 - 7 * v) - 3 * M * M * (1 - 7 * v)) - k / 48 * C), n.x = this.x0 + R * Math.sin(E), n.y = this.y0 + R * Math.cos(E), n));
      }
      function HM(n) {
        n.x -= this.x0, n.y -= this.y0;
        var t, e, s, i, r, o, a, h, l, u, c, d, p, f, y, E, M, w, C, v, R, I, O, A;
        return this.sphere ? (t = Math.sqrt(n.x * n.x + n.y * n.y), t > 2 * D * this.a ? void 0 : (e = t / this.a, s = Math.sin(e), i = Math.cos(e), r = this.long0, Math.abs(t) <= q ? o = this.lat0 : (o = ls(i * this.sin_p12 + n.y * s * this.cos_p12 / t), a = Math.abs(this.lat0) - D, Math.abs(a) <= q ? this.lat0 >= 0 ? r = $(this.long0 + Math.atan2(n.x, -n.y)) : r = $(this.long0 - Math.atan2(-n.x, n.y)) : r = $(this.long0 + Math.atan2(n.x * s, t * this.cos_p12 * i - n.y * this.sin_p12 * s))), n.x = r, n.y = o, n)) : (h = Yr(this.es), l = Xr(this.es), u = qr(this.es), c = Vr(this.es), Math.abs(this.sin_p12 - 1) <= q ? (d = this.a * xe(h, l, u, c, D), t = Math.sqrt(n.x * n.x + n.y * n.y), p = d - t, o = Ca(p / this.a, h, l, u, c), r = $(this.long0 + Math.atan2(n.x, -1 * n.y)), n.x = r, n.y = o, n) : Math.abs(this.sin_p12 + 1) <= q ? (d = this.a * xe(h, l, u, c, D), t = Math.sqrt(n.x * n.x + n.y * n.y), p = t - d, o = Ca(p / this.a, h, l, u, c), r = $(this.long0 + Math.atan2(n.x, n.y)), n.x = r, n.y = o, n) : (t = Math.sqrt(n.x * n.x + n.y * n.y), E = Math.atan2(n.x, n.y), f = Gi(this.a, this.e, this.sin_p12), M = Math.cos(E), w = this.e * this.cos_p12 * M, C = -w * w / (1 - this.es), v = 3 * this.es * (1 - C) * this.sin_p12 * this.cos_p12 * M / (1 - this.es), R = t / f, I = R - C * (1 + C) * Math.pow(R, 3) / 6 - v * (1 + 3 * C) * Math.pow(R, 4) / 24, O = 1 - C * I * I / 2 - R * I * I * I / 6, y = Math.asin(this.sin_p12 * Math.cos(I) + this.cos_p12 * Math.sin(I) * M), r = $(this.long0 + Math.asin(Math.sin(E) * Math.sin(I) / Math.cos(y))), A = Math.sin(y), o = Math.atan2((A - this.es * O * this.sin_p12) * Math.tan(y), A * (1 - this.es)), n.x = r, n.y = o, n));
      }
      var JM = ["Azimuthal_Equidistant", "aeqd"];
      const QM = { init: ZM, forward: KM, inverse: HM, names: JM };
      function tw() {
        this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
      }
      function ew(n) {
        var t, e, s, i, r, o, a, h, l = n.x, u = n.y;
        return s = $(l - this.long0), t = Math.sin(u), e = Math.cos(u), i = Math.cos(s), o = this.sin_p14 * t + this.cos_p14 * e * i, r = 1, (o > 0 || Math.abs(o) <= q) && (a = this.a * r * e * Math.sin(s), h = this.y0 + this.a * r * (this.cos_p14 * t - this.sin_p14 * e * i)), n.x = a, n.y = h, n;
      }
      function nw(n) {
        var t, e, s, i, r, o, a;
        return n.x -= this.x0, n.y -= this.y0, t = Math.sqrt(n.x * n.x + n.y * n.y), e = ls(t / this.a), s = Math.sin(e), i = Math.cos(e), o = this.long0, Math.abs(t) <= q ? (a = this.lat0, n.x = o, n.y = a, n) : (a = ls(i * this.sin_p14 + n.y * s * this.cos_p14 / t), r = Math.abs(this.lat0) - D, Math.abs(r) <= q ? (this.lat0 >= 0 ? o = $(this.long0 + Math.atan2(n.x, -n.y)) : o = $(this.long0 - Math.atan2(-n.x, n.y)), n.x = o, n.y = a, n) : (o = $(this.long0 + Math.atan2(n.x * s, t * this.cos_p14 * i - n.y * this.sin_p14 * s)), n.x = o, n.y = a, n));
      }
      var sw = ["ortho"];
      const iw = { init: tw, forward: ew, inverse: nw, names: sw };
      var Gt = { FRONT: 1, RIGHT: 2, BACK: 3, LEFT: 4, TOP: 5, BOTTOM: 6 }, bt = { AREA_0: 1, AREA_1: 2, AREA_2: 3, AREA_3: 4 };
      function rw() {
        this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= D - Ct / 2 ? this.face = Gt.TOP : this.lat0 <= -(D - Ct / 2) ? this.face = Gt.BOTTOM : Math.abs(this.long0) <= Ct ? this.face = Gt.FRONT : Math.abs(this.long0) <= D + Ct ? this.face = this.long0 > 0 ? Gt.RIGHT : Gt.LEFT : this.face = Gt.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
      }
      function ow(n) {
        var t = { x: 0, y: 0 }, e, s, i, r, o, a, h = { value: 0 };
        if (n.x -= this.long0, this.es !== 0 ? e = Math.atan(this.one_minus_f_squared * Math.tan(n.y)) : e = n.y, s = n.x, this.face === Gt.TOP) r = D - e, s >= Ct && s <= D + Ct ? (h.value = bt.AREA_0, i = s - D) : s > D + Ct || s <= -(D + Ct) ? (h.value = bt.AREA_1, i = s > 0 ? s - ee : s + ee) : s > -(D + Ct) && s <= -Ct ? (h.value = bt.AREA_2, i = s + D) : (h.value = bt.AREA_3, i = s);
        else if (this.face === Gt.BOTTOM) r = D + e, s >= Ct && s <= D + Ct ? (h.value = bt.AREA_0, i = -s + D) : s < Ct && s >= -Ct ? (h.value = bt.AREA_1, i = -s) : s < -Ct && s >= -(D + Ct) ? (h.value = bt.AREA_2, i = -s - D) : (h.value = bt.AREA_3, i = s > 0 ? -s + ee : -s - ee);
        else {
          var l, u, c, d, p, f, y;
          this.face === Gt.RIGHT ? s = zi(s, +D) : this.face === Gt.BACK ? s = zi(s, 3.14159265359) : this.face === Gt.LEFT && (s = zi(s, -D)), d = Math.sin(e), p = Math.cos(e), f = Math.sin(s), y = Math.cos(s), l = p * y, u = p * f, c = d, this.face === Gt.FRONT ? (r = Math.acos(l), i = ba(r, c, u, h)) : this.face === Gt.RIGHT ? (r = Math.acos(u), i = ba(r, c, -l, h)) : this.face === Gt.BACK ? (r = Math.acos(-l), i = ba(r, c, -u, h)) : this.face === Gt.LEFT ? (r = Math.acos(-u), i = ba(r, c, l, h)) : (r = i = 0, h.value = bt.AREA_0);
        }
        return a = Math.atan(12 / ee * (i + Math.acos(Math.sin(i) * Math.cos(Ct)) - D)), o = Math.sqrt((1 - Math.cos(r)) / (Math.cos(a) * Math.cos(a)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), h.value === bt.AREA_1 ? a += D : h.value === bt.AREA_2 ? a += ee : h.value === bt.AREA_3 && (a += 1.5 * ee), t.x = o * Math.cos(a), t.y = o * Math.sin(a), t.x = t.x * this.a + this.x0, t.y = t.y * this.a + this.y0, n.x = t.x, n.y = t.y, n;
      }
      function aw(n) {
        var t = { lam: 0, phi: 0 }, e, s, i, r, o, a, h, l, u, c = { value: 0 };
        if (n.x = (n.x - this.x0) / this.a, n.y = (n.y - this.y0) / this.a, s = Math.atan(Math.sqrt(n.x * n.x + n.y * n.y)), e = Math.atan2(n.y, n.x), n.x >= 0 && n.x >= Math.abs(n.y) ? c.value = bt.AREA_0 : n.y >= 0 && n.y >= Math.abs(n.x) ? (c.value = bt.AREA_1, e -= D) : n.x < 0 && -n.x >= Math.abs(n.y) ? (c.value = bt.AREA_2, e = e < 0 ? e + ee : e - ee) : (c.value = bt.AREA_3, e += D), u = ee / 12 * Math.tan(e), o = Math.sin(u) / (Math.cos(u) - 1 / Math.sqrt(2)), a = Math.atan(o), i = Math.cos(e), r = Math.tan(s), h = 1 - i * i * r * r * (1 - Math.cos(Math.atan(1 / Math.cos(a)))), h < -1 ? h = -1 : h > 1 && (h = 1), this.face === Gt.TOP) l = Math.acos(h), t.phi = D - l, c.value === bt.AREA_0 ? t.lam = a + D : c.value === bt.AREA_1 ? t.lam = a < 0 ? a + ee : a - ee : c.value === bt.AREA_2 ? t.lam = a - D : t.lam = a;
        else if (this.face === Gt.BOTTOM) l = Math.acos(h), t.phi = l - D, c.value === bt.AREA_0 ? t.lam = -a + D : c.value === bt.AREA_1 ? t.lam = -a : c.value === bt.AREA_2 ? t.lam = -a - D : t.lam = a < 0 ? -a - ee : -a + ee;
        else {
          var d, p, f;
          d = h, u = d * d, u >= 1 ? f = 0 : f = Math.sqrt(1 - u) * Math.sin(a), u += f * f, u >= 1 ? p = 0 : p = Math.sqrt(1 - u), c.value === bt.AREA_1 ? (u = p, p = -f, f = u) : c.value === bt.AREA_2 ? (p = -p, f = -f) : c.value === bt.AREA_3 && (u = p, p = f, f = -u), this.face === Gt.RIGHT ? (u = d, d = -p, p = u) : this.face === Gt.BACK ? (d = -d, p = -p) : this.face === Gt.LEFT && (u = d, d = p, p = -u), t.phi = Math.acos(-f) - D, t.lam = Math.atan2(p, d), this.face === Gt.RIGHT ? t.lam = zi(t.lam, -D) : this.face === Gt.BACK ? t.lam = zi(t.lam, -3.14159265359) : this.face === Gt.LEFT && (t.lam = zi(t.lam, +D));
        }
        if (this.es !== 0) {
          var y, E, M;
          y = t.phi < 0 ? 1 : 0, E = Math.tan(t.phi), M = this.b / Math.sqrt(E * E + this.one_minus_f_squared), t.phi = Math.atan(Math.sqrt(this.a * this.a - M * M) / (this.one_minus_f * M)), y && (t.phi = -t.phi);
        }
        return t.lam += this.long0, n.x = t.lam, n.y = t.phi, n;
      }
      function ba(n, t, e, s) {
        var i;
        return n < q ? (s.value = bt.AREA_0, i = 0) : (i = Math.atan2(t, e), Math.abs(i) <= Ct ? s.value = bt.AREA_0 : i > Ct && i <= D + Ct ? (s.value = bt.AREA_1, i -= D) : i > D + Ct || i <= -(D + Ct) ? (s.value = bt.AREA_2, i = i >= 0 ? i - ee : i + ee) : (s.value = bt.AREA_3, i += D)), i;
      }
      function zi(n, t) {
        var e = n + t;
        return e < -3.14159265359 ? e += Gr : e > 3.14159265359 && (e -= Gr), e;
      }
      var hw = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
      const lw = { init: rw, forward: ow, inverse: aw, names: hw };
      var $l = [[1, 22199e-21, -715515e-10, 31103e-10], [0.9986, -482243e-9, -24897e-9, -13309e-10], [0.9954, -83103e-8, -448605e-10, -986701e-12], [0.99, -135364e-8, -59661e-9, 36777e-10], [0.9822, -167442e-8, -449547e-11, -572411e-11], [0.973, -214868e-8, -903571e-10, 18736e-12], [0.96, -305085e-8, -900761e-10, 164917e-11], [0.9427, -382792e-8, -653386e-10, -26154e-10], [0.9216, -467746e-8, -10457e-8, 481243e-11], [0.8962, -536223e-8, -323831e-10, -543432e-11], [0.8679, -609363e-8, -113898e-9, 332484e-11], [0.835, -698325e-8, -640253e-10, 934959e-12], [0.7986, -755338e-8, -500009e-10, 935324e-12], [0.7597, -798324e-8, -35971e-9, -227626e-11], [0.7186, -851367e-8, -701149e-10, -86303e-10], [0.6732, -986209e-8, -199569e-9, 191974e-10], [0.6213, -0.010418, 883923e-10, 624051e-11], [0.5722, -906601e-8, 182e-6, 624051e-11], [0.5322, -677797e-8, 275608e-9, 624051e-11]], $r = [[-520417e-23, 0.0124, 121431e-23, -845284e-16], [0.062, 0.0124, -126793e-14, 422642e-15], [0.124, 0.0124, 507171e-14, -160604e-14], [0.186, 0.0123999, -190189e-13, 600152e-14], [0.248, 0.0124002, 710039e-13, -224e-10], [0.31, 0.0123992, -264997e-12, 835986e-13], [0.372, 0.0124029, 988983e-12, -311994e-12], [0.434, 0.0123893, -369093e-11, -435621e-12], [0.4958, 0.0123198, -102252e-10, -345523e-12], [0.5571, 0.0121916, -154081e-10, -582288e-12], [0.6176, 0.0119938, -241424e-10, -525327e-12], [0.6769, 0.011713, -320223e-10, -516405e-12], [0.7346, 0.0113541, -397684e-10, -609052e-12], [0.7903, 0.0109107, -489042e-10, -104739e-11], [0.8435, 0.0103431, -64615e-9, -140374e-14], [0.8936, 969686e-8, -64636e-9, -8547e-9], [0.9394, 840947e-8, -192841e-9, -42106e-10], [0.9761, 616527e-8, -256e-6, -42106e-10], [1, 328947e-8, -319159e-9, -42106e-10]], Bf = 0.8487, jf = 1.3523, Wf = dn / 5, uw = 1 / Wf, Ui = 18, Ta = function(n, t) {
        return n[0] + t * (n[1] + t * (n[2] + t * n[3]));
      }, cw = function(n, t) {
        return n[1] + t * (2 * n[2] + t * 3 * n[3]);
      };
      function dw(n, t, e, s) {
        for (var i = t; s; --s) {
          var r = n(i);
          if (i -= r, Math.abs(r) < e) break;
        }
        return i;
      }
      function fw() {
        this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
      }
      function gw(n) {
        var t = $(n.x - this.long0), e = Math.abs(n.y), s = Math.floor(e * Wf);
        s < 0 ? s = 0 : s >= Ui && (s = Ui - 1), e = dn * (e - uw * s);
        var i = { x: Ta($l[s], e) * t, y: Ta($r[s], e) };
        return n.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Bf + this.x0, i.y = i.y * this.a * jf + this.y0, i;
      }
      function pw(n) {
        var t = { x: (n.x - this.x0) / (this.a * Bf), y: Math.abs(n.y - this.y0) / (this.a * jf) };
        if (t.y >= 1) t.x /= $l[Ui][0], t.y = n.y < 0 ? -D : D;
        else {
          var e = Math.floor(t.y * Ui);
          for (e < 0 ? e = 0 : e >= Ui && (e = Ui - 1); ; ) if ($r[e][0] > t.y) --e;
          else if ($r[e + 1][0] <= t.y) ++e;
          else break;
          var s = $r[e], i = 5 * (t.y - s[0]) / ($r[e + 1][0] - s[0]);
          i = dw(function(r) {
            return (Ta(s, r) - t.y) / cw(s, r);
          }, i, q, 100), t.x /= Ta($l[e], i), t.y = (5 * e + i) * te, n.y < 0 && (t.y = -t.y);
        }
        return t.x = $(t.x + this.long0), t;
      }
      var mw = ["Robinson", "robin"];
      const _w = { init: fw, forward: gw, inverse: pw, names: mw };
      function yw() {
        this.name = "geocent";
      }
      function xw(n) {
        var t = yf(n, this.es, this.a);
        return t;
      }
      function Ew(n) {
        var t = xf(n, this.es, this.a, this.b);
        return t;
      }
      var Mw = ["Geocentric", "geocentric", "geocent", "Geocent"];
      const ww = { init: yw, forward: xw, inverse: Ew, names: Mw };
      var ue = { N_POLE: 0, S_POLE: 1, EQUIT: 2, OBLIQ: 3 }, Zr = { h: { def: 1e5, num: !0 }, azi: { def: 0, num: !0, degrees: !0 }, tilt: { def: 0, num: !0, degrees: !0 }, long0: { def: 0, num: !0 }, lat0: { def: 0, num: !0 } };
      function Sw() {
        if (Object.keys(Zr).forEach((function(e) {
          if (typeof this[e] > "u") this[e] = Zr[e].def;
          else {
            if (Zr[e].num && isNaN(this[e])) throw new Error("Invalid parameter value, must be numeric " + e + " = " + this[e]);
            Zr[e].num && (this[e] = parseFloat(this[e]));
          }
          Zr[e].degrees && (this[e] = this[e] * te);
        }).bind(this)), Math.abs(Math.abs(this.lat0) - D) < q ? this.mode = this.lat0 < 0 ? ue.S_POLE : ue.N_POLE : Math.abs(this.lat0) < q ? this.mode = ue.EQUIT : (this.mode = ue.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10) throw new Error("Invalid height");
        this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
        var n = this.tilt, t = this.azi;
        this.cg = Math.cos(t), this.sg = Math.sin(t), this.cw = Math.cos(n), this.sw = Math.sin(n);
      }
      function vw(n) {
        n.x -= this.long0;
        var t = Math.sin(n.y), e = Math.cos(n.y), s = Math.cos(n.x), i, r;
        switch (this.mode) {
          case ue.OBLIQ:
            r = this.sinph0 * t + this.cosph0 * e * s;
            break;
          case ue.EQUIT:
            r = e * s;
            break;
          case ue.S_POLE:
            r = -t;
            break;
          case ue.N_POLE:
            r = t;
            break;
        }
        switch (r = this.pn1 / (this.p - r), i = r * e * Math.sin(n.x), this.mode) {
          case ue.OBLIQ:
            r *= this.cosph0 * t - this.sinph0 * e * s;
            break;
          case ue.EQUIT:
            r *= t;
            break;
          case ue.N_POLE:
            r *= -(e * s);
            break;
          case ue.S_POLE:
            r *= e * s;
            break;
        }
        var o, a;
        return o = r * this.cg + i * this.sg, a = 1 / (o * this.sw * this.h1 + this.cw), i = (i * this.cg - r * this.sg) * this.cw * a, r = o * a, n.x = i * this.a, n.y = r * this.a, n;
      }
      function Rw(n) {
        n.x /= this.a, n.y /= this.a;
        var t = { x: n.x, y: n.y }, e, s, i;
        i = 1 / (this.pn1 - n.y * this.sw), e = this.pn1 * n.x * i, s = this.pn1 * n.y * this.cw * i, n.x = e * this.cg + s * this.sg, n.y = s * this.cg - e * this.sg;
        var r = Ae(n.x, n.y);
        if (Math.abs(r) < q) t.x = 0, t.y = n.y;
        else {
          var o, a;
          switch (a = 1 - r * r * this.pfact, a = (this.p - Math.sqrt(a)) / (this.pn1 / r + r / this.pn1), o = Math.sqrt(1 - a * a), this.mode) {
            case ue.OBLIQ:
              t.y = Math.asin(o * this.sinph0 + n.y * a * this.cosph0 / r), n.y = (o - this.sinph0 * Math.sin(t.y)) * r, n.x *= a * this.cosph0;
              break;
            case ue.EQUIT:
              t.y = Math.asin(n.y * a / r), n.y = o * r, n.x *= a;
              break;
            case ue.N_POLE:
              t.y = Math.asin(o), n.y = -n.y;
              break;
            case ue.S_POLE:
              t.y = -Math.asin(o);
              break;
          }
          t.x = Math.atan2(n.x, n.y);
        }
        return n.x = t.x + this.long0, n.y = t.y, n;
      }
      var Cw = ["Tilted_Perspective", "tpers"];
      const bw = { init: Sw, forward: vw, inverse: Rw, names: Cw };
      function Tw() {
        if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10) throw new Error();
        if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
          var n = 1 - this.es, t = 1 / n;
          this.radius_p = Math.sqrt(n), this.radius_p2 = n, this.radius_p_inv2 = t, this.shape = "ellipse";
        } else this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
        this.title || (this.title = "Geostationary Satellite View");
      }
      function Iw(n) {
        var t = n.x, e = n.y, s, i, r, o;
        if (t = t - this.long0, this.shape === "ellipse") {
          e = Math.atan(this.radius_p2 * Math.tan(e));
          var a = this.radius_p / Ae(this.radius_p * Math.cos(e), Math.sin(e));
          if (i = a * Math.cos(t) * Math.cos(e), r = a * Math.sin(t) * Math.cos(e), o = a * Math.sin(e), (this.radius_g - i) * i - r * r - o * o * this.radius_p_inv2 < 0) return n.x = Number.NaN, n.y = Number.NaN, n;
          s = this.radius_g - i, this.flip_axis ? (n.x = this.radius_g_1 * Math.atan(r / Ae(o, s)), n.y = this.radius_g_1 * Math.atan(o / s)) : (n.x = this.radius_g_1 * Math.atan(r / s), n.y = this.radius_g_1 * Math.atan(o / Ae(r, s)));
        } else this.shape === "sphere" && (s = Math.cos(e), i = Math.cos(t) * s, r = Math.sin(t) * s, o = Math.sin(e), s = this.radius_g - i, this.flip_axis ? (n.x = this.radius_g_1 * Math.atan(r / Ae(o, s)), n.y = this.radius_g_1 * Math.atan(o / s)) : (n.x = this.radius_g_1 * Math.atan(r / s), n.y = this.radius_g_1 * Math.atan(o / Ae(r, s))));
        return n.x = n.x * this.a, n.y = n.y * this.a, n;
      }
      function Aw(n) {
        var t = -1, e = 0, s = 0, i, r, o, a;
        if (n.x = n.x / this.a, n.y = n.y / this.a, this.shape === "ellipse") {
          this.flip_axis ? (s = Math.tan(n.y / this.radius_g_1), e = Math.tan(n.x / this.radius_g_1) * Ae(1, s)) : (e = Math.tan(n.x / this.radius_g_1), s = Math.tan(n.y / this.radius_g_1) * Ae(1, e));
          var h = s / this.radius_p;
          if (i = e * e + h * h + t * t, r = 2 * this.radius_g * t, o = r * r - 4 * i * this.C, o < 0) return n.x = Number.NaN, n.y = Number.NaN, n;
          a = (-r - Math.sqrt(o)) / (2 * i), t = this.radius_g + a * t, e *= a, s *= a, n.x = Math.atan2(e, t), n.y = Math.atan(s * Math.cos(n.x) / t), n.y = Math.atan(this.radius_p_inv2 * Math.tan(n.y));
        } else if (this.shape === "sphere") {
          if (this.flip_axis ? (s = Math.tan(n.y / this.radius_g_1), e = Math.tan(n.x / this.radius_g_1) * Math.sqrt(1 + s * s)) : (e = Math.tan(n.x / this.radius_g_1), s = Math.tan(n.y / this.radius_g_1) * Math.sqrt(1 + e * e)), i = e * e + s * s + t * t, r = 2 * this.radius_g * t, o = r * r - 4 * i * this.C, o < 0) return n.x = Number.NaN, n.y = Number.NaN, n;
          a = (-r - Math.sqrt(o)) / (2 * i), t = this.radius_g + a * t, e *= a, s *= a, n.x = Math.atan2(e, t), n.y = Math.atan(s * Math.cos(n.x) / t);
        }
        return n.x = n.x + this.long0, n;
      }
      var Pw = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
      const Lw = { init: Tw, forward: Iw, inverse: Aw, names: Pw };
      var Kr = 1.340264, Hr = -0.081106, Jr = 893e-6, Qr = 3796e-6, Ia = Math.sqrt(3) / 2;
      function Ow() {
        this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
      }
      function Nw(n) {
        var t = $(n.x - this.long0), e = n.y, s = Math.asin(Ia * Math.sin(e)), i = s * s, r = i * i * i;
        return n.x = t * Math.cos(s) / (Ia * (Kr + 3 * Hr * i + r * (7 * Jr + 9 * Qr * i))), n.y = s * (Kr + Hr * i + r * (Jr + Qr * i)), n.x = this.a * n.x + this.x0, n.y = this.a * n.y + this.y0, n;
      }
      function Fw(n) {
        n.x = (n.x - this.x0) / this.a, n.y = (n.y - this.y0) / this.a;
        var t = 1e-9, e = 12, s = n.y, i, r, o, a, h, l;
        for (l = 0; l < e && (i = s * s, r = i * i * i, o = s * (Kr + Hr * i + r * (Jr + Qr * i)) - n.y, a = Kr + 3 * Hr * i + r * (7 * Jr + 9 * Qr * i), s -= h = o / a, !(Math.abs(h) < t)); ++l) ;
        return i = s * s, r = i * i * i, n.x = Ia * n.x * (Kr + 3 * Hr * i + r * (7 * Jr + 9 * Qr * i)) / Math.cos(s), n.y = Math.asin(Math.sin(s) / Ia), n.x = $(n.x + this.long0), n;
      }
      var kw = ["eqearth", "Equal Earth", "Equal_Earth"];
      const Dw = { init: Ow, forward: Nw, inverse: Fw, names: kw };
      var to = 1e-10;
      function Gw() {
        var n;
        if (this.phi1 = this.lat1, Math.abs(this.phi1) < to) throw new Error();
        this.es ? (this.en = Wl(this.es), this.m1 = ki(this.phi1, this.am1 = Math.sin(this.phi1), n = Math.cos(this.phi1), this.en), this.am1 = n / (Math.sqrt(1 - this.es * this.am1 * this.am1) * this.am1), this.inverse = Uw, this.forward = zw) : (Math.abs(this.phi1) + to >= D ? this.cphi1 = 0 : this.cphi1 = 1 / Math.tan(this.phi1), this.inverse = jw, this.forward = Bw);
      }
      function zw(n) {
        var t = $(n.x - (this.long0 || 0)), e = n.y, s, i, r;
        return s = this.am1 + this.m1 - ki(e, i = Math.sin(e), r = Math.cos(e), this.en), i = r * t / (s * Math.sqrt(1 - this.es * i * i)), n.x = s * Math.sin(i), n.y = this.am1 - s * Math.cos(i), n.x = this.a * n.x + (this.x0 || 0), n.y = this.a * n.y + (this.y0 || 0), n;
      }
      function Uw(n) {
        n.x = (n.x - (this.x0 || 0)) / this.a, n.y = (n.y - (this.y0 || 0)) / this.a;
        var t, e, s, i;
        if (e = Ae(n.x, n.y = this.am1 - n.y), i = Yl(this.am1 + this.m1 - e, this.es, this.en), (t = Math.abs(i)) < D) t = Math.sin(i), s = e * Math.atan2(n.x, n.y) * Math.sqrt(1 - this.es * t * t) / Math.cos(i);
        else if (Math.abs(t - D) <= to) s = 0;
        else throw new Error();
        return n.x = $(s + (this.long0 || 0)), n.y = as(i), n;
      }
      function Bw(n) {
        var t = $(n.x - (this.long0 || 0)), e = n.y, s, i;
        return i = this.cphi1 + this.phi1 - e, Math.abs(i) > to ? (n.x = i * Math.sin(s = t * Math.cos(e) / i), n.y = this.cphi1 - i * Math.cos(s)) : n.x = n.y = 0, n.x = this.a * n.x + (this.x0 || 0), n.y = this.a * n.y + (this.y0 || 0), n;
      }
      function jw(n) {
        n.x = (n.x - (this.x0 || 0)) / this.a, n.y = (n.y - (this.y0 || 0)) / this.a;
        var t, e, s = Ae(n.x, n.y = this.cphi1 - n.y);
        if (e = this.cphi1 + this.phi1 - s, Math.abs(e) > D) throw new Error();
        return Math.abs(Math.abs(e) - D) <= to ? t = 0 : t = s * Math.atan2(n.x, n.y) / Math.cos(e), n.x = $(t + (this.long0 || 0)), n.y = as(e), n;
      }
      var Ww = ["bonne", "Bonne (Werner lat_1=90)"];
      const Yw = { init: Gw, names: Ww };
      function Xw(n) {
        n.Proj.projections.add(va), n.Proj.projections.add(Ra), n.Proj.projections.add(zx), n.Proj.projections.add(Zx), n.Proj.projections.add(eE), n.Proj.projections.add(oE), n.Proj.projections.add(dE), n.Proj.projections.add(_E), n.Proj.projections.add(wE), n.Proj.projections.add(bE), n.Proj.projections.add(YE), n.Proj.projections.add(KE), n.Proj.projections.add(eM), n.Proj.projections.add(aM), n.Proj.projections.add(dM), n.Proj.projections.add(_M), n.Proj.projections.add(wM), n.Proj.projections.add(bM), n.Proj.projections.add(OM), n.Proj.projections.add(GM), n.Proj.projections.add(WM), n.Proj.projections.add($M), n.Proj.projections.add(QM), n.Proj.projections.add(iw), n.Proj.projections.add(lw), n.Proj.projections.add(_w), n.Proj.projections.add(ww), n.Proj.projections.add(bw), n.Proj.projections.add(Lw), n.Proj.projections.add(Dw), n.Proj.projections.add(Yw);
      }
      le.defaultDatum = "WGS84", le.Proj = pn, le.WGS84 = new le.Proj("WGS84"), le.Point = Fi, le.toPoint = Sf, le.defs = ye, le.nadgrid = B1, le.transform = Sa, le.mgrs = sx, le.version = "__VERSION__", Xw(le);
      const ce = { ELEMENT: "element", MAP: "map", OFFSET: "offset", POSITION: "position", POSITIONING: "positioning" };
      class qw extends $e {
        constructor(t) {
          super(), this.on, this.once, this.un, this.options = t, this.id = t.id, this.insertFirst = t.insertFirst !== void 0 ? t.insertFirst : !0, this.stopEvent = t.stopEvent !== void 0 ? t.stopEvent : !0, this.element = document.createElement("div"), this.element.className = t.className !== void 0 ? t.className : "ol-overlay-container " + Nm, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.autoPan = t.autoPan === !0 ? {} : t.autoPan || void 0, this.rendered = { transform_: "", visible: !0 }, this.mapPostrenderListenerKey = null, this.addChangeListener(ce.ELEMENT, this.handleElementChanged), this.addChangeListener(ce.MAP, this.handleMapChanged), this.addChangeListener(ce.OFFSET, this.handleOffsetChanged), this.addChangeListener(ce.POSITION, this.handlePositionChanged), this.addChangeListener(ce.POSITIONING, this.handlePositioningChanged), t.element !== void 0 && this.setElement(t.element), this.setOffset(t.offset !== void 0 ? t.offset : [0, 0]), this.setPositioning(t.positioning || "top-left"), t.position !== void 0 && this.setPosition(t.position);
        }
        getElement() {
          return this.get(ce.ELEMENT);
        }
        getId() {
          return this.id;
        }
        getMap() {
          return this.get(ce.MAP) || null;
        }
        getOffset() {
          return this.get(ce.OFFSET);
        }
        getPosition() {
          return this.get(ce.POSITION);
        }
        getPositioning() {
          return this.get(ce.POSITIONING);
        }
        handleElementChanged() {
          kc(this.element);
          const t = this.getElement();
          t && this.element.appendChild(t);
        }
        handleMapChanged() {
          var t;
          this.mapPostrenderListenerKey && ((t = this.element) == null || t.remove(), At(this.mapPostrenderListenerKey), this.mapPostrenderListenerKey = null);
          const e = this.getMap();
          if (e) {
            this.mapPostrenderListenerKey = xt(e, Pn.POSTRENDER, this.render, this), this.updatePixelPosition();
            const s = this.stopEvent ? e.getOverlayContainerStopEvent() : e.getOverlayContainer();
            this.insertFirst ? s.insertBefore(this.element, s.childNodes[0] || null) : s.appendChild(this.element), this.performAutoPan();
          }
        }
        render() {
          this.updatePixelPosition();
        }
        handleOffsetChanged() {
          this.updatePixelPosition();
        }
        handlePositionChanged() {
          this.updatePixelPosition(), this.performAutoPan();
        }
        handlePositioningChanged() {
          this.updatePixelPosition();
        }
        setElement(t) {
          this.set(ce.ELEMENT, t);
        }
        setMap(t) {
          this.set(ce.MAP, t);
        }
        setOffset(t) {
          this.set(ce.OFFSET, t);
        }
        setPosition(t) {
          this.set(ce.POSITION, t);
        }
        performAutoPan() {
          this.autoPan && this.panIntoView(this.autoPan);
        }
        panIntoView(t) {
          const e = this.getMap();
          if (!e || !e.getTargetElement() || !this.get(ce.POSITION)) return;
          const s = this.getRect(e.getTargetElement(), e.getSize()), i = this.getElement(), r = this.getRect(i, [Rm(i), Cm(i)]);
          t = t || {};
          const o = t.margin === void 0 ? 20 : t.margin;
          if (!qn(s, r)) {
            const a = r[0] - s[0], h = s[2] - r[2], l = r[1] - s[1], u = s[3] - r[3], c = [0, 0];
            if (a < 0 ? c[0] = a - o : h < 0 && (c[0] = Math.abs(h) + o), l < 0 ? c[1] = l - o : u < 0 && (c[1] = Math.abs(u) + o), c[0] !== 0 || c[1] !== 0) {
              const d = e.getView().getCenterInternal(), p = e.getPixelFromCoordinateInternal(d);
              if (!p) return;
              const f = [p[0] + c[0], p[1] + c[1]], y = t.animation || {};
              e.getView().animateInternal({ center: e.getCoordinateFromPixelInternal(f), duration: y.duration, easing: y.easing });
            }
          }
        }
        getRect(t, e) {
          const s = t.getBoundingClientRect(), i = s.left + window.pageXOffset, r = s.top + window.pageYOffset;
          return [i, r, i + e[0], r + e[1]];
        }
        setPositioning(t) {
          this.set(ce.POSITIONING, t);
        }
        setVisible(t) {
          this.rendered.visible !== t && (this.element.style.display = t ? "" : "none", this.rendered.visible = t);
        }
        updatePixelPosition() {
          const t = this.getMap(), e = this.getPosition();
          if (!t || !t.isRendered() || !e) {
            this.setVisible(!1);
            return;
          }
          const s = t.getPixelFromCoordinate(e), i = t.getSize();
          this.updateRenderedPosition(s, i);
        }
        updateRenderedPosition(t, e) {
          const s = this.element.style, i = this.getOffset(), r = this.getPositioning();
          this.setVisible(!0);
          const o = Math.round(t[0] + i[0]) + "px", a = Math.round(t[1] + i[1]) + "px";
          let h = "0%", l = "0%";
          r == "bottom-right" || r == "center-right" || r == "top-right" ? h = "-100%" : (r == "bottom-center" || r == "center-center" || r == "top-center") && (h = "-50%"), r == "bottom-left" || r == "bottom-center" || r == "bottom-right" ? l = "-100%" : (r == "center-left" || r == "center-center" || r == "center-right") && (l = "-50%");
          const u = `translate(${h}, ${l}) translate(${o}, ${a})`;
          this.rendered.transform_ != u && (this.rendered.transform_ = u, s.transform = u);
        }
        getOptions() {
          return this.options;
        }
      }
      var Aa = { exports: {} };
      const Vw = kr(R0), $w = kr(Z0), Zw = kr(B0), Kw = kr(ip), Hw = kr(vm);
      var Jw = Aa.exports, Yf;
      function Qw() {
        return Yf || (Yf = 1, function(n, t) {
          (function(e, s) {
            s(t, Vw, $w, Zw, Kw, Hw);
          })(Jw, function(e, s, i, r, o, a) {
            var h = "comparison", l = ["PropertyIsEqualTo", "PropertyIsNotEqualTo", "PropertyIsLessThan", "PropertyIsLessThanOrEqualTo", "PropertyIsGreaterThan", "PropertyIsGreaterThanOrEqualTo"], u = l.concat(["PropertyIsLike", "PropertyIsNull", "PropertyIsBetween"]);
            function c(g) {
              return u.includes(g.localName);
            }
            function d(g) {
              return ["or", "and"].includes(g.localName.toLowerCase());
            }
            function p(g, m) {
              if (l.includes(g.localName)) return f(g, m);
              if (g.localName === "PropertyIsBetween") return M(g, m);
              if (g.localName === "PropertyIsNull") return E(g, m);
              if (g.localName === "PropertyIsLike") return y(g, m);
              throw new Error("Unknown comparison element " + g.localName);
            }
            function f(g, m) {
              var _ = { type: h, operator: g.localName.toLowerCase(), matchcase: g.getAttribute("matchCase") !== "false" }, x = {};
              return m(g, x, "expressions", { concatenateLiterals: !1 }), x.expressions && x.expressions.children && (_.expression1 = x.expressions.children[0], _.expression2 = x.expressions.children[1]), _;
            }
            function y(g, m) {
              var _ = f(g, m);
              return Object.assign({}, _, { wildcard: g.getAttribute("wildCard"), singlechar: g.getAttribute("singleChar"), escapechar: g.getAttribute("escapeChar") });
            }
            function E(g, m) {
              var _ = {};
              return m(g, _, "expressions", { concatenateLiterals: !1 }), { type: h, operator: g.localName.toLowerCase(), expression: _.expressions };
            }
            function M(g, m) {
              var _ = { type: h, operator: g.localName.toLowerCase(), matchcase: g.getAttribute("matchCase") !== "false" }, x = {};
              return m(g, x, "expressions", { concatenateLiterals: !1 }), x.expressions && x.expressions.children && (_.expression = x.expressions.children[0], _.lowerboundary = x.expressions.children[1], _.upperboundary = x.expressions.children[2]), _;
            }
            function w(g, m) {
              for (var _ = [], x = g.firstElementChild; x; x = x.nextElementSibling) x && c(x) && _.push(p(x, m)), x && d(x) && _.push(w(x, m)), x && x.localName.toLowerCase() === "not" && _.push(C(x, m));
              return { type: g.localName.toLowerCase(), predicates: _ };
            }
            function C(g, m) {
              var _ = null, x = g.firstElementChild;
              return x && c(x) && (_ = p(x, m)), x && d(x) && (_ = w(x, m)), x && x.localName.toLowerCase() === "not" && (_ = C(x, m)), { type: g.localName.toLowerCase(), predicate: _ };
            }
            function v(g, m) {
              for (var _ = {}, x = g.firstElementChild; x; x = x.nextElementSibling) c(x) && (_ = p(x, m)), d(x) && (_ = w(x, m)), x.localName.toLowerCase() === "not" && (_ = C(x, m)), x.localName.toLowerCase() === "featureid" && (_.type = "featureid", _.fids = _.fids || [], _.fids.push(x.getAttribute("fid")));
              return _;
            }
            var R = /* @__PURE__ */ new Set(["strokeWidth", "strokeOpacity", "strokeDashoffset", "fillOpacity", "fontSize"]);
            function I(g, m, _) {
              var x = _.toLowerCase();
              m[x] = m[x] || [];
              var S = {};
              it(g, S), m[x].push(S);
            }
            function O(g, m, _) {
              var x = _.toLowerCase();
              m[x] = {}, it(g, m[x]);
            }
            function A(g, m, _, x) {
              x === void 0 && (x = !1);
              var S = _.toLowerCase();
              x ? m[S] = g.textContent.trim() : m[S] = g.textContent;
            }
            function P(g, m, _) {
              var x = _.toLowerCase(), S = parseFloat(g.textContent.trim());
              m[x] = S;
            }
            function F(g, m, _) {
              if (!Array.isArray(g)) return g;
              var x = g.map(function(T) {
                return T.type === "literal" ? T.value : T;
              }).filter(function(T) {
                return T !== "";
              });
              if (_) {
                var S = x.every(function(T) {
                  return typeof T != "object" || T === null;
                });
                if (S) return x.join("");
              }
              return x.length === 1 ? x[0] : { type: "expression", typeHint: m, children: x };
            }
            function z(g, m, _, x) {
              x === void 0 && (x = {});
              for (var S = { skipEmptyNodes: !0, forceLowerCase: !0, typeHint: "string", concatenateLiterals: !0 }, T = Object.assign({}, S, x), N = [], j = 0; j < g.childNodes.length; j += 1) {
                var U = g.childNodes[j], W = {};
                if (U.namespaceURI === "http://www.opengis.net/ogc" && U.localName === "PropertyName") W.type = "propertyname", W.typeHint = T.typeHint, W.value = U.textContent.trim();
                else if (U.namespaceURI === "http://www.opengis.net/ogc" && U.localName === "Function") {
                  var ct = U.getAttribute("name"), Mt = U.getAttribute("fallbackValue") || null;
                  W.type = "function", W.name = ct, W.fallbackValue = Mt;
                  var yt = {};
                  z(U, yt, "params", { concatenateLiterals: !1 }), Array.isArray(yt.params.children) ? W.params = yt.params.children : W.params = [yt.params];
                } else if (U.localName === "Add" || U.localName === "Sub" || U.localName === "Mul" || U.localName === "Div") {
                  W.type = "function", W.name = "__fe:" + U.localName + "__", W.typeHint = "number";
                  var Lt = {};
                  z(U, Lt, "params", { concatenateLiterals: !1 }), Array.isArray(Lt.params.children) ? W.params = Lt.params.children : W.params = [Lt.params];
                } else U.nodeName === "#cdata-section" ? (W.type = "literal", W.typeHint = T.typeHint, W.value = U.textContent) : (W.type = "literal", W.typeHint = T.typeHint, W.value = U.textContent.trim());
                W.type === "literal" && T.skipEmptyNodes ? W.value.trim() && N.push(W) : N.push(W);
              }
              var Ot = T.forceLowerCase ? _.toLowerCase() : _, Ht = F(N, T.typeHint, T.concatenateLiterals);
              typeof Ht == "string" && T.typeHint === "number" && (Ht = parseFloat(Ht)), m[Ot] = Ht;
            }
            function k(g, m, _, x) {
              x === void 0 && (x = {}), z(g, m, _, Object.assign({}, x, { typeHint: "number" }));
            }
            function J(g, m) {
              var _ = g.getElementsByTagNameNS("http://www.opengis.net/sld", m);
              return _.length ? !!_.item(0).textContent : !1;
            }
            function V(g, m, _, x) {
              m[x] = m[x] || {};
              var S = g.getAttribute("name").toLowerCase().replace(/-(.)/g, function(N, j) {
                return j.toUpperCase();
              }), T = "string";
              x === "styling" && R.has(S) && (T = "number"), z(g, m[x], S, { skipEmptyNodes: !0, forceLowerCase: !1, typeHint: T });
            }
            var Y = { Filter: function(g, m) {
              m.filter = v(g, z);
            }, ElseFilter: function(g, m) {
              m.elsefilter = !0;
            } }, Q = { PolygonSymbolizer: I, LineSymbolizer: I, PointSymbolizer: I, TextSymbolizer: I, Fill: O, Stroke: O, GraphicStroke: O, GraphicFill: O, Graphic: O, ExternalGraphic: O, Gap: k, InitialGap: k, Mark: O, Label: function(g, m, _) {
              return z(g, m, _, { skipEmptyNodes: !1 });
            }, Halo: O, Font: O, Radius: k, LabelPlacement: O, PointPlacement: O, LinePlacement: O, PerpendicularOffset: k, AnchorPoint: O, AnchorPointX: k, AnchorPointY: k, Opacity: k, Rotation: k, Displacement: O, DisplacementX: k, DisplacementY: k, Size: k, WellKnownName: A, MarkIndex: P, VendorOption: function(g, m, _) {
              return V(g, m, _, "vendoroptions");
            }, OnlineResource: function(g, m) {
              m.onlineresource = g.getAttribute("xlink:href");
            }, CssParameter: function(g, m, _) {
              return V(g, m, _, "styling");
            }, SvgParameter: function(g, m, _) {
              return V(g, m, _, "styling");
            } }, B = Object.assign({}, { NamedLayer: function(g, m) {
              I(g, m, "layers");
            }, UserLayer: function(g, m) {
              I(g, m, "layers");
            }, UserStyle: function(g, m) {
              m.styles = m.styles || [];
              var _ = { default: J(g, "IsDefault"), featuretypestyles: [] };
              it(g, _), m.styles.push(_);
            }, FeatureTypeStyle: function(g, m) {
              m.featuretypestyle = m.featuretypestyle || [];
              var _ = { rules: [] };
              it(g, _), m.featuretypestyles.push(_);
            }, Rule: function(g, m) {
              var _ = {};
              it(g, _), m.rules.push(_);
            }, Name: A, Title: A, Abstract: A, MaxScaleDenominator: P, MinScaleDenominator: P }, Y, Q);
            function it(g, m) {
              for (var _ = g.firstElementChild; _; _ = _.nextElementSibling) B[_.localName] && B[_.localName](_, m, _.localName);
            }
            function ot(g) {
              for (var m = {}, _ = new DOMParser(), x = _.parseFromString(g, "application/xml"), S = x.firstChild; S; S = S.nextSibling) m.version = S.getAttribute("version"), it(S, m);
              return m;
            }
            var H = /* @__PURE__ */ new Map();
            function X(g, m) {
              if (typeof m != "function") throw new Error("Function implementation is not a function");
              H[g] = m;
            }
            function mt(g) {
              return H[g] || null;
            }
            function et(g) {
              switch ((g || {}).type) {
                case "expression":
                  return !0;
                case "literal":
                  return !1;
                case "propertyname":
                  return !0;
                case "function":
                  return !0;
                default:
                  return !1;
              }
            }
            function b(g, m, _, x) {
              x === void 0 && (x = null);
              var S = null, T = typeof g;
              if (T === "string" || T === "number" || T === "undefined" || T === "boolean" || g === null) S = g;
              else if (g.type === "literal") S = g.value;
              else if (g.type === "propertyname") {
                var N = g.value;
                m ? typeof m.getGeometryName == "function" && N === m.getGeometryName() ? S = m.getGeometry() : S = _(m, N) : S = x;
              } else if (g.type === "expression") if (g.children.length === 1) S = b(g.children[0], m, _, x);
              else {
                for (var j = [], U = 0; U < g.children.length; U += 1) j.push(b(g.children[U], m, _, null));
                S = j.join("");
              }
              else if (g.type === "function") {
                var W = mt(g.name);
                if (!W) S = g.fallbackValue;
                else try {
                  var ct = g.params.map(function(Mt) {
                    return b(Mt, m, _);
                  });
                  S = W.apply(void 0, ct);
                } catch {
                  S = g.fallbackValue;
                }
              }
              return S === 0 ? S : S === null || typeof S > "u" || S === "" || Number.isNaN(S) || g && g.typeHint === "number" && (S = Number(S), Number.isNaN(S)) ? x : S;
            }
            function at(g) {
              return g == null;
            }
            function Pt(g, m) {
              return g < m ? -1 : g === m ? 0 : 1;
            }
            function Ut(g) {
              return g === "" ? NaN : Number(g);
            }
            function Xt(g, m, _) {
              var x = Ut(g), S = Ut(m);
              if (!(Number.isNaN(x) || Number.isNaN(S))) return Pt(x, S);
              var T = g.toString(), N = m.toString();
              return _ ? T.localeCompare(N) : T.toLowerCase().localeCompare(N.toLowerCase());
            }
            function en(g, m, _) {
              var x = b(g.expression, m, _);
              return at(x);
            }
            function Bt(g, m, _) {
              var x = b(g.expression1, m, _);
              if (at(x)) return !1;
              var S = b(g.expression2, m, _);
              return at(S) ? !1 : Xt(x, S) < 0;
            }
            function mn(g, m, _) {
              var x = b(g.expression1, m, _);
              if (at(x)) return !1;
              var S = b(g.expression2, m, _);
              return at(S) ? !1 : Xt(x, S) > 0;
            }
            function us(g, m, _) {
              var x = b(g.expression, m, _);
              if (at(x)) return !1;
              var S = b(g.lowerboundary, m, _);
              if (at(S)) return !1;
              var T = b(g.upperboundary, m, _);
              return at(T) ? !1 : Xt(S, x) <= 0 && Xt(T, x) >= 0;
            }
            function _n(g, m, _) {
              var x = b(g.expression1, m, _);
              if (at(x)) return !1;
              var S = b(g.expression2, m, _);
              return at(S) ? !1 : !g.matchcase || typeof x == "boolean" || typeof S == "boolean" ? Xt(x, S, !1) === 0 : x == S;
            }
            function Fn(g, m, _) {
              var x = b(g.expression1, m, _);
              if (at(x)) return !1;
              var S = b(g.expression2, m, _);
              return at(S) ? !1 : !_n(g, m, _);
            }
            function nn(g, m, _) {
              var x = b(g.expression1, m, _);
              if (at(x)) return !1;
              var S = b(g.expression2, m, _);
              if (at(S)) return !1;
              var T = g.wildcard, N = g.singlechar, j = g.escapechar, U = g.matchcase, W = S.replace(new RegExp("[" + T + "]", "g"), ".*");
              W = W.replace(new RegExp("[" + N + "]", "g"), "."), j !== "\\" && (W = W.replace(new RegExp("[" + j + "]", "g"), "\\")), W = "^" + W + "$";
              var ct = U === !1 ? new RegExp(W, "i") : new RegExp(W);
              return ct.test(x);
            }
            function de(g, m, _) {
              switch (g.operator) {
                case "propertyislessthan":
                  return Bt(g, m, _);
                case "propertyisequalto":
                  return _n(g, m, _);
                case "propertyislessthanorequalto":
                  return _n(g, m, _) || Bt(g, m, _);
                case "propertyisnotequalto":
                  return Fn(g, m, _);
                case "propertyisgreaterthan":
                  return mn(g, m, _);
                case "propertyisgreaterthanorequalto":
                  return _n(g, m, _) || mn(g, m, _);
                case "propertyisbetween":
                  return us(g, m, _);
                case "propertyisnull":
                  return en(g, m, _);
                case "propertyislike":
                  return nn(g, m, _);
                default:
                  throw new Error("Unkown comparison operator " + g.operator);
              }
            }
            function Xe(g, m) {
              for (var _ = 0; _ < g.length; _ += 1) if (g[_] === m) return !0;
              return !1;
            }
            function cs(g, m) {
              return g.properties[m];
            }
            function ds(g) {
              return g.id;
            }
            function yn(g, m, _) {
              _ === void 0 && (_ = {});
              var x = typeof _.getProperty == "function" ? _.getProperty : cs, S = typeof _.getFeatureId == "function" ? _.getFeatureId : ds, T = g.type;
              switch (T) {
                case "featureid":
                  return Xe(g.fids, S(m));
                case "comparison":
                  return de(g, m, x);
                case "and": {
                  if (!g.predicates) throw new Error("And filter must have predicates array.");
                  return g.predicates.length === 0 ? !1 : g.predicates.every(function(N) {
                    return yn(N, m, _);
                  });
                }
                case "or": {
                  if (!g.predicates) throw new Error("Or filter must have predicates array.");
                  return g.predicates.some(function(N) {
                    return yn(N, m, _);
                  });
                }
                case "not": {
                  if (!g.predicate) throw new Error("Not filter must have predicate.");
                  return !yn(g.predicate, m, _);
                }
                default:
                  throw new Error("Unknown filter type: " + T);
              }
            }
            function kn(g, m) {
              return g.maxscaledenominator !== void 0 && g.minscaledenominator !== void 0 ? m / 28e-5 < g.maxscaledenominator && m / 28e-5 > g.minscaledenominator : g.maxscaledenominator !== void 0 ? m / 28e-5 < g.maxscaledenominator : g.minscaledenominator !== void 0 ? m / 28e-5 > g.minscaledenominator : !0;
            }
            function fs(g) {
              return g.layers.map(function(m) {
                return m.name;
              });
            }
            function gs(g, m) {
              return m ? g.layers.find(function(_) {
                return _.name === m;
              }) : g.layers[0];
            }
            function qt(g) {
              return g.styles.map(function(m) {
                return m.name;
              });
            }
            function eo(g, m) {
              if (m) return g.styles.find(function(x) {
                return x.name === m;
              });
              var _ = g.styles.find(function(x) {
                return x.default;
              });
              return _ || g.styles[0];
            }
            function Bi(g, m, _, x) {
              x === void 0 && (x = {});
              for (var S = [], T = 0, N = 0; N < g.rules.length; N += 1) {
                var j = g.rules[N];
                kn(j, _) && (j.elsefilter ? (S.push(j), T += 1) : j.filter ? yn(j.filter, m, x) && S.push(j) : S.push(j));
              }
              return T === S.length ? S : S.filter(function(U) {
                return !U.elsefilter;
              });
            }
            function Bs(g) {
              var m = (g.polygonsymbolizer || []).concat(g.linesymbolizer || [], g.pointsymbolizer || [], g.textsymbolizer || []);
              return m;
            }
            function ps(g, m) {
              if (g) {
                for (var _ = g, x = (m || "").split("."), S = 0; S < x.length; S += 1) {
                  var T = x[S];
                  if (!(T in _)) return;
                  _ = _[T];
                }
                return _;
              }
            }
            function no(g) {
              var m = { polygonSymbolizers: [], lineSymbolizers: [], pointSymbolizers: [], textSymbolizers: [] };
              return (g || []).forEach(function(_) {
                _.polygonsymbolizer && (m.polygonSymbolizers = m.polygonSymbolizers.concat(_.polygonsymbolizer)), _.linesymbolizer && (m.lineSymbolizers = m.lineSymbolizers.concat(_.linesymbolizer)), _.pointsymbolizer && (m.pointSymbolizers = m.pointSymbolizers.concat(_.pointsymbolizer)), _.textsymbolizer && (m.textSymbolizers = m.textSymbolizers.concat(_.textsymbolizer));
              }), m;
            }
            var js = "IMAGE_LOADING", ji = "IMAGE_LOADED", Ws = "IMAGE_ERROR", Ys = 6, Jl = 16, La = "PLACEMENT_DEFAULT", so = "PLACEMENT_FIRSTPOINT", Wi = "PLACEMENT_LASTPOINT", Yi = ["graphic.externalgraphic", "stroke.graphicstroke.graphic.externalgraphic", "fill.graphicfill.graphic.externalgraphic"], Oa = {};
            function io(g, m) {
              Oa[g] = m;
            }
            function ms(g) {
              return Oa[g];
            }
            var _s = {};
            function Dn(g, m) {
              _s[g] = m;
            }
            function Xi(g) {
              return _s[g];
            }
            var ro = {};
            function Pe(g) {
              return ro[g];
            }
            function Gn(g, m) {
              ro[g] = m;
            }
            function Ee(g, m) {
              for (var _ = 0; _ < Yi.length; _ += 1) {
                var x = Yi[_], S = ps(g, x);
                S && S.onlineresource === m && (g.__invalidated = !0, x.indexOf("graphicstroke") > -1 && (g.stroke.graphicstroke.__invalidated = !0));
              }
            }
            function Le(g, m) {
              if (g) if (!Array.isArray(g)) Ee(g, m);
              else for (var _ = 0; _ < g.length; _ += 1) Ee(g[_], m);
            }
            function fe(g, m) {
              g.rules && g.rules.forEach(function(_) {
                Le(_.pointsymbolizer, m), Le(_.linesymbolizer, m), Le(_.polygonsymbolizer, m);
              });
            }
            function sn(g) {
              var m = Pe(g);
              return m || (m = new Promise(function(_, x) {
                var S = new Image();
                S.onload = function() {
                  io(g, { url: g, image: S, width: S.naturalWidth, height: S.naturalHeight }), Dn(g, ji), _(g);
                }, S.onerror = function() {
                  Dn(g, Ws), x();
                }, S.src = g;
              }), Dn(g, js), Gn(g, m), m);
            }
            function rn(g, m, _) {
              fe(m, g), sn(g).then(function() {
                fe(m, g), typeof _ == "function" && _(g);
              }).catch(function() {
                fe(m, g), typeof _ == "function" && _();
              });
            }
            function Dt(g, m, _, x) {
              g.forEach(function(S) {
                var T = Bs(S);
                T.forEach(function(N) {
                  Yi.forEach(function(j) {
                    var U = ps(N, j);
                    if (U) {
                      var W = U.onlineresource, ct = Xi(W);
                      (!ct || ct === js) && (x[W] || (x[W] = !0, rn(W, m, _)));
                    }
                  });
                });
              });
            }
            function ne(g, m, _) {
              _ === void 0 && (_ = 0);
              var x = ms(g), S = x.image, T = x.width, N = x.height;
              return new s.Style({ image: new s.Icon({ img: S, imgSize: [T, N], scale: m / N || 1, rotation: Math.PI * _ / 180 }) });
            }
            var qe = new s.Style({}), Ql = new s.Style({ image: new s.Circle({ radius: 8, fill: new s.Fill({ color: "blue", fillOpacity: 0.7 }) }) }), Vf = new s.Style({ image: new s.Circle({ radius: 5, fill: new s.Fill({ color: "#DDDDDD" }), stroke: new s.Stroke({ width: 1, color: "#888888" }) }) }), $f = new s.Style({ fill: new s.Fill({ color: "#DDDDDD" }), stroke: new s.Stroke({ color: "#888888", width: 1 }) }), e2 = new s.Style({ image: new s.RegularShape({ angle: Math.PI / 4, fill: new s.Fill({ color: "red" }), points: 4, radius: 8, radius2: 0, stroke: new s.Stroke({ color: "red", width: 4 }) }) }), n2 = new s.Style({ fill: new s.Fill({ color: "red" }), stroke: new s.Stroke({ color: "red", width: 1 }) });
            function Na(g) {
              var m = /* @__PURE__ */ new WeakMap();
              return function(_) {
                var x = m.get(_);
                return (!x || _.__invalidated) && (x = g(_), _.__invalidated = !1, m.set(_, x)), x;
              };
            }
            function s2(g, m) {
              var _ = parseInt(g.slice(1, 3), 16), x = parseInt(g.slice(3, 5), 16), S = parseInt(g.slice(5, 7), 16);
              return m || m === 0 ? "rgba(" + _ + ", " + x + ", " + S + ", " + m + ")" : "rgb(" + _ + ", " + x + ", " + S + ")";
            }
            function qi(g, m) {
              return m !== null && m < 1 && g.startsWith("#") ? s2(g, m) : g;
            }
            function i2(g, m) {
              var _ = g.stroke, x = _.graphicstroke, S = _.styling;
              if ("gap" in x) return x.gap + m;
              var T = 1;
              if (S && S.strokeDasharray) {
                var N = S.strokeDasharray.split(" ");
                N.length >= 2 && N[0] !== 0 && (T = N[1] / N[0] + 1);
              }
              return T * m;
            }
            function r2(g) {
              var m = g.stroke, _ = m.graphicstroke;
              return _.initialgap || 0;
            }
            function Fa(g, m, _, x, S) {
              S === void 0 && (S = 0);
              var T = m / 2, N = Math.PI * S / 180, j;
              switch (x && x.getColor() && (j = x.getColor()), g) {
                case "circle":
                  return new s.Circle({ fill: x, radius: T, stroke: _ });
                case "triangle":
                  return new s.RegularShape({ fill: x, points: 3, radius: T, stroke: _, rotation: N });
                case "star":
                  return new s.RegularShape({ fill: x, points: 5, radius: T, radius2: T / 2.5, stroke: _, rotation: N });
                case "cross":
                  return new s.RegularShape({ fill: x, points: 4, radius: T, radius2: 0, stroke: _ || new s.Stroke({ color: j, width: T / 2 }), rotation: N });
                case "hexagon":
                  return new s.RegularShape({ fill: x, points: 6, radius: T, stroke: _ || new s.Stroke({ color: j, width: T / 2 }), rotation: N });
                case "octagon":
                  return new s.RegularShape({ angle: Math.PI / 8, fill: x, points: 8, radius: T / Math.cos(Math.PI / 8), stroke: _ || new s.Stroke({ color: j, width: T / 2 }), rotation: N });
                case "cross2":
                case "x":
                  return new s.RegularShape({ angle: Math.PI / 4, fill: x, points: 4, radius: Math.sqrt(2) * T, radius2: 0, stroke: _ || new s.Stroke({ color: j, width: T / 2 }), rotation: N });
                case "diamond":
                  return new s.RegularShape({ fill: x, points: 4, radius: T, stroke: _, rotation: N });
                case "horline":
                  return new s.RegularShape({ fill: x, points: 2, radius: T, angle: Math.PI / 2, stroke: _, rotation: N });
                case "line":
                  return new s.RegularShape({ fill: x, points: 2, radius: T, angle: 0, stroke: _, rotation: N });
                case "backslash":
                  return new s.RegularShape({ fill: x, points: 2, radius: T * Math.sqrt(2), angle: -Math.PI / 4, stroke: _, rotation: N });
                case "slash":
                  return new s.RegularShape({ fill: x, points: 2, radius: T * Math.sqrt(2), angle: Math.PI / 4, stroke: _, rotation: N });
                default:
                  return new s.RegularShape({ angle: Math.PI / 4, fill: x, points: 4, radius: T * Math.sqrt(2), stroke: _, rotation: N });
              }
            }
            function ka(g) {
              if (g) {
                var m = g.styling || {}, _ = b(m.stroke, null, null, "#000000"), x = b(m.strokeOpacity, null, null, 1), S = b(m.strokeWidth, null, null, 1), T = b(m.strokeDashoffset, null, null, 0), N = { color: qi(_, x), width: S, lineDashOffset: T }, j = b(m.strokeLinejoin, null, null);
                j !== null && (N.lineJoin = j);
                var U = b(m.strokeLinecap, null, null);
                U !== null && (N.lineCap = U);
                var W = b(m.strokeDasharray, null, null);
                return W !== null && (N.lineDash = W.split(" ")), new s.Stroke(N);
              }
            }
            function tu(g) {
              if (g) {
                var m = g.styling || {}, _ = b(m.fill, null, null, "#808080"), x = b(m.fillOpacity, null, null, 1);
                return new s.Fill({ color: qi(_, x) });
              }
            }
            function eu(g, m, _, x) {
              var S = g.getFill();
              if (!S || typeof x != "function") return !1;
              var T = !1, N = m.fill || {}, j = N.styling || {};
              if (et(j.fill) || et(j.fillOpacity)) {
                var U = b(j.fill, _, x, "#808080"), W = b(j.fillOpacity, _, x, 1);
                S.setColor(qi(U, W)), T = !0;
              }
              return T;
            }
            function Da(g, m, _, x) {
              var S = g.getStroke();
              if (!S || typeof x != "function") return !1;
              var T = !1, N = m.stroke || {}, j = N.styling || {};
              if (et(j.strokeWidth)) {
                var U = b(j.strokeWidth, _, x, 1);
                S.setWidth(U), T = !0;
              }
              if (et(j.stroke) || et(j.strokeOpacity)) {
                var W = b(j.stroke, _, x, "#000000"), ct = b(j.strokeOpacity, _, x, 1);
                S.setColor(qi(W, ct)), T = !0;
              }
              return T;
            }
            function o2(g, m, _, x) {
              var S = g.getText();
              if (!S || typeof x != "function") return !1;
              if (m.fill && m.fill.styling && (et(m.fill.styling.fill) || et(m.fill.styling.fillOpacity))) {
                var T = { stroke: { styling: { stroke: m.fill.styling.fill, strokeOpacity: m.fill.styling.fillOpacity } } };
                Da(S, T, _, x);
              }
              if (m.halo && m.halo.fill && m.halo.fill.styling && (et(m.halo.fill.styling.fill) || et(m.halo.fill.styling.fillOpacity)) && eu(S, m.halo, _, x), m.halo && et(m.halo.radius)) {
                var N = b(m.halo.radius, _, x, 1), j = S.getStroke();
                if (j) {
                  var U = (N === 2 || N === 4 ? N - 1e-5 : N) * 2;
                  j.setWidth(U);
                }
              }
              return !1;
            }
            var a2 = tu({ styling: { fill: "#888888" } }), h2 = ka({ styling: { stroke: {} } });
            function l2(g) {
              var m = g.graphic, _ = b(m.size, null, null, Ys), x = b(m.rotation, null, null, 0);
              if (m.externalgraphic && m.externalgraphic.onlineresource) {
                m.size || (_ = null);
                var S = m.externalgraphic.onlineresource;
                switch (Xi(S)) {
                  case ji:
                    return ne(S, _, x);
                  case js:
                    return Vf;
                  case Ws:
                    return e2;
                  default:
                    return Vf;
                }
              }
              if (m.mark) {
                var T = m.mark, N = T.wellknownname, j = tu(m.mark.fill), U = ka(m.mark.stroke);
                return new s.Style({ image: Fa(N, _, U, j, x) });
              }
              return new s.Style({ image: Fa("square", _, h2, a2, x) });
            }
            var u2 = Na(l2);
            function Xs(g, m, _) {
              if (!(g && g.graphic)) return qe;
              var x = u2(g);
              x.setGeometry(null);
              var S = x.getImage(), T = g.graphic, N = T.size, j = T.rotation, U = Number(b(N, m, _)) || Ys, W = Number(b(j, m, _)) || 0;
              if (et(N)) if (T.externalgraphic && T.externalgraphic.onlineresource) {
                var ct = S.getSize()[1], Mt = U / ct || 1;
                S.setScale(Mt);
              } else T.mark && T.mark.wellknownname === "circle" ? S.setRadius(U * 0.5) : (S = Fa(T.mark && T.mark.wellknownname || "square", U, S.getStroke(), S.getFill(), W), x.setImage(S));
              if (et(j)) {
                var yt = Math.PI * W / 180;
                S.setRotation(yt);
              }
              if (T.mark) {
                var Lt = Da(S, T.mark, m, _), Ot = eu(S, T.mark, m, _);
                (Lt || Ot) && (S = Fa(T.mark && T.mark.wellknownname || "square", U, S.getStroke(), S.getFill(), W), x.setImage(S));
              }
              var Ht = T.displacement;
              if (Ht) {
                var Jt = Ht.displacementx, Me = Ht.displacementy;
                if (typeof Jt < "u" || typeof Me < "u") {
                  var se = b(Jt, m, _) || 0, De = b(Me, m, _) || 0;
                  (se !== 0 || De !== 0) && S.setDisplacement([se, De]);
                }
              }
              return x;
            }
            function Zf(g, m) {
              var _ = g[0] - m[0], x = g[1] - m[1];
              return Math.sqrt(_ * _ + x * x);
            }
            function c2(g, m, _) {
              var x = Zf(g, m), S = _ / x, T = g[0] + (m[0] - g[0]) * S, N = g[1] + (m[1] - g[1]) * S;
              return [T, N];
            }
            function nu(g, m, _) {
              var x = m[0] - g[0], S = m[1] - g[1], T = -Math.atan2(_ ? -S : S, x);
              return T;
            }
            function Kf(g, m, _) {
              _ === void 0 && (_ = {});
              var x = g.getCoordinates();
              if (x.length === 0) return [];
              if (x.length === 1) return [x[0].concat([0])];
              if (_.placement === so) {
                var S = x[0], T = x[1];
                return [[S[0], S[1], nu(S, T, _.invertY)]];
              }
              if (_.placement === Wi) {
                var N = x[x.length - 2], j = x[x.length - 1];
                return [[j[0], j[1], nu(N, j, _.invertY)]];
              }
              for (var U = g.getLength(), W = Math.max(m, 0.1), ct = _.initialGap || 0, Mt = 0, yt = [].concat(x[0]), Lt = [].concat(x[1]), Ot = 0, Ht = []; ct <= U; ) {
                var Jt = Zf(yt, Lt);
                if (Ot + Jt < ct) {
                  if (Mt === x.length - 2) break;
                  yt[0] = Lt[0], yt[1] = Lt[1], Lt[0] = x[Mt + 2][0], Lt[1] = x[Mt + 2][1], Mt += 1, Ot += Jt;
                } else {
                  var Me = ct - Ot, se = c2(yt, Lt, Me), De = nu(yt, Lt, _.invertY);
                  (!_.extent || o.containsCoordinate(_.extent, se)) && (se.push(De), Ht.push(se)), ct += W;
                }
              }
              return Ht;
            }
            var Hf = !1;
            function d2(g) {
              if (!Hf) {
                var m = Object.getPrototypeOf(g);
                m.setImageStyle2 = function(_, x) {
                  m.setImageStyle.call(this, _), this.image_ && (this.imageRotation_ = x);
                }, Hf = !0;
              }
            }
            function Jf(g, m, _, x, S, T) {
              if (m) {
                if (Array.isArray(m[0][0])) {
                  m.forEach(function(U) {
                    Jf(g, U, _, x, S, T);
                  });
                  return;
                }
                if (!(m.length < 2)) {
                  var N = x.getImage();
                  if (N) {
                    var j = Kf(new r.LineString(m), _ * S, { invertY: !0, extent: g.extent_, placement: T.placement, initialGap: T.initialGap });
                    j.forEach(function(U) {
                      var W = N.getRotation() + U[2];
                      g.setImageStyle2(N, W), g.drawPoint(new r.Point([U[0] / S, U[1] / S]));
                    });
                  }
                }
              }
            }
            function Qf(g, m) {
              if (!(g.stroke && g.stroke.graphicstroke)) throw new Error("getGraphicStrokeRenderer error: symbolizer.stroke.graphicstroke null or undefined.");
              var _ = g.stroke, x = _.graphicstroke, S = { placement: La };
              return g.vendoroptions && (g.vendoroptions.placement === "firstPoint" ? S.placement = so : g.vendoroptions.placement === "lastPoint" && (S.placement = Wi)), function(T, N) {
                var j = N.feature.getGeometry().getType();
                if (!(j === "Point" || j === "MultiPoint")) {
                  var U = N.pixelRatio || 1, W = i.toContext(N.context);
                  d2(W);
                  var ct = Ys;
                  x.graphic && x.graphic.externalgraphic && (ct = Jl);
                  var Mt = Xs(x, N.feature, m), yt = x.graphic && x.graphic.size || ct, Lt = Number(b(yt, N.feature, m, ct)), Ot = i2(g, Lt);
                  S.initialGap = r2(g), Jf(W, T, Ot, Mt, U, S);
                }
              };
            }
            function f2(g, m) {
              if (!(g.stroke && g.stroke.graphicstroke)) throw new Error("getGraphicStrokeStyle error: linesymbolizer.stroke.graphicstroke null or undefined.");
              return new s.Style({ renderer: Qf(g, m) });
            }
            function g2(g) {
              return g.stroke && g.stroke.graphicstroke ? f2(g) : new s.Style({ stroke: ka(g.stroke) });
            }
            var p2 = Na(g2);
            function tg(g, m, _) {
              var x = p2(g);
              return Da(x, g, m, _), x;
            }
            var eg = [[1, 1]], ng = [[0, 0], [2, 2]], sg = [[0, 0], [1, 1], [2, 2], [3, 3], [2, 0], [0, 2]], m2 = [[0, 0], [1, 1]];
            function _2(g, m) {
              m.forEach(function(_) {
                var x = _[0], S = _[1];
                g.fillRect(x, S, 1, 1);
              });
            }
            function y2(g, m) {
              m.forEach(function(_) {
                var x = _[0], S = _[1];
                g.clearRect(x, S, 1, 1);
              });
            }
            function ig(g) {
              var m = g.getContext("2d");
              if (a.DEVICE_PIXEL_RATIO === 1) return m.createPattern(g, "repeat");
              var _ = document.createElement("canvas");
              _.width = g.width * a.DEVICE_PIXEL_RATIO, _.height = g.height * a.DEVICE_PIXEL_RATIO;
              var x = _.getContext("2d");
              return x.imageSmoothingEnabled = !1, x.drawImage(g, 0, 0, g.width, g.height, 0, 0, _.width, _.height), x.createPattern(_, "repeat");
            }
            function Ga(g, m, _) {
              var x = document.createElement("canvas");
              x.width = g, x.height = g;
              var S = x.getContext("2d");
              return S.fillStyle = m, _2(S, _), ig(x);
            }
            function su(g, m, _) {
              var x = document.createElement("canvas");
              x.width = g, x.height = g;
              var S = x.getContext("2d");
              return S.fillStyle = m, S.fillRect(0, 0, g, g), y2(S, _), ig(x);
            }
            function x2(g, m) {
              var _ = null;
              switch (g) {
                case "brush://dense1":
                  _ = new s.Fill({ color: su(4, m, eg) });
                  break;
                case "brush://dense2":
                  _ = new s.Fill({ color: su(4, m, ng) });
                  break;
                case "brush://dense3":
                  _ = new s.Fill({ color: su(4, m, sg) });
                  break;
                case "brush://dense4":
                  _ = new s.Fill({ color: Ga(2, m, m2) });
                  break;
                case "brush://dense5":
                  _ = new s.Fill({ color: Ga(4, m, sg) });
                  break;
                case "brush://dense6":
                  _ = new s.Fill({ color: Ga(4, m, ng) });
                  break;
                case "brush://dense7":
                  _ = new s.Fill({ color: Ga(4, m, eg) });
                  break;
                default:
                  _ = new s.Fill({ color: m });
                  break;
              }
              return _;
            }
            function E2(g) {
              var m = ms(g.externalgraphic.onlineresource), _ = m.image, x = m.width, S = m.height, T = document.createElement("canvas"), N = T.getContext("2d"), j = a.DEVICE_PIXEL_RATIO;
              if (g.size && S !== g.size && (j *= g.size / S), j === 1) return N.createPattern(_, "repeat");
              var U = document.createElement("canvas"), W = U.getContext("2d");
              return U.width = x * j, U.height = S * j, W.drawImage(_, 0, 0, x, S, 0, 0, x * j, S * j), N.createPattern(U, "repeat");
            }
            function M2(g) {
              var m = g.fill.graphicfill, _ = m.graphic, x = _.externalgraphic.onlineresource;
              switch (Xi(x)) {
                case ji:
                  return new s.Fill({ color: E2(g.fill.graphicfill.graphic) });
                case js:
                  return $f.getFill();
                case Ws:
                  return n2.getFill();
                default:
                  return $f.getFill();
              }
            }
            function w2(g, m) {
              if (!g.graphic) return g;
              var _ = JSON.parse(JSON.stringify(g)), x = _.graphic, S = Number(x.size) || Ys;
              x.size = m * S;
              var T = x.mark;
              if (T && T.stroke) {
                T.stroke.styling || (T.stroke.styling = { stroke: "#000000", strokeWidth: 1 }), T.stroke.styling.strokeWidth || (T.stroke.styling.strokeWidth = Number(T.stroke.styling.strokeWidth) || 1);
                var N = T.stroke.styling.strokeWidth;
                N > 1 && (T.stroke.styling.strokeWidth = m * N);
              }
              return _;
            }
            function S2(g) {
              var m = g.fill, _ = m.graphicfill, x = _.graphic, S = x.mark, T = S || {}, N = T.wellknownname;
              if (N && N.indexOf("brush://") === 0) {
                var j = "#000000";
                return S.fill && S.fill.styling && S.fill.styling.fill && (j = S.fill.styling.fill), x2(N, j);
              }
              var U = Number(x.size) || Ys, W = U * a.DEVICE_PIXEL_RATIO, ct = null, Mt = 2;
              try {
                var yt = document.createElement("canvas");
                yt.width = W * Mt, yt.height = W * Mt;
                var Lt = yt.getContext("2d"), Ot = w2(_, Mt), Ht = Xs(Ot), Jt = i.toContext(Lt, { size: [U * Mt, U * Mt] });
                Lt.imageSmoothingEnabled = !1, Jt.setStyle(Ht);
                var Me = Mt * (U / 2), se = Mt * (U / 2);
                Jt.drawGeometry(new r.Point([Me, se])), N && N.indexOf("slash") > -1 && (Jt.drawGeometry(new r.Point([Me - Mt * U, se])), Jt.drawGeometry(new r.Point([Me + Mt * U, se])), Jt.drawGeometry(new r.Point([Me, se - Mt * U])), Jt.drawGeometry(new r.Point([Me, se + Mt * U])));
                var De = document.createElement("canvas");
                De.width = W, De.height = W;
                var za = De.getContext("2d");
                za.drawImage(yt, 0, 0, W * Mt, W * Mt, 0, 0, W, W);
                var Ua = za.createPattern(De, "repeat");
                ct = new s.Fill({ color: Ua });
              } catch {
                ct = new s.Fill({ color: "#000000" });
              }
              return ct;
            }
            function v2(g) {
              var m = g.fill && g.fill.graphicfill && g.fill.graphicfill.graphic && g.fill.graphicfill.graphic.externalgraphic && g.fill.graphicfill.graphic.externalgraphic.onlineresource, _ = g.fill && g.fill.graphicfill && g.fill.graphicfill.graphic && g.fill.graphicfill.graphic.mark, x = null;
              if (m ? x = M2(g) : _ ? x = S2(g) : x = tu(g.fill), g.stroke && g.stroke.graphicstroke) {
                var S = Qf(g);
                return new s.Style({ renderer: function(N, j) {
                  if (x) {
                    var U = j.feature, W = j.context, ct = i.toContext(W);
                    ct.setFillStrokeStyle(x, void 0);
                    var Mt = U.getGeometry().getType();
                    Mt === "Polygon" ? ct.drawPolygon(new r.Polygon(N)) : Mt === "MultiPolygon" && ct.drawMultiPolygon(new r.MultiPolygon(N));
                  }
                  S(N, j);
                } });
              }
              var T = ka(g.stroke);
              return new s.Style({ fill: x, stroke: T });
            }
            var R2 = Na(v2);
            function C2(g, m, _) {
              var x = R2(g);
              return eu(x, g, m, _), Da(x, g, m, _), x;
            }
            function b2(g) {
              if (!(g && g.label)) return qe;
              var m = b(g.label, null, null, ""), _ = g.font ? g.font.styling || {} : {}, x = b(_.fontFamily, null, null, "sans-serif"), S = b(_.fontSize, null, null, 10), T = b(_.fontStyle, null, null, ""), N = b(_.fontWeight, null, null, ""), j = T + " " + N + " " + S + "px " + x, U = g && g.labelplacement && g.labelplacement.pointplacement ? g.labelplacement.pointplacement : {}, W = b(U.rotation, null, null, 0), ct = U && U.displacement ? U.displacement : {}, Mt = b(ct.displacementx, null, null, 0), yt = -b(ct.displacementy, null, null, 0), Lt = U && U.anchorpoint || {}, Ot = "center", Ht = b(Lt.anchorpointx, null, null, NaN);
              Ht < 0.25 ? Ot = "left" : Ht > 0.75 && (Ot = "right");
              var Jt = "middle", Me = b(Lt.anchorpointy, null, null, NaN);
              Me < 0.25 ? Jt = "bottom" : Me > 0.75 && (Jt = "top");
              var se = g.fill ? g.fill.styling : {}, De = b(se.fill, null, null, "#000000"), za = b(se.fillOpacity, null, null, 1), Ua = { text: m, font: j, offsetX: Mt, offsetY: yt, rotation: Math.PI * W / 180, textAlign: Ot, textBaseline: Jt, fill: new s.Fill({ color: qi(De, za) }) };
              if (g.halo) {
                var ug = g.halo && g.halo.fill ? g.halo.fill.styling : {}, j2 = b(ug.fill, null, null, "#FFFFFF"), W2 = b(ug.fillOpacity, null, null, 1), Ba = b(g.halo.radius, null, null, 1);
                Ua.stroke = new s.Stroke({ color: qi(j2, W2), width: (Ba === 2 || Ba === 4 ? Ba - 1e-5 : Ba) * 2 });
              }
              return new s.Style({ text: new s.Text(Ua) });
            }
            var T2 = Na(b2);
            function iu(g, m, _) {
              var x = T2(g), S = x.getText();
              if (!S) return x;
              var T = g.label, N = g.labelplacement;
              if (et(T)) {
                var j = b(T, m, _, "");
                S.setText(j.toString());
              }
              if (N) {
                var U = N.pointplacement && N.pointplacement.rotation || 0;
                if (et(U)) {
                  var W = b(U, m, _, 0);
                  S.setRotation(Math.PI * W / 180);
                }
              }
              var ct = m.getGeometry ? m.getGeometry() : m.geometry, Mt = ct.getType ? ct.getType() : ct.type, yt = g && g.labelplacement && g.labelplacement.lineplacement ? g.labelplacement.lineplacement : null, Lt = Mt !== "point" && yt ? "line" : "point";
              if (S.setPlacement(Lt), o2(x, g, m, _), g.font && g.font.styling) {
                var Ot = g.font.styling || {};
                if (et(Ot.fontFamily) || et(Ot.fontStyle) || et(Ot.fontWeight) || et(Ot.fontSize)) {
                  var Ht = b(Ot.fontFamily, m, _, "sans-serif"), Jt = b(Ot.fontStyle, m, _, ""), Me = b(Ot.fontWeight, m, _, ""), se = b(Ot.fontSize, m, _, 10), De = Jt + " " + Me + " " + se + "px " + Ht;
                  S.setFont(De);
                }
              }
              return x;
            }
            function rg(g) {
              var m = Kf(g, g.getLength() / 2), _ = m[1], x = _[0], S = _[1];
              return [x, S];
            }
            function I2(g, m) {
              if (typeof m.getGeometry != "function") return null;
              var _ = m.getGeometry();
              if (!_) return null;
              var x = null, S = _.getType();
              if (S === "LineString") x = Xs(g, m), x.setGeometry(new r.Point(rg(_)));
              else if (S === "MultiLineString") {
                var T = _.getLineStrings(), N = T.map(rg);
                x = Xs(g, m), x.setGeometry(new r.MultiPoint(N));
              }
              return x;
            }
            function og(g) {
              var m = g.getInteriorPoint().getCoordinates(), _ = m[0], x = m[1];
              return [_, x];
            }
            function A2(g, m) {
              if (typeof m.getGeometry != "function") return null;
              var _ = m.getGeometry();
              if (!_) return null;
              var x = null, S = _.getType();
              if (S === "Polygon") x = Xs(g, m), x.setGeometry(new r.Point(og(_)));
              else if (S === "MultiPolygon") {
                var T = _.getPolygons(), N = T.map(og);
                x = Xs(g, m), x.setGeometry(new r.MultiPoint(N));
              }
              return x;
            }
            var P2 = [Ql];
            function zn(g, m, _, x, S) {
              (m || []).forEach(function(T) {
                var N = x(T, _, S);
                N && g.push(N);
              });
            }
            function ru(g, m, _, x) {
              x === void 0 && (x = {});
              var S = g.polygonSymbolizers, T = g.lineSymbolizers, N = g.pointSymbolizers, j = g.textSymbolizers, U = { strictGeometryMatch: !1, useFallbackStyles: !0 }, W = Object.assign({}, U, x), ct = m.getGeometry ? m.getGeometry() : m.geometry, Mt = ct.getType ? ct.getType() : ct.type, yt = [];
              switch (Mt) {
                case "Point":
                case "MultiPoint":
                  zn(yt, N, m, Xs, _), zn(yt, j, m, iu, _);
                  break;
                case "LineString":
                case "MultiLineString":
                  zn(yt, T, m, tg, _), W.strictGeometryMatch || zn(yt, N, m, I2, _), zn(yt, j, m, iu, _);
                  break;
                case "Polygon":
                case "MultiPolygon":
                  zn(yt, S, m, C2, _), W.strictGeometryMatch || zn(yt, T, m, tg, _), zn(yt, N, m, A2, _), zn(yt, j, m, iu, _);
                  break;
                default:
                  W.useFallbackStyles && (yt = P2);
              }
              return yt.forEach(function(Lt, Ot) {
                return Lt.setZIndex(Ot);
              }), yt;
            }
            function L2(g) {
              return g.getId();
            }
            function O2(g, m) {
              return g.get(m);
            }
            function N2(g, m) {
              m === void 0 && (m = {});
              var _ = m.imageLoadedCallback || function() {
              }, x = {};
              return function(S, T) {
                var N = typeof m.convertResolution == "function" ? m.convertResolution(T) : T, j = typeof m.getProperty == "function" ? m.getProperty : O2, U = Bi(g, S, N, { getProperty: j, getFeatureId: L2 });
                Dt(U, g, _, x);
                var W = no(U), ct = ru(W, S, j);
                return ct;
              };
            }
            function F2(g, m) {
              var _ = no([g]), x = ru(_, { geometry: { type: m } }, function() {
                return null;
              }, { strictGeometryMatch: !0, useFallbackStyles: !1 });
              return x.filter(function(S) {
                return S !== null;
              });
            }
            function qs(g) {
              if (g === null) return "";
              var m = typeof g;
              switch (m) {
                case "string":
                  return g;
                case "number":
                case "bigint":
                case "boolean":
                  return g.toString();
                case "undefined":
                  return "";
                default:
                  return m;
              }
            }
            function ag(g) {
              return qs(g).toLowerCase();
            }
            function hg(g) {
              return qs(g).toUpperCase();
            }
            function k2(g, m, _) {
              var x = Number(m), S = Number(_);
              if (Number.isNaN(x)) return "";
              var T = qs(g);
              return Number.isNaN(S) ? x > 0 ? T.slice(x - 1) : T.slice(x) : S === 0 ? "" : x > 0 ? S > 0 ? T.slice(x - 1, x - 1 + S) : T.slice(x - 1, S) : S > 0 ? x + S < 0 ? T.slice(x, x + S) : T.slice(x) : T.slice(x, S);
            }
            function D2(g, m, _) {
              var x = qs(g), S = Number(m), T = Number(_);
              return Number.isNaN(S) || Number.isNaN(T) ? "" : x.slice(S, T);
            }
            function G2(g, m) {
              var _ = qs(g), x = Number(m);
              return Number.isNaN(x) ? "" : _.slice(x);
            }
            function ou(g) {
              return g && typeof g.getType == "function" ? g.getType() : "Unknown";
            }
            function z2(g) {
              switch (ou(g)) {
                case "Point":
                case "MultiPoint":
                  return 0;
                case "LineString":
                case "LinearRing":
                case "Circle":
                case "MultiLineString":
                  return 1;
                case "Polygon":
                case "MultiPolygon":
                  return 2;
                default:
                  return 0;
              }
            }
            function U2(g) {
              switch (ou(g)) {
                case "Point":
                case "MultiPoint":
                  return "Point";
                case "LineString":
                case "LinearRing":
                case "Circle":
                case "MultiLineString":
                  return "Line";
                case "Polygon":
                case "MultiPolygon":
                  return "Polygon";
                default:
                  return "Unknown";
              }
            }
            function lg() {
              for (var g = [], m = arguments.length; m--; ) g[m] = arguments[m];
              var _ = g[0], x = g.slice(1), S = qs(_);
              return x.some(function(T) {
                return qs(T) === S;
              });
            }
            function B2() {
              X("lower", ag), X("upper", hg), X("geometry_type", U2), X("substr", k2), X("strToLowerCase", ag), X("strToUpperCase", hg), X("strSubstring", D2), X("strSubstringStart", G2), X("geometryType", ou), X("dimension", z2), X("in", lg);
              for (var g = 2; g <= 10; g += 1) X("in" + g, lg);
              X("__fe:Add__", function(m, _) {
                return Number(m) + Number(_);
              }), X("__fe:Sub__", function(m, _) {
                return Number(m) - Number(_);
              }), X("__fe:Mul__", function(m, _) {
                return Number(m) * Number(_);
              }), X("__fe:Div__", function(m, _) {
                return Number(m) / Number(_);
              });
            }
            B2(), e.OlStyler = ru, e.Reader = ot, e.categorizeSymbolizers = no, e.createOlStyle = F2, e.createOlStyleFunction = N2, e.getByPath = ps, e.getFunction = mt, e.getLayer = gs, e.getLayerNames = fs, e.getRuleSymbolizers = Bs, e.getRules = Bi, e.getStyle = eo, e.getStyleNames = qt, e.registerFunction = X;
          });
        }(Aa, Aa.exports)), Aa.exports;
      }
      var Pa = Qw();
      le.defs("EPSG:25832", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs +axis=enu"), le.defs("http://www.opengis.net/def/crs/EPSG/0/25832", le.defs("EPSG:25832")), t1(le);
      const Zl = It("EPSG:25832");
      class Kl extends Bn {
        constructor() {
          super(), this.vectorLayers = [], this.styles = { fillColor: "#ffffff", strokeColor: "#000000", strokeWidth: 1 }, this.gmlFile = null, this.sldFile = null, this.xmlFile = null;
        }
        connectedCallback() {
          super.connectedCallback(), console.log("Connected Properties:", this.gmlFile, this.xmlFile, this.sldFile), this.gmlFile && fetch(this.gmlFile).then((t) => t.text()).then((t) => {
            if (this.sldFile) return fetch(this.sldFile).then((e) => e.text()).then((e) => {
              this.loadGML(t, e);
            });
            this.loadGML(t, null);
          }).catch((t) => console.error("Error loading GML or SLD:", t)), this.xmlFile && fetch(this.xmlFile).then((t) => t.text()).then((t) => {
            this.loadMetadata(t);
          }).catch((t) => console.error("Error loading XML:", t));
        }
        firstUpdated() {
          this.initMaps(), this.initHoverPopup();
        }
        initMaps() {
          this.map = new r0({ target: this.shadowRoot.getElementById("map"), layers: [new Ry({ source: new jy({ url: "https://services.datafordeler.dk/DKskaermkort/topo_skaermkort_daempet/1.0.0/wmts?username=QKJBQATHVS&password=ytxCA8UGM5n0Z*zi", layer: "topo_skaermkort_daempet", matrixSet: "View1", format: "image/jpeg", style: "default", tileGrid: new Cy({ extent: [12e4, 59e5, 1e6, 65e5], resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2], matrixIds: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"] }) }), visible: !0 })], view: new ln({ center: [6e5, 6225e3], zoom: 9, projection: Zl }), controls: [] });
        }
        initHoverPopup() {
          const t = document.createElement("div");
          t.id = "popup", t.style.cssText = `
      background: white;
      border: 1px solid black;
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      position: absolute;
      display: none;
      width: max-content;
    `, this.shadowRoot.appendChild(t), this.overlay = new qw({ element: t, offset: [10, 10], positioning: "center-left" }), this.map.addOverlay(this.overlay), this.map.on("pointermove", (e) => {
            const s = this.map.forEachFeatureAtPixel(e.pixel, (i) => i);
            if (s) {
              const i = s.get("navn"), r = s.get("type");
              let o = "";
              i && (o += `<strong>${i}</strong><br/>`), r && (o += `Type: ${r}`), o ? (t.innerHTML = o, t.style.display = "block", this.overlay.setPosition(e.coordinate)) : t.style.display = "none";
            } else t.style.display = "none";
          });
        }
        zoomIn() {
          const t = this.map.getView();
          t.setZoom(t.getZoom() + 1);
        }
        zoomOut() {
          const t = this.map.getView();
          t.setZoom(t.getZoom() - 1);
        }
        getStyle(t, e = null) {
          if (e) return e;
          const { fillColor: s, strokeColor: i, strokeWidth: r } = this.styles;
          switch (t) {
            case "Polygon":
            case "MultiPolygon":
              return new ae({ fill: new Ke({ color: s }), stroke: new ke({ color: i, width: r }) });
            case "LineString":
              return new ae({ stroke: new ke({ color: i, width: r }) });
            case "Point":
              return new ae({ image: new Ns({ radius: 5, fill: new Ke({ color: s }), stroke: new ke({ color: i, width: 1 }) }) });
            default:
              return console.warn(`No style found for geometry type: ${t}`), null;
          }
        }
        uploadFiles(t) {
          const e = [...t.target.files], s = e.find((a) => a.name.endsWith(".gml")), i = e.find((a) => a.name.endsWith(".sld")), r = e.find((a) => a.name.endsWith(".geojson")), o = e.find((a) => a.name.endsWith(".xml"));
          if (s) {
            const a = new FileReader();
            a.onload = () => {
              if (i) {
                const h = new FileReader();
                h.onload = () => {
                  this.loadGML(a.result, h.result);
                }, h.readAsText(i);
              } else this.loadGML(a.result, null);
            }, a.readAsText(s);
          }
          if (r) {
            const a = new FileReader();
            a.onload = () => {
              this.loadMetadata(JSON.parse(a.result));
            }, a.readAsText(r);
          }
          if (o) {
            const a = new FileReader();
            a.onload = () => {
              this.loadMetadata(a.result);
            }, a.readAsText(o);
          }
        }
        loadMetadata(t) {
          let e;
          if (typeof t == "string") {
            const h = new DOMParser().parseFromString(t, "application/xml");
            e = Array.from(h.documentElement.children).reduce((l, u) => (l[u.tagName] = u.textContent, l), {});
          } else if (t.properties) e = t.properties;
          else {
            console.warn("Unsupported metadata format.");
            return;
          }
          const s = this.shadowRoot.querySelector("#map-container");
          if (!s) {
            console.error("Map container not found");
            return;
          }
          let i = s.querySelector("#metadata-box");
          i || (i = document.createElement("div"), i.id = "metadata-box", i.style.cssText = `
      position: absolute;
      top: 20px;
      left: 20px;
      background: rgba(255, 255, 255, 0.95);
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      max-height: 300px;
      overflow-y: auto;
      max-width: 25rem;
      z-index: 10;
    `, s.appendChild(i));
          let r = "";
          for (const [h, l] of Object.entries(e)) {
            const u = h.charAt(0).toUpperCase() + h.slice(1);
            r += `<div style="margin-bottom: 8px;"><strong>${u}:</strong> ${l}</div>`;
          }
          i.innerHTML = `
    <button id="toggle-metadata" style="background:none; border:none; font-size:1rem; cursor:pointer;">
        Metadata ▼
    </button>
    <div id="metadata-content" style="display:none; margin-top:10px;">
        ${r}
    </div>
  `;
          const o = i.querySelector("#toggle-metadata"), a = i.querySelector("#metadata-content");
          o.addEventListener("click", () => {
            const h = a.style.display === "block";
            a.style.display = h ? "none" : "block", o.textContent = h ? "Metadata ▼" : "Metadata ▲";
          });
        }
        loadGML(t, e = null) {
          const { features: s, xmlDoc: i } = this.parseGML(t), r = this.groupFeaturesByType(s, i);
          this.resetLayers(), this.applyFeatureGroupsToMap(r, e);
          const o = s.length > 0 ? s[0].getGeometry().getExtent().slice() : null;
          s.forEach((a) => {
            const h = a.getGeometry().getExtent();
            o && ir(o, h);
          }), o && this.map.getView().fit(o, { size: this.map.getSize(), padding: [50, 50, 50, 50], maxZoom: 18 });
        }
        applyFeatureGroupsToMap(t, e) {
          const s = this.map.getView().getProjection(), i = e ? Pa.Reader(e) : null;
          Object.keys(t).forEach((r) => {
            const o = new X0({ features: t[r] }), a = this.applySLDStyles(i, r, s);
            this.addLayerWithControls(r, o, a || this.getStyle(r));
          }), this.map.render(), this.requestUpdate();
        }
        parseGML(t) {
          try {
            const e = new St(), s = new DOMParser().parseFromString(t, "application/xml");
            return { features: e.readFeatures(t, { featureProjection: Zl, dataProjection: Zl }), xmlDoc: s };
          } catch (e) {
            return console.error("Failed to parse GML file:", e), { features: [], xmlDoc: null };
          }
        }
        groupFeaturesByType(t, e) {
          return t.reduce((s, i, r) => {
            const o = e.getElementsByTagNameNS("*", "featureMember")[r], a = o ? o.firstElementChild : null, h = a ? a.localName : "Unknown Type";
            return s[h] || (s[h] = []), s[h].push(i), s;
          }, {});
        }
        resetLayers() {
          this.vectorLayers.forEach((t) => {
            this.map.removeLayer(t);
          }), this.vectorLayers = [], this.shadowRoot.getElementById("data-toggle").innerHTML = "";
        }
        applySLDStyles(t, e, s) {
          if (!t) return null;
          const i = Pa.getLayer(t, e);
          if (!i) return console.warn("No named layer found for " + e), null;
          const r = Pa.getStyle(i);
          if (!r) return console.warn("No style found for layer " + i), null;
          const o = r.featuretypestyles[0];
          return Pa.createOlStyleFunction(o, { convertResolution: (a) => {
            const h = this.map.getView().getCenter();
            return uh(s, a, h);
          }, imageLoadedCallback: () => {
            this.map.changed();
          } });
        }
        updateLayerStyle(t, { fillColor: e, strokeColor: s, strokeWidth: i }) {
          t.setStyle((r) => {
            const o = r.getGeometry().getType();
            return o === "Point" ? new ae({ image: new Ns({ radius: 5, fill: new Ke({ color: e }), stroke: new ke({ color: s, width: i }) }) }) : o === "Polygon" || o === "MultiPolygon" ? new ae({ fill: new Ke({ color: e }), stroke: new ke({ color: s, width: i }) }) : o === "LineString" ? new ae({ stroke: new ke({ color: s, width: i }) }) : o === "Circle" ? new ae({ stroke: new ke({ color: s, width: i }) }) : new ae({ fill: new Ke({ color: e }), stroke: new ke({ color: s, width: i }) });
          });
        }
        createLayerToggleCheckbox(t, e) {
          const s = document.createElement("div");
          s.className = "checkbox-container";
          const i = document.createElement("input");
          i.type = "checkbox", i.id = `checkbox-${t}`, i.checked = !0, i.addEventListener("change", () => {
            e.setVisible(i.checked);
          });
          const r = document.createElement("label");
          return r.htmlFor = `checkbox-${t}`, r.textContent = t, s.appendChild(i), s.appendChild(r), s;
        }
        addColorPickers(t, e, s) {
          const i = document.createElement("input");
          i.type = "color", i.value = this.styles.fillColor, i.addEventListener("input", () => {
            this.updateLayerStyle(s, { fillColor: i.value, strokeColor: r.value, strokeWidth: o.value });
          });
          const r = document.createElement("input");
          r.type = "color", r.value = this.styles.strokeColor, r.addEventListener("input", () => {
            this.updateLayerStyle(s, { fillColor: i.value, strokeColor: r.value, strokeWidth: o.value });
          });
          const o = document.createElement("input");
          o.type = "number", o.value = this.styles.strokeWidth, o.min = 1, o.max = 10, o.addEventListener("input", () => {
            this.updateLayerStyle(s, { fillColor: i.value, strokeColor: r.value, strokeWidth: o.value });
          }), t.appendChild(i), t.appendChild(r), t.appendChild(o);
        }
        addLayerWithControls(t, e, s) {
          const i = new U0({ source: e, style: s || ((d) => this.getStyle(d.getGeometry().getType())) });
          this.map.addLayer(i), this.vectorLayers.push(i);
          const r = document.createElement("div");
          r.classList.add("layer-toggle");
          const o = document.createElement("input");
          o.type = "checkbox", o.checked = !0, o.addEventListener("change", () => {
            i.setVisible(o.checked);
          });
          const a = document.createElement("label");
          a.textContent = t;
          const h = document.createElement("div");
          h.classList.add("color-pickers");
          const l = this.createColorInput("Fill", this.styles.fillColor, (d) => {
            this.styles.fillColor = d, i.setStyle(this.getStyle("Polygon"));
          }), u = this.createColorInput("Stroke", this.styles.strokeColor, (d) => {
            this.styles.strokeColor = d, i.setStyle(this.getStyle("Polygon"));
          }), c = this.createNumberInput("Width", this.styles.strokeWidth, (d) => {
            this.styles.strokeWidth = d, i.setStyle(this.getStyle("Polygon"));
          });
          h.appendChild(l), h.appendChild(u), h.appendChild(c), r.appendChild(o), r.appendChild(a), this.shadowRoot.getElementById("data-toggle").appendChild(r);
        }
        createColorInput(t, e, s) {
          const i = document.createElement("div");
          i.style.marginBottom = "5px";
          const r = document.createElement("span");
          r.textContent = `${t} Color: `;
          const o = document.createElement("input");
          return o.type = "color", o.value = e, o.addEventListener("input", (a) => s(a.target.value)), i.appendChild(o), i;
        }
        createNumberInput(t, e, s) {
          const i = document.createElement("div");
          i.style.marginBottom = "5px";
          const r = document.createElement("span");
          r.textContent = `${t}: `;
          const o = document.createElement("input");
          return o.type = "number", o.value = e, o.min = 1, o.addEventListener("input", (a) => s(Number(a.target.value))), i.appendChild(o), i;
        }
        onDragOver(t) {
          t.preventDefault(), this.shadowRoot.getElementById("drop-zone").classList.add("dragover");
        }
        onDragLeave() {
          this.shadowRoot.getElementById("drop-zone").classList.remove("dragover");
        }
        onDrop(t) {
          t.preventDefault(), this.shadowRoot.getElementById("drop-zone").classList.remove("dragover");
          const e = [...t.dataTransfer.files], s = e.find((o) => o.name.endsWith(".gml")), i = e.find((o) => o.name.endsWith(".xml")), r = e.find((o) => o.name.endsWith(".sld"));
          if (s || r || i) {
            const o = document.createElement("input");
            o.type = "file", o.files = new DataTransfer().files, o.dispatchEvent(new Event("change", { bubbles: !0 })), this.uploadFiles({ target: { files: e } });
          }
        }
        render() {
          return Ms`
      <div part="map-container" class="map-container" id="map-container" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}" @drop="${this.onDrop}">
        <div id="map" class="map"></div>

        <div id="data-toggle"></div>
        <div id="metadata"></div>
        

        <div id="controls-container">
          <label class="control-icon" title="Zoom In" @click="${this.zoomIn}">
            <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="var(--ds-icon-color, black)" stroke-linejoin="round" stroke-linecap="round" stroke-width="var(--ds-icon-stroke, 1)">
                <path d="M0.5 14.5H28.5M14.5 0.5L14.5 28.5"/>
              </g>
            </svg>
          </label>
          <label class="control-icon" title="Zoom Out" @click="${this.zoomOut}">
            <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="var(--ds-icon-color, black)" stroke-linejoin="round" stroke-linecap="round" stroke-width="var(--ds-icon-stroke, 1)">
                <path d="M0.5 14.5H28.5"/>
              </g>
            </svg>
          </label>
          <label class="control-icon" id="drop-zone" title="Upload Files">
            <input type="file" multiple @change="${this.uploadFiles}"/>
            <svg class="ds-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="var(--ds-icon-color, black)" stroke-linecap="round" fill="none" stroke-width="var(--ds-icon-stroke, 1)">
                <path d="M1.5 26.5H27.5"/>
                <path d="M2 13.0858L13.7929 1.29292C14.1834 0.902398 14.8166 0.902399 15.2071 1.29292L27 13.0858M14.5 1.08582L14.5 20.4999"/>
              </g>
            </svg>
          </label>
        </div>
        <div id="compass-container">
          <svg class="ds-icon" width="40" height="40" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.5" r="15" fill="var(--c8, black)" stroke="var(--white, white)" stroke-width="var(--ds-icon-stroke, 1)"/>
            <g stroke="var(--white, white)" stroke-linecap="round" stroke-linejoin="round">
              <path id="west" d="M3.9 16.79L7.12 15.5L3.9 14.21"/>
              <path id="east" d="M23.88 16.79L27.1 14.21M25.81 16.79H25.16C24.45 16.79 23.88 16.21 23.88 15.5C23.88 14.79 24.45 14.21 25.16 14.21H25.81C26.52 14.21 27.1 14.79 27.1 15.5C27.1 16.21 26.52 16.79 25.81 16.79Z"/>
              <path id="south" d="M14.21 26.46C14.21 26.81 14.5 27.1 14.86 27.1H16.06C16.46 27.1 16.79 26.78 16.79 26.38C16.79 26.05 16.56 25.76 16.24 25.68L14.76 25.3C14.44 25.22 14.21 24.93 14.21 24.6C14.21 24.2 14.54 23.88 14.93 23.88H16.14C16.5 23.88 16.79 24.17 16.79 24.52"/>
              <path id="north" d="M14.21 7.12L14.22 3.9L16.79 7.12V3.9"/>
            </g>
            <path id="north-pointer" d="M12.13 15.49C12.12 15.02 12.29 14.72 12.45 14.41L14.96 9.4C15.15 8.99 15.8 9.01 15.99 9.37L18.63 14.65C18.73 14.87 18.85 15.16 18.84 15.49L17.21 15.49C17.21 15.49 17.12 13.78 15.49 13.77C13.86 13.76 13.75 15.49 13.75 15.49L12.13 15.49Z" fill="var(--r5, red)"/>
            <path id="south-pointer" d="M12.12 15.5C12.12 15.96 12.28 16.26 12.44 16.58L14.95 21.58C15.14 21.99 15.79 21.97 15.98 21.61L18.62 16.33C18.73 16.12 18.84 15.82 18.83 15.49L17.2 15.49C17.2 15.49 17.12 17.2 15.48 17.21C13.85 17.22 13.75 15.5 13.75 15.5L12.12 15.5Z" fill="var(--white, white)"/>
            <path d="M5.19 5.19L7.77 7.77M25.81 5.19L23.23 7.77M25.81 25.81L23.23 23.23M5.19 25.81L7.77 23.23" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--ds-icon-stroke, 1)"/>
          </svg>
        </div>
      </div>

      <a href="#map-example" role="button">MapExample</a>
      <a href="#map-template" role="button">MapTemplate</a>
      <a href="#map-viewer" role="button">Kort</a>
    `;
        }
      }
      xn(Kl, "styles", ja`

      :host {
          display: block;
          width: var(--map-viewer-width, 100%);
          height: var(--map-viewer-height, 100%);
          border: var(--map-viewer-border, none);
          box-shadow: var(--map-viewer-box-shadow, none);
      }

      .map-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
      }

      .map {
          width: 100%;
          height: 100%;
      }


      #compass-container {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          padding: 8px;
          width: 3rem;
          height: 3rem;
      }

      #controls-container {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .control-icon {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
      }

      #data-toggle {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      button:hover, label:hover {
          transform: scale(1.1);
      }

      label svg {
          width: 20px;
          height: 20px;
          fill: #333;
      }

      input[type="file"] {
          display: none;
      }
  `), xn(Kl, "properties", { gmlFile: { type: String, reflect: !0 }, xmlFile: { type: String, reflect: !0 }, sldFile: { type: String, reflect: !0 } });
      class Hl extends Bn {
        constructor() {
          super(), this.gmlFile = "", this.xmlFile = "", this.sldFile = "";
        }
        updated(t) {
          (t.has("gmlFile") || t.has("xmlFile") || t.has("sldFile")) && console.log("Updated Properties:", this.gmlFile, this.xmlFile, this.sldFile);
        }
        render() {
          return console.log("Rendering with:", this.gmlFile, this.xmlFile, this.sldFile), Ms`
      <map-viewer
        .gmlFile="${this.gmlFile}"
        .xmlFile="${this.xmlFile}"
        .sldFile="${this.sldFile}">
      </map-viewer>
    `;
        }
      }
      xn(Hl, "styles", ja`
      /* Add your styles here */
  `), xn(Hl, "properties", { gmlFile: { type: String, reflect: !0 }, xmlFile: { type: String, reflect: !0 }, sldFile: { type: String, reflect: !0 } });
      class Xf extends Bn {
        render() {
          const t = "./examples/2019/713/data_demo.gml", e = "./examples/2019/713/metadata.xml", s = "./examples/2019/713/styles.sld";
          return console.log("MapExample XML", e), console.log("MapExample GML", t), console.log("MapExample SLD", s), Ms`
          <map-viewer
              .gmlFile="${t}"
              .xmlFile="${e}"
              .sldFile="${s}">
          </map-viewer>
          <a href="#map-example" role="button">MapExample</a>
          <a href="#map-template" role="button">MapTemplate</a>
          <a href="#map-viewer" role="button">MapViewer</a>
      `;
        }
      }
      xn(Xf, "styles", ja`
  
  `);
      function t2(n) {
        if (n === "#map-viewer") return Ms`
    <map-viewer></map-viewer>`;
        if (n === "#map-example") return Ms`
    <map-example></map-example>`;
        if (n === "#map-template") return Ms`
    <map-template></map-template>`;
      }
      class qf extends Bn {
        constructor() {
          super(), this.route = window.location.hash || "#map-viewer", this._setupRouting();
        }
        _setupRouting() {
          window.addEventListener("hashchange", () => {
            this.route = window.location.hash || "#map-viewer";
          });
        }
        render() {
          return Ms`
      <main>
        ${t2(this.route)} <!-- Pass the current route to the router -->
      </main>
    `;
        }
        createRenderRoot() {
          return this;
        }
      }
      xn(qf, "properties", { route: { type: String } }), customElements.define("main-component", qf), customElements.define("map-viewer", Kl), customElements.define("map-template", Hl), customElements.define("map-example", Xf);
    });
  });
});
//# sourceMappingURL=map-viewer-plugin.es.js.map
