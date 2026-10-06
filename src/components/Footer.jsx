import { brand, footer, nav, details } from '../data/siteContent.js'
import { has, show, telHref, mailHref, scrollToId } from '../lib/contact.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="foot">
      <div className="shell foot__grid">
        <div className="foot__brand">
          {brand.logo ? (
            <img className="foot__logo" src={brand.logo} alt={brand.name} />
          ) : (
            <span className="wordmark wordmark--light">
              <span className="wordmark__name">{brand.short}</span>
              <span className="wordmark__suffix">{brand.suffix}</span>
            </span>
          )}
          <p className="foot__blurb">{footer.blurb}</p>
        </div>

        <div className="foot__services">
          <h2 className="foot__colTitle">What we do</h2>
          <ul>
            {footer.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <nav className="foot__nav" aria-label="Footer">
          <h2 className="foot__colTitle">Sections</h2>
          <ul>
            {nav.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(id)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="foot__contact">
          <h2 className="foot__colTitle">Contact</h2>
          <ul>
            {has.phone() && (
              <li>
                <a href={telHref()}>{show.phone()}</a>
              </li>
            )}
            {has.email() && (
              <li>
                <a href={mailHref('Enquiry')}>{show.email()}</a>
              </li>
            )}
            {has.location() && <li>{show.location()}</li>}
            {details.hours && <li>{details.hours}</li>}
          </ul>
          {(details.facebook || details.instagram) && (
            <ul className="foot__social">
              {details.facebook && (
                <li>
                  <a href={details.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              )}
              {details.instagram && (
                <li>
                  <a href={details.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="shell foot__legal">
        <p>
          © {year} {footer.legal}
        </p>
      </div>
    </footer>
  )
}
