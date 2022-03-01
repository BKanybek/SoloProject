import React from 'react';
// import PrevIcon from '../../Image/prevIcon.svg';
// import NextIcon from '../../Image/nextIcon.svg';
// import PenIcon from '../../Image/penIcon.svg'


const Services = () => {
    return (
        <div className='main-page-body'>
            <div className="container">
                <h2>УСЛУГИ</h2>

                <div className="card-list">
                    
                    <div className='card'>
                        HTML
                    </div>
                    <div className='card'>
                        Css
                    </div>
                    <div className='card'>
                        Bootstrap
                    </div>
                    <div className='card'>
                        Основы JS
                    </div>
                    <div className='card'>
                        Native JS
                    </div>
                    <div className='card'>
                        DOM
                    </div>
                    <div className='card'>
                        React
                    </div>
                    <div className='card'>
                        React Hooks
                    </div>
                    <div className='card'>
                        JQuery
                    </div>
                </div>
                {/* <div className="pagination-block">
                    <div><img src={PrevIcon}/></div>
                    <div>0</div>
                    <div> <img src={NextIcon}/></div>
                </div>
                <div className="edit-block">
                    <a href="#"> <img src={PenIcon}/>Редактировать</a>
                </div> */}
            </div>
        </div>
    );
};

export default Services;