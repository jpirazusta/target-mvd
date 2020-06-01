import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { thunkMiddleware } from '@rootstrap/redux-tools';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import { createStore, applyMiddleware } from 'redux';
import fetchMock from 'fetch-mock-jest';

import reducer from 'reducers';
import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';
import parseError from 'utils/parseError';

const TEST_NAVIGATOR = 'TestNavigator';

export const AUTHENTICATED_RESPONSE_HEADERS = {
  'access-token': 'token',
  uid: 'example@rootstrap.com',
  client: 'client',
};

const Stack = createStackNavigator();

export const configureStore = (initialState = {}) => {
  const middlewares = [thunkMiddleware(error => parseError(error))];

  const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

  return store;
};

export const configureAuthenticatedStore = (initialState = {}) =>
  configureStore({
    session: {
      user: {
        email: 'example@rootstrap.com',
        id: '1',
      },
      info: {
        token: 'token',
        uid: 'example@rootstrap.com',
        client: 'client',
      },
    },
    ...initialState,
  });

export const renderWithRedux = (component, store) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export const renderWithNavigation = (component, store, { navigatorConfig = {} } = {}) => {
  const App = () => (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator {...navigatorConfig}>
          <Stack.Screen name={TEST_NAVIGATOR} component={component} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

  return { ...render(<App />) };
};

export const mockedHttpClient = store => {
  applyDefaultInterceptors(store, api);

  return fetchMock;
};
