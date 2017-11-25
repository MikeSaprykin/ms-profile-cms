import * as React from 'react';
import { Toast } from '../../store/toasts';

import {
    ToastItem as ToastWrapper,
    ToastMessage,
    ToastClose
} from './styles';

interface ToastItemProps {
    toast: Toast;
    onCloseClick: Function;
}

export const ToastItem: React.StatelessComponent<ToastItemProps> = ({ toast, onCloseClick }) => {
    return (
        <ToastWrapper className={toast.color}>
            <ToastMessage
                dangerouslySetInnerHTML={{__html: toast.message}}
            />
            <ToastClose onClick={() => onCloseClick(toast.id)}>
                CLOSE
            </ToastClose>
        </ToastWrapper>
    );
};
