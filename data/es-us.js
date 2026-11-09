/* España y Estados Unidos · last checked: 2026-11 */
RB.add("ES", {
  name: { es: "España", en: "Spain" }, flag: "🇪🇸", id: "DNI/NIE",
  law: { t: "Real Decreto Legislativo 1/2007, Ley General para la Defensa de los Consumidores y Usuarios (BOE)", u: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555", cite: { es: "lo dispuesto en el Real Decreto Legislativo 1/2007, texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios", en: "Royal Legislative Decree 1/2007 (General Law for the Protection of Consumers and Users)" } },
  links: {
    bde: { t: "Banco de España: reclamaciones (sede electrónica)", u: "https://sedeelectronica.bde.es/sede/es/tramites/reclamaciones-transparencia-buenas-practicas-p104.html", n: { es: "Con certificado digital o Cl@ve.", en: "With a digital certificate or Cl@ve." } },
    bdeHow: { t: "Portal del Cliente Bancario: cómo realizar una reclamación", u: "https://clientebancario.bde.es/pcb/es/menu-horizontal/podemosayudarte/consultasreclama/comorealizarrecl/", n: { es: "Tel. 900 545 454. También por escrito a C/ Alcalá 48, Madrid.", en: "Phone 900 545 454. Also by post to C/ Alcalá 48, Madrid." } },
    teleco: { t: "Oficina de Atención al Usuario de Telecomunicaciones", u: "https://usuariosteleco.digital.gob.es/reclamaciones/telefonia-e-internet", n: { es: "Telefonía e internet, después del operador. Tel. +34 91 945 89 74.", en: "Phone and internet, after the operator. Phone +34 91 945 89 74." } },
    consumo: { t: "Ministerio de Consumo: cómo reclamar un conflicto de consumo", u: "https://www.dsca.gob.es/es/consumo/como-reclamar-conflicto-consumo", n: { es: "Consumo autonómico, OMIC, mediación o arbitraje.", en: "Regional consumer office, OMIC, mediation or arbitration." } },
    cidoc: { t: "Directorio de organismos de consumo de las comunidades autónomas", u: "https://cidoc.consumo.gob.es/directorio-mapas/organismos-consumo-administracion-autonomica", n: { es: "Busca el de tu comunidad.", en: "Find your region's office." } },
    dgsfp: { t: "DGSFP: Servicio de Reclamaciones (seguros)", u: "https://dgsfp.mineco.gob.es/es/Paginas/Servicio-de-Reclamanciones-GASPAR.aspx", n: { es: "Seguros, incluidos los de salud.", en: "Insurance, including health insurance." } }
  },
  cat: {
    banco: { orgs: ["Banco de España (Departamento de Conducta de Entidades)"], links: ["bde", "bdeHow"],
      plazos: [{ es: "Primero reclama al servicio de atención al cliente de la entidad. Si no responde en 15 días hábiles (servicios de pago) o en un mes (otras reclamaciones de consumidores), o no estás de acuerdo, puedes ir al Banco de España. Tienes un año desde tu reclamación a la entidad.", en: "First complain to the bank's customer service. If it doesn't reply within 15 business days (payment services) or one month (other consumer complaints), or you disagree, go to the Banco de España. You have one year from your complaint to the bank.", s: "https://clientebancario.bde.es/pcb/es/menu-horizontal/podemosayudarte/consultasreclama/comorealizarrecl/" }] },
    fintech: { orgs: [{ es: "Banco de España (si la entidad está registrada)", en: "Banco de España (if the firm is registered)" }, { es: "Consumo de tu comunidad autónoma", en: "your regional consumer office" }], links: ["bde", "bdeHow", "cidoc"] },
    tele: { orgs: ["Oficina de Atención al Usuario de Telecomunicaciones"], links: ["teleco", "cidoc"],
      plazos: [{ es: "Si el operador no responde en un mes o la respuesta no te satisface, tienes tres meses para acudir a la Oficina de Atención al Usuario de Telecomunicaciones.", en: "If the operator doesn't reply within a month or you're not satisfied, you have three months to go to the Telecom Users Office.", s: "https://usuariosteleco.digital.gob.es/reclamaciones/telefonia-e-internet" }] },
    salud: { orgs: ["DGSFP (Dirección General de Seguros y Fondos de Pensiones)"], links: ["dgsfp"] },
    compra: { orgs: [{ es: "Consumo de tu comunidad autónoma u OMIC", en: "your regional consumer office or OMIC" }], links: ["consumo", "cidoc"],
      plazos: [{ es: "Compras a distancia: tienes 14 días naturales para desistir sin dar motivos (Real Decreto Legislativo 1/2007, arts. 102 y siguientes).", en: "Distance purchases: you have 14 calendar days to withdraw without giving a reason (Royal Legislative Decree 1/2007, arts. 102 ff.).", s: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555" }] },
    general: { orgs: [{ es: "Consumo de tu comunidad autónoma u OMIC", en: "your regional consumer office or OMIC" }], links: ["consumo", "cidoc"] }
  }
});

RB.add("US", {
  name: { es: "Estados Unidos", en: "United States" }, flag: "🇺🇸", id: null,
  law: null,
  links: {
    cfpb: { t: "CFPB: Submit a complaint", u: "https://www.consumerfinance.gov/complaint/", n: { es: "Bancos, tarjetas, préstamos, envíos de dinero. Tel. (855) 411-2372.", en: "Banks, cards, loans, money transfers. Phone (855) 411-2372." } },
    occ: { t: "HelpWithMyBank.gov (OCC)", u: "https://www.helpwithmybank.gov/", n: { es: "Bancos nacionales.", en: "National banks." } },
    ftc: { t: "FTC: ReportFraud.ftc.gov", u: "https://reportfraud.ftc.gov/", n: { es: "Estafas y malas prácticas. No resuelve casos individuales.", en: "Scams and bad business practices. Doesn't resolve individual cases." } },
    fcc: { t: "FCC Consumer Complaint Center", u: "https://consumercomplaints.fcc.gov/hc/en-us", n: { es: "Teléfono, internet, cable y satélite.", en: "Phone, internet, cable and satellite." } },
    naag: { t: "NAAG: Find my Attorney General", u: "https://www.naag.org/find-my-ag/", n: { es: "Fiscal general de tu estado.", en: "Your state attorney general." } },
    naic: { t: "NAIC: state insurance departments", u: "https://content.naic.org/state-insurance-departments", n: { es: "Regulador de seguros de tu estado.", en: "Your state insurance regulator." } },
    naruc: { t: "NARUC: state utility commissions", u: "https://www.naruc.org/about-naruc/our-mission/state-associate-and-federal-members/", n: { es: "Comisión de servicios públicos de tu estado.", en: "Your state public utility commission." } },
    usagov: { t: "USA.gov: where to file a consumer complaint", u: "https://www.usa.gov/consumer-complaints", n: { es: "Guía oficial por tipo de problema.", en: "Official guide by type of problem." } }
  },
  cat: {
    banco: { orgs: ["Consumer Financial Protection Bureau (CFPB)", { es: "el fiscal general de tu estado", en: "your state attorney general" }], links: ["cfpb", "occ", "naag"],
      plazos: [{ es: "El CFPB envía tu queja a la empresa; la mayoría responde en 15 días.", en: "The CFPB sends your complaint to the company; most respond within 15 days.", s: "https://www.consumerfinance.gov/complaint/" }] },
    fintech: { orgs: ["Consumer Financial Protection Bureau (CFPB)", "Federal Trade Commission (FTC)"], links: ["cfpb", "ftc", "naag"] },
    tele: { orgs: ["Federal Communications Commission (FCC)"], links: ["fcc", "naag"] },
    servicios: { orgs: [{ es: "la comisión de servicios públicos de tu estado", en: "your state public utility commission" }], links: ["naruc", "naag"] },
    salud: { orgs: [{ es: "el departamento de seguros de tu estado", en: "your state insurance department" }], links: ["naic"] },
    general: { orgs: [{ es: "el fiscal general de tu estado", en: "your state attorney general" }, "Federal Trade Commission (FTC)"], links: ["naag", "ftc", "usagov"] }
  }
});
