import {combineReducers, createStore} from 'redux'
import {ResultsReducer} from '../containers/results/redux/ResultsReducer'

const reducers = combineReducers({
  results: ResultsReducer
})

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
