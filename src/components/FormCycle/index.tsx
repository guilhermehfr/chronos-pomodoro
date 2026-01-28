import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { InputChronos } from '../InputChronos';

import type { TaskModel } from '../../models/TaskModel';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

import styles from './styles.module.css';

export function FormCycle() {
  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const buttonColor: string = 'red';
  const buttonIcon: React.ReactNode =
    buttonColor === 'red' ? <StopCircleIcon /> : <PlayCircleIcon />;

  const taskNameInput = useRef<HTMLInputElement>(null);

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    setState(prevState => {
      const secondsRemaining = newTask.duration * 60;

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      };
    });
  }

  console.log(state);

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
          <p>In this cycle X for Y min</p>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['cycles-info']}>
            <span>Cycles:</span>
            <div className={styles['cycles-dots']}></div>
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
