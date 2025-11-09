import React from "react";

function UserProfile({ userData }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
