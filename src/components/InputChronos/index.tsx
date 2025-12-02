import styles from './styles.module.css';

type InputProps = {
  children: string;
};

export function InputChronos({ children }: InputProps) {
  return (
    <>
      <form className={styles['form']} action='POST'>
        <div className={styles['form-row']}>
          <label htmlFor={styles.input}>
            <input
              type='text'
              id={styles.input}
              placeholder='Ex.: estudar para a prova'
            />
            <span>{children}:</span>
          </label>
        </div>
      </form>
    </>
  );
}
