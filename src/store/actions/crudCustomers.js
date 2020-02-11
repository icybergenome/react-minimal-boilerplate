export const ActionTypes = {
  FETCHING_DATA: 'actions/crudCustomers/GETTING_DATA',
  FETCHING_SUCCESS: 'actions/crudCustomers/FETCHED_DATA',
  FETCHING_FAILURE: 'actions/crudCustomers/FETCH_FAILED',
  UPDATING_DATA: 'actions/crudCustomers/UPDATING_DATA',
  UPDATING_SUCCESS: 'actions/crudCustomers/DATA_UPDATED',
  UPDATING_FAILURE: 'actions/crudCustomers/UPDATE_FAILED',
  CREATING_DATA: 'actions/crudCustomers/CREATING_DATA',
  CREATING_SUCCESS: 'actions/crudCustomers/CREATING_SUCCESS',
  CREATING_FAILURE: 'actions/crudCustomers/CREATING_FAILED',
  DELETING_DATA: 'actions/crudCustomers/DELETING_DATA',
  DELETING_SUCCESS: 'actions/crudCustomers/DELETING_SUCCESS',
  DELETING_FAILURE: 'actions/crudCustomers/DELETING_FAILED',
};

const fetchingData = () => {
  return {
    type: ActionTypes.FETCHING_DATA,
  };
};

const fetchingSuccess = data => {
  return {
    type: ActionTypes.FETCHING_SUCCESS,
    payload: data,
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
    fetch('https://crud-customers-app.herokuapp.com/customers')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchingSuccess(data));
      })
      .catch(() => {
        dispatch(fetchingFailure('error'));
      });
  };
};
const updatingData = () => {
  return {
    type: ActionTypes.UPDATING_DATA,
  };
};
const updatingSuccess = data => {
  return {
    type: ActionTypes.UPDATING_SUCCESS,
    data,
  };
};
const updatingFailure = error => {
  return {
    type: ActionTypes.UPDATING_FAILURE,
    payload: {
      error,
    },
  };
};
const updating = updatedData => {
  return dispatch => {
    dispatch(updatingData());
    fetch(
      `https://crud-customers-app.herokuapp.com/customers/${updatedData.id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      },
    )
      .then(response => response.json())
      .then(() =>
        fetch('https://crud-customers-app.herokuapp.com/customers')
          .then(response => response.json())
          .then(data => {
            dispatch(updatingSuccess(data));
          })
          .catch(() => {
            dispatch(updatingFailure('error'));
          }),
      );
  };
};
const deletingData = () => {
  return {
    type: ActionTypes.DELETING_DATA,
  };
};

const deletingSuccess = data => {
  return {
    type: ActionTypes.DELETING_SUCCESS,
    data,
  };
};

const deletingFailure = error => {
  return {
    type: ActionTypes.DELETING_FAILURE,
    payload: {
      error,
    },
  };
};
const deleting = id => {
  return dispatch => {
    dispatch(deletingData());
    fetch(`https://crud-customers-app.herokuapp.com/customers/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      // eslint-disable-next-line no-unused-vars
      .then(() =>
        fetch('https://crud-customers-app.herokuapp.com/customers')
          .then(response => response.json())
          .then(data => {
            dispatch(deletingSuccess(data));
          })
          .catch(() => {
            dispatch(deletingFailure('error'));
          }),
      );
  };
};

const creatingData = () => {
  return {
    type: ActionTypes.CREATING_DATA,
  };
};

const creatingSuccess = data => {
  return {
    type: ActionTypes.CREATING_SUCCESS,
    data,
  };
};

const creatingFailure = error => {
  return {
    type: ActionTypes.CREATING_FAILURE,
    payload: {
      error,
    },
  };
};
const creating = NewData => {
  return dispatch => {
    dispatch(creatingData());
    fetch('https://crud-customers-app.herokuapp.com/customers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(NewData),
    })
      .then(response => response.json())

      .then(() =>
        fetch('https://crud-customers-app.herokuapp.com/customers')
          .then(response => response.json())
          .then(data => {
            dispatch(creatingSuccess(data));
          })
          .catch(() => {
            dispatch(creatingFailure('error'));
          }),
      );
  };
};

export const Actions = {
  fetching,
  fetchingSuccess,
  fetchingData,
  fetchingFailure,
  updatingData,
  updatingSuccess,
  updating,
  deletingData,
  deletingFailure,
  deletingSuccess,
  deleting,
  creating,
  creatingData,
  creatingSuccess,
  creatingFailure,
};
