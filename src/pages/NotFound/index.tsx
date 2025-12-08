import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <Container>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Sorry, we couldn't find that page</h1>
            <p>
              Try go to <a href='#'>Home</a> or acess your{' '}
              <a href='#'>History</a>
            </p>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}
