import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddObject from './Components/Admin/AddObject';
import EditObject from './Components/Admin/EditObject';
// import Login from './Components/Auth/Login/Login';
// import Register from './Components/Auth/Register/Register';
// import Cart from './Components/Cart/Cart';
// import Cosmograph from './Components/Cosmograph/Cosmograph';
// import MyNavbar from './Components/Header/MyNavbar';
// import Home from './Components/Home/Home';
// import Payment from './Components/Payment/Payment';
import DetailObject from './Components/Admin/DetailObject';
import ListObject from './Components/Admin/ListObject';
// import ProductStar from './Components/ProductStar/ProductStar';
import ProductsContextProvider from './Contexts/ProductsContext';



const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
            <MyNavbar />
                <Routes>
                    <Route path='/list' element={<ListObject/>}/>
                    <Route path='/add' element={<AddObject/>} />
                    {/* <Route path='/' element={<Home/>} /> */}
                    <Route path='list/edit/:id' element={<EditObject/>} />
                    <Route path='/detail/:id' element={<DetailObject/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/cosmograph' element={<Cosmograph/>}/>         
                    <Route path='/pay' element={<Payment/>} />
                    <Route path='/star' element={<ProductStar/>} />
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;