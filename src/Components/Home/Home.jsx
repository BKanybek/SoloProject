import React from 'react';
import Footer from '../Footer/Footer';
// import './Home.css'
// import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import MainImg from '../Images/istockphoto-1312765142-170667a.jpg'

const Home = () => {
    return (
        <div>
            <div className='main-page' style={{ position: 'relative', width: '100%', height: 'auto'}}>
                <img style={{  display: 'flex', justifyContent: 'start', position: 'relative', width:'100%', height: 'auto', }}  src={MainImg} alt="1" />
                <div style={{position: 'absolute', top: '0', left: '100px'}}>
                    <span style={{fontSize: '50px'}}>Labaratory</span>
                </div>
            </div>
            <div style={{background: 'green', width: '100%', height: '100vh'}}>
                <div className="container" style={{backgroundColor: 'white', height: '50%'}}>HELLO</div>
                HELLO2
            </div>
            <div style={{backgroundColor: 'black', width: '100%', height: '100vh'}}>
                HELLO4 Специалисты
            </div>
            <Services/>
            <div style={{backgroundColor: 'black', width: '100%', height: '100vh'}}>
                HELLO4 Отзывы
            </div>
            <Footer/>
        </div>
    );
};

export default Home;