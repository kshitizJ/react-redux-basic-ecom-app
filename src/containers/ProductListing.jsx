import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/action/productAction'
import ProductComponent from './ProductComponent'
import axios from 'axios'

const ProductListing = () => {
   // redux hooks
   const products = useSelector((state) => state)
   // using useDispatch function to dispatch our action
   const dispatch = useDispatch();

   // fetching the data using axios with async and await
   const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
         console.log("err: ", err);
      })
      // passing the data to setProducts action which then gets dispatched
      dispatch(setProducts(response.data));
   }

   // when the component loads we fetch the products by calling fetchProducts() function
   useEffect(() => {
      fetchProducts();
   }, [])

   // console.log("Products ", products);

   return (
      <div className="ui grid container">
         <ProductComponent />
      </div>
   )
}

export default ProductListing
