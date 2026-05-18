import { defineType, defineField, defineArrayMember } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Thermal Rolls", value: "thermal-rolls" },
          { title: "Thermal Labels", value: "thermal-labels" },
          { title: "Blank Thermal Rolls", value: "blank-thermal-rolls" },
          { title: "Blank Thermal Labels", value: "blank-thermal-labels" },
          { title: "Custom Printed Rolls", value: "custom-printed-rolls" },
          { title: "Custom Printed Labels", value: "custom-printed-labels" },
          { title: "Can Labels", value: "can-labels" },
          { title: "Detergent Labels", value: "detergent-labels" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "images",
      title: "Images (R2 URLs)",
      description: "Paste R2 image paths, e.g. products/thermal-roll-57x30.webp",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "specs",
      title: "Specifications",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "key", title: "Spec Name", type: "string" }),
            defineField({ name: "value", title: "Spec Value", type: "string" }),
          ],
          preview: {
            select: { title: "key", subtitle: "value" },
          },
        }),
      ],
    }),
    defineField({
      name: "applications",
      title: "Applications",
      description: "e.g. POS receipts, ATM receipts, parking tickets",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
