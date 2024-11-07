import type { Access, PayloadRequest } from 'payload'

export const isSuperAdmin: Access = ({ req }: { req: { user: PayloadRequest['user'] } }) => {
  if (!req?.user) {
    return false
  }
  return Boolean(req.user.roles?.includes('super-admin'))
}
