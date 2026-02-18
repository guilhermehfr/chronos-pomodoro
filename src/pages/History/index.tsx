import { useState } from 'react';
import { Trash } from 'lucide-react';

import type { TaskModel } from '../../models/TaskModel';

import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import {
  sortTasks,
  type SortType,
  type SortOrder,
} from '../../utils/sortTasks';

import styles from './styles.module.css';

export function History() {
  const { state } = useTaskContext();
  const [sortType, setSortType] = useState<SortType>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedTasks: TaskModel[] = sortTasks(state.tasks, sortType, sortOrder);

  const status = {
    inProgress: 'in Progress',
    completed: 'Completed',
    interrupted: 'Interrupted',
  };

  const cycleDescription = {
    workTime: 'Work',
    shortBreakTime: 'Break',
    longBreakTime: 'Long Break',
  };

  const handleSort = (type: SortType) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

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
                    <th
                      onClick={() => handleSort('alphabetical')}
                      className={styles.sortableTh}
                    >
                      Task &#8597;
                    </th>
                    <th
                      onClick={() => handleSort('duration')}
                      className={styles.sortableTh}
                    >
                      Duration &#8597;
                    </th>
                    <th
                      onClick={() => handleSort('date')}
                      className={styles.sortableTh}
                    >
                      Date &#8597;
                    </th>
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
