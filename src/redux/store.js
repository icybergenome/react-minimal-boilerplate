import {reducer} from './reducer'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export default () =>{
    const store = createStore(reducer, applyMiddleware(...middlewares))

    return store
}
      