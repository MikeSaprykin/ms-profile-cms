import { Action, Reducer } from 'redux';

export interface ActionWithPayload<T> extends Action {
    payload?: T;
}

export interface ReducerLookUp<T> {
    [key: string]: (state: T, action: Action | ActionWithPayload<any>) => T;
}

export const lookUpMatcher = <T>(
    lookUp: ReducerLookUp<T>,
    state: T,
    action: Action | ActionWithPayload<any>
): T => lookUp[action.type] ? lookUp[action.type](state, action) : state;

export const lookUpReducer = <T>(
    lookUp: ReducerLookUp<T>,
    initialState: T
): Reducer<T> =>
    (state: T = initialState, action) => lookUpMatcher(lookUp, state, action);

export const toPayload = (action: any) => action.payload;