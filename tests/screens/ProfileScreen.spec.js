import { wait } from '@testing-library/react-native';

import { PROFILE_SCREEN } from 'constants/screens';
import ProfileScreen from 'screens/ProfileScreen';

import { renderWithNavigation, mockedHttpClient, configureAuthenticatedStore } from '../helpers';

describe('<ProfileScreen />', () => {
  let wrapper;
  let store;
  let httpClient;

  beforeEach(() => {
    store = configureAuthenticatedStore();
    wrapper = renderWithNavigation(ProfileScreen, store);
    httpClient = mockedHttpClient(store);
    httpClient.reset();
  });

  it('should show the loading spinner', async () => {
    // TODO
    // await wait(() => {
    //   expect(wrapper.queryByTestId('spinner')).toBeTruthy();
    // });
  });

  it('should render the profile screen', () => {
    expect(wrapper.queryByTestId(PROFILE_SCREEN)).toBeTruthy();
  });

  // TODO
});
