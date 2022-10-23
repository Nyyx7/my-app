import "./footerStyle.css";
import React from "react";  
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
            <div className="location">
                <FaHome size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>Tetouan Rue Meknes </p>
                    <p>Maroc  </p>
                </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
                +123 456 789</h4>
                </div>
                <div className="gmail">
                    <h4>
                <FaMailBulk size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
                simo.med62@gmail.com</h4>
                </div>
            
            </div>
            <div className="right">
                <h4>about teh company</h4>
                <p>this is me Nyyx.STUDENT ENGIGEER IN MY last year lookin for an intership
                    and new challenges
                </p>
                <div className="social">
                <FaFacebook size={20} style={{ color:"#fff",marginRight:"1rem"}}/>
                
               <FaLinkedin size={20} style={{ color:"#fff",marginRight:"1rem"}}/>
                
                <FaInstagram size={20} style={{ color:"#fff",marginRight:"1rem"}}/>
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default footer