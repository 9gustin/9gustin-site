---
titulo: cuando-pasa
resumen: Tus colectivos de todos los días en un solo lugar, para saber cuándo salir de casa.
fecha: 2026-11-13
orden: 1
enProgreso: true
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

En Córdoba, para saber cuándo pasa el colectivo tenías dos opciones, y ninguna está pensada para el viaje de todos los días.

**Google Maps** muestra de todo a la vez: líneas, combinaciones, caminatas, horarios estimados. Para un viaje nuevo está bien, pero si ya sabés qué colectivos te sirven, cuesta encontrar tu línea y entender cuándo llega.

**Tu Bondi** tiene los datos, pero son muchos clics. Elegís la línea, después el sentido, después la parada, y repetís todo por cada línea que te sirve. Si tenés tres opciones para ir al trabajo, son tres veces el mismo recorrido.

Las dos están hechas para explorar. Pero el viaje de todos los días no se explora: ya sabés lo que querés.

## La solución

`cuando-pasa` está pensado para rutinas. Guardás una vez tu rutina, por ejemplo "ida al trabajo", con tu parada y todas las líneas que te sirven. Desde ahí, abrís la app y ves en una sola pantalla cuándo llega cada una.

El caso principal es la ida y vuelta del trabajo: desde tu casa mirás cuándo pasan tus líneas y calculás cuándo salir, sin llegar a la parada a esperar. Y a la vuelta, lo mismo desde el trabajo.

## Cómo está hecho

- Una web app instalable (PWA), para tenerla en el celular como cualquier app.
- Un servidor en Node.js sin dependencias de npm, que toma los datos de Tu Bondi.
- Todos los pedidos a Tu Bondi pasan por un único cliente con cola de un pedido por segundo, caché y deduplicación, para no sobrecargar la fuente de datos.
- Tests con respuestas grabadas, así no dependen de la API en vivo.

## Estado

Está en progreso. Lo estoy usando y ajustando para mis propios viajes.
