import { combineReducers } from 'redux';

import categoryReducers from './categoryReducer';
import fragranceReducers from './fragranceReducer';
import manufactureReducers from './manufactureReducer';

const rootReducer = combineReducers({
    // users: userReducers,
    // auth: authReducers,
    categories: categoryReducers,
    fragrances: fragranceReducers,
    manufactures: manufactureReducers,
    // products: productReducers,
    // orders: orderReducers
})

export default rootReducer;