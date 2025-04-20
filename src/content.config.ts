// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({ 
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image(),

    //relacion
    author: reference('authors'),

    //relacion
    tags: z.array(z.string()),
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yml', base: "./src/data/author" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
  })
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, authors };