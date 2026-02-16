import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <button className={`${styles.button} ${styles[props.color]}`} {...props}>
      {props.icon}
    </button>
  );
}
