import styles from './styles.module.css';

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <a
          href='/about-pomodoro/'
          title='Learn more about the Pomodoro Technique'
        >
          Understand the Pomodoro Technique &#127813;
        </a>
        <a
          href='https://github.com/guilhermehfr/react-course'
          target='_blank'
          rel='noreferrer'
          title='GitHub repository of the project'
        >
          Chronos Pomodoro &#x00A9; {currentYear} - Made with &#x1F49A;
        </a>
      </footer>
    </>
  );
}
