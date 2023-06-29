import { Dispatch, Action } from 'redux';

export const ActionType = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_COMMENTS: 'FETCH_COMMENTS',
  INCREASE_COUNT: 'INCREASE_COUNT',
  DECREASE_COUNT: 'DECREASE_COUNT',
} as const;

export type ActionType = keyof typeof ActionType;

export const ActionStatus = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
} as const;

export type ActionStatus = keyof typeof ActionStatus;

export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
} as const;

export type HttpMethod = keyof typeof HttpMethod;

export interface LocalAction<TAction = any, TPayload = any>
  extends Action<TAction> {
  payload?: TPayload;
}

export interface ThunkAction<TAction = any, TPayload = any>
  extends LocalAction<TAction, TPayload> {
  url: string;
  method: HttpMethod;
}

export const createLocalAction = (action: LocalAction) => action;

export const createThunkAction = (action: ThunkAction) => {
  return async (dispatch: Dispatch) => {
    const { type, url, method, payload } = action;

    const actionStart: LocalAction = {
      type: getType(type, ActionStatus.START),
    };
    dispatch(actionStart);

    try {
      const resp = await fetch(`https://jsonplaceholder.typicode.com${url}`, {
        body: payload,
        method,
      });
      const data = await resp.json();
      const actionSuccess: LocalAction = {
        type: getType(type, ActionStatus.SUCCESS),
        payload: data,
      };
      dispatch(actionSuccess);
    } catch (err) {
      const actionError: LocalAction = {
        type: getType(type, ActionStatus.FAILURE),
        payload: err,
      };
      dispatch(actionError);
    }
  };
};

export const getType = (actionType: ActionType, actionStatus: ActionStatus) => {
  return `${actionType}_${actionStatus}`;
};
