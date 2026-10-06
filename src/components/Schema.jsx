import { useEffect } from 'react'
import { brand, business, details, mobileFridgeTitle } from '../data/siteContent.js'
import { has } from '../lib/contact.js'

/**
 * LocalBusiness structured data, built from siteContent so the phone number and
 * location are never written down twice. Fields that are still placeholders are
 * left out rather than filled with invented values — an address is only added
 * once the client supplies one.
 */
export default function Schema() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: brand.name,
      description:
        'Welding, metalwork and mobile refrigeration. Custom welding, metal repairs, fabrication and mobile fridges for businesses, events and everyday needs.',
      url: window.location.origin,
      knowsAbout: ['Welding', 'Metal fabrication', 'Steelwork', mobileFridgeTitle],
    }

    if (has.phone()) data.telephone = business.phone
    if (has.email()) data.email = business.email
    if (has.location()) data.areaServed = business.location
    if (details.serviceArea) data.areaServed = details.serviceArea
    if (details.address) {
      data.address = { '@type': 'PostalAddress', streetAddress: details.address }
    }
    const social = [details.facebook, details.instagram].filter(Boolean)
    if (social.length) data.sameAs = social

    const tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.textContent = JSON.stringify(data)
    document.head.appendChild(tag)
    return () => tag.remove()
  }, [])

  return null
}
