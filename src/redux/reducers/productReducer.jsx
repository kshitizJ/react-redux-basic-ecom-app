// A reducer always take the initial state and the action

import { ActionTypes } from "../constants/actionType";


// creating an initial state
const initialState = {
   products: []
}

// creating the products reducer to set the products in the state
export const productReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ActionTypes.SET_PRODUCTS:
         return { ...state, products: payload }

      default:
         return state
   }
}

// creating the selected product reducer to set the particular product in the state and removing the product from the state after unmounting the component
export const selectedProductReducer = (state = {}, { type, payload }) => {
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
         return { ...state, ...payload }

      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {}

      default:
         return state
   }
}
