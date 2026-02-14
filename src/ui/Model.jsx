import React, { cloneElement, createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom';
import { HiOutlineX } from "react-icons/hi";
import { useOutsideClick } from '../hooks/useOutsideClick';
const ModelContext = createContext();

const Model = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const openWindow = setOpenName;

  return <ModelContext.Provider value={{ openWindow, close, openName }} >
    {children}
  </ModelContext.Provider>
}

const Open = ({ children, opens }) => {
  const { openWindow } = useContext(ModelContext);

  return cloneElement(children, { onClick: () => openWindow(opens) });
}


const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModelContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className='fixed inset-0 z-10 bg-black/40 backdrop-blur-sm transition-all duration-500'>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-gray-900 text-white rounded-lg shadow-xl  px-10 py-7 transition-all duration-500  max-w-[80%] z-50'
        ref={ref}
      >
        <button
          onClick={close}
          className='absolute top-3.5 right-2.5 cursor-pointer p-1 text-gray-600 hover:text-gray-900'>
          <HiOutlineX size={20} />
        </button>
        {cloneElement(children, { closeModel: close })}
      </div>
    </div>,
    document.body
  )
}

Model.Open = Open;
Model.Window = Window;

export default Model
