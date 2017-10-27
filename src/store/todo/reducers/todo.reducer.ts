import { lookUpReducer, ReducerLookUp } from '../../../helpers';
import { TodoModel } from '../models';

export interface TodoState {
    todos: {
        [key: string]: TodoModel
    };
    filter: {
        done: boolean | null
    };
}

const initialTodosState: TodoState = {
  todos: {},
  filter: {
      done: null
  }
};

const lookUp: ReducerLookUp<TodoState> = {

};

export const todoReducer = lookUpReducer(lookUp, initialTodosState);
