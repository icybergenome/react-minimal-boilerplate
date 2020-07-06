import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routing/Routes'
import {Provider} from 'react-redux'
import configurestore from './redux/store'
const store = configurestore()
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes />
    </Router>
    </Provider>
  )
}
export default App