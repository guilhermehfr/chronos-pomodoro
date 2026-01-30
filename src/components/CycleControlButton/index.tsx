import styles from './styles.module.css';

type CycleControlButtonProps = {
  icon: React.ReactNode;
  color: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function CycleControlButton(props: CycleControlButtonProps) {
  return (
    <button className={`${styles.button} ${styles[props.color]}`} {...props}>
      {props.icon}
    </button>
  );
}
