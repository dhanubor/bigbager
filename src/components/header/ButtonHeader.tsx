import React from 'react'
import Container from '../Container'
import { navigation } from '@/constants'
import Link from 'next/link'

const ButtonHeader = () => {
  return (
    <div className='border-b border-b-gray-400'>
      <Container>
        <div className='text-xs md:text-sm font-medium flex items-center gap-5 '>
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className='hover:text-blue-500'
            >
              {item?.title}
            </Link>
          ))}
          <Link className='hover:text-blue-500' href={'/sine-up'}>
            Sine Up
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default ButtonHeader
