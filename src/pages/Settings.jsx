import React from 'react'
import FormRow from '../ui/FormRow'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'

const Settings = () => {
  return (
    <div className=' flex flex-col gap-3  w-full h-full'>
      <div className=''>
      <h2 className='text-2xl  py-2'>Update hotel settings</h2>
      </div>
      <UpdateSettingsForm/>
    </div>
  )
}

export default Settings
