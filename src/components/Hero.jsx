import { useEffect, useRef, useState } from 'react'
import { hero, media } from '../data/siteContent.js'
import Display from './ui/Display.jsx'
import { WhatsAppButton, CallButton, QuoteButton } from './ui/Actions.jsx'

/**
 * The welding clip is the hero. It sits full-bleed behind the copy with a
 * gradient scrim rather than any card, border or panel — the work is the
 * visual, the UI stays out of it.
 *
 * Small screens get a lighter-weight encode. Anyone who has asked for reduced
 * motion gets the poster frame and no video at all.
 */
export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [useVideo, setUseVideo] = useState(false)
  const [src, setSrc] = useState(media.heroVideo)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    setSrc(window.innerWidth < 760 ? media.heroVideoMobile : media.heroVideo)
    setUseVideo(true)
  }, [])

  /* Some mobile browsers reject autoplay; the poster then stays, which is fine. */
  useEffect(() => {
    const v = videoRef.current
    if (!v || !useVideo) return
    const play = v.play()
    if (play && typeof play.catch === 'function') play.catch(() => {})
  }, [useVideo, src])

  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <img
          className="hero__poster"
          src={media.heroPoster}
          alt={hero.videoAlt}
          fetchPriority="high"
          decoding="async"
        />
        {useVideo && (
          <video
            ref={videoRef}
            className={`hero__video ${ready ? 'is-ready' : ''}`.trim()}
            src={src}
            poster={media.heroPoster}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
            onCanPlay={() => setReady(true)}
          />
        )}
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__copy">
        <p className="hero__label">{hero.label}</p>
        <Display as="h1" lines={hero.headline} className="display--hero" />
        <p className="hero__body">{hero.body}</p>
        <div className="hero__actions">
          <QuoteButton variant="weld">Request a quote</QuoteButton>
          <WhatsAppButton enquiry="general" variant="ghostLight">
            WhatsApp us
          </WhatsAppButton>
          <CallButton variant="link">Call us</CallButton>
        </div>
      </div>
    </section>
  )
}
