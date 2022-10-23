import React from "react";
import "./HerolmgStyles.css";
import introImg from "../assets/intro.jpg";

import { Link } from "react-router-dom";
 
 const Herolmg = () => {
   return (
     <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p> I'm a network computer engineer</p>
            <h1>React dev</h1>
        
        <div>
       <Link tp="/project" className="btn"> projects</Link> 
       <Link tp="/contacts" className="btn btn-light"> contacts</Link> 
       </div></div></div>
   )
 }
 
 export default Herolmg;

