import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'designation',
  title: 'Member Designation',
  type: 'document',
  fields: [
    defineField({
      name: 'designationTitle',
      title: 'MemberDesignation Title',
      type: 'string',
    }),
  ],
})
