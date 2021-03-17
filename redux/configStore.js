import { createWrapper } from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import thunk from 'redux-thunk'
import reducer from './reducer'

const persistConfig = {
  key: 'root_ex',
  storage,
  blacklist: ['navigation', 'notifications']
}

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

        // we need it only on client side
        const {persistStore, persistReducer} = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'nextjs',
            whitelist: ['fromClient'],
            blacklist: ['navigation', 'notifications'],
            storage
        };

        const persistedReducer = persistReducer(persistConfig, reducer);
        const store = makeConfiguredStore(persistedReducer);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
};

export const wrapper = createWrapper(makeStore);

export const setClientState = (clientState) => ({
    type: SET_CLIENT_STATE,
    payload: clientState
});