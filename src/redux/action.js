import axios from 'axios'
const FETCH_DATA = 'FETCH_DATA'
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
      

export const fetchData = () => {
  return function (dispatch) {
    dispatch(fetching_data())
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        dispatch(fetch_data_success(response.data))
      })
      .catch(error => {
        dispatch(fetch_data_failure(error.message))
      })
  }
}
      //action generators
      export const fetching_data = () => {
        return {
          type: FETCH_DATA
        }
      }
      
      export const fetch_data_success = data => {
        return {
          type: FETCH_DATA_SUCCESS,
          payload: data
        }
      }
      
      export const fetch_data_failure = error => {
        return {
          type: FETCH_DATA_FAILURE,
          payload: error
        }
      }
      
