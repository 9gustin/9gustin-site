import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada entrada (proyecto o nota) tiene su lámina botánica de portada.
const planta = z.object({
  imagen: z.string(), // ruta dentro de /public, ej: /plates/coffea.jpg
  nombre: z.string(), // nombre científico, ej: Coffea arabica
  fuente: z.string().optional(), // ej: Köhler, 1887
  porQue: z.string().optional(), // una línea: por qué esta planta
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    orden: z.number().default(99),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    sitio: z.string().url().optional(),
    destacado: z.string().optional(), // ej: "151★"
    planta,
  }),
});

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string().optional(),
    fecha: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    borrador: z.boolean().default(false),
    planta,
  }),
});

export const collections = { proyectos, notas };
