import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MediaCard } from './MediaCard'
import { MenuItem as MenuItemType } from '@payload-types'
import Link from 'next/link'

type MenuItemProps = MenuItemType & {
  currency?: string
  tenantSlug: string
}

const formatCurrency = (price: number, currency: string) => {
  if (currency === 'VND') {
    return `${(price / 1000).toFixed(0)}k`
  }
  return `${currency} ${price.toFixed(2)}`
}

export function MenuItem({ name, price, medias, currency = 'VND', id, tenantSlug }: MenuItemProps) {
  const media = medias?.[0]?.media
  return (
    <Link href={`${tenantSlug}/${id}`} className="block">
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0 relative">
          <MediaCard
            media={media}
            alt={name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
            width={100}
            height={100}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-950"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <div className="p-4 space-y-1">
            <h3 className="font-medium line-clamp-2 min-h-[2.5rem] text-base">{name}</h3>
            <p className="text-primary font-semibold text-sm">{formatCurrency(price, currency)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
