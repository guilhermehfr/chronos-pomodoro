import styles from './styles.module.css';
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

type AvaiableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaiableThemes>('light');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  return (
    <>
      <nav className={styles['menu']}>
        <ul>
          <li className={styles['menu-item']}>
            <a
              className={styles['menu-link']}
              href='#'
              aria-label='Initial page'
              title='Initial page'
            >
              <HouseIcon />
            </a>
          </li>
          <li>
            <a
              className={styles['menu-link']}
              href='#'
              aria-label='History'
              title='Tasks history'
            >
              <HistoryIcon />
            </a>
          </li>
          <li>
            <a
              className={styles['menu-link']}
              href='#'
              aria-label='Configurations'
              title='Configurations'
            >
              <SettingsIcon />
            </a>
          </li>
          <li>
            <a
              className={styles['menu-link']}
              href='#'
              aria-label={`Change theme to ${theme}`}
              title={`Change theme to ${theme}`}
              onClick={handleThemeChange}
            >
              <SunIcon />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
