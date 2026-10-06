import { about } from '../data/siteContent.js'
import Frame from './ui/Frame.jsx'
import Display from './ui/Display.jsx'

export default function About() {
  return (
    <section className="section section--about" id="about">
      <div className="shell about__grid">
        <div className="about__body">
          <p className="about__label">{about.label}</p>
          <Display lines={about.headline} />
          {about.paragraphs.map((p, i) => (
            <p className={i === 0 ? 'lede' : 'about__text'} key={i}>
              {p}
            </p>
          ))}
        </div>

        <Frame
          src={about.image}
          alt={about.imageAlt}
          label="In the workshop"
          tone="steel"
          className="about__photo"
        />
      </div>
    </section>
  )
}
