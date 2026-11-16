---
name: nueva-nota
description: Escribir, investigar o retomar una nota del portfolio de Agus (9gustin.vercel.app) sobre ingeniería de software, IA y el rol del desarrollador. Usalo cuando Agus diga cosas como "vamos a armar una nota", "quiero escribir sobre X", "investiguemos para una nota", "sigamos con la nota de X", "pasala a en progreso" o "subí la nota". Cubre la charla para darle forma, la investigación con fuentes, la redacción en su voz, la lámina botánica de portada, los estados (borrador, en progreso, terminada) y la publicación.
---

# Nueva nota

Ayudás a Agus a construir una nota de su portfolio charlando. Él trae un tema o una intuición; vos lo ayudás a investigar, ordenar y escribir, y la publican cuando él diga.

**Antes de empezar, leé [../portfolio-9gustin/reference.md](../portfolio-9gustin/reference.md)**: rutas, comandos, esquema de las notas, estados, láminas, voz y cómo publicar. No repitas acá lo que ya está ahí.

## 1. Arrancar

- Hacé `git pull --rebase` en el repo y mirá `src/content/notas/` para ver qué notas existen.
- Si Agus quiere **retomar** una nota, abrí ese archivo y seguí desde ahí. Contale en dos líneas en qué estado está.
- Si es **nueva**, preguntale lo justo para arrancar: de qué quiere hablar y qué le hizo pensar en eso. No hagas un cuestionario: con el tema alcanza para empezar.

## 2. Darle forma charlando

- Proponé 2 o 3 ángulos posibles con una línea cada uno y dejá que elija.
- Si el tema lo pide, **investigá**: buscá en la web, leé las fuentes y traé lo que encontraste resumido, con links. Distinguí datos de opiniones. Guardá las fuentes para el final de la nota.
- Proponé un esqueleto con los `##` y una línea por sección. Ajustalo con él antes de redactar.
- Las opiniones son de Agus. Preguntale qué piensa en los puntos clave; no le pongas posturas que no dijo.

## 3. Crear el archivo temprano

Apenas haya tema y título tentativo, creá `src/content/notas/<slug>.md` con `borrador: true`, aunque esté vacío de contenido. Así el trabajo queda guardado y otros chats ven que ese slug está tomado.

- `fecha`: hoy.
- Elegí una lámina que no esté en uso (lista en la referencia) o buscá una nueva. Proponé la planta y el `porQue` a Agus; tienen que conectar con el tema y tener un poco de humor.

## 4. Escribir

- Escribí en la voz de Agus (ver "Voz y escritura" en la referencia).
- Iterá por partes: mostrá una sección, ajustá con lo que diga, seguí. No le tires la nota entera de una si están todavía pensándola.
- Si hubo investigación, cerrá con `## Fuentes` y una lista de links con una línea cada uno.
- Mostrale cómo queda en el sitio local cuando haya algo para ver (ver "Comandos" en la referencia).

## 5. Elegir el estado

Preguntale a Agus cómo quiere dejarla:

| Él dice | Frontmatter |
|---|---|
| "Dejala guardada, no la publiques" | `borrador: true` |
| "Subila como investigación en proceso" | `enProgreso: true` y `actualizada: <hoy>` (sacá `borrador`) |
| "Está terminada" | sin `borrador` ni `enProgreso` |

Una nota en progreso se publica y se ve con la etiqueta "en progreso" y un aviso de que sigue creciendo. Cada vez que la retomen y publiquen, actualizá `actualizada`.

## 6. Publicar

Solo cuando Agus lo confirme. Seguí "Publicar" en la referencia: pull, build, `git add` solo de la nota y su lámina (y el README si sumaste crédito), commit, push y verificación con `curl` hasta que la URL `https://9gustin.vercel.app/notas/<slug>` responda 200. Pasale el link.

## Notas de ejemplo

Las notas que tienen `ejemplo: true` son relleno provisorio, no las escribió Agus en serio. Si él escribe una nota real sobre el mismo tema, preguntale si borra la de ejemplo.
