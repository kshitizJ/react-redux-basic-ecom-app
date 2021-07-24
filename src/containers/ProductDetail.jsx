import React, { useEffect } from 'react'
import axios from 'axios'
import { selectedProduct, removeSelectedProduct } from '../redux/action/productAction'
import preloader from '../Preloader.gif'

// to get the parameter value we use useParam hook
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// ProductDetail shows the details of the particular product
const ProductDetail = () => {

   // getting the particular product from the state
   const product = useSelector((state) => state.product)

   // destructuring the product
   const { title, image, price, description, category } = product

   // useParams() function gives us the id passed in the parameter
   const { productId } = useParams()
   const dispatch = useDispatch()
   // console.log(product);

   // fetching the details of the particular product
   const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
         console.log("err: ", err);
      })

      // data is passed to action function (selectedProduct) which then gets dispatched
      dispatch(selectedProduct(response.data))
   }

   // change the state as soon as the productId changes
   useEffect(() => {
      if (productId && productId !== "")
         fetchProduct()

      // remove the product from the state as soon as the component gets unmounted
      return () => {
         dispatch(removeSelectedProduct())
      }
   }, [productId])

   return (
      <div className="ui grid container">
         {/* if product's (object type) length is 0 then we display the preloader and after fetching the data we display the details of the product */}
         {Object.keys(product).length === 0 ? (<div style={{ marginTop: "50px" }} className="center aligned grid"><img src={preloader} alt="preloader" /></div>) : (
            <div className="ui placeholder segment">
               <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">AND</div>
                  <div className="middle aligned row">
                     <div className="column lp">
                        <img className="ui fluid image" src={image} alt="product" />
                     </div>
                     <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                           <a className="ui teal tag label">${price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                           <div className="hidden content">
                              <i className="shop icon"></i>
                           </div>
                           <div className="visible content">Add To Cart</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default ProductDetail
