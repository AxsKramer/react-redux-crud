import {combineReducers} from 'redux';
import alertReducer from './alertReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  products: productsReducer,
  alert: alertReducer
});