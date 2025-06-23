'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { RiMenu3Fill } from 'react-icons/ri'
import { navigation } from './../../constants/index'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false) // Initially closed

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Menu Toggle Button */}
      <div
        onClick={toggleMenu}
        className='text-2xl md:hidden text-gray-500 hover:text-blue-500 cursor-pointer transition-colors'
      >
        <RiMenu3Fill />
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={isOpen}
        onClose={closeMenu}
        className='relative z-50 md:hidden'
      >
        {/* Backdrop */}
        <DialogBackdrop className='fixed inset-0 bg-black/50 transition-opacity' />

        {/* Dialog Container */}
        <div className='fixed inset-0 flex'>
          {/* Dialog Panel */}
          <DialogPanel className='relative flex w-full max-w-xs flex-col bg-white shadow-xl'>
            {/* Header */}
            <div className='flex items-center justify-between px-6 py-4 border-b'>
              <h2 className='text-lg font-semibold text-gray-900'>
                Navigation Menu
              </h2>
              <button
                onClick={closeMenu}
                className='text-gray-400 hover:text-gray-600 transition-colors'
              >
                <MdClose className='text-xl' />
              </button>
            </div>

            {/* Navigation Links */}
            <div className='flex-1 px-6 py-6'>
              <nav className='space-y-4'>
                {navigation?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.href}
                    onClick={closeMenu} // Close menu when link is clicked
                    className='block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 font-medium'
                  >
                    {item?.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Footer (Optional) */}
            <div className='px-6 py-4 border-t bg-gray-50'>
              <p className='text-sm text-gray-500 text-center'>
                © 2025 Your Company
              </p>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileMenu
