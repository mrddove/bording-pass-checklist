import type { BoardingChecklist } from '../../assets/data'
import { useCheckList } from '../../contexts/ChecklistProvider'

type PackingItemProps = {
  list: BoardingChecklist
  styles: Record<string, string>
}

export default function PackingItem({ list, styles }: PackingItemProps) {
  const { handleToggleComplete } = useCheckList()
  return (
    <li
      className={`${styles.packinglist__item} ${list.isPacked ? styles['packinglist--packed'] : null}`}
    >
      <label className={styles.packinglist__check}>
        <input
          type="checkbox"
          checked={list.isPacked}
          onChange={() => handleToggleComplete(list.id)}
        />
        <span className={styles.packinglist__stamp} aria-hidden="true"></span>
      </label>
      <span className={styles.packinglist__qty}>{list.quantity}×</span>
      <span className={styles.packinglist__name}>{list.name}</span>
      <button
        type="button"
        className={styles.packinglist__remove}
        aria-label="Remove Passports from list"
      >
        ✕
      </button>
    </li>
  )
}
