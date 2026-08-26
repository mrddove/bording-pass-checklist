import { useCheckList } from '../../contexts/ChecklistProvider'
import styles from './style.module.scss'

export default function Footer() {
  const { checkList } = useCheckList()

  const packedCount = checkList.filter((item) => item.isPacked)
  const percent = Math.round((packedCount.length / checkList.length) * 100)

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>
        <span aria-hidden="true">🧳</span>
        You have <strong>{checkList.length}</strong> items on your list, and you
        already packed <strong>{packedCount.length}</strong>
        <span className={styles.footer__pct}>
          ({isNaN(percent) ? 0 : percent}%)
        </span>
      </div>
      <div
        className={styles.footer__track}
        role="progressbar"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Packing progress"
      >
        <div
          className={styles.footer__fill}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </footer>
  )
}
