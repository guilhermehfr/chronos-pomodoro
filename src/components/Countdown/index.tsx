import { useTaskContext } from '../../contexts/TaskContext';

import styles from './styles.module.css';

export function Countdown() {
  const taskContext = useTaskContext();

  return (
    <>
      <div className={styles['countdown-wrapper']}>
        <span className={styles['countdown']}>{taskContext.state.formattedSecondsRemaining}</span>
      </div>
    </>
  );
}
