import { DescriptionModel } from '../models/index';
import { ActionWithPayload } from '../../../helpers';
import { DescriptionTypes as types } from './descriptions.types';

export const setDescriptions = (
  payload: Array<DescriptionModel>
): ActionWithPayload<Array<DescriptionModel>> => ({
  type: types.SET_DESCRIPTIONS,
  payload,
});

export const toggleDescriptionExpanded = (
    payload: string
): ActionWithPayload<string> => ({
   type: types.TOGGLE_DESCRIPTION_EXPANDED,
   payload
});
