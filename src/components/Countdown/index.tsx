import styles from './styles.module.css';

import type { HomeProps } from '../../pages/Home';

export function Countdown({ state }: HomeProps) {
  return (
    <>
      <div className={styles['countdown-wrapper']}>
        <span className={styles['countdown']}>{state['formattedSecondsRemaining']}</span>
      </div>
    </>
  );
}
