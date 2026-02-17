import { Trash } from 'lucide-react';

import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';

export function History() {
  const { state } = useTaskContext();

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

  return (
    <>
      <MainTemplate>
        <div className={styles['history-header']}>
          <h1>History</h1>
          <DefaultButton
            icon={<Trash />}
            color='red'
            aria-label='Delete all history tasks'
            title='Delete all history tasks'
          />
        </div>

        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {[...state.tasks].reverse().map(task => {
                  return (
                    <tr key={task.id}>
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
      </MainTemplate>
    </>
  );
}
