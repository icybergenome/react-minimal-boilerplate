export const ActionTypes = {
  FETCHING_DATA: 'actions/profileClass/FETCHING_DATA',
  FETCHING_SUCCESS: 'actions/profileClass/FETCHING_SUCCESS',
  FETCHING_FAILURE: 'actions/profileClass/FETCHING_FAILURE',
};
const fetchingData = () => {
  return {
    type: ActionTypes.FETCHING_DATA,
  };
};

const fetchingSuccess = data => {
  return {
    type: ActionTypes.FETCHING_SUCCESS,
    data,
  };
};

const fetchingFailure = error => {
  return {
    type: ActionTypes.FETCHING_FAILURE,
    payload: {
      error,
    },
  };
};
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
        dispatch(fetchingFailure('error'));
      });
  };
};
export const Actions = {
  fetching,
  fetchingSuccess,
  fetchingData,
  fetchingFailure,
};
