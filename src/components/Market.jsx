const markets = [
  {
    flag: '\u{1F1EC}\u{1F1E7}',
    country: 'Britain',
    subtitle: '99,120 licensed venues (England, Scotland & Wales)',
    body: 'TAM: £119m ARR at full penetration · SAM: 62,347 independent operators',
    timeline: 'Active from Day 1',
    color: 'pill-green',
    footnote: 'CGA by NIQ & AlixPartners Hospitality Market Monitor, December 2024. Northern Ireland excluded from CGA Outlet Index.',
  },
  {
    flag: '\u{1F1EE}\u{1F1EA}',
    country: 'Republic of Ireland',
    subtitle: '~26,000 licensed hospitality venues',
    body: 'Not an international expansion, our second home market. Under the Windsor Framework and Invest NI\u2019s dual market access framework, NI companies operate naturally across the island. Square has been operational in Ireland since 2021, authorised by the Central Bank of Ireland, with restaurant hardware launched October 2025. Our Square-first distribution channel requires zero reconfiguration.',
    timeline: 'Active from Month 6',
    color: 'pill-green',
    footnote: 'Venue estimate: IBISWorld Ireland 2025 · VFI licence data 2023 · Bord Bia Foodservice Market Insights 2024. No single national register equivalent to CGA exists for Ireland.',
  },
  {
    flag: '\u{1F1FA}\u{1F1F8}',
    country: 'United States',
    subtitle: '720,000+ food service and drinking establishments',
    body: 'Largest English-speaking market. Square-native distribution via US App Marketplace. No language localisation and minimal product localisation.',
    timeline: 'Active from Month 18',
    color: 'pill-blue',
    footnote: 'US Bureau of Labor Statistics, NAICS 722, Q4 2024.',
  },
  {
    flag: '\u{1F1E6}\u{1F1FA}',
    country: 'Australia',
    subtitle: '~90,000 hospitality venues',
    body: 'Square-native market. English-language product transfers directly. HACCP equivalent in force.',
    timeline: 'Active from Month 18',
    color: 'pill-blue',
    footnote: 'ABS / ResDiary Australia, FY2024.',
  },
  {
    flag: '\u{1F1E8}\u{1F1E6}',
    country: 'Canada',
    subtitle: '100,000+ foodservice locations',
    body: 'Square-native market. English-language product transfers directly.',
    timeline: 'Active from Month 18',
    color: 'pill-blue',
    footnote: 'Restaurants Canada Foodservice Facts, 2024.',
  },
  {
    flag: '\u{1F1F3}\u{1F1FF}',
    country: 'New Zealand',
    subtitle: '~18,000 food and beverage venues',
    body: 'English-speaking Pacific market. HACCP-equivalent Food Control Plan mandatory under Food Act 2014. Digital records explicitly accepted by MPI. Lightspeed-first GTM, Square does not currently operate in New Zealand.',
    timeline: 'Active from Year 3',
    color: 'pill-grey',
    footnote: 'Stats NZ / Statista FY2024. GTM route: Lightspeed-native integration. Square GTM not applicable.',
  },
]

const stats = [
  { number: '1,053,120', label: 'Combined six-market TAM (Britain + Ireland + US + Australia + Canada + New Zealand)' },
  { number: '62,347', label: 'Independent operators in Britain alone (SAM)' },
  { number: '0.43%', label: '4,500 Year 5 target venues, equal to 0.43% of combined six-market TAM' },
  { number: '~63%', label: 'Of Britain\u2019s licensed venues are independent operators without dedicated inventory management software (CGA/AlixPartners Hospitality Market Monitor, December 2024)' },
]

export default function Market() {
  return (
    <section id="market" className="section" data-animate>
      <span className="section-number">03</span>
      <h2>A £100m+ opportunity in the UK alone. Six markets in English. No language localisation and minimal product localisation.</h2>

      <div className="card-grid" style={{ marginTop: 40 }}>
        {markets.map((m) => (
          <div key={m.country} className="card" style={{ textAlign: 'center' }} data-animate>
            <div style={{ fontSize: 40, marginBottom: 8 }}>{m.flag}</div>
            <h3 style={styles.country}>{m.country}</h3>
            <div style={styles.subtitle}>{m.subtitle}</div>
            <p style={styles.body}>{m.body}</p>
            <span className={`pill ${m.color}`} style={{ marginTop: 8 }}>{m.timeline}</span>
            <div className="source-line" style={{ marginTop: 8 }}>{m.footnote}</div>
          </div>
        ))}
      </div>

      <div className="callout-navy" style={styles.calloutNav} data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7 }}>
          English-language scaling means the same product, same onboarding, same pitch deck works across all six markets. No translation sprint. Product localisation remains limited to compliance wording and integration priorities. The founder built and operated in English hospitality, the product intuition transfers directly.
        </p>
      </div>

      <div style={styles.statsRow} data-animate>
        {stats.map((s) => (
          <div key={s.number} style={styles.statItem}>
            <div style={styles.statNumber}>{s.number}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="sources-block">
        Sources: CGA/AlixPartners Hospitality Market Monitor Dec 2024 &middot; IBISWorld Ireland 2025 &middot; VFI licence data 2023 &middot; BLS NAICS 722 Q4 2024 &middot; Restaurants Canada Foodservice Facts 2024 &middot; ABS/ResDiary FY2024 &middot; Stats NZ/Statista FY2024
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
  subtitle: { fontSize: 14, color: 'rgba(27,42,74,0.6)', marginBottom: 8 },
  body: { fontSize: 13, lineHeight: 1.6, color: '#1B2A4A', textAlign: 'left', marginBottom: 8 },
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
  statItem: { textAlign: 'center', maxWidth: 240 },
  statNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 36,
    fontWeight: 700,
    color: '#1B2A4A',
  },
  statLabel: { fontSize: 13, color: '#999' },
}

// Pill blue style
if (typeof document !== 'undefined') {
  const s = document.createElement('style')
  s.textContent = `.pill-blue { background: rgba(168,213,226,0.2); color: #1B6B80; }`
  document.head.appendChild(s)
}
