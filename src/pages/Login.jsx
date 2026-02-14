import React from 'react'
import LoginForm from '../features/authentication/LoginForm'
import Logo from '../ui/Logo'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center gap-5'>
      <Logo/>
      <h3 className='text-3xl text-gray-100 '>Log in to your account</h3>
      <LoginForm/>
    </div>
  )
}

export default Login
