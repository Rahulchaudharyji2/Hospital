import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <div className="login-container">
            <button className="login-btn">Login/Sign in</button>
          </div>

          <div className="logo-container">
            <div className="left-section">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png"
                alt="India Logo"
                className="logo"
              />
              <div className="title">
                <h1 className='H1'>eHospital</h1>
                <p className='text-eng'>Government of National Capital Territory of Delhi</p>
                <p>राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</p>
              </div>
            </div>
            <div className="right-section">
              <img
                src="https://health.delhi.gov.in/sites/default/files/PAO/header-sublogos/lok-sabha-election1.jpg"
                alt="Election Logo"
                className="election-logo"
              />
              <img
                src="https://delhi.gov.in/sites/default/files/sub-logos/amblem_1.png"
                alt="Delhi Sarkar"
                className="delhi-logo"
              />
            </div>  
          </div>
        </div>

        <div className="navbar-footer">
          {Array(9).fill("Help").map((text, index) => (
            <a key={index} href="#" className="footer-link">{text}</a>
          ))}
          <div className="search-container">
            <input type="text" placeholder="search" className="search-input" />
          </div>
        </div>

      </header>
    </div>
  );
};

export default Navbar;
