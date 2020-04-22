import { createReducer } from '@rootstrap/redux-tools';
import { getTargetsSuccess, getTopicsSuccess, createTargetSuccess } from 'actions/targetActions';

const initialState = {
  targets: [],
  topics: false,
  createdTarget: false,
};

const handleGetTargetsSuccess = (state, { payload }) => {
  state.targets = payload;
};

const handlecreateTargetSuccess = (state, { payload }) => {
  state.createdTarget = payload;
};

const handleGetTopicsSuccess = (state, { payload }) => {
  state.topics = payload;
};

export default createReducer(initialState, {
  [getTargetsSuccess]: handleGetTargetsSuccess,
  [createTargetSuccess]: handlecreateTargetSuccess,
  [getTopicsSuccess]: handleGetTopicsSuccess,
});
