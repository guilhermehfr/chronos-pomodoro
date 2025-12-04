import styles from './styles.module.css';

type InputProps = {
  id: string;
  labelText: string;
  placeholder?: string;
} & React.ComponentProps<'input'>;

export function InputChronos({
  id,
  labelText,
  placeholder = '',
  ...rest
}: InputProps) {
  return (
    <>
      <label htmlFor={styles.inputChronos} className={styles['input-label']}>
        <input
          id={id}
          className={styles.input}
          placeholder={placeholder}
          {...rest}
        />
        <span className={styles['label-text']}>{labelText}</span>
      </label>
    </>
  );
}
