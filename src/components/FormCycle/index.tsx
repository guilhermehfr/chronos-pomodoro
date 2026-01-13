import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { InputChronos } from '../InputChronos';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';

export function FormCycle() {
  const buttonColor: string = 'red';
  const buttonIcon: React.ReactNode =
    buttonColor === 'red' ? <StopCircleIcon /> : <PlayCircleIcon />;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form} action='#'>
        <div className={styles['form-row']}>
          <InputChronos
            id='task'
            type='text'
            name='current-task'
            placeholder='Ex.: study to the exam'
            labelText='Task:'
          />
        </div>

        <div className={styles['form-row']}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['cycles-info']}>
            <span>Cycles:</span>
            <div className={styles['cycles-dots']}>
              <span
                className={`${styles['cycle-dot']} ${styles['work-time']}`}
              ></span>
              <span
                className={`${styles['cycle-dot']} ${styles['short-break-time']}`}
              ></span>
              <span
                className={`${styles['cycle-dot']} ${styles['long-break-time']}`}
              ></span>
            </div>
          </div>
        </div>

        <div className={styles['form-row']}>
          <button type='submit' className={`${styles['button']} ${styles[buttonColor]}`}>
            {buttonIcon}
          </button>
        </div>
      </form>
    </>
  );
}
