import type { CollectionConfig } from 'payload'

import { createAccess } from './access/create'
import { readAccess } from './access/read'
import { updateAndDeleteAccess } from './access/updateAndDelete'
import { externalUsersLogin } from './endpoints/externalUsersLogin'
import { setCookieBasedOnDomain } from './hooks/setCookieBasedOnDomain'

const Users: CollectionConfig = {
  slug: 'users',
  access: {
    // admin: authenticated,
    create: createAccess,
    delete: updateAndDeleteAccess,
    read: readAccess,
    update: updateAndDeleteAccess,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  endpoints: [externalUsersLogin],
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      defaultValue: ['user'],
      hasMany: true,
      options: ['super-admin', 'user'],
    },
    {
      name: 'tenants',
      type: 'array',
      fields: [
        {
          name: 'tenant',
          type: 'relationship',
          relationTo: 'tenants',
          required: true,
        },
        {
          name: 'roles',
          type: 'select',
          hasMany: true,
          options: [
            {
              label: 'Tenant Admin',
              value: 'tenant-admin',
            },
            {
              label: 'User',
              value: 'user',
            },
          ],
        },
      ],
    },
  ],
  // The following hook sets a cookie based on the domain a user logs in from.
  // It checks the domain and matches it to a tenant in the system, then sets
  // a 'payload-tenant' cookie for that tenant.

  // Uncomment this if you want to enable tenant-based cookie handling by domain.
  // hooks: {
  //   afterLogin: [setCookieBasedOnDomain],
  // },
  timestamps: true,
}

export default Users
