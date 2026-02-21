import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

import type { ToastContentProps } from 'react-toastify';

import { DefaultButton } from '../DefaultButton';

import styles from './styles.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <div className={styles.dialog}>
      <p>{data}</p>
      <div className={styles['dialog-buttons']}>
        <DefaultButton
          onClick={() => {
            closeToast(true);
          }}
          icon={<ThumbsUpIcon />}
          color='green'
          aria-label='Confirm clearing history tasks'
          title='Confirm clearing history tasks'
        />
        <DefaultButton
          onClick={() => closeToast(false)}
          icon={<ThumbsDownIcon />}
          color='red'
          aria-label='Cancel clearing history tasks'
          title='Cancel clearing history tasks'
        />
      </div>
    </div>
  );
}
