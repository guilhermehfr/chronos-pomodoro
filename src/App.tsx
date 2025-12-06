import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Countdown } from './components/Countdown';
import { FormCycle } from './components/FormCycle';
import { Footer } from './components/Footer';

import './styles/Normalize.css';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Heading />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <FormCycle />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
