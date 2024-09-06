// import React, { useState } from 'react';
// import './Appointments.css';

// const Appointments = () => {
//   const [activeTab, setActiveTab] = useState('appointment');

//   return (
//     <div className="container">
//       <div className="tabs">
//         <button
//           className={activeTab === 'appointment' ? 'active' : ''}
//           onClick={() => setActiveTab('appointment')}
//         >
//           Appointment
//         </button>
//         <button
//           className={activeTab === 'e-opd' ? 'active' : ''}
//           onClick={() => setActiveTab('e-opd')}
//         >
//           e-OPD Card
//         </button>
//         <button
//           className={activeTab === 'reports' ? 'active' : ''}
//           onClick={() => setActiveTab('reports')}
//         >
//           Reports
//         </button>
//       </div>

//       <div className="content">
//         {activeTab === 'appointment' && (
//           <div className="no-appointments">
//             <p>No appointments found</p>
//           </div>
//         )}

//         {/* Additional content can be placed here for other tabs */}
//       </div>

//       <div className="appointment-button">
//         <button className="add-appointment-btn">+ Appointment</button>
//       </div>
//     </div>
//   );
// };

// export default Appointments;







// import React, { useState } from 'react';
// import './Appointments.css';
// import Modal from './Model';

// const Appointments = ({ users }) => {
//   // State to keep track of the active tab
//   const [activeTab, setActiveTab] = useState('appointment');

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   // Function to handle opening the modal
//   const openModal = () => setIsModalVisible(true);

//   // Function to handle closing the modal
//   const closeModal = () => setIsModalVisible(false);

//   const handleTabChange = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="container">
//       <div className="tabs">
//         <button 
//           className={activeTab === 'appointment' ? 'active' : ''} 
//           onClick={() => handleTabChange('appointment')}
//         >
//           Appointment
//         </button>
//         <button 
//           className={activeTab === 'e-opd' ? 'active' : ''} 
//           onClick={() => handleTabChange('e-opd')}
//         >
//           e-OPD Card
//         </button>
//         <button 
//           className={activeTab === 'reports' ? 'active' : ''} 
//           onClick={() => handleTabChange('reports')}
//         >
//           Reports
//         </button>
//       </div>

//       <div className="content">
//         {activeTab === 'appointment' && (
//           users && users.length > 0 ? (
//             <div className="user-list">
//               {users.map((user, index) => (
//                 <div className="user-card" key={index}>
//                   <p className="user-name">
//                     {user.initial} {user.firstName} {user.middleName} {user.lastName}, {user.gender}
//                   </p>
//                   <div className="user-details">
//                     <p><strong>Name:</strong> {user.initial} {user.firstName} {user.middleName} {user.lastName}</p>
//                     <p><strong>Year of Birth:</strong> {user.year}</p>
//                     <p><strong>Gender:</strong> {user.gender}</p>
//                     <p><strong>Address:</strong> {user.address}</p>
//                     <p><strong>State:</strong> {user.state}</p>
//                     <p><strong>Mobile:</strong> {user.mobileNo}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="no-appointments">
//               <p>No appointments found</p>
//             </div>
//           )
//         )}

//         <div className="appointment-button">
//           <button className="add-appointment-btn" onClick={openModal}>+ Appointment</button>
//         </div>

//         {/* Modal for adding appointments */}
//         <Modal isVisible={isModalVisible} onClose={closeModal} users={users} />

//         {activeTab === 'e-opd' && (
//           <div className="e-opd-content">
//             <p>This is where e-OPD Card details will be shown.</p>
//           </div>
//         )}

//         {activeTab === 'reports' && (
//           <div className="reports-content">
//             <p>This is where Reports will be shown.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Appointments;








import React, { useState } from 'react';
import './Appointments.css';
import Modal from './Modal'; // Assuming you have a Modal component

const Appointments = ({ users }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('appointment'); // Track the active tab

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  // Handle switching between tabs
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={activeTab === 'appointment' ? 'active' : ''}
          onClick={() => handleTabChange('appointment')}
        >
          Appointment
        </button>
        <button
          className={activeTab === 'e-opd' ? '' : ''}
          onClick={() => handleTabChange('e-opd')}
        >
          e-OPD Card
        </button>
        <button
          className={activeTab === 'reports' ? '' : ''}
          onClick={() => handleTabChange('reports')}
        >
          Reports
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        {activeTab === 'appointment' && (
          <>
            {users && users.length > 0 ? (
              <div className="user-list">
                {users.map((user, index) => (
                  <div className="user-card" key={index}>
                    <p className="user-name">
                      {user.initial} {user.firstName} {user.middleName} {user.lastName}, {user.gender}
                    </p>
                    <div className="user-details">
                      <p><strong>Name:</strong> {user.initial} {user.firstName} {user.middleName} {user.lastName}</p>
                      <p><strong>Year of Birth:</strong> {user.year}</p>
                      <p><strong>Gender:</strong> {user.gender}</p>
                      <p><strong>Address:</strong> {user.address}</p>
                      <p><strong>State:</strong> {user.state}</p>
                      <p><strong>Mobile:</strong> {user.mobileNo}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-appointments">
                <p>No appointments found</p>
              </div>
            )}

            {/* Appointment Button */}
            <div className="appointment-button">
              <button className="add-appointment-btn" onClick={openModal}>+ Appointment</button>
            </div>

            {/* Modal visible only when the appointment tab is active */}
            {isModalVisible && <Modal isVisible={isModalVisible} onClose={closeModal} users={users} />}
          </>
        )}

        {activeTab === 'e-opd' && (
          <div className="e-opd-content">
            {/* Content for e-OPD Card tab */}
            <p>e-OPD Card content goes here.</p>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="reports-content">
            {/* Content for Reports tab */}
            <p>Reports content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
