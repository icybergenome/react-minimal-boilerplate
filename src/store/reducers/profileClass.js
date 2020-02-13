import { ActionTypes } from '../actions/profileClass';

const initialState = {
  fetchingData: false,
  fetchingSuccess: false,
  fetchingFailure: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHING_DATA:
      return {
        ...state,
        fetchingData: true,
        fetchingSuccess: false,
        fetchingFailure: false,
      };
    case ActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        fetchingFailure: false,
        fetchingSuccess: true,
        data: action.data,
      };
    case ActionTypes.FETCHING_FAILURE:
      return {
        ...state,
        fetchingSuccess: false,
        fetchingData: false,
        fetchingFailure: true,
      };
    default:
      return state;
  }
};
