import { fridgeFeature, mobileFridgeTitle } from '../data/siteContent.js'
import Frame from './ui/Frame.jsx'
import Display from './ui/Display.jsx'
import { QuoteButton } from './ui/Actions.jsx'

export default function MobileFridgeSection() {
  return (
    <section className="section section--fridge" id="fridges">
      <div className="shell fridge__grid">
        <div className="fridge__media">
          <Frame
            src={fridgeFeature.image}
            alt={fridgeFeature.imageAlt}
            label="Mobile fridge, full unit"
            tone="cold"
            fit="contain"
            className="fridge__photo"
          />
        </div>

        <div className="fridge__body">
          <p className="fridge__label">{mobileFridgeTitle}</p>
          <Display lines={fridgeFeature.headline} className="display--cold" />
          <p className="lede">{fridgeFeature.body}</p>

          <dl className="fridge__points">
            {fridgeFeature.points.map((p) => (
              <div className="fridge__point" key={p.title}>
                <dt>{p.title}</dt>
                <dd>{p.text}</dd>
              </div>
            ))}
          </dl>

          <QuoteButton variant="cold">{fridgeFeature.cta}</QuoteButton>
        </div>
      </div>
    </section>
  )
}
