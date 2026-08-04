import styles from './style.module.scss'

import type { JSX } from 'react/jsx-runtime'
import { type BoardingChecklist } from '../../assets/data'
import { useCheckList } from '../../contexts/ChecklistProvider'
import PackingItem from '../PackingItem'

export default function PackingList() {
  const { checkList } = useCheckList()
  return (
    <section className={styles.packinglist}>
      <ul className={styles.packinglist__container}>
        {checkList.map(
          (list: BoardingChecklist): JSX.Element => (
            <PackingItem key={list.id} list={list} styles={styles} />
          ),
        )}
      </ul>
    </section>
  )
}
