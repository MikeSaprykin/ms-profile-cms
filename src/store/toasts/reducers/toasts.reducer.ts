import { omit } from 'lodash';

import { lookUpReducer, ReducerLookUp } from '../../../helpers';
import { Toast } from '../models';
import { ToastsTypes as types } from '../actions';

export interface ToastsState {
    [key: string]: Toast;
}

const lookUp: ReducerLookUp<ToastsState> = {
    [types.SHOW_TOAST]: (state, { payload }) => ({
        ...state,
        [payload.id]: payload
    }),
    [types.HIDE_TOAST]: (state, { payload }) => omit(state, payload)
};

export const toastsReducer = lookUpReducer(lookUp, {});
