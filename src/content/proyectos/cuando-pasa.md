---
titulo: cuando-pasa
resumen: Tus colectivos de todos los días en un solo lugar, para saber cuándo salir de casa.
fecha: 2026-11-13
orden: 1
stack: [Node.js, JavaScript, PWA, Vercel]
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

`cuando-pasa` está pensado para rutinas. Creás un viaje una vez, por ejemplo "Ir al trabajo": buscás la esquina, elegís hacia dónde vas (hacia el centro o hacia afuera) y la app te muestra la parada de esa vereda con todas las líneas que pasan. El viaje queda fijo en el inicio.

Desde ahí, abrís la app y ves en una sola pantalla todos los colectivos que vienen a tu parada, ordenados por hora.

- **Todos los que vienen**: cada línea con sus próximos dos coches, en cuántos minutos llega, a qué hora y cuántas paradas le faltan. Si el 18 está a una parada y el 19 a seis, lo ves de un vistazo y decidís cuál esperar.
- **Filtro de líneas**: apagás las que no te sirven y quedan guardadas en el celular.
- **La calle**: arriba, una franja con los colectivos de los próximos 30 minutos, ubicados según cuánto les falta para llegar.
- **Desvíos**: si Tu Bondi avisa un desvío, aparece en el colectivo.

Cada colectivo se dibuja como los de la calle: cartel LED ámbar adelante y la franja con el color de su empresa.

El caso principal es la ida y vuelta del trabajo: desde tu casa mirás cuándo pasan tus líneas y calculás cuándo salir, sin llegar a la parada a esperar. Y a la vuelta, lo mismo desde el trabajo.

## Cómo está hecho

- Una web app instalable (PWA), con HTML, CSS y JavaScript sin framework ni paso de compilación.
- Un servidor en Node.js sin dependencias de npm. En producción corre como funciones en Vercel.
- Tu Bondi no tiene una API pública: la app usa los mismos pedidos que su web. El pedido principal trae un solo colectivo por línea, así que se combina con otro que trae todos los que van a pasar, igual que hace la web oficial.
- Todos los pedidos a Tu Bondi pasan por un único cliente con cola de un pedido por segundo, caché y deduplicación, para no sobrecargar la fuente de datos.
- Las paradas que faltan hoy se estiman por distancia. En el repo hay una versión del servidor con SQLite que aprende el orden real de las paradas: el mismo coche aparece en varias paradas con distinta hora estimada, y eso da el orden.
- Tests con respuestas reales grabadas, así no dependen de la API en vivo.
- Lo armé con agentes de IA. Con Claude Opus investigué cómo funciona Tu Bondi y escribí el spec, el plan de desarrollo y el diseño. Después Claude Sonnet implementó el plan etapa por etapa, frenando al final de cada una para que yo revisara.
