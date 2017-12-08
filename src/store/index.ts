import createHistory from 'history/createBrowserHistory';

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  DescriptionsState,
  descriptionsReducer as descriptions,
  deleteDescription,
  addDescription$
} from './descriptions';
import {
  ToastsState,
  toastsReducer as toasts,
  triggerToastEpic,
} from './toasts';

export const history = createHistory();
const rootEpic = combineEpics(deleteDescription, triggerToastEpic, addDescription$);

export interface State {
  descriptions: DescriptionsState;
  toasts: ToastsState;
}

export const store = createStore(
  combineReducers<State>({
    descriptions,
    routing,
    toasts,
    form,
  }),
  {},
  composeWithDevTools(applyMiddleware(
      createEpicMiddleware(rootEpic),
      routerMiddleware(history)
  ))
);

export * from './descriptions';
export * from './toasts';
