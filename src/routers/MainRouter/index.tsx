import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import { Home } from '../../pages/Home';
import { PomodoroTechnique } from '../../pages/PomodoroTechnique';
import { History } from '../../pages/History';
import { Settings } from '../../pages/Settings';
import { NotFound } from '../../pages/NotFound';

function ScrollToTop() {
  const { state } = useTaskContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (state.activeTask || pathname === '/') {
      document.title = 'Chronos Pomodoro';
      return;
    }

    const pathnameFormatted = pathname.replace(
      /^\/([a-z]+)(?:-([a-z]+))?\/$/, // regex to match paths like /about-pomodoro/ or /history/ and capture the segments
      (_, p1, p2) =>
        `${p1.charAt(0).toUpperCase() + p1.slice(1)} ${p2 ? p2.charAt(0).toUpperCase() + p2.slice(1) : ''}`,
    );

    document.title = `${pathnameFormatted} - Chronos Pomodoro`;
  }, [pathname, state.activeTask]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<PomodoroTechnique />} />
        <Route path='/history/' element={<History />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
