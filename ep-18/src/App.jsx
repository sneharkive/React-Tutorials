import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
