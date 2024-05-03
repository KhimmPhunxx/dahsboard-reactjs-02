import React, { useState } from 'react'
import { LuChevronFirst, LuLayoutDashboard, LuLifeBuoy, LuLogOut } from 'react-icons/lu'
import logo from '../../assets/logo.jpg'
import { NavLink, Outlet } from 'react-router-dom'
import { BiCategory, BiChevronDown, BiHome, BiLayer } from 'react-icons/bi'
import { CiSettings, CiStickyNote } from 'react-icons/ci'
import { BsCalendarDate, BsFlag } from 'react-icons/bs'
import pf from './../../assets/pf.jpg'
import { FaCartFlatbed } from 'react-icons/fa6'

function Sidebar_() {

    const [expanded, setExpanded] = useState(true)
    const [colapse, setColapse] = useState(true)

  return (
    <main className='flex'>
      <header className=' h-screen transition-all bg-white'>
        <nav className={`h-full border-r flex flex-col shadow-sm transition-all `}>
            <div className='p-4 pb-2 justify-between items-center flex'>
                <img className={` overflow-hidden transition-all ${expanded ? 'w-10' : 'w-0'} `} src={logo} alt="" />
                <button
                onClick={()=> setExpanded((curr) => !curr)}
                className=' p-1.5 rounded-lg bg-white hover:bg-indigo-200 hover:text-indigo-600 duration-200'>
                    <LuChevronFirst className={`text-2xl transition-all ${expanded ? '' : ' rotate-180'}`} />
                </button>
            </div>

            <div className='px-3'>
                <NavLink to={''} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BiHome className='text-xl' />
                    <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : 'w-0 transition-all'} `}>Home</span>
                   
                </NavLink>

                <NavLink to={'/dashboard'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <LuLayoutDashboard className='text-xl' />
                    <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Dashboard</span>
                </NavLink>

                <div className={` transition-all ${colapse ? ' bg-transparent':' bg-indigo-50 rounded-md'}`}>
                    <NavLink
                    onClick={()=> setColapse((curr) => !curr)}
                    className={({isActive})=> isActive ? `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                        <CiStickyNote className='text-xl' />
                        <p className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Projects</p> 
                       <BiChevronDown className={`text-xl transition-all ${colapse ? '' : ' rotate-180'} ${expanded ? 'block' : ' hidden'} `} />
                    </NavLink>
                    {/* creating Sub Menu */} 
                    <div className={`overflow-hidden duration-200 ${expanded ? 'px-4' : 'px-0'} ${colapse ? 'h-0 border-0' : 'h-[110px] block rounded-lg duration-200'}`}>
                        <NavLink to={'/project/all_project'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600  rounded-md text-sm flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md text-sm flex items-center transition-all`}>
                            <FaCartFlatbed className='text-xl' />
                            <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 hidden transition-all'} `}>All Projects</span>
                        </NavLink>
                        <NavLink to={'/project/add_project'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 text-sm rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md text-sm flex items-center transition-all`}>
                            <BiCategory className='text-xl' />
                            <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 hidden transition-all'} `}>Add Project</span>
                        </NavLink>
                    </div>
                </div>

                <NavLink to={'/calender'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BsCalendarDate className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Calendar</span>
                </NavLink>

                <NavLink to={'tasks'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BiLayer className='text-xl' />
                    <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Tasks</span>
                </NavLink>

                <NavLink to={'/reporting'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BsFlag className='text-xl' />
                    <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Reporting</span>
                </NavLink>  

                <hr className=' my-4 mx-3' />

                <NavLink to={'/setting'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <CiSettings className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Settings</span>
                </NavLink>

                <NavLink to={'/help'} className={({isActive})=> isActive ? `p-3 my-1 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-1 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <LuLifeBuoy className='text-xl' />
                    <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Help</span>
                </NavLink>
            </div>
 
            <div className=' px-3 flex bottom-0 fixed'>
                <NavLink to={'/login'} className={`p-3 my-2 bg-indigo-500 text-indigo-100 rounded-md flex items-center transition-all`}>
                    <LuLogOut className='text-xl' />
                    <span className={`overflow-hidden ${expanded ? 'ml-3 w-40 transition-all' : ' w-0 transition-all'} `}>Logout</span>
                </NavLink>
            </div>
        </nav>
      </header>

      <section className=' w-full mx-1 mt-1 rounded-lg'>
        <nav className=' w-full py-2 px-2 bg-gray-white shadow border rounded-sm flex justify-between bg-white'>
            <div>
               Hi
            </div>
            <div className='flex space-x-3'>
                <div className=' w-12 h-12 border rounded-md cursor-pointer'>
                    <img src={pf} className=' w-full h-full object-cover rounded-md border' alt="" />
                </div>
                <div>
                    <span className=' text-xl font-medium'>Mark </span>
                    <p className=' text-xs'>mark1@gmail.com</p>
                </div>
            </div>
        </nav>
        <div className='pt-4'>
        {
            <Outlet />
        }
        </div>
      </section>

    </main>
  )
}

export default Sidebar_
