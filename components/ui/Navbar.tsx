import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 '>
      <Link href="/" className="flex items-center gap-1">
        <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt="zoom logo"
        className='max-sm:size-10'
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zoom 
        </p>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav/>
      </div>
    </div>
  )
}

export default Navbar
