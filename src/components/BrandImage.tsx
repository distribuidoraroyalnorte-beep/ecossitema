import type { BrandAsset } from '../data/brand'

type Props = {
  asset: BrandAsset | null
  className?: string
  loading?: 'eager' | 'lazy'
  alt?: string
  fetchPriority?: 'high' | 'low' | 'auto'
}

export default function BrandImage({
  asset,
  className,
  loading = 'lazy',
  alt,
  fetchPriority,
}: Props) {
  if (!asset) return null
  return (
    <img
      className={className}
      src={asset.src}
      alt={alt ?? asset.alt}
      width={asset.width}
      height={asset.height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  )
}
