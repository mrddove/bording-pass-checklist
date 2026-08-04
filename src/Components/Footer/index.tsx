import styles from './style.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>
        <span aria-hidden="true">🧳</span>
        You have <strong>4</strong> items on your list, and you already packed{' '}
        <strong>1</strong> <span className={styles.footer__pct}>(25%)</span>
      </div>
      <div
        className={styles.footer__track}
        role="progressbar"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Packing progress"
      >
        <div className={styles.footer__fill}></div>
      </div>
    </footer>
  )
}
