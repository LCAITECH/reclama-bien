/* Uruguay, Chile, Paraguay, Bolivia · last checked: 2026-11 */
RB.add("UY", {
  name: { es: "Uruguay", en: "Uruguay" }, flag: "🇺🇾", id: "CI",
  law: { t: "Ley 17.250 de Relaciones de Consumo (IMPO)", u: "https://www.impo.com.uy/bases/leyes/17250-2000", cite: { es: "la Ley 17.250 de Relaciones de Consumo", en: "Consumer Relations Law 17,250" } },
  links: {
    udeco: { t: "Defensa del Consumidor (MEF): consulta, reclamo o denuncia", u: "https://www.gub.uy/tramites/consulta-reclamo-yo-denuncia-materia-defensa-consumidor", n: { es: "Gratis y en línea. Línea gratuita 0800 7005.", en: "Free and online. Toll-free 0800 7005." } },
    bcu: { t: "BCU: reclamos y denuncias del usuario financiero", u: "https://usuariofinanciero.bcu.gub.uy/reclamos-y-denuncias/", n: { es: "Después del reclamo a la institución. Teléfono 1967.", en: "After complaining to the institution. Phone 1967." } },
    bcuTram: { t: "Denuncias de usuarios del sistema financiero (trámite en línea)", u: "https://www.gub.uy/tramites/denuncias-usuarios-sistema-financiero", n: { es: "Adjunta el reclamo a la entidad y su respuesta.", en: "Attach your complaint to the institution and its reply." } },
    ursec: { t: "URSEC: reclamo por telecomunicaciones y servicios postales", u: "https://www.gub.uy/tramites/reclamo-consumidores-servicios-telecomunicaciones-postales", n: { es: "La empresa tiene 10 días hábiles para responder. Tel. 0800 1872.", en: "The company has 10 business days to reply. Phone 0800 1872." } },
    ursea: { t: "URSEA: reclamos por energía y agua", u: "https://www.gub.uy/tramites/reclamos-ursea", n: { es: "Primero reclama a la empresa prestadora.", en: "Complain to the provider first." } }
  },
  cat: {
    banco: { orgs: ["Banco Central del Uruguay (BCU)", "Unidad de Defensa del Consumidor (MEF)"], links: ["bcu", "bcuTram", "udeco"],
      plazos: [{ es: "La institución debe responder en 15 días corridos (prorrogables). Si no responde o la respuesta no te satisface, puedes ir al BCU o a Defensa del Consumidor.", en: "The institution must reply within 15 calendar days (extendable). If it doesn't, or the answer is unsatisfactory, go to the BCU or Consumer Protection.", s: "https://usuariofinanciero.bcu.gub.uy/reclamos-y-denuncias/" }] },
    fintech: { orgs: ["Banco Central del Uruguay (BCU)", "Unidad de Defensa del Consumidor (MEF)"], links: ["bcu", "bcuTram", "udeco"] },
    tele: { orgs: ["URSEC (Unidad Reguladora de Servicios de Comunicaciones)"], links: ["ursec", "udeco"] },
    servicios: { orgs: ["URSEA (Unidad Reguladora de Servicios de Energía y Agua)"], links: ["ursea", "udeco"] },
    general: { orgs: ["Unidad de Defensa del Consumidor (MEF)"], links: ["udeco"] }
  }
});

RB.add("CL", {
  name: { es: "Chile", en: "Chile" }, flag: "🇨🇱", id: "RUT",
  law: { t: "Ley 19.496 sobre Protección de los Derechos de los Consumidores (BCN)", u: "https://www.bcn.cl/leychile/navegar?idNorma=61438", cite: { es: "la Ley 19.496 sobre Protección de los Derechos de los Consumidores", en: "Consumer Rights Protection Law 19,496" } },
  links: {
    sernac: { t: "SERNAC: ingresar un reclamo contra una empresa", u: "https://www.sernac.cl/portal/617/w3-article-9178.html", n: { es: "Gratis. Teléfono 800 700 100. Informa el resultado en hasta 18 días hábiles.", en: "Free. Phone 800 700 100. Reports back within 18 business days." } },
    cmf: { t: "CMF: reclamos contra bancos e instituciones financieras", u: "https://www.cmfchile.cl/portal/principal/623/w4-article-26815.html", n: { es: "En línea con ClaveÚnica, en oficina o por correo.", en: "Online with ClaveÚnica, in person or by mail." } },
    subtel: { t: "SUBTEL: reclamo contra una empresa de telecomunicaciones (segunda instancia)", u: "https://www.subtel.gob.cl/reclamo-contra-empresa-telecomunicaciones-segunda-instancia/", n: { es: "Después de reclamar a la empresa. Tel. 800 13 13 13.", en: "After complaining to the company. Phone 800 13 13 13." } },
    sec: { t: "SEC: reclamos de electricidad y combustibles", u: "https://www.sec.cl/area-ciudadana/reclamos-y-la-sec/", n: { es: "Primero reclama a la distribuidora.", en: "Complain to the distributor first." } },
    siss: { t: "SISS: reclamo contra empresas sanitarias (ChileAtiende)", u: "https://www.chileatiende.gob.cl/fichas/4674-reclamo-contra-empresas-sanitarias-responsables-de-los-servicios-de-agua-potable-y-alcantarillado-urbano", n: { es: "Agua potable y alcantarillado.", en: "Drinking water and sewage." } },
    salud: { t: "Superintendencia de Salud: reclamo contra Fonasa o isapres", u: "https://www.superdesalud.gob.cl/tramites/reclamo-contra-fonasa-o-isapres/", n: { es: "En línea con ClaveÚnica.", en: "Online with ClaveÚnica." } }
  },
  cat: {
    banco: { orgs: ["CMF (Comisión para el Mercado Financiero)", "SERNAC"], links: ["cmf", "sernac"] },
    fintech: { orgs: ["SERNAC", "CMF (Comisión para el Mercado Financiero)"], links: ["sernac", "cmf"] },
    tele: { orgs: ["SUBTEL (Subsecretaría de Telecomunicaciones)", "SERNAC"], links: ["subtel", "sernac"] },
    luz: { orgs: ["SEC (Superintendencia de Electricidad y Combustibles)"], links: ["sec", "sernac"] },
    gas: { orgs: ["SEC (Superintendencia de Electricidad y Combustibles)"], links: ["sec", "sernac"] },
    agua: { orgs: ["SISS (Superintendencia de Servicios Sanitarios)"], links: ["siss", "sernac"] },
    salud: { orgs: ["Superintendencia de Salud"], links: ["salud"] },
    general: { orgs: ["SERNAC (Servicio Nacional del Consumidor)"], links: ["sernac"] }
  }
});

RB.add("PY", {
  name: { es: "Paraguay", en: "Paraguay" }, flag: "🇵🇾", id: "CI",
  law: { t: "Ley 1334/98 de Defensa del Consumidor y del Usuario (BACN)", u: "https://www.bacn.gov.py/leyes-paraguayas/897/ley-n-1334-de-defensa-del-consumidor-y-del-usuario", cite: { es: "la Ley 1334/98 de Defensa del Consumidor y del Usuario", en: "Consumer and User Protection Law 1334/98" } },
  links: {
    sedeco: { t: "SEDECO: Secretaría de Defensa del Consumidor y el Usuario", u: "https://sedeco.gov.py/", n: { es: "Formulario web o en persona. Tel. (+595 21) 524455, info@sedeco.gov.py.", en: "Web form or in person. Phone (+595 21) 524455, info@sedeco.gov.py." } },
    bcp: { t: "Banco Central del Paraguay: contactos", u: "https://www.bcp.gov.py/contactos", n: { es: "Superintendencia de Bancos. Primero reclama en la entidad.", en: "Banking Superintendency. Complain to the bank first." } },
    conatel: { t: "CONATEL: consultas y reclamos de telecomunicaciones (CAP)", u: "https://www.conatel.gov.py/consultas-cap/", n: { es: "Telefonía, internet y TV. Datos del titular de la línea.", en: "Phone, internet and TV. Use the line holder's details." } }
  },
  cat: {
    banco: { orgs: ["Banco Central del Paraguay (Superintendencia de Bancos)", "SEDECO"], links: ["bcp", "sedeco"] },
    fintech: { orgs: ["Banco Central del Paraguay (Superintendencia de Bancos)", "SEDECO"], links: ["bcp", "sedeco"] },
    tele: { orgs: ["CONATEL (Comisión Nacional de Telecomunicaciones)"], links: ["conatel", "sedeco"] },
    general: { orgs: ["SEDECO (Secretaría de Defensa del Consumidor y el Usuario)"], links: ["sedeco"] }
  }
});

RB.add("BO", {
  name: { es: "Bolivia", en: "Bolivia" }, flag: "🇧🇴", id: "CI",
  law: { t: "Ley 453 General de los Derechos de las Usuarias y los Usuarios y de las Consumidoras y los Consumidores", u: "https://sea.gob.bo/digesto/CompendioII/J/77_L_453.pdf", cite: { es: "la Ley 453 de los Derechos de las Usuarias y los Usuarios y de las Consumidoras y los Consumidores", en: "User and Consumer Rights Law 453" } },
  links: {
    asfi: { t: "ASFI: atención de reclamos en segunda instancia", u: "https://www.gob.bo/tramites/atencion-de-reclamos-en-segunda-instancia", n: { es: "Si la entidad no resolvió tu reclamo. asfi@asfi.gob.bo", en: "If the bank didn't resolve your complaint. asfi@asfi.gob.bo" } },
    att: { t: "ATT: MiReclamo (telecomunicaciones)", u: "https://mireclamo.bo/", n: { es: "Sistema de reclamos de la ATT.", en: "ATT complaint system." } },
    aetn: { t: "AETN: reclamos de electricidad", u: "https://www.aetn.gob.bo/acoe/consumers/efectuarReclamo", n: { es: "Atención al consumidor de electricidad.", en: "Electricity consumer service." } },
    aetnAdm: { t: "AETN: atención de reclamaciones administrativas", u: "https://www.gob.bo/tramites/atencion-de-reclamaciones-administrativas", n: { es: "Ficha oficial del trámite.", en: "Official procedure page." } }
  },
  cat: {
    banco: { orgs: ["ASFI (Autoridad de Supervisión del Sistema Financiero)"], links: ["asfi"] },
    fintech: { orgs: ["ASFI (Autoridad de Supervisión del Sistema Financiero)"], links: ["asfi"] },
    tele: { orgs: ["ATT (Autoridad de Regulación y Fiscalización de Telecomunicaciones y Transportes)"], links: ["att"] },
    luz: { orgs: ["AETN (Autoridad de Fiscalización de Electricidad y Tecnología Nuclear)"], links: ["aetn", "aetnAdm"] },
    general: { orgs: ["Viceministerio de Defensa de los Derechos del Usuario y del Consumidor"], links: [] }
  }
});
