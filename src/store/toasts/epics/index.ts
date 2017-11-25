import { ofType } from 'redux-observable';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { toPayload } from '../../../helpers';

import { Toast } from '../models';
import { ToastsTypes as types, hideToast, showToast } from '../actions';

export const triggerToastEpic = (actions$, store) =>
  actions$.pipe(
    ofType(types.TRIGGER_TOAST),
    map(toPayload),
    map(({ color, message, canBeDismissed, autoDismiss, dismissTime }) => {
      const toast = new Toast(color, message, canBeDismissed);
      if (autoDismiss) {
        Observable.interval(dismissTime || 2500)
          .pipe(take(1))
          .subscribe(() => store.dispatch(hideToast(toast.id)));
      }
      return showToast(toast);
    })
  );
