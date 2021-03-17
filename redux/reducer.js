import { combineReducers } from 'redux';
import user from './user/reducer';
import common from './common/reducer';
import pagebuilder from './pagebuilder/reducer';

export default combineReducers({
  user,
  common,
  pagebuilder
});
