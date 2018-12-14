import { combineReducers } from 'redux';
import user from './user';
import login from './login';
import greet from './greet';

export default combineReducers({
  user,
  login,
  greet
});
