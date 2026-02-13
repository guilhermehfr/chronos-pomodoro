import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { showMessage } from '../../adapters/showMessage';

import { Cycles } from '../Cycles';
import { InputChronos } from '../InputChronos';
import { CycleControlButton } from '../CycleControlButton';

import type { TaskModel } from '../../models/TaskModel';
import { TaskActionType } from '../../contexts/TaskContext/taskActions';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function FormCycle() {
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    showMessage.dissmiss();

    e.preventDefault();
    if (taskNameInput.current === null) return;
    const taskName: string = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warning('Please enter a task name before starting a cycle.');
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

    dispatch({ type: TaskActionType.START_TASK, payload: newTask });
    showMessage.success('Task created successfully!');
  }

  function handleInterruptTask() {
    showMessage.dissmiss();

    showMessage.warn('Task interrupted.');
    if (state.activeTask)
      dispatch({
        type: TaskActionType.INTERRUPT_TASK,
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
