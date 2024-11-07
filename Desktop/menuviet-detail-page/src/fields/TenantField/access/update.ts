import type { FieldAccess } from 'payload'

import { isSuperAdmin } from '../../../access/isSuperAdmin'
import { getTenantAccessIDs } from '../../../utilities/getTenantAccessIDs'

// TODO: validate that the tenant is the same as the one the user has access to
export const tenantFieldUpdate: FieldAccess = (args) => {
  const tenantIDs = getTenantAccessIDs(args.req.user)
  return Boolean(isSuperAdmin(args) || tenantIDs.length > 0)
}
