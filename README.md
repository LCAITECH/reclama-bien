# Reclamá Bien · Claim It Right (by LCA ITECH)

Sitio estático, sin backend, sin frameworks, sin trackers y sin scripts externos. Español neutro e inglés (toggle ES/EN guardado en localStorage).

- `index.html`, `styles.css`, `app.js` (interfaz; la constante `RECLAMI_URL` define el link del botón de Reclami).
- `js/rubros.js` (rubros, motivos y pedidos ES/EN), `js/i18n-es.js` y `js/i18n-en.js` (textos y plantillas de carta), `js/letter.js` (arma las cartas y el "dónde presentarlo").
- `data/*.js`: organismos, leyes y links oficiales por país (AR, UY, CL, PY, BO, PE, CO, EC, MX, CR, PA, DO, ES, US). Last checked: 2026-11.
- País por defecto: el guardado, si no la región de `navigator.language`, si no Argentina. Sin geo-IP.
- Todo el armado del reclamo corre en el navegador. No se envía ni se guarda ningún dato del formulario.
- `?static` en la URL desactiva la animación del hero (útil para capturas).
