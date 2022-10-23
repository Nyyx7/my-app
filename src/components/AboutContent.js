import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import pro1 from "../assets/téléchargé (3).jpg";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I ?</h1>
        <p> im A student engineer xx xxx xxx xxx xx </p>
        <Link    
        to="./Contacts">
            <button className="btn"> Contacts</button>
        </Link>

    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={pro1} className ="img"alt ="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={pro1} className ="img"alt ="true"/>
            </div>
        </div>

    </div>
  </div>
  
};

export default AboutContent;