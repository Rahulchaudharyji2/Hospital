import React, { useState, useEffect } from 'react';
import './DemographicDetailsForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DemographicDetailsForm({ setUserDetails }) {
  const [formData, setFormData] = useState({
    initial: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    relation: '',
    guardian: '',
    mobileNo: '',
    email: '',
    address: '',
    country: 'India',
    state: '',
    district: '',
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isFormValid =
      formData.initial &&
      formData.firstName &&
      formData.gender &&
      formData.day &&
      formData.month &&
      formData.year &&
      formData.mobileNo &&
      formData.email &&
      formData.address &&
      formData.state &&
      formData.district;

    setFormValid(isFormValid);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      setUserDetails({
        initial: formData.initial,
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        gender: formData.gender,
        year: formData.year,
        address: formData.address,
        state: formData.state,
        mobileNo: formData.mobileNo,
        email: formData.email,
      });
      toast.success('Form submitted successfully!');
    } else {
      toast.error('Please fill all required fields.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Demographic Details</h2>
        <button className="close-button">&times;</button>
      </div>
      <form className="form-flex" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Initial *</label>
          <select name="initial" value={formData.initial} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>
        </div>
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            placeholder="Enter Middle Name"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender *</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth (Day) *</label>
          <select name="day" value={formData.day} onChange={handleChange} required>
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Month *</label>
          <select name="month" value={formData.month} onChange={handleChange} required>
            <option value="">Month</option>
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Year *</label>
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={2024 - i} value={2024 - i}>
                {2024 - i}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Relation</label>
          <select name="relation" value={formData.relation} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Son">Son</option>
            <option value="Daughter">Daughter</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Guardian</label>
          <input
            type="text"
            name="guardian"
            placeholder="Guardian Name"
            value={formData.guardian}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile No *</label>
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address *</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country *</label>
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="India">India</option>
          </select>
        </div>
        <div className="form-group">
          <label>State *</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Delhi">Delhi</option>
            {/* Other states */}
          </select>
        </div>
        <div className="form-group">
          <label>District *</label>
          <select name="district" value={formData.district} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Central Delhi">Central Delhi</option>
            <option value="East Delhi">East Delhi</option>
            <option value="New Delhi">New Delhi</option>
            <option value="North Delhi">North Delhi</option>
            <option value="North East Delhi">North East Delhi</option>
            <option value="North West Delhi">North West Delhi</option>
            <option value="Shahdara">Shahdara</option>
            <option value="South Delhi">South Delhi</option>
            <option value="South East Delhi">South East Delhi</option>
            <option value="South West Delhi">South West Delhi</option>
            <option value="West Delhi">West Delhi</option>
          </select>
        </div>
        <div className="form-submit-group">
          <button type="submit" className="submit-button" disabled={!formValid}>
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default DemographicDetailsForm;
