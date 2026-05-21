import { defineType, defineField, defineArrayMember } from "sanity";
import { R2ImageInput } from "../../src/components/admin/R2ImageInput";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Short summary shown in post listings",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image (R2 path)",
      description: "Upload image to R2 or paste path",
      type: "string",
      components: {
        input: R2ImageInput
      },
      options: {
        folder: "BLOG"
      }
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
});
