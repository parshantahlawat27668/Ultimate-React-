import React from 'react'
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm'
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm'

const Account = () => {
  return (
    <div className='overflow-auto flex flex-col gap-3 w-full'>
      <div className='flex flex-row items-center justify-between w-full'>
        <h2 className='text-2xl  py-2'>Update your account</h2>
        </div>

        <div className='flex flex-col gap-2'>
          <UpdateUserDataForm/>
          <UpdatePasswordForm/>
        </div>


      </div>
      )
}

      export default Account
