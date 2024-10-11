import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Team Member Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'skillTitle',
      title: 'Enter skill title',
      type: 'string',
    }),
    defineField({
      name: 'skillValue',
      title: 'Skill value',
      type: 'slug',
      options: {
        source: 'skillTitle',
        maxLength: 96,
      },
    }),
  ],
})
