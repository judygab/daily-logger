import { HYDRATE } from "next-redux-wrapper";
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionConsts} from "../definitions/actionConsts";

const filterState: IFilterData = {
  categories: [],
  vendors: [],
  searchText: '',
}

const filtersReducer: Reducer<IFilterData, ActionType<any>> = (
  state = filterState,
  action,
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.filters };
    case actionConsts.update:
      return {...state, ...action.payload};
    case actionConsts.Test:
      return { ...state, ...action.payload };
    case actionConsts.clear:
      return filterState;
    default:
      return { ...state };
  }
};

export default filtersReducer;
