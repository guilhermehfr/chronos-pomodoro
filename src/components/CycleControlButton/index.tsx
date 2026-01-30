import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import styles from './styles.module.css';

export function CycleControlButton() {
  const buttonColor: string = 'red';
  const buttonIcon: React.ReactNode =
    buttonColor === 'red' ? <StopCircleIcon /> : <PlayCircleIcon />;

  return (
    <button type='submit' className={`${styles.button} ${styles.red}`}>
      {buttonIcon}
    </button>
  );
}
