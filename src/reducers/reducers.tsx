import * as redux from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';

import userReducer from './onereducer';

export const rootReducer = redux.combineReducers({
  userReducer,
});

export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export type RootState = ReturnType<typeof rootReducer>;
