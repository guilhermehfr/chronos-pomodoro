import { Container } from '../Container';
import { Countdown } from '../Countdown';
import { FormCycle } from '../FormCycle';

import type { HomeProps } from '../../pages/Home';

export function TaskForm(props: HomeProps) {
  return (
    <>
      <Container>
        <Countdown {...props} />
      </Container>
      <Container>
        <FormCycle {...props}/>
      </Container>
    </>
  );
}
