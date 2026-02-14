import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
const AppLayout = () => {
  return (
    <div className='h-screen bg-gray-900 grid grid-rows-[3rem_1fr] grid-cols-[auto_1fr] gap-0.5 font-["Calistoga"] text-purple-100 
'>
        <Header/>
        <SideBar/>
        <main className='overflow-scroll py-5 px-6 bg-gray-900'>
          <div className=' max-w-400 my-0 mx-auto flex flex-col gap-5'>
        <Outlet/>
          </div>
        </main>
    </div>
  )
}

export default AppLayout
