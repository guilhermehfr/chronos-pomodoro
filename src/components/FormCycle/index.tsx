import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import type { TaskModel } from '../../models/TaskModel';

import { getNextCycle } from '../../utils/getNextCycle';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { InputChronos } from '../InputChronos';

import styles from './styles.module.css';

export function FormCycle() {
  const buttonColor: string = 'red';

  const buttonIcon: React.ReactNode =
    buttonColor === 'red' ? <StopCircleIcon /> : <PlayCircleIcon />;

  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName: string = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa para iniciar');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    setState(prevState => {
      const secondsRemaining = newTask.duration * 60;

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: '00:01',
      };
    });
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
            ref={taskNameInput}
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
          <button
            type='submit'
            className={`${styles['button']} ${styles[buttonColor]}`}
          >
            {buttonIcon}
          </button>
        </div>
      </form>
    </>
  );
}
