import { Container } from '../Container';
import { Countdown } from '../Countdown';
import { FormCycle } from '../FormCycle';

export function TaskForm() {
  return (
    <>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <FormCycle />
      </Container>
    </>
  );
}
