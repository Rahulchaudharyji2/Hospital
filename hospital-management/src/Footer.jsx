import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" // Replace with your logo path
            alt="Government Logo"
            className="footer-logo"
          />
          <div className="footer-text">
            <p>Government of National Capital Territory of Delhi</p>
            <p>राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</p>
          </div>
        </div>
        <div className="footer-center">
          <div className="center">
            <p>&copy; 2024 by DSEU Okhla Campus 2, Delhi</p>
          </div>
        </div>
        <div className="footer-right">
          <img
            src="https://imgs.search.brave.com/m_wXt9BPiPKgZiUVOuA-L-TO-9SoPAMNwOW9zkFhTW8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85NS9EaWdpdGFs/X0luZGlhX2xvZ28u/c3ZnLzUxMnB4LURp/Z2l0YWxfSW5kaWFf/bG9nby5zdmcucG5n" // Replace with the Digital India logo path
            alt="Digital India"
            className="footer-logo"
          />
          {/* <p>DIGITAL INDIA <br /> Power to empower</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
