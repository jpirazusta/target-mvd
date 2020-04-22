import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunkMiddleware } from '@rootstrap/redux-tools';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AppReducer from 'reducers';
import parseError from 'utils/parseError';

/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['session'],
};

export default function configureStore(initialState) {
  const middlewares = [thunkMiddleware(({ error }) => parseError(error))];

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true,
    });
    middlewares.push(logger);
  }

  const persistedReducer = persistReducer(persistConfig, AppReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
