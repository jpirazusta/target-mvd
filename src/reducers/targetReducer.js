import { createReducer } from '@rootstrap/redux-tools';
import { getTargetsSuccess, getTopicsSuccess } from 'actions/targetActions';

const initialState = {
  targets: [],
  topics: false,
};

const handleGetTargetsSuccess = (state, { payload }) => {
  state.targets = payload;
};

const handleGetTopicsSuccess = (state, { payload }) => {
  state.topics = payload;
};

export default createReducer(initialState, {
  [getTargetsSuccess]: handleGetTargetsSuccess,
  [getTopicsSuccess]: handleGetTopicsSuccess,
});
