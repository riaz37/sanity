import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Blog slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Blog keywords for SEO',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Blog Categories',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Blog author',
      type: 'reference',
      to: {type: 'member'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Description',
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
      name: 'description',
      title: 'Blog description for SEO',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
})
