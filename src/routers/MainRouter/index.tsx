import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { PomodoroTechnique } from '../../pages/PomodoroTechnique';
import { History } from '../../pages/History';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<PomodoroTechnique />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/history/' element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
