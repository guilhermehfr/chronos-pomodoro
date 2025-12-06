import { Container } from '../Container';
import { Logo } from '../Logo';
import { Menu } from '../Menu';

export function Heading() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  );
}
