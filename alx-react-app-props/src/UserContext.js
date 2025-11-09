// src/UserContext.js
import { createContext } from "react";

const UserContext = createContext({
  name: "Jane Doe",
  email: "jane.doe@example.com"
});

export default UserContext;
