const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src
}

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const params = [`width=${width}`, 'format=auto']
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `${
    process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_PRODUCTION_URL : ''
  }/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}
