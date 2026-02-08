import React from 'react'

// const CompoC = ({ user }) => {
//   return (
//     <div>
//       <h1>CompoC</h1>
//       <div className='bg-white w-48 text-black p-2'>
//         <p>Name: {user.name}</p>
//         <p>Email: {user.email}</p>
//       </div>
//     </div>
//   )
// }


import { useContext } from "react";
import UserContext from "../utils/UserContext";

const CompoC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>CompoC</h1>
      <div className='bg-white w-48 text-black p-2'>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  )
}

export default CompoC