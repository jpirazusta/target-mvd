import { fireEvent, wait, act } from '@testing-library/react-native';

import { LOGIN_SCREEN } from 'constants/screens';
import LoginScreen from 'screens/LoginScreen';

import {
  renderWithNavigation,
  mockedHttpClient,
  configureStore,
  AUTHENTICATED_RESPONSE_HEADERS,
} from '../helpers';

describe('<LoginScreen />', () => {
  let wrapper;
  let store;
  let httpClient;

  beforeEach(() => {
    store = configureStore();
    wrapper = renderWithNavigation(LoginScreen, store);
    httpClient = mockedHttpClient(store);
    httpClient.reset();
  });

  it('should render the login screen', () => {
    expect(wrapper.queryByTestId(LOGIN_SCREEN)).toBeTruthy();
  });

  it('should display an email field', () => {
    expect(wrapper.queryByTestId('email-input')).toBeTruthy();
  });

  it('should display a password field', () => {
    expect(wrapper.queryByTestId('password-input')).toBeTruthy();
  });

  describe('when the user submits the form', () => {
    beforeEach(() => {
      fireEvent.changeText(wrapper.queryByTestId('email-input'), 'example@rootstrap.com');
      fireEvent.changeText(wrapper.queryByTestId('password-input'), 'password');
    });

    it('should show the loading spinner', async () => {
      httpClient.post('/users/sign_in', {
        delay: 1000,
        status: 200,
      });
      act(() => {
        fireEvent.press(wrapper.queryByTestId('login-submit-button'));
      });

      await wait(() => {
        expect(wrapper.queryByText('LOADING')).toBeTruthy();
      });
    });

    describe('if the user exist', () => {
      it('should show no errors', async () => {
        httpClient.post('/users/sign_in',
          {
            user: {
              id: 482,
              email: 'example@rootstrap.com',
              uid: 'example@rootstrap.com',
            },
          },
          {
            headers: AUTHENTICATED_RESPONSE_HEADERS,
          },
        );
        act(() => {
          fireEvent.press(wrapper.queryByTestId('login-submit-button'));
        });

        await wait(() => {
          expect(wrapper.queryAllByLabelText('form-error')).toEqual([]);
        });
      });
    });

    describe('if the user does not exist or has invalid credentials', () => {
      it('should show no errors', async () => {
        // TODO (Not working)
        httpClient.post(
          '/users/sign_in',
          {
            error: 'Invalid login credentials. Please try again.',
          },
          {
            status: 401,
          },
        );
        act(() => {
          fireEvent.press(wrapper.queryByTestId('login-submit-button'));
        });

        await wait(() => {
          expect(wrapper.queryAllByLabelText('form-error')).toHaveLength(1);
          expect(wrapper.queryByText('Invalid login credentials. Please try again.')).toBeTruthy();
        });
      });
    });

    describe('if there is a network error', () => {
      it('should show no errors', async () => {
        // TODO (Not working)
        httpClient.post('/users/sign_in', {
          status: -1,
        });
        fireEvent.press(wrapper.queryByTestId('login-submit-button'));

        await wait(() => {
          expect(wrapper.queryAllByLabelText('form-error')).toHaveLength(1);
          expect(wrapper.queryByText('Something Went Wrong')).toBeTruthy();
        });
      });
    });
  });
});
