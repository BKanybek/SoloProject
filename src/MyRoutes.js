import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './Components/Payment/Payment';
// import ProductStar from './Components/ProductStar/ProductStar';
import ProductsContextProvider from './ProductContext/ProductContext';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Cart from './Components/Cart/Cart';
import AddObject from './Components/Admin/AddObject/AddObject';
import EditObject from './Components/Admin/EditObject/EditObject';
import DetailObject from './Components/Admin/DetailObject/DetailObject';
import ListObject from './Components/Admin/ListObject/ListObject';
import Home from './Components/Home/Home';




const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/list' element={<ListObject/>}/>
                    <Route path='/add' element={<AddObject/>} />
                    <Route path='/' element={<Home/>} />
                    <Route path='list/edit/:id' element={<EditObject/>} />
                    <Route path='/detail/:id' element={<DetailObject/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />       
                    <Route path='/pay' element={<Payment/>} />
                    {/* <Route path='/star' element={<ProductStar/>} /> */}
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;