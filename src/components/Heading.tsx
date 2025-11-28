import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <header>
        <h1 className={styles.heading}>{children}</h1>
      </header>
    </>
  );
}
