import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { headers as getHeaders } from 'next/headers'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default async function MenuItemDetail({
  params,
}: {
  params: Promise<{ tenant: string; id: string }>
}) {
  const headers = await getHeaders()
  const payload = await getPayloadHMR({ config: configPromise })
  const { tenant: tenantSlug, id } = await params
  const { user } = await payload.auth({ headers })

  const itemQuery = await payload.find({
    collection: 'menu-items',
    overrideAccess: false,
    user,
    where: {
      and: [
        {
          'tenant.slug': {
            equals: tenantSlug,
          },
          id: {
            equals: id,
          },
        },
      ],
    },
  })

  if (!itemQuery.docs.length) {
    return notFound()
  }

  const item = itemQuery.docs[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-video w-full">
            {item.medias?.[0]?.media && (
              <Image
                src={typeof item.medias[0].media === 'string' ? item.medias[0].media : item.medias[0].media.url || ''}
                alt={item.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-normal">{item.name}</h1>
                <div className="text-xl">
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(item.price)}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                {item.tags?.map((tag) => (
                  <Badge key={typeof tag === 'string' ? tag : tag.id} variant="secondary" className="text-xs">
                    {typeof tag === 'string' ? tag : tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
