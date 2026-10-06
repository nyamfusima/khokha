import { weldingFeature } from '../data/siteContent.js'
import Frame from './ui/Frame.jsx'
import Display from './ui/Display.jsx'
import { QuoteButton } from './ui/Actions.jsx'

export default function WeldingSection() {
  return (
    <section className="section section--welding" id="welding">
      <div className="shell weld__grid">
        <div className="weld__body">
          <p className="weld__label">{weldingFeature.label}</p>
          <Display lines={weldingFeature.headline} className="display--xl" />
          <p className="lede">{weldingFeature.body}</p>
          <p className="weld__body2">{weldingFeature.body2}</p>
          <QuoteButton variant="weld">{weldingFeature.cta}</QuoteButton>
        </div>

        <div className="weld__media">
          <Frame
            src={weldingFeature.image}
            alt={weldingFeature.imageAlt}
            label="Welding at work"
            tone="steel"
            className="weld__photo"
          />
        </div>
      </div>

      {/* Three shots of real work — no project names invented. */}
      <div className="shell">
        <div className="weld__strip">
          {weldingFeature.strip.map((shot) => (
            <Frame
              key={shot.label}
              src={shot.src}
              alt={shot.alt}
              label={shot.label}
              tone="steel"
              fit={shot.fit}
              className="weld__stripItem"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
