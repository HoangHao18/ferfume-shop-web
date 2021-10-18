import React from 'react';

import { Route, Switch } from 'react-router';

import Home from '../Guest/Home';
import User from './User/UserList';
// import Product from '../../page/Admin/Product';
// import Category from '../../page/Admin/Category'
// import AddCategory from './AddNew/Category/AddCategory';
// import EditCategory from './Edit/Category/EditCategory';

import AddUser from './User/AddUser/AddUser';
// import EditUser from './Edit/User/EditUser';
// import Manufacture from '../../page/Admin/Manufacture';
// import AddManufacture from './AddNew/Manufacture/AddManufacture';
// import EditManufacture from './Edit/Manufacture/EditManufacture';
// import AddProduct from './AddNew/Product/AddProduct';
// import EditProduct from './Edit/Product/EditProduct';
// import Order from '../../page/Admin/Order';
//import EditOrder from './Edit/Order/EditOrder';


 function Routes(){
    return(
        <Switch>
            <Route  exact path='/' component={Home}/>
            <Route  exact path='/admin' component={User}/>
            <Route  path='/admin/addUser' component={AddUser}/>
            {/*<Route path='/admin/editUser/:id' component={EditUser}/>
           
            <Route exact path='/admin/products' component={Product}/>
            <Route path='/admin/products/addProduct' component={AddProduct}/>
            <Route path='/admin/products/editProduct/:id' component={EditProduct}/>

            <Route exact path='/admin/categories' component={Category}/>
            <Route path='/admin/categories/addCategory' component={AddCategory}/>
            <Route path='/admin/categories/editCategory/:id' component={EditCategory}/>

            <Route exact path='/admin/manufactures' component={Manufacture}/>
            <Route path='/admin/manufactures/addManufacture' component={AddManufacture}/>
            <Route path='/admin/manufactures/editManufacture/:id' component={EditManufacture}/>

            <Route exact path='/admin/orders' component={Order}/>
            <Route path='/admin/orders/editOrder/:id' component={EditOrder}/> */}
        </Switch>
    )
}

export default Routes;
