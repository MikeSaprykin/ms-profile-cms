import { uuid } from 'lodash-uuid';

export enum ToastColor {
    primary = 'primary',
    danger = 'danger',
    success = 'success',
    warning = 'warning'
}

export class Toast {
    id: string;
    constructor(public color: ToastColor = ToastColor.success,
                public message: string = '',
                public canBeDismissed: boolean = true) {
        this.id = uuid();
    }
}