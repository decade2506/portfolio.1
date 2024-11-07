import type { CollectionConfig } from 'payload'
import { getTenantAccessIDs } from '@/utilities/getTenantAccessIDs'
import { canMutateTenantDocument, canReadTenantDocument } from '@/access/byTenant'
import { tenantField } from '../../fields/TenantField'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'categories', 'tenant'],
  },
  access: {
    create: canMutateTenantDocument,
    delete: canMutateTenantDocument,
    read: canReadTenantDocument,
    update: canMutateTenantDocument,
  },
  fields: [
    tenantField(),
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'menu-categories',
      required: true,
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        step: 0.01,
      },
      localized: true,
    },
    {
      name: 'medias',
      type: 'array',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
