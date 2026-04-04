export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.cols}>
          <div>
            <div style={styles.brand}>Blue Paper Labs</div>
            <div style={styles.detail}>Bluepaper Limited &middot; NI739076 &middot; Belfast, Northern Ireland</div>
            <div style={styles.detail}>hello@bluepaperlabs.com</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a
              href="https://www.bluepaperlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              bluepaperlabs.com &#8599;
            </a>
          </div>
        </div>
        <div style={styles.fine}>
          This document is confidential and intended solely for the named recipient. Financial projections are forward-looking estimates based on current assumptions and are not guaranteed. Sources: WRAP Guardians of Grub &middot; CGA by NIQ &amp; AlixPartners Hospitality Market Monitor (Dec 2024) &middot; UK Food Council 2025 &middot; Jelly UK Hospitality Analysis 2025 &middot; Trustpilot &middot; G2 &middot; Square App Marketplace &middot; Blue Paper Labs market analysis March 2026.
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#1B2A4A',
    color: '#fff',
    padding: '48px 24px 32px',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
  },
  cols: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 24,
    marginBottom: 32,
  },
  brand: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
  },
  detail: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.6,
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: '#A8D5E2',
    textDecoration: 'none',
  },
  fine: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    lineHeight: 1.7,
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: 24,
  },
}
