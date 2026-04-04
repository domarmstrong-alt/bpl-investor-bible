const funds = [
  { label: 'Head of Sales — 12 months', amount: '£50,000', pct: 12.5 },
  { label: 'Frontend Developer — 12 months', amount: '£40,000', pct: 10 },
  { label: 'Founder salary (stay full-time)', amount: '£35,000', pct: 8.75 },
  { label: 'Marketing, PR & events', amount: '£70,000', pct: 17.5 },
  { label: 'Auditor build + legal + security pen test', amount: '£60,000', pct: 15 },
  { label: 'Runway buffer', amount: '£145,000', pct: 36.25 },
]

const returns = [
  { label: 'Entry valuation', value: '£3.5m pre-money' },
  { label: 'Year 5 ARR', value: '£3.2m' },
  { label: 'Exit at 5\u00D7 ARR', value: '£16m' },
  { label: 'Investor return on £400k', value: '4.6\u00D7–9.1\u00D7' },
]

export default function Ask() {
  return (
    <section id="ask" className="section" data-animate>
      <span className="section-number">07</span>
      <h2>£400,000 for 11.4% equity.</h2>
      <p className="section-sub">£3.5m pre-money. Above the British Business Bank 2024 pre-seed average of £3.2m. Anchored by a live product in production, real beta venues using it daily, a team that believed enough to take founder-level salaries, and a grant application under assessment by TechStart NI. This is not a concept — it is a working product in a validated market, raising at a fair price.</p>

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

      <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic', marginTop: 8, marginBottom: 40 }}>
        The team has agreed to founder-level salaries to extend runway, reach profitability faster, and maximise investor returns. Every pound raised goes further here than anywhere else in the UK.
      </p>

      <div style={styles.returnsBox} data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: 16 }}>
          £400,000 buys 11.4% of a company with a live product, real customers, a validated market, and a team that has already taken personal financial risk to get here.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 8 }}>
          <span style={{ color: '#A8D5E2', fontWeight: 600 }}>Base case:</span> 4.6× return / 35% IRR at a conservative 5× ARR exit.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 16 }}>
          <span style={{ color: '#D4A574', fontWeight: 600 }}>Upside:</span> 9.1× return / 55% IRR at a 10× ARR exit — well within UK AI-led SaaS precedent.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 0 }}>
          The team accepted founder-level salaries so the runway goes further. The raise is leaner. The returns are better for it.
          <br />Square just spent money validating this market. The only question is who builds the UK answer.
        </p>
      </div>

      <blockquote style={styles.quote} data-animate>
        "Every week without a sales team is a week a competitor is having conversations we're not in. £400,000 fixes that — and leaves £145,000 in reserve."
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
