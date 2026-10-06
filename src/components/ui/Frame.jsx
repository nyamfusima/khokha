import { useState } from 'react'
import { Camera, Flame, Snowflake } from 'lucide-react'

/**
 * A photo slot.
 *
 * With a file at `src` it renders the photograph. Without one — or if the file
 * is missing — it renders a labelled frame naming the shot that belongs there,
 * so an unphotographed slot still looks deliberate rather than broken.
 *
 * fit:  'cover'   fills the tile, cropping as needed (use for photographs)
 *       'contain' fits the whole subject inside the tile on white (use for the
 *                 cut-outs, which must never be cropped)
 * tone: 'steel' (welding side) | 'cold' (refrigeration side)
 */
export default function Frame({
  src,
  alt = '',
  label,
  tone = 'steel',
  fit = 'cover',
  className = '',
  loading = 'lazy',
  sizes,
}) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(src) && !failed
  const Icon = tone === 'cold' ? Snowflake : Flame

  return (
    <div
      className={`frame frame--${tone} frame--${fit} ${className}`.trim()}
      data-empty={!showPhoto}
    >
      {showPhoto ? (
        <img
          className="frame__img"
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          sizes={sizes}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="frame__slot" role="img" aria-label={alt || label || 'Photo coming soon'}>
          <div className="frame__hatch" aria-hidden="true" />
          <div className="frame__slotBody">
            <span className="frame__slotIcon" aria-hidden="true">
              <Icon size={22} strokeWidth={1.6} />
            </span>
            {label ? <span className="frame__slotLabel">{label}</span> : null}
            <span className="frame__slotHint">
              <Camera size={12} strokeWidth={2} aria-hidden="true" />
              Photo to come
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
