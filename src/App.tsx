import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  const currentDate = new Date();
  return (
    <>
      <Heading date={`${currentDate}`} studiedToday='true'>
        Hello, Guilherme!
      </Heading>
      <h2>Secondary text.</h2>
    </>
  );
}
