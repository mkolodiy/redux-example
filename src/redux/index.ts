import { combineReducers } from 'redux';
import { type ReduxState, posts, postsLoading } from './reducers';

export default combineReducers<ReduxState>({
  posts,
  postsLoading,
});
