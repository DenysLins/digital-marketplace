import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<p>Hello please verify you email</p>`
      },
    },
  },
  access: {
    read: (): boolean => true,
    create: (): boolean => true,
  },
  fields: [
    {
      name: 'role',
      required: true,
      defaultValue: 'user',
      admin: {
        condition: (user): boolean => user.role === 'admin',
      },
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
