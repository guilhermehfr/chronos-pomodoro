import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Footer } from '../../components/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Heading />
      </Container>
      <Container>{children}</Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
