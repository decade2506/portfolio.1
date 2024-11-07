import type { Collection, Endpoint } from 'payload'

import { headersWithCors } from '@payloadcms/next/utilities'
import { APIError, generatePayloadCookie } from 'payload'

// A custom endpoint that can be reached by POST request
// at: /api/users/external-users/login
export const externalUsersLogin: Endpoint = {
  handler: async (req) => {
    let data: { [key: string]: string } = {}

    try {
      if (typeof req.json === 'function') {
        data = await req.json()
      }
    } catch (error) {
      // swallow error, data is already empty object
    }
    const { password, tenantSlug, email } = data

    if (!email || !password) {
      throw new APIError('Email and Password are required for login.', 400, null, true)
    }

    const fullTenant = (
      await req.payload.find({
        collection: 'tenants',
        where: {
          slug: {
            equals: tenantSlug,
          },
        },
      })
    ).docs[0]

    const foundUser = await req.payload.find({
      collection: 'users',
      where: {
        and: [
          {
            email: {
              equals: email,
            },
          },
          {
            'tenants.tenant': {
              equals: fullTenant.id,
            },
          },
        ],
      },
    })

    if (foundUser.totalDocs > 0) {
      try {
        const loginAttempt = await req.payload.login({
          collection: 'users',
          data: {
            email: foundUser.docs[0].email,
            password,
          },
          req,
        })

        if (loginAttempt?.token) {
          const collection: Collection = req.payload.collections['users']
          const cookie = generatePayloadCookie({
            collectionAuthConfig: collection.config.auth,
            cookiePrefix: 'menuviet',
            token: loginAttempt.token,
          })

          return Response.json(loginAttempt, {
            headers: headersWithCors({
              headers: new Headers({
                'Set-Cookie': cookie,
              }),
              req,
            }),
            status: 200,
          })
        }

        throw new APIError('Unable to login with the provided email and password.', 400, null, true)
      } catch (e) {
        throw new APIError('Unable to login with the provided email and password.', 400, null, true)
      }
    }

    throw new APIError('Unable to login with the provided email and password.', 400, null, true)
  },
  method: 'post',
  path: '/external-users/login',
}
