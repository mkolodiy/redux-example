import { ActionStatus, ActionType, ThunkAction, getType } from './utils';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ReduxState = {
  posts: Post[];
  postsLoading: boolean;
};

export const posts = (
  state: Post[] = [],
  action: ThunkAction<string, Post[] | any>
) => {
  switch (action.type) {
    case getType(ActionType.FETCH_POSTS, ActionStatus.SUCCESS):
      return action.payload;
    case getType(ActionType.FETCH_POSTS, ActionStatus.FAILURE):
    default:
      return state;
  }
};

export const postsLoading = (
  state = false,
  action: ThunkAction<string, boolean | any>
) => {
  switch (action.type) {
    case getType(ActionType.FETCH_POSTS, ActionStatus.START):
      return true;
    case getType(ActionType.FETCH_POSTS, ActionStatus.SUCCESS):
    case getType(ActionType.FETCH_POSTS, ActionStatus.FAILURE):
      return false;
    default:
      return state;
  }
};
