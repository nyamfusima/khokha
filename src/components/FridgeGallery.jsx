import { fridgeGallery } from '../data/siteContent.js'
import Frame from './ui/Frame.jsx'
import Display from './ui/Display.jsx'
import { WhatsAppButton } from './ui/Actions.jsx'

export default function FridgeGallery() {
  const { main, detail, useCase } = fridgeGallery

  return (
    <section className="section section--fridgeGallery">
      <div className="shell">
        <div className="sectionHead">
          <Display lines={fridgeGallery.headline} className="display--cold" />
          <p className="sectionHead__body">{fridgeGallery.body}</p>
        </div>

        <div className="fgal__grid">
          <Frame
            src={main.src}
            alt={main.alt}
            label={main.label}
            tone="cold"
            fit={main.fit}
            className="fgal__main frame--fill"
          />
          <Frame
            src={detail.src}
            alt={detail.alt}
            label={detail.label}
            tone="cold"
            fit={detail.fit}
            className="fgal__detail frame--fill"
          />
          <Frame
            src={useCase.src}
            alt={useCase.alt}
            label={useCase.label}
            tone="cold"
            fit={useCase.fit}
            className="fgal__use frame--fill"
          />
        </div>

        <div className="fgal__cta">
          <div>
            <h3 className="fgal__ctaTitle">{fridgeGallery.ctaHeadline}</h3>
            <p className="fgal__ctaBody">{fridgeGallery.ctaBody}</p>
          </div>
          <WhatsAppButton enquiry="fridge" variant="onBlue">
            {fridgeGallery.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
