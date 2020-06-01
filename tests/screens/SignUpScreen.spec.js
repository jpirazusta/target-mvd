import { fireEvent, wait, act } from '@testing-library/react-native';

import { SIGN_UP_SCREEN } from 'constants/screens';
import SignUpScreen from 'screens/SignUpScreen';

import {
  renderWithNavigation,
  mockedHttpClient,
  configureStore,
  AUTHENTICATED_RESPONSE_HEADERS,
} from '../helpers';

describe('<SignUpScreen />', () => {
  let wrapper;
  let store;
  let httpClient;

  beforeEach(() => {
    store = configureStore();
    wrapper = renderWithNavigation(SignUpScreen, store);
    httpClient = mockedHttpClient(store);
    httpClient.reset();
  });

  it('should render the sign up screen', () => {
    expect(wrapper.queryByTestId(SIGN_UP_SCREEN)).toBeTruthy();
  });

  it('should display a name field', () => {
    expect(wrapper.queryByTestId('name-input')).toBeTruthy();
  });

  it('should display an email field', () => {
    expect(wrapper.queryByTestId('email-input')).toBeTruthy();
  });

  it('should display a password field', () => {
    expect(wrapper.queryByTestId('password-input')).toBeTruthy();
  });

  it('should display a password confirmation field', () => {
    expect(wrapper.queryByTestId('confirm-password-input')).toBeTruthy();
  });

  it('should display a gender field', () => {
    expect(wrapper.queryByTestId('ios_touchable_wrapper')).toBeTruthy();
  });

  describe('when the user submits the form', () => {
    beforeEach(() => {
      fireEvent.changeText(wrapper.queryByTestId('email-input'), 'example@rootstrap.com');
      fireEvent.changeText(wrapper.queryByTestId('password-input'), 'password');
      fireEvent.changeText(wrapper.queryByTestId('confirm-password-input'), 'password');
      fireEvent.changeText(wrapper.queryByTestId('name-input'), 'Example');
      fireEvent.valueChange(wrapper.queryByTestId('ios_picker'), 'male');
    });

    it('should show the loading spinner', async () => {
      httpClient.post('/users', {
        delay: 1000,
        status: 200,
      });
      act(() => {
        fireEvent.press(wrapper.queryByTestId('signup-submit-button'));
      });

      await wait(() => {
        expect(wrapper.queryByText('LOADING')).toBeTruthy();
      });
    });

    describe('if the user exist', () => {
      it('should show existing user errors', async () => {
        // TODO (Not working)
        httpClient.post(
          '/users',
          {
            errors: {
              email: ['has already been taken'],
            },
          },
          {
            status: 422,
          },
        );
        fireEvent.press(wrapper.queryByTestId('signup-submit-button'));

        await wait(() => {
          expect(wrapper.queryAllByLabelText('form-error')).toHaveLength(1);
          expect(wrapper.queryByText('email has already been taken')).toBeTruthy();
        });
      });
    });

    describe('if the user does not exist', () => {
      it('should show no errors', async () => {
        httpClient.post(
          '/users',
          {
            user: {
              id: 482,
              email: 'example@rootstrap.com',
              uid: 'example@rootstrap.com',
            },
          },
          {
            status: 200,
            headers: AUTHENTICATED_RESPONSE_HEADERS,
          },
        );
        fireEvent.press(wrapper.queryByTestId('signup-submit-button'));

        await wait(() => expect(wrapper.queryAllByLabelText('form-error')).toEqual([]));
      });
    });
  });
});
