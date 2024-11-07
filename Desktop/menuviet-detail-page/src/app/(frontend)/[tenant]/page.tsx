import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { headers as getHeaders } from 'next/headers'

import { Metadata } from 'next'
import { CategoryBar } from './components/CategoryBar'
import Menu from './components/Menu'

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise

  // TODO: use generateMetadata
  return {
    title: 'MenuViet',
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ tenant: string }>
  searchParams: Promise<{ cat_id: string }>
}) {
  const headers = await getHeaders()
  const payload = await getPayloadHMR({ config: configPromise })
  const { cat_id: categoryId } = await searchParams
  const { tenant: tenantSlug } = await params
  const { user } = await payload.auth({ headers })

  const tenantsQuery = await payload.find({
    collection: 'tenants',
    overrideAccess: false,
    user,
    where: {
      slug: {
        equals: tenantSlug,
      },
    },
  })

  const [itemsQuery, categoriesQuery] = await Promise.all([
    payload.find({
      collection: 'menu-items',
      overrideAccess: false,
      user,
      where: {
        and: [
          {
            'tenant.slug': {
              equals: tenantSlug,
            },
            ...(categoryId
              ? {
                  categories: {
                    contains: categoryId,
                  },
                }
              : {}),
          },
        ],
      },
    }),
    payload.find({
      collection: 'menu-categories',
      overrideAccess: false,
      user,
      where: {
        'tenant.slug': {
          equals: tenantSlug,
        },
      },
    }),
  ])

  const items = itemsQuery.docs
  const categories = categoriesQuery.docs

  const selectedCategory = categories.find((category) => category.id === categoryId)
  return (
    <article className="pt-16 pb-24">
      <div className="container mx-auto px-4 py-8">
        <div>
          <CategoryBar
            tenantSlug={tenantSlug}
            categories={categories}
            selectedCategory={selectedCategory}
            // selectedCategory={selectedCategory}
            // onSelectCategory={setSelectedCategory}
          />
        </div>
        <Menu items={items} tenantSlug={tenantSlug} />
      </div>
    </article>
  )
}
