export default {
  name: 'config',
  title: 'Site Config',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'main_logo',
      title: 'Main Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
