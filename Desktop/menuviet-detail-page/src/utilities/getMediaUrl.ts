export const getMediaFileUrl = (file: string, { fullUrl = false }: { fullUrl?: boolean } = {}) => {
  return `${fullUrl ? process.env.NEXT_PUBLIC_SERVER_URL : ''}/api/media/file/${file}`
}
