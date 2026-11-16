---
titulo: El costo oculto del código generado
resumen: Escribir código nunca fue tan barato. Mantenerlo sigue costando lo mismo.
fecha: 2026-11-12
tags: [ingeniería, ia]
ejemplo: true
planta:
  imagen: /plates/coffea.jpg
  nombre: Coffea arabica
  fuente: Köhler, 1887
  porQue: Esta nota salió de varias tardes revisando PRs con demasiado café.
---

Escribir código nunca fue tan barato. Leerlo, entenderlo y mantenerlo sigue costando lo mismo que antes, y ahí es donde se acumula la cuenta.

## Lo que no se ve en el diff

Un PR de 400 líneas generadas pasa los tests y se ve prolijo. La pregunta es quién va a entender por qué existe `retryWithBackoff` dentro de seis meses.

```js
// funciona, pero ¿alguien decidió esto?
const data = await retryWithBackoff(fetchStops, { max: 7 });
```

El número 7 no lo eligió nadie. Apareció. Y como el código funciona, nadie lo cuestiona hasta que un día la API externa empieza a responder lento y el sistema se queda reintentando en cadena.

## Código prolijo sin dueño

La deuda técnica de antes se reconocía a simple vista: funciones de 300 líneas, nombres raros, comentarios de "no tocar". La de ahora es más difícil de ver, porque el código generado suele estar bien formateado y bien nombrado. Lo que le falta es una decisión detrás.

Algunas preguntas que me empecé a hacer antes de aprobar un cambio:

- ¿Puedo explicar cada parte sin volver a leer el prompt?
- ¿Hay valores mágicos que nadie eligió?
- Si esto se rompe a las 3 de la mañana, ¿sé por dónde empezar?

Si la respuesta a alguna es no, el costo no desapareció. Solo se movió para más adelante.
