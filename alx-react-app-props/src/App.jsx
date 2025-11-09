import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome to the User App</h1>
      <UserProfile userData={userData} />
    </div>
  );
}

export default App;
