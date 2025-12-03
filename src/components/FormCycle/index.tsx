import styles from './styles.module.css';
import { InputChronos } from '../InputChronos';

export function FormCycle() {
  return (
    <>
      <form className={styles.form} action='#'>
        <div className={styles['form-row']}>
          <InputChronos
            name='current-task'
            id='task'
            type='text'
            placeholder='Ex.: estudar para a prova'
            labelText='Task:'
          />
        </div>

        <div className={styles['form-row']}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={styles['form-row']}>
          <p>Cycles</p>
          <p>0 0 0 0 0 0 0</p>
        </div>

        <div className={styles['form-row']}>
          <button>Send</button>
        </div>
      </form>
    </>
  );
}
