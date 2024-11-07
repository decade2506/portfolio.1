import type { Where } from 'payload'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { headers as getHeaders } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

import PageClient from './page.client'

import { RenderPage } from '../../../components/RenderPage'
import { Metadata } from 'next'

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise

  // TODO: use generateMetadata
  return {
    title: 'MenuViet',
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[]; tenant: string }>
}) {
  const headers = await getHeaders()
  const payload = await getPayloadHMR({ config: configPromise })
  const { user } = await payload.auth({ headers })

  const tenantsQuery = await payload.find({
    collection: 'tenants',
    overrideAccess: false,
    user,
    where: {
      slug: {
        equals: (await params)?.tenant,
      },
    },
  })

  const slug = (await params)?.slug

  // If no tenant is found, the user does not have access
  // Show the login view
  if (tenantsQuery.docs.length === 0) {
    redirect(
      `/${(await params).tenant}/login?redirect=${encodeURIComponent(
        `/${(await params).tenant}${slug ? `/${slug.join('/')}` : ''}`,
      )}`,
    )
  }

  const slugConstraint: Where = slug
    ? {
        slug: {
          equals: slug.join('/'),
        },
      }
    : {
        or: [
          {
            slug: {
              equals: '',
            },
          },
          {
            slug: {
              equals: 'home',
            },
          },
          {
            slug: {
              exists: false,
            },
          },
        ],
      }

  const pageQuery = await payload.find({
    collection: 'pages',
    overrideAccess: false,
    user,
    where: {
      and: [
        {
          'tenant.slug': {
            equals: (await params).tenant,
          },
        },
        slugConstraint,
      ],
    },
  })

  const pageData = pageQuery.docs?.[0]

  // The page with the provided slug could not be found
  if (!pageData) {
    return notFound()
  }

  // The page was found, render the page with data
  return (
    <article className="pt-16 pb-24">
      <PageClient />

      <RenderPage data={pageData} />
    </article>
  )
}
