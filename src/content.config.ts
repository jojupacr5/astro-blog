// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({ 
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),

    //relacion
    author: z.string(),

    //relacion
    tags: z.array(z.string()),
  })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };