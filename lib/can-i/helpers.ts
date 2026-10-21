import { readingMinutes, type Article, type ArticleSection, type ArticleTable } from "@/lib/site";

export const section = (heading: string, body: string[], tips?: string[], table?: ArticleTable): ArticleSection => ({ heading, body, tips, ...(table && { table }) });
export const article = (input: Omit<Article, "image" | "readTime">): Article => ({ ...input, readTime: readingMinutes(input), image: `/images/articles/${input.slug}.webp` });
