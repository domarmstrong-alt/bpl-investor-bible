const products = [
  {
    name: 'Quartermaster',
    status: 'Live',
    statusColor: 'pill-green',
    desc: 'Inventory management. Square POS integration. AI-powered variance reporting. Unit-level tracking that maps every sale to every ingredient deduction — in real units, not estimates.',
  },
  {
    name: 'Auditor',
    status: 'Building now',
    statusColor: 'pill-amber',
    desc: 'Digital compliance records. HACCP plan builder. Temperature logs with corrective action prompts. EHO-ready PDF exports. Allergen matrix auto-generated from Quartermaster recipe data.',
  },
  {
    name: 'Secretary',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    desc: 'Rota and shift management with shift-aware push notifications. Replaces work WhatsApp groups. Only notifies staff when they\'re on the clock.',
  },
  {
    name: 'Receptionist',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    desc: 'Table bookings and reservation management. Connected to stock data so operators know what\'s available before the guest sits down.',
  },
  {
    name: 'Clerk',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    tagline: 'Counting is hard enough, let us store it all in one place for you.',
    desc: 'Operational finance layer — invoice scanning, asset register, historical P&L intelligence, Xero integration, true cost analysis.',
  },
  {
    name: 'Orator',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    tagline: 'All publicity is good publicity.',
    desc: 'CRM and marketing — auto-built customer database, behaviour segmentation, email/SMS campaigns, reputation monitoring, competitive intelligence.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="section" data-animate>
      <span className="section-number">02</span>
      <h2>Track every unit. Know what's missing.</h2>
      <p className="section-sub">Hospitality Ops made well easy.</p>
      <p className="section-sub" style={{ marginTop: -8, fontSize: 15, fontWeight: 600, color: '#7BBDD0' }}>Full suite: £150/mo · Additional venues: £50/mo · First 100 users: £100/mo for life</p>

      <div className="card-grid">
        {products.map((p) => (
          <div key={p.name} className="card" data-animate>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, margin: 0 }}>
                {p.name}
              </h3>
              <span className={`pill ${p.statusColor}`}>{p.status}</span>
            </div>
            {p.tagline && <div style={{ fontSize: 13, fontStyle: 'italic', color: '#999', marginBottom: 8 }}>{p.tagline}</div>}
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#1B2A4A' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="callout callout-amber" data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#1B2A4A', fontWeight: 500 }}>
          Quartermaster delivers a complete operations suite — inventory, compliance, workforce, bookings, finance, and CRM — for £150/month. Nory charges £295/venue for AI predictions operators don't trust. MarketMan via Square costs £148/month for inventory alone with no compliance. The full suite displaces 4–5 disconnected tools at a lower combined cost.
        </p>
      </div>
    </section>
  )
}
