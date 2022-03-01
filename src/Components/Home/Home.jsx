import React from 'react';
import Footer from '../Footer/Footer';
// import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
// import MainImg from '../Images/cimage.jpg'

const Home = () => {
    return (
        <div>
            <div className='main-page'>
                HELLO1
            </div>
            <div style={{background: 'green', width: '100%', height: '100vh'}}>
                <div className="container" style={{backgroundColor: 'white', height: '50%'}}>HELLO</div>
                HELLO2
            </div>
            <div style={{backgroundColor: 'blue', width: '100%', height: '100vh'}}>
                <h2 className='services'>УСЛУГИ</h2>
                HELLO3 
            </div>
            <div style={{backgroundColor: 'black', width: '100%', height: '100vh'}}>
                HELLO4 Специалисты
            </div>
            <div style={{backgroundColor: 'black', width: '100%', height: '100vh'}}>
                HELLO4 Отзывы
            </div>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;