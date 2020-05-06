import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import target from 'reducers/targetReducer';
import chat from 'reducers/chatReducer';
import user from 'reducers/userReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  session,
  target,
  chat,
  user,
  actionStatus: statusReducer,
});

export default AppReducer;
