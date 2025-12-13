import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function ProfileDetails() {
  return <div><h3>Profile Details</h3><p>Here are your profile details.</p></div>;
}

function ProfileSettings() {
  return <div><h3>Profile Settings</h3><p>Manage your settings here.</p></div>;
}

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes rendered here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet can also be used if defining nested routes in parent App.jsx */}
      <Outlet />
    </div>
  );
}

export default Profile;
