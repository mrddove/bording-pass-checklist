import styles from './style.module.scss'

import type { JSX } from 'react/jsx-runtime'
import checkListData, { type BoardingChecklist } from '../../assets/data'
import PackingItem from '../PackingItem'

export default function PackingList() {
  return (
    <section className={styles.packinglist}>
      <ul className={styles.packinglist__container}>
        {checkListData.map(
          (list: BoardingChecklist): JSX.Element => (
            <PackingItem key={list.id} list={list} styles={styles} />
          ),
        )}
      </ul>
    </section>
  )
}
