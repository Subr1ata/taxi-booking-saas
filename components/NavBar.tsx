import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-sm'>
      <div className='flex gap-10 items-center'>
        <Image src='/logo.png' height={60} width={120} className='w-40 h-120' alt='logo' priority />
        <div className='hidden md:flex gap-6'>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
        </div>
      </div>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
