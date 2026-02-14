import React from 'react'
import SignupForm from '../features/authentication/SignupForm'

const Users = () => {
  return (
    <div className='overflow-auto flex flex-col gap-3 w-full'>
      <div className='flex flex-row items-center justify-between w-full'>
      <h2 className='text-2xl  py-2'>Create a new user</h2>
      </div>
      <SignupForm/>
    </div>
  )
}

export default Users
