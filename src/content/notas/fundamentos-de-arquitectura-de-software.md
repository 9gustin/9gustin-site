---
titulo: Fundamentos de arquitectura de software
resumen: Apuntes del curso de fundamentos de arquitectura de software de Platzi, con lo que me quedó sobre decisiones, requisitos, observabilidad y tipos de arquitectura.
fecha: 2026-11-18
tags: [arquitectura, ingeniería]
enProgreso: true
actualizada: 2026-11-18
planta:
  imagen: /plates/cacao.jpg
  nombre: Theobroma cacao
  fuente: Köhler, 1887
  porQue: El cacao fue moneda en Mesoamérica. Las features por las que te pagan son las que hay que cuidar primero.
---

Estoy haciendo el curso de fundamentos de arquitectura de software de Platzi y esta nota es mi resumen. La voy a ir completando a medida que avance el curso.

## Qué hace un arquitecto

Diseña soluciones a problemas. Para eso analiza dependencias, fronteras, componentes y qué patrones conviene aplicar.

Una de sus herramientas es el modelo C4, que sirve para representar la arquitectura. Se suma a los diagramas de secuencia y a UML. La idea es apoyarse en distintos diagramas según lo que haya que explicar.

## Documentar las decisiones

Cuando hay que decidir algo, conviene hacer una POC o un spike y dejar por escrito qué opciones había, cuál se eligió y por qué. Ese registro es lo que después le explica a alguien nuevo (o a vos mismo en seis meses) por qué el sistema es como es.

Las opciones se presentan al equipo y la decisión sale de un debate abierto. No se impone. Si se charlan bien las alternativas, la decisión queda mejor y el equipo la defiende.

También conviene tener plantillas predeterminadas para los distintos tipos de problemas y soluciones, así no se arranca de cero cada vez.

## Arquitectura y Agile

La metodología tiene que ser compatible con Agile. No se propone algo enorme de entrada. La arquitectura crece a medida que crece la solución.

## Cuidado con la falsa productividad

"Mergeé este PR así nomás, total después lo arreglo." Eso es falsa productividad y no hay que aceptarlo. Hacen falta patrones bien definidos y que la importancia de cada cosa esté bien comunicada, para que cada una se trate como corresponde.

## Entender el problema primero

Antes de diseñar, hay que entender por qué pasa el problema, qué lo causa y si vale la pena resolverlo.

Ahí entra el negocio. Si la plataforma tiene muchas funcionalidades y la que estoy diseñando es la que genera plata, el nivel de importancia es otro. Eso se analiza para cada problema o solución, y de ahí sale cuánta disponibilidad hay que planificar.

## Impacto y costo

Lo mismo desde el otro lado: qué pasa si esto no está disponible y cuánto cuesta que no lo esté. Con esa respuesta se decide cuánto esfuerzo poner en lo que sea.

## Requisitos funcionales y no funcionales

Los funcionales son los de negocio: qué hace el sistema. Es lo primero que hay que entender. Pero el trabajo de un arquitecto está sobre todo en los no funcionales.

Para cada uno hay que definir qué se espera, quién lo verifica y cómo se verifica que se cumple.

## Qué es esencial y qué es accesorio

Hay que identificar qué es esencial, qué es importante y qué es accesorio. Con eso se decide cuánto foco darle a los mecanismos de resiliencia.

El ejemplo que más me quedó es el de las apps bancarias. Cuando hay una caída grande, o cuando tenés mala señal, muchas te dejan hacer transferencias aunque otras funciones no anden. Priorizaron lo esencial: lo que los usuarios vienen a hacer y lo que le importa al negocio.

## Observabilidad

Las tres herramientas básicas son métricas, logs y trazas.

Dos cosas para tener presentes:

- Siempre que se pueda, el monitoreo se automatiza.
- Tiene un costo extra, y no es chico. No se puede observar todo con el mismo nivel de detalle.

Por eso conviene mirar qué funcionalidades son las que los usuarios pagan. Esas son las principales y las que más probablemente justifican invertir en observabilidad y resiliencia.

## No quedarse en "siempre lo hicimos así"

Hoy, con inteligencia artificial, probar algo nuevo es mucho más barato. Se pueden armar POCs, análisis y comparaciones en poco tiempo. Hay otros productos, sobre todo startups, que prueban cosas nuevas y pueden sacar ventaja. Hay que estar abiertos a lo nuevo.

## Tipos de arquitectura

- **Cliente-servidor.** Un servidor dedicado se encarga de la lógica y un cliente simple le pega. (Todavía no me cierra del todo, lo reviso.)
- **Monolítica.** Todo vive en una sola aplicación.
- **Orientada a servicios.** Los servicios exponen contratos de distintos tipos.
- **Orientada a eventos.** Hay productores y consumidores. Hay que cuidar la línea de tiempo y que los eventos lleguen en el orden correcto. Funciona bien combinada con diseño orientado a dominio.
- **Microservicios.** Un problema grande se parte en un servicio por cada funcionalidad.

## Para seguir

- Entender bien cliente-servidor.
- Sumar ejemplos propios de cada tipo de arquitectura.
- Cerrar con lo que cambie al terminar el curso.
