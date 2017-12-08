import { createSelector } from 'reselect';

import { DescriptionsState } from './descriptions.reducer';
import { State } from '../../index';

export const descriptionsStateSelector = (state: State) => state.descriptions;
export const selectDescriptionsState = (state: DescriptionsState) =>
  state.descriptions;
export const selectDescriptions = createSelector(
  descriptionsStateSelector,
  selectDescriptionsState
);

export const selectDeleteModalState = (state: DescriptionsState) =>
  state.deleteModal;
export const selectDeleteModal = createSelector(
  descriptionsStateSelector,
  selectDeleteModalState
);

export const selectIdForDeleteState = (state: DescriptionsState) =>
  state.idForDelete;
export const selectIdForDelete = createSelector(
  descriptionsStateSelector,
  selectIdForDeleteState
);
export const selectLoadingState = (state: DescriptionsState) => state.loading;
export const selectLoading = createSelector(
  descriptionsStateSelector,
  selectLoadingState
);
