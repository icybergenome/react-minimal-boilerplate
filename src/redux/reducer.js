const initialState = {
    fetchingData: false,
    data: {},
    fetchError: ''
  }
const FETCH_DATA = 'FETCH_DATA'
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const reducer = (state = initialState, action) => {
  console.log("state" , state)

    console.log("action is is ", action)
    switch (action.type) {
      case FETCH_DATA:
        console.log("action is is fetching")
        return {
          ...state,
          fetchingData: true
        }
      case FETCH_DATA_SUCCESS:
        console.log("action is is success")
        return {
          ...state,
          fetchingData: false,
          data: action.payload,
          fetchError: ''
        }
      case FETCH_DATA_FAILURE:
        console.log("action is is failue")
        return {
          ...state,
          fetchingData: false,
          data: {},
          fetchError: action.payload
        }
        default:
            console.log("action is is default")
            return state;
    }
  }
  export const getData = state => state.data;
  export const pending = state => state.fetchingData;
  export const getError = state => state.fetchError;
  