import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [modeName, setModeName] = React.useState("Light");
  return (
    <div className='flex justify-between p-4 bg-zinc-700 border-b-2'>
      <Link to="/">LOGO</Link>
      <ul className='flex gap-4'>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/github">GITHUB</Link></li>
      </ul>
      
      {/* I will change itemNum value according to how many products add to cart */}
      <ul className='flex gap-4'>
        <li>CART</li> 
        <li><button onClick={() => setModeName(modeName === "Light" ? "Dark" : "Light")}>{modeName}</button></li>
      </ul>
    </div>
  )
}
export default Navbar;