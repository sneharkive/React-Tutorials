import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Navbar = () => {
  const [modeName, setModeName] = React.useState("Light");
  const user = useContext(UserContext);
  return (
    <div className='flex justify-between p-4 bg-zinc-700 border-b-2'>
      <Link to="/">LOGO</Link>
      <ul className='flex gap-4'>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
      
      {/* I will change itemNum value according to how many products add to cart */}
      <ul className='flex gap-4'>
        <li>CART</li> 
        <li><button onClick={() => setModeName(modeName === "Light" ? "Dark" : "Light")}>{modeName}</button></li>
        <li className="text-white">{user.name}</li>
      </ul>
    </div>
  )
}
export default Navbar;