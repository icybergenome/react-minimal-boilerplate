import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routing/Routes'
import {Provider} from 'mobx-react'
import DataStore from './stores/fetcheddata'



const App = () => {
  return (
    <Provider DataStore={DataStore}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;