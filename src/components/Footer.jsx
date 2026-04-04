export default function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.cols}>
          <div>
            <div style={styles.brand}>Blue Paper Labs</div>
            <div style={styles.detail}>Bluepaper Limited &middot; NI739076 &middot; Belfast, Northern Ireland</div>
            <div style={styles.detail}>hello@bluepaperlabs.com</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a
              href="https://www.bluepaperlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              bluepaperlabs.com &#8599;
            </a>
          </div>
        </div>
        <div style={styles.fine}>
          This document is confidential and intended solely for the named recipient. Financial projections are forward-looking estimates based on current assumptions and are not guaranteed. Sources: WRAP Hospitality &amp; Food Service Sector Page &middot; CGA by NIQ &amp; AlixPartners Hospitality Market Monitor Dec 2024 &middot; IBISWorld Ireland 2025 &middot; VFI Licence Data 2023 &middot; Bord Bia Foodservice Market Insights 2024 &middot; BLS NAICS 722 Q4 2024 &middot; Restaurants Canada Foodservice Facts 2024 &middot; ABS/ResDiary FY2024 &middot; Stats NZ/Statista FY2024 &middot; EPA Ireland National Waste Statistics 2023 &middot; Food Waste Charter Ireland &middot; Mordor Intelligence UK Hospitality Market Report 2026 &middot; Growyze Hospitality Inventory Management Guide &middot; Business Accounting UK 2025 &middot; FSA FHRS Guidance &middot; FSA Allergen Law Evaluation 2023 &middot; FSAI HACCP Guidance &middot; FSAI Allergen Guidance Note 28 &middot; EU Regulation 852/2004 &middot; EU FIR 1169/2011 S.I. No. 489 of 2014 &middot; Aventis Advisors SaaS Multiples March 2026 &middot; Benchmarkit SaaS Gross Margin 2025 &middot; B2B SaaS Market Vertical vs Horizontal Churn 2025 &middot; Stripe UK Pricing April 2026 &middot; British Business Bank 2024 &middot; Equidam Valuation Delta Q3 2025 &middot; Square UK Press Release 2 April 2026 &middot; Square Ireland squareup.com/ie &middot; Irish Times Toast Dublin December 2025 &middot; MarketMan Trustpilot April 2026 &middot; Invest NI Annual Report 2024–25 &middot; FT fDi Markets 2025 &middot; InterTradeIreland Cross-Border Trade Hub &middot; Windsor Framework HM Government 2023.
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#1B2A4A',
    color: '#fff',
    padding: '48px 24px 32px',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
  },
  cols: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 24,
    marginBottom: 32,
  },
  brand: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
  },
  detail: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.6,
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: '#A8D5E2',
    textDecoration: 'none',
  },
  fine: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    lineHeight: 1.7,
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: 24,
  },
}
