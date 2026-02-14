import React from 'react'

const FormRow = ({ label, error, children }) => {
    const id = children?.props.id;
    return (
        <div className='formRow'>
            {
            label &&
            <label
            htmlFor={id}
            className='text-md'
            >
            {label}
            </label>
            }
            {children}
            {error && <p className='text-red-500 text-md p-1  '>{error}</p>}
        </div>
    )
}

export default FormRow
