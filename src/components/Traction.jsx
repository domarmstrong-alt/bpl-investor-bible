const tractionItems = [
  '✓ MVP built solo in under 1 month',
  '✓ Square POS OAuth live in production',
  '✓ Beta venue active and using daily',
  '✓ Built on Anthropic Claude API — \'Powered by Claude\' attribution across all AI features',
  '✓ TechStart NI Concept Plus — application submitted April 2026',
  '✓ InterTradeIreland Seedcorn 2026 — entered (B2B category, Northern Ireland region)',
]

const team = [
  {
    name: 'Dom Armstrong',
    role: 'Founder & CEO',
    body: '13 years as Operations Director running 6 hospitality venues. Former Combat Medical Technician, British Army. CMgr FCMI. Built Quartermaster solo in evenings in under a month. The product insight comes from lived operational experience — not research. CMgr FCMI credential is publicly verifiable via the Chartered Management Institute member directory — awarded for demonstrated strategic management competency across 13+ years, not coursework alone.',
  },
  {
    name: 'Adam Cummings',
    role: 'Head of Sales',
    body: 'Award-winning sales manager. Consultative selling style honed in high-value consumer goods. Belfast hospitality network. Active from month 1 — not post-raise. Every week without a sales team is a week competitors are having conversations we\'re not in.',
  },
  {
    name: 'Scarlet Jeffers',
    role: 'Product Advisor',
    body: 'Experienced CPO and board member across consumer and B2B SaaS. Specialises in product-market fit. 5% equity — skin in the game, not a line on a deck. Completing current contract then joining full-time on brand and GTM.',
  },
  {
    name: 'Sabah Sarwar',
    role: 'Data Scientist',
    body: 'MSc Data Analytics, Queen\'s University Belfast. Building keyword monitoring across hospitality forums, Reddit, LinkedIn and Facebook groups — surfaces inbound pipeline before operators know they\'re looking.',
  },
  {
    name: 'Kyle Eades',
    role: 'Cybersecurity Specialist',
    body: 'Building Quartermaster\'s security and compliance architecture from day one. Responsible for pre-launch penetration testing, repository security, and Supabase infrastructure hardening. Brings professional cybersecurity expertise to a product handling sensitive operational and financial data for hospitality businesses.',
  },
  {
    name: 'Sam Price',
    role: 'React Developer',
    body: 'Frontend developer bringing production-grade React expertise to the Quartermaster interface. Focused on component architecture, performance, and the operator-first UX that makes complex inventory data feel simple.',
  },
]

export default function Traction() {
  return (
    <section id="traction" className="section" data-animate>
      <span className="section-number">05</span>
      <h2>Built in evenings. Live in production. First customers using it daily.</h2>

      <div style={styles.pillRow} data-animate>
        {tractionItems.map((item) => (
          <span key={item} style={styles.pill}>{item}</span>
        ))}
      </div>

      <h2 style={{ marginTop: 48, marginBottom: 24 }}>The team</h2>

      <div className="card-grid">
        {team.map((t) => (
          <div key={t.name} className="card" data-animate>
            <h3 style={styles.name}>{t.name}</h3>
            <div style={styles.role}>{t.role}</div>
            <p style={styles.body}>{t.body}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 48, marginBottom: 16 }}>The Belfast Advantage</h2>
      <div className="callout" data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#1B2A4A' }}>
          Blue Paper Labs is headquartered in Belfast, Northern Ireland — the UK's top location for US R&D investment (Financial Times fDi Markets, 2025). Northern Ireland's tech ecosystem includes Cloudsmith ($23m Series B, March 2025) and 1,500+ Invest NI client companies generating £29 billion in annual sales. Tech salaries in Belfast are materially below London equivalents, extending runway on every hire. The Windsor Framework gives NI-headquartered businesses unique dual-market access to both UK and EU — a structural advantage for European expansion.
        </p>
        <div className="source-line">
          Source: Invest NI Annual Report 2024–25 · FT fDi Markets 2025 · UKTN: Cloudsmith
        </div>
      </div>
    </section>
  )
}

const styles = {
  pillRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 40,
  },
  pill: {
    display: 'inline-block',
    background: '#fff',
    color: '#1B2A4A',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    padding: '8px 16px',
    borderRadius: 100,
    border: '1.5px solid #A8D5E2',
  },
  name: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 20,
    fontWeight: 700,
    color: '#1B2A4A',
    marginBottom: 2,
  },
  role: {
    fontSize: 13,
    fontWeight: 600,
    color: '#7BBDD0',
    marginBottom: 12,
  },
  body: {
    fontSize: 14,
    lineHeight: 1.65,
    color: '#1B2A4A',
  },
}
