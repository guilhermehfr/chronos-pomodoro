import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Cycles } from '../Cycles';
import { InputChronos } from '../InputChronos';
import { CycleControlButton } from '../CycleControlButton';

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

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.map(task => {
          return task.id === prevState.activeTask?.id
            ? { ...task, interruptDate: Date.now() }
            : task;
        }),
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        action='#'
        autoComplete='off'
      >
        <div className={styles['form-row']}>
          <InputChronos
            id='task'
            type='text'
            name='current-task'
            placeholder='Ex.: study to the exam'
            labelText='Task:'
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>

        <div className={styles['form-row']}>
          <Cycles />
        </div>

        <div className={styles['form-row']}>
          {state.activeTask ? (
            <CycleControlButton
              key='stop_task'
              type='button'
              onClick={handleInterruptTask}
              aria-label='stop current task'
              title='stop current task'
              color='red'
              icon={<StopCircleIcon />}
            />
          ) : (
            <CycleControlButton
              key='start_task'
              type='submit'
              aria-label='start new task'
              title='start new task'
              color='green'
              icon={<PlayCircleIcon />}
            />
          )}
        </div>
      </form>
    </>
  );
}
