import { lookUpReducer, ReducerLookUp } from '../../../helpers';
import { TodoModel } from '../models';

export interface TodoState {
    todos: {
        [key: string]: TodoModel
    };
    filter: {
        done: boolean
    };
}

const lookUp: ReducerLookUp<TodoState> = {

};

export const todoReducer = lookUpReducer(lookUp);
