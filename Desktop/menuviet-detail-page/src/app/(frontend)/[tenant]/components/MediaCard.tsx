import Image from 'next/image'
import { Media } from '@payload-types'
import shimmer from '@/utilities/shimmer'

type MediaCardProps = {
  media?: Media | string
  alt: string
  className?: string
  width?: number
  height?: number
  sizes?: string
}

export function MediaCard({
  media,
  alt,
  sizes,
  className = '',
  width = 100,
  height = 100,
}: MediaCardProps) {
  let url = typeof media === 'string' ? media : media?.url

  // Use a placeholder image if no media URL is available
  if (!url) {
    url = '/media/no-image.jpeg'
  }

  return (
    <Image
      src={url}
      alt={alt}
      className={className}
      width={width}
      height={height}
      placeholder={shimmer(width, height)}
      sizes={sizes}
    />
  )
}
