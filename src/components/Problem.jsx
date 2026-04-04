const cards = [
  {
    stat: '£10,000/year',
    label: 'Average food waste cost per venue',
    body: 'Food waste costs the UK hospitality sector £3.2 billion every year. The average venue loses £10,000 annually to waste that better inventory tracking prevents.',
    source: 'Source: WRAP — Guardians of Grub',
    cite: 1,
  },
  {
    stat: '10–20 hrs/week',
    label: 'Lost to manual stock reconciliation',
    body: 'Manual tracking systems demand 10 to 20 administrative hours every week — time spent cross-referencing spreadsheets, supplier invoices and sales reports that rarely agree.',
    source: 'Source: Jelly UK Hospitality Analysis, 2025',
    cite: 2,
  },
  {
    stat: '£1,800+/year',
    label: 'Spent on disconnected tools per venue',
    body: 'The average independent operator pays separately for a stock system, compliance tool, rota software and booking platform. None of them talk to each other.',
    source: 'Source: Blue Paper Labs operator analysis (Leafe + BrightHR + NCAS stack)',
    cite: 3,
  },
  {
    stat: 'EHO exposure',
    label: 'From paper-based compliance records',
    body: 'Compliance records kept in folders and WhatsApp messages. Digital timestamped records directly improve Food Standards Agency inspection confidence scores.',
    source: 'Source: Food Standards Agency inspection framework',
    cite: 4,
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
