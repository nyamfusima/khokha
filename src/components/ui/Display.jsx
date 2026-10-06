/**
 * The condensed display heading used across the site. Lines are explicit in the
 * content file so the client controls where each heading breaks.
 */
export default function Display({ as: Tag = 'h2', lines = [], className = '', id }) {
  return (
    <Tag id={id} className={`display ${className}`.trim()}>
      {lines.map((line, i) => (
        <span className="display__line" key={i}>
          {line}
        </span>
      ))}
    </Tag>
  )
}
