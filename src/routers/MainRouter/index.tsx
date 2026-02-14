import { BrowserRouter, Route, Routes } from 'react-router';

import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { PomodoroTechnique } from '../../pages/PomodoroTechnique';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<PomodoroTechnique />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
