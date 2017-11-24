import { ofType } from 'redux-observable';

import { map, switchMap } from 'rxjs/operators';

import { client } from '../../../root';

import { DescriptionTypes as types, deleteDescriptionSuccess } from '../actions';
import { selectIdForDelete } from '../reducers/description.selectors';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { deleteDescriptionMutation as mutation } from '../../../containers/Descriptions/mutations';
import { descriptionsQuery } from '../../../containers/Descriptions/query';

export const deleteDescription = (actions$, store) =>
    actions$.pipe(
        ofType(types.DELETE_DESCRIPTION_CONFIRM),
        map(() => selectIdForDelete(store.getState())),
        switchMap(id => fromPromise(client.mutate({
            mutation,
            variables: { id },
            update: (proxy, { data: { deleteDescription } }) => {
                const data = proxy.readQuery({ query: descriptionsQuery });
                data.descriptions = deleteDescription;
                proxy.writeQuery({ query: descriptionsQuery, data });
            },
        }))),
        map(deleteDescriptionSuccess)
    );