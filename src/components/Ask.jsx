const funds = [
  { label: 'Head of Sales — 12 months (base + uncapped commission)', amount: '£50,000', pct: 12.5 },
  { label: 'Frontend Developer — 12 months', amount: '£40,000', pct: 10 },
  { label: 'Founder salary — 12 months', amount: '£35,000', pct: 8.75 },
  { label: 'Data Scientist — 12 months', amount: '£32,000', pct: 8 },
  { label: 'Cybersecurity Specialist — 12 months', amount: '£32,000', pct: 8 },
  { label: 'Marketing, PR & events', amount: '£70,000', pct: 17.5 },
  { label: 'Auditor build + legal + security pen test', amount: '£60,000', pct: 15 },
  { label: 'Runway buffer', amount: '£81,000', pct: 20.25 },
]

export default function Ask() {
  return (
    <section id="ask" className="section" data-animate>
      <span className="section-number">07</span>
      <h2>£400,000 for 10.26% post-money equity.</h2>
      <p className="section-sub">£3.5m pre-money. Above the British Business Bank 2024 pre-seed average of £3.2m. Within the Equidam European pre-seed median of £4–4.5m. Anchored by a live product in production, real beta venues using it daily, a team that believed enough to take founder-level salaries, a TechStart NI application under assessment, and the only Square-native compliance and inventory platform in the UK and Ireland. This is not a concept — it is a working product in a validated market, raising at a fair price.</p>

      <div style={{ marginTop: 40, marginBottom: 16 }}>
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

      <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic', marginBottom: 40 }}>
        The team has agreed to founder-level salaries to extend runway, reach profitability faster, and maximise investor returns. Every pound raised goes further in Belfast than anywhere else in the UK. Head of Sales compensation includes uncapped commission — aligned incentives from day one.
      </p>

      <div className="callout" style={{ marginBottom: 24 }} data-animate>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#1B2A4A' }}>
          <strong>Base case:</strong> £400k for 10.26% post-money equity at £3.5m pre-money. At a conservative 5× ARR exit on £2.99m Year 5 ARR: exit value £14.95m → investor return £1.534m → 3.84× / 30.8% IRR over 5 years.
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#1B2A4A', marginTop: 8 }}>
          <strong>Upside case:</strong> At a 10× ARR exit: exit value £29.9m → investor return £3.068m → 7.67× / 50.4% IRR over 5 years.
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.7, color: '#999', marginTop: 8 }}>
          UK angel target IRR: 30%+. Base case sits at threshold. Upside case at 50.4% IRR is comfortably within top-quartile angel returns. Ireland alone at 5% penetration adds ~£1.54m ARR — materially de-risking the downside. Returns illustrated on a no-dilution basis; future rounds may dilute equity.
        </p>
      </div>

      <div style={styles.returnsBox} data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: 16 }}>
          £400,000 buys 10.26% of a company with a live product, real customers across two markets, a validated problem, and a team that has already taken personal financial risk to get here.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 8 }}>
          <span style={{ color: '#A8D5E2', fontWeight: 600 }}>Base case:</span> 3.84× / 30.8% IRR at a conservative 5× ARR exit.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 16 }}>
          <span style={{ color: '#D4A574', fontWeight: 600 }}>Upside:</span> 7.67× / 50.4% IRR at a 10× ARR exit.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 0 }}>
          The team accepted founder-level salaries so the runway goes further. The raise is lean by design. The returns are better for it.
          <br />Square validated this market on 2 April 2026. Toast opened a Dublin office in December 2025. The only question is who builds the purpose-built UK and Irish answer. That is Quartermaster.
        </p>
      </div>

      <blockquote style={styles.quote} data-animate>
        "Every week without a sales team is a week a competitor is having conversations we're not in. £400,000 fixes that — with £81,000 left in reserve."
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
