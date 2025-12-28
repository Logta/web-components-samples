import { d as g, c as _, p as y, a as k, b as w, s as z, e as C, u as S, f as j, g as E, h as n, t as q, i as A, j as B, k as f, l as r, m as D, n as a, r as l, o as F } from "./custom-element-I89mP688.js";
var G = E('<div class="container svelte-htsxo4"><div class="counter svelte-htsxo4"><div class="label svelte-htsxo4">Svelte Counter:</div> <button type="button" class="button svelte-htsxo4">-</button> <span class="count svelte-htsxo4"> </span> <button type="button" class="button svelte-htsxo4">+</button></div></div>');
const H = {
  hash: "svelte-htsxo4",
  code: ".container.svelte-htsxo4 {display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #ff3e00;border-radius:8px;background-color:#f9f9f9;font-family:system-ui, -apple-system, sans-serif;}.counter.svelte-htsxo4 {display:flex;align-items:center;gap:1rem;}.label.svelte-htsxo4 {font-size:1rem;font-weight:600;color:#333;margin-bottom:0.5rem;}.button.svelte-htsxo4 {width:40px;height:40px;font-size:1.5rem;border:2px solid #ff3e00;background-color:#ff3e00;color:white;border-radius:4px;cursor:pointer;transition:background-color 0.2s;}.button.svelte-htsxo4:hover {background-color:#e63900;}.button.svelte-htsxo4:active {background-color:#cc3300;}.count.svelte-htsxo4 {font-size:2rem;font-weight:bold;color:#ff3e00;min-width:3rem;text-align:center;}"
};
function I(c, i) {
  y(i, !0), k(c, H);
  let t = w(i, "count", 15, 0), e = z(C(t()));
  S(() => {
    j(e, t(), !0);
  });
  function v() {
    f(e), t(r(e));
  }
  function p() {
    f(e, -1), t(r(e));
  }
  var x = {
    get count() {
      return t();
    },
    set count(m = 0) {
      t(m), D();
    }
  }, s = G(), u = a(s), d = n(a(u), 2);
  d.__click = p;
  var o = n(d, 2), b = a(o, !0);
  l(o);
  var h = n(o, 2);
  return h.__click = v, l(u), l(s), q(() => F(b, r(e))), A(c, s), B(x);
}
g(["click"]);
customElements.define("svelte-counter", _(I, { count: {} }, [], [], !0));
export {
  I as default
};
