import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}], // Array of images
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
        {
          name: 'code',
          title: 'Code Block',
          type: 'code',
          options: {
            withFilename: true, // optional
            highlightedLines: true, // optional
          },
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'repoLink',
      title: 'Repository Link',
      type: 'url',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Demo Link',
      type: 'url',
    }),
    defineField({
      name: 'authors',
      title: 'Project Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'member'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
})
