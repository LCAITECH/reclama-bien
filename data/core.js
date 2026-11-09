/* Reclamá Bien · registro de países. Cada archivo data/*.js llama a RB.add(código, datos).
   Esquema: name {es,en}, flag, id (documento), law {t,u,cite{es,en}} | null,
   links {clave: {t, u, n{es,en}}}, cat {banco|fintech|tele|luz|gas|agua|servicios|salud|compra|general:
   {orgs:[texto|{es,en}], links:[claves], plazos:[{es,en,s}]}}, first {es,en}, local {es,en,links}.
   Todos los links se verificaron con curl o navegador. last checked: 2026-11 */
window.RB = window.RB || { C: {}, order: [] };
RB.add = function (code, data) { data.code = code; data.checked = "2026-11"; RB.C[code] = data; RB.order.push(code); };
