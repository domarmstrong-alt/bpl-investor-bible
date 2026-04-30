const products = [
  {
    name: 'Quartermaster',
    status: 'Live',
    statusColor: 'pill-green',
    url: 'quartermaster.paperdocket.app',
    href: 'https://quartermaster.paperdocket.app',
    tagline: 'Track every unit. Know what’s missing.',
    desc: 'Inventory management. Square POS integration. AI-powered variance reporting. Unit-level tracking that maps every sale to every ingredient deduction — in real units, not estimates.',
  },
  {
    name: 'Auditor',
    status: 'Live',
    statusColor: 'pill-green',
    url: 'auditor.paperdocket.app',
    href: 'https://auditor.paperdocket.app',
    desc: 'Digital compliance records. HACCP plan builder. Temperature logs with corrective action prompts. EHO-ready PDF exports. Allergen matrix auto-generated from Quartermaster recipe data.',
  },
  {
    name: 'Secretary',
    status: 'Coming Soon',
    statusColor: 'pill-grey',
    desc: 'Rota and shift management with shift-aware push notifications. Replaces work WhatsApp groups. Only notifies staff when they\'re on the clock.',
  },
  {
    name: 'Receptionist',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    price: '£20/mo',
    desc: 'Table bookings and reservation management. Connected to stock data so operators know what\'s available before the guest sits down.',
  },
  {
    name: 'Orator',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    price: '£20/mo',
    tagline: 'All publicity is good publicity.',
    desc: 'CRM and marketing — auto-built customer database, behaviour segmentation, email/SMS campaigns, reputation monitoring, competitive intelligence.',
  },
  {
    name: 'Clerk',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    price: '£10/mo',
    tagline: 'Counting is hard enough, let us store it all in one place for you.',
    desc: 'Operational finance layer — invoice scanning, asset register, historical P&L intelligence, Xero integration, true cost analysis.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="section" data-animate>
      <span className="section-number">02</span>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: '#7BBDD0', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 10 }}>
        Paper Docket &middot; The Suite
      </div>
      <h2>One suite. One price. Every tool your venue needs.</h2>
      <p className="section-sub">Paper Docket is the operations suite from Blue Paper Labs. One login. Shared data across every screen.</p>
      <p className="section-sub" style={{ marginTop: -8, fontSize: 15, fontWeight: 600, color: '#7BBDD0' }}>Full suite: £150/mo · Additional venues: £50/mo · First 79 users: £79/mo for life</p>

      <div className="card-grid">
        {products.map((p) => (
          <div key={p.name} className="card" data-animate>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, margin: 0 }}>
                {p.name}
              </h3>
              <span className={`pill ${p.statusColor}`}>{p.status}</span>
              {p.price && <span style={{ fontSize: 13, fontWeight: 600, color: '#7BBDD0' }}>{p.price}</span>}
            </div>
            {p.url && (
              <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontSize: 13, fontWeight: 500, color: '#7BBDD0', textDecoration: 'none', marginBottom: 8 }}>
                {p.url} &#8599;
              </a>
            )}
            {p.tagline && <div style={{ fontSize: 13, fontStyle: 'italic', color: '#999', marginBottom: 8 }}>{p.tagline}</div>}
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#1B2A4A' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="callout callout-amber" data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#1B2A4A', fontWeight: 500 }}>
          Paper Docket delivers inventory, compliance, and workforce management for £100/month — with bookings, finance, and CRM arriving in Year 2 at a combined £50/month. Full suite: £150/month. Nory charges £299/venue for AI predictions operators don't trust. MarketMan via Square costs £148/month for inventory alone with no compliance. For £48/month less than MarketMan, operators get three products instead of one.
        </p>
      </div>

      {/* Aoife — the reasoning engine underneath the suite */}
      <div style={styles.aoifeBlock} data-animate>
        <div style={styles.aoifeEyebrow}>The Reasoning Engine</div>
        <h3 style={styles.aoifeHeading}>Aoife&trade;</h3>
        <p style={styles.aoifeBody}>
          The proprietary AI reasoning engine inside every Paper Docket app. Reads operator data
          across inventory, compliance, staff, and bookings. Cites real-time market context —
          commodity prices, budget announcements, minimum wage, weather, supplier trends. Pushes
          back with citations, never recommendations. The decision stays with the operator.
        </p>
        <p style={styles.aoifeBody}>
          The 20,000-token system prompt and 600–700 corpus strings of operator reasoning are the IP.
          <strong style={{ color: '#A8D5E2', fontWeight: 600 }}> Models are interchangeable — the prompt is the moat.</strong>
        </p>
        <p style={styles.aoifeFooter}>
          Aoife&trade; Premium (+£30/mo) unlocks cross-app reasoning. Siloed Aoife&trade; ships free with every app. Trademark application pending.
        </p>
      </div>
    </section>
  )
}

const styles = {
  aoifeBlock: {
    marginTop: 32,
    background: '#1B2A4A',
    color: '#fff',
    borderRadius: 12,
    padding: '32px 32px 28px',
    borderLeft: '4px solid #D4A574',
    backgroundImage: 'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(168,213,226,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 10% 90%, rgba(212,165,116,0.06) 0%, transparent 70%)',
  },
  aoifeEyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    color: '#A8D5E2',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    marginBottom: 8,
  },
  aoifeHeading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 36,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 16,
    lineHeight: 1.1,
  },
  aoifeBody: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 14,
    maxWidth: 760,
  },
  aoifeFooter: {
    fontSize: 13,
    lineHeight: 1.6,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 8,
    fontStyle: 'italic',
  },
}
