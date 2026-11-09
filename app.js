/* Reclamá Bien · LCA ITECH. Todo corre en el navegador: no se envía ni se guarda nada. */
(function () {
  "use strict";

  /* ---------- Íconos (SVG inline, sin librerías) ---------- */
  var I = {
    banco: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-6 9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8"/><path d="M3 21h18"/></svg>',
    fintech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/><path d="M9.5 9.5h5M12 7.5v6"/></svg>',
    tele: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M5.5 12.5a9.5 9.5 0 0 1 13 0"/><path d="M8.7 16a5 5 0 0 1 6.6 0"/><circle cx="12" cy="19.5" r="1"/></svg>',
    servicios: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z"/></svg>',
    compra: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
    salud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7.5-4.6-9.3-9.4C1.4 8 3.6 4.5 7.2 4.5c2 0 3.4 1.1 4.8 2.8 1.4-1.7 2.8-2.8 4.8-2.8 3.6 0 5.8 3.5 4.5 7.1C19.5 16.4 12 21 12 21z"/><path d="M12 10v5M9.5 12.5h5"/></svg>',
    otro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4V5z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/></svg>'
  };

  /* ---------- Links oficiales verificados (nov 2026) ---------- */
  var L = {
    vfu: { t: "Ventanilla Federal Única de Defensa del Consumidor", u: "https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor", n: "Gratis y en línea. Deriva tu caso a tu provincia o municipio." },
    bcra: { t: "BCRA: reclamo por productos o servicios financieros", u: "https://www.bcra.gob.ar/reclamo-productos-servicios-financieros/", n: "Segunda instancia, después del reclamo a la entidad." },
    bcraFraude: { t: "BCRA: reclamo por fraude o estafa", u: "https://www.bcra.gob.ar/realizar-un-reclamo-ante-el-banco-central-por-fraude-o-estafa/", n: "Operaciones que no reconocés o accesos no autorizados." },
    enacomNet: { t: "ENACOM: reclamos por internet", u: "https://enacom.gob.ar/tramites/reclamos-problemas-inconvenientes-tecnicos-servicio-internet-enacom_t60", n: "Se gestiona por Trámites a Distancia (TAD)." },
    enacomFija: { t: "ENACOM: reclamos por telefonía fija", u: "https://enacom.gob.ar/tramites/reclamos-problemas-tecnicos-telefonia-fija-enacom_t112", n: "Reclamo previo a la empresa obligatorio." },
    enre: { t: "ENReGE (ex ENRE): reclamos por luz, Edenor y Edesur", u: "https://www.argentina.gob.ar/enre/gestion-de-reclamos", n: "Línea gratuita 0800 345 6000." },
    enargas: { t: "ENReGE (ex ENARGAS): reclamos por gas", u: "https://www.enargas.gob.ar/secciones/preguntas-frecuentes/preguntas-frecuentes-gas-por-redes.php", n: "Oficina virtual, formulario o reclamos@enargas.gov.ar." },
    enrege: { t: "ENReGE: atención virtual luz y gas", u: "https://www.argentina.gob.ar/enrege/atencion-virtual", n: "El ente que unificó ENRE y ENARGAS." },
    eras: { t: "ERAS: reclamos por agua y cloacas (AySA)", u: "https://www.argentina.gob.ar/eras/reclamos-al-servicio-o-las-tarifas", n: "Primero reclamá ante AySA." },
    sss: { t: "Superintendencia de Servicios de Salud: denuncia por cobertura", u: "https://www.argentina.gob.ar/servicio/denuncia-por-problematicas-de-cobertura-prestacional", n: "Prepagas y obras sociales." },
    caba: { t: "Defensa del Consumidor CABA: denuncia online", u: "https://buenosaires.gob.ar/tramites/denuncia-online-defensa-al-consumidor", n: "Si el consumo fue en la Ciudad. Requiere miBA." },
    pba: { t: "Defensa del Consumidor Provincia de Buenos Aires", u: "https://gba.gob.ar/defensaconsumidores", n: "OMIC de tu municipio o Ventanilla Federal. Línea 148." }
  };
  var SRC = {
    bcra: "https://www.bcra.gob.ar/reclamo-productos-servicios-financieros/",
    enre: "https://www.argentina.gob.ar/enre/preguntas-frecuentes-pagina",
    enreCorte: "https://www.argentina.gob.ar/servicio/reclamar-por-falta-de-suministro-electrico",
    gas: "https://www.enargas.gob.ar/secciones/preguntas-frecuentes/preguntas-frecuentes-gas-por-redes.php",
    ley: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/638/texact.htm"
  };

  /* ---------- Rubros ---------- */
  var RUBROS = {
    banco: { label: "Banco o tarjeta", sub: "Cargos, comisiones, cajeros, bajas", icon: "banco",
      motivos: ["Cargo que no reconozco", "Comisión no informada", "El cajero no me dio la plata", "No me dan la baja de la tarjeta o cuenta", "Deuda mal calculada", "Seguro o servicio que no pedí", "Fraude o estafa"],
      pedidos: ["Devolución del dinero", "Baja del producto", "Anulación del cargo", "Explicación por escrito"],
      kw: ["banco", "tarjeta", "visa", "mastercard", "amex", "galicia", "santander", "bbva", "macro", "nacion", "provincia", "icbc", "hsbc", "credicoop", "supervielle", "patagonia", "comision", "cajero", "homebanking", "resumen", "debito", "prestamo"] },
    fintech: { label: "Fintech o billetera", sub: "Plata trabada, cuentas bloqueadas", icon: "fintech",
      motivos: ["Plata trabada o retenida", "Transferencia que no llegó", "Cuenta bloqueada", "La tarjeta no funciona", "Soporte que no responde", "Cobro que no reconozco"],
      pedidos: ["Liberar o devolver el dinero", "Desbloquear la cuenta", "Tarjeta nueva o reposición", "Explicación por escrito"],
      kw: ["mercado pago", "mercadopago", "uala", "ualá", "brubank", "naranja x", "naranjax", "lemon", "belo", "personal pay", "modo", "billetera", "fintech", "cuenta digital", "app", "cvu", "prex"] },
    tele: { label: "Telefonía, internet o TV", sub: "Sin servicio, bajas, cobros de más", icon: "tele",
      motivos: ["Sin servicio", "Servicio deficiente o lento", "Me cobran de más", "No me dan la baja", "Me cobran preaviso o permanencia", "El técnico nunca vino"],
      pedidos: ["Restablecer el servicio", "Baja del servicio", "Devolución o descuento", "Bonificación por días sin servicio"],
      kw: ["personal", "movistar", "claro", "telecentro", "fibertel", "flow", "directv", "telefonica", "internet", "wifi", "linea", "celular", "cable", "tv", "señal", "megas", "pia"] },
    servicios: { label: "Luz, gas o agua", sub: "Cortes, facturas, medidores", icon: "servicios",
      motivos: ["Corte de luz prolongado", "Cortes reiterados", "Factura excesiva", "Medidor mal leído", "Reconexión que no llega", "Falta de gas o de agua"],
      pedidos: ["Restablecer el servicio", "Bonificación o reintegro", "Refacturación", "Revisión del medidor"],
      kw: ["luz", "edenor", "edesur", "edelap", "epe", "epec", "gas", "metrogas", "naturgy", "camuzzi", "ecogas", "agua", "aysa", "cloaca", "medidor", "corte", "factura de luz", "electricidad"] },
    compra: { label: "Compra online", sub: "No llegó, llegó mal, devoluciones", icon: "compra",
      motivos: ["El pedido no llegó", "Llegó roto o distinto", "Devolví y no me reintegraron", "Me arrepentí de la compra", "Me rechazaron la garantía"],
      pedidos: ["Devolución del dinero", "Cambio del producto", "Entrega del pedido", "Reparación por garantía"],
      kw: ["mercado libre", "mercadolibre", "compra", "compre", "pedido", "envio", "envío", "paquete", "tienda", "garantia", "garantía", "zapatillas", "producto", "temu", "shein", "tiendanube", "devolucion", "devolución"] },
    salud: { label: "Prepaga u obra social", sub: "Coberturas, autorizaciones, cuotas", icon: "salud",
      motivos: ["Me negaron una cobertura", "Demora en una autorización", "Aumento de cuota", "Reintegro que no pagan", "Baja o cambio de plan"],
      pedidos: ["Cobertura de la prestación", "Autorización urgente", "Pago del reintegro", "Explicación por escrito"],
      kw: ["prepaga", "obra social", "osde", "swiss medical", "galeno", "medife", "omint", "ioma", "pami", "osecac", "cobertura", "autorizacion", "autorización", "reintegro", "medico", "médico"] },
    otro: { label: "Otro", sub: "Cualquier empresa o servicio", icon: "otro",
      motivos: ["No cumplieron lo prometido", "Me cobraron de más", "Producto o servicio defectuoso", "No me dan la baja", "Mala atención"],
      pedidos: ["Devolución del dinero", "Cumplimiento de lo prometido", "Baja del servicio", "Explicación por escrito"],
      kw: [] }
  };
  var ORDER = ["banco", "fintech", "tele", "servicios", "compra", "salud", "otro"];

  /* ---------- Estado (solo en memoria) ---------- */
  var S = { rubro: null, motivo: null, pedido: null, etapa: "empresa" };
  var $ = function (id) { return document.getElementById(id); };
  function v(id) { return ($(id).value || "").trim(); }

  /* ---------- Paso 1 ---------- */
  var rubrosEl = $("rubros");
  ORDER.forEach(function (k) {
    var r = RUBROS[k];
    var b = document.createElement("button");
    b.type = "button"; b.className = "rubro"; b.setAttribute("role", "listitem"); b.dataset.k = k;
    b.innerHTML = '<span class="rubro__icon">' + I[r.icon] + "</span><b>" + r.label + "</b><small>" + r.sub + "</small>";
    b.addEventListener("click", function () { pickRubro(k); });
    rubrosEl.appendChild(b);
  });

  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function detect(text) {
    var t = " " + norm(text) + " ", best = null, score = 0;
    ORDER.forEach(function (k) {
      var sc = 0;
      RUBROS[k].kw.forEach(function (w) {
        var n = norm(w);
        var hit = n.length <= 4 ? new RegExp("[^a-z0-9]" + n + "[^a-z0-9]").test(t) : t.indexOf(n) > -1;
        if (hit) sc += n.length > 6 ? 2 : 1;
      });
      if (sc > score) { score = sc; best = k; }
    });
    return best;
  }
  var free = $("freeText"), hint = $("freeHint");
  free.addEventListener("input", function () {
    var k = detect(free.value);
    if (free.value.trim().length < 4) { hint.textContent = "Escribí y detectamos el rubro solos."; hint.className = "free__hint"; return; }
    if (k) { hint.textContent = "Parece: " + RUBROS[k].label; hint.className = "free__hint is-hit"; }
    else { hint.textContent = "No lo detectamos, lo tomamos como Otro (lo podés cambiar)."; hint.className = "free__hint"; }
  });
  $("freeGo").addEventListener("click", function () {
    var txt = free.value.trim();
    if (!txt) { free.focus(); return; }
    var k = detect(txt) || "otro";
    $("detalle").value = txt;
    pickRubro(k);
  });

  function pickRubro(k) {
    S.rubro = k; S.motivo = null; S.pedido = null;
    Array.prototype.forEach.call(rubrosEl.children, function (c) { c.classList.toggle("is-sel", c.dataset.k === k); });
    var r = RUBROS[k];
    $("rubroPill").innerHTML = '<span style="width:16px;height:16px;display:inline-grid">' + I[r.icon] + "</span>" + r.label;
    renderChips("motivos", r.motivos, "motivo");
    renderChips("pedidos", r.pedidos, "pedido");
    $("subtipoWrap").hidden = k !== "servicios";
    if (k === "servicios") {
      var t = norm($("detalle").value);
      if (/gas|metrogas|naturgy|camuzzi|ecogas/.test(t)) $("subtipo").value = "gas";
      else if (/agua|aysa|cloaca/.test(t)) $("subtipo").value = "agua";
    }
    go(2);
  }

  function renderChips(id, list, key) {
    var el = $(id); el.innerHTML = "";
    list.forEach(function (txt) {
      var c = document.createElement("button");
      c.type = "button"; c.className = "chip"; c.textContent = txt;
      c.setAttribute("aria-pressed", "false");
      c.addEventListener("click", function () {
        var on = S[key] !== txt;
        S[key] = on ? txt : null;
        Array.prototype.forEach.call(el.children, function (x) { var s = x === c && on; x.classList.toggle("is-on", s); x.setAttribute("aria-pressed", s ? "true" : "false"); });
      });
      el.appendChild(c);
    });
  }

  /* ---------- Navegación ---------- */
  var TITLES = { 1: "¿Contra quién querés reclamar?", 2: "Contanos lo básico", 3: "Tu reclamo está listo" };
  function go(n) {
    [1, 2, 3].forEach(function (i) {
      $("step" + i).classList.toggle("is-on", i === n);
      var li = document.querySelector('.stepper li[data-s="' + i + '"]');
      li.classList.toggle("is-active", i === n);
      li.classList.toggle("is-done", i < n);
    });
    $("appTitle").textContent = TITLES[n];
    var top = $("app").getBoundingClientRect().top + window.scrollY - 64;
    if (Math.abs(window.scrollY - top) > 40) window.scrollTo({ top: top, behavior: "smooth" });
  }
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () { go(+b.dataset.go); });
  });

  /* ---------- Generación ---------- */
  function F(val, label) { return val ? val : "[" + label + "]"; }
  function fmtDate(d) { if (!d) return ""; var p = d.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; }
  function hoy() { var d = new Date(); return ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear(); }

  function datos() {
    var r = RUBROS[S.rubro];
    var motivo = S.motivo || "";
    var det = v("detalle");
    var qp = motivo && det ? motivo + ". " + det : (motivo || det);
    var ped = [S.pedido, v("pedidoOtro")].filter(Boolean).join(". Además: ");
    return {
      rubro: S.rubro, r: r,
      empresa: F(v("empresa"), "nombre de la empresa"),
      fecha: F(fmtDate(v("fecha")), "fecha"),
      monto: v("monto"),
      cliente: v("cliente"),
      nro: v("nroPrevio"),
      fechaPrevio: fmtDate(v("fechaPrevio")),
      quePaso: F(qp, "contá qué pasó"),
      motivo: motivo || r.label,
      pedido: F(ped, "qué querés conseguir"),
      nombre: F(v("nombre"), "tu nombre y apellido"),
      dni: F(v("dni"), "tu DNI"),
      email: F(v("email"), "tu mail"),
      sub: $("subtipo").value
    };
  }

  function antecedentes(d) {
    if (d.nro) return "Ya reclamé antes" + (d.fechaPrevio ? " el " + d.fechaPrevio : "") + ", reclamo número " + d.nro + ", sin solución.";
    return "Este es mi primer reclamo formal por escrito.";
  }
  function montoLn(d) { return d.monto ? "Monto involucrado: " + d.monto + ".\n" : ""; }
  function clienteLn(d, lbl) { return d.cliente ? (lbl || "N° de cliente o cuenta") + ": " + d.cliente + ".\n" : ""; }
  function firma(d) { return "\nSaludos,\n" + d.nombre + "\nDNI " + d.dni + "\nContacto: " + d.email; }
  function cierre(d, org) {
    return "\nLes pido que me informen el número de reclamo y me respondan por escrito a " + d.email + ". Si no obtengo una solución, voy a presentar el caso ante " + org + ".\n";
  }
  function ente(d) {
    if (d.rubro === "banco") return "el Banco Central (BCRA) y Defensa del Consumidor";
    if (d.rubro === "fintech") return "el BCRA (si la empresa está regulada por el BCRA) y Defensa del Consumidor";
    if (d.rubro === "tele") return "el ENACOM y Defensa del Consumidor";
    if (d.rubro === "servicios") return d.sub === "agua" ? "el ERAS (Ente Regulador de Agua y Saneamiento)" : "el ENReGE (Ente Nacional Regulador del Gas y la Electricidad)";
    if (d.rubro === "salud") return "la Superintendencia de Servicios de Salud";
    return "Defensa del Consumidor, a través de la Ventanilla Federal Única";
  }
  function enteCorto(d) {
    return { banco: "BCRA", fintech: "BCRA o Defensa del Consumidor", tele: "ENACOM", salud: "Superintendencia de Servicios de Salud", compra: "Defensa del Consumidor", otro: "Defensa del Consumidor" }[d.rubro] || (d.sub === "agua" ? "ERAS" : "ENReGE");
  }

  function extraLegal(d) {
    var m = norm(d.motivo + " " + d.pedido);
    var out = "";
    if ((d.rubro === "tele" || d.rubro === "otro" || d.rubro === "servicios" || d.rubro === "banco") && /baja|preaviso|permanencia/.test(m)) {
      out += "\nPido la baja por el mismo medio por el que contraté. Les recuerdo que deben enviarme constancia de la baja dentro de las 72 horas y que no pueden cobrarme preaviso, mes adelantado ni ningún otro concepto por pedirla (Ley 24.240, artículos 10 ter y 10 quáter).\n";
    }
    if (d.rubro === "compra" && /arrepent/.test(m)) {
      out += "\nEjerzo mi derecho a revocar la aceptación de la compra dentro de los 10 días corridos desde la entrega o la celebración del contrato, sin responsabilidad alguna y con los gastos de devolución a cargo del vendedor (Ley 24.240, artículo 34).\n";
    }
    if (d.rubro === "servicios" && d.sub === "luz" && /corte/.test(m)) {
      out += "\nSi el corte se extendió 15 horas seguidas o más, o hubo cuatro o más cortes en el mismo mes, corresponde el reintegro por la energía no suministrada.\n";
    }
    if (d.rubro === "servicios" && d.sub === "gas" && /factura/.test(m)) {
      out += "\nMientras este reclamo por facturación no tenga respuesta, no corresponde que pague la factura reclamada.\n";
    }
    return out;
  }

  function cartaEmpresa(d) {
    var head = "Asunto: Reclamo formal | " + d.motivo + " | " + d.nombre + ", DNI " + d.dni + "\n\n" +
      "Lugar y fecha: [tu ciudad], " + hoy() + "\n\n" +
      "Señores de " + d.empresa + ":\n\n";
    var intro = {
      banco: "Presento este reclamo formal como cliente titular de " + d.empresa + ".\n",
      fintech: "Presento este reclamo formal como usuario/a de la cuenta asociada a " + d.email + ".\n",
      tele: "Soy titular del servicio contratado con ustedes.\n",
      servicios: "Soy titular del servicio de " + ({ luz: "electricidad", gas: "gas", agua: "agua y cloacas" }[d.sub]) + " en [domicilio del servicio].\n",
      compra: "Les escribo por una compra realizada en su tienda o plataforma.\n",
      salud: "Soy afiliado/a de " + d.empresa + ".\n",
      otro: "Soy cliente de " + d.empresa + ".\n"
    }[d.rubro];
    var body = clienteLn(d, d.rubro === "compra" ? "N° de pedido" : d.rubro === "salud" ? "N° de afiliado" : null) +
      "\nFecha del hecho: " + d.fecha + ".\nQué pasó: " + fin(d.quePaso) + "\n" + montoLn(d) +
      "Antecedentes: " + antecedentes(d) + "\n\n" +
      "Solicito: " + low(d.pedido) + ".\n" + extraLegal(d) + cierre(d, ente(d));
    return head + intro + body + firma(d);
  }

  function cartaOrganismo(d) {
    var org = enteCorto(d);
    var nro = d.nro ? "número " + d.nro : "número [número de reclamo que te dio la empresa]";
    var fp = d.fechaPrevio || "[fecha en que reclamaste a la empresa]";
    return "Asunto: Reclamo no resuelto contra " + d.empresa + "\n\n" +
      "Destinatario: " + org + "\n" +
      "Lugar y fecha: [tu ciudad], " + hoy() + "\n\n" +
      "Quien suscribe, " + d.nombre + ", DNI " + d.dni + ", presenta un reclamo contra " + d.empresa + ".\n\n" +
      clienteLn(d) +
      "Fecha del hecho: " + d.fecha + ".\nHechos: " + fin(d.quePaso) + "\n" + montoLn(d) +
      "\nEl " + fp + " presenté un reclamo formal ante la empresa, " + nro + ". [Pasaron X días hábiles sin respuesta / La respuesta no resolvió el problema porque...]\n\n" +
      "Solicito la intervención del organismo para obtener: " + low(d.pedido) + ".\n" + extraLegal(d) +
      "\nAdjunto: copia del reclamo presentado a la empresa, su respuesta si la hubo, comprobantes o facturas y copia de mi DNI.\n" +
      firma(d);
  }
  function fin(s) { s = s.replace(/\.\s*$/, ""); return s + "."; }
  function low(s) { return /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ ]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s; }
  function lc(s) { s = s.replace(/\.\s*$/, ""); return (/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s) + "."; }

  /* ---------- Dónde presentarlo ---------- */
  function where(d) {
    var steps = [], links = [], plazos = [];
    steps.push("<b>Mandá el reclamo 1 a la empresa</b> por un canal que deje registro (mail, formulario web, app o sucursal) y pedí el número de reclamo.");
    if (d.rubro === "banco" || d.rubro === "fintech") {
      steps.push("<b>Si no responden o no te sirve la respuesta,</b> usá el reclamo 2 en el BCRA" + (d.rubro === "fintech" ? " (si la empresa está regulada por el BCRA)" : "") + " o en la Ventanilla Federal Única.");
      links.push(L.bcra, L.bcraFraude, L.vfu);
      plazos.push({ t: "Para ir al BCRA tienen que haber pasado al menos 10 días hábiles desde tu reclamo a la entidad, sin solución o con respuesta insatisfactoria. Necesitás el número de reclamo.", s: SRC.bcra });
    } else if (d.rubro === "tele") {
      steps.push("<b>Si no responden o no te sirve la respuesta,</b> pedí la intervención del ENACOM por Trámites a Distancia (TAD) o reclamá en la Ventanilla Federal Única.");
      links.push(L.enacomNet, L.enacomFija, L.vfu);
      plazos.push({ t: "Baja: si contrataste por teléfono o internet, podés darla de baja por el mismo medio; te tienen que mandar constancia en 72 horas y no pueden cobrarte preaviso ni mes adelantado (Ley 24.240, arts. 10 ter y 10 quáter).", s: SRC.ley });
    } else if (d.rubro === "servicios") {
      if (d.sub === "agua") {
        steps.push("<b>Si AySA no responde en tiempo y forma,</b> presentá el reclamo 2 en el ERAS.");
        links.push(L.eras, L.vfu);
      } else {
        steps.push("<b>Si la empresa no responde o no te sirve la respuesta,</b> presentá el reclamo 2 en el ENReGE, el ente que unificó al ENRE y al ENARGAS.");
        links.push(d.sub === "gas" ? L.enargas : L.enre, L.enrege, L.vfu);
        if (d.sub === "luz") {
          plazos.push({ t: "La distribuidora (Edenor o Edesur) tiene que responderte por escrito dentro de los 15 días hábiles.", s: SRC.enre });
          plazos.push({ t: "Corte de 15 horas seguidas o más, o cuatro o más cortes en un mes: te corresponde un reintegro en la factura. Sin el número de reclamo a la distribuidora no se puede pedir.", s: SRC.enreCorte });
        } else {
          plazos.push({ t: "La empresa de gas tiene que resolver tu reclamo en 15 días hábiles (salvo emergencias o falta de suministro). Si reclamaste la factura, no tenés que pagarla hasta que te respondan.", s: SRC.gas });
        }
      }
    } else if (d.rubro === "salud") {
      steps.push("<b>Si la prepaga u obra social no responde,</b> presentá la denuncia en la Superintendencia de Servicios de Salud.");
      links.push(L.sss);
    } else {
      steps.push("<b>Si no responden o no te sirve la respuesta,</b> presentá el reclamo 2 en la Ventanilla Federal Única de Defensa del Consumidor.");
      links.push(L.vfu);
      if (d.rubro === "compra") plazos.push({ t: "Compras a distancia (internet, teléfono): tenés 10 días corridos desde la entrega o la compra, lo último que ocurra, para arrepentirte. Los gastos de devolución los paga el vendedor (Ley 24.240, art. 34).", s: SRC.ley });
      if (d.rubro === "otro") plazos.push({ t: "Baja de un servicio contratado por teléfono o internet: por el mismo medio, constancia en 72 horas y sin cobro de preaviso (Ley 24.240, arts. 10 ter y 10 quáter).", s: SRC.ley });
    }
    steps.push("<b>Si vivís en CABA o Provincia de Buenos Aires,</b> también podés ir a Defensa del Consumidor local.");
    links.push(L.caba, L.pba);
    steps.push("<b>Guardá todo:</b> capturas, mails, número de reclamo y fechas.");

    $("whereSteps").innerHTML = steps.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    $("whereLinks").innerHTML = links.map(function (l) {
      return '<li><a href="' + l.u + '" target="_blank" rel="noopener"><b>' + l.t + "</b><small>" + l.n + "</small><span>" + l.u.replace(/^https:\/\//, "") + "</span></a></li>";
    }).join("");
    $("plazosWrap").hidden = !plazos.length;
    $("plazos").innerHTML = plazos.map(function (p) {
      return "<li>" + p.t + ' <a href="' + p.s + '" target="_blank" rel="noopener">Fuente oficial</a></li>';
    }).join("");
  }

  /* ---------- Paso 3 ---------- */
  var cache = { empresa: "", organismo: "" };
  $("genBtn").addEventListener("click", function () {
    if (!S.motivo && !v("detalle")) { toast("Elegí un motivo o contá qué pasó"); $("detalle").focus(); return; }
    var d = datos();
    cache.empresa = cartaEmpresa(d);
    cache.organismo = cartaOrganismo(d);
    where(d);
    setEtapa("empresa");
    go(3);
  });
  function setEtapa(e) {
    S.etapa = e;
    document.querySelectorAll(".tab").forEach(function (t) { var on = t.dataset.etapa === e; t.classList.toggle("is-on", on); t.setAttribute("aria-selected", on ? "true" : "false"); });
    $("doc").value = cache[e];
    $("docName").textContent = "reclamo-" + e + ".txt";
    $("etapaHint").textContent = e === "empresa"
      ? "Mandalo primero a la empresa por un canal que deje registro y pedí el número de reclamo."
      : "Usalo si la empresa no responde en plazo o la respuesta no te sirve. Completá los [corchetes].";
  }
  document.querySelectorAll(".tab").forEach(function (t) {
    t.addEventListener("click", function () { cache[S.etapa] = $("doc").value; setEtapa(t.dataset.etapa); });
  });
  $("doc").addEventListener("input", function () { cache[S.etapa] = $("doc").value; });

  $("copyBtn").addEventListener("click", function () {
    var txt = $("doc").value;
    function fallback() { var ta = $("doc"); ta.focus(); ta.select(); try { document.execCommand("copy"); toast("Copiado ✓"); } catch (e) { toast("Seleccioná el texto y copialo"); } }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(function () { toast("Copiado ✓"); }, fallback);
    else fallback();
  });
  $("dlBtn").addEventListener("click", function () {
    var blob = new Blob([$("doc").value], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "reclamo-" + S.etapa + ".txt";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast("Descargado ✓");
  });
  $("resetBtn").addEventListener("click", function () {
    document.querySelectorAll("#step2 input, #step2 textarea").forEach(function (el) { el.value = ""; });
    free.value = ""; hint.textContent = "Escribí y detectamos el rubro solos."; hint.className = "free__hint";
    S.rubro = S.motivo = S.pedido = null; cache = { empresa: "", organismo: "" };
    Array.prototype.forEach.call(rubrosEl.children, function (c) { c.classList.remove("is-sel"); });
    go(1);
  });

  var tt;
  function toast(msg) { var t = $("toast"); t.textContent = msg; t.classList.add("is-on"); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove("is-on"); }, 1800); }

  /* ---------- Hero: reclamo que se escribe solo ---------- */
  var demo = [
    ['<span class="c-mut">Asunto:</span> Reclamo formal | Cargo que no reconozco', 0],
    ["", 0],
    ["Señores de [tu banco]:", 0],
    ["El 03/11 apareció un cargo que no reconozco.", 0],
    ['<span class="c-mut">Antecedentes:</span> reclamo N° 48213, sin solución.', 0],
    ['<span class="c-acc">Solicito:</span> devolución del dinero.', 0],
    ["", 0],
    ["Si no obtengo solución, voy a presentar", 0],
    ["el caso ante el BCRA y Defensa del Consumidor.", 0],
    ["", 0],
    ['<span class="c-ok">✓ Listo para mandar</span>', 0]
  ];
  var term = $("heroTerm");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || /[?&]static/.test(location.search)) {
    term.innerHTML = demo.map(function (l) { return l[0]; }).join("\n");
  } else {
    var li = 0;
    (function tick() {
      if (li > demo.length) return;
      term.innerHTML = demo.slice(0, li).map(function (l) { return l[0]; }).join("\n") + '<span class="caret"></span>';
      li++;
      setTimeout(tick, li === 1 ? 300 : 260);
    })();
  }

  $("startBtn").addEventListener("click", function (e) { e.preventDefault(); go(1); });
})();
