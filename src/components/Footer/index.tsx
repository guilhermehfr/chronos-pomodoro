import styles from './styles.module.css';

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <a href='#'>Entenda a técnica Pomodoro &#127813;</a>
        <a href='https://github.com/guilhermehfr/react-course' target='_blank'>
          Chronos Pomodoro &#x00A9; {currentYear} - Feito com &#x1F49A;
        </a>
      </footer>
    </>
  );
}
