import React from 'react'
import ProfileFun from './ProfileFun'
import ProfileClass from './ProfileClass'

const About = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl border-b-2 mb-4 px-2'>About Page</h1>
      <ProfileFun name="Sneha Roy" address="Kolkata" profession="Software Engineer"/>
      <ProfileClass name="Kakashi Hatake" address="Konoha" profession="Ninja"/>
    </div>
  )
}

export default About