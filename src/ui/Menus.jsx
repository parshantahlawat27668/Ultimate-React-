import React, { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useOutsideClick } from '../hooks/useOutsideClick';


const MenusContext = createContext();
const Menus = ({children}) => {
    const [openId, setOpenId] = useState("");
    const [position, setPosition] = useState(null);
    const close = ()=> setOpenId("");
    const open = setOpenId;

  return  <MenusContext.Provider value={{openId, open, close, position, setPosition}}>{children}
  </MenusContext.Provider>
}

function Menu({children}){
    return (
        <div className='flex items-center justify-end'>
            {children}
        </div>
    );
}

function Toggle({id}){
    const {openId, open, close, setPosition} = useContext(MenusContext);

    const handleClick = (e)=>{
       const rect = e.target.closest("button").getBoundingClientRect();
       setPosition({
        x:window.innerWidth - rect.width - rect.x,
        y:rect.y + rect.height + 8
       });
        openId === "" || openId !== id ? open(id ): close();

    }
    return (
    <button
    className='cursor-pointer bg-none border-none p-'
    onClick={handleClick}>
        <HiOutlineDotsVertical />
    </button>
);
}

function List({id, children}){
    const {openId, position, close} = useContext(MenusContext);
    const ref = useOutsideClick(close);

    if(openId !== id) return null;

    return createPortal(
        <ul
        ref={ref}
        className={`fixed z-50 shadow-xl shadow-gray-700`}
        style={{
            top:Math.round(position?.y),
            right:Math.round(position?.x)
        }}
        >
        {children}
        </ul>,
        document.body
    );

}

function Button({children, icon, onClick}){
    const {close} = useContext(MenusContext);
   const  handleClick = ()=>{
    onClick?.();
    close();
   }
    return (
    <li>
        <button
        onClick={handleClick}
        className='w-38 text-left bg-none border-none py-2.5 px-3 text-sm flex items-center gap-3 cursor-pointer hover:bg-blue bg-gray-600 text-white hover:bg-gray-500 font-semibold'>
            {icon}
            {children}
        </button>
    </li> 
);
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus
