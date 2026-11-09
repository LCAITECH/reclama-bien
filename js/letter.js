/* Reclamá Bien · arma las cartas y el "dónde presentarlo" según país e idioma. Sin red: todo local. */
window.RBL = (function () {
  "use strict";
  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (m, k) { return o[k] != null ? o[k] : m; }); }
  function tx(v, lang) { return v == null ? "" : typeof v === "string" ? v : (v[lang] || v.es); }
  function cat(C, d) {
    var c = C.cat;
    if (d.rubro === "servicios") return c[d.sub] || c.servicios || c.general;
    if (d.rubro === "otro") return c.general;
    return c[d.rubro] || c.general;
  }
  function orgs(C, d, lang) { return cat(C, d).orgs.map(function (o) { return tx(o, lang); }); }
  function fin(s) { return s.replace(/\.\s*$/, "") + "."; }
  function low(s) { return /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ' ]/.test(s) && !/^I /.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s; }

  function lawLine(C, L, lang) { return C.law ? fill(L.law, { x: tx(C.law.cite, lang) }) : L.lawNone; }
  function extra(C, d, lang) {
    return (C.clauses || []).filter(function (cl) {
      return cl.cats.indexOf(d.rubro) > -1 && (!cl.sub || cl.sub === d.sub) && cl.re.test(d.match);
    }).map(function (cl) { return "\n" + cl[lang] + "\n"; }).join("");
  }
  function prior(d, L) {
    if (d.nro) return fill(L.priorYes, { f: d.fechaPrevio ? fill(L.priorOn, { x: d.fechaPrevio }) : "", x: d.nro });
    return L.priorNo;
  }
  function clientLn(d, L, lbl) { return d.cliente ? (lbl || L.client) + ": " + d.cliente + ".\n" : ""; }
  function amountLn(d, L) { return d.monto ? fill(L.amount, { x: d.monto }) + "\n" : ""; }
  function sign(C, d, L, lang) {
    var t = tx(C.id, lang);
    return "\n" + fill(L.sign, { n: d.nombre, id: t ? fill(L.idLine, { t: t, x: d.dni }) : "", mail: d.email });
  }

  function company(C, d, lang) {
    var L = RB_T[lang].L;
    var o = { e: d.empresa, mail: d.email, s: L.sub[d.sub] };
    var lbl = d.rubro === "compra" ? L.order : d.rubro === "salud" ? L.member : null;
    return fill(L.subject, { m: d.motivo, n: d.nombre }) + "\n\n" +
      fill(L.place, { d: d.hoy }) + "\n\n" + fill(L.dear, { e: d.empresa }) + "\n\n" +
      fill(L.intro[d.rubro], o) + "\n" + clientLn(d, L, lbl) + "\n" +
      fill(L.factDate, { x: d.fecha }) + "\n" + fill(L.what, { x: fin(d.quePaso) }) + "\n" + amountLn(d, L) +
      fill(L.prior, { x: prior(d, L) }) + "\n\n" +
      fill(L.ask, { x: low(d.pedido) }) + "\n" + lawLine(C, L, lang) + "\n" + extra(C, d, lang) +
      "\n" + fill(L.close, { mail: d.email, o: orgs(C, d, lang).join(RB_T[lang].or) }) + "\n" + sign(C, d, L, lang);
  }

  function agency(C, d, lang) {
    var L = RB_T[lang].L, t = tx(C.id, lang);
    return fill(L.aSubject, { e: d.empresa }) + "\n\n" +
      fill(L.aTo, { x: orgs(C, d, lang)[0] }) + "\n" + fill(L.place, { d: d.hoy }) + "\n\n" +
      fill(L.aIntro, { n: d.nombre, id: t ? fill(L.aIdIn, { t: t, x: d.dni }) : "", e: d.empresa }) + "\n\n" +
      clientLn(d, L) + fill(L.factDate, { x: d.fecha }) + "\n" + fill(L.facts, { x: fin(d.quePaso) }) + "\n" + amountLn(d, L) + "\n" +
      fill(L.aPrev, { f: d.fechaPrevio || L.aDatePh, nro: d.nro ? fill(L.aNro, { x: d.nro }) : L.aNroPh }) + "\n\n" +
      fill(L.aAsk, { x: low(d.pedido) }) + "\n" + lawLine(C, L, lang) + "\n" + extra(C, d, lang) +
      "\n" + L.attach + "\n" + sign(C, d, L, lang);
  }

  function where(C, d, lang) {
    var T = RB_T[lang], c = cat(C, d), steps = [T.w1], links = [], plazos = [];
    if (C.first) steps.push(tx(C.first, lang));
    steps.push(fill(T.w2, { x: "<b>" + orgs(C, d, lang).join("</b>" + T.or + "<b>") + "</b>" }));
    if (C.local) steps.push(tx(C.local, lang));
    steps.push(T.wKeep);
    c.links.concat(C.local ? C.local.links : []).forEach(function (k) {
      var l = C.links[k]; if (l) links.push({ t: l.t, u: l.u, n: tx(l.n, lang) });
    });
    if (C.law) links.push({ t: C.law.t, u: C.law.u, n: lang === "en" ? "Official text of the law." : "Texto oficial de la ley." });
    (c.plazos || []).forEach(function (p) { plazos.push({ t: p[lang], s: p.s }); });
    return { title: fill(T.whereTitle, { x: tx(C.name, lang) }), steps: steps, links: links, plazos: plazos };
  }

  function demo(C, lang) {
    var o = orgs(C, { rubro: "banco" }, lang).join(RB_T[lang].or);
    return RB_T[lang].L.demo.map(function (l) { return fill(l, { o: o }); });
  }

  return { company: company, agency: agency, where: where, demo: demo, tx: tx, fill: fill };
})();
