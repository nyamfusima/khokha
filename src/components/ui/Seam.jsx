/**
 * The weld seam — the site's one recurring motif.
 *
 * Where the steel half of the business meets the cold half, the two grounds are
 * joined along a diagonal with a bead running down it: hot and glowing on the
 * steel side, frosted on the cold side. Drawn as SVG so the bead stays exactly
 * on the join at every viewport width.
 *
 * direction: 'steelToCold' | 'coldToSteel'
 */
export default function Seam({ direction = 'steelToCold', className = '' }) {
  return (
    <div className={`seam seam--${direction} ${className}`.trim()} aria-hidden="true">
      <div className="seam__upper" />
      <svg className="seam__bead" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line
          className="seam__beadGlow"
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="seam__beadLine"
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
