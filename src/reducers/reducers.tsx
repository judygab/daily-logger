import * as redux from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';

import filtersReducer from './filtersreducer';

export const rootReducer = redux.combineReducers({
  filtersReducer,
});

export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export type RootState = ReturnType<typeof rootReducer>;
