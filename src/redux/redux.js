// import redux, {createStore, applyMiddleware} from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import axios from 'axios'
// // import {fetch_data, fetch_data_success, fetch_data_failure} from './action' 
  

//     const initialState = {
//         fetchingData: false,
//         data: {},
//         fetchError: ''
//       }
      
//       const FETCH_DATA = 'FETCH_DATA'
//       const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
//       const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
      
//       //action generators
//       const fetch_data = () => {
//         return {
//           type: FETCH_DATA
//         }
//       }
      
//       const fetch_data_success = data => {
//         return {
//           type: FETCH_DATA_SUCCESS,
//           payload: data
//         }
//       }
      
//       const fetch_data_failure = error => {
//         return {
//           type: FETCH_DATA_FAILURE,
//           payload: error
//         }
//       }
      
//       export const fetchData = () => {
//         return function (dispatch) {
//           dispatch(fetch_data())
//           axios
//             .get('https://jsonplaceholder.typicode.com/photos')
//             .then(response => {
//               dispatch(fetch_data_success(response.data))
//             })
//             .catch(error => {
//               dispatch(fetch_data_failure(error.message))
//             })
//         }
//       }
      
//       const reducer = (state = initialState, action) => {
//         switch (action.type) {
//           case FETCH_DATA:
//             return {
//               ...state,
//               fetchingData: true
//             }
//           case FETCH_DATA_SUCCESS:
//             return {
//               fetchingData: false,
//               data: action.payload,
//               fetchError: ''
//             }
//           case FETCH_DATA_FAILURE:
//             return {
//               fetchingData: false,
//               data: {},
//               fetchError: action.payload
//             }
//         }
//       }
//       const store = createStore(reducer, applyMiddleware(thunkMiddleware))
//       store.subscribe(() => { console.log("store.getState()", store.getState()) })
//       store.dispatch(fetchData())
  
// export default store.getState()

 
