import React from 'react'
import Button from './Button'

const ErrorFallback = ({error, resetErrorBoundary}) => {
  return (
    <div className='w-screen h-screen flex flex-col  items-center justify-center'>
        <h1 className='text-2xl font-bold'>Somthing went wrong. 🤔</h1>
        <p className='text-gray-700 text-sm mb-4'>{error.message}</p>
        <Button onClick={resetErrorBoundary}>
            Try again
        </Button>
    </div>
  )
}

export default ErrorFallback
