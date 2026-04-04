const funds = [
  { label: 'Head of Sales — 12 months', amount: '£150,000', pct: 30 },
  { label: 'Frontend Developer — 12 months', amount: '£100,000', pct: 20 },
  { label: 'Founder salary (stay full-time)', amount: '£80,000', pct: 16 },
  { label: 'Marketing, PR & events', amount: '£70,000', pct: 14 },
  { label: 'Auditor build + legal + security pen test', amount: '£60,000', pct: 12 },
  { label: 'Runway buffer', amount: '£40,000', pct: 8 },
]

const returns = [
  { label: 'Entry valuation', value: '£4.2–5m' },
  { label: 'Year 5 ARR', value: '£3.2m' },
  { label: 'Exit at 5\u00D7 ARR', value: '£16m' },
  { label: 'Investor return on £500k', value: '3.2\u00D7–7.7\u00D7' },
]

export default function Ask() {
  return (
    <section id="ask" className="section" data-animate>
      <span className="section-number">07</span>
      <h2>£500,000 for 10–12% equity.</h2>
      <p className="section-sub">Implied valuation: £4.2–5m (above British Business Bank 2024 pre-seed average of £3.2m; within Equidam European pre-seed median of £4–4.5m. Anchored by: live production product, paying beta users, TechStart NI application under assessment, and vertical SaaS operator-founder credentials).</p>

      <div style={{ marginTop: 40, marginBottom: 40 }}>
        {funds.map((f) => (
          <div key={f.label} style={styles.fundRow} data-animate>
            <div style={styles.fundTop}>
              <span style={styles.fundLabel}>{f.label}</span>
              <span style={styles.fundAmount}>{f.amount}</span>
            </div>
            <div style={styles.barTrack}>
              <div style={{ ...styles.barFill, width: `${f.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div style={styles.returnsBox} data-animate>
        <div style={styles.returnsGrid}>
          {returns.map((r) => (
            <div key={r.label} style={styles.returnItem}>
              <div style={styles.returnValue}>{r.value}</div>
              <div style={styles.returnLabel}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="callout" style={{ marginBottom: 32 }} data-animate>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#1B2A4A' }}>
          <strong>Investor return detail:</strong> 3.2×–7.7× (26–48% IRR) at 5×–10× ARR exit. Base case: 3.8× / 31% IRR at £16m exit. Upside case: 7.7× / 47% IRR at £32m exit (10× ARR). Source: IRR calculation per standard compounding formula over 5-year horizon.
        </p>
      </div>

      <blockquote style={styles.quote} data-animate>
        "Every week without a sales team is a week a competitor is having conversations we're not in."
      </blockquote>
    </section>
  )
}

const styles = {
  fundRow: {
    marginBottom: 20,
  },
  fundTop: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  fundLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: '#1B2A4A',
  },
  fundAmount: {
    fontSize: 14,
    fontWeight: 600,
    color: '#1B2A4A',
  },
  barTrack: {
    height: 8,
    background: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    background: '#D4A574',
    borderRadius: 4,
    transition: 'width 0.6s ease',
  },
  returnsBox: {
    background: '#1B2A4A',
    borderRadius: 12,
    padding: '32px 28px',
    marginBottom: 48,
  },
  returnsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
  },
  returnItem: {
    textAlign: 'center',
  },
  returnValue: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 28,
    fontWeight: 700,
    color: '#A8D5E2',
    marginBottom: 4,
  },
  returnLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
  },
  quote: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 28,
    fontStyle: 'italic',
    color: '#1B2A4A',
    textAlign: 'center',
    maxWidth: 700,
    margin: '0 auto',
    padding: '48px 0',
    lineHeight: 1.4,
    border: 'none',
  },
}

// Mobile quote size
if (typeof document !== 'undefined') {
  const s = document.createElement('style')
  s.textContent = `@media (max-width: 768px) { #ask blockquote { font-size: 22px !important; } }`
  document.head.appendChild(s)
}
