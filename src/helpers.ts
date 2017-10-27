import { Action, Reducer } from 'redux';

export interface ActionWithPayload<T> extends Action {
    payload?: T;
}

export interface ReducerLookUp<T> {
    [key: string]: (state: T, action: Action | ActionWithPayload<any>) => T;
}

export function lookUpMatcher<T>(
    lookUp: ReducerLookUp<T>,
    state: T,
    action: Action | ActionWithPayload<any>
): T {
    return lookUp[action.type] ? lookUp[action.type](state, action) : state;
}

export function lookUpReducer<T>(
    lookUp: ReducerLookUp<T>
): Reducer<T> {
    return (state: T, action) => lookUpMatcher(lookUp, state, action);
}

export const toPayload = (action: any) => action.payload;