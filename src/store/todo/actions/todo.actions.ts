import { TodoFilter } from '../reducers/todo.reducer';
import { TodoTypes } from './todo.types';
import { ActionWithPayload } from '../../../helpers';

export const toggleTodoFilter = (
  payload: TodoFilter
): ActionWithPayload<TodoFilter> => ({
  type: TodoTypes.TOGGLE_TODO_FILTER,
  payload,
});
