import { ofType } from 'redux-observable';

import { map, switchMap, mergeMap } from 'rxjs/operators';

import { client } from '../../../root';

import {
  DescriptionTypes as types,
  deleteDescriptionSuccess,
} from '../actions';
import { selectIdForDelete } from '../reducers/description.selectors';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { deleteDescriptionMutation as mutation } from '../../../containers/Descriptions/mutations';
import { descriptionsQuery } from '../../../containers/Descriptions/query';
import { triggerToast, ToastColor } from '../../toasts';

export const deleteDescription = (actions$, store) =>
  actions$.pipe(
    ofType(types.DELETE_DESCRIPTION_CONFIRM),
    map(() => selectIdForDelete(store.getState())),
    switchMap(id =>
      fromPromise(
        client.mutate({
          mutation,
          variables: { id },
          update: (proxy, { data: { deleteDescription } }) => {
            const data = proxy.readQuery({ query: descriptionsQuery });
            data.descriptions = deleteDescription;
            proxy.writeQuery({ query: descriptionsQuery, data });
          },
        })
      )
    ),
    mergeMap(() => [
      deleteDescriptionSuccess(),
      triggerToast({
        color: ToastColor.success,
        message: 'Description was successfully removed!',
        autoDismiss: true,
        canBeDismissed: true,
        dismissTime: 3500,
      }),
    ])
  );
