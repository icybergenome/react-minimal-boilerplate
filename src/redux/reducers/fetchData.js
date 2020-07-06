import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../constants"
const initialState = {
    fetchingData: false,
    data: [],
    fetchError: ''
  }
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          fetchingData: true
        }
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          fetchingData: false,
          data: action.payload,
          fetchError: ''
        }
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          fetchingData: false,
          data: {},
          fetchError: action.payload
        }
        default:
            return state;
    }
  }

  export default reducer