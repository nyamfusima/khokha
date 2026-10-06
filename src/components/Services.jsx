import { Check } from 'lucide-react'
import { services, servicesIntro } from '../data/siteContent.js'
import Frame from './ui/Frame.jsx'
import Display from './ui/Display.jsx'
import { WhatsAppButton } from './ui/Actions.jsx'

export default function Services() {
  return (
    <section className="section section--services" id="services">
      <div className="shell">
        <div className="sectionHead">
          <Display lines={servicesIntro.headline} />
          <p className="sectionHead__body">{servicesIntro.body}</p>
        </div>
      </div>

      {/* Numbered because the business genuinely has two sides, not for decoration. */}
      <div className="svc">
        {services.map((s) => (
          <article className={`svc__slab svc__slab--${s.tone}`} id={s.id} key={s.id}>
            <Frame
              src={s.image}
              alt={s.imageAlt}
              label={s.title}
              tone={s.tone}
              fit={s.imageFit}
              className="svc__photo"
            />
            <div className="svc__body">
              <p className="svc__number">{s.number}</p>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__summary">{s.summary}</p>
              <ul className="svc__list">
                {s.items.map((item) => (
                  <li key={item}>
                    <Check size={15} strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                enquiry={s.enquiry}
                variant={s.tone === 'cold' ? 'cold' : 'weld'}
                className="svc__cta"
              >
                {s.cta}
              </WhatsAppButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
