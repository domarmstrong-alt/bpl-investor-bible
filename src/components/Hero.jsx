export default function Hero() {
  return (
    <section id="hero" style={styles.hero} data-animate>
      <div style={styles.inner}>
        <span style={styles.badge}>Investment Case &middot; Confidential &middot; 2026</span>

        <h1 style={styles.heading}>
          Built by the industry <em>for the industry</em>
        </h1>

        <p style={styles.sub}>
          Blue Paper Labs builds AI-powered operations software for independent
          hospitality operators — affordable, transparent, and understandable.
        </p>

        <div style={styles.pills}>
          {['£100/mo · First 79 at £79/mo for life', '30-day free trial · No credit card required', '1,053,120 venues across six English-speaking markets', 'Live product in production', '£400k raise · 10.26% post-money equity · £3.5m pre-money'].map(
            (text) => (
              <span key={text} style={styles.pill}>{text}</span>
            )
          )}
        </div>

        <div style={styles.ctas}>
          <a
            href="#problem"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#problem')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={styles.primary}
          >
            View the full brief &darr;
          </a>
          <a
            href="https://www.bluepaperlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondary}
          >
            bluepaperlabs.com &#8599;
          </a>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative',
    padding: '120px 24px 80px',
    background: `
      radial-gradient(ellipse 80% 60% at 20% 30%, rgba(168,213,226,0.07) 0%, transparent 70%),
      radial-gradient(ellipse 60% 80% at 75% 60%, rgba(168,213,226,0.05) 0%, transparent 70%),
      radial-gradient(ellipse 90% 50% at 50% 80%, rgba(168,213,226,0.04) 0%, transparent 70%),
      #FAFAFA
    `,
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    background: '#D4A574',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: '5px 14px',
    borderRadius: 100,
    marginBottom: 24,
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 56,
    fontWeight: 700,
    color: '#1B2A4A',
    lineHeight: 1.15,
    marginBottom: 20,
    maxWidth: 700,
  },
  sub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 20,
    color: 'rgba(27,42,74,0.7)',
    lineHeight: 1.6,
    maxWidth: 640,
    marginBottom: 32,
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  pill: {
    display: 'inline-block',
    background: '#fff',
    color: '#1B2A4A',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    padding: '8px 18px',
    borderRadius: 100,
    border: '1px solid rgba(27,42,74,0.12)',
  },
  ctas: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  primary: {
    display: 'inline-block',
    background: '#1B2A4A',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    padding: '12px 28px',
    borderRadius: 8,
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  secondary: {
    display: 'inline-block',
    background: 'transparent',
    color: '#1B2A4A',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    padding: '12px 28px',
    borderRadius: 8,
    textDecoration: 'none',
    border: '2px solid #1B2A4A',
    transition: 'opacity 0.2s',
  },
}

// Mobile heading size
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @media (max-width: 768px) {
      #hero h1 { font-size: 36px !important; }
      #hero p { font-size: 17px !important; }
    }
  `
  document.head.appendChild(style)
}
