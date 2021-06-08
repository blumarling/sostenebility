import { createWrapper } from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeConfiguredStore = (reducer) =>
    createStore(reducer, undefined, composeEnhancers(applyMiddleware(...[thunk])));

const makeStore = () => {

    const isServer = typeof window === 'undefined';

    if (isServer) {
      return makeConfiguredStore(reducer);
    } else {
      return makeConfiguredStore(reducer);
    }
};

export const wrapper = createWrapper(makeStore);

export const setClientState = (clientState) => ({
    type: SET_CLIENT_STATE,
    payload: clientState
});