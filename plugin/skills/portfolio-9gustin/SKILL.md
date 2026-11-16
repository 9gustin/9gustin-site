---
name: portfolio-9gustin
description: Contexto completo del portfolio personal de Agus (9gustin, 9gustin.vercel.app) - dónde está el repo, cómo está armado, cómo se edita, cómo se previsualiza y cómo se publica. Usalo para cualquier cambio en el sitio que no sea crear una nota o un proyecto - editar el "sobre mí", cambiar textos de la home, ajustar el diseño, agregar láminas, arreglar algo o revisar cómo se ve. Para notas usá nueva-nota y para proyectos nuevo-proyecto; los dos se apoyan en este.
---

# Portfolio 9gustin

Este skill es el contexto de base del sitio personal de Agus. Antes de tocar nada, leé [reference.md](reference.md): ahí están las rutas, los comandos, los esquemas de contenido, el diseño, la voz y el flujo para publicar.

## Cómo trabajar

1. **Ubicate.** Leé `reference.md`. Después mirá el estado real del repo (`git status`, `git log -5`, `git pull --rebase`), porque puede haber otros chats trabajando en paralelo.
2. **Entendé el pedido.** Si es ambiguo (qué texto, qué página, qué tono), preguntá una sola cosa concreta antes de editar.
3. **Editá lo mínimo.** El diseño está decidido: papel blanco, tinta verde, láminas botánicas reales. No cambies paleta, tipografías ni estructura si Agus no lo pide.
4. **Mostrá antes de publicar.** Levantá el sitio local y mostrale el cambio en el navegador, o como mínimo corré el build. Publicar es hacer push a `main`: hacelo solo cuando Agus lo confirme.
5. **Publicá y verificá.** Seguí "Publicar" en `reference.md` y comprobá con `curl` que el cambio está online antes de decir que quedó.

## Qué no hacer

- No inventes datos sobre Agus (experiencia, opiniones, logros). Si falta un dato, preguntalo.
- No uses `git add -A`: agregá solo los archivos que tocaste, así no subís trabajo a medias de otro chat.
- No subas la carpeta `diseno/` ni `.claude/` (están ignoradas a propósito).
- No uses imágenes que no sean de dominio público.
