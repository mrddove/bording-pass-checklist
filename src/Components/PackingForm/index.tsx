import type { BoardingChecklist } from '../../assets/data'
import { useCheckList } from '../../contexts/ChecklistProvider'
import styles from './style.module.scss'

export default function PackingForm() {
  const { addCheckList } = useCheckList()

  function handleForm(formData: FormData): void {
    const qty = formData.get('qty') as string
    const name = formData.get('item') as string

    if (!name || name.trim() === '') {
      console.log({ error: 'The input is empty' })
      return
    }

    const newCheckList: BoardingChecklist = {
      id: String(Date.now()),
      quantity: Number(qty),
      name,
      isPacked: false,
    }

    addCheckList(newCheckList)
  }

  return (
    <section className={styles.counter} aria-labelledby="counter-heading">
      <h2 className={styles.counter__heading}>
        What are you packing for the trip?
      </h2>
      <form action={handleForm} className={styles.counter__form}>
        <label className="visually-hidden">Quantity</label>
        <select id="qty" name="qty" className={styles.counter__qty}>
          {Array.from({ length: 20 }).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <label className="visually-hidden" htmlFor="item">
          Item name
        </label>
        <input
          name="item"
          type="text"
          className={styles.counter__input}
          placeholder="Item…"
        />

        <button type="submit" className={styles.counter__submit}>
          Add to bag
        </button>
      </form>
    </section>
  )
}
