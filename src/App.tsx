import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'

import Results from './containers/results/Results'

function App() {
  return (
    <Provider store={store}>
      <Results />
    </Provider>
  )
}

export default App
