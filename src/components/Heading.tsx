import styles from './Heading.module.css';

export function Heading() {
  return (
    <>
      <header>
        <h1 className={styles['header-greet']}>
          Hello, I am part of the Heading!
        </h1>
      </header>
    </>
  );
}
