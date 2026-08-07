//practice generics
type Options<T> = {
  value: T // originaly is a string data type
  text: T // originaly is a string data type
}

type SelecFieldProps<T> = {
  label: string
  name: string
  styles: Record<string, string>
  options: Options<T>[] // it will use it here
}

export default function SelecField<T extends string>({
  name,
  styles,
  options,
}: SelecFieldProps<T>) {
  return (
    <select name={name} className={styles.listbar__select}>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  )
}
