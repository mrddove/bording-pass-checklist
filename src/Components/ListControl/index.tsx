import { useCheckList } from '../../contexts/ChecklistProvider'
import SelecField from '../SelectField'
import { options } from './localdata'
import styles from './style.module.scss'

export default function ListControl() {
  const { handleClearList } = useCheckList()
  return (
    <section className={styles.listbar} aria-label="List controls">
      <SelecField
        label="Sort list"
        name="sort"
        styles={styles}
        options={options}
      />
      <button
        type="button"
        className={`${styles.listbar__btn} ${styles['listbar__btn--ghost']}`}
        onClick={handleClearList}
      >
        Clear list
      </button>
    </section>
  )
}
