import styles from './styles.module.css';

export function Countdown() {
  return (
    <>
      <div className={styles['countdown-wrapper']}>
        <span className={styles['countdown']}>00:00</span>
      </div>
    </>
  );
}
