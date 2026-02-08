import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CompoA from "./components/CompoA";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
// import ProductCard from './components/ProductCard'

function App() {
  const [username, setUsername] = useState("Sneha");
  return (
    <UserContext.Provider value={{ name: username, setName: setUsername }}>
      <Navbar />
      <CompoA />
      <Outlet />
    </UserContext.Provider >
  );
}

export default App;
