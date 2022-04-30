import { GrDocumentText } from "react-icons/gr";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: GrDocumentText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "main_image",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => [
        Rule.required()
          .max(100)
          .warning("Maximum value for an excerpt is 100 characters"),
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "video" }] }],
    },
    {
      name: "obj_files",
      title: "OBJ Files",
      type: "array",
      of: [{ type: "reference", to: [{ type: "obj_file" }] }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
