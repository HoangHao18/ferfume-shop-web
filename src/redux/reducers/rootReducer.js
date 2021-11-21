import { combineReducers } from 'redux';
import authReducers from './authReducer';

import categoryReducers from './categoryReducer';
import employeeReducers from './employeeReducer';
import fragranceReducers from './fragranceReducer';
import manufactureReducers from './manufactureReducer';
import productReducers from './productReducer';
import roleReducers from './roleReducer';

const rootReducer = combineReducers({
    // users: userReducers,
    auth: authReducers,
    categories: categoryReducers,
    fragrances: fragranceReducers,
    manufactures: manufactureReducers,
    products: productReducers,
    employees: employeeReducers,
    roles: roleReducers
    // orders: orderReducers
})

export default rootReducer;