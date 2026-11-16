# Referencia del portfolio 9gustin

## Dónde está todo

| Qué | Dónde |
|---|---|
| Sitio publicado | https://9gustin.vercel.app |
| Repo (público) | https://github.com/9gustin/9gustin-site, rama `main` |
| Carpeta local (WSL Ubuntu) | `/home/v9gustin/projects/9gustin-site` |
| La misma carpeta vista desde Windows | `\\wsl.localhost\ubuntu\home\v9gustin\projects\9gustin-site` |
| Hosting | Vercel, proyecto `9gustin`. Cada push a `main` se publica solo en unos 20 segundos. |
| Fuente de estos skills | `plugin/skills/` dentro del repo |

Si el chat no está abierto en la carpeta del sitio, trabajá igual con las rutas absolutas de arriba. Si la herramienta de archivos no puede leer la ruta `\\wsl.localhost\...`, pedile a Agus que abra el chat en esa carpeta.

## Comandos

El proyecto vive en WSL. Corré **todo** (node, npm, git) dentro de WSL, no con las herramientas de Windows:

- El git de Windows falla con `dubious ownership` en carpetas de WSL.
- Node está instalado con nvm en WSL, así que hay que cargar nvm antes.

Desde una sesión de Windows:

```bash
wsl.exe -d Ubuntu -- bash -lc 'cd ~/projects/9gustin-site && source ~/.nvm/nvm.sh && npm run build'
```

Para varios comandos seguidos, o si llevan `$variables`, escribí un script en `\\wsl.localhost\ubuntu\tmp\<nombre>.sh` y corré `wsl.exe -d Ubuntu -- bash -lc 'bash /tmp/<nombre>.sh'`. Así el shell de Windows no expande las variables antes de tiempo. En la salida de `wsl.exe` filtrá los bytes nulos con `| tr -d '\0'`.

| Para | Comando (dentro de `~/projects/9gustin-site`, con nvm cargado) |
|---|---|
| Ver el sitio local | `npm run dev -- --host 0.0.0.0` → http://localhost:4321 (si el puerto está ocupado por otro chat, usá `--port 4322`, etc.) |
| Compilar | `npm run build` (falla si un archivo de contenido no cumple el esquema) |
| Traer cambios de otros chats | `git pull --rebase` |

En el navegador de la app, el servidor de desarrollo se puede levantar con un `.claude/launch.json` que corra `wsl.exe -d Ubuntu -- bash -lc "cd ~/projects/9gustin-site && source ~/.nvm/nvm.sh && npm run dev -- --host 0.0.0.0"` en el puerto 4321.

## Cómo está armado

Astro 5, sitio estático. Sin frameworks de UI.

```
src/
  content.config.ts        esquemas de proyectos y notas
  content/proyectos/*.md   un archivo por proyecto
  content/notas/*.md       un archivo por nota
  pages/index.astro        home: lámina de Haeckel + título + proyectos + notas
  pages/proyectos/         listado y página de cada proyecto ([id].astro)
  pages/notas/             listado y página de cada nota ([id].astro)
  pages/sobre-mi.astro     texto + línea de tiempo (lista `experiencia` al principio)
  pages/404.astro
  components/              Nav, Footer, Plate (tarjeta de proyecto), NoteRow, NotasVacias
  layouts/Base.astro       <head>, fuentes, nav y footer
  lib/content.ts           orden, filtros (borradores), fechas, minutos de lectura
  lib/social.ts            links del footer (solo GitHub y LinkedIn)
  styles/global.css        todo el CSS
public/plates/             láminas botánicas
```

El nombre del archivo es la URL: `src/content/notas/mi-nota.md` → `/notas/mi-nota`. Usá slugs en minúscula, sin tildes, con guiones.

## Esquema de una nota

```yaml
---
titulo: Título de la nota
resumen: Una oración. Se usa en la descripción al compartir el link.
fecha: 2026-11-16          # fecha de creación (YYYY-MM-DD)
tags: [ingeniería, ia]
borrador: false            # true = solo se ve con npm run dev, nunca se publica
enProgreso: false          # true = se publica con la etiqueta "en progreso" y un aviso de investigación en proceso
actualizada: 2026-11-20    # opcional, para notas en progreso: última vez que se trabajó
ejemplo: false             # true = texto provisorio de relleno (las 4 notas actuales lo son)
planta:
  imagen: /plates/coffea.jpg
  nombre: Coffea arabica   # nombre científico, va en itálica
  fuente: Köhler, 1887
  porQue: Una línea, en primera persona, de por qué esta planta para esta nota.
---
```

Estados de una nota:

| Estado | Frontmatter | Se ve en el sitio |
|---|---|---|
| Borrador | `borrador: true` | No (solo en local) |
| Investigación en proceso | `enProgreso: true` | Sí, con la etiqueta "en progreso" |
| Terminada | ninguno de los dos | Sí |

## Esquema de un proyecto

```yaml
---
titulo: nombre-del-proyecto   # suele ser el nombre del repo, en minúscula
resumen: Una oración que dice qué resuelve.
fecha: 2026-11-13             # cuándo empezó (creación del repo)
orden: 1                      # posición en la grilla (1 = primero)
enProgreso: true              # etiqueta "en progreso"
stack: [Next.js, TypeScript]
repo: https://github.com/9gustin/...
sitio: https://...            # opcional; solo si se puede ver sin iniciar sesión
destacado: 151★               # opcional, dato que se muestra en la tarjeta
planta:
  imagen: /plates/olea.jpg
  nombre: Olea europaea
  fuente: Köhler, 1887
  porQue: Una línea de por qué esta planta para este proyecto.
---
```

Cuerpo de un proyecto, siempre en este orden: `## El problema`, `## La solución`, `## Cómo está hecho` y, si está en progreso, `## Estado`. El problema se cuenta desde el usuario, con las alternativas que había y por qué no alcanzaban.

Proyectos actuales y su `orden`: cuando-pasa (1), recetario (2), react-notion-render (3). Agus sacó a propósito dj9 y comova: no los vuelvas a sumar.

## Láminas botánicas

Cada nota y cada proyecto tiene una lámina distinta. Son ilustraciones botánicas reales de **dominio público**, nunca dibujos hechos por vos.

En uso: `fern.jpg` (Haeckel, encabezado de la home), `echeveria.jpg` (cuando-pasa), `olea.jpg` (recetario), `camellia.jpg` (react-notion-render), `monstera.jpg` (sobre mí y una nota), `coffea.jpg`, `juglans.jpg`, `ilex.jpg` (notas). De reserva: `calendula.jpg`, `papaver.jpg`, `cacao.jpg`.

Para conseguir una nueva:

1. La fuente preferida es *Köhler's Medizinal-Pflanzen* (1887): acuarelas con fondo blanco que combinan con el sitio. Alternativas: *Curtis's Botanical Magazine*, Haeckel (*Kunstformen der Natur*), grabados antiguos.
2. Buscá en la API de Wikimedia Commons y quedate solo con resultados cuya licencia diga `Public domain`. Ejemplo con Node (en Windows hay `node`; Python no está instalado):

   ```js
   const q = 'intitle:"Köhler–s Medizinal-Pflanzen"';
   const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=40&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|extmetadata&iiextmetadatafilter=LicenseShortName&iiurlwidth=960`;
   const d = await (await fetch(u, { headers: { 'User-Agent': 'portfolio-plates/1.0' } })).json();
   for (const p of Object.values(d.query.pages)) console.log(p.title, '|', p.imageinfo[0].extmetadata?.LicenseShortName?.value, '|', p.imageinfo[0].thumburl || p.imageinfo[0].url);
   ```

   La API corta si le hacés muchos pedidos seguidos: esperá un par de segundos entre descargas.
3. Descargala a `public/plates/<genero>.jpg` en minúscula (ej. `lavandula.jpg`), de 960 px de ancho o menos. Abrila y mirala antes de usarla.
4. Elegí la planta por algo que la conecte con el tema y escribí el `porQue`, en el tono de los existentes: "La yerba mate. Las herramientas chicas son como un mate, simples y de todos los días."
5. Sumá el crédito en la sección "Láminas" del `README.md`.

## Diseño (no cambiar sin pedido)

- Papel blanco `#ffffff`, tinta verde `#183a2e`, hoja `#3f6f5c`, salvia `#dde4d9` (encabezado de la home).
- Cormorant Garamond para títulos y nombres de plantas, Work Sans para el texto, IBM Plex Mono para etiquetas y fechas.
- El color fuerte lo ponen las láminas: la interfaz se queda en verdes.
- La home arranca con "Formas que crecen, *software* que también." y "desarrollador ~~frontend~~ de todo, y sumando". No los cambies sin que Agus lo pida.

## Quién es Agus (para no inventar)

- Agustín Vazquez, marca personal **9gustin**. Software Engineer en Mercado Libre desde 2025. Programa profesionalmente desde 2019 (más de 7 años).
- Recorrido: Fidelitytools (2019–2020, React, JS y .NET), Wolox (2021–2022), Treinta (2022–2023), COR (2023–2025, remoto), Mercado Libre (2025–hoy). Técnico Superior en Programación, UTN (2017–2018).
- Fuerte en frontend con React y Next.js, pero hoy hace de todo (Node, SQL, AWS) y se está expandiendo hacia el producto completo.
- Le gustan las plantas. El sitio es su espacio para explorar la ingeniería de software: productos de calidad con IA y la evolución del rol del desarrollador.
- **No** mencionar Córdoba en la presentación (le parece un dato poco útil). **No** da mentorías actualmente.
- Links: solo GitHub (https://github.com/9gustin) y LinkedIn (https://www.linkedin.com/in/9gustin/).

## Voz y escritura

- Español rioplatense con voseo ("armás", "fijate"), en primera persona cuando habla Agus.
- Oraciones cortas y directas, como alguien que sabe del tema y lo cuenta simple.
- Evitá frases de relleno ("cabe destacar", "en el mundo actual"), los incisos con rayas y el "no es X, sino Y".
- Encabezados `##` cortos. Ejemplos concretos y código cuando ayudan.
- Las opiniones son de Agus: proponé, pero que él decida qué piensa. Si un texto es tuyo y él no lo validó, avisale.

## Publicar

Publicar = push a `main`. Hacelo solo cuando Agus lo confirme.

1. `git pull --rebase` (puede haber cambios de otros chats).
2. `npm run build`: tiene que terminar sin errores.
3. `git add` **solo** de los archivos de este trabajo (la nota, su lámina, el README si sumaste crédito).
4. Commit en español, con el formato de los anteriores (título corto, una línea de detalle) y la línea de coautoría que corresponda.
5. `git push origin main`.
6. Verificá: repetí `curl -s -o /dev/null -w '%{http_code}' https://9gustin.vercel.app/<ruta>` cada 5 segundos hasta que dé 200 (o el cambio aparezca en el HTML). Recién ahí decí que está publicado y pasá el link.

Si el push falla porque `main` avanzó, hacé `git pull --rebase` y volvé a intentar. Si un build falla por un archivo de otro chat, no lo toques: avisale a Agus.

## Trabajar con varios chats a la vez

Agus puede tener varios chats abiertos, cada uno con una nota o un proyecto distinto.

- Cada chat trabaja **solo** sobre su archivo (`src/content/notas/<slug>.md` o `src/content/proyectos/<slug>.md`) y su lámina.
- Si hace falta cambiar algo compartido (CSS, componentes, esquema), avisale a Agus antes, porque puede chocar con otro chat.
- Antes de crear un archivo, fijate que el slug y la lámina no estén en uso.
- Si retomás una nota de otro chat ("sigamos con la nota de X"), hacé `git pull --rebase` y leé el archivo actual antes de seguir.
