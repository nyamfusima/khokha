import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, nav } from '../data/siteContent.js'
import { scrollToId } from '../lib/contact.js'
import { WhatsAppButton, CallButton } from './ui/Actions.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [lifted, setLifted] = useState(false)
  const [active, setActive] = useState('home')
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  /* The bar sits transparent over the hero and goes solid once you leave it. */
  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Highlight the section you are reading — seven links need the orientation. */
  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* While the mobile menu is open: lock the page, close on Escape. */
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    panelRef.current?.querySelector('a, button')?.focus()
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  /* Close first, then scroll on the next frame — the body scroll lock is
     released during that commit, and scrolling before it lands short. */
  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)))
  }

  return (
    <header className={`nav ${lifted ? 'nav--lifted' : ''} ${open ? 'nav--open' : ''}`.trim()}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={go('home')} aria-label={`${brand.name} — home`}>
          {brand.logo ? (
            <img className="nav__logo" src={brand.logo} alt={brand.name} />
          ) : (
            <span className="wordmark">
              <span className="wordmark__name">{brand.short}</span>
              <span className="wordmark__suffix">{brand.suffix}</span>
            </span>
          )}
        </a>

        <nav className="nav__links" aria-label="Sections">
          {nav.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={go(id)}
              className="nav__link"
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="btn btn--weld nav__cta" href="#contact" onClick={go('contact')}>
          Get a quote
        </a>

        <button
          ref={toggleRef}
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="nav-panel"
        ref={panelRef}
        className="nav__panel"
        hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false)
        }}
      >
        <nav className="nav__panelLinks" aria-label="Sections">
          {nav.map(({ label, id }, i) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className="nav__panelLink">
              <span className="nav__panelIndex">{String(i + 1).padStart(2, '0')}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__panelActions">
          <WhatsAppButton enquiry="general">WhatsApp us</WhatsAppButton>
          <CallButton variant="ghostLight">Call us</CallButton>
        </div>
      </div>
    </header>
  )
}
