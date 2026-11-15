---
titulo: cuando-pasa
resumen: Cuándo llega el colectivo a tu parada, con datos de Tu Bondi.
fecha: 2026-11-13
orden: 1
stack: [Node.js, SQLite, PWA, JavaScript]
repo: https://github.com/9gustin/cuando-pasa
sitio: https://cuando-pasa.vercel.app
planta:
  imagen: /plates/echeveria.jpg
  nombre: Echeveria canaliculata
  fuente: Curtis's Botanical Magazine, 1857
  porQue: Una suculenta, porque aguanta mucho esperando. Como uno en la parada.
---

## El problema

En Córdoba, saber cuándo pasa el colectivo implica abrir una app pesada, buscar la línea y la parada, y esperar a que cargue. Para algo que se consulta parado en la esquina, son demasiados pasos.

## La solución

Una web app instalable (PWA) que muestra los próximos colectivos de tu parada apenas la abrís, usando los datos de Tu Bondi.

## Cómo está hecho

- Servidor en Node.js sin dependencias de npm.
- Todos los pedidos a Tu Bondi pasan por un único cliente con cola de un pedido por segundo, caché y deduplicación, para no sobrecargar la fuente de datos.
- Tests con respuestas grabadas, así no dependen de la API en vivo.

<!-- Completar: qué aprendiste, capturas, próximos pasos. -->
