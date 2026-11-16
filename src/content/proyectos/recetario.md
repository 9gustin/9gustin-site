---
titulo: recetario
resumen: Las recetas de tu casa, compartidas con tu familia, con un plan semanal armado con IA.
fecha: 2026-11-11
orden: 2
enProgreso: true
stack: [Next.js, TypeScript, Supabase, Claude API, Tailwind, PWA]
repo: https://github.com/9gustin/recetario
planta:
  imagen: /plates/olea.jpg
  nombre: Olea europaea
  fuente: Köhler, 1887
  porQue: El olivo. Un chorrito de aceite de oliva arranca casi cualquier receta.
---

## El problema

Decidir qué comer todos los días cansa. Las recetas están desparramadas entre capturas, links y la memoria de alguien de la casa. Cada persona come distinto: uno tiene un plan de la nutricionista, otro no come ciertas cosas. Y la lista de compras se arma a último momento, en el súper.

## La solución

`recetario` junta todo eso en un solo lugar para la familia:

- **Recetario compartido:** creás un grupo, por ejemplo "Casa", e invitás a los demás con un link. Las recetas se cargan escribiendo, pegando un link, con una foto o dictándolas.
- **Plan semanal con IA:** le pedís "armame la semana" y lo van ajustando charlando. Respeta las restricciones de cada uno y varía las comidas.
- **Plan de la nutricionista:** subís el plan (PDF, foto o audio), la IA lo simplifica y registrás cada comida con un toque.
- **Lista de compras:** se arma sola desde el plan, ordenada por sección del súper, y se tacha entre todos en tiempo real.
- **Modo cocinar:** un paso por pantalla, como historias de Instagram, con timers.

## Cómo está hecho

- Next.js como PWA, con TypeScript, Tailwind y shadcn/ui.
- Supabase para base de datos, autenticación, archivos y tiempo real.
- La API de Claude para importar recetas, el asistente, los perfiles alimentarios y el plan semanal, con evaluaciones automáticas para medir cada función de IA.
- Lo estoy construyendo tarea por tarea con agentes de IA: un plan por etapas con criterios de aceptación, distintos modelos para configurar, programar y revisar, y todo documentado en el repo.

## Estado

En progreso. Lo voy construyendo etapa por etapa y sumando funciones.
