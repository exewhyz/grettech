import { defineField, defineType } from "sanity";

export default defineType({
  name: "icon",
  title: "Icons",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Icon Name",
      type: "string",
      description: "Name of the icon (e.g., Globe, Smartphone, Rocket)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Icon Value",
      type: "string",
      description: "Technical value used in code (usually same as name)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Technology", value: "technology" },
          { title: "Business", value: "business" },
          { title: "Communication", value: "communication" },
        ],
      },
      initialValue: "general",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
    },
  },
});
