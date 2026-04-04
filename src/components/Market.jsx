const markets = [
  { flag: '\u{1F1EC}\u{1F1E7}', country: 'United Kingdom', venues: '99,120 licensed venues (Britain)', arr: '£118m ARR at full penetration \u00B7 SAM: 62,347 independent operators', timeline: 'Active from day 1', color: 'pill-green' },
  { flag: '\u{1F1FA}\u{1F1F8}', country: 'United States', venues: '720,000+ food service and drinking establishments (BLS NAICS 722, Q4 2024)', arr: '', timeline: 'From month 18', color: 'pill-blue' },
  { flag: '\u{1F1E6}\u{1F1FA}', country: 'Australia', venues: '90,000+ hospitality venues (ABS/ResDiary, FY2024)', arr: '', timeline: 'From month 18', color: 'pill-blue' },
  { flag: '\u{1F1E8}\u{1F1E6}', country: 'Canada', venues: '100,000+ foodservice locations (Restaurants Canada Foodservice Facts, 2024)', arr: '', timeline: 'From month 18', color: 'pill-blue' },
]

const ukStats = [
  { number: '99,120', label: 'Licensed Britain venues (CGA/AlixPartners, December 2024) \u2014 TAM' },
  { number: '62,347', label: 'Independent operators (CGA breakdown, December 2024) \u2014 SAM' },
  { number: '60%', label: 'Of UK independents lack the capital or skills to implement technology comparable to larger chains (Mordor Intelligence UK Hospitality Market Report, 2026)' },
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
            {m.arr && <div style={styles.arr}>{m.arr}</div>}
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
        Sources: CGA by NIQ &amp; AlixPartners Hospitality Market Monitor (Dec 2024) &middot; BLS NAICS 722 (Q4 2024) &middot; Restaurants Canada Foodservice Facts 2024 &middot; ABS/ResDiary FY2024 &middot; Mordor Intelligence UK Hospitality Market Report 2026
        <br /><span style={{ fontStyle: 'italic' }}>(Britain — England, Scotland and Wales; Northern Ireland excluded from CGA Outlet Index)</span>
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
