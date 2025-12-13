import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
