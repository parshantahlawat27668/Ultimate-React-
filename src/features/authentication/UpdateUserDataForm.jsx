import React, { useState } from 'react'
import FormRow from '../../ui/FormRow'
import { useUser } from './useUser';
import Button from '../../ui/Button';
import { useUpdateUser } from './useUpdateUser';

const UpdateUserDataForm = () => {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (fullName) updateUser({ fullName, avatar });
    setAvatar(null);

  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }
  return (
    <>
      <h2 className='text-lg mt-3 '>Update user data</h2>
      <form className='bg-gray-800 py-7 px-7 rounded-md flex flex-col gap-5' onSubmit={handleSubmit}>
        <FormRow label="Email address">
          <input className='inputBase' value={email} disabled />
        </FormRow>

        <FormRow label="Full name">

          <input
            value={fullName}
            className='inputBase'
            onChange={(e) => setFullName(e.target.value)}
            id='fullName'
            type="text" />
        </FormRow>

        <FormRow label="Cabin Image">
          <input
            // disabled={}
            id="avatarImage"
            accept="image/*"
            type='file'
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
            className=' rounded-md  text-sm text-purple-700  file:text-sm border-purple-600  file:bg-purple-600 file:py-2 file:px-3 file:rounded-md file:text-white  file:transform file:-translate-x-1 cursor-pointer file:cursor-pointer hover:file:bg-purple-700'
          />
        </FormRow>

        <div className='flex items-center justify-end gap-2'>
          <Button varient='secondary' type='reset' disabled={isUpdating} onClick={handleCancel}>Cancel</Button>
          <Button type='submit'>Updata account</Button>
        </div>
      </form>
    </>
  )
}

export default UpdateUserDataForm
