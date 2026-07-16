const headlines = [
  { number: '£7.1m', label: 'Year 5 ARR (central case · £6.9m–£7.3m band, upside to £7.6m)' },
  { number: '£2.8m', label: 'Year 5 net profit' },
  { number: '£8.4m', label: '5-year cumulative subscription revenue (sum of in-year revenue below)' },
  { number: '85–95%', label: 'Gross margin (subscription revenue only, no professional services. Stripe ~2.2%, infrastructure ~1.5%, AI ~0.5% at current usage. Currently ~95%, expected to normalise toward 85–90% at scale as AI usage grows with Aoife™ standard on every venue.)' },
  { number: '£35–71m', label: 'Implied exit at 5×–10× ARR (Global private SaaS long-term median 4.5×, top quartile above 8.1× (Aventis Advisors, March 2026))' },
]

const tableHeaders = ['Metric', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']

const tableRows = [
  { metric: 'Britain', values: ['43', '143', '307', '604', '1,060'] },
  { metric: 'Ireland (M6)', values: ['7', '41', '88', '174', '290'] },
  { metric: 'US (M18)', values: ['0', '31', '165', '538', '1,370'] },
  { metric: 'Australia (M18)', values: ['0', '20', '110', '376', '940'] },
  { metric: 'Canada (M18)', values: ['0', '15', '87', '215', '580'] },
  { metric: 'New Zealand (Y3)', values: ['0', '0', '43', '93', '260'] },
  { metric: 'Net Active Venues', values: ['50', '250', '800', '2,000', '4,500'], highlight: true },
  { metric: 'Blended ARPU/mo', values: ['£113.75', '£125.75', '£131.25', '£131.25', '£131.25'] },
  { metric: 'ARR (run-rate)', values: ['£68k', '£377k', '£1.26m', '£3.15m', '£7.09m'], highlight: true },
  { metric: 'Revenue (in-year)', values: ['£34k', '£226k', '£827k', '£2.21m', '£5.12m'] },
  { metric: 'Total costs (incl. COGS)', values: ['£300k', '£275k', '£520k', '£1.06m', '£2.30m'] },
  {
    metric: 'Net Profit / Loss',
    values: [
      { v: '−£266k', color: '#D4A574' },
      { v: '−£49k', color: '#D4A574' },
      { v: '£307k', color: 'rgba(76,175,80,0.8)' },
      { v: '£1.15m', color: 'rgba(76,175,80,0.8)' },
      { v: '£2.82m', color: 'rgba(76,175,80,0.8)' },
    ],
  },
]

export default function Financials() {
  return (
    <section id="financials" className="section" data-animate>
      <span className="section-number">06</span>
      <h2>£7.1m ARR by Year 5. Profitable from Year 3.</h2>
      <p className="section-sub">
        Y5 ARR sits at £7.1m on the current venue case. Each 10-point swing across add-on attach rates moves Y5 ARR by roughly £160k, giving a £6.9m–£7.3m band, with upside toward £7.6m if every attach lever outperforms.
      </p>
      <p className="section-sub" style={{ marginTop: -8 }}>
        Base bundle £100/mo: Quartermaster, Auditor, and Secretary, all live, with Aoife&trade; cross-app reasoning included as standard. Receptionist +£20/mo launches in Year 2. Clerk +£10/mo launches Year 2 to Year 3 once the senior technical hire is in. Power User +£5/mo extends the Aoife&trade; call allowance. Additional venues +£50/mo with identical app subs enforced across venues. Five free Opus calls per venue per month included; Opus packs from £5/10 calls. 1.5% monthly churn (16.6% annualised), at the lower end of the mid-market SaaS benchmark of 1.5–3% monthly (Optifai, 2026), justified by Square POS integration switching costs that create structural retention. Venue figures represent net active customers after churn. International from Month 18, Ireland from Month 6. Sales team active from Month 1.
      </p>

      <div style={styles.headlineRow} data-animate>
        {headlines.map((h) => (
          <div key={h.label} className="card" style={styles.headlineCard}>
            <div style={styles.headlineNumber}>{h.number}</div>
            <div style={styles.headlineLabel}>{h.label}</div>
          </div>
        ))}
      </div>

      <div style={styles.tableWrap} data-animate>
        <table style={styles.table}>
          <thead>
            <tr>
              {tableHeaders.map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((r, ri) => (
              <tr key={r.metric} style={{
                background: r.highlight ? 'rgba(168,213,226,0.05)' : ri % 2 === 0 ? '#FAFAFA' : '#fff',
              }}>
                <td style={{ ...styles.td, fontWeight: 600 }}>{r.metric}</td>
                {r.values.map((v, vi) => {
                  const isObj = typeof v === 'object'
                  return (
                    <td key={vi} style={{
                      ...styles.td,
                      color: isObj ? v.color : '#1B2A4A',
                      fontWeight: r.highlight ? 600 : 400,
                    }}>
                      {isObj ? v.v : v}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={styles.note}>
        Net active venue figures account for 1.5% monthly churn (16.6% annually) applied to opening base each year. Gross new logos signed are higher. Blended ARPU rises through Year 3 as Receptionist attaches at 60% from Year 2 and Clerk attaches at 55% from Year 3 (launch window Year 2 to Year 3, revenue modelled conservatively from Year 3). 20% of operators run more than one venue at an average of one extra venue. Power User add-on attaches at 15%. Opus pack overage averages around £3 per venue per month. ARR figures based on end-of-year net active venues × blended ARPU × 12. In-year revenue based on average active venues across the year (midpoint of opening and closing base). Total costs cover the core team, marketing, legal and security, and platform COGS, held lean through Year 2 and scaling with venue growth from Year 3. Net profit is in-year revenue minus total costs. Forward-looking estimates, not guaranteed.
      </p>

      <div className="callout" style={{ marginTop: 16 }} data-animate>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#1B2A4A' }}>
          <strong>COGS breakdown at 100 venues (£100/mo base bundle):</strong> Stripe ~2.2% (£220/month), Supabase/Vercel infrastructure ~1.5% (£150/month), Anthropic API with prompt caching ~0.5% (&lt;£50/month). Total COGS ~4.2% of revenue. Gross margin ~95.8% at 100 venues, normalising to 85–90% at scale. AI is the line expected to grow fastest with Aoife&trade; cross-app reasoning standard on every venue; the 85–90% normalisation allows for this. Source: Stripe UK pricing April 2026 · Benchmarkit SaaS Gross Margin 2025
        </p>
      </div>
    </section>
  )
}

const styles = {
  headlineRow: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    marginBottom: 40,
  },
  headlineCard: {
    flex: '1 1 160px',
    textAlign: 'center',
    padding: '24px 16px',
  },
  headlineNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 32,
    fontWeight: 700,
    color: '#1B2A4A',
    marginBottom: 4,
  },
  headlineLabel: {
    fontSize: 13,
    color: '#999',
  },
  tableWrap: {
    overflowX: 'auto',
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(27,42,74,0.06)',
    marginBottom: 16,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
  },
  th: {
    background: '#1B2A4A',
    color: '#fff',
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: 13,
  },
  td: {
    padding: '10px 16px',
    borderBottom: '1px solid #eee',
  },
  note: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    lineHeight: 1.6,
    marginTop: 8,
  },
}
