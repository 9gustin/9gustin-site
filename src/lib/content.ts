import { getCollection } from 'astro:content';

export async function getProyectos() {
  const items = await getCollection('proyectos');
  return items.sort((a, b) => a.data.orden - b.data.orden || +b.data.fecha - +a.data.fecha);
}

// Los borradores solo se ven con `npm run dev`, nunca en producción.
export async function getNotas() {
  const items = await getCollection('notas', ({ data }) => import.meta.env.DEV || !data.borrador);
  return items.sort((a, b) => +b.data.fecha - +a.data.fecha);
}

const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
export const mesAnio = (d: Date) => `${meses[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
export const fechaLarga = (d: Date) => `${d.getUTCDate()} ${meses[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

export function minutosDeLectura(texto = '') {
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 220));
}

export const tab = (n: number) => `Tab. ${String(n + 2).padStart(2, '0')}`;
