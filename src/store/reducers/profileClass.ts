import { ActionTypes, profileClassActions } from '../actions/profileClass';


export interface IProfileClassState  {
    fetchingData: boolean,
    fetchingSuccess: boolean,
    fetchingFailure: boolean,
    data: string[],
  };


 const initialState: IProfileClassState = {
  fetchingData: false,
  fetchingSuccess: false,
  fetchingFailure: false,
  data: [],
};

export default (state = initialState, action:profileClassActions) => {
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
