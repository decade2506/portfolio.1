import React from 'react'

import { Login } from '../../../components/Login/client.page'

type RouteParams = Promise<{
  tenant: string
}>

export default async function Page({ params }: { params: RouteParams }) {
  return <Login tenantSlug={(await params).tenant} />
}
