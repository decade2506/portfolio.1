import type { CollectionConfig } from 'payload'
import { getTenantAccessIDs } from '@/utilities/getTenantAccessIDs'
import { canMutateTenantDocument, canReadTenantDocument } from '@/access/byTenant'
import { tenantField } from '../fields/TenantField'

export const Tags: CollectionConfig = {
  slug: 'tags',
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
  ],
}
