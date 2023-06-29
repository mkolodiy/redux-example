import { ThunkAction } from 'redux-thunk';
import { createThunkAction, ActionType, HttpMethod } from './utils';
import { AnyAction } from 'redux';

// eslint-disable-next-line @typescript-eslint/ban-types
export const actionFetchPosts = (): ThunkAction<any, {}, {}, AnyAction> => {
  return createThunkAction({
    type: ActionType.FETCH_POSTS,
    url: '/posts',
    method: HttpMethod.GET,
  });
};
