const products = [
  {
    name: 'Quartermaster',
    status: 'Live',
    statusColor: 'pill-green',
    price: '£79/mo',
    desc: 'Inventory management. Square POS integration. AI-powered variance reporting. Unit-level tracking that maps every sale to every ingredient deduction — in real units, not estimates.',
  },
  {
    name: 'Auditor',
    status: 'Building now',
    statusColor: 'pill-amber',
    price: 'Bundled at £99/mo',
    desc: 'Digital compliance records. HACCP plan builder. Temperature logs with corrective action prompts. EHO-ready PDF exports. Allergen matrix auto-generated from Quartermaster recipe data.',
  },
  {
    name: 'Secretary',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    price: 'Add-on',
    desc: 'Rota and shift management with shift-aware push notifications. Replaces work WhatsApp groups. Only notifies staff when they\'re on the clock.',
  },
  {
    name: 'Receptionist',
    status: 'Roadmap',
    statusColor: 'pill-grey',
    price: 'Add-on',
    desc: 'Table bookings and reservation management. Connected to stock data so operators know what\'s available before the guest sits down.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="section" data-animate>
      <span className="section-number">02</span>
      <h2>Track every unit. Know what's missing.</h2>
      <p className="section-sub">One suite. One login. Shared data across every screen.</p>

      <div className="card-grid">
        {products.map((p) => (
          <div key={p.name} className="card" data-animate>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, margin: 0 }}>
                {p.name}
              </h3>
              <span className={`pill ${p.statusColor}`}>{p.status}</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#7BBDD0', marginBottom: 12 }}>
              {p.price}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#1B2A4A' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="callout callout-amber" data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#1B2A4A', fontWeight: 500 }}>
          Quartermaster is the only point in an operator's tech stack where both ingredient cost data and live sell price data exist simultaneously — making true gross profit calculation possible for the first time.
        </p>
      </div>
    </section>
  )
}
