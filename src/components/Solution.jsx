const products = [
  {
    name: 'Quartermaster',
    status: 'Live',
    statusColor: 'pill-green',
    tagline: 'Track every unit. Know what’s missing.',
    desc: 'Inventory management. Square POS integration. AI-powered variance reporting. Unit-level tracking that maps every sale to every ingredient deduction, in real units, not estimates.',
  },
  {
    name: 'Auditor',
    status: 'Live',
    statusColor: 'pill-green',
    desc: 'Digital compliance records. HACCP plan builder. Temperature logs with corrective action prompts. EHO-ready PDF exports. Allergen matrix auto-generated from Quartermaster recipe data.',
  },
  {
    name: 'Secretary',
    status: 'Live',
    statusColor: 'pill-green',
    desc: 'Rota and shift management with shift-aware push notifications. Replaces work WhatsApp groups. Only notifies staff when they\'re on the clock.',
  },
  {
    name: 'Receptionist',
    status: 'Roadmap · Y2',
    statusColor: 'pill-grey',
    price: '+£20/mo',
    desc: 'Table bookings and reservation management. Connected to stock data so operators know what\'s available before the guest sits down.',
  },
  {
    name: 'Clerk',
    status: 'Roadmap · Y2–Y3',
    statusColor: 'pill-grey',
    price: '+£10/mo',
    tagline: 'Counting is hard enough, let us store it all in one place for you.',
    desc: 'Operational finance layer, invoice scanning, asset register, historical P&L intelligence, Xero integration, true cost analysis.',
  },
  {
    name: 'Orator',
    status: 'Roadmap · Y3 free for all operators',
    statusColor: 'pill-grey',
    tagline: 'All publicity is good publicity.',
    desc: 'CRM, marketing, and competitive intelligence. Auto-built customer database from Receptionist and POS data. Email and SMS campaigns. On-demand reputation sweep across Google, Reddit, X, and TripAdvisor with AI sentiment digest. Watch 5 to 10 competitors with comparative analysis. Orator is modelled as retention and expansion infrastructure, not a separate paid add-on in this case.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="section" data-animate>
      <span className="section-number">02</span>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: '#7BBDD0', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 10 }}>
        Paper Docket &middot; The Suite
      </div>
      <h2>One base bundle. Add-ons by attach likelihood. One login.</h2>
      <p className="section-sub">Paper Docket is a six-app operations suite from Bluepaper Limited, sharing one data model and one login. Multi-tenant from the ground up. Hub owns auth, venue picker, settings, billing, and access control. One login per venue, with role and app-level access controlled by the owner.</p>

      <div style={styles.pricingStack} data-animate>
        <div style={styles.pricingBase}>
          <div style={styles.pricingBaseLabel}>Base bundle</div>
          <div style={styles.pricingBaseRow}>
            <span style={styles.pricingBaseAmount}>£100/mo</span>
            <span style={styles.pricingBaseProducts}>Quartermaster + Auditor + Secretary, all live · Aoife&trade; cross-app reasoning included as standard</span>
          </div>
        </div>
        <div style={styles.pricingAddons}>
          <div style={styles.addonRow}>
            <span style={styles.addonAmount}>+£20/mo</span>
            <span style={styles.addonName}>Receptionist</span>
            <span style={styles.addonNote}>bookings, Y2 launch · ~60% attach</span>
          </div>
          <div style={styles.addonRow}>
            <span style={styles.addonAmount}>+£10/mo</span>
            <span style={styles.addonName}>Clerk</span>
            <span style={styles.addonNote}>finance, Y2–Y3 launch · ~55% attach</span>
          </div>
          <div style={styles.addonRow}>
            <span style={styles.addonAmount}>+£5/mo</span>
            <span style={styles.addonName}>Power User</span>
            <span style={styles.addonNote}>extra Aoife&trade; calls · ~15% attach</span>
          </div>
          <div style={styles.addonRow}>
            <span style={styles.addonAmount}>+£50/mo</span>
            <span style={styles.addonName}>Additional venue</span>
            <span style={styles.addonNote}>identical app subs enforced across venues</span>
          </div>
        </div>
        <div style={styles.pricingFootnote}>
          Five free Opus calls per venue per month included in base. Opus packs from £5 per 10 calls.
        </div>
      </div>

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
          For £48/month less than the Square/MarketMan bundle, operators get the Bluepaper Limited base bundle at £100/month: inventory, compliance, and workforce tooling, all live today, with Aoife&trade; cross-app reasoning included as standard. That is well below MarketMan inventory alone via Square, while adding compliance and reasoning AI at no extra charge. Nory charges £299/venue for AI-led forecasting positioned for larger restaurant groups. Receptionist arrives in Year 2 at +£20/month, Clerk lands in Year 2 to Year 3 at +£10/month once the senior technical hire is in.
        </p>
      </div>

      {/* Aoife, the reasoning engine underneath the suite */}
      <div style={styles.aoifeBlock} data-animate>
        <div style={styles.aoifeEyebrow}>The Reasoning Engine</div>
        <h3 style={styles.aoifeHeading}>Aoife&trade;</h3>
        <p style={styles.aoifeBody}>
          Aoife&trade; is the proprietary reasoning engine built into the Paper Docket suite — one
          Aoife across every app, not a separate assistant in each. A 20,000-token system prompt
          and a corpus of operator reasoning, refined over thirteen years of running venues.
          <strong style={{ color: '#A8D5E2', fontWeight: 600 }}> The model is interchangeable. The framework is the moat.</strong>
        </p>
        <p style={styles.aoifeBody}>
          She reasons over two sources and nothing else: operator data across the suite, and a
          knowledge base we hyper-curate ourselves. That is a deliberate trade — fewer sources,
          zero guesswork — because a business can't afford a hallucinated VAT rate. If the answer
          isn't in her sources, she says so. She does not make things up.
        </p>
        <p style={styles.aoifeBody}>
          She pushes back with the trade-offs the operator might have missed. She does not
          recommend. She does not decide. She makes sure the operator is not deciding blind.
          Your data, your context, your call.
        </p>
        <p style={styles.aoifeFooter}>
          Aoife&trade; ships as standard with every Paper Docket app, cross-app reasoning included. Trademark application pending.
        </p>
      </div>
    </section>
  )
}

const styles = {
  pricingStack: {
    background: '#FAFAFA',
    border: '1px solid rgba(27,42,74,0.08)',
    borderRadius: 12,
    padding: '20px 24px',
    marginTop: 24,
    marginBottom: 32,
    maxWidth: 720,
  },
  pricingBase: {
    paddingBottom: 14,
    borderBottom: '1px solid rgba(27,42,74,0.08)',
    marginBottom: 14,
  },
  pricingBaseLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    color: '#7BBDD0',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    marginBottom: 6,
  },
  pricingBaseRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 14,
    flexWrap: 'wrap',
  },
  pricingBaseAmount: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 28,
    fontWeight: 700,
    color: '#1B2A4A',
  },
  pricingBaseProducts: {
    fontSize: 14,
    color: '#1B2A4A',
    fontWeight: 500,
  },
  pricingAddons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  addonRow: {
    display: 'grid',
    gridTemplateColumns: '90px 160px 1fr',
    alignItems: 'baseline',
    gap: 12,
    fontSize: 13,
    color: '#1B2A4A',
    lineHeight: 1.5,
  },
  addonAmount: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    color: '#1B2A4A',
  },
  addonName: {
    fontWeight: 600,
    color: '#1B2A4A',
  },
  addonNote: {
    color: '#999',
    fontSize: 12,
  },
  pricingFootnote: {
    marginTop: 14,
    paddingTop: 12,
    borderTop: '1px solid rgba(27,42,74,0.08)',
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
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
