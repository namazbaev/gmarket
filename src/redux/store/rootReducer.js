import { combineReducers } from 'redux';
import { asideReducer, productReducer } from 'redux/modules';

export default combineReducers({ asideReducer, productReducer })