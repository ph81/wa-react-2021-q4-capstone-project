import React, { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/filterReducer";
import { WZL_API } from "../utils/constants";
import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "../utils/actions";

const initialState = {
  categories_loading: false,
  categories_error: false,
  categories: [],
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.CATEGORIES_URL}`;

  // fetching categories
  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchCategories = async () => {
      dispatch({ type: GET_CATEGORIES_BEGIN });
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        const categories = response.data.results;
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
      } catch (error) {
        if (axios.isCancel(error)) {
          dispatch({ type: GET_CATEGORIES_ERROR });
        } else {
          throw error;
        }
      }
    };

    fetchCategories();

    return () => {
      source.cancel();
    };
  }, [url]);

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
