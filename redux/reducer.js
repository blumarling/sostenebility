import { combineReducers } from 'redux';
import user from './user/reducer';
import common from './common/reducer';
import modals from './modals/reducer';

export default combineReducers({
  user,
  common,
  modals
});
