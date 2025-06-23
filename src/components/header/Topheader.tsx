import React from 'react'
import Container from '../Container'
import { FaTruckMoving } from 'react-icons/fa'
import { IoChevronDownSharp } from 'react-icons/io5'

const Topheader = () => {
  return (
    <div className='bg-black'>
      <Container className='max-w-screen-xl mx-auto px-4 py-1 flex justify-between'>
        <p className='w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1 text-white'>
          <FaTruckMoving className='text-yellow-400 text-2xl mr-1' /> FREE
          Express Shipping On Orders $570+
        </p>
        <div className='hidden md:inline-flex items-center text-sm'>
          <div>
            <p className='headerMenu flex items-center gap-1'>
              English
              <IoChevronDownSharp />
            </p>
          </div>
          <div>
            <p className='headerMenu flex items-center gap-1'>
              USD
              <IoChevronDownSharp />
            </p>
          </div>
          <div>
            <p className='headerMenu flex items-center gap-1'>
              {' '}
              Setting
              <IoChevronDownSharp />
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Topheader
