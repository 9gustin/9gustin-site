---
titulo: broti
resumen: Un gatito negro al que le hablo para llevar mi día a día en un solo chat, desde el celu, la web o una pantallita e-paper.
fecha: 2026-11-18
orden: 1
enProgreso: true
stack: [Next.js, TypeScript, Supabase, Claude, OpenAI, ESP32, e-paper]
planta:
  imagen: /plates/calendula.jpg
  nombre: Calendula officinalis
  fuente: Köhler, 1887
  porQue: La caléndula. Su nombre viene de las calendas, el primer día de cada mes.
---

## El problema

Agendo todo en Google Calendar y la interfaz no me gusta. Mezcla eventos, tareas y recordatorios, y para anotar algo rápido tengo que abrir el celu y navegar. Las cosas que hago todos los días no tienen un lugar donde tildarlas.

Y el resto del día está desparramado en otras apps: una para el colectivo, otra para las recetas, una planilla para los gastos, las notas en cualquier lado. Además armé apps propias para algunas de esas cosas ([cuando-pasa](/proyectos/cuando-pasa) y [recetario](/proyectos/recetario)), y cada una es una página más para abrir.

## La solución

`broti` es un asistente al que le hablo, y es un gatito negro. El nombre venía de "brote". Cuando la mascota pasó a ser un gato, el gato se lo quedó.

La idea es tener **un solo lugar para la vida diaria**. No hay menús ni pantallas: todo es un chat. Le pido las cosas escribiendo o hablando y contesta con tarjetas que puedo tildar. Se instala en el celu como una app.

- **Pendientes, rutinas y recordatorios:** "sumá a mis pendientes pagar la luz y llamar a mamá" los muestra juntos en una tarjeta. Las rutinas tienen su ventana ("la pastilla, hasta que la tilde").
- **Ahora:** al abrirlo, broti muestra lo que toca en este momento.
- **Avisos al celu:** "recordame a las 17". Los urgentes suenan como alarma e insisten. Cada aviso se puede apagar, y de 22 a 8 no manda nada que no le haya pedido.
- **Colectivos:** la rutina "ir al trabajo" me avisa a la hora de salir qué colectivos vienen. Es cuando-pasa, adentro de broti.
- **Comida:** le cuento cómo como, anoto lo que como y me sugiere con mis recetas. Es recetario, adentro de broti.
- **Plata:** gastos por voz, presupuesto del mes, vencimientos de servicios, resúmenes de la tarjeta en PDF, ingresos y un simulador de compras en cuotas.
- **Hábitos y gimnasio:** "natación 3 veces por semana", y en el gym abro el día que toca para anotar pesos y repeticiones.
- **Notas personales:** cosas para charlar en terapia, con un resumen semanal.
- **Una pantallita en el escritorio:** un ESP32 con e-paper para ver lo de hoy y hablarle apretando un botón.

Hay una regla que atraviesa todo: **broti es un aliado, no un consejero.** No arma planes de entrenamiento, de comida ni financieros, y no da consejos. Ayuda a organizar y cumplir lo que yo ya decidí, y cuando sugiere algo, sale de lo que le conté.

## Cómo está hecho

- Next.js en Vercel hace de web y de API, con Supabase para la base y el login.
- Claude, con tools, resuelve cada pedido. El asistente está armado por módulos (pendientes, colectivos, gastos, comida, hábitos), así cada área suma sus herramientas sin enredar a las otras. Cada módulo tiene evaluaciones automáticas.
- La voz se transcribe con la API de OpenAI.
- **Todo lo privado va cifrado**, con una clave por usuario: no solo el texto, también qué hice y cuándo. En la base no se puede leer qué comí, si fui al gym ni cuánto gasté.
- Las caras del gato se generan con la API de imágenes de OpenAI, editando siempre el mismo logo para que no cambie de gato.
- El firmware del ESP32 está hecho con PlatformIO.

### Lo que investigamos

Antes de sumar algo grande, lo investigo con el agente y lo pruebo:

- **Mercado Pago:** si se pueden traer los gastos solos. La API sirve, pero no muestra todo (las transferencias no dicen a quién) y en Argentina no hay open finance. Quedó una sincronización una vez por día, y broti pregunta por lo que no reconoce.
- **Tu Bondi:** no tiene una API pública. Se usan los mismos pedidos que su web, con una cola para no sobrecargarla.
- **El hardware:** qué placa con e-paper y micrófono me servía, y cómo mandarle audio.
- **Cifrado:** cómo cifrar todo sin perder los avisos, que corren cada minuto.

### Cómo lo construyo

Es el primer proyecto que arranco con [semillero](https://github.com/9gustin/semillero), una forma de trabajar con agentes de IA que me armé. El ciclo es siempre el mismo:

1. **Producto:** charlo con el agente lo que quiero y queda en un documento de próximas features, con sus reglas (por ejemplo, "aliado, no consejero").
2. **Plan:** con Opus se baja a un plan de desarrollo por etapas, con pasos chicos: paso, prueba, commit.
3. **Ejecución:** Sonnet ejecuta el plan de punta a punta. Cada etapa termina en producción, con su versión en el changelog y su release.
4. **Prueba:** lo uso, digo qué no me gustó y vuelve al paso 1.

Con este ciclo, la primera tanda sumó diez etapas en una noche: de la 0.0.1 a la 0.0.10. La segunda fue un rediseño: primero diseñé con el agente cada tarjeta y un onboarding, eligiendo entre propuestas, y después Sonnet lo llevó a producción en nueve etapas, de la 0.0.12 a la 0.0.20.

## Estado

En producción, en la versión 0.0.20, y probándolo. La última tanda rediseñó las tarjetas para mostrar una cosa por pantalla, sin nada flotando sobre el chat, y sumó un onboarding paso a paso para configurar avisos, el colectivo, las rutinas y la plata. Lo que sigue:

- Vincular Mercado Pago con un botón, sin pegar claves.
- La pantallita: el firmware está escrito y lo estoy probando.
- Traer mis recetas de recetario y apagar cuando-pasa cuando broti lo reemplace del todo.
- Planes: gratis con tus propias claves de IA, uno pago y la opción de instalarlo en tu propio servidor.
