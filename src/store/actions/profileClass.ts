export enum ActionTypes  {
  FETCHING_DATA= 'actions/profileClass/FETCHING_DATA',
  FETCHING_SUCCESS= 'actions/profileClass/FETCHING_SUCCESS',
  FETCHING_FAILURE= 'actions/profileClass/FETCHING_FAILURE',
};

interface FethchingData {
    type: ActionTypes.FETCHING_DATA,
    payload: string
  }
const fetchingData = () => {
  return {
    type: ActionTypes.FETCHING_DATA,
  };
};

interface FethchingSuccess {
    type: ActionTypes.FETCHING_SUCCESS,
    data: string[],
  }
const fetchingSuccess = (data:string[]) => {
  return {
    type: ActionTypes.FETCHING_SUCCESS,
    data,
  };
};

interface FethchingFailure {
    type: ActionTypes.FETCHING_FAILURE,
    payload: true
  }

const fetchingFailure = (error:true) => {
  return {
    type: ActionTypes.FETCHING_FAILURE,
    payload: {
      error,
    },
  };
};

interface Fetching {
        payload: string
        error:false
  }
const fetching = () => {
  return dispatch => {
    dispatch(fetchingData());
    fetch(
      'https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums',
    )
      .then(response => response.json())
      .then(data => {
        dispatch(fetchingSuccess(data));
      })
      .catch(() => {
        dispatch(fetchingFailure(error:true));
      });
  };
};
export type profileClassActions =Fetching | FethchingData |FethchingFailure|FethchingSuccess
export const Actions = {
  fetching,
  fetchingSuccess,
  fetchingData,
  fetchingFailure,
};
