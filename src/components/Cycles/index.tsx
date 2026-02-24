import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    focusTime: 'focus',
    restTime: 'rest',
    longRestTime: 'rest longer',
  };

  const nextCycle = getNextCycle(cycleStep.length);
  const nextCycleType = getNextCycleType(nextCycle);

  const nextCycleInfo = cycleDescription[nextCycleType];

  return (
    <div className={styles['cycles-info']}>
      <p className={styles['cycle-description']}>
        {state.activeTask
          ? `In this cycle ${cycleDescription[state.activeTask.type]} for ${state.activeTask.duration} mins.`
          : `In the next cycle ${nextCycleInfo} for ${state.config[nextCycleType]} mins.`}
      </p>
      {state.tasks.length >= 1 ? <span>Cycles:</span> : null}
      <div className={styles['cycles-dots']}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          const cycleInfo = cycleDescription[nextCycleType];
          return (
            <span
              key={`${nextCycleType}_${index}`}
              className={`${styles['cycle-dot']} ${styles[nextCycleType]}`}
              aria-label={`indicator of ${cycleInfo} cycle`}
              title={`indicator of ${cycleInfo} cycle`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
