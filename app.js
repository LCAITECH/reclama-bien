/* Reclamá Bien · LCA ITECH. Todo corre en el navegador: no se envía ni se guarda nada (solo idioma y país en localStorage). */
(function () {
  "use strict";

  /* Link de Reclami en la app Grok Bot. Cuando exista el link para compartir, cambiarlo aquí (y nada más). */
  var RECLAMI_URL = "#pro";

  /* ---------- Íconos (SVG inline, sin librerías) ---------- */
  var S0 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">';
  var I = {
    banco: S0 + '<path d="M3 10l9-6 9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8"/><path d="M3 21h18"/></svg>',
    fintech: S0 + '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/><path d="M9.5 9.5h5M12 7.5v6"/></svg>',
    tele: S0 + '<path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M5.5 12.5a9.5 9.5 0 0 1 13 0"/><path d="M8.7 16a5 5 0 0 1 6.6 0"/><circle cx="12" cy="19.5" r="1"/></svg>',
    servicios: S0 + '<path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z"/></svg>',
    compra: S0 + '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
    apps: S0 + '<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v3H3z"/><circle cx="7.5" cy="13" r=".8"/><circle cx="16.5" cy="13" r=".8"/></svg>',
    salud: S0 + '<path d="M12 21s-7.5-4.6-9.3-9.4C1.4 8 3.6 4.5 7.2 4.5c2 0 3.4 1.1 4.8 2.8 1.4-1.7 2.8-2.8 4.8-2.8 3.6 0 5.8 3.5 4.5 7.1C19.5 16.4 12 21 12 21z"/><path d="M12 10v5M9.5 12.5h5"/></svg>',
    otro: S0 + '<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/></svg>'
  };
  var R = window.RB_RUBROS, ORDER = window.RB_ORDER, tx = RBL.tx, fill = RBL.fill;

  /* ---------- Estado ---------- */
  var S = { rubro: null, motivo: -1, pedido: -1, etapa: "empresa", step: 1, lang: "es", country: "AR" };
  var $ = function (id) { return document.getElementById(id); };
  function v(id) { return ($(id).value || "").trim(); }
  function T() { return RB_T[S.lang]; }
  function C() { return RB.C[S.country]; }
  function store(k, val) { try { localStorage.setItem(k, val); } catch (e) { /* modo privado */ } }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* Idioma: guardado > navegador. País: guardado > región de navigator.language > AR (sin geo-IP). */
  var navLang = (navigator.language || "es").toLowerCase();
  S.lang = load("rb_lang") || (navLang.indexOf("en") === 0 ? "en" : "es");
  if (!RB_T[S.lang]) S.lang = "es";
  var region = (navigator.language || "").split("-")[1];
  S.country = load("rb_country") || (region && RB.C[region.toUpperCase()] ? region.toUpperCase() : "AR");
  if (!RB.C[S.country]) S.country = "AR";

  /* ---------- Traducción de la página ---------- */
  function applyLang() {
    var t = T();
    document.documentElement.lang = t.htmlLang;
    document.title = t.title;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { var k = el.getAttribute("data-i18n"); if (t[k] != null) el.textContent = k === "eyebrow" ? fill(t[k], { n: RB.order.length }) : t[k]; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { var k = el.getAttribute("data-i18n-html"); if (t[k] != null) el.innerHTML = t[k]; });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { var k = el.getAttribute("data-i18n-ph"); if (t[k] != null) el.placeholder = t[k]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { var k = el.getAttribute("data-i18n-aria"); if (t[k] != null) el.setAttribute("aria-label", t[k]); });
    $("brandLink").setAttribute("aria-label", t.brand + " by LCA ITECH");
    $("mailCta").href = "mailto:itech.lca@gmail.com?subject=" + encodeURIComponent(t.mailSubject);
    $("heroFile").textContent = t.heroFile;
    document.querySelectorAll(".lang__btn").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === S.lang ? "true" : "false"); });
    renderCountries(); renderRubros(); applyCountry();
    if (S.rubro) renderChipsAll();
    hintUpdate();
    $("appTitle").textContent = t["t" + S.step];
    if (S.step === 3) generate(true);
    demoRun();
  }
  function setLang(l) { S.lang = l; store("rb_lang", l); applyLang(); }
  document.querySelectorAll(".lang__btn").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });

  /* ---------- País ---------- */
  function renderCountries() {
    var sel = $("country");
    sel.innerHTML = RB.order.map(function (c) { var x = RB.C[c]; return '<option value="' + c + '">' + x.flag + " " + tx(x.name, S.lang) + "</option>"; }).join("");
    sel.value = S.country;
  }
  function applyCountry() {
    var id = tx(C().id, S.lang);
    $("dniWrap").hidden = !id;
    $("dniLabel").innerHTML = fill(T().idOpt, { x: id || "" });
  }
  $("country").addEventListener("change", function () {
    S.country = this.value; store("rb_country", S.country); applyCountry();
    if (S.step === 3) generate(true);
    demoRun();
  });

  /* ---------- Paso 1 ---------- */
  var rubrosEl = $("rubros");
  function renderRubros() {
    rubrosEl.innerHTML = "";
    ORDER.forEach(function (k) {
      var r = R[k][S.lang], b = document.createElement("button");
      b.type = "button"; b.className = "rubro" + (S.rubro === k ? " is-sel" : ""); b.setAttribute("role", "listitem"); b.dataset.k = k;
      b.innerHTML = '<span class="rubro__icon">' + I[R[k].icon] + "</span><b>" + r.label + "</b><small>" + r.sub + "</small>";
      b.addEventListener("click", function () { pickRubro(k); });
      rubrosEl.appendChild(b);
    });
  }
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function detect(text) {
    var t = " " + norm(text) + " ", best = null, score = 0;
    ORDER.forEach(function (k) {
      var sc = 0;
      R[k].kw.forEach(function (w) {
        var n = norm(w);
        var hit = n.length <= 4 ? new RegExp("[^a-z0-9]" + n.replace(/[&]/g, "\\&") + "[^a-z0-9]").test(t) : t.indexOf(n) > -1;
        if (hit) sc += n.length > 6 ? 2 : 1;
      });
      if (sc > score) { score = sc; best = k; }
    });
    return best;
  }
  var free = $("freeText"), hint = $("freeHint");
  function hintUpdate() {
    var t = T(), k = detect(free.value);
    if (free.value.trim().length < 4) { hint.textContent = t.freeHint; hint.className = "free__hint"; return; }
    if (k) { hint.textContent = fill(t.freeHit, { x: R[k][S.lang].label }); hint.className = "free__hint is-hit"; }
    else { hint.textContent = t.freeMiss; hint.className = "free__hint"; }
  }
  free.addEventListener("input", hintUpdate);
  $("freeGo").addEventListener("click", function () {
    var txt = free.value.trim();
    if (!txt) { free.focus(); return; }
    $("detalle").value = txt;
    pickRubro(detect(txt) || "otro");
  });

  function pickRubro(k) {
    S.rubro = k; S.motivo = -1; S.pedido = -1;
    Array.prototype.forEach.call(rubrosEl.children, function (c) { c.classList.toggle("is-sel", c.dataset.k === k); });
    renderChipsAll();
    $("subtipoWrap").hidden = k !== "servicios";
    if (k === "servicios") {
      var t = norm($("detalle").value);
      if (/gas|metrogas|naturgy|camuzzi|ecogas/.test(t)) $("subtipo").value = "gas";
      else if (/agua|water|aysa|cloaca|alcantarill/.test(t)) $("subtipo").value = "agua";
    }
    go(2);
  }
  function renderChipsAll() {
    var r = R[S.rubro][S.lang];
    $("rubroPill").innerHTML = '<span style="width:16px;height:16px;display:inline-grid">' + I[R[S.rubro].icon] + "</span>" + r.label;
    renderChips("motivos", r.motivos, "motivo");
    renderChips("pedidos", r.pedidos, "pedido");
  }
  function renderChips(id, list, key) {
    var el = $(id); el.innerHTML = "";
    list.forEach(function (txt, i) {
      var c = document.createElement("button"), on0 = S[key] === i;
      c.type = "button"; c.className = "chip" + (on0 ? " is-on" : ""); c.textContent = txt;
      c.setAttribute("aria-pressed", on0 ? "true" : "false");
      c.addEventListener("click", function () {
        var on = S[key] !== i;
        S[key] = on ? i : -1;
        Array.prototype.forEach.call(el.children, function (x) { var s = x === c && on; x.classList.toggle("is-on", s); x.setAttribute("aria-pressed", s ? "true" : "false"); });
      });
      el.appendChild(c);
    });
  }

  /* ---------- Navegación ---------- */
  function go(n, noScroll) {
    S.step = n;
    [1, 2, 3].forEach(function (i) {
      $("step" + i).classList.toggle("is-on", i === n);
      var li = document.querySelector('.stepper li[data-s="' + i + '"]');
      li.classList.toggle("is-active", i === n);
      li.classList.toggle("is-done", i < n);
    });
    $("appTitle").textContent = T()["t" + n];
    if (noScroll) return;
    var top = $("app").getBoundingClientRect().top + window.scrollY - 64;
    if (Math.abs(window.scrollY - top) > 40) window.scrollTo({ top: top, behavior: "smooth" });
  }
  document.querySelectorAll("[data-go]").forEach(function (b) { b.addEventListener("click", function () { go(+b.dataset.go); }); });

  /* ---------- Generación ---------- */
  function fmtDate(d) {
    if (!d) return ""; var p = d.split("-");
    return S.lang === "en" ? p[1] + "/" + p[2] + "/" + p[0] : p[2] + "/" + p[1] + "/" + p[0];
  }
  function hoy() { var d = new Date(); return fmtDate(d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)); }
  function datos() {
    var r = R[S.rubro], loc = r[S.lang], ph = T().L.ph;
    var F = function (val, k) { return val ? val : "[" + ph[k] + "]"; };
    var motivo = S.motivo > -1 ? loc.motivos[S.motivo] : "", det = v("detalle");
    var qp = motivo && det ? motivo + ". " + det : (motivo || det);
    var ped = [S.pedido > -1 ? loc.pedidos[S.pedido] : "", v("pedidoOtro")].filter(Boolean).join(T().L.also);
    var esText = (S.motivo > -1 ? r.es.motivos[S.motivo] : "") + " " + (S.pedido > -1 ? r.es.pedidos[S.pedido] : "") + " " + v("pedidoOtro") + " " + det;
    return {
      rubro: S.rubro, sub: $("subtipo").value, hoy: hoy(), match: norm(esText),
      empresa: F(v("empresa"), "empresa"), fecha: F(fmtDate(v("fecha")), "fecha"), monto: v("monto"),
      cliente: v("cliente"), nro: v("nroPrevio"), fechaPrevio: fmtDate(v("fechaPrevio")),
      quePaso: F(qp, "quePaso"), motivo: motivo || loc.label, pedido: F(ped, "pedido"),
      nombre: F(v("nombre"), "nombre"), dni: F(v("dni"), "id"), email: F(v("email"), "mail")
    };
  }
  var cache = { empresa: "", organismo: "" };
  function generate(keepEtapa) {
    if (!S.rubro) return;
    var d = datos();
    cache.empresa = RBL.company(C(), d, S.lang);
    cache.organismo = RBL.agency(C(), d, S.lang);
    renderWhere(RBL.where(C(), d, S.lang));
    setEtapa(keepEtapa ? S.etapa : "empresa");
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function renderWhere(w) {
    $("whereTitle").textContent = w.title;
    $("whereSteps").innerHTML = w.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    $("whereLinks").innerHTML = w.links.map(function (l) {
      return '<li><a href="' + esc(l.u) + '" target="_blank" rel="noopener"><b>' + esc(l.t) + "</b><small>" + esc(l.n) + "</small><span>" + esc(l.u.replace(/^https?:\/\//, "")) + "</span></a></li>";
    }).join("");
    $("plazosWrap").hidden = !w.plazos.length;
    $("plazos").innerHTML = w.plazos.map(function (p) { return "<li>" + esc(p.t) + ' <a href="' + esc(p.s) + '" target="_blank" rel="noopener">' + T().source + "</a></li>"; }).join("");
  }
  $("genBtn").addEventListener("click", function () {
    if (S.motivo < 0 && !v("detalle")) { toast(T().toastNeed); $("detalle").focus(); return; }
    generate(false); go(3);
  });
  function setEtapa(e) {
    S.etapa = e;
    document.querySelectorAll(".tab").forEach(function (t) { var on = t.dataset.etapa === e; t.classList.toggle("is-on", on); t.setAttribute("aria-selected", on ? "true" : "false"); });
    $("doc").value = cache[e];
    $("docName").textContent = e === "empresa" ? T().fileCompany : T().fileAgency;
    $("etapaHint").textContent = e === "empresa" ? T().hintCompany : T().hintAgency;
  }
  document.querySelectorAll(".tab").forEach(function (t) { t.addEventListener("click", function () { cache[S.etapa] = $("doc").value; setEtapa(t.dataset.etapa); }); });
  $("doc").addEventListener("input", function () { cache[S.etapa] = $("doc").value; });

  $("copyBtn").addEventListener("click", function () {
    var txt = $("doc").value;
    function fallback() { var ta = $("doc"); ta.focus(); ta.select(); try { document.execCommand("copy"); toast(T().copied); } catch (e) { toast(T().copyFail); } }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(function () { toast(T().copied); }, fallback);
    else fallback();
  });
  $("dlBtn").addEventListener("click", function () {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([$("doc").value], { type: "text/plain;charset=utf-8" }));
    a.download = $("docName").textContent;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast(T().downloaded);
  });
  $("resetBtn").addEventListener("click", function () {
    document.querySelectorAll("#step2 input, #step2 textarea").forEach(function (el) { el.value = ""; });
    free.value = ""; hintUpdate();
    S.rubro = null; S.motivo = S.pedido = -1; cache = { empresa: "", organismo: "" };
    Array.prototype.forEach.call(rubrosEl.children, function (c) { c.classList.remove("is-sel"); });
    go(1);
  });

  var tt;
  function toast(msg) { var t = $("toast"); t.textContent = msg; t.classList.add("is-on"); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove("is-on"); }, 1800); }

  /* ---------- Hero: reclamo que se escribe solo ---------- */
  var term = $("heroTerm"), timer = null;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function demoRun() {
    var demo = RBL.demo(C(), S.lang);
    clearTimeout(timer);
    if (reduce || /[?&]static/.test(location.search)) { term.innerHTML = demo.join("\n"); return; }
    var li = 0;
    (function tick() {
      if (li > demo.length) return;
      term.innerHTML = demo.slice(0, li).join("\n") + '<span class="caret"></span>';
      li++;
      timer = setTimeout(tick, li === 1 ? 300 : 260);
    })();
  }

  $("startBtn").addEventListener("click", function (e) { e.preventDefault(); go(1); });
  $("reclamiCta").href = RECLAMI_URL;
  if (/^https?:/.test(RECLAMI_URL)) { $("reclamiCta").target = "_blank"; $("reclamiCta").rel = "noopener"; }
  applyLang();
})();
