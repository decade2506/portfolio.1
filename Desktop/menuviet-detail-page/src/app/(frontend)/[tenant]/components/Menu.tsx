import { MenuItem } from '@payload-types'
import { MenuItem as MenuItemComponent } from './MenuItem'

interface MenuProps {
  items: MenuItem[]
  tenantSlug: string
}

export default function Menu({ items, tenantSlug }: MenuProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {items.map((item) => (
          <MenuItemComponent key={item.id} {...item} tenantSlug={tenantSlug} />
        ))}
      </div>
    </div>
  )
}
