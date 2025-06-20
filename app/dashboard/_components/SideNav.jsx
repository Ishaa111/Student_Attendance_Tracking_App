"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {GraduationCap, LayoutIcon, Hand,Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideNav() {

  const menuList=[  
    {
      id:1,
      name:'Dashboard',
      icon:LayoutIcon,
      path:'/dashboard'
    },
    {
      id:2,
      name:'Students',
      icon:GraduationCap,
      path:'/dashboard/students'
    },
    {
      id:3,
      name:'Attendance',
      icon:Hand,
      path:'/dashboard/attendance'
    },
    {
      id:4,
      name:'Settings',
      icon:Settings,
      path:'/dashboard/settings'
    },

  ]
  const path=usePathname();
  useEffect(()=>{
    console.log(path)
  },[path])
  return (
    <div className='border shadow-md h-screen p-5  '>  
        <Image
        src={'/logo.svg'}  
        width={120} 
        height={30} 
        alt='logo'/>

      <hr className='my-5'></hr> 

      {menuList.map((menu,index)=>(
        <Link href={menu.path}>
          <h2 className={`flex items-center gap-3 text-md p-4
          text-slate-500
          hover:bg-primary
          hover:text-white
          cursor-pointer
          rounded-lg
          my-2
          ${path==menu.path&&'bg-primary text-white'}
          `}>
              <menu.icon/>
              {menu.name}
          </h2>
        </Link>
      ))}

    </div>
  )
}

export default SideNav