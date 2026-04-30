export default function DraftBanner() {
  return (
    <div style={styles.banner} role="status" aria-label="Draft notice">
      <span style={styles.label}>DRAFT</span>
      <span style={styles.text}>
        Financial model under revision following April 2026 pricing change. Not for external distribution.
      </span>
    </div>
  )
}

const styles = {
  banner: {
    position: 'sticky',
    top: 0,
    zIndex: 101,
    background: '#D4A574',
    color: '#1B2A4A',
    minHeight: 40,
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    lineHeight: 1.4,
    textAlign: 'center',
    boxShadow: '0 1px 0 rgba(27,42,74,0.08)',
  },
  label: {
    fontWeight: 700,
    letterSpacing: '0.12em',
    fontSize: 11,
    textTransform: 'uppercase',
    background: '#1B2A4A',
    color: '#fff',
    padding: '3px 10px',
    borderRadius: 100,
  },
  text: {
    fontWeight: 500,
  },
}
