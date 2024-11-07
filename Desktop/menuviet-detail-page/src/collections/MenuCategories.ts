import type { CollectionConfig } from 'payload'
import { getTenantAccessIDs } from '@/utilities/getTenantAccessIDs'
import { canMutateTenantDocument, canReadTenantDocument } from '@/access/byTenant'
import { tenantField } from '../fields/TenantField'

export const MenuCategories: CollectionConfig = {
  slug: 'menu-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tenant'],
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
      name: 'icon',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Used to determine the display order of categories',
      },
    },
  ],
}
