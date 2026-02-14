import React from 'react'
import Logout from '../features/authentication/Logout'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className='bg-gray-800 flex items-center justify-between px-7'>
      <HeaderMenu/>
    </header>
  )
}

export default Header
