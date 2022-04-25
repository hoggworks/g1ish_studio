import { GrLink } from "react-icons/gr";

export default {
  name: "social",
  title: "Social Link",
  type: "document",
  icon: GrLink,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "link",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
