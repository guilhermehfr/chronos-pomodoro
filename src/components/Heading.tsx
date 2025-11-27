import styles from './Heading.module.css';

type PropsType = Record<string, string> | null;

export function Heading(props: PropsType) {
  return (
    <>
      <header>
        <h1 className={`${styles['header-greet']}  ${styles['white-text']}`}>
          Hello, I am the default part of the Heading
          {props !== null && props.studiedToday && (
            <ul>
              <li>Message: {props.children}</li>
              <li>Date: {props.date}</li>
              <li>Studied: {props.studiedToday}</li>
            </ul>
          )}
        </h1>
      </header>
    </>
  );
}
