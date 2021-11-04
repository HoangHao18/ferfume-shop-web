import React from 'react';

import { Route, Switch } from 'react-router';

import Home from '../Guest/Home';
import User from './User/UserList';
// import Product from '../../page/Admin/Product';
 import Category from './Category/CategoryList';
 import AddCategory from './Category/AddCategory/AddCategory';
 import EditCategory from './Category/EditCategory/EditCategory';
// import EditCategory from './Edit/Category/EditCategory';

import AddUser from './User/AddUser/AddUser';
import Fragrance from './Fragrance/FragranceList';
import Manufacture from './Manufacture/ManufactureList';
import AddFragrance from './Fragrance/AddFragrance/AddFragrance';
import EditFragrance from './Fragrance/EditFragrance/EditFragrance';
import AddManufacture from './Manufacture/AddManufacture/AddManufacture';
import EditManufacture from './Manufacture/EditManufacture/EditManufacture';
import Product from './Product/ProductList';
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

            <Route exact path='/admin/categories' component={Category}/>
            <Route path='/admin/categories/new-category' component={AddCategory}/>
            <Route path='/admin/categories/:id' component={EditCategory}/>

            <Route exact path='/admin/fragrances' component={Fragrance}/>
            <Route path='/admin/fragrances/new-fragrance' component={AddFragrance}/>
            <Route path='/admin/fragrances/:id' component={EditFragrance}/>

            <Route exact path='/admin/manufactures' component={Manufacture}/>
            <Route path='/admin/manufactures/new-manufacture' component={AddManufacture}/>
            <Route path='/admin/manufactures/:id' component={EditManufacture}/>

            <Route exact path='/admin/products' component={Product}/>


            {/*<Route path='/admin/editUser/:id' component={EditUser}/>
           
            
            <Route path='/admin/products/addProduct' component={AddProduct}/>
            <Route path='/admin/products/editProduct/:id' component={EditProduct}/>
        
            <Route exact path='/admin/orders' component={Order}/>
            <Route path='/admin/orders/editOrder/:id' component={EditOrder}/> */}
            
        </Switch>
    )
}

export default Routes;
