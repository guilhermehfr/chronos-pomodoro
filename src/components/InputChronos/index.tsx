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
    <label htmlFor={id} className={styles['input-label']}>
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        style={
          {
            '--placeholder-padding': `${labelText.length * 0.9}rem`,
          } as React.CSSProperties
        }
        {...rest}
      />
      <span className={styles['label-text']}>{labelText}</span>
    </label>
  );
}
