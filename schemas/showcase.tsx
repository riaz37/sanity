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
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}], // Array of images
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project description for SEO',
      type: 'string',
      validation: (Rule) => Rule.max(150).error('Description must be 150 characters or less'),
    }),
    defineField({
      name: 'projectContent',
      title: 'Project Content',
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
      name: 'designLink',
      title: 'Design Link',
      type: 'url',
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
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
})
