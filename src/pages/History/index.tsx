import { useState } from 'react';
import { Trash } from 'lucide-react';
import { toast } from 'react-toastify';

import type { TaskModel } from '../../models/TaskModel';

import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionType } from '../../contexts/TaskContext/taskActions';
import { showMessage } from '../../adapters/showMessage';

import {
  sortTasks,
  type SortType,
  type SortOrder,
} from '../../utils/sortTasks';

import styles from './styles.module.css';

export function History() {
  const { state, dispatch } = useTaskContext();
  const [sortType, setSortType] = useState<SortType>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedTasks: TaskModel[] = sortTasks(state.tasks, sortType, sortOrder);

  const status = {
    inProgress: 'in Progress',
    completed: 'Completed',
    interrupted: 'Interrupted',
  };

  const cycleDescription = {
    focusTime: 'Focus',
    restTime: 'Rest',
    longRestTime: 'Long Rest',
  };

  const handleSort = (type: SortType) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  function handleHistoryClear(): void {
    showMessage.dismiss();
    showMessage.confirm(
      'Are you sure you want to clear all history tasks?',
      (confirmed: boolean) => {
        if (confirmed) {
          showMessage.success('History cleared successfully.');
          dispatch({ type: TaskActionType.RESET_STATE });
        } else {
          showMessage.info('History clear canceled.');
        }
      },
    );
  }

  return (
    <>
      <MainTemplate>
        <div className={styles['history-header']}>
          <h1>History</h1>
          {sortedTasks.length > 0 && (
            <DefaultButton
              icon={<Trash />}
              color='red'
              aria-label='Delete all history tasks'
              title='Delete all history tasks'
              onClick={handleHistoryClear}
            />
          )}
        </div>

        {sortedTasks.length === 0 && <h2>No tasks started yet.</h2>}
        {sortedTasks.length > 0 && (
          <Container>
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th onClick={() => handleSort('alphabetical')}>
                      Task &#8597;
                    </th>
                    <th onClick={() => handleSort('duration')}>
                      Duration &#8597;
                    </th>
                    <th onClick={() => handleSort('date')}>Date &#8597;</th>
                    <th>Status</th>
                    <th>Type</th>
                  </tr>
                </thead>

                <tbody>
                  {sortedTasks.map((task: TaskModel) => {
                    const isActiveTask = task.id === state.activeTask?.id;
                    return (
                      <tr
                        key={task.id}
                        className={isActiveTask ? styles.activeTask : ''}
                      >
                        <td>{task.name}</td>
                        <td>{task.duration}</td>
                        <td>{new Date(task.startDate).toLocaleString()}</td>
                        <td>
                          {task.completeDate
                            ? status['completed']
                            : task.interruptDate
                              ? status['interrupted']
                              : status['inProgress']}
                        </td>
                        <td>{cycleDescription[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Container>
        )}
      </MainTemplate>
    </>
  );
}
