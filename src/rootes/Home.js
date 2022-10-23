import React from 'react';
import "../components/HerolmgStyles.css";
import Navbar from "../components/Navbar";
import HeroImg from "../components/Herolmg";
import Footer from "../components/Footer";
 

const Home = () => {
  return (
    <div >
        <Navbar/>
        <HeroImg />
        <Footer />
    </div>
  )
}

export default Home;