import { HYDRATE } from "next-redux-wrapper";
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { ActionConsts} from "../definitions/actionConts";
// import { IUserData } from './types';

// const userState: IUserData = {
//   _id: '',
//   email: '',
//   password: '',
//   role: '',
// };

const userReducer: Reducer<any, ActionType<any>> = (
  state = {name: 'John'},
  action,
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.userData };
    case ActionConsts.Test:
      return { ...state, ...action.payload.userData };
    default:
      return { ...state };
  }
};

export default userReducer;
