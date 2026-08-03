import styles from './style.module.scss'

export default function PackingForm() {
  return (
    <section className={styles.counter} aria-labelledby="counter-heading">
      <h2 className={styles.counter__heading}>
        What are you packing for the trip?
      </h2>
      <form className={styles.counter__form}>
        <label className="visually-hidden">Quantity</label>
        <select id="qty" name="qty" className={styles.counter__qty}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <label className="visually-hidden" htmlFor="item">
          Item name
        </label>
        <input
          id="item"
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
