import { Home } from './pages/Home';

import './styles/Normalize.css';
import './styles/theme.css';
import './styles/global.css';
import { useState } from 'react';

export function App() {
  const [state, setState] = useState();

  return (
    <>
      <Home />
    </>
  );
}
