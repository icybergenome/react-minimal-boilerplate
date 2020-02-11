import { ActionTypes } from '../actions/crudCustomers';

const initialState = {
  fetchingData: false,
  fetchingSuccess: false,
  fetchingFailure: false,
  data: [],
  UpdatingData: false,
  updatingSuccess: false,
  updatingFailure: false,
  deletingData: false,
  deletingSuccess: false,
  deletingFailure: false,
  creatingData: false,
  creatingSuccess: false,
  creatingFailure: false,
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
        data: action.payload,
      };
    case ActionTypes.FETCHING_FAILURE:
      return {
        ...state,
        fetchingSuccess: false,
        fetchingData: false,
        fetchingFailure: true,
      };
    case ActionTypes.UPDATING_DATA:
      return {
        ...state,
        updatingData: true,
        updatingSuccess: false,
        updatingFailure: false,
      };
    case ActionTypes.UPDATING_SUCCESS:
      return {
        ...state,
        updatingData: false,
        updatingFailure: false,
        updatingSuccess: true,
        data: action.data,
      };
    case ActionTypes.UPDATING_FAILURE:
      return {
        ...state,
        updatingSuccess: false,
        updatingData: false,
        updatingFailure: true,
      };
    case ActionTypes.DELETING_DATA:
      return {
        ...state,
        deletingData: true,
        deletingSuccess: false,
        deletingFailure: false,
      };
    case ActionTypes.DELETING_SUCCESS:
      return {
        ...state,
        deletingData: false,
        deletingFailure: false,
        deletingSuccess: true,
        data: action.data,
      };
    case ActionTypes.DELETING_FAILURE:
      return {
        ...state,
        deletingSuccess: false,
        deletingData: false,
        deletingFailure: true,
      };
    case ActionTypes.CREATING_DATA:
      return {
        ...state,
        creatingData: true,
        creatingSuccess: false,
        creatingFailure: false,
      };
    case ActionTypes.CREATING_SUCCESS:
      return {
        ...state,
        creatingData: false,
        creatingFailure: false,
        creatingSuccess: true,
        data: action.data,
      };
    case ActionTypes.CREATING_FAILURE:
      return {
        ...state,
        creatingSuccess: false,
        creatingData: false,
        creatingFailure: true,
      };
    default:
      return state;
  }
};
