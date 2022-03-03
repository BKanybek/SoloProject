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
import NavBar from './Components/NavBar/NavBar';
import EquipmentAdd from './Components/Admin/Equipments/EquipmentAdd/EquipmentAdd';
import EquipmentContextProvider from './ProductContext/EquipmentContext';
import ListEquipments from './Components/Admin/Equipments/ListEquipment/ListEquipment';
import DetailEquipment from './Components/Admin/Equipments/DetailEquipment/DetailEquipment';
import EditEquipment from './Components/Admin/Equipments/EditEquipment/EditEquipment';




const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <EquipmentContextProvider>
                <BrowserRouter>
                <NavBar/>
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
                        <Route path='/add2' element={<EquipmentAdd/>} />
                        <Route path='/list2' element={<ListEquipments/>} />
                        <Route path='/equip/:id' element={<DetailEquipment/>} />
                        <Route path='/list2/equip/:id' element={<EditEquipment/>} />
                        {/* <Route path='/star' element={<ProductStar/>} /> */}
                    </Routes>
                </BrowserRouter>
             </EquipmentContextProvider>
        </ProductsContextProvider>
    );
};

export default MyRoutes;