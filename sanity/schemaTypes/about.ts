import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vision",
      title: "Vision Statement",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "values",
      title: "Company Values",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Values Section Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Values Section Subtitle",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        },
        {
          name: "items",
          title: "Value Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Value Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Short Description",
                  type: "text",
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "longDescription",
                  title: "Long Description",
                  type: "text",
                  rows: 5,
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "reference",
                  to: [{ type: "icon" }],
                  validation: (Rule) => Rule.required(),
                },
                {
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
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                  iconName: "icon.name",
                },
                prepare({ title, subtitle, iconName }) {
                  return {
                    title,
                    subtitle: iconName || subtitle,
                  };
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),
  ],
});
