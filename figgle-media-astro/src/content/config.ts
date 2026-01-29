import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Figgle Media Team'),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    title: z.string(),
    description: z.string(),
    relatedTerms: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  glossary: glossaryCollection,
};
