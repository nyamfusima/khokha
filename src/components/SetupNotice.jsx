import { useState } from 'react'
import { X } from 'lucide-react'
import { business } from '../data/siteContent.js'
import { isSet } from '../lib/contact.js'

/**
 * Handover checklist. Renders only under `npm run dev` — Vite strips it from the
 * production bundle, so a visitor never sees it.
 */
export default function SetupNotice() {
  const [closed, setClosed] = useState(false)
  if (!import.meta.env.DEV || closed) return null

  const outstanding = Object.entries(business)
    .filter(([key, value]) => key !== 'name' && !isSet(value))
    .map(([key]) => key)

  if (!outstanding.length) return null

  return (
    <div className="setup" role="note">
      <button className="setup__close" onClick={() => setClosed(true)} aria-label="Dismiss">
        <X size={15} strokeWidth={2.5} />
      </button>
      <p className="setup__title">Still to configure (dev only)</p>
      <p className="setup__body">
        In <code>src/data/siteContent.js</code>: {outstanding.join(', ')}.
      </p>
      <p className="setup__body">
        Every WhatsApp and Call button falls back to the quote form until these are set.
      </p>
    </div>
  )
}
