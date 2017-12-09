import { ofType } from 'redux-observable';
import { push } from 'react-router-redux';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {
  map,
  switchMap,
  mergeMap,
  filter
} from 'rxjs/operators';

import { isEmpty } from 'ramda';

import { client } from '../../../root';

import { triggerToast, ToastColor } from '../../toasts';
import { toPayload } from '../../../helpers';

import {
  DescriptionTypes as types,
  deleteDescriptionSuccess,
  addDescriptionSuccess,
  setDescriptions
} from '../actions';
import {
    selectIdForDelete,
    selectSelectedDescription,
    selectIdForEdit
} from '../reducers';
import {
  deleteDescriptionMutation,
  addDescriptionMutation,
  editDescriptionMutation
} from '../../../containers/Descriptions/mutations';
import { descriptionsQuery } from '../../../containers/Descriptions/query';

const readQueryWrapper = (fn: Function) => {
  try {
    fn.call(null);
  } catch (e) {
    console.log(e);
  }
};

const updateDescriptionsProxy = (proxy, result) =>
  readQueryWrapper(() => {
    const data = proxy.readQuery({ query: descriptionsQuery }, true);
    data.descriptions = result;
    proxy.writeQuery({ query: descriptionsQuery, data });
  });

const triggerSuccessToast = (message: string) =>
  triggerToast({
    color: ToastColor.success,
    message,
    autoDismiss: true,
    canBeDismissed: true,
    dismissTime: 3500,
  });

const DESCRIPTION_SUCCESS_MESSAGE = `Description was successfully`;

const DELETE_DESCRIPTION_SUCCESS_MESSAGE =
  `${DESCRIPTION_SUCCESS_MESSAGE} removed!`;
const ADD_DESCRIPTION_SUCCESS_MESSAGE = `${DESCRIPTION_SUCCESS_MESSAGE} added!`;
const EDIT_DESCRIPTION_SUCCESS_MESSAGE = `${DESCRIPTION_SUCCESS_MESSAGE} added!`;

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
            updateDescriptionsProxy(proxy, deleteDescription),
        })
      )
    ),
    mergeMap(() => [
      deleteDescriptionSuccess(),
      triggerSuccessToast(DELETE_DESCRIPTION_SUCCESS_MESSAGE),
    ])
  );

export const addDescription$ = (actions$, store) =>
  actions$.pipe(
    ofType(types.ADD_DESCRIPTION),
    map(toPayload),
    switchMap(payload =>
      fromPromise(
        client.mutate({
          mutation: addDescriptionMutation,
          variables: payload,
          update: (proxy, { data: { addDescription } }) =>
            updateDescriptionsProxy(proxy, addDescription),
        })
      )
    ),
    mergeMap(() => [
      push('/descriptions'),
      addDescriptionSuccess(),
      triggerSuccessToast(ADD_DESCRIPTION_SUCCESS_MESSAGE),
    ])
  );

export const selectDescriptionForEdit$ = (actions$, store) =>
  actions$.pipe(
    ofType(types.SELECT_DESCRIPTION_ID),
    map(toPayload),
    map(payload => [payload, selectSelectedDescription(store.getState())]),
    filter(([payload, selectedDescription]) => isEmpty(selectedDescription)),
    switchMap(([id]) =>
      fromPromise(
        client.query({
          query: descriptionsQuery,
          variables: { id },
        })
      )
    ),
    map(({ data: { descriptions } }) => setDescriptions(descriptions))
  );

export const editDescription$ = (actions$, store) =>
    actions$.pipe(
        ofType(types.EDIT_DESCRIPTION),
        map(toPayload),
        map(payload => [payload, selectIdForEdit(store.getState())]),
        switchMap(([payload, id]) =>
            fromPromise(
                client.mutate({
                    mutation: editDescriptionMutation,
                    variables: {...payload, id},
                    update: (proxy, { data: { descriptionsQuery } }) => {
                        console.log(descriptionsQuery);
                        updateDescriptionsProxy(proxy, descriptionsQuery);
                    }
                })
            )
        ),
        mergeMap(() => [
            push('/descriptions'),
            addDescriptionSuccess(),
            triggerSuccessToast(EDIT_DESCRIPTION_SUCCESS_MESSAGE),
        ])
    );
