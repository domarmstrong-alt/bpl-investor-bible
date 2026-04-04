const markets = [
  { flag: '\u{1F1EC}\u{1F1E7}', country: 'United Kingdom', venues: '99,120 licensed venues', arr: '£59m ARR at 1% penetration', timeline: 'Active from day 1', color: 'pill-green' },
  { flag: '\u{1F1FA}\u{1F1F8}', country: 'United States', venues: '500,000+ venues', arr: '$595m ARR at 1% penetration', timeline: 'From month 18', color: 'pill-blue' },
  { flag: '\u{1F1E6}\u{1F1FA}', country: 'Australia', venues: '50,000+ venues', arr: 'A$59m ARR at 1% penetration', timeline: 'From month 18', color: 'pill-blue' },
  { flag: '\u{1F1E8}\u{1F1E6}', country: 'Canada', venues: '90,000+ venues', arr: 'C$107m ARR at 1% penetration', timeline: 'From month 18', color: 'pill-blue' },
]

const ukStats = [
  { number: '99,120', label: 'Licensed UK venues (December 2024)' },
  { number: '~75%', label: 'Not using dedicated inventory software' },
  { number: '£40–60m', label: 'Addressable ARR at mid-case pricing' },
]

export default function Market() {
  return (
    <section id="market" className="section" data-animate>
      <span className="section-number">03</span>
      <h2>A £100m+ opportunity in the UK alone. Four markets in English. Zero localisation cost.</h2>

      <div className="card-grid" style={{ marginTop: 40 }}>
        {markets.map((m) => (
          <div key={m.country} className="card" style={{ textAlign: 'center' }} data-animate>
            <div style={{ fontSize: 40, marginBottom: 8 }}>{m.flag}</div>
            <h3 style={styles.country}>{m.country}</h3>
            <div style={styles.venues}>{m.venues}</div>
            <div style={styles.arr}>{m.arr}<sup className="cite">5</sup></div>
            <span className={`pill ${m.color}`} style={{ marginTop: 8 }}>{m.timeline}</span>
          </div>
        ))}
      </div>

      <div className="callout-navy" style={styles.calloutNav} data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7 }}>
          English-language scaling means the same product, same onboarding, same pitch deck works across all four markets. No localisation sprint. No translation cost. The founder built and operated in English hospitality — the product intuition transfers directly.
        </p>
      </div>

      <div style={styles.statsRow} data-animate>
        {ukStats.map((s) => (
          <div key={s.number} style={styles.statItem}>
            <div style={styles.statNumber}>{s.number}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="sources-block">
        Sources: CGA by NIQ &amp; AlixPartners Hospitality Market Monitor (Dec 2024) &middot; UK Food Council 2025 &middot; Blue Paper Labs market analysis
      </div>
    </section>
  )
}

const styles = {
  country: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 20,
    fontWeight: 700,
    color: '#1B2A4A',
    marginBottom: 4,
  },
  venues: { fontSize: 14, color: 'rgba(27,42,74,0.6)', marginBottom: 4 },
  arr: { fontSize: 15, fontWeight: 600, color: '#1B2A4A', marginBottom: 4 },
  calloutNav: {
    background: '#1B2A4A',
    color: '#fff',
    borderLeft: '4px solid #A8D5E2',
    borderRadius: 12,
    padding: '24px 28px',
    marginBottom: 40,
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 48,
    flexWrap: 'wrap',
    margin: '40px 0 16px',
  },
  statItem: { textAlign: 'center' },
  statNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 36,
    fontWeight: 700,
    color: '#1B2A4A',
  },
  statLabel: { fontSize: 13, color: '#999', maxWidth: 200 },
}

// Pill blue style
if (typeof document !== 'undefined') {
  const s = document.createElement('style')
  s.textContent = `.pill-blue { background: rgba(168,213,226,0.2); color: #1B6B80; }`
  document.head.appendChild(s)
}
