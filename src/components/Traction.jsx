const tractionItems = [
  '✓ Production-ready product built solo in under 4 weeks — including Square OAuth integration, AI-powered variance reporting, and full row-level security for multi-tenant data isolation',
  '✓ Square OAuth live in production — UK and Ireland distribution channel ready',
  '✓ Beta venue active and using daily',
  '✓ Lightspeed integration in build — Year 1 target',
  '✓ Toast partnership application submitted — Year 1–2 target',
  '✓ AI features built on Anthropic Claude API — real inference calls against live venue data, not pre-written scripts or cached answers',
  '✓ TechStart NI Concept Plus — application submitted April 2026',
  '✓ InterTradeIreland Seedcorn 2026 — entered (B2B category, Northern Ireland region)',
]

const team = [
  {
    name: 'Dom Armstrong',
    role: 'Founder & CEO',
    body: '13 years as Operations Director running 6 hospitality venues. Former Combat Medical Technician, British Army. CMgr FCMI — publicly verifiable via the Chartered Management Institute member directory, awarded for demonstrated strategic management competency across 13+ years, not coursework alone. Built the production-ready MVP solo in under 4 weeks. The product insight comes from lived operational experience — not research. Born in Northern Ireland, Dom holds Irish citizenship enabling access to Enterprise Ireland programmes upon establishing an Irish entity.',
  },
  {
    name: 'Adam Cummings',
    role: 'Head of Sales',
    body: 'Award-winning sales manager. Consultative selling style honed in high-value consumer goods. Belfast hospitality network. Compensation includes base salary plus uncapped commission on closed revenue. Active from Month 1 — not post-raise. Every week without a sales team is a week competitors are having conversations we\'re not in.',
  },
  {
    name: 'Scarlet Jeffers',
    role: 'Product Advisor',
    body: 'Experienced CPO and board member across consumer and B2B SaaS. Specialises in product-market fit. 5% equity — skin in the game, not a line on a deck. Completing current contract then joining full-time on brand and GTM.',
  },
  {
    name: 'Kyle Eades',
    role: 'Cybersecurity Specialist',
    body: 'Building Blue Paper Labs\' security and compliance architecture from day one. Responsible for pre-launch penetration testing, repository security, and Supabase infrastructure hardening. Brings professional cybersecurity expertise to a product handling sensitive operational and financial data for hospitality businesses.',
  },
  {
    name: 'Sam Price',
    role: 'React Developer',
    body: 'Frontend developer bringing production-grade React expertise to the Blue Paper Labs interface. Focused on component architecture, performance, and the operator-first UX that makes complex inventory data feel simple.',
  },
  {
    name: 'Sabah Sarwar',
    role: 'Data Scientist',
    body: 'MSc Data Analytics, Queen\'s University Belfast. Building keyword monitoring across hospitality forums, Reddit, LinkedIn and Facebook groups — surfaces inbound pipeline before operators know they\'re looking. Competitive and market intelligence pipeline active from day one.',
  },
]

export default function Traction() {
  return (
    <section id="traction" className="section" data-animate>
      <span className="section-number">05</span>
      <h2>Built in evenings. Live in production. First customers using it daily.</h2>

      <blockquote style={styles.founderNote} data-animate>
        <p style={{ marginBottom: 16 }}>
          Why me? Because I was the operator sitting in front of Google searching for inventory software with six barely surviving venues. I knew I needed to do better. I just couldn't find anything that didn't give me a headache before I'd even signed up — the same stock images, the same arbitrary statistics, the same corporate doublespeak on every site. And when I finally got to the pricing page I lost my lunch.
        </p>
        <p style={{ marginBottom: 16 }}>
          I wanted something an actual operator would look at and say 'yes, I see why they'd add that.' So I built it.
        </p>
        <p>
          Why now? Because venues are dying. I've sat in front of a P&L and asked how to extract even the smallest bit of revenue from a failing business. Sometimes the answer isn't make more money. Sometimes it's stop losing it. Blue Paper Labs is that answer.
        </p>
      </blockquote>
      <p style={styles.domInsert} data-animate>
        <strong>[Dom to insert: X venues, £Y/month, Z months, zero churn.]</strong>
      </p>

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
          Blue Paper Labs is headquartered in Belfast, Northern Ireland — the UK's top location for US R&D investment (Financial Times fDi Markets, 2025). Northern Ireland's tech ecosystem includes Cloudsmith ($23m Series B, March 2025) and 1,500+ Invest NI client companies generating £29 billion in annual sales. Tech salaries in Belfast are materially below London equivalents, extending runway on every hire. The Windsor Framework gives NI-headquartered businesses unique dual market access to both the UK internal market and the EU single market — a structural advantage no other UK region can claim. As a Belfast company, the Republic of Ireland is not an international expansion. It is our second home market.
        </p>
        <div className="source-line">
          Source: Invest NI Annual Report 2024–25 · FT fDi Markets 2025 · UKTN: Cloudsmith · InterTradeIreland Cross-Border Trade Hub · Invest NI dual market access
        </div>
      </div>

      <h2 style={{ marginTop: 48, marginBottom: 16 }}>Ireland — Ready from Month 6</h2>
      <div className="callout" data-animate>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#1B2A4A' }}>
          Ireland entry requires no product changes, no new POS partnerships, and no regulatory re-registration. Square has been operational in Ireland since 2021. Our HACCP and allergen compliance features meet Irish law (EU Regulation 852/2004 and EU FIR 1169/2011) from day one — Ireland's allergen standards are in fact more demanding than current UK requirements, and our product exceeds both. Two preparation steps — Irish VAT registration and appointment of an EU GDPR representative (~£300–500/year) — will be completed in Months 3–4, ahead of first Irish customer acquisition. The FSAI is currently consulting on introducing a Food Hygiene Rating Scheme equivalent to the UK system already driving adoption there — a near-term compliance catalyst specific to Ireland. As the founder holds Irish citizenship, Enterprise Ireland programmes including New Frontiers become accessible upon establishing an Irish entity.
        </p>
        <div className="source-line">
          Source: FSAI HACCP guidance · FSAI Allergen Guidance Note 28 · EU Regulation 852/2004 · EU FIR 1169/2011 · Square Ireland squareup.com/ie · Invest NI dual market access · InterTradeIreland
        </div>
      </div>
    </section>
  )
}

const styles = {
  founderNote: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 18,
    fontStyle: 'italic',
    color: '#1B2A4A',
    lineHeight: 1.7,
    borderLeft: '4px solid #D4A574',
    padding: '24px 28px',
    margin: '32px 0 16px',
    background: 'rgba(212,165,116,0.06)',
    borderRadius: '0 12px 12px 0',
    position: 'relative',
    zIndex: 1,
  },
  domInsert: {
    fontSize: 15,
    color: '#1B2A4A',
    marginBottom: 32,
    position: 'relative',
    zIndex: 1,
  },
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
