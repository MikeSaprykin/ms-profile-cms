import { lookUpReducer, ReducerLookUp } from '../../../helpers';
import { DescriptionModel } from '../models';
import { DescriptionTypes as types } from '../actions';
import { mapKeys } from 'lodash';

export interface DescriptionsState {
  descriptions: {
    [key: string]: DescriptionModel;
  };
  deleteModal: boolean;
  idForDelete: string;
}

const initialState: DescriptionsState = {
  descriptions: null,
  deleteModal: false,
  idForDelete: null,
};

const lookUp: ReducerLookUp<DescriptionsState> = {
  [types.SET_DESCRIPTIONS]: (state, { payload }) => {
    const descriptions = mapKeys<DescriptionModel>(
      payload.map(description => ({ ...description, expanded: false })),
      '_id'
    );
    return { ...state, descriptions };
  },
  [types.TOGGLE_DESCRIPTION_EXPANDED]: (state, { payload }) => ({
    ...state,
    descriptions: {
      ...state.descriptions,
      [payload]: {
        ...state.descriptions[payload],
        expanded: !state.descriptions[payload].expanded,
      },
    },
  }),
  [types.OPEN_DELETE_MODAL]: (state, { payload }) => ({
    ...state,
    deleteModal: true,
    idForDelete: payload,
  }),
  [types.HIDE_DELETE_MODAL]: (state, action) => ({
    ...state,
    deleteModal: false,
    idForDelete: null,
  }),
  [types.DELETE_DESCRIPTION_SUCCESS]: (state, action) => ({
    ...state,
    idForDelete: null,
    deleteModal: false,
  }),
};

export const descriptionsReducer = lookUpReducer(lookUp, initialState);
