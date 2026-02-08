import { createContext } from "react";

const UserContext = createContext({
  name: "Levi",
  email: "levi@gmail.com"
});

export default UserContext;