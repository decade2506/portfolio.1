import { cn } from '@/utilities/cn'
import { Button } from '@/components/ui/button'
import { MenuCategory } from '@payload-types'
import Link from 'next/link'

interface CategoryBarProps {
  tenantSlug: string
  categories: MenuCategory[]
  selectedCategory?: MenuCategory
}

export function CategoryBar({ tenantSlug, categories, selectedCategory }: CategoryBarProps) {
  return (
    <div className="flex overflow-x-auto gap-4 py-4 px-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-16 z-40 border-b">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category ? 'default' : 'outline'}
          className={cn(
            'flex-shrink-0 flex items-center gap-2',
            selectedCategory === category && 'bg-primary text-primary-foreground',
          )}
          asChild
        >
          <Link href={`/${tenantSlug}?cat_id=${category.id}`}>
            <span className="text-xl">{category.icon}</span>
            {category.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}
