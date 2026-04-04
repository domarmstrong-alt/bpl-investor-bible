import { useState, useEffect } from 'react'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Market', href: '#market' },
  { label: 'Competition', href: '#competition' },
  { label: 'Traction', href: '#traction' },
  { label: 'Financials', href: '#financials' },
  { label: 'The Ask', href: '#ask' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const handleScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i])
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} style={styles.brand}>
          Blue Paper Labs
        </a>

        {/* Desktop links */}
        <div style={styles.desktopLinks}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              style={{
                ...styles.link,
                borderBottomColor: active === l.href.slice(1) ? '#A8D5E2' : 'transparent',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ ...styles.bar, transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ ...styles.bar, opacity: open ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div style={styles.overlay}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              style={styles.overlayLink}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: '#1B2A4A',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 24px',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
  },
  desktopLinks: {
    display: 'flex',
    gap: 24,
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 500,
    color: '#fff',
    textDecoration: 'none',
    paddingBottom: 4,
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.2s',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: 4,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
  },
  bar: {
    display: 'block',
    width: 22,
    height: 2,
    background: '#fff',
    borderRadius: 1,
    transition: 'all 0.3s',
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    top: 60,
    background: '#1B2A4A',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    zIndex: 99,
  },
  overlayLink: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.25rem',
    color: '#fff',
    textDecoration: 'none',
  },
}

// Inject media query for hamburger
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @media (max-width: 768px) {
      nav > div > div:nth-child(2) { display: none !important; }
      nav > div > button { display: flex !important; }
    }
  `
  document.head.appendChild(style)
}
