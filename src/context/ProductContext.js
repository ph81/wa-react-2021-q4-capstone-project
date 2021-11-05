import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/productReducer'
//import {useFetchData} from '../utils/hooks/useFetchData';
import { WZL_API } from '../utils/constants'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR 
} from '../utils/actions'

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.PRODUCTS_URL}`;
  //console.log(url);
 
// fetching products
useEffect(() => {
  const source = axios.CancelToken.source();

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(url, {cancelToken: source.token});
      const products = response.data.results;
      //console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      if (axios.isCancel(error)) {
        dispatch({ type: GET_PRODUCTS_ERROR });
      } else {
        throw error;
      }
    }
  };

  fetchProducts()

  return () => {
    source.cancel();
  };
}, [url]);

/*
// fetching a single product
const fetchSingleProduct = async (url) => {
  console.log('begin');
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

  try {
    const response = await axios.get(url);
    //console.log(response);
    const singleProduct = response.data.results;
    //const singleProduct = mockdata[0].data.results;
    //console.log(singleProduct);

    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });

  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  }
}
/*
  useEffect(() => {
    fetchProducts(url);
  }, [url])
  */

  return (
    <ProductsContext.Provider value={{...state }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}