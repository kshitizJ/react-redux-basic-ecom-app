// combining multiple reducers

import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer } from './productReducer'

// combining all the reducers together with the help of combineReducers function from redux
export const reducers = combineReducers({
   // when we do 'state.allProducts' we will get all the products
   allProducts: productReducer,

   // when we do 'state.product' we will get the info about the particular product
   product: selectedProductReducer,
})