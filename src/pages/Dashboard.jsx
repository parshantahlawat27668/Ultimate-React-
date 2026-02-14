import React from 'react'
import DashboardLayout from '../features/dashboard/DashboardLayout'
import DashboardFilter from '../features/dashboard/DashboardFilter'

const Dashboard = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='text-2xl  py-2'>Dashboard</h2>
        <DashboardFilter/>
        </div>
        <DashboardLayout/>
    </>
  )
}

export default Dashboard
