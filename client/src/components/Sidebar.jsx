import React from 'react'
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({slectedUser , setSelectedUser}) => {
  const navigate = useNavigate()
  return (
      <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${setSelectedUser ? "max-md:hidden" : ''}`}>
          <div className='pb-5'>
           <div className='flex justify-between items-center'>
            {/* relpace with web logo */}
            <img src={assets.logo} alt="logo" className='max-w-40' />
            <div className='relative py-2 group'>
               <img src={assets.menu_icon} alt="menu"  className='max-h-5 cursor-pointer'/>
               <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block'>
                <p className='cursor-pointer text-sm' onClick={()=>navigate('/profile')}>Edit profile</p>
                <hr className='my-2 border-t border-gray-500'/>
                <p className='cursor-pointer text-sm'>Logout</p>
               </div>
            </div>
           </div>
           <div className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5'>
            <img src={assets.search_icon} alt="Search"  className='w-3'/>
            <input type="text" className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1' placeholder='Search user ...'/>
           </div>
          </div>
      </div>
  )
}

export default Sidebar