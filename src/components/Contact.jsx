import { useState } from 'react'
import { Upload, X, MapPin, Mail, Phone, Clock } from 'lucide-react'
import { quote, details } from '../data/siteContent.js'
import { has, show, telHref, mailHref, waHref } from '../lib/contact.js'
import Display from './ui/Display.jsx'
import { WhatsAppButton, CallButton } from './ui/Actions.jsx'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'

const EMPTY = { name: '', phone: '', need: '', location: '', message: '' }

/**
 * Composes the enquiry into a single WhatsApp message.
 *
 * To post this to a backend instead, keep the same `values` object and send it
 * from `handleSubmit` below — every field is already validated at that point.
 */
function composeMessage(v) {
  const lines = [
    'Hi Khokha, I would like a quote.',
    '',
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `What I need: ${v.need}`,
  ]
  if (v.location.trim()) lines.push(`Location: ${v.location.trim()}`)
  if (v.message.trim()) lines.push('', v.message.trim())
  return lines.join('\n')
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [files, setFiles] = useState([])
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Tell us your name'
    if (!values.phone.trim()) next.phone = 'We need a number to reach you on'
    if (!values.need) next.need = 'Pick the kind of work'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) {
      setNotice('')
      return
    }

    if (!has.whatsapp()) {
      setNotice(
        'The WhatsApp number has not been added to this site yet. Copy your details and send them to Khokha directly.'
      )
      return
    }

    window.open(waHref(composeMessage(values)), '_blank', 'noopener,noreferrer')
    setNotice('WhatsApp should have opened with your details. Add your photos to that chat.')
  }

  const onFiles = (e) => {
    setFiles(Array.from(e.target.files || []).slice(0, 6))
  }

  const hasAnyDetail = has.phone() || has.email() || has.location() || Boolean(details.hours)

  return (
    <section className="section section--contact" id="contact">
      <div className="shell contact__grid">
        {/* ---- Form ---- */}
        <div className="quote">
          <Display lines={quote.headline} className="display--xl" />
          <p className="lede">{quote.body}</p>

          <form className="quote__form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="q-name">Name</label>
              <input
                id="q-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'q-name-err' : undefined}
              />
              {errors.name && (
                <p className="field__error" id="q-name-err">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="q-phone">Phone</label>
              <input
                id="q-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={set('phone')}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'q-phone-err' : undefined}
              />
              {errors.phone && (
                <p className="field__error" id="q-phone-err">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="q-need">What do you need?</label>
              <div className="field__select">
                <select
                  id="q-need"
                  name="need"
                  value={values.need}
                  onChange={set('need')}
                  aria-invalid={Boolean(errors.need)}
                  aria-describedby={errors.need ? 'q-need-err' : undefined}
                >
                  <option value="">Choose one</option>
                  {quote.needOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.need && (
                <p className="field__error" id="q-need-err">
                  {errors.need}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="q-location">
                Location <span className="field__opt">optional</span>
              </label>
              <input
                id="q-location"
                name="location"
                type="text"
                value={values.location}
                onChange={set('location')}
              />
            </div>

            <div className="field field--full">
              <label htmlFor="q-message">
                Message <span className="field__opt">optional</span>
              </label>
              <textarea
                id="q-message"
                name="message"
                rows={4}
                value={values.message}
                onChange={set('message')}
                placeholder="Sizes, dates, or what has broken."
              />
            </div>

            <div className="field field--full">
              <span className="field__label">
                Photos <span className="field__opt">optional</span>
              </span>
              <label className="upload" htmlFor="q-photos">
                <Upload size={18} strokeWidth={2} aria-hidden="true" />
                <span>Choose photos of the job</span>
                <input
                  id="q-photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onFiles}
                  className="upload__input"
                />
              </label>
              {files.length > 0 && (
                <ul className="upload__list">
                  {files.map((f) => (
                    <li key={f.name}>
                      <span>{f.name}</span>
                      <button
                        type="button"
                        aria-label={`Remove ${f.name}`}
                        onClick={() => setFiles((list) => list.filter((x) => x.name !== f.name))}
                      >
                        <X size={13} strokeWidth={2.5} aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="upload__note">{quote.photoNote}</p>
            </div>

            <div className="field--full quote__submit">
              <button type="submit" className="btn btn--wa">
                <WhatsAppIcon size={19} />
                {quote.submit}
              </button>
              <CallButton variant="ghostLight">Call instead</CallButton>
            </div>

            {notice && (
              <p className="quote__notice field--full" role="status">
                {notice}
              </p>
            )}
          </form>
        </div>

        {/* ---- Details ---- */}
        <aside className="contact__side">
          <h3 className="contact__sideTitle">Reach Khokha</h3>

          {/* Rows appear as each detail is filled in; nothing is invented. */}
          <ul className="contact__list" hidden={!hasAnyDetail}>
            {has.phone() && (
              <li>
                <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                <a href={telHref()}>{show.phone()}</a>
              </li>
            )}
            {has.email() && (
              <li>
                <Mail size={16} strokeWidth={2.2} aria-hidden="true" />
                <a href={mailHref('Quote request')}>{show.email()}</a>
              </li>
            )}
            {has.location() && (
              <li>
                <MapPin size={16} strokeWidth={2.2} aria-hidden="true" />
                <span>{show.location()}</span>
              </li>
            )}
            {details.hours && (
              <li>
                <Clock size={16} strokeWidth={2.2} aria-hidden="true" />
                <span>{details.hours}</span>
              </li>
            )}
          </ul>

          {details.serviceArea && <p className="contact__area">{details.serviceArea}</p>}

          <div className="contact__sideCta">
            <p>Quickest answer is on WhatsApp.</p>
            <WhatsAppButton enquiry="quote" variant="wa">
              WhatsApp Khokha
            </WhatsAppButton>
          </div>
        </aside>
      </div>
    </section>
  )
}
