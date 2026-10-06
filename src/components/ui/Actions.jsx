import { Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { telHref, waHref, enquiryMessage, has, scrollToId } from '../../lib/contact.js'

/* All three buttons share one shape; `variant` only changes the paint. */

export function WhatsAppButton({ enquiry = 'general', variant = 'wa', children, className = '' }) {
  const configured = has.whatsapp()
  return (
    <a
      className={`btn btn--${variant} ${className}`.trim()}
      href={waHref(enquiryMessage(enquiry))}
      target={configured ? '_blank' : undefined}
      rel={configured ? 'noopener noreferrer' : undefined}
      data-unconfigured={!configured || undefined}
    >
      <WhatsAppIcon size={19} />
      {children || 'WhatsApp us'}
    </a>
  )
}

export function CallButton({ variant = 'ghost', children, className = '' }) {
  return (
    <a
      className={`btn btn--${variant} ${className}`.trim()}
      href={telHref()}
      data-unconfigured={!has.phone() || undefined}
    >
      <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
      {children || 'Call us'}
    </a>
  )
}

export function QuoteButton({ variant = 'weld', children, className = '' }) {
  return (
    <a
      className={`btn btn--${variant} ${className}`.trim()}
      href="#contact"
      onClick={(e) => {
        e.preventDefault()
        scrollToId('contact')
      }}
    >
      {children || 'Request a quote'}
    </a>
  )
}
