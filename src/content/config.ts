import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    topic: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
