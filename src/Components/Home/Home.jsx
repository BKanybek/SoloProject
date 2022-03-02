import React from 'react';
import Footer from '../Footer/Footer';
// import './Home.css'
// import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import MainImg from '../Images/istockphoto-1312765142-170667a.jpg'
import Slider from './Slider/Slider';
import './Home.css'
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner/>
            <div style={{background: 'green', width: '100%', height: '100vh'}}>
                <div className="container" style={{backgroundColor: 'white', height: '50%'}}>HELLO</div>
                HELLO2
            </div>
            <Services/>
            <Slider/>
            <div style={{backgroundColor: 'black', width: '100%', height: '100vh'}}>
                HELLO4 Отзывы
            </div>
            <Footer/>
        </div>
    );
};

export default Home;