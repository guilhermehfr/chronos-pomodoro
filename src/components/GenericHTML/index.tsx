import { Container } from '../../components/Container';
import styles from './styles.module.css';

type GenericHTMLProps = {
  children: React.ReactNode;
};

export function GenericHTML({ children }: GenericHTMLProps) {
  return (
    <>
      <Container>
        <div className={styles['content-wrapper']}>{children}</div>
      </Container>
    </>
  );
}
