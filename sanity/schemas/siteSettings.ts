import { defineType, defineField, defineArrayMember } from "sanity";
import { R2ImageInput } from "../../src/components/admin/R2ImageInput";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroBanners",
      title: "Homepage Banner Images",
      description: "Upload images to Cloudflare R2 or paste URL. First image is the main banner.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ 
              name: "url", 
              title: "Image URL", 
              type: "string",
              components: {
                input: R2ImageInput
              }
            }),
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
          preview: {
            select: { title: "alt", subtitle: "url" },
          },
        }),
      ],
      validation: (r) => r.max(5),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
