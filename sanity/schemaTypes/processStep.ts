import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Process Steps",
  type: "document",
  fields: [
    defineField({
      name: "step",
      title: "Step Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      options: {
        list: [
          { title: "Rocket", value: "Rocket" },
          { title: "Paintbrush", value: "Paintbrush" },
          { title: "Code", value: "Code" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Step Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: "step",
      subtitle: "title",
      media: "image",
    },
  },
});
