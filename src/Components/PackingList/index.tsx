import styles from './style.module.scss'

import checkListData from '../../assets/data'

export default function PackingList() {
  return (
    <section className={styles.packinglist}>
      <ul className={styles.packinglist__container}>
        {checkListData.map((list) => (
          <li key={list.id} className={styles.packinglist__item}>
            <label className={styles.packinglist__check}>
              <input type="checkbox" />
              <span
                className={styles.packinglist__stamp}
                aria-hidden="true"
              ></span>
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
        ))}
      </ul>
    </section>
  )
}
