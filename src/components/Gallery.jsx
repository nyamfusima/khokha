import { useMemo, useState } from 'react'
import { gallery } from '../data/siteContent.js'
import Frame from './ui/Frame.jsx'
import Display from './ui/Display.jsx'
import { QuoteButton } from './ui/Actions.jsx'

export default function Gallery() {
  const [filter, setFilter] = useState('all')

  const items = useMemo(
    () => (filter === 'all' ? gallery.items : gallery.items.filter((i) => i.category === filter)),
    [filter]
  )

  return (
    <section className="section section--gallery" id="projects">
      <div className="shell">
        <div className="sectionHead sectionHead--dark">
          <Display lines={gallery.headline} className="display--xl" />
          <p className="sectionHead__body">{gallery.body}</p>
        </div>

        <div className="gal__filters" role="group" aria-label="Filter work">
          {gallery.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="gal__filter"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gal__grid">
          {items.map((item, i) => (
            <figure
              className={`gal__item gal__item--${item.size}`}
              key={`${item.label}-${i}`}
              data-category={item.category}
            >
              <Frame
                src={item.src}
                alt={item.alt}
                label={item.label}
                tone={item.category === 'fridges' ? 'cold' : 'steel'}
                fit={item.fit}
                className="frame--fill"
              />
              <figcaption className="gal__caption">{item.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="gal__foot">
          <p>Got a job like one of these?</p>
          <QuoteButton variant="weld">Request a quote</QuoteButton>
        </div>
      </div>
    </section>
  )
}
