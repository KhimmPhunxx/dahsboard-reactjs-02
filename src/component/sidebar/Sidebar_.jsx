import React, { useContext, useState } from 'react'
import { LuChevronFirst, LuChevronLast, LuLayoutDashboard, LuLifeBuoy } from 'react-icons/lu'
import logo from '../../assets/logo.webp'
import profile from '../../assets/profile.webp'
import { CgMoreVertical } from 'react-icons/cg'
import { NavLink, Outlet } from 'react-router-dom'
import { BiHome, BiLayer } from 'react-icons/bi'
import { CiSettings, CiStickyNote } from 'react-icons/ci'
import { BsCalendarDate, BsFlag } from 'react-icons/bs'

function Sidebar_() {

    const [expanded, setExpanded] = useState(true)

  return (
    <main className='flex'>
      <header className=' h-screen transition-all'>
        <nav className={`h-full border-r flex flex-col shadow-sm transition-all `}>
            <div className='p-4 pb-2 justify-between items-center flex'>
                <img className={` overflow-hidden transition-all ${expanded ? 'w-14' : 'w-0'} `} src={logo} alt="" />
                <button
                onClick={()=> setExpanded((curr) => !curr)}
                className=' p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    {expanded ? <LuChevronFirst className='text-2xl' /> : <LuChevronLast className='text-2xl' />}
                </button>
            </div>

            <div className='px-3'>

                <NavLink to={''} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BiHome className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : 'w-0 transition-all'} `}>Home</span>
                   
                </NavLink>

                <NavLink to={'/dashboard'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <LuLayoutDashboard className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Dashboard</span>
                </NavLink>

                <NavLink to={'/project'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <CiStickyNote className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Projects</span>
                </NavLink>

                <NavLink to={'/calender'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BsCalendarDate className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Calendar</span>
                </NavLink>

                <NavLink to={'tasks'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BiLayer className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Tasks</span>
                </NavLink>

                <NavLink to={'/reporting'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <BsFlag className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Reporting</span>
                </NavLink>  

                <hr className=' my-3' />

                <NavLink to={'/setting'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <CiSettings className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Settings</span>
                </NavLink>

                <NavLink to={'/help'} className={({isActive})=> isActive ? `p-3 my-2 bg-indigo-100 text-indigo-600 rounded-md flex items-center transition-all` : `p-3 my-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-md flex items-center transition-all`}>
                    <LuLifeBuoy className='text-xl' />
                    <span className={` overflow-hidden ${expanded ? 'ml-3 w-52 transition-all' : ' w-0 transition-all'} `}>Help</span>
                </NavLink>

            </div>

            <div className=' border-t flex p-3 bottom-0 fixed'>
                <img className='w-[33px] object-cover rounded-full' src={profile} alt="" />
                <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'} `}>
                    <div className=' leading-4'>
                        <h1 className=' font-semibold'>ImVakhim</h1>
                        <span className=' text-xs text-gray-500'>vakhimim11@gmail.com</span>
                    </div>
                    <CgMoreVertical className='text-lg' />
                </div>
            </div>
        </nav>
      </header>
      <section className=' w-full mx-5 mt-2 rounded-lg'>
        <nav className=' w-full py-3 px-2 bg-gray-white shadow border rounded-sm'>
                Hello
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
