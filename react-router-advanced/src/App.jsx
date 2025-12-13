import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";

<Routes>
  <Route
    path="/profile/*"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />
  <Route path="/blog/:id" element={<BlogPost />} />
</Routes>
