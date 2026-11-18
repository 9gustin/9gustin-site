---
titulo: broti
resumen: Un asistente al que le hablo para anotar pendientes, rutinas y recordatorios, desde una pantallita e-paper o la web.
fecha: 2026-11-18
orden: 1
enProgreso: true
stack: [Next.js, TypeScript, Supabase, OpenAI, ESP32, e-paper]
planta:
  imagen: /plates/calendula.jpg
  nombre: Calendula officinalis
  fuente: Köhler, 1887
  porQue: La caléndula. Su nombre viene de las calendas, el primer día de cada mes.
---

## El problema

Agendo todo en Google Calendar y la interfaz no me gusta. Mezcla eventos, tareas y recordatorios, y para anotar algo rápido tengo que abrir el celu y navegar. Las cosas que hago todos los días no tienen un lugar donde tildarlas.

## La solución

`broti` (de "brote") es un asistente al que le hablo:

- **Una pantallita en el escritorio:** un ESP32 con e-paper que muestra lo que tengo hoy. Aprieto el botón y le pregunto o le pido cosas: "¿qué tengo hoy?", "pasá lo del dentista a mañana".
- **Pendientes y recordatorios:** son lo mismo. Si tienen hora, son un recordatorio.
- **Rutinas:** lo que hago todos los días, para tildar y ver si ya lo hice.
- **Web:** lo mismo desde la compu o el celu.
- **Integraciones con API keys:** cada dispositivo tiene su key, y más adelante la idea es sumarlo a Claude como MCP.

## Cómo está hecho

- Next.js en Vercel hace de web y de API, con Supabase para la base y el login.
- La voz se transcribe con la API de OpenAI y un LLM con tools resuelve el pedido sobre la misma lógica que usa la web.
- El firmware del ESP32 está hecho con PlatformIO.
- Es el primer proyecto que arranco con [semillero](https://github.com/9gustin/semillero), una forma de trabajar con agentes de IA que me armé: la idea se charla, se arma la arquitectura y un plan por etapas con Opus, y cada tarea la ejecuta Sonnet.

## Estado

En planificación. El plan está listo y la primera meta es hablarle a la pantallita.
