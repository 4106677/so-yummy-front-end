import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSettings = {
  theme: 'light',
  position: 'top-left',
};


export const toastWarnEmptyField = () => {
  return toast.warn(
    `Wow, it looks like you didn't enter anything!!!`,
    toastSettings
  );
};