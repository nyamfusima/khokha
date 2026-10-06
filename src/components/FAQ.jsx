import { ChevronDown } from 'lucide-react'
import { faq } from '../data/siteContent.js'
import Display from './ui/Display.jsx'

export default function FAQ() {
  return (
    <section className="section section--faq">
      <div className="shell faq__grid">
        <div className="faq__head">
          <Display lines={faq.headline} />
        </div>

        {/* Native details/summary: keyboard and screen-reader behaviour for free. */}
        <div className="faq__items">
          {faq.items.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary className="faq__q">
                <span>{item.q}</span>
                <ChevronDown className="faq__chev" size={20} strokeWidth={2.2} aria-hidden="true" />
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
