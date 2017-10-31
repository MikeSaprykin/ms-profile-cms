import { lookUpReducer, ReducerLookUp } from '../../../helpers';
import { TodoModel } from '../models';
import { TodoTypes as types } from '../actions/todo.types';

export enum TodoFilter {
  ALL,
  DONE,
  ACTIVE
}

export interface TodoState {
  filter: {
    done: TodoFilter;
  };
}

const initialTodosState: TodoState = {
  filter: {
    done: TodoFilter.ALL,
  },
};

const lookUp: ReducerLookUp<TodoState> = {
  [types.TOGGLE_TODO_FILTER]: (state, action) => ({
      ...state,
      filter: { done: action.payload }
  })
};

export const todoReducer = lookUpReducer(lookUp, initialTodosState);
