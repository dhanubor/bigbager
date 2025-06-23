'use client'
import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <div className='hidden md:flex flex-1 relative'>
      <input
        type='text'
        name='search'
        id='search'
        className='w-full py-2 pl-4 pr-12 border border-blue-500 rounded-md outline-none placeholder-gray-500'
        placeholder='Search your product'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Clear Button */}
      {search && (
        <AiOutlineCloseCircle
          onClick={() => setSearch('')}
          className='absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 cursor-pointer text-xl'
        />
      )}

      {/* Search Button */}
      <button
        type='submit'
        className='absolute right-2 top-1/2 -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md cursor-pointer'
      >
        <IoSearch className='text-lg' />
      </button>
    </div>
  )
}

export default SearchInput
