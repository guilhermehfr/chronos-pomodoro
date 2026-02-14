import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';
import { TimerIcon } from 'lucide-react';

export function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <RouterLink className={styles['logo-link']} href='/'>
          <TimerIcon />
          <span>Chronos</span>
        </RouterLink>
      </div>
    </>
  );
}
