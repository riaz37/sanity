import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Member Name',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Member Designation',
      type: 'reference',
      to: {type: 'designation'},
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Member Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Member Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Member Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Member Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
  ],
})
