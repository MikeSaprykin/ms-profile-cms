import { createSelector } from 'reselect';

import { DescriptionsState } from './descriptions.reducer';
import { State } from '../../../root';

export const descriptionsStateSelector = (state: State) => state.descriptions;
export const selectDescriptionsState = (state: DescriptionsState) => state.descriptions;
export const selectDescriptions = createSelector(
    descriptionsStateSelector,
    selectDescriptionsState
);
