import { useToastController } from '@tamagui/toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
  title?: string;
  message?: string;
  duration?: number;
  type?: ToastType;
}

export const useToast = () => {
  const toast = useToastController();

  const showToast = ({
    title,
    message,
    duration = 2000,
    type = 'success',
  }: ToastOptions) => {
    toast.show(title || '', {
      message,
      duration,
      native: false,
      customData: { type },
    });
  };

  return {
    success: (options: Omit<ToastOptions, 'type'>) =>
      showToast({ ...options, type: 'success' }),
    error: (options: Omit<ToastOptions, 'type'>) =>
      showToast({ ...options, type: 'error' }),
    warning: (options: Omit<ToastOptions, 'type'>) =>
      showToast({ ...options, type: 'warning' }),
    info: (options: Omit<ToastOptions, 'type'>) =>
      showToast({ ...options, type: 'info' }),
  };
};
