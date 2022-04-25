import { GrThreeD } from "react-icons/gr";

export default {
  name: "obj_file",
  title: "3D Model",
  type: "document",
  icon: GrThreeD,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
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
      name: "obj_file",
      title: "OBJ File",
      type: "file",
      accepts: "model/obj",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    { name: "description", title: "Description", type: "blockContent" },
    {
      name: "download_links",
      title: "Download Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Site Name",
              name: "site_name",
              type: "string",
            },
            { title: "URL", name: "site_url", type: "url" },
          ],
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "build_progress",
      title: "Build Progress",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }, { type: "video" }] }],
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
