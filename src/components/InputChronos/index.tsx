import styles from './styles.module.css';

type InputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function InputChronos({
  id,
  type,
  placeholder = '',
  labelText,
  ...rest
}: InputProps) {
  return (
    <>
      <label htmlFor={styles.inputChronos} className={styles['input-label']}>
        <input
          id={id}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          {...rest}
        />
        <span className={styles['label-text']}>{labelText}</span>
      </label>
    </>
  );
}
