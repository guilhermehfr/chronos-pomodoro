import styles from './styles.module.css';
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';

export function Menu() {
  return (
    <>
      <nav className={styles['menu']}>
        <ul>
          <li className={styles['menu-item']}>
            <a className={styles['menu-link']} href='#'>
              <HouseIcon />
            </a>
          </li>
          <li>
            <a className={styles['menu-link']} href='#'>
              <HistoryIcon />
            </a>
          </li>
          <li>
            <a className={styles['menu-link']} href='#'>
              <SettingsIcon />
            </a>
          </li>
          <li>
            <a className={styles['menu-link']} href='#'>
              <SunIcon />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
