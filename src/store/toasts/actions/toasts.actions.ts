import { ActionWithPayload } from '../../../helpers';
import { ToastsTypes as types } from './toasts.types';
import { Toast, ToastColor } from '../models';

export interface TriggerToastPayload {
    message: string;
    canBeDismissed: boolean;
    color: ToastColor;
    autoDismiss: boolean;
    dismissTime?: number;
}

export const triggerToast = (
    payload: TriggerToastPayload
): ActionWithPayload<TriggerToastPayload> => ({
    type: types.TRIGGER_TOAST,
    payload
});

export const showToast = (
    payload: Toast
): ActionWithPayload<Toast> => ({
   type: types.SHOW_TOAST,
   payload
});

export const hideToast = (
    payload: string
): ActionWithPayload<string> => ({
   type: types.HIDE_TOAST,
   payload
});
