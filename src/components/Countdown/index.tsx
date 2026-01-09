import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

import styles from './styles.module.css';

export function Countdown() {
  const taskContext = useContext(TaskContext);

  return (
    <>
      <div className={styles['countdown-wrapper']}>
        <span className={styles['countdown']}>{taskContext.key}</span>
      </div>
    </>
  );
}
