const headlines = [
  { number: '£3.2m', label: 'Year 5 ARR' },
  { number: '£1.1m', label: 'Year 5 net profit' },
  { number: '£7.4m', label: '5-year cumulative revenue' },
  { number: '85\u201395%+', label: 'Gross margin (subscription revenue; no professional services component. Stripe fees ~2.2%, infrastructure ~2%, AI ~0.5% at current scale. Currently running ~95%; expected to normalise toward 85\u201390% at scale. Source: Stripe UK pricing April 2026 \u00B7 Benchmarkit SaaS Gross Margin 2025)' },
  { number: '£16\u201326m', label: 'Implied exit at 5\u00D7\u20138\u00D7 ARR (UK private SaaS median: 4\u20138\u00D7 ARR per Aventis Advisors March 2026)' },
]

const tableHeaders = ['Metric', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']
const subHeaders = ['', '£400k raise', 'Intl from M18', '', '', '']

const tableRows = [
  { metric: 'UK Venues', values: ['12', '35', '80', '150', '220'] },
  { metric: 'International Venues', values: ['0', '10', '40', '100', '180'] },
  { metric: 'Total Venues', values: ['12', '45', '120', '250', '400'] },
  { metric: 'ARR (run-rate)', values: ['£89k', '£400k', '£960k', '£1.9m', '£3.2m'], highlight: true },
  {
    metric: 'Net Profit / Loss',
    values: [
      { v: '−£420k', color: '#D4A574' },
      { v: '−£100k', color: '#D4A574' },
      { v: '£200k', color: 'rgba(76,175,80,0.8)' },
      { v: '£650k', color: 'rgba(76,175,80,0.8)' },
      { v: '£1.1m', color: 'rgba(76,175,80,0.8)' },
    ],
  },
]

export default function Financials() {
  return (
    <section id="financials" className="section" data-animate>
      <span className="section-number">06</span>
      <h2>£3.2m ARR by Year 5. Self-funding beyond the raise.</h2>
      <p className="section-sub">
        £99/mo per venue (Quartermaster + Auditor included). 1.5% monthly churn (16.6% annualised; consistent with vertical SaaS median of 1.5–2.0% per B2B SaaS Market research, 2025 — below horizontal SMB SaaS benchmark of 3–7% monthly due to Square POS integration switching costs). International from month 18. Sales team active from month 1.
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
        £400k raise deployed in Year 1. International expansion from month 18. £200k deployed Year 2 across salaries and marketing. Projections based on 1.5% monthly churn and £99/mo average revenue per venue. Forward-looking estimates — not guaranteed.
      </p>

      <div className="callout" style={{ marginTop: 24 }} data-animate>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#1B2A4A' }}>
          <strong>COGS breakdown at 100 venues:</strong> Stripe ~2.2% (£218/month), Supabase/Vercel infrastructure ~1.5% (£148/month), Anthropic API with prompt caching ~0.5% (&lt;£50/month). Total COGS ~4.2% of revenue. Gross margin ~95.8% at 100 venues.
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
