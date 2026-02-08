import React from 'react'
import CompoB from './CompoB'

const CompoA = () => {

  // const user = {
  //   name: "Levi",
  //   email: "levi@gmail.com"
  // }
  return (
    <div>
      <h1>CompoA</h1>
      {/* <CompoB user={user} /> */}
      <CompoB />
    </div>
  )
}

export default CompoA