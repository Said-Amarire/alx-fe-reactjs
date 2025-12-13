import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Element, isAuthenticated }) {
  return isAuthenticated ? <Element /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
