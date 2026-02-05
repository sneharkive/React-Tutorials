import React from 'react'

export const Navbar = ({ itemNum }) => {
  const [modeName, setModeName] = React.useState("Light");
  return (
    <div className='flex justify-between p-4 bg-zinc-700 border-b-2'>
      <h1>LOGO</h1>
      <ul className='flex gap-4'>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>
      
      {/* I will change itemNum value according to how many products add to cart */}
      <ul className='flex gap-4'>
        <li>CART {itemNum}</li> 
        <li><button onClick={() => setModeName(modeName === "Light" ? "Dark" : "Light")}>{modeName}</button></li>
      </ul>
    </div>
  )
}
