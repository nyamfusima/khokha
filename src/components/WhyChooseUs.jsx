import { whyChoose } from '../data/siteContent.js'
import Display from './ui/Display.jsx'

export default function WhyChooseUs() {
  return (
    <section className="section section--why">
      <div className="shell">
        <div className="sectionHead">
          <Display lines={whyChoose.headline} />
        </div>

        {/* A spec sheet, not a card deck: hairline rules carry the structure. */}
        <dl className="why__list">
          {whyChoose.items.map((item) => (
            <div className="why__row" key={item.title}>
              <dt className="why__term">{item.title}</dt>
              <dd className="why__def">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
