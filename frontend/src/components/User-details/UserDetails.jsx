import React, { useState } from 'react';
import './userdetails.css'
const UserDetails = ({ details }) => {
  return (
    <div className="user-details-container">
      <h3>{details.username}</h3>
      <p>Email: {details.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    username: 'loggedInUser', // Replace with the actual username of the logged-in user
    email: 'user@example.com', // Replace with the actual email of the logged-in user
    // Add more user details as needed
  });

  const handleUserClick = () => {
    // You might want to toggle a modal or show/hide the user details here
  };

  return (
    <div className="user-profile-container">
      <div onClick={handleUserClick}>{userDetails.username}</div>
      {userDetails && <UserDetails details={userDetails} />}
    </div>
  );
};

export default UserProfile;
