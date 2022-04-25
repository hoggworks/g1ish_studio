import { GrSettingsOption } from "react-icons/gr";

export default {
  name: "config",
  title: "Site Config",
  type: "document",
  icon: GrSettingsOption,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "main_logo",
      title: "Main Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "banner_graphic",
      title: "Banner Graphic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
