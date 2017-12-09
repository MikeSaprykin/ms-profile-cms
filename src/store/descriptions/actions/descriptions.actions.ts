import { DescriptionModel } from '../models/index';
import { ActionWithPayload } from '../../../helpers/helpers';
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

interface AddDescriptionPayload {
  title: string;
  icon: string;
  description: string;
}
export const addDescription = (
  payload: AddDescriptionPayload
): ActionWithPayload<AddDescriptionPayload> => ({
  type: types.ADD_DESCRIPTION,
  payload,
});
export const addDescriptionSuccess = (): Action => ({
  type: types.ADD_DESCRIPTION_SUCCESS,
});
export const selectDescriptionForEdit = (
  id: string
): ActionWithPayload<string> => ({
  type: types.SELECT_DESCRIPTION_ID,
  payload: id,
});
export const removeSelectedDescriptionId = (): Action => ({
  type: types.REMOVE_SELECTED_DESCRIPTION_ID,
});
export const editDescription = (
  payload: AddDescriptionPayload
): ActionWithPayload<AddDescriptionPayload> => ({
  type: types.EDIT_DESCRIPTION,
  payload,
});
