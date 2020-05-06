import { createReducer } from '@rootstrap/redux-tools';
import { getProfileSuccess } from 'actions/userActions';

const initialState = {
  profile: null,
};

const handleGetProfileSuccess = (state, { payload }) => {
  state.profile = payload;
};

export default createReducer(initialState, {
  [getProfileSuccess]: handleGetProfileSuccess,
});
