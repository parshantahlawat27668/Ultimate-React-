import React from 'react'
import Button from './Button'

const ConfirmDelete = ({resourceName, onConform, disable=false, closeModel}) => {
  return (
    <div className='w-140  flex flex-col  gap-2'>
        <h3 className='text-xl font-bold'>
           Delete {resourceName}
        </h3>

        <p className='text-lg font-semibold'>
            Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.
        </p>

        <div className='flex flex-row items-center justify-end gap-3'>
        <Button disabled={disable} onClick={closeModel}>
            Cancel
        </Button>

        <Button varient='delete' disabled={disable} onClick={onConform}>
            Delete
        </Button>        
        </div>
    </div>
  )
}

export default ConfirmDelete
