// import React, { useState } from "react";
// import "./Profile.css";
// import DemographicDetailsForm from "./DemographicDetailsForm";

// const Profile = ({ userDetails, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState(userDetails);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     setProfileData(userDetails); // Reset to original data if canceled
//   };

//   const handleUpdate = (updatedDetails) => {
//     setProfileData(updatedDetails);
//     setIsEditing(false);
//     onUpdate(updatedDetails); // Notify parent component about the update
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2>Profile</h2>
//         <button className="activity-log-btn">Activity Log</button>
//       </div>
//       <div className="profile-content">
//         {isEditing ? (
//           <DemographicDetailsForm
//             setUserDetails={handleUpdate}
//             initialData={profileData}
//           />
//         ) : (
//           <>
//             <div className="profile-info">
//               <p className="profile-name">
//                 {profileData.initial} {profileData.firstName} {profileData.middleName} {profileData.lastName}, {profileData.gender}
//               </p>
//               <div className="profile-primary">Primary</div>
//             </div>
//             <div className="profile-details">
//               <div className="profile-row">
//                 <label>Name</label>
//                 <p>{profileData.initial} {profileData.firstName} {profileData.middleName} {profileData.lastName}</p>
//               </div>
//               <div className="profile-row">
//                 <label>Year of Birth</label>
//                 <p>{profileData.year}</p>
//               </div>
//               <div className="profile-row">
//                 <label>Gender</label>
//                 <p>{profileData.gender}</p>
//               </div>
//               <div className="profile-row">
//                 <label>Address</label>
//                 <p>{profileData.address}</p>
//               </div>
//               <div className="profile-row">
//                 <label>State Name</label>
//                 <p>{profileData.state}</p>
//               </div>
//               <div className="profile-row">
//                 <label>Mobile</label>
//                 <p>{profileData.mobileNo}</p>
//               </div>
//               <div className="profile-row">
//                 <label>Email</label>
//                 <p>{profileData.email}</p>
//               </div>
//             </div>
//             <div className="profile-actions">
//               <button className="edit-profile-btn" onClick={handleEditClick}>
//                 Edit Profile
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


























import React from "react";
import "./Profile.css";

const Profile = ({ userDetails }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <button className="activity-log-btn">Activity Log</button>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <p className="profile-name">
            {userDetails.initial} {userDetails.firstName} {userDetails.middleName} {userDetails.lastName}, {userDetails.gender}
          </p>
          <div className="profile-primary">Primary</div>
        </div>
        <div className="profile-details">
          <div className="profile-row">
            <label>Name</label>
            <p>{userDetails.initial} {userDetails.firstName} {userDetails.middleName} {userDetails.lastName}</p>
          </div>
          <div className="profile-row">
            <label>Year of Birth</label>
            <p>{userDetails.year}</p>
          </div>
          <div className="profile-row">
            <label>Gender</label>
            <p>{userDetails.gender}</p>
          </div>
          <div className="profile-row">
            <label>Address</label>
            <p>{userDetails.address}</p>
          </div>
          <div className="profile-row">
            <label>State Name</label>
            <p>{userDetails.state}</p>
          </div>
          <div className="profile-row">
            <label>Mobile</label>
            <p>{userDetails.mobileNo}</p>
          </div>
          <div className="profile-row">
            <label>Email</label>
            <p>{userDetails.email}</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;











// import React, { useState } from "react";
// import "./Profile.css";

// const Profile = (props) => {
//   // Initialize local state with props data
//   const [isEditing, setIsEditing] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     initial: "",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     gender: "",
//     year: "",
//     address: "",
//     state: "",
//     mobileNo: "",
//     email: "",
//     ...props.userDetails, // Merge any props passed to the component
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   // Toggle edit mode
//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//     // You can add additional logic here to persist changes, e.g., API calls
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2>Profile</h2>
//         <button className="activity-log-btn">Activity Log</button>
//       </div>

//       {isEditing ? (
//         <form className="profile-content" onSubmit={handleSubmit}>
//           <div className="profile-info">
//             <p className="profile-name">
//               <select
//                 name="initial"
//                 value={userDetails.initial}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Mr">Mr</option>
//                 <option value="Ms">Ms</option>
//                 <option value="Mrs">Mrs</option>
//               </select>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={userDetails.firstName}
//                 onChange={handleChange}
//                 required
//                 placeholder="First Name"
//               />
//               <input
//                 type="text"
//                 name="middleName"
//                 value={userDetails.middleName}
//                 onChange={handleChange}
//                 placeholder="Middle Name"
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={userDetails.lastName}
//                 onChange={handleChange}
//                 required
//                 placeholder="Last Name"
//               />
//               ,
//               <select
//                 name="gender"
//                 value={userDetails.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </p>
//             <div className="profile-primary">Primary</div>
//           </div>

//           <div className="profile-details">
//             <div className="profile-row">
//               <label>Year of Birth</label>
//               <input
//                 type="number"
//                 name="year"
//                 value={userDetails.year}
//                 onChange={handleChange}
//                 required
//                 min="1900"
//                 max={new Date().getFullYear()}
//               />
//             </div>
//             <div className="profile-row">
//               <label>Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={userDetails.address}
//                 onChange={handleChange}
//                 required
//                 placeholder="Address"
//               />
//             </div>
//             <div className="profile-row">
//               <label>State Name</label>
//               <select
//                 name="state"
//                 value={userDetails.state}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select State</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Haryana">Haryana</option>
//                 {/* Add other states as needed */}
//               </select>
//             </div>
//             <div className="profile-row">
//               <label>Mobile</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={userDetails.mobileNo}
//                 onChange={handleChange}
//                 required
//                 pattern="[0-9]{10}"
//               />
//             </div>
//             <div className="profile-row">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={userDetails.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//               />
//             </div>
//           </div>

//           <div className="profile-actions">
//             <button type="submit" className="save-profile-btn">
//               Save Profile
//             </button>
//             <button
//               type="button"
//               className="cancel-profile-btn"
//               onClick={toggleEdit}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="profile-content">
//           <div className="profile-info">
//             <p className="profile-name">
//               {userDetails.initial} {userDetails.firstName}{" "}
//               {userDetails.middleName} {userDetails.lastName}, {userDetails.gender}
//             </p>
//             <div className="profile-primary">Primary</div>
//           </div>

//           <div className="profile-details">
//             <div className="profile-row">
//               <label>Name</label>
//               <p>
//                 {userDetails.initial} {userDetails.firstName}{" "}
//                 {userDetails.middleName} {userDetails.lastName}
//               </p>
//             </div>
//             <div className="profile-row">
//               <label>Year of Birth</label>
//               <p>{userDetails.year}</p>
//             </div>
//             <div className="profile-row">
//               <label>Gender</label>
//               <p>{userDetails.gender}</p>
//             </div>
//             <div className="profile-row">
//               <label>Address</label>
//               <p>{userDetails.address}</p>
//             </div>
//             <div className="profile-row">
//               <label>State Name</label>
//               <p>{userDetails.state}</p>
//             </div>
//             <div className="profile-row">
//               <label>Mobile</label>
//               <p>{userDetails.mobileNo}</p>
//             </div>
//             <div className="profile-row">
//               <label>Email</label>
//               <p>{userDetails.email || "N/A"}</p>
//             </div>
//           </div>

//           <div className="profile-actions">
//             <button className="edit-profile-btn" onClick={toggleEdit}>
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
