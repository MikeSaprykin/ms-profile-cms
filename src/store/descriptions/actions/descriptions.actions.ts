import { DescriptionModel } from '../models/index';
import { ActionWithPayload } from '../../../helpers';
import { DescriptionTypes as types } from './descriptions.types';
import { Action } from 'redux';

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
  payload,
});

export const openDeleteModal = (
  payload: string
): ActionWithPayload<string> => ({
  type: types.OPEN_DELETE_MODAL,
  payload,
});

export const hideDeleteModal = (): Action => ({
  type: types.HIDE_DELETE_MODAL,
});

export const confirmDeleteDescription = (): Action => ({
  type: types.DELETE_DESCRIPTION_CONFIRM,
});

export const deleteDescriptionSuccess = (): Action => ({
  type: types.DELETE_DESCRIPTION_SUCCESS,
});
