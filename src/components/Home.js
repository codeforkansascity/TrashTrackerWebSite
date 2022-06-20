import React from 'react';
import Map from './Map';
import Datatable from './Datatable';
import './Home.css';

const Home = () => {
    return (
        <div className="home-main">
            <div className="home-header">
                <h1 className="home-main-title">Trash Tracker</h1>
                <div className="home-right-header">
                    <h2 className="home-help right-header-item">Help</h2> 
                    <button className="home-print-button right-header-item">Print</button>
                    <div className="home-profile right-header-item">
                        <h2 className="home-profile-username">ILikeTurtles123</h2>
                        <div className='home-profile-image'>(image)</div>
                    </div>
                </div>
            </div>
            < Map />
            <Datatable />
        </div>
    );
}

export default Home;