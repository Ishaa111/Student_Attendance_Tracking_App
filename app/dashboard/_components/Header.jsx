"use client"
import { UserButton } from '@clerk/nextjs';
import React from 'react'

function Header() {
  return (
    <div className='p-4 shadow-md border-b flex justify-between'>
      <div>
       

      </div>
      <div>
        <UserButton />
      </div>

    </div>
  )
}

export default Header