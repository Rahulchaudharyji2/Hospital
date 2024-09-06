import React from 'react';
import './LoginSection.css';
// import ORSLogin from './LoginPage';

function LoginSection() {

  // const handleArrowClick = () => {
  //   ORSLogin.ORSLogin(); // Call the login function
  // };

  return (
    <div className="login-signup-container">
      <header className="login-signup-header">
        <div className="wrapper">
        <div className="logo">
          <img src="https://delhi.gov.in/sites/default/files/emblem-dark.png" alt="National Emblem" />
          <div className="header-text">
            <h3 className='hospitalName'>eHospital</h3>
            <h4 className='englishText'>Government of National Capital Territory of Delhi</h4>
            <h4 className='hindiText'>राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</h4>
          </div>
        </div>
        </div>
        <nav className="menu">
            <a href="#">Home Page</a>
        </nav>
      </header>

      <h2 className="main-title">LOGIN / SIGNUP</h2>

      <div className="card-container">
        <div className="card card1">
          <h3>Admin</h3>
          <div className="arrowWrapper">
            <a href="/admin" className="arrow">➔</a>
          </div>
        </div>
        <div className="card card2">
          <h3>Patient</h3>
          <div className="arrowWrapper">
            <a href="/admin" className="arrow" /*onClick={handleArrowClick}*/ >➔</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 by DSEU OKHLA CAMPUS 2</p>
        <a href="https://govt.of.nd.delhi">govt.of.nd.delhi</a>
      </footer>
    </div>
  );
}

export default LoginSection;