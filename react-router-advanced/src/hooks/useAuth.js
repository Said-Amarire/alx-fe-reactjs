import { useState } from "react";

export function useAuth() {
  // Simulate authentication state; replace with real logic if available
  const [isLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  return { isLoggedIn };
}
