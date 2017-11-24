import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    DescriptionsState,
    descriptionsReducer as descriptions,
    deleteDescription
} from './descriptions';
import {
    ToastsState,
    toastsReducer as toasts,
    triggerToastEpic
} from './toasts';

const rootEpic = combineEpics(deleteDescription, triggerToastEpic);

export interface State {
    descriptions: DescriptionsState;
    toasts: ToastsState;
}

export const store = createStore(
    combineReducers<State>({
        descriptions,
        routing,
        toasts
    }),
    {},
    composeWithDevTools(
        applyMiddleware(
            createEpicMiddleware(rootEpic)
        )
    )
);

export * from './descriptions';
