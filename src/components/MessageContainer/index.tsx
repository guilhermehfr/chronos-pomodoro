import { Bounce, ToastContainer } from 'react-toastify';
import styles from './styles.module.css';

type MessageContainerProps = {
  children: React.ReactNode;
};

export function MessageContainer({ children }: MessageContainerProps) {
  return (
    <div className={styles['message-container']}>
      {children}
      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </div>
  );
}
