import React, { createContext, useEffect, useContext, useReducer } from 'react';
import axios from 'axios'
import reducer from '../reducers/filterReducer';
import { WZL_API } from '../utils/constants';
import dataFilter from '../mocks/es-mx/product-categories.json';
import { useProductsContext } from './ProductContext';
import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from '../utils/actions'


const initialState = {
  categories_loading: false,
  categories_error: false,
  categories: []
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const { products } = useProductsContext();
  //console.log('filter context');
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.CATEGORIES_URL}`;

  const fetchFilters = async (url) => {
  //const fetchFilters = () => {
    dispatch({ type: GET_CATEGORIES_BEGIN })
    
    try {
      const response = await axios.get(url);
      const categories = response.data;
      //const categories = dataFilter.results;
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories })
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_ERROR });
    }
  }

 
  useEffect(() => {
    fetchFilters(url);
  }, [url])

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};