import React, { useState } from 'react';
import './Modal.css';
import DemographicDetailsForm from './DemographicDetailsForm';

const Modal = ({ isVisible, onClose, users }) => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to handle form visibility

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!isFormVisible ? (
          <>
            <h2>Select to take appointment</h2>
            <div className="user-list">
              {users.map((user, index) => (
                <div key={index}>
                  <p>{user.initial} {user.firstName} {user.lastName}</p>
                  <p>{user.gender}</p>
                </div>
              ))}
            </div>
            <button className="add-member-btn" onClick={openForm}>+ Add Member</button>
          </>
        ) : (
          <DemographicDetailsForm closeForm={closeForm} />
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
