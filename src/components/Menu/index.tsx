import { useState, useEffect } from 'react';
import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

type AvaiableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaiableThemes>(() => {
    const stored = localStorage.getItem('data-theme');
    return stored === 'dark' || stored === 'light' ? stored : 'dark';
  });
  const nextTheme: AvaiableThemes = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
  }, [theme]);

  const menuItems = [
    {
      key: 'home',
      href: '/',
      icon: <HouseIcon />,
      label: 'Initial page',
      title: 'Initial page',
      className: styles['menu-item'],
    },
    {
      key: 'history',
      href: '/history/',
      icon: <HistoryIcon />,
      label: 'History',
      title: 'Tasks history',
    },
    {
      key: 'settings',
      href: '/settings/',
      icon: <SettingsIcon />,
      label: 'Configurations',
      title: 'Configurations',
    },
  ];

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <nav className={styles.menu}>
      <ul>
        {menuItems.map(item => (
          <li key={item.key} className={item.className || undefined}>
            <RouterLink
              className={styles['menu-link']}
              href={item.href}
              aria-label={item.label}
              title={item.title}
            >
              {item.icon}
            </RouterLink>
          </li>
        ))}
        <li>
          <RouterLink
            className={styles['menu-link']}
            href='#'
            aria-label={`Change theme to ${nextTheme}`}
            title={`Change theme to ${nextTheme}`}
            onClick={handleThemeChange}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}
