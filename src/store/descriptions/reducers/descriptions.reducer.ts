import { lookUpReducer, ReducerLookUp, toggleLoading } from '../../../helpers';
import { DescriptionModel } from '../models';
import { DescriptionTypes as types } from '../actions';
import { mapKeys } from 'lodash';
import { isEmpty } from 'ramda';

export interface DescriptionsState {
  descriptions: {
    [key: string]: DescriptionModel;
  };
  deleteModal: boolean;
  idForDelete: string;
  idForEdit: string;
  loading: boolean;
}

const initialState: DescriptionsState = {
  descriptions: {},
  deleteModal: false,
  idForDelete: null,
  idForEdit: null,
  loading: false,
};

const lookUp: ReducerLookUp<DescriptionsState> = {
  [types.SET_DESCRIPTIONS]: (state, { payload }) => {
    const descriptions = mapKeys<DescriptionModel>(
      payload.map(description => ({ ...description, expanded: false })),
      '_id'
    );
    return { ...toggleLoading(false, state), descriptions };
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
  [types.ADD_DESCRIPTION]: toggleLoading(true),
  [types.ADD_DESCRIPTION_SUCCESS]: toggleLoading(false),
  [types.SELECT_DESCRIPTION_ID]: (state, { payload }) => ({
    ...state,
    idForEdit: payload,
    loading: isEmpty(state.descriptions),
  }),
  [types.REMOVE_SELECTED_DESCRIPTION_ID]: (state, action) => ({
    ...state,
    idForEdit: null,
  }),
  [types.EDIT_DESCRIPTION]: toggleLoading(true)
};

export const descriptionsReducer = lookUpReducer(lookUp, initialState);
