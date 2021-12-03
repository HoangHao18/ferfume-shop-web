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
import AddProduct from './Product/AddProduct/AddProduct';
import EditProduct from './Product/EditProduct/EditProduct';
import Employee from './Employee/EmployeeList';
import AddEmployee from './Employee/AddEmployee/AddEmployee';
import EditEmployee from './Employee/EditEmployee/EditEmployee';
import Customer from './Customer/CustomerList';
import ImportNote from './ImportNote/ImportNoteList';
import ImportNoteDetail from './ImportNote/ImportNoteDetail/ImportNoteDetail';
import EditImportNote from './ImportNote/EditImportNote/EditImportNote';
import AddImportNote from './ImportNote/AddImportNote/AddImportNote';

 function Routes(){
    return(
        <Switch>
            <Route  exact path='/' component={Home}/>
            {/* <Route  exact path='/admin' component={User}/>
            <Route  path='/admin/addUser' component={AddUser}/> */}

            <Route  exact path='/admin' component={Customer}/>

            <Route exact path='/admin/employees' component={Employee}/>
            <Route path='/admin/employees/new-employee' component={AddEmployee}/>
            <Route path='/admin/employees/:id' component={EditEmployee}/>

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
            <Route path='/admin/products/new-product' component={AddProduct}/>
            <Route path='/admin/products/:id' component={EditProduct}/>

            <Route exact path='/admin/import-note' component={ImportNote}/>
            <Route exact path='/admin/import-note/new-import-note' component={AddImportNote}/>
            <Route exact path='/admin/import-note/detail/:id' component={ImportNoteDetail}/>
            <Route exact path='/admin/import-note/:id' component={EditImportNote}/>


            {/*<Route path='/admin/editUser/:id' component={EditUser}/>
        
            <Route exact path='/admin/orders' component={Order}/>
            <Route path='/admin/orders/editOrder/:id' component={EditOrder}/> */}
            
        </Switch>
    )
}

export default Routes;
