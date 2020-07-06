import fetchData from './reducers/fetchData'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export default () =>{
    const store = createStore(combineReducers({fetchData}), applyMiddleware(...middlewares))

    return store
}
      