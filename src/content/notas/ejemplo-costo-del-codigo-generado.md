---
titulo: El costo oculto del código generado
resumen: Escribir código nunca fue tan barato. Mantenerlo sigue costando lo mismo.
fecha: 2026-11-15
tags: [ingeniería, ia]
borrador: true
planta:
  imagen: /plates/coffea.jpg
  nombre: Coffea arabica
  fuente: Köhler, 1887
  porQue: Esta nota salió de varias tardes revisando PRs con demasiado café.
---

> Esta es una nota de ejemplo para ver cómo se ve el formato. Tiene `borrador: true`, así que solo aparece con `npm run dev` y nunca se publica. Borrala o reescribila cuando quieras.

Escribir código nunca fue tan barato. Leerlo, entenderlo y mantenerlo sigue costando lo mismo que antes, y ahí es donde se acumula la cuenta.

## Lo que no se ve en el diff

Un PR de 400 líneas generadas pasa los tests y se ve prolijo. La pregunta es quién va a entender por qué existe `retryWithBackoff` dentro de seis meses.

```js
// funciona, pero ¿alguien decidió esto?
const data = await retryWithBackoff(fetchStops, { max: 7 });
```

La deuda técnica de esta época no es código feo. Es código prolijo sin dueño.
