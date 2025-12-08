import styles from './styles.module.css';
import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';

type AvaiableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaiableThemes>(() => {
    const themeStoraged = localStorage.getItem('data-theme');
    if (themeStoraged === 'dark' || themeStoraged === 'light') {
      return themeStoraged as AvaiableThemes;
    }
    return 'dark';
  });
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();

    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
  }, [theme]);

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
              aria-label={`Change theme to ${nextTheme}`}
              title={`Change theme to ${nextTheme}`}
              onClick={handleThemeChange}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
