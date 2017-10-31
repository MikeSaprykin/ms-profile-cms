import { createSelector } from 'reselect';
import { selectFilterState, TodoState } from './todo.reducer';
export * from './todo.reducer';

export interface AppState {
  todos: TodoState;
}

const selectTodos = (state: AppState) => state.todos;

export const selectCurrentFilter = createSelector(
  selectTodos,
  selectFilterState
);
