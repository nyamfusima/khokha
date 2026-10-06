import { business } from '../data/siteContent.js'

const PLACEHOLDER = 'REPLACE_ME'

/** A field counts as configured only once the placeholder is gone. */
export function isSet(value) {
  return Boolean(value) && value.trim() !== '' && value.trim() !== PLACEHOLDER
}

export const has = {
  phone: () => isSet(business.phone),
  whatsapp: () => isSet(business.whatsapp),
  email: () => isSet(business.email),
  location: () => isSet(business.location),
}

/** Digits only, for tel: and wa.me links. Keeps a leading +. */
function digits(value) {
  return String(value).replace(/[^\d+]/g, '')
}

export function telHref() {
  return has.phone() ? `tel:${digits(business.phone)}` : '#contact'
}

export function mailHref(subject) {
  if (!has.email()) return '#contact'
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${business.email}${q}`
}

/**
 * WhatsApp deep link with an optional pre-written message.
 * Falls back to the quote form while the number is unconfigured, so no
 * button on the page is ever dead.
 */
export function waHref(message) {
  if (!has.whatsapp()) return '#contact'
  const number = digits(business.whatsapp).replace(/^\+/, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${text}`
}

/** Opening lines for the WhatsApp buttons scattered through the site. */
export const waMessage = {
  general: 'Hi Khokha, I would like to enquire about your services.',
  welding: 'Hi Khokha, I need some welding work done. Here are the details:',
  fabrication: 'Hi Khokha, I need something fabricated. Here are the details:',
  repair: 'Hi Khokha, I have a metal repair that needs welding. Here are the details:',
  fridge: 'Hi Khokha, I would like to enquire about a mobile fridge.',
  quote: 'Hi Khokha, I would like a quote.',
}

export function enquiryMessage(kind) {
  return waMessage[kind] || waMessage.general
}

/** Display strings — an em dash rather than a visible REPLACE_ME. */
export const show = {
  phone: () => (has.phone() ? business.phone : '—'),
  email: () => (has.email() ? business.email : '—'),
  location: () => (has.location() ? business.location : '—'),
}

/** Smooth-scrolls to a section, honouring reduced-motion preferences. */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
