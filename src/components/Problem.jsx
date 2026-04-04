const cards = [
  {
    stat: '£10,000–£13,000/year',
    label: 'Average food waste cost per venue',
    body: 'Food waste costs the UK hospitality and food service sector £3.2 billion every year — an average of £10,000–£13,000 per outlet annually. Better inventory tracking directly prevents this loss.',
    source: 'Source: WRAP Hospitality & Food Service Sector Page (wrap.ngo) — both figures confirmed on same page',
    cite: 1,
  },
  {
    stat: '10–20 hrs/week',
    label: 'Lost to manual stock reconciliation',
    body: 'Manual tracking systems demand 10 to 20 administrative hours every week — time spent cross-referencing spreadsheets, supplier invoices and sales reports that rarely agree.',
    source: 'Source: growyze Hospitality Inventory Management Guide (operational data); Business Accounting UK, 2025',
    cite: 2,
  },
  {
    stat: '£1,700+/year',
    label: 'Spent on disconnected tools per venue',
    body: 'A representative 5-employee single-site independent operator pays £336/yr (Leafe Basic), £1,000/yr (BrightHR Core HR, 5 employees at £16.67/employee/month), and £366/yr (NCASS Fixed Site, inc. VAT) — a combined £1,702/yr on disconnected tools that do not share data.',
    source: 'Source: Leafe pricing page · BrightHR pricing page · NCASS membership page — all verified April 2026',
    cite: 3,
  },
  {
    stat: 'EHO exposure',
    label: 'From paper-based compliance records',
    body: 'HACCP documentation is a legal requirement under Regulation (EC) 852/2004 (assimilated into UK law). Digital timestamped records directly support the FSA\u2019s \u2018confidence in management\u2019 scoring — the third and most discretionary element of every EHO inspection. 32% of UK food businesses do not feel fully informed on allergen compliance requirements (FSA Evaluation, 2023).',
    source: 'Source: FSA FHRS guidance · FSA Allergen Law Evaluation 2023',
    cite: 4,
  },
  {
    stat: '\u20AC300m+/year',
    label: 'Lost to food waste in Irish hospitality alone',
    body: 'Irish hospitality generates 175,000 tonnes of food waste annually at a cost of over \u20AC300 million to the sector \u2014 the same inventory-gap problem Quartermaster solves in Britain, driven by the same manual-first operational culture.',
    source: 'Source: EPA Ireland National Waste Statistics 2023 \u00B7 Food Waste Charter Ireland',
    cite: 5,
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section" data-animate>
      <span className="section-number">01</span>
      <h2>
        Independent operators are running businesses on spreadsheets and gut feel.
      </h2>
      <div className="card-grid" style={{ marginTop: 40 }}>
        {cards.map((c) => (
          <div key={c.stat} className="card" style={styles.card} data-animate>
            <div style={styles.stat}>
              {c.stat}<sup className="cite">{c.cite}</sup>
            </div>
            <div style={styles.label}>{c.label}</div>
            <p style={styles.body}>{c.body}</p>
            <div className="source-line">{c.source}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  card: {
    borderLeft: '4px solid #A8D5E2',
  },
  stat: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 28,
    fontWeight: 700,
    color: '#1B2A4A',
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(27,42,74,0.6)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    marginBottom: 12,
  },
  body: {
    fontSize: 15,
    lineHeight: 1.6,
    color: '#1B2A4A',
  },
}
