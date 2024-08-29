import React, { useState } from 'react';
import './Login.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ORSLogin() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleMobileNumberSubmit = (e) => {
    e.preventDefault();
    // Call API to send OTP to mobile number
    // For demonstration purposes, we'll just set showOtpInput to true
    setShowOtpInput(true);
    toast.info('OTP sent to your mobile number!');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Call API to verify OTP
    // For demonstration purposes, we'll just alert a success message
    toast.success('OTP verified successfully!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="ors-login-container">
      <ToastContainer />
      <div className="ors-login-box">
        <div className="logo-part">
          <div className="logo">
            <img id='emblem' src="https://delhi.gov.in/sites/default/files/emblem-dark.png" alt="National_Emblem" />
            {/* <h1>eHospital</h1> */}
          </div>
          <div className="logo-text">
            <h2>Government of National Capital Territory of Delhi</h2>
            <h3>राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</h3>
          </div>
        </div>
        <form onSubmit={handleMobileNumberSubmit}>
          <div className="ors-input-group">
            <label>Mobile Number *</label>
            <input type="text" name="mobile" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter Mobile Number" required />
          </div>
          {showOtpInput && (
            <div className="ors-input-group">
              <label>OTP *</label>
              <input type="text" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
            </div>
          )}
          {showOtpInput && (
            <button type="submit" className="ors-login-button" onClick={handleOtpSubmit}>
              Verify OTP
            </button>
          )}
          {!showOtpInput && (
            <button type="submit" className="ors-login-button">
              Get OTP
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ORSLogin;