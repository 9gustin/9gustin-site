#!/usr/bin/env bash
# Copia los skills del portfolio a la carpeta de skills de usuario de Claude Code en Windows,
# para que estén disponibles en cualquier chat. Correlo de nuevo cada vez que cambies un skill.
#   wsl.exe -d Ubuntu -- bash ~/projects/9gustin-site/plugin/instalar.sh
set -euo pipefail

origen="$(cd "$(dirname "$0")/skills" && pwd)"
usuario_windows="$(cmd.exe /c 'echo %USERNAME%' 2>/dev/null | tr -d '\r')"
destino="/mnt/c/Users/${usuario_windows}/.claude/skills"

mkdir -p "$destino"
for skill in "$origen"/*/; do
  nombre="$(basename "$skill")"
  rm -rf "${destino:?}/$nombre"
  cp -r "$skill" "$destino/$nombre"
  echo "instalado: $nombre"
done
echo "listo: $destino"
