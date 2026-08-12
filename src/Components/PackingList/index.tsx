import styles from './style.module.scss'

import type { JSX } from 'react/jsx-runtime'
import { type BoardingChecklist } from '../../assets/data'
import { useCheckList } from '../../contexts/ChecklistProvider'
import PackingItem from '../PackingItem'

export default function PackingList() {
  const { checkList, sortBy } = useCheckList()

  let sortedList: BoardingChecklist[] = []

  if (sortBy === 'inputOrder') {
    console.log(sortBy)
    sortedList = checkList
  }

  if (sortBy === 'description') {
    sortedList = [...checkList].sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortBy === 'packedStatus') {
    sortedList = [...checkList].sort((a, b) => +a.isPacked - +b.isPacked)
  }

  return (
    <section className={styles.packinglist}>
      <ul className={styles.packinglist__container}>
        {sortedList.map(
          (list: BoardingChecklist): JSX.Element => (
            <PackingItem key={list.id} list={list} styles={styles} />
          ),
        )}
      </ul>
    </section>
  )
}
