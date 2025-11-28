import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        I am part of the App.
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
