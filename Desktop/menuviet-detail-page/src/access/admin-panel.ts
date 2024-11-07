import { ClientUser, PayloadRequest } from 'payload'

export const hideGlobal = (args: { user: PayloadRequest['user'] }) => {
  return !(args.user?.roles?.includes('super-admin') ?? false)
}

export const hideAdminCollection = (args: { user: ClientUser }) => {
  return !(args.user?.roles?.includes('super-admin') ?? false)
}
