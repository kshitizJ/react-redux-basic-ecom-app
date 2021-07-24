import { ActionTypes } from "../constants/actionType";

// action function to set products
export const setProducts = (products) => {
   return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products
   }
}

// action function to get the selected product
export const selectedProduct = (product) => {
   return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product
   }
}

// action function to remove the selected product
export const removeSelectedProduct = () => {
   return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
   }
}