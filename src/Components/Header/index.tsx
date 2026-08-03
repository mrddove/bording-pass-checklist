import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__mark} aria-hidden="true">
        <svg viewBox="0 0 48 48" className={styles.header__icon}>
          <path
            d="M24 4C15 4 8 14 8 24c0 12 16 20 16 20s16-8 16-20c0-10-7-20-16-20z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="24" cy="22" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className={styles.header__title}>
        <p>Boarding pass · checklist</p>
        <h1>Far&nbsp;Away</h1>
      </div>

      <div className={styles.header__stub} aria-hidden="true">
        <span>GATE</span>
        <strong>PACK‑01</strong>
      </div>
    </header>
  )
}
