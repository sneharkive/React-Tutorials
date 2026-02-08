import React from 'react'
import CompoC from './CompoC'

// const CompoB = ({ user }) => {
//   return (
//     <div>
//       <h1>CompoB</h1>
//       <CompoC user={user} />
//     </div>
//   )
// }


const CompoB = () => {
  return (
    <div>
      <h1>CompoB</h1>
      <CompoC />
    </div>
  )
}

export default CompoB