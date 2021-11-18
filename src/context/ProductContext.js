import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";
//import {useFetchData} from '../utils/hooks/useFetchData';
import { WZL_API } from "../utils/constants";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR
} from "../utils/actions";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.PRODUCTS_URL}`;
  console.log(url);

  // fetching products
  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        const products = response.data.results;
        //console.log(products);
        
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      } catch (error) {
        //console.log(axios.isCancel(error));
        if (axios.isCancel(error)) {
          //console.log('Request canceled', error.message);
          return;
        } 
        else {
          dispatch({ type: GET_PRODUCTS_ERROR });
          //throw error;
        }
      }
    };

    fetchProducts();

    return () => {
      //console.log('is cancelled');
      source.cancel();
    };
  }, [url]);

  
// fetching a single product
const fetchSingleProduct = async (url) => {
  const source = axios.CancelToken.source();
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

  try {
    const response = await axios.get(url, { cancelToken: source.token });
    const singleProduct = response.data.results;

    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });

  } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
        return;
      } 
      else {
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        //throw error;
      }
  }

  return () => {
    //console.log('is cancelled');
    source.cancel();
  };
  
}


  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
