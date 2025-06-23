import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const HeaderIcon = () => {
  return (
    <div className='flex justify-center items-center gap-6'>
      <Link
        href={'/favourite'}
        className='text-2xl relative hover:text-blue-600 transition-colors'
      >
        <MdFavoriteBorder />
        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold'>
          0
        </span>
      </Link>
      <Link
        href={'/cart'}
        className='text-2xl relative hover:text-blue-600 transition-colors'
      >
        <BiShoppingBag />
        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold'>
          0
        </span>
      </Link>
    </div>
  )
}

export default HeaderIcon
