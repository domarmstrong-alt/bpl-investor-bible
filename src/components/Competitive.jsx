const rows = [
  { name: 'Blue Paper Labs', price: '£100/mo core · £150/mo full suite (Y2)', target: 'Independent 1–5 venues, Square/Lightspeed/Toast', ai: '✓ Claude API', pos: 'Square · Lightspeed · Toast (Y1–2)', haccp: '✓', uk: '✓', highlight: true },
  { name: 'MarketMan', price: '£150+ standalone · £148/mo via Square', target: 'Multi-site chains', ai: '✗', pos: 'Daily (standalone) · Square · Lightspeed · Toast', haccp: '✗', uk: '✗' },
  { name: 'Nory', price: '£299/venue', target: 'Restaurant groups', ai: 'Partial (predictive)', pos: 'Real-time', haccp: '✗', uk: '✗' },
  { name: 'Apicbase', price: '£213+', target: 'Enterprise', ai: '✗', pos: 'Varies', haccp: '✓', uk: '✗' },
  { name: 'Trail (Access)', price: '£38/site', target: 'Compliance only', ai: '✗', pos: 'N/A', haccp: 'Basic', uk: '✗' },
  { name: 'Leafe', price: '£28–£119/mo', target: 'SMB compliance + rota (Pro tier)', ai: '✗', pos: '✗', haccp: 'Pro tier', uk: '✓' },
  { name: 'WISK AI', price: '£150+', target: 'Beverage-focused', ai: 'Partial', pos: '✓', haccp: '✗', uk: '✗' },
]

const headers = ['Competitor', 'Price (£/mo)', 'Target market', 'Real AI', 'POS sync', 'HACCP', 'UK-native']

export default function Competitive() {
  return (
    <section id="competition" className="section" data-animate>
      <span className="section-number">04</span>
      <h2>Where we win — and where others disappoint.</h2>

      <div style={styles.tableWrap} data-animate>
        <table style={styles.table}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} style={{
                background: r.highlight
                  ? 'rgba(168,213,226,0.05)'
                  : i % 2 === 0 ? '#FAFAFA' : '#fff',
                borderLeft: r.highlight ? '4px solid #A8D5E2' : '4px solid transparent',
              }}>
                <td style={{ ...styles.td, fontWeight: r.highlight ? 700 : 500 }}>{r.name}</td>
                <td style={styles.td}>{r.price}</td>
                <td style={styles.td}>{r.target}</td>
                <td style={{ ...styles.td, color: r.ai.startsWith('✓') ? '#2e7d32' : r.ai === '✗' ? '#c62828' : '#8B6914' }}>{r.ai}</td>
                <td style={styles.td}>{r.pos}</td>
                <td style={{ ...styles.td, color: r.haccp === '✓' ? '#2e7d32' : r.haccp === '✗' ? '#c62828' : '#8B6914' }}>{r.haccp}</td>
                <td style={{ ...styles.td, color: r.uk === '✓' ? '#2e7d32' : '#c62828' }}>{r.uk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="source-line" style={{ marginTop: 8, marginBottom: 32 }}>
        Sources: Company websites, March 2026. All prices in £ GBP. USD/EUR converted at Wise mid-market rate 13 March 2026.
        <br />MarketMan via Square (UK): £69/mo Square Plus + £79/mo add-on = £148/mo total. 2.4★ Trustpilot (Poor) · Zero replies to negative reviews · Billing complaints active as of April 2026.
      </div>

      {/* MarketMan callout */}
      <div className="callout callout-navy" style={{ marginBottom: 24 }} data-animate>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, marginBottom: 8, color: '#fff' }}>
          MarketMan: 2.4★ on Trustpilot ('Poor')
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
          Reviewed complaints include billing after cancellation, dark-pattern cancellation flows, hidden charges, and zero replies to negative reviews. Cross-platform scores reveal a deliberate bias — G2: 4.3★, Capterra: 4.7★, Google Play: 3.2★ (175 reviews). Their UK dominance rests on brand recognition alone, not product quality.
        </p>
        <div className="source-line" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Source: Trustpilot, G2, Capterra — March 2026
        </div>
      </div>

      {/* Square competitive accelerant */}
      <div className="callout" data-animate>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, marginBottom: 8, color: '#1B2A4A' }}>
          Square just validated this market — and handed us the advantage
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: '#1B2A4A' }}>
          On 2 April 2026, Square launched 'Square Restaurant Inventory by MarketMan' globally including the UK and Ireland — confirming the market opportunity. The total cost for an operator: £69/month (Square for Restaurants Plus) + £79/month (MarketMan add-on) = £148/month per location. For £48/month less than the MarketMan bundle, operators get inventory, compliance, and workforce management — the Blue Paper Labs core suite at £100/month, with compliance features MarketMan does not offer, across Square, Lightspeed, and Toast. Bookings, finance, and CRM arrive in Year 2 at a combined £50/month, bringing the full suite to £150/month. MarketMan has also integrated with Lightspeed and Toast for years — but at £148/month for Square users alone, and with a 2.4 star Trustpilot rating, UK and Irish operators deserve a purpose-built answer. Toast's December 2025 Dublin R&D expansion confirms the Irish market is validated and moving. Blue Paper Labs' compliance-first positioning differentiates it from Toast's enterprise-oriented stack.
        </p>
        <div className="source-line">
          Source: Square UK Press Release 2 April 2026 · Square GB Pricing Page April 2026 · Irish Times: Toast Dublin office December 2025 · MarketMan Trustpilot April 2026
        </div>
      </div>
    </section>
  )
}

const styles = {
  tableWrap: {
    overflowX: 'auto',
    marginTop: 40,
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(27,42,74,0.06)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
  },
  th: {
    background: '#1B2A4A',
    color: '#fff',
    padding: '12px 14px',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: 12,
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '10px 14px',
    borderBottom: '1px solid #eee',
  },
}
