import { createStore } from 'redux'
import { reducers } from './reducers'

// creating a store to pass the reducers.
// 2nd param is the state.
// 3rd param is passed to see the redux working in chrome devtool
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store