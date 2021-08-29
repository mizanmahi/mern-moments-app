import { combineReducers } from 'redux';

import postReducer from './postsReducer';
import authReducer from './authReducer';

export default combineReducers({
   posts: postReducer,
   auth: authReducer,
});
