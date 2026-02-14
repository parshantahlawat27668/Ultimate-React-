import React from 'react'
import Logo from './Logo'
import MainNav from './MainNav'
import Uploader from '../data/Uploader'

const SideBar = () => {
  return (
    <aside className='bg-gray-800 row-span-full px-6 pt-5 flex flex-col gap-7 '>
      <Logo/>
      <MainNav/>
      {/* <Uploader/> */}
    </aside>
  )
}

export default SideBar
