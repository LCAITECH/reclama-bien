/* México, Costa Rica, Panamá, República Dominicana · last checked: 2026-11 */
RB.add("MX", {
  name: { es: "México", en: "Mexico" }, flag: "🇲🇽", id: "CURP",
  law: { t: "Ley Federal de Protección al Consumidor (Cámara de Diputados)", u: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf", cite: { es: "la Ley Federal de Protección al Consumidor", en: "Federal Consumer Protection Law" } },
  links: {
    profeco: { t: "PROFECO: Concilianet, quejas en línea", u: "https://profeco.gob.mx/Concilianet/comoconciliar.jsp", n: { es: "Telecom: quejas.telecom@profeco.gob.mx · Servicios: contactoconcilianet@profeco.gob.mx", en: "Telecom: quejas.telecom@profeco.gob.mx · Services: contactoconcilianet@profeco.gob.mx" } },
    condusef: { t: "CONDUSEF: presentar una queja", u: "https://www.condusef.gob.mx/?p=presentar-una-queja", n: { es: "Bancos, seguros y otras financieras. asesoria@condusef.gob.mx", en: "Banks, insurers and other financial firms. asesoria@condusef.gob.mx" } },
    crt: { t: "Comisión Reguladora de Telecomunicaciones: Soy Usuario", u: "https://www.ift.org.mx/usuarios-y-audiencias/levanta-tu-queja-soy-usuario", n: { es: "Queja contra tu compañía de telefonía, internet o TV.", en: "Complaints about phone, internet or TV providers." } }
  },
  cat: {
    banco: { orgs: ["CONDUSEF (Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros)"], links: ["condusef"] },
    fintech: { orgs: ["CONDUSEF", "PROFECO"], links: ["condusef", "profeco"] },
    salud: { orgs: ["CONDUSEF (seguros de gastos médicos)", "PROFECO"], links: ["condusef", "profeco"] },
    tele: { orgs: ["PROFECO", "Comisión Reguladora de Telecomunicaciones"], links: ["profeco", "crt"],
      plazos: [{ es: "En Concilianet, las quejas de telecomunicaciones reciben respuesta en 10 días hábiles.", en: "On Concilianet, telecom complaints get a reply within 10 business days.", s: "https://profeco.gob.mx/Concilianet/comoconciliar.jsp" }] },
    general: { orgs: ["PROFECO (Procuraduría Federal del Consumidor)"], links: ["profeco"] }
  }
});

RB.add("CR", {
  name: { es: "Costa Rica", en: "Costa Rica" }, flag: "🇨🇷", id: { es: "Cédula", en: "ID (Cédula)" },
  law: { t: "Ley 7472 de Promoción de la Competencia y Defensa Efectiva del Consumidor (SINALEVI)", u: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_norma.aspx?nValor1=1&nValor2=26481&nValor3=0&param1=NRM&strTipM=FN", cite: { es: "la Ley 7472 de Promoción de la Competencia y Defensa Efectiva del Consumidor", en: "Law 7472 on Competition and Effective Consumer Protection" } },
  links: {
    meic: { t: "MEIC: denuncias del consumidor", u: "https://www.meic.go.cr/tramites-y-servicios/documentos-y-tramites-de-interes/denuncias-consumidor/", n: { es: "Plataforma en línea del Ministerio de Economía.", en: "Ministry of Economy online platform." } },
    sugef: { t: "SUGEF: quejas y denuncias", u: "https://www.sugef.fi.cr/contactenos/quejas_denuncias.aspx", n: { es: "Primero reclama por escrito a la entidad.", en: "Complain in writing to the institution first." } },
    sutel: { t: "SUTEL: guía para interponer reclamos", u: "https://sutel.go.cr/pagina/guia-para-interponer-reclamos", n: { es: "Si el operador no resuelve.", en: "If the operator doesn't resolve it." } }
  },
  cat: {
    banco: { orgs: ["SUGEF (Superintendencia General de Entidades Financieras)"], links: ["sugef"] },
    fintech: { orgs: ["SUGEF (Superintendencia General de Entidades Financieras)", "MEIC"], links: ["sugef", "meic"] },
    tele: { orgs: ["SUTEL (Superintendencia de Telecomunicaciones)"], links: ["sutel"] },
    general: { orgs: ["MEIC (Ministerio de Economía, Industria y Comercio)"], links: ["meic"] }
  }
});

RB.add("PA", {
  name: { es: "Panamá", en: "Panama" }, flag: "🇵🇦", id: { es: "Cédula", en: "ID (Cédula)" },
  law: { t: "Ley 45 de 2007 de protección al consumidor (Gaceta Oficial)", u: "https://www.gacetaoficial.gob.pa/storage/gacetas/2007/11/25914/7277.pdf", cite: { es: "la Ley 45 de 2007 de protección al consumidor", en: "Consumer Protection Law 45 of 2007" } },
  links: {
    acodeco: { t: "ACODECO: Autoridad de Protección al Consumidor y Defensa de la Competencia", u: "https://www.acodeco.gob.pa/", n: { es: "Quejas de consumo.", en: "Consumer complaints." } },
    sbp: { t: "Superintendencia de Bancos: atención al cliente bancario", u: "https://www.superbancos.gob.pa/sac/", n: { es: "Primero reclama ante el banco.", en: "Complain to the bank first." } },
    asep: { t: "ASEP: reclamos ante los prestadores y ante la ASEP", u: "https://www.panamadigital.gob.pa/InformacionTramite/tramite-de-reclamos-ante-los-prestadores-y-ante-la-asep", n: { es: "Electricidad, agua y telecomunicaciones.", en: "Electricity, water and telecom." } }
  },
  cat: {
    banco: { orgs: ["Superintendencia de Bancos de Panamá"], links: ["sbp"] },
    fintech: { orgs: ["Superintendencia de Bancos de Panamá", "ACODECO"], links: ["sbp", "acodeco"] },
    tele: { orgs: ["ASEP (Autoridad Nacional de los Servicios Públicos)"], links: ["asep"] },
    servicios: { orgs: ["ASEP (Autoridad Nacional de los Servicios Públicos)"], links: ["asep"] },
    general: { orgs: ["ACODECO"], links: ["acodeco"] }
  }
});

RB.add("DO", {
  name: { es: "República Dominicana", en: "Dominican Republic" }, flag: "🇩🇴", id: { es: "Cédula", en: "ID (Cédula)" },
  law: { t: "Ley 358-05 General de Protección de los Derechos del Consumidor o Usuario", u: "https://www.proconsumidor.gob.do/files/Ley_General_de_Proteccin_de_los_Derechos_del_Consumidor_o_Usuario_No__358-05.pdf", cite: { es: "la Ley 358-05 General de Protección de los Derechos del Consumidor o Usuario", en: "Consumer Rights Law 358-05" } },
  links: {
    proconsumidor: { t: "Pro Consumidor: asesoría y reclamaciones por internet", u: "https://proconsumidor.gob.do/asesoria-via-internet/", n: { es: "Formulario en línea.", en: "Online form." } },
    prousuario: { t: "ProUsuario (Superintendencia de Bancos): reclamaciones", u: "https://www.prousuario.gob.do/servicios/reclamaciones/", n: { es: "Después de reclamar a la entidad financiera.", en: "After complaining to the financial institution." } },
    indotel: { t: "INDOTEL: reclamación de telecomunicaciones", u: "https://indotel.gob.do/todos-los-servicios/atencion-de-reclamacion-caso-referido-a-la-prestadora/", n: { es: "Telefonía, internet y cable.", en: "Phone, internet and cable." } }
  },
  cat: {
    banco: { orgs: ["ProUsuario (Superintendencia de Bancos)"], links: ["prousuario"] },
    fintech: { orgs: ["ProUsuario (Superintendencia de Bancos)", "Pro Consumidor"], links: ["prousuario", "proconsumidor"] },
    tele: { orgs: ["INDOTEL (Instituto Dominicano de las Telecomunicaciones)"], links: ["indotel"] },
    general: { orgs: ["Pro Consumidor"], links: ["proconsumidor"] }
  }
});
