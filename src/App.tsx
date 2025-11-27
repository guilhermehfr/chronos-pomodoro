import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

console.log('Carregando aplicação...');

export function App() {
  return (
    <>
      <Heading />
      <h2>Secondary text.</h2>
    </>
  );
}
