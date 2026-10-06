import { process } from '../data/siteContent.js'
import Display from './ui/Display.jsx'
import { WhatsAppButton } from './ui/Actions.jsx'

export default function Process() {
  return (
    <section className="section section--process">
      <div className="shell">
        <div className="sectionHead sectionHead--dark">
          <Display lines={process.headline} className="display--xl" />
        </div>

        {/* A real sequence, so it is numbered and runs along a single rail. */}
        <ol className="step__list">
          {process.steps.map((s) => (
            <li className="step" key={s.number}>
              <span className="step__number" aria-hidden="true">
                {s.number}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="step__cta">
          <WhatsAppButton enquiry="quote" variant="weld">
            {process.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
