import { GrYoutube } from "react-icons/gr";

export default {
  name: "video",
  title: "Video",
  type: "document",
  icon: GrYoutube,
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
      name: "video_id",
      title: "Video ID",
      type: "string",
      placeholder: "mslWedpPsyw",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
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
