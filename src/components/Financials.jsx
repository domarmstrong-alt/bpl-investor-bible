const headlines = [
  { number: '£4.42m', label: 'Year 5 ARR' },
  { number: '£1.5m', label: 'Year 5 net profit' },
  { number: '£8.21m', label: '5-year cumulative revenue' },
  { number: '85\u201395%+', label: 'Gross margin (subscription revenue only; no professional services. Stripe ~2.2%, infrastructure ~1.5%, AI ~0.5% at current scale. Currently ~95%; expected to normalise toward 85\u201390% at scale.)' },
  { number: '£22\u201344m', label: 'Implied exit at 5\u00D7\u201310\u00D7 ARR (Global private SaaS long-term median 4.5\u00D7, top quartile above 8.1\u00D7 (Aventis Advisors, March 2026))' },
]

const tableHeaders = ['Metric', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']
const subHeaders = ['', '£400k raise', 'Ireland M6', '', '', '']

const tableRows = [
  { metric: 'Britain', values: ['60', '140', '280', '450', '620'] },
  { metric: 'Ireland (M6)', values: ['10', '40', '80', '130', '170'] },
  { metric: 'US (M18)', values: ['0', '30', '150', '400', '800'] },
  { metric: 'Australia (M18)', values: ['0', '20', '100', '280', '550'] },
  { metric: 'Canada (M18)', values: ['0', '15', '80', '160', '340'] },
  { metric: 'New Zealand (Y3)', values: ['0', '0', '40', '70', '150'] },
  { metric: 'Net Active Venues', values: ['70', '245', '730', '1,490', '2,630'], highlight: true },
  { metric: 'Blended ARPU/mo', values: ['£82', '£105', '£120', '£132', '£140'] },
  { metric: 'ARR (run-rate)', values: ['£69k', '£309k', '£1.05m', '£2.36m', '£4.42m'], highlight: true },
  {
    metric: 'Net Profit / Loss',
    values: [
      { v: '\u2212£260k', color: '#D4A574' },
      { v: '\u2212£45k', color: '#D4A574' },
      { v: '£250k', color: 'rgba(76,175,80,0.8)' },
      { v: '£800k', color: 'rgba(76,175,80,0.8)' },
      { v: '£1.5m', color: 'rgba(76,175,80,0.8)' },
    ],
  },
]

export default function Financials() {
  return (
    <section id="financials" className="section" data-animate>
      <span className="section-number">06</span>
      <h2>£4.42m ARR by Year 5. Self-funding beyond the raise.</h2>
      <p className="section-sub">
        £100/mo core suite at launch (Quartermaster + Auditor + Secretary). First 79 users at £79/mo for life. Additional venues £50/mo. Receptionist (£20/mo), Orator (£20/mo), and Clerk (£10/mo) launch in Year 2 — full suite £150/mo. 1.5% monthly churn (16.6% annualised) — consistent with vertical SaaS median of 1.5–2.0% per Recurly Churn Benchmark Report 2025 \u00B7 Baremetrics SaaS Benchmarks, below horizontal SMB SaaS benchmark of 3–7% monthly, due to Square POS integration switching costs. Venue figures represent net active customers after churn. International from Month 18 (Ireland from Month 6). Sales team active from Month 1.
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
              {tableHeaders.map((h, i) => (
                <th key={h} style={styles.th}>
                  {h}
                  {subHeaders[i] && <div style={styles.subHeader}>{subHeaders[i]}</div>}
                </th>
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
        Net active venue figures account for 1.5% monthly churn (16.6% annually) applied to opening base each year. Gross new logos signed are higher. Blended ARPU rises as the early adopter cohort (£79/mo) becomes a smaller fraction of the base, standard pricing (£100/mo) dominates, and add-on products (Receptionist, Orator, Clerk — launching Year 2 at a combined £50/mo) drive attach revenue. ARR figures based on end-of-year net active venues x blended ARPU x 12. Forward-looking estimates — not guaranteed.
      </p>

      <div className="callout" style={{ marginTop: 24 }} data-animate>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#1B2A4A' }}>
          <strong>COGS breakdown at 100 venues (£100/mo core suite):</strong> Stripe ~2.2% (£220/month), Supabase/Vercel infrastructure ~1.5% (£150/month), Anthropic API with prompt caching ~0.5% (&lt;£50/month). Total COGS ~4.2% of revenue. Gross margin ~95.8% at 100 venues. Source: Stripe UK pricing April 2026 · Benchmarkit SaaS Gross Margin 2025
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
  subHeader: {
    fontSize: 10,
    fontWeight: 400,
    opacity: 0.7,
    marginTop: 2,
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
