import { 
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from '../utils/actions';

const filterReducer = (state, action) => {

  if (action.type === GET_CATEGORIES_BEGIN) {
    return {...state, categories_loading: true}
  }

  if (action.type === GET_CATEGORIES_SUCCESS) {
    return {...state, categories_loading: false, categories: action.payload}
  }

  if (action.type === GET_CATEGORIES_ERROR) {
    return {...state, products_loading: false, products_error: true}
  }



  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;