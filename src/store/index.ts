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

const rootEpic = combineEpics(deleteDescription);

export interface State {
    descriptions: DescriptionsState;
}

export const store = createStore(
    combineReducers<State>({
        descriptions,
        routing
    }),
    {},
    composeWithDevTools(
        applyMiddleware(
            createEpicMiddleware(rootEpic)
        )
    )
);

export * from './descriptions';
