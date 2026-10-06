import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'
import { waHref, telHref, waMessage, has } from '../lib/contact.js'

/**
 * Two presentations of the same shortcut, so neither crowds the other:
 *  - desktop and tablet get the floating button, bottom-right
 *  - phones get the sticky WhatsApp | Call bar across the bottom
 * Both appear once you have scrolled past the hero, where the buttons already are.
 */
export default function FloatingWhatsApp() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const configured = has.whatsapp()
  const linkProps = configured ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <>
      <a
        className={`fab ${shown ? 'fab--shown' : ''}`.trim()}
        href={waHref(waMessage.general)}
        aria-label="Message Khokha on WhatsApp"
        {...linkProps}
      >
        <WhatsAppIcon size={26} />
        <span className="fab__text">WhatsApp us</span>
      </a>

      <div className={`bar ${shown ? 'bar--shown' : ''}`.trim()}>
        <a className="bar__btn bar__btn--wa" href={waHref(waMessage.general)} {...linkProps}>
          <WhatsAppIcon size={20} />
          WhatsApp
        </a>
        <a className="bar__btn bar__btn--call" href={telHref()}>
          <Phone size={18} strokeWidth={2.3} aria-hidden="true" />
          Call
        </a>
      </div>
    </>
  )
}
