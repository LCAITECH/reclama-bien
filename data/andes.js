/* Perú, Colombia, Ecuador · last checked: 2026-11 */
RB.add("PE", {
  name: { es: "Perú", en: "Peru" }, flag: "🇵🇪", id: "DNI",
  law: { t: "Ley 29571, Código de Protección y Defensa del Consumidor", u: "https://www.gob.pe/institucion/indecopi/normas-legales/3462038-ley-29571", cite: { es: "la Ley 29571, Código de Protección y Defensa del Consumidor", en: "Consumer Protection Code, Law 29571" } },
  first: { es: "En el Perú también puedes usar el Libro de Reclamaciones de la empresa (físico o virtual).", en: "In Peru you can also use the company's Complaints Book (Libro de Reclamaciones), on paper or online." },
  links: {
    indecopi: { t: "Indecopi: reclamar de forma virtual", u: "https://www.gob.pe/10430-reclamar-de-forma-virtual", n: { es: "Gratis y en línea.", en: "Free and online." } },
    indecopiBanca: { t: "Indecopi: reclamos de banca, seguros y AFP", u: "https://consumidor.gob.pe/presenta-tu-reclamo-banca-seguros-y-afp/", n: { es: "Cuándo ir a Indecopi y cuándo a la SBS.", en: "When to go to Indecopi and when to the SBS." } },
    sbs: { t: "SBS: servicios en línea (reclamos y consultas)", u: "https://servicios.sbs.gob.pe/serviciosenlinea", n: { es: "Bancos, seguros y AFP.", en: "Banks, insurers and pension funds." } },
    osiptel: { t: "OSIPTEL: pasos para reclamar", u: "https://www.osiptel.gob.pe/guiapasosreclamos", n: { es: "Apelación ante el TRASU. Correo: usuarios@osiptel.gob.pe", en: "Appeal to the TRASU. Email: usuarios@osiptel.gob.pe" } },
    jaru: { t: "Osinergmin: Junta de Apelaciones de Reclamos de Usuarios (JARU)", u: "https://www.gob.pe/77348-organismo-supervisor-de-la-inversion-en-energia-y-mineria-junta-de-apelaciones-de-reclamos-de-usuarios-jaru", n: { es: "Luz y gas natural, segunda instancia.", en: "Electricity and natural gas, second instance." } },
    sunass: { t: "SUNASS: reclamo por agua potable y saneamiento", u: "https://www.gob.pe/institucion/sunass/pages/539-presentar-reclamo-por-servicios-de-agua-potable-y-saneamiento", n: { es: "Primero ante la empresa de agua.", en: "File with the water company first." } },
    susalud: { t: "SUSALUD: consulta o denuncia sobre un servicio de salud", u: "https://www.gob.pe/institucion/susalud/pages/469-presentar-una-consulta-o-denuncia-sobre-un-servicio-de-salud", n: { es: "Clínicas, seguros y EPS.", en: "Clinics, health insurers and EPS." } }
  },
  cat: {
    banco: { orgs: ["SBS (Superintendencia de Banca, Seguros y AFP)", "Indecopi"], links: ["sbs", "indecopiBanca", "indecopi"] },
    fintech: { orgs: ["Indecopi", "SBS (Superintendencia de Banca, Seguros y AFP)"], links: ["indecopi", "sbs"] },
    tele: { orgs: ["OSIPTEL (TRASU)"], links: ["osiptel"],
      plazos: [{ es: "Si la respuesta del operador no te satisface, puedes apelar dentro de los 15 días hábiles. El operador debe elevar la apelación al OSIPTEL en 5 días hábiles.", en: "If the operator's answer doesn't satisfy you, you can appeal within 15 business days. The operator must forward it to OSIPTEL within 5 business days.", s: "https://www.osiptel.gob.pe/guiapasosreclamos" }] },
    luz: { orgs: ["Osinergmin (JARU)"], links: ["jaru"] },
    gas: { orgs: ["Osinergmin (JARU)"], links: ["jaru"] },
    agua: { orgs: ["SUNASS (Superintendencia Nacional de Servicios de Saneamiento)"], links: ["sunass"] },
    salud: { orgs: ["SUSALUD (Superintendencia Nacional de Salud)"], links: ["susalud"] },
    general: { orgs: ["Indecopi"], links: ["indecopi"] }
  }
});

RB.add("CO", {
  name: { es: "Colombia", en: "Colombia" }, flag: "🇨🇴", id: { es: "Cédula", en: "ID (Cédula)" },
  law: { t: "Ley 1480 de 2011, Estatuto del Consumidor (Función Pública)", u: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306", cite: { es: "la Ley 1480 de 2011, Estatuto del Consumidor", en: "Consumer Statute, Law 1480 of 2011" } },
  links: {
    sic: { t: "SIC: denuncias y quejas de protección al consumidor", u: "https://denuncias.sic.gov.co/consumidor/consumidor/paso0", n: { es: "Formulario web de la Superintendencia de Industria y Comercio.", en: "Web form of the Superintendency of Industry and Commerce." } },
    sicInfo: { t: "SIC: protección al consumidor", u: "https://www.sic.gov.co/tema/asuntos-jurisdiccionales/proteccion-al-consumidor", n: { es: "Para devolución, cambio o reparación se radica una demanda.", en: "For refunds, exchanges or repairs you file a claim (demanda)." } },
    sicTele: { t: "SIC: telecomunicaciones y servicios postales", u: "https://sedeelectronica.sic.gov.co/temas/proteccion-al-consumidor/derechos-y-deberes/servicios-tic/Telecomunicaciones", n: { es: "Recursos de reposición y apelación ante el operador.", en: "Reconsideration and appeal filed with the operator." } },
    sfc: { t: "Superintendencia Financiera: quejas contra entidades vigiladas", u: "https://www.superfinanciera.gov.co/publicaciones/20650/consumidor-financieroinformacion-generalquejas-contra-entidades-vigiladasquejas-contra-entidades-vigiladas-por-la-superintendencia-financiera-de-colombia-20650/", n: { es: "Línea gratuita 018000 120 100. super@superfinanciera.gov.co", en: "Toll-free 018000 120 100. super@superfinanciera.gov.co" } },
    superservicios: { t: "Superservicios: peticiones, quejas y reclamos", u: "https://www.superservicios.gov.co/index.php/Atencion-y-servicios-a-la-ciudadania/peticiones-quejas-reclamos-sugerencias-denuncias-y-felicitaciones", n: { es: "Agua, energía, gas y aseo.", en: "Water, power, gas and waste collection." } },
    supersalud: { t: "Supersalud: PQRD", u: "https://www.supersalud.gov.co/es-co/atencion-ciudadano/pqrd", n: { es: "EPS, prepagadas y prestadores de salud.", en: "EPS, prepaid plans and health providers." } }
  },
  cat: {
    banco: { orgs: ["Superintendencia Financiera de Colombia (SFC)"], links: ["sfc"] },
    fintech: { orgs: ["Superintendencia Financiera de Colombia (SFC)", "Superintendencia de Industria y Comercio (SIC)"], links: ["sfc", "sic"] },
    tele: { orgs: ["Superintendencia de Industria y Comercio (SIC)"], links: ["sicTele", "sic"],
      plazos: [{ es: "Si el operador responde en contra, presenta recurso de reposición y en subsidio de apelación ante el mismo operador dentro de los 10 días hábiles; si mantiene su decisión, debe enviar el expediente a la SIC.", en: "If the operator rules against you, file a reconsideration and subsidiary appeal with the operator within 10 business days; if it upholds its decision, it must send the file to the SIC.", s: "https://sedeelectronica.sic.gov.co/temas/proteccion-al-consumidor/derechos-y-deberes/servicios-tic/Telecomunicaciones" }] },
    servicios: { orgs: ["Superintendencia de Servicios Públicos Domiciliarios (Superservicios)"], links: ["superservicios"] },
    salud: { orgs: ["Superintendencia Nacional de Salud (Supersalud)"], links: ["supersalud"] },
    general: { orgs: ["Superintendencia de Industria y Comercio (SIC)"], links: ["sic", "sicInfo"] }
  }
});

RB.add("EC", {
  name: { es: "Ecuador", en: "Ecuador" }, flag: "🇪🇨", id: { es: "Cédula", en: "ID (Cédula)" },
  law: { t: "Ley Orgánica de Defensa del Consumidor (gob.ec)", u: "https://www.gob.ec/sites/default/files/regulations/2018-09/Documento_Ley-Org%C3%A1nica-Defensa-Consumidor.pdf", cite: { es: "la Ley Orgánica de Defensa del Consumidor", en: "Organic Consumer Protection Law" } },
  links: {
    sb: { t: "Superintendencia de Bancos: reclamos", u: "https://www.superbancos.gob.ec/bancos/reclamos/", n: { es: "Formulario gratuito. Tel. (593) 2 299 76 00.", en: "Free form. Phone (593) 2 299 76 00." } },
    arcotel: { t: "ARCOTEL: atención de reclamos de telecomunicaciones", u: "https://www.gob.ec/arcotel/tramites/atencion-reclamos-servicios-telecomunicaciones", n: { es: "Segunda instancia. Tel. 1800 567 567, atencion.consumidores@arcotel.gob.ec", en: "Second instance. Phone 1800 567 567, atencion.consumidores@arcotel.gob.ec" } },
    arconel: { t: "ARCONEL: reclamo técnico o comercial en segunda instancia", u: "https://www.gob.ec/arconel/tramites/reclamo-tecnico-comercial-danos-equipos-segunda-instancia", n: { es: "Servicio eléctrico, después de la distribuidora.", en: "Electricity, after the distributor." } },
    dpe: { t: "Defensoría del Pueblo: petición de atención", u: "https://www.gob.ec/dpe/tramites/atencion-peticiones-posibles-vulneraciones-derechos-humanos-naturaleza", n: { es: "Incluye derechos del consumidor.", en: "Includes consumer rights." } }
  },
  cat: {
    banco: { orgs: ["Superintendencia de Bancos del Ecuador"], links: ["sb"],
      plazos: [{ es: "La entidad tiene hasta 15 días para responder por operaciones dentro del país y hasta 40 días por operaciones internacionales.", en: "The bank has up to 15 days to reply for domestic transactions and up to 40 days for international ones.", s: "https://www.superbancos.gob.ec/bancos/reclamos/" }] },
    fintech: { orgs: ["Superintendencia de Bancos del Ecuador", "Defensoría del Pueblo"], links: ["sb", "dpe"] },
    tele: { orgs: ["ARCOTEL (Agencia de Regulación y Control de las Telecomunicaciones)"], links: ["arcotel"],
      plazos: [{ es: "La operadora tiene 15 días laborables para responder tu reclamo. Para ir a ARCOTEL, adjunta la prueba del reclamo previo.", en: "The operator has 15 working days to answer. To go to ARCOTEL, attach proof of your prior complaint.", s: "https://www.gob.ec/arcotel/tramites/atencion-reclamos-servicios-telecomunicaciones" }] },
    luz: { orgs: ["ARCONEL (Agencia de Regulación y Control de Electricidad)"], links: ["arconel"] },
    general: { orgs: ["Defensoría del Pueblo"], links: ["dpe"] }
  }
});
