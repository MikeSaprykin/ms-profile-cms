import { ofType } from 'redux-observable';
import { push } from 'react-router-redux';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, switchMap, mergeMap } from 'rxjs/operators';

import { client } from '../../../root';

import { triggerToast, ToastColor } from '../../toasts';
import { toPayload } from '../../../helpers';

import {
  DescriptionTypes as types,
  deleteDescriptionSuccess,
  addDescriptionSuccess
} from '../actions';
import { selectIdForDelete } from '../reducers/description.selectors';
import { deleteDescriptionMutation, addDescriptionMutation } from '../../../containers/Descriptions/mutations';
import { descriptionsQuery } from '../../../containers/Descriptions/query';

const updateDescriptionsProxy = (proxy, result) => {
    const data = proxy.readQuery({ query: descriptionsQuery }, true);
    data.descriptions = result;
    proxy.writeQuery({ query: descriptionsQuery, data });
};

const triggerSuccessToast = (message: string) => triggerToast({
        color: ToastColor.success,
        message,
        autoDismiss: true,
        canBeDismissed: true,
        dismissTime: 3500,
    });

const DELETE_DESCRIPTION_SUCCESS_MESSAGE = 'Description was successfully removed!';
const ADD_DESCRIPTION_SUCCESS_MESSAGE = 'Description was successfully added!';

export const deleteDescription = (actions$, store) =>
  actions$.pipe(
    ofType(types.DELETE_DESCRIPTION_CONFIRM),
    map(() => selectIdForDelete(store.getState())),
    switchMap(id =>
      fromPromise(
        client.mutate({
          mutation: deleteDescriptionMutation,
          variables: { id },
          update: (proxy, { data: { deleteDescription } }) =>
              updateDescriptionsProxy(proxy, deleteDescription)
        })
      )
    ),
    mergeMap(() => [
      deleteDescriptionSuccess(),
      triggerSuccessToast(DELETE_DESCRIPTION_SUCCESS_MESSAGE)
    ])
  );

export const addDescription$ = (actions$, store) =>
    actions$.pipe(
        ofType(types.ADD_DESCRIPTION),
        map(toPayload),
        switchMap(payload => fromPromise(
            client.mutate({
                mutation: addDescriptionMutation,
                variables: payload,
                update: (proxy, { data: { addDescription } }) =>
                    updateDescriptionsProxy(proxy, addDescription)
            })
        )),
        mergeMap(() => [
            push('/descriptions'),
            addDescriptionSuccess(),
            triggerSuccessToast(ADD_DESCRIPTION_SUCCESS_MESSAGE)
        ])
    );
