import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const CategoryEnum = z.enum(["test"]);
export type CategoryEnum = z.infer<typeof CategoryEnum>;

const blog = defineCollection({
  loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    thumbnail: z.string().optional(),
    categories: z.array(CategoryEnum),
  }),
});

export const collections = { blog };
