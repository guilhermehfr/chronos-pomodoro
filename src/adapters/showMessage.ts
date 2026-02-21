import { toast } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dissmiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) => {
    toast(Dialog, {
      data,
      onClose: confirmation => {
        if (confirmation === true) return onClosing(true);
        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false,
    });
  },
};
