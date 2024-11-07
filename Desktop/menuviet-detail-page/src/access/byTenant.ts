import type { Access, AccessArgs } from 'payload'

import { parseCookies } from 'payload'

import { isSuperAdmin } from '@/access/isSuperAdmin'
import { getTenantAccessIDs } from '@/utilities/getTenantAccessIDs'
import { isPayloadAdminPanel } from '@/utilities/isPayloadAdminPanel'
import { externalReadAccess } from './externalReadAccess'

export const filterByTenantRead: Access = (args: AccessArgs) => {
  const req = args.req
  const cookies = parseCookies(req.headers)
  const superAdmin = isSuperAdmin(args)
  const selectedTenant = cookies.get('payload-tenant')

  const tenantAccessIDs = getTenantAccessIDs(req.user)

  // First check for manually selected tenant from cookies
  if (selectedTenant) {
    // If it's a super admin,
    // give them read access to only pages for that tenant
    if (superAdmin) {
      return {
        tenant: {
          equals: selectedTenant,
        },
      }
    }

    const hasTenantAccess = tenantAccessIDs.some((id) => id === selectedTenant)

    // If NOT super admin,
    // give them access only if they have access to tenant ID set in cookie
    if (hasTenantAccess) {
      return {
        tenant: {
          equals: selectedTenant,
        },
      }
    }
  }

  // If no manually selected tenant,
  // but it is a super admin, give access to all
  if (superAdmin) {
    return true
  }

  // If not super admin,
  // but has access to tenants,
  // give access to only their own tenants
  if (tenantAccessIDs.length) {
    return {
      tenant: {
        in: tenantAccessIDs,
      },
    }
  }

  // Deny access to all others
  return false
}

/**
 * Filters read access to documents based on tenant permissions
 *
 * @param args - Access control arguments from Payload
 * @returns Access control conditions or boolean
 * - Returns tenant-specific query conditions if user has access to selected tenant
 * - Returns true if user is super admin with no tenant selected
 * - Returns tenant query conditions if user has access to multiple tenants
 * - Returns false if user has no tenant access
 */
export const canMutateTenantDocument: Access = (args: AccessArgs) => {
  const req = args.req
  const superAdmin = isSuperAdmin(args)

  if (!req.user) {
    return false
  }

  // super admins can mutate documents for any tenant
  if (superAdmin) {
    return true
  }

  const cookies = parseCookies(req.headers)
  const selectedTenant = cookies.get('payload-tenant')

  // tenant admins can add/delete/update
  // documents they have access to
  return (
    req.user?.tenants?.reduce((hasAccess: boolean, accessRow) => {
      if (hasAccess) {
        return true
      }
      if (
        accessRow &&
        accessRow.tenant === selectedTenant &&
        accessRow.roles?.includes('tenant-admin')
      ) {
        return true
      }
      return hasAccess
    }, false) || false
  )
}

export const canReadTenantDocument: Access = (args) => {
  // when viewing documents inside the admin panel
  // restrict access to the ones your user has access to
  if (isPayloadAdminPanel(args.req)) {
    return filterByTenantRead(args)
  }

  // when viewing documents from outside the admin panel
  // you should be able to see your tenants and public tenants
  return externalReadAccess(args)
}
