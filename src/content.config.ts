import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    category: z.enum(["web", "backend", "devops", "other"]),
    featured: z.boolean().default(false),
    url: z.string().optional(),
    github: z.string().optional(),
    tech: z.array(z.string()),
  }),
});

export const collections = { projects };
