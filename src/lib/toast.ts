import {
  toast as _toast,
  ToastContainer as _ToastContainer,
  ToastContent,
  ToastOptions,
} from 'react-toastify';

import { GLOBAL_TOAST_ID } from '@/constant/toast';

/**
 * Get toast options.
 *
 * @param args Optional arguments object.
 * @param args.containerId The container ID of the toast. Defaults to {@link GLOBAL_TOAST_ID}.
 * @returns An object containing the toast options.
 */
export function getToastOptions(args?: { containerId?: string }): ToastOptions<{
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: string;
  containerId: string;
}> {
  const { containerId = GLOBAL_TOAST_ID } = args ?? {
    containerId: GLOBAL_TOAST_ID,
  };
  return {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    containerId: containerId,
  };
}

export const toast = {
  success: <T = unknown>(
    content: ToastContent<T>,
    containerId = GLOBAL_TOAST_ID
  ) => _toast.success(content, getToastOptions({ containerId })),
  error: <T = unknown>(
    content: ToastContent<T>,
    containerId = GLOBAL_TOAST_ID
  ) => _toast.error(content, getToastOptions({ containerId })),
};

export const ToastContainer = _ToastContainer;
