import { Trash } from 'lucide-react';

import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';

import styles from './styles.module.css';

export function History() {
  return (
    <>
      <MainTemplate>
        <div className={styles['history-header']}>
          <h1>History</h1>
          <DefaultButton
            icon={<Trash />}
            color='red'
            aria-label='Delete all history tasks'
          />
        </div>

        <Container>
          <div className='responsiveTable'>
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
                <tr>
                  <td>Study</td>
                  <td>25min</td>
                  <td>2024-01-15</td>
                  <td>Completed</td>
                  <td>Work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}
