import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";

const navOptions = [
    {
        name: "Dashboard",
        icon: TbLayoutDashboardFilled
    },
    {
        name: "Bookings",
        icon: IoCalendarOutline
    },
    {
        name: "Cabins",
        icon: HiOutlineHomeModern
    },
    {
        name: "Users",
        icon: HiOutlineUsers
    },
    {
        name: "Settings",
        icon: IoSettingsOutline
    },
];

const MainNav = () => {
    return (
        <nav aria-label='Main navigation'>
            <ul className='flex flex-col gap-2'>
                {
                    navOptions.map((option) => {
                        const Icon = option.icon;
                        return <li key={option.name}>
                            <NavLink
                                to={option.name.toLowerCase()}
                                className={({ isActive }) => `transform duration-300 flex items-center gap-2 py-3 px-4 rounded-md  hover:bg-gray-300 hover:text-gray-700 group ${isActive && "bg-gray-300 text-gray-800"}`}>
                                {
                                    ({ isActive }) => (
                                        <>
                                            <Icon color={isActive?"purple":""} className={`size-4.5 group-hover:text-purple-600 transform duration-200
                                                `} />
                                            <span className='text-sm font-light'>{option.name}</span>
                                        </>
                                    )
                                }

                            </NavLink>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default MainNav
