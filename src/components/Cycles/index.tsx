import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });

  return (
    <div className={styles['cycles-info']}>
      <p className={styles['cycle-description']}>In this cycle X for Y min</p>
      <span>Cycles:</span>
      <div className={styles['cycles-dots']}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={index}
              className={`${styles['cycle-dot']} ${styles[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
