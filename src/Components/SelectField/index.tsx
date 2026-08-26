//practice generics
type Options<T> = {
  value: T // originaly is a string data type
  text: T // originaly is a string data type
}

type SelecFieldProps<T> = {
  label: string
  name?: string
  value?: string
  styles: string
  options: Options<T>[] // it will use it here
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function SelecField<T extends string>({
  name,
  styles,
  options,
  onChange,
  value,
}: SelecFieldProps<T>) {
  return (
    <select name={name} value={value} className={styles} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
