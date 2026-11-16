---
name: nuevo-proyecto
description: Sumar o actualizar un proyecto en el portfolio de Agus (9gustin.vercel.app). Usalo cuando Agus diga "agreguemos un proyecto", "sumá X al portfolio", "creá el proyecto de X en la página", "actualizá el proyecto de X" o "ya no está en progreso". Cubre leer el repo para entender el proyecto, contar el problema y la solución con sus palabras, el estado en progreso, la lámina de portada, hacer público el repo si hace falta (con revisión de secretos) y publicar.
---

# Nuevo proyecto

Ayudás a Agus a sumar un proyecto a su portfolio, contado como un caso: qué problema resuelve, cómo lo resuelve y cómo está hecho.

**Antes de empezar, leé [../portfolio-9gustin/reference.md](../portfolio-9gustin/reference.md)**: rutas, comandos, esquema de proyectos, láminas, voz y cómo publicar. No repitas acá lo que ya está ahí.

## 1. Entender el proyecto

- Hacé `git pull --rebase` en el repo del sitio y mirá `src/content/proyectos/` para ver qué hay y qué `orden` tiene cada uno.
- Averiguá todo lo posible sin preguntar. Con el `gh` de WSL (ya tiene sesión como `9gustin`):
  - `gh repo view 9gustin/<repo> --json description,homepageUrl,createdAt,stargazerCount,visibility,primaryLanguage`
  - el README y los docs del repo (`gh api repos/9gustin/<repo>/readme`, o leé la carpeta si está en `~/projects/<repo>`)
  - el stack desde `package.json` o equivalente.
- Si hay sitio online, fijate si se puede ver sin iniciar sesión (`curl -s -o /dev/null -w '%{http_code}'`). Si redirige al login, no pongas `sitio`.

## 2. Contarlo con Agus

El README dice qué hace el proyecto; el problema lo sabe Agus. Preguntale:

- ¿Qué problema tenías? ¿Qué usabas antes y por qué no alcanzaba?
- ¿Para quién es y cuál es el caso de uso principal?
- ¿Está en progreso o terminado?

Con eso escribí, en su voz y en este orden:

1. `## El problema`: desde el usuario, con las alternativas que había y por qué no servían.
2. `## La solución`: qué hace y cómo se usa en el caso principal. Si son varias funciones, una lista con un **nombre** corto por ítem.
3. `## Cómo está hecho`: stack y decisiones técnicas que valgan la pena. Si se construyó con agentes de IA o con alguna forma particular de programar, contalo: la sección de proyectos dice que ahí Agus explora formas de programar con IA.
4. `## Estado`: solo si está en progreso, una o dos líneas.

No afirmes que algo funciona si no lo verificaste en el repo. Ante la duda, escribilo más general o preguntale.

## 3. Archivo y lámina

- Creá `src/content/proyectos/<repo>.md` con el esquema de la referencia. `enProgreso: true` si no está terminado.
- `orden`: preguntale dónde lo quiere. Por defecto, los más recientes y en progreso van primero. Si tenés que mover otros, cambiá solo su `orden`.
- Elegí una lámina que no esté en uso o buscá una nueva, con un `porQue` que conecte la planta con el proyecto. Proponésela a Agus.

## 4. Si el repo es privado

Agus puede pedir que lo hagas público. Es un cambio que expone todo el historial, así que **antes** revisá:

1. Archivos sensibles que hayan estado alguna vez en el historial: `git log --all --name-only --format= | sort -u | grep -iE '(^|/)\.env|secret|credential|\.pem$|\.key$|service-account'`. Que solo aparezcan cosas como `.env.example`.
2. Claves en el contenido del historial: `git log --all -p` filtrado por patrones como `AKIA…`, `sk-…`, `sk-ant-…`, `ghp_…`, `AIza…`, `eyJhbGciOi…` (tokens JWT, por ejemplo de Supabase), `-----BEGIN … PRIVATE KEY`, y asignaciones del tipo `api_key = "…"`. Las referencias a variables de entorno (`env(…)`, `process.env.…`) están bien.
3. Que los `.env` reales estén ignorados: `git check-ignore -v .env.local`.
4. Datos personales: emails que no sean de prueba en `git grep`.

Si encontrás algo real, **no lo hagas público**: contale a Agus qué encontraste y dónde. Si está limpio, `gh repo edit 9gustin/<repo> --visibility public --accept-visibility-change-consequences` y confirmá con `gh repo view`.

## 5. Publicar

Solo cuando Agus lo confirme. Seguí "Publicar" en la referencia: pull, build, `git add` solo del proyecto, su lámina y los `orden` que cambiaste, commit, push y verificación con `curl` hasta que `https://9gustin.vercel.app/proyectos/<repo>` responda 200. Pasale el link.

## Actualizar un proyecto existente

Si Agus dice que un proyecto terminó, sacá `enProgreso` y la sección `## Estado`. Si cambió algo importante, actualizá el texto con lo que él cuente y publicá igual que arriba.
