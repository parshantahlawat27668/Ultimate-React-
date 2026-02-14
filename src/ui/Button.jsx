import React from 'react'

const BASE_CLASSES = "py-1.5 px-3 rounded-md cursor-pointer text-sm  w-fit outline-none";


const VARIANTS = {
      delete: "bg-red-500 hover:bg-red-700 text-white",
      primary: "bg-purple-600 hover:bg-purple-900 py-2 text-white ",
      secondary:"bg-none border border-gray-500 text-gray-900 backdrop-filter-sm backdrop-brightness-85 hover:backdrop-brightness-80 transform duration-200 text-white"
      ,
      success: "bg-green-500 hover:bg-green-700",
};


const Button = ({
    onClick,
    varient="primary",
    disabled = false,
    children,
    type="button",
}) => {
    return (
        <button
            onClick={onClick}
            disabled = {disabled}
            className={` ${BASE_CLASSES} ${VARIANTS[varient] || ""}`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
