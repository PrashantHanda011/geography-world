import React from 'react';
import CountryList from '../Countries/CountryList';
import Navbar from '../Navbar/Navbar';
import './home.css'
const Home = () => {

    return (
        <>

        <Navbar/>
        <div className="home">
        <CountryList/>
        
        </div>
        </>
    );
};

export default Home;