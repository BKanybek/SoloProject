import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import ObjectAdd from './Components/Admin/AddObject/ObjectAdd';
import DetailPage from './Components/Admin/DetailObject/DetailObject';
import EditPage from './Components/Admin/EditObject/EditObject';
import ListPage from './Components/Admin/ListObject/ListObject';
import { store } from './Components/Admin/Store';
import Home from './Components/Home/Home';
// import NavBar from './Components/NavBar/NavBar';

const MyRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/> 
                    <Route path='/create' element={<ObjectAdd/>}/> 
                    <Route path='/list' element={<ListPage/>}/>
                    <Route path='/detail/:id' element={<DetailPage/>}/>
                    <Route path='/edit/:id' element={<EditPage/>}/>
                </Routes>
            </BrowserRouter>          
        </Provider>
    );
};

export default MyRoutes;