# 9gustin

Sitio personal de Agustín Vazquez: proyectos y notas sobre ingeniería de software, con láminas botánicas de portada.

Hecho con [Astro](https://astro.build). Se publica en Vercel.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Agregar contenido

Cada proyecto y cada nota es un archivo Markdown con su planta de portada.

- Proyectos: `src/content/proyectos/<nombre>.md`
- Notas: `src/content/notas/<nombre>.md`
- Láminas: `public/plates/`

```yaml
---
titulo: Mi nota
fecha: 2026-11-15
tags: [ingeniería]
borrador: false        # true = solo se ve en desarrollo
ejemplo: false         # true = se publica con la etiqueta "ejemplo"
planta:
  imagen: /plates/coffea.jpg
  nombre: Coffea arabica
  fuente: Köhler, 1887
  porQue: Una línea sobre por qué elegiste esta planta.
---
```

Los proyectos llevan además `resumen`, `orden`, `stack`, `repo`, `sitio`, `destacado` y `enProgreso` (opcionales). El esquema completo está en `src/content.config.ts`.

## Skills para Claude

En `plugin/skills/` hay tres skills para trabajar el sitio desde cualquier chat de Claude Code:

- `portfolio-9gustin`: el contexto del sitio (rutas, comandos, esquemas, diseño, voz y cómo publicar). Su `reference.md` es la fuente de verdad.
- `nueva-nota`: investigar, escribir y publicar una nota (borrador, en progreso o terminada).
- `nuevo-proyecto`: sumar o actualizar un proyecto, incluida la revisión de secretos antes de hacer público un repo.

Para instalarlos o actualizarlos en Windows (los copia a `~/.claude/skills`):

```bash
wsl.exe -d Ubuntu -- bash ~/projects/9gustin-site/plugin/instalar.sh
```

También se pueden instalar como plugin desde el marketplace del repo (`.claude-plugin/marketplace.json`).

## Láminas

Todas las láminas son de dominio público, tomadas de Wikimedia Commons:

- Camellia sinensis, Papaver somniferum, Theobroma cacao, Coffea arabica, Ilex paraguariensis, Juglans regia, Olea europaea y Calendula officinalis: *Köhler's Medizinal-Pflanzen* (1887)
- Echeveria canaliculata: *Curtis's Botanical Magazine* (1857)
- Filicinae: Ernst Haeckel, *Kunstformen der Natur* (1904)
- Monstera deliciosa: revista *Vesmír* (1875)

Para buscar más: [Köhler's Medizinal-Pflanzen](https://commons.wikimedia.org/wiki/Category:K%C3%B6hler%27s_Medizinal-Pflanzen), [Kunstformen der Natur](https://commons.wikimedia.org/wiki/Category:Kunstformen_der_Natur), [Biodiversity Heritage Library](https://www.flickr.com/photos/biodivlibrary/).
