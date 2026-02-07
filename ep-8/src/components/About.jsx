// Episode - 12
// import React from 'react'
// import ProfileFun from './ProfileFun'
// import ProfileClass from './ProfileClass'

// const About = () => {
//   return (
//     <div className='p-8'>
//       <h1 className='text-2xl border-b-2 mb-4 px-2'>About Page</h1>
//       <ProfileFun name="Sneha Roy" address="Kolkata" profession="Software Engineer"/>
//       <ProfileClass name="Kakashi Hatake" address="Konoha" profession="Ninja"/>
//     </div>
//   )
// }

// Episode - 13

import React from "react";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent ctr is called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount is called");
  }

  render() {
    console.log("Parent Render is called");

    return (
      <div className="p-8">
        <h1 className="text-2xl border-b-2 mb-4 px-2">About Page</h1>
        <ProfileClass
          name="Kakashi Hatake"
          address="Konoha"
          profession="Ninja"
        />
        <ProfileClass
          name="Itachi Uchiha"
          address="Konoha"
          profession="Rough Ninja"
        />
      </div>
    );
  }
}

export default About;
