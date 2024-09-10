import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <div className="icon hospital-icon"></div>
          <div className="stat-info">
            <h2>Number Of Live Hospitals</h2>
            <p>685</p>
            <small>Till Date</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon appointment-icon"></div>
          <div className="stat-info">
            <h2>Online Appointments Taken Today</h2>
            <p>1915</p>
            <small>Till Date</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon teleconsultation-icon"></div>
          <div className="stat-info">
            <h2>OPD Queue Number</h2>
            <p>94196</p>
            <small>Till Date</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon calendar-icon"></div>
          <div className="stat-info">
            <h2>Total Online Appointments</h2>
            <p>10063991</p>
            <small>Till Now</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
