import { lookUpReducer, ReducerLookUp } from '../../../helpers';
import { DescriptionModel } from '../models';
import { DescriptionTypes as types } from '../actions';
import { mapKeys } from 'lodash';

export interface DescriptionsState {
  descriptions: {
    [key: string]: DescriptionModel;
  };
}

const initialState: DescriptionsState = {
  descriptions: null,
};

const lookUp: ReducerLookUp<DescriptionsState> = {
  [types.SET_DESCRIPTIONS]: (state, { payload }) => {
      const descriptions = mapKeys<DescriptionModel>(
          payload.map(
              description => ({...description, expanded: false })
          ), '_id');
    return {...state, descriptions};
  },
  [types.TOGGLE_DESCRIPTION_EXPANDED]: (state, { payload }) => ({
      ...state,
      descriptions: {
          ...state.descriptions,
          [payload]: {
              ...state.descriptions[payload],
              expanded: !state.descriptions[payload].expanded
          }
      },
  })
};

export const descriptionsReducer = lookUpReducer(lookUp, initialState);
