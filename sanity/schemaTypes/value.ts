import { defineField, defineType } from "sanity";

export default defineType({
  name: "value",
  title: "Company Values",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Value Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      options: {
        list: [
          { title: "Lightbulb", value: "Lightbulb" },
          { title: "Users", value: "Users" },
          { title: "Sparkles", value: "Sparkles" },
          { title: "Globe", value: "Globe" },
          { title: "Heart", value: "Heart" },
          { title: "Rocket", value: "Rocket" },
          { title: "Target", value: "Target" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color Variant",
      type: "string",
      options: {
        list: [
          { title: "Purple", value: "purple" },
          { title: "Blue", value: "blue" },
          { title: "Amber", value: "amber" },
          { title: "Rose", value: "rose" },
          { title: "Emerald", value: "emerald" },
        ],
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
      title: "title",
      subtitle: "description",
    },
  },
});
