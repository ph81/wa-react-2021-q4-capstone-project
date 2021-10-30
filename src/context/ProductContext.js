import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/productReducer'
import { WZL_API } from '../utils/constants'
import data from '../mocks/es-mx/products.json'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../utils/actions'

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
}

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.PRODUCTS_URL}`;
  console.log(url);

  const fetchProducts = async (url) => {
  //const fetchProducts = () => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    
    try {
      
      const response = await axios.get(url);
      const products = response.data;
      
      //const products = data.results;
      console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  }

  const fetchSingleProduct = async (url) => {
  //const fetchSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    try {
      
      const response = await axios.get(url);
      const singleProduct = response.data;
      //const products = data.results;

      //const singleProduct = products.find(product => singleProduct.id === id);
      //console.log(singleProduct);

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });

    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url])



  return (
    <ProductsContext.Provider value={{...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}