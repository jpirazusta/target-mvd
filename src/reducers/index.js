import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import target from 'reducers/targetReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  session,
  target,
  actionStatus: statusReducer,
});

export default AppReducer;
