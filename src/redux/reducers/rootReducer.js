import { combineReducers } from 'redux';

import categoryReducers from './categoryReducer';
import fragranceReducers from './fragranceReducer';
import manufactureReducers from './manufactureReducer';
import productReducers from './productReducer';

const rootReducer = combineReducers({
    // users: userReducers,
    // auth: authReducers,
    categories: categoryReducers,
    fragrances: fragranceReducers,
    manufactures: manufactureReducers,
    products: productReducers,
    // orders: orderReducers
})

export default rootReducer;